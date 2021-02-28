./protoc --java_out=./java/ --csharp_out=./csharp/ ./proto/client.proto
./protoc --java_out=./java/ --csharp_out=./csharp/ ./proto/server.proto

./protoc --java_out=./java/ --csharp_out=./csharp/ ./proto/proxy-client.proto
./protoc --java_out=./java/ --csharp_out=./csharp/ ./proto/proxy-server.proto