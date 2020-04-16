all: lolgameclient/

openapi.json:
	wget --ca-certificate riotgames.pem https://127.0.0.1:2999/swagger/v3/openapi.json | node rewrite.js > openapi.json

openapi-generator-cli.jar:
	wget https://repo1.maven.org/maven2/org/openapitools/openapi-generator-cli/4.3.0/openapi-generator-cli-4.3.0.jar -O openapi-generator-cli.jar

lolgameclient/: openapi-generator-cli.jar openapi.json lolgameclient/go.mod
	java -jar openapi-generator-cli.jar generate -i openapi.json -g go --skip-validate-spec -o lolgameclient/

lolgameclient/go.mod:
	mkdir -p lolgameclient
	cd lolgameclient &&	go mod init github.com/danpantry/lolgameclient && cd -
