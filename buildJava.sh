./protoc --java_out=./java/ ./proto/client.proto
./protoc --java_out=./java/ ./proto/server.proto

./protoc --java_out=./java/ ./proto/auth-client.proto
./protoc --java_out=./java/ ./proto/auth-server.proto