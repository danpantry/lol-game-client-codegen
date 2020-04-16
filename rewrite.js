// Rewrites the non-compliant swagger spec given via stdin to a standards compliant one
// This is because the v3 openapi spec given to us from the lolcient is not actually compliant and will fail code generation
const chunks = [];
process.stdin.on("data", (data) => {
  chunks.push(data);
});

process.stdin.on("end", () => {
  const buf = Buffer.concat(chunks);
  const document = JSON.parse(buf);
  const rewritten = rewriteJSON(document);
  const json = JSON.stringify(rewritten);
  process.stdout.write(json);
  process.stdout.write("\n");
});

function moveKeysToSchema(object, keys) {
  if ("schema" in object === false) {
    object.schema = {};
  }

  for (const key of keys) {
    if (key in object) {
      object.schema[key] = object[key];
      delete object[key];
    }
  }
}

function rewriteJSON(document) {
  const clone = { ...document };

  const pathsToRemove = [];
  for (const key of Object.keys(clone.paths)) {
    const path = clone.paths[key];
    for (const config of Object.values(path)) {
      if ("tags" in config) {
        // If this has a builtin tag, flag it to be removed.
        if (config.tags.includes("builtin")) {
          pathsToRemove.push(key);
          continue;
        }

        // Remove tags - The go generator will duplicate code for each tag, leading to compiler errors. Woops!
        delete config.tags;
      }

      // Rewrite path parameters to use the correct format
      if ("parameters" in config) {
        for (const param of config.parameters) {
          moveKeysToSchema(param, ["enum", "format", "type"]);
        }
      }
    }
  }

  // Remove all builtins.
  for (const path of pathsToRemove) {
    delete clone.paths[path];
  }

  // Add the server parameter so we actually know where to contact
  clone.servers = [{ url: "https://127.0.0.1:2999" }];

  // Remove unused models
  const unused = [
    "BindingFullTypeHelp",
    "BindingFullTypeIdentifier",
    "BindingAsyncCancelEvent",
    "BindingGenericEvent",
    "BindingFullEventHelp",
    "BindingCallbackEvent",
    "AbilityResource",
    "BindingHelpFormat",
    "RemotingSerializedFormat",
    "BindingFullApiHelp",
    "BindingAsyncState",
    "BindingAsyncFailureEvent",
    "Vector2f",
    "Vector3f",
    "Vector4f",
    "BindingFullArgumentHelp",
    "BindingFullFieldHelp",
    "BindingGenericAsyncEvent",
    "TeamID",
    "BindingFullFunctionHelp",
    "Color",
    "RemotingHelpFormat",
    "RemotingPrivilege",
    "BindingFullEnumValueHelp",
  ];

  for (const key of unused) {
    delete clone.components.schemas[key];
  }

  return clone;
}
