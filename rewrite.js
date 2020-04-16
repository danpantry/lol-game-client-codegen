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

function rewritePathParamSchemas(config) {
  if ("parameters" in config === false) {
    return;
  }

  for (const param of config.parameters) {
    moveKeysToSchema(param, ["enum", "format", "type"]);
  }
}

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
  // Rewrite path parameters to use the correct format
  for (const path of Object.values(clone.paths)) {
    for (const config of Object.values(path)) {
      rewritePathParamSchemas(config);
    }
  }

  return clone;
}
