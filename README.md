VoxelSrv is using Protocol Buffers with additional byte (ID) at the beginning.
Everything is sent via WebSockets with ArrayBuffers.

If you want to use it, you should check:
- Information about [Protocol Buffers](https://developers.google.com/protocol-buffers)
- Example Typescript implementation: [voxelsrv-server/protocol.ts](https://github.com/VoxelSrv/voxelsrv-server/blob/0.2.0/src/lib/protocol.ts)
- [Javascript implementation of Protocol Buffers](https://www.npmjs.com/package/protobufjs)
