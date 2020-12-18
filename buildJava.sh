./protoc --java_out=./java/ ./proto/client.proto
./protoc --java_out=./java/ ./proto/server.proto

./protoc --java_out=./java/ ./proto/proxy-client.proto
./protoc --java_out=./java/ ./proto/proxy-server.proto