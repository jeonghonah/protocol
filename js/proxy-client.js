/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
(function(global, factory) { /* global define, require, module */

    /* AMD */ if (typeof define === 'function' && define.amd)
        define(["protobufjs/minimal"], factory);

    /* CommonJS */ else if (typeof require === 'function' && typeof module === 'object' && module && module.exports)
        module.exports = factory(require("protobufjs/minimal"));

})(this, function($protobuf) {
    "use strict";

    // Common aliases
    var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
    
    // Exported root namespace
    var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});
    
    $root.AuthRequest = (function() {
    
        /**
         * Properties of an AuthRequest.
         * @exports IAuthRequest
         * @interface IAuthRequest
         * @property {string|null} [username] AuthRequest username
         * @property {number|null} [protocol] AuthRequest protocol
         * @property {string|null} [client] AuthRequest client
         * @property {string|null} [uuid] AuthRequest uuid
         * @property {string|null} [secret] AuthRequest secret
         * @property {string|null} [serverId] AuthRequest serverId
         * @property {number|null} [proxySupportedVersion] AuthRequest proxySupportedVersion
         */
    
        /**
         * Constructs a new AuthRequest.
         * @exports AuthRequest
         * @classdesc Represents an AuthRequest.
         * @implements IAuthRequest
         * @constructor
         * @param {IAuthRequest=} [properties] Properties to set
         */
        function AuthRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * AuthRequest username.
         * @member {string} username
         * @memberof AuthRequest
         * @instance
         */
        AuthRequest.prototype.username = "";
    
        /**
         * AuthRequest protocol.
         * @member {number} protocol
         * @memberof AuthRequest
         * @instance
         */
        AuthRequest.prototype.protocol = 0;
    
        /**
         * AuthRequest client.
         * @member {string} client
         * @memberof AuthRequest
         * @instance
         */
        AuthRequest.prototype.client = "";
    
        /**
         * AuthRequest uuid.
         * @member {string} uuid
         * @memberof AuthRequest
         * @instance
         */
        AuthRequest.prototype.uuid = "";
    
        /**
         * AuthRequest secret.
         * @member {string} secret
         * @memberof AuthRequest
         * @instance
         */
        AuthRequest.prototype.secret = "";
    
        /**
         * AuthRequest serverId.
         * @member {string} serverId
         * @memberof AuthRequest
         * @instance
         */
        AuthRequest.prototype.serverId = "";
    
        /**
         * AuthRequest proxySupportedVersion.
         * @member {number} proxySupportedVersion
         * @memberof AuthRequest
         * @instance
         */
        AuthRequest.prototype.proxySupportedVersion = 0;
    
        /**
         * Creates a new AuthRequest instance using the specified properties.
         * @function create
         * @memberof AuthRequest
         * @static
         * @param {IAuthRequest=} [properties] Properties to set
         * @returns {AuthRequest} AuthRequest instance
         */
        AuthRequest.create = function create(properties) {
            return new AuthRequest(properties);
        };
    
        /**
         * Encodes the specified AuthRequest message. Does not implicitly {@link AuthRequest.verify|verify} messages.
         * @function encode
         * @memberof AuthRequest
         * @static
         * @param {IAuthRequest} message AuthRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AuthRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.username != null && Object.hasOwnProperty.call(message, "username"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.username);
            if (message.protocol != null && Object.hasOwnProperty.call(message, "protocol"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.protocol);
            if (message.client != null && Object.hasOwnProperty.call(message, "client"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.client);
            if (message.uuid != null && Object.hasOwnProperty.call(message, "uuid"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.uuid);
            if (message.secret != null && Object.hasOwnProperty.call(message, "secret"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.secret);
            if (message.serverId != null && Object.hasOwnProperty.call(message, "serverId"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.serverId);
            if (message.proxySupportedVersion != null && Object.hasOwnProperty.call(message, "proxySupportedVersion"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.proxySupportedVersion);
            return writer;
        };
    
        /**
         * Encodes the specified AuthRequest message, length delimited. Does not implicitly {@link AuthRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AuthRequest
         * @static
         * @param {IAuthRequest} message AuthRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AuthRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes an AuthRequest message from the specified reader or buffer.
         * @function decode
         * @memberof AuthRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AuthRequest} AuthRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AuthRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AuthRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.username = reader.string();
                    break;
                case 2:
                    message.protocol = reader.uint32();
                    break;
                case 3:
                    message.client = reader.string();
                    break;
                case 4:
                    message.uuid = reader.string();
                    break;
                case 5:
                    message.secret = reader.string();
                    break;
                case 6:
                    message.serverId = reader.string();
                    break;
                case 7:
                    message.proxySupportedVersion = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes an AuthRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AuthRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AuthRequest} AuthRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AuthRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies an AuthRequest message.
         * @function verify
         * @memberof AuthRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AuthRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.username != null && message.hasOwnProperty("username"))
                if (!$util.isString(message.username))
                    return "username: string expected";
            if (message.protocol != null && message.hasOwnProperty("protocol"))
                if (!$util.isInteger(message.protocol))
                    return "protocol: integer expected";
            if (message.client != null && message.hasOwnProperty("client"))
                if (!$util.isString(message.client))
                    return "client: string expected";
            if (message.uuid != null && message.hasOwnProperty("uuid"))
                if (!$util.isString(message.uuid))
                    return "uuid: string expected";
            if (message.secret != null && message.hasOwnProperty("secret"))
                if (!$util.isString(message.secret))
                    return "secret: string expected";
            if (message.serverId != null && message.hasOwnProperty("serverId"))
                if (!$util.isString(message.serverId))
                    return "serverId: string expected";
            if (message.proxySupportedVersion != null && message.hasOwnProperty("proxySupportedVersion"))
                if (!$util.isInteger(message.proxySupportedVersion))
                    return "proxySupportedVersion: integer expected";
            return null;
        };
    
        /**
         * Creates an AuthRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AuthRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AuthRequest} AuthRequest
         */
        AuthRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.AuthRequest)
                return object;
            var message = new $root.AuthRequest();
            if (object.username != null)
                message.username = String(object.username);
            if (object.protocol != null)
                message.protocol = object.protocol >>> 0;
            if (object.client != null)
                message.client = String(object.client);
            if (object.uuid != null)
                message.uuid = String(object.uuid);
            if (object.secret != null)
                message.secret = String(object.secret);
            if (object.serverId != null)
                message.serverId = String(object.serverId);
            if (object.proxySupportedVersion != null)
                message.proxySupportedVersion = object.proxySupportedVersion >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from an AuthRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AuthRequest
         * @static
         * @param {AuthRequest} message AuthRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AuthRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.username = "";
                object.protocol = 0;
                object.client = "";
                object.uuid = "";
                object.secret = "";
                object.serverId = "";
                object.proxySupportedVersion = 0;
            }
            if (message.username != null && message.hasOwnProperty("username"))
                object.username = message.username;
            if (message.protocol != null && message.hasOwnProperty("protocol"))
                object.protocol = message.protocol;
            if (message.client != null && message.hasOwnProperty("client"))
                object.client = message.client;
            if (message.uuid != null && message.hasOwnProperty("uuid"))
                object.uuid = message.uuid;
            if (message.secret != null && message.hasOwnProperty("secret"))
                object.secret = message.secret;
            if (message.serverId != null && message.hasOwnProperty("serverId"))
                object.serverId = message.serverId;
            if (message.proxySupportedVersion != null && message.hasOwnProperty("proxySupportedVersion"))
                object.proxySupportedVersion = message.proxySupportedVersion;
            return object;
        };
    
        /**
         * Converts this AuthRequest to JSON.
         * @function toJSON
         * @memberof AuthRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AuthRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return AuthRequest;
    })();
    
    $root.Ready = (function() {
    
        /**
         * Properties of a Ready.
         * @exports IReady
         * @interface IReady
         * @property {boolean|null} [ready] Ready ready
         */
    
        /**
         * Constructs a new Ready.
         * @exports Ready
         * @classdesc Represents a Ready.
         * @implements IReady
         * @constructor
         * @param {IReady=} [properties] Properties to set
         */
        function Ready(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Ready ready.
         * @member {boolean} ready
         * @memberof Ready
         * @instance
         */
        Ready.prototype.ready = false;
    
        /**
         * Creates a new Ready instance using the specified properties.
         * @function create
         * @memberof Ready
         * @static
         * @param {IReady=} [properties] Properties to set
         * @returns {Ready} Ready instance
         */
        Ready.create = function create(properties) {
            return new Ready(properties);
        };
    
        /**
         * Encodes the specified Ready message. Does not implicitly {@link Ready.verify|verify} messages.
         * @function encode
         * @memberof Ready
         * @static
         * @param {IReady} message Ready message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Ready.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ready != null && Object.hasOwnProperty.call(message, "ready"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.ready);
            return writer;
        };
    
        /**
         * Encodes the specified Ready message, length delimited. Does not implicitly {@link Ready.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Ready
         * @static
         * @param {IReady} message Ready message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Ready.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a Ready message from the specified reader or buffer.
         * @function decode
         * @memberof Ready
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Ready} Ready
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Ready.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Ready();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ready = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a Ready message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Ready
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Ready} Ready
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Ready.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a Ready message.
         * @function verify
         * @memberof Ready
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Ready.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ready != null && message.hasOwnProperty("ready"))
                if (typeof message.ready !== "boolean")
                    return "ready: boolean expected";
            return null;
        };
    
        /**
         * Creates a Ready message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Ready
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Ready} Ready
         */
        Ready.fromObject = function fromObject(object) {
            if (object instanceof $root.Ready)
                return object;
            var message = new $root.Ready();
            if (object.ready != null)
                message.ready = Boolean(object.ready);
            return message;
        };
    
        /**
         * Creates a plain object from a Ready message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Ready
         * @static
         * @param {Ready} message Ready
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Ready.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.ready = false;
            if (message.ready != null && message.hasOwnProperty("ready"))
                object.ready = message.ready;
            return object;
        };
    
        /**
         * Converts this Ready to JSON.
         * @function toJSON
         * @memberof Ready
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Ready.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return Ready;
    })();
    
    $root.Data = (function() {
    
        /**
         * Properties of a Data.
         * @exports IData
         * @interface IData
         * @property {Uint8Array|null} [message] Data message
         */
    
        /**
         * Constructs a new Data.
         * @exports Data
         * @classdesc Represents a Data.
         * @implements IData
         * @constructor
         * @param {IData=} [properties] Properties to set
         */
        function Data(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Data message.
         * @member {Uint8Array} message
         * @memberof Data
         * @instance
         */
        Data.prototype.message = $util.newBuffer([]);
    
        /**
         * Creates a new Data instance using the specified properties.
         * @function create
         * @memberof Data
         * @static
         * @param {IData=} [properties] Properties to set
         * @returns {Data} Data instance
         */
        Data.create = function create(properties) {
            return new Data(properties);
        };
    
        /**
         * Encodes the specified Data message. Does not implicitly {@link Data.verify|verify} messages.
         * @function encode
         * @memberof Data
         * @static
         * @param {IData} message Data message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Data.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.message);
            return writer;
        };
    
        /**
         * Encodes the specified Data message, length delimited. Does not implicitly {@link Data.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Data
         * @static
         * @param {IData} message Data message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Data.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a Data message from the specified reader or buffer.
         * @function decode
         * @memberof Data
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Data} Data
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Data.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Data();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.message = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a Data message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Data
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Data} Data
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Data.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a Data message.
         * @function verify
         * @memberof Data
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Data.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.message != null && message.hasOwnProperty("message"))
                if (!(message.message && typeof message.message.length === "number" || $util.isString(message.message)))
                    return "message: buffer expected";
            return null;
        };
    
        /**
         * Creates a Data message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Data
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Data} Data
         */
        Data.fromObject = function fromObject(object) {
            if (object instanceof $root.Data)
                return object;
            var message = new $root.Data();
            if (object.message != null)
                if (typeof object.message === "string")
                    $util.base64.decode(object.message, message.message = $util.newBuffer($util.base64.length(object.message)), 0);
                else if (object.message.length)
                    message.message = object.message;
            return message;
        };
    
        /**
         * Creates a plain object from a Data message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Data
         * @static
         * @param {Data} message Data
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Data.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if (options.bytes === String)
                    object.message = "";
                else {
                    object.message = [];
                    if (options.bytes !== Array)
                        object.message = $util.newBuffer(object.message);
                }
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = options.bytes === String ? $util.base64.encode(message.message, 0, message.message.length) : options.bytes === Array ? Array.prototype.slice.call(message.message) : message.message;
            return object;
        };
    
        /**
         * Converts this Data to JSON.
         * @function toJSON
         * @memberof Data
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Data.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return Data;
    })();
    
    $root.VoxelSrvMessage = (function() {
    
        /**
         * Properties of a VoxelSrvMessage.
         * @exports IVoxelSrvMessage
         * @interface IVoxelSrvMessage
         * @property {Uint8Array|null} [message] VoxelSrvMessage message
         */
    
        /**
         * Constructs a new VoxelSrvMessage.
         * @exports VoxelSrvMessage
         * @classdesc Represents a VoxelSrvMessage.
         * @implements IVoxelSrvMessage
         * @constructor
         * @param {IVoxelSrvMessage=} [properties] Properties to set
         */
        function VoxelSrvMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * VoxelSrvMessage message.
         * @member {Uint8Array} message
         * @memberof VoxelSrvMessage
         * @instance
         */
        VoxelSrvMessage.prototype.message = $util.newBuffer([]);
    
        /**
         * Creates a new VoxelSrvMessage instance using the specified properties.
         * @function create
         * @memberof VoxelSrvMessage
         * @static
         * @param {IVoxelSrvMessage=} [properties] Properties to set
         * @returns {VoxelSrvMessage} VoxelSrvMessage instance
         */
        VoxelSrvMessage.create = function create(properties) {
            return new VoxelSrvMessage(properties);
        };
    
        /**
         * Encodes the specified VoxelSrvMessage message. Does not implicitly {@link VoxelSrvMessage.verify|verify} messages.
         * @function encode
         * @memberof VoxelSrvMessage
         * @static
         * @param {IVoxelSrvMessage} message VoxelSrvMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VoxelSrvMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.message);
            return writer;
        };
    
        /**
         * Encodes the specified VoxelSrvMessage message, length delimited. Does not implicitly {@link VoxelSrvMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof VoxelSrvMessage
         * @static
         * @param {IVoxelSrvMessage} message VoxelSrvMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VoxelSrvMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a VoxelSrvMessage message from the specified reader or buffer.
         * @function decode
         * @memberof VoxelSrvMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {VoxelSrvMessage} VoxelSrvMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VoxelSrvMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.VoxelSrvMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.message = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a VoxelSrvMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof VoxelSrvMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {VoxelSrvMessage} VoxelSrvMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VoxelSrvMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a VoxelSrvMessage message.
         * @function verify
         * @memberof VoxelSrvMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        VoxelSrvMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.message != null && message.hasOwnProperty("message"))
                if (!(message.message && typeof message.message.length === "number" || $util.isString(message.message)))
                    return "message: buffer expected";
            return null;
        };
    
        /**
         * Creates a VoxelSrvMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof VoxelSrvMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {VoxelSrvMessage} VoxelSrvMessage
         */
        VoxelSrvMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.VoxelSrvMessage)
                return object;
            var message = new $root.VoxelSrvMessage();
            if (object.message != null)
                if (typeof object.message === "string")
                    $util.base64.decode(object.message, message.message = $util.newBuffer($util.base64.length(object.message)), 0);
                else if (object.message.length)
                    message.message = object.message;
            return message;
        };
    
        /**
         * Creates a plain object from a VoxelSrvMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof VoxelSrvMessage
         * @static
         * @param {VoxelSrvMessage} message VoxelSrvMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        VoxelSrvMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if (options.bytes === String)
                    object.message = "";
                else {
                    object.message = [];
                    if (options.bytes !== Array)
                        object.message = $util.newBuffer(object.message);
                }
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = options.bytes === String ? $util.base64.encode(message.message, 0, message.message.length) : options.bytes === Array ? Array.prototype.slice.call(message.message) : message.message;
            return object;
        };
    
        /**
         * Converts this VoxelSrvMessage to JSON.
         * @function toJSON
         * @memberof VoxelSrvMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        VoxelSrvMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return VoxelSrvMessage;
    })();
    
    $root.ProxyMessage = (function() {
    
        /**
         * Properties of a ProxyMessage.
         * @exports IProxyMessage
         * @interface IProxyMessage
         * @property {Uint8Array|null} [message] ProxyMessage message
         */
    
        /**
         * Constructs a new ProxyMessage.
         * @exports ProxyMessage
         * @classdesc Represents a ProxyMessage.
         * @implements IProxyMessage
         * @constructor
         * @param {IProxyMessage=} [properties] Properties to set
         */
        function ProxyMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * ProxyMessage message.
         * @member {Uint8Array} message
         * @memberof ProxyMessage
         * @instance
         */
        ProxyMessage.prototype.message = $util.newBuffer([]);
    
        /**
         * Creates a new ProxyMessage instance using the specified properties.
         * @function create
         * @memberof ProxyMessage
         * @static
         * @param {IProxyMessage=} [properties] Properties to set
         * @returns {ProxyMessage} ProxyMessage instance
         */
        ProxyMessage.create = function create(properties) {
            return new ProxyMessage(properties);
        };
    
        /**
         * Encodes the specified ProxyMessage message. Does not implicitly {@link ProxyMessage.verify|verify} messages.
         * @function encode
         * @memberof ProxyMessage
         * @static
         * @param {IProxyMessage} message ProxyMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ProxyMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.message);
            return writer;
        };
    
        /**
         * Encodes the specified ProxyMessage message, length delimited. Does not implicitly {@link ProxyMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ProxyMessage
         * @static
         * @param {IProxyMessage} message ProxyMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ProxyMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a ProxyMessage message from the specified reader or buffer.
         * @function decode
         * @memberof ProxyMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ProxyMessage} ProxyMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ProxyMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ProxyMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.message = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a ProxyMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ProxyMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ProxyMessage} ProxyMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ProxyMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a ProxyMessage message.
         * @function verify
         * @memberof ProxyMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ProxyMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.message != null && message.hasOwnProperty("message"))
                if (!(message.message && typeof message.message.length === "number" || $util.isString(message.message)))
                    return "message: buffer expected";
            return null;
        };
    
        /**
         * Creates a ProxyMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ProxyMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ProxyMessage} ProxyMessage
         */
        ProxyMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.ProxyMessage)
                return object;
            var message = new $root.ProxyMessage();
            if (object.message != null)
                if (typeof object.message === "string")
                    $util.base64.decode(object.message, message.message = $util.newBuffer($util.base64.length(object.message)), 0);
                else if (object.message.length)
                    message.message = object.message;
            return message;
        };
    
        /**
         * Creates a plain object from a ProxyMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ProxyMessage
         * @static
         * @param {ProxyMessage} message ProxyMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ProxyMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if (options.bytes === String)
                    object.message = "";
                else {
                    object.message = [];
                    if (options.bytes !== Array)
                        object.message = $util.newBuffer(object.message);
                }
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = options.bytes === String ? $util.base64.encode(message.message, 0, message.message.length) : options.bytes === Array ? Array.prototype.slice.call(message.message) : message.message;
            return object;
        };
    
        /**
         * Converts this ProxyMessage to JSON.
         * @function toJSON
         * @memberof ProxyMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ProxyMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return ProxyMessage;
    })();
    
    $root.ChatComponentType = (function() {
    
        /**
         * Properties of a ChatComponentType.
         * @exports IChatComponentType
         * @interface IChatComponentType
         * @property {string|null} [text] ChatComponentType text
         * @property {string|null} [font] ChatComponentType font
         * @property {string|null} [color] ChatComponentType color
         * @property {boolean|null} [linethrough] ChatComponentType linethrough
         * @property {boolean|null} [underline] ChatComponentType underline
         * @property {string|null} [url] ChatComponentType url
         */
    
        /**
         * Constructs a new ChatComponentType.
         * @exports ChatComponentType
         * @classdesc Represents a ChatComponentType.
         * @implements IChatComponentType
         * @constructor
         * @param {IChatComponentType=} [properties] Properties to set
         */
        function ChatComponentType(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * ChatComponentType text.
         * @member {string} text
         * @memberof ChatComponentType
         * @instance
         */
        ChatComponentType.prototype.text = "";
    
        /**
         * ChatComponentType font.
         * @member {string} font
         * @memberof ChatComponentType
         * @instance
         */
        ChatComponentType.prototype.font = "";
    
        /**
         * ChatComponentType color.
         * @member {string} color
         * @memberof ChatComponentType
         * @instance
         */
        ChatComponentType.prototype.color = "";
    
        /**
         * ChatComponentType linethrough.
         * @member {boolean} linethrough
         * @memberof ChatComponentType
         * @instance
         */
        ChatComponentType.prototype.linethrough = false;
    
        /**
         * ChatComponentType underline.
         * @member {boolean} underline
         * @memberof ChatComponentType
         * @instance
         */
        ChatComponentType.prototype.underline = false;
    
        /**
         * ChatComponentType url.
         * @member {string} url
         * @memberof ChatComponentType
         * @instance
         */
        ChatComponentType.prototype.url = "";
    
        /**
         * Creates a new ChatComponentType instance using the specified properties.
         * @function create
         * @memberof ChatComponentType
         * @static
         * @param {IChatComponentType=} [properties] Properties to set
         * @returns {ChatComponentType} ChatComponentType instance
         */
        ChatComponentType.create = function create(properties) {
            return new ChatComponentType(properties);
        };
    
        /**
         * Encodes the specified ChatComponentType message. Does not implicitly {@link ChatComponentType.verify|verify} messages.
         * @function encode
         * @memberof ChatComponentType
         * @static
         * @param {IChatComponentType} message ChatComponentType message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChatComponentType.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.text != null && Object.hasOwnProperty.call(message, "text"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.text);
            if (message.font != null && Object.hasOwnProperty.call(message, "font"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.font);
            if (message.color != null && Object.hasOwnProperty.call(message, "color"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.color);
            if (message.linethrough != null && Object.hasOwnProperty.call(message, "linethrough"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.linethrough);
            if (message.underline != null && Object.hasOwnProperty.call(message, "underline"))
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.underline);
            if (message.url != null && Object.hasOwnProperty.call(message, "url"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.url);
            return writer;
        };
    
        /**
         * Encodes the specified ChatComponentType message, length delimited. Does not implicitly {@link ChatComponentType.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ChatComponentType
         * @static
         * @param {IChatComponentType} message ChatComponentType message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChatComponentType.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a ChatComponentType message from the specified reader or buffer.
         * @function decode
         * @memberof ChatComponentType
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ChatComponentType} ChatComponentType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChatComponentType.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ChatComponentType();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.text = reader.string();
                    break;
                case 2:
                    message.font = reader.string();
                    break;
                case 3:
                    message.color = reader.string();
                    break;
                case 4:
                    message.linethrough = reader.bool();
                    break;
                case 5:
                    message.underline = reader.bool();
                    break;
                case 6:
                    message.url = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a ChatComponentType message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ChatComponentType
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ChatComponentType} ChatComponentType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChatComponentType.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a ChatComponentType message.
         * @function verify
         * @memberof ChatComponentType
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ChatComponentType.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.text != null && message.hasOwnProperty("text"))
                if (!$util.isString(message.text))
                    return "text: string expected";
            if (message.font != null && message.hasOwnProperty("font"))
                if (!$util.isString(message.font))
                    return "font: string expected";
            if (message.color != null && message.hasOwnProperty("color"))
                if (!$util.isString(message.color))
                    return "color: string expected";
            if (message.linethrough != null && message.hasOwnProperty("linethrough"))
                if (typeof message.linethrough !== "boolean")
                    return "linethrough: boolean expected";
            if (message.underline != null && message.hasOwnProperty("underline"))
                if (typeof message.underline !== "boolean")
                    return "underline: boolean expected";
            if (message.url != null && message.hasOwnProperty("url"))
                if (!$util.isString(message.url))
                    return "url: string expected";
            return null;
        };
    
        /**
         * Creates a ChatComponentType message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ChatComponentType
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ChatComponentType} ChatComponentType
         */
        ChatComponentType.fromObject = function fromObject(object) {
            if (object instanceof $root.ChatComponentType)
                return object;
            var message = new $root.ChatComponentType();
            if (object.text != null)
                message.text = String(object.text);
            if (object.font != null)
                message.font = String(object.font);
            if (object.color != null)
                message.color = String(object.color);
            if (object.linethrough != null)
                message.linethrough = Boolean(object.linethrough);
            if (object.underline != null)
                message.underline = Boolean(object.underline);
            if (object.url != null)
                message.url = String(object.url);
            return message;
        };
    
        /**
         * Creates a plain object from a ChatComponentType message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ChatComponentType
         * @static
         * @param {ChatComponentType} message ChatComponentType
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ChatComponentType.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.text = "";
                object.font = "";
                object.color = "";
                object.linethrough = false;
                object.underline = false;
                object.url = "";
            }
            if (message.text != null && message.hasOwnProperty("text"))
                object.text = message.text;
            if (message.font != null && message.hasOwnProperty("font"))
                object.font = message.font;
            if (message.color != null && message.hasOwnProperty("color"))
                object.color = message.color;
            if (message.linethrough != null && message.hasOwnProperty("linethrough"))
                object.linethrough = message.linethrough;
            if (message.underline != null && message.hasOwnProperty("underline"))
                object.underline = message.underline;
            if (message.url != null && message.hasOwnProperty("url"))
                object.url = message.url;
            return object;
        };
    
        /**
         * Converts this ChatComponentType to JSON.
         * @function toJSON
         * @memberof ChatComponentType
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ChatComponentType.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return ChatComponentType;
    })();
    
    $root.BasicChatComponentType = (function() {
    
        /**
         * Properties of a BasicChatComponentType.
         * @exports IBasicChatComponentType
         * @interface IBasicChatComponentType
         * @property {string|null} [text] BasicChatComponentType text
         * @property {string|null} [font] BasicChatComponentType font
         * @property {string|null} [color] BasicChatComponentType color
         * @property {boolean|null} [linethrough] BasicChatComponentType linethrough
         * @property {boolean|null} [underline] BasicChatComponentType underline
         */
    
        /**
         * Constructs a new BasicChatComponentType.
         * @exports BasicChatComponentType
         * @classdesc Represents a BasicChatComponentType.
         * @implements IBasicChatComponentType
         * @constructor
         * @param {IBasicChatComponentType=} [properties] Properties to set
         */
        function BasicChatComponentType(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * BasicChatComponentType text.
         * @member {string} text
         * @memberof BasicChatComponentType
         * @instance
         */
        BasicChatComponentType.prototype.text = "";
    
        /**
         * BasicChatComponentType font.
         * @member {string} font
         * @memberof BasicChatComponentType
         * @instance
         */
        BasicChatComponentType.prototype.font = "";
    
        /**
         * BasicChatComponentType color.
         * @member {string} color
         * @memberof BasicChatComponentType
         * @instance
         */
        BasicChatComponentType.prototype.color = "";
    
        /**
         * BasicChatComponentType linethrough.
         * @member {boolean} linethrough
         * @memberof BasicChatComponentType
         * @instance
         */
        BasicChatComponentType.prototype.linethrough = false;
    
        /**
         * BasicChatComponentType underline.
         * @member {boolean} underline
         * @memberof BasicChatComponentType
         * @instance
         */
        BasicChatComponentType.prototype.underline = false;
    
        /**
         * Creates a new BasicChatComponentType instance using the specified properties.
         * @function create
         * @memberof BasicChatComponentType
         * @static
         * @param {IBasicChatComponentType=} [properties] Properties to set
         * @returns {BasicChatComponentType} BasicChatComponentType instance
         */
        BasicChatComponentType.create = function create(properties) {
            return new BasicChatComponentType(properties);
        };
    
        /**
         * Encodes the specified BasicChatComponentType message. Does not implicitly {@link BasicChatComponentType.verify|verify} messages.
         * @function encode
         * @memberof BasicChatComponentType
         * @static
         * @param {IBasicChatComponentType} message BasicChatComponentType message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BasicChatComponentType.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.text != null && Object.hasOwnProperty.call(message, "text"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.text);
            if (message.font != null && Object.hasOwnProperty.call(message, "font"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.font);
            if (message.color != null && Object.hasOwnProperty.call(message, "color"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.color);
            if (message.linethrough != null && Object.hasOwnProperty.call(message, "linethrough"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.linethrough);
            if (message.underline != null && Object.hasOwnProperty.call(message, "underline"))
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.underline);
            return writer;
        };
    
        /**
         * Encodes the specified BasicChatComponentType message, length delimited. Does not implicitly {@link BasicChatComponentType.verify|verify} messages.
         * @function encodeDelimited
         * @memberof BasicChatComponentType
         * @static
         * @param {IBasicChatComponentType} message BasicChatComponentType message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BasicChatComponentType.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a BasicChatComponentType message from the specified reader or buffer.
         * @function decode
         * @memberof BasicChatComponentType
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {BasicChatComponentType} BasicChatComponentType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BasicChatComponentType.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.BasicChatComponentType();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.text = reader.string();
                    break;
                case 2:
                    message.font = reader.string();
                    break;
                case 3:
                    message.color = reader.string();
                    break;
                case 4:
                    message.linethrough = reader.bool();
                    break;
                case 5:
                    message.underline = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a BasicChatComponentType message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof BasicChatComponentType
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {BasicChatComponentType} BasicChatComponentType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BasicChatComponentType.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a BasicChatComponentType message.
         * @function verify
         * @memberof BasicChatComponentType
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BasicChatComponentType.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.text != null && message.hasOwnProperty("text"))
                if (!$util.isString(message.text))
                    return "text: string expected";
            if (message.font != null && message.hasOwnProperty("font"))
                if (!$util.isString(message.font))
                    return "font: string expected";
            if (message.color != null && message.hasOwnProperty("color"))
                if (!$util.isString(message.color))
                    return "color: string expected";
            if (message.linethrough != null && message.hasOwnProperty("linethrough"))
                if (typeof message.linethrough !== "boolean")
                    return "linethrough: boolean expected";
            if (message.underline != null && message.hasOwnProperty("underline"))
                if (typeof message.underline !== "boolean")
                    return "underline: boolean expected";
            return null;
        };
    
        /**
         * Creates a BasicChatComponentType message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof BasicChatComponentType
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {BasicChatComponentType} BasicChatComponentType
         */
        BasicChatComponentType.fromObject = function fromObject(object) {
            if (object instanceof $root.BasicChatComponentType)
                return object;
            var message = new $root.BasicChatComponentType();
            if (object.text != null)
                message.text = String(object.text);
            if (object.font != null)
                message.font = String(object.font);
            if (object.color != null)
                message.color = String(object.color);
            if (object.linethrough != null)
                message.linethrough = Boolean(object.linethrough);
            if (object.underline != null)
                message.underline = Boolean(object.underline);
            return message;
        };
    
        /**
         * Creates a plain object from a BasicChatComponentType message. Also converts values to other types if specified.
         * @function toObject
         * @memberof BasicChatComponentType
         * @static
         * @param {BasicChatComponentType} message BasicChatComponentType
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BasicChatComponentType.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.text = "";
                object.font = "";
                object.color = "";
                object.linethrough = false;
                object.underline = false;
            }
            if (message.text != null && message.hasOwnProperty("text"))
                object.text = message.text;
            if (message.font != null && message.hasOwnProperty("font"))
                object.font = message.font;
            if (message.color != null && message.hasOwnProperty("color"))
                object.color = message.color;
            if (message.linethrough != null && message.hasOwnProperty("linethrough"))
                object.linethrough = message.linethrough;
            if (message.underline != null && message.hasOwnProperty("underline"))
                object.underline = message.underline;
            return object;
        };
    
        /**
         * Converts this BasicChatComponentType to JSON.
         * @function toJSON
         * @memberof BasicChatComponentType
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BasicChatComponentType.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return BasicChatComponentType;
    })();
    
    $root.Item = (function() {
    
        /**
         * Properties of an Item.
         * @exports IItem
         * @interface IItem
         * @property {string|null} [id] Item id
         * @property {number|null} [count] Item count
         * @property {number|null} [damage] Item damage
         * @property {Array.<IBasicChatComponentType>|null} [name] Item name
         */
    
        /**
         * Constructs a new Item.
         * @exports Item
         * @classdesc Represents an Item.
         * @implements IItem
         * @constructor
         * @param {IItem=} [properties] Properties to set
         */
        function Item(properties) {
            this.name = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Item id.
         * @member {string} id
         * @memberof Item
         * @instance
         */
        Item.prototype.id = "";
    
        /**
         * Item count.
         * @member {number} count
         * @memberof Item
         * @instance
         */
        Item.prototype.count = 0;
    
        /**
         * Item damage.
         * @member {number} damage
         * @memberof Item
         * @instance
         */
        Item.prototype.damage = 0;
    
        /**
         * Item name.
         * @member {Array.<IBasicChatComponentType>} name
         * @memberof Item
         * @instance
         */
        Item.prototype.name = $util.emptyArray;
    
        /**
         * Creates a new Item instance using the specified properties.
         * @function create
         * @memberof Item
         * @static
         * @param {IItem=} [properties] Properties to set
         * @returns {Item} Item instance
         */
        Item.create = function create(properties) {
            return new Item(properties);
        };
    
        /**
         * Encodes the specified Item message. Does not implicitly {@link Item.verify|verify} messages.
         * @function encode
         * @memberof Item
         * @static
         * @param {IItem} message Item message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Item.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.count != null && Object.hasOwnProperty.call(message, "count"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.count);
            if (message.damage != null && Object.hasOwnProperty.call(message, "damage"))
                writer.uint32(/* id 3, wireType 5 =*/29).float(message.damage);
            if (message.name != null && message.name.length)
                for (var i = 0; i < message.name.length; ++i)
                    $root.BasicChatComponentType.encode(message.name[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified Item message, length delimited. Does not implicitly {@link Item.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Item
         * @static
         * @param {IItem} message Item message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Item.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes an Item message from the specified reader or buffer.
         * @function decode
         * @memberof Item
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Item} Item
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Item.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Item();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.count = reader.int32();
                    break;
                case 3:
                    message.damage = reader.float();
                    break;
                case 4:
                    if (!(message.name && message.name.length))
                        message.name = [];
                    message.name.push($root.BasicChatComponentType.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes an Item message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Item
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Item} Item
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Item.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies an Item message.
         * @function verify
         * @memberof Item
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Item.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.count != null && message.hasOwnProperty("count"))
                if (!$util.isInteger(message.count))
                    return "count: integer expected";
            if (message.damage != null && message.hasOwnProperty("damage"))
                if (typeof message.damage !== "number")
                    return "damage: number expected";
            if (message.name != null && message.hasOwnProperty("name")) {
                if (!Array.isArray(message.name))
                    return "name: array expected";
                for (var i = 0; i < message.name.length; ++i) {
                    var error = $root.BasicChatComponentType.verify(message.name[i]);
                    if (error)
                        return "name." + error;
                }
            }
            return null;
        };
    
        /**
         * Creates an Item message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Item
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Item} Item
         */
        Item.fromObject = function fromObject(object) {
            if (object instanceof $root.Item)
                return object;
            var message = new $root.Item();
            if (object.id != null)
                message.id = String(object.id);
            if (object.count != null)
                message.count = object.count | 0;
            if (object.damage != null)
                message.damage = Number(object.damage);
            if (object.name) {
                if (!Array.isArray(object.name))
                    throw TypeError(".Item.name: array expected");
                message.name = [];
                for (var i = 0; i < object.name.length; ++i) {
                    if (typeof object.name[i] !== "object")
                        throw TypeError(".Item.name: object expected");
                    message.name[i] = $root.BasicChatComponentType.fromObject(object.name[i]);
                }
            }
            return message;
        };
    
        /**
         * Creates a plain object from an Item message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Item
         * @static
         * @param {Item} message Item
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Item.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.name = [];
            if (options.defaults) {
                object.id = "";
                object.count = 0;
                object.damage = 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.count != null && message.hasOwnProperty("count"))
                object.count = message.count;
            if (message.damage != null && message.hasOwnProperty("damage"))
                object.damage = options.json && !isFinite(message.damage) ? String(message.damage) : message.damage;
            if (message.name && message.name.length) {
                object.name = [];
                for (var j = 0; j < message.name.length; ++j)
                    object.name[j] = $root.BasicChatComponentType.toObject(message.name[j], options);
            }
            return object;
        };
    
        /**
         * Converts this Item to JSON.
         * @function toJSON
         * @memberof Item
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Item.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return Item;
    })();
    
    /**
     * InventoryType enum.
     * @exports InventoryType
     * @enum {number}
     * @property {number} MAIN=0 MAIN value
     * @property {number} ARMOR=1 ARMOR value
     * @property {number} CRAFT=2 CRAFT value
     * @property {number} HOOK=3 HOOK value
     * @property {number} TEMP=4 TEMP value
     */
    $root.InventoryType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "MAIN"] = 0;
        values[valuesById[1] = "ARMOR"] = 1;
        values[valuesById[2] = "CRAFT"] = 2;
        values[valuesById[3] = "HOOK"] = 3;
        values[valuesById[4] = "TEMP"] = 4;
        return values;
    })();
    
    /**
     * ContainerType enum.
     * @exports ContainerType
     * @enum {number}
     * @property {number} PLAYER=0 PLAYER value
     * @property {number} CHEST=1 CHEST value
     * @property {number} CRAFTING=2 CRAFTING value
     * @property {number} FURNACE=3 FURNACE value
     */
    $root.ContainerType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "PLAYER"] = 0;
        values[valuesById[1] = "CHEST"] = 1;
        values[valuesById[2] = "CRAFTING"] = 2;
        values[valuesById[3] = "FURNACE"] = 3;
        return values;
    })();
    
    /**
     * MouseClickType enum.
     * @exports MouseClickType
     * @enum {number}
     * @property {number} LEFT=0 LEFT value
     * @property {number} RIGHT=1 RIGHT value
     * @property {number} MIDDLE=2 MIDDLE value
     * @property {number} SELECT=3 SELECT value
     */
    $root.MouseClickType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "LEFT"] = 0;
        values[valuesById[1] = "RIGHT"] = 1;
        values[valuesById[2] = "MIDDLE"] = 2;
        values[valuesById[3] = "SELECT"] = 3;
        return values;
    })();
    
    $root.ItemDef = (function() {
    
        /**
         * Properties of an ItemDef.
         * @exports IItemDef
         * @interface IItemDef
         * @property {string|null} [id] ItemDef id
         * @property {number|null} [maxStack] ItemDef maxStack
         * @property {Array.<IBasicChatComponentType>|null} [name] ItemDef name
         * @property {ItemDef.Type|null} [type] ItemDef type
         * @property {ItemDef.Model|null} [model] ItemDef model
         * @property {Array.<string>|null} [textures] ItemDef textures
         * @property {Array.<string>|null} [toolType] ItemDef toolType
         * @property {number|null} [miningSpeed] ItemDef miningSpeed
         * @property {number|null} [miningPower] ItemDef miningPower
         * @property {string|null} [customModel] ItemDef customModel
         * @property {string|null} [armorTexture] ItemDef armorTexture
         */
    
        /**
         * Constructs a new ItemDef.
         * @exports ItemDef
         * @classdesc Represents an ItemDef.
         * @implements IItemDef
         * @constructor
         * @param {IItemDef=} [properties] Properties to set
         */
        function ItemDef(properties) {
            this.name = [];
            this.textures = [];
            this.toolType = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * ItemDef id.
         * @member {string} id
         * @memberof ItemDef
         * @instance
         */
        ItemDef.prototype.id = "";
    
        /**
         * ItemDef maxStack.
         * @member {number} maxStack
         * @memberof ItemDef
         * @instance
         */
        ItemDef.prototype.maxStack = 0;
    
        /**
         * ItemDef name.
         * @member {Array.<IBasicChatComponentType>} name
         * @memberof ItemDef
         * @instance
         */
        ItemDef.prototype.name = $util.emptyArray;
    
        /**
         * ItemDef type.
         * @member {ItemDef.Type} type
         * @memberof ItemDef
         * @instance
         */
        ItemDef.prototype.type = 0;
    
        /**
         * ItemDef model.
         * @member {ItemDef.Model} model
         * @memberof ItemDef
         * @instance
         */
        ItemDef.prototype.model = 0;
    
        /**
         * ItemDef textures.
         * @member {Array.<string>} textures
         * @memberof ItemDef
         * @instance
         */
        ItemDef.prototype.textures = $util.emptyArray;
    
        /**
         * ItemDef toolType.
         * @member {Array.<string>} toolType
         * @memberof ItemDef
         * @instance
         */
        ItemDef.prototype.toolType = $util.emptyArray;
    
        /**
         * ItemDef miningSpeed.
         * @member {number} miningSpeed
         * @memberof ItemDef
         * @instance
         */
        ItemDef.prototype.miningSpeed = 0;
    
        /**
         * ItemDef miningPower.
         * @member {number} miningPower
         * @memberof ItemDef
         * @instance
         */
        ItemDef.prototype.miningPower = 0;
    
        /**
         * ItemDef customModel.
         * @member {string} customModel
         * @memberof ItemDef
         * @instance
         */
        ItemDef.prototype.customModel = "";
    
        /**
         * ItemDef armorTexture.
         * @member {string} armorTexture
         * @memberof ItemDef
         * @instance
         */
        ItemDef.prototype.armorTexture = "";
    
        /**
         * Creates a new ItemDef instance using the specified properties.
         * @function create
         * @memberof ItemDef
         * @static
         * @param {IItemDef=} [properties] Properties to set
         * @returns {ItemDef} ItemDef instance
         */
        ItemDef.create = function create(properties) {
            return new ItemDef(properties);
        };
    
        /**
         * Encodes the specified ItemDef message. Does not implicitly {@link ItemDef.verify|verify} messages.
         * @function encode
         * @memberof ItemDef
         * @static
         * @param {IItemDef} message ItemDef message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ItemDef.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.maxStack != null && Object.hasOwnProperty.call(message, "maxStack"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.maxStack);
            if (message.name != null && message.name.length)
                for (var i = 0; i < message.name.length; ++i)
                    $root.BasicChatComponentType.encode(message.name[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.type);
            if (message.model != null && Object.hasOwnProperty.call(message, "model"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.model);
            if (message.textures != null && message.textures.length)
                for (var i = 0; i < message.textures.length; ++i)
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.textures[i]);
            if (message.toolType != null && message.toolType.length)
                for (var i = 0; i < message.toolType.length; ++i)
                    writer.uint32(/* id 7, wireType 2 =*/58).string(message.toolType[i]);
            if (message.miningSpeed != null && Object.hasOwnProperty.call(message, "miningSpeed"))
                writer.uint32(/* id 8, wireType 5 =*/69).float(message.miningSpeed);
            if (message.miningPower != null && Object.hasOwnProperty.call(message, "miningPower"))
                writer.uint32(/* id 9, wireType 5 =*/77).float(message.miningPower);
            if (message.customModel != null && Object.hasOwnProperty.call(message, "customModel"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.customModel);
            if (message.armorTexture != null && Object.hasOwnProperty.call(message, "armorTexture"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.armorTexture);
            return writer;
        };
    
        /**
         * Encodes the specified ItemDef message, length delimited. Does not implicitly {@link ItemDef.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ItemDef
         * @static
         * @param {IItemDef} message ItemDef message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ItemDef.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes an ItemDef message from the specified reader or buffer.
         * @function decode
         * @memberof ItemDef
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ItemDef} ItemDef
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ItemDef.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ItemDef();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.maxStack = reader.uint32();
                    break;
                case 3:
                    if (!(message.name && message.name.length))
                        message.name = [];
                    message.name.push($root.BasicChatComponentType.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.type = reader.int32();
                    break;
                case 5:
                    message.model = reader.int32();
                    break;
                case 6:
                    if (!(message.textures && message.textures.length))
                        message.textures = [];
                    message.textures.push(reader.string());
                    break;
                case 7:
                    if (!(message.toolType && message.toolType.length))
                        message.toolType = [];
                    message.toolType.push(reader.string());
                    break;
                case 8:
                    message.miningSpeed = reader.float();
                    break;
                case 9:
                    message.miningPower = reader.float();
                    break;
                case 10:
                    message.customModel = reader.string();
                    break;
                case 11:
                    message.armorTexture = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes an ItemDef message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ItemDef
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ItemDef} ItemDef
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ItemDef.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies an ItemDef message.
         * @function verify
         * @memberof ItemDef
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ItemDef.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.maxStack != null && message.hasOwnProperty("maxStack"))
                if (!$util.isInteger(message.maxStack))
                    return "maxStack: integer expected";
            if (message.name != null && message.hasOwnProperty("name")) {
                if (!Array.isArray(message.name))
                    return "name: array expected";
                for (var i = 0; i < message.name.length; ++i) {
                    var error = $root.BasicChatComponentType.verify(message.name[i]);
                    if (error)
                        return "name." + error;
                }
            }
            if (message.type != null && message.hasOwnProperty("type"))
                switch (message.type) {
                default:
                    return "type: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            if (message.model != null && message.hasOwnProperty("model"))
                switch (message.model) {
                default:
                    return "model: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            if (message.textures != null && message.hasOwnProperty("textures")) {
                if (!Array.isArray(message.textures))
                    return "textures: array expected";
                for (var i = 0; i < message.textures.length; ++i)
                    if (!$util.isString(message.textures[i]))
                        return "textures: string[] expected";
            }
            if (message.toolType != null && message.hasOwnProperty("toolType")) {
                if (!Array.isArray(message.toolType))
                    return "toolType: array expected";
                for (var i = 0; i < message.toolType.length; ++i)
                    if (!$util.isString(message.toolType[i]))
                        return "toolType: string[] expected";
            }
            if (message.miningSpeed != null && message.hasOwnProperty("miningSpeed"))
                if (typeof message.miningSpeed !== "number")
                    return "miningSpeed: number expected";
            if (message.miningPower != null && message.hasOwnProperty("miningPower"))
                if (typeof message.miningPower !== "number")
                    return "miningPower: number expected";
            if (message.customModel != null && message.hasOwnProperty("customModel"))
                if (!$util.isString(message.customModel))
                    return "customModel: string expected";
            if (message.armorTexture != null && message.hasOwnProperty("armorTexture"))
                if (!$util.isString(message.armorTexture))
                    return "armorTexture: string expected";
            return null;
        };
    
        /**
         * Creates an ItemDef message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ItemDef
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ItemDef} ItemDef
         */
        ItemDef.fromObject = function fromObject(object) {
            if (object instanceof $root.ItemDef)
                return object;
            var message = new $root.ItemDef();
            if (object.id != null)
                message.id = String(object.id);
            if (object.maxStack != null)
                message.maxStack = object.maxStack >>> 0;
            if (object.name) {
                if (!Array.isArray(object.name))
                    throw TypeError(".ItemDef.name: array expected");
                message.name = [];
                for (var i = 0; i < object.name.length; ++i) {
                    if (typeof object.name[i] !== "object")
                        throw TypeError(".ItemDef.name: object expected");
                    message.name[i] = $root.BasicChatComponentType.fromObject(object.name[i]);
                }
            }
            switch (object.type) {
            case "NONE":
            case 0:
                message.type = 0;
                break;
            case "TOOL":
            case 1:
                message.type = 1;
                break;
            case "BLOCK":
            case 2:
                message.type = 2;
                break;
            case "ARMOR":
            case 3:
                message.type = 3;
                break;
            }
            switch (object.model) {
            case "FLAT":
            case 0:
                message.model = 0;
                break;
            case "CUBE":
            case 1:
                message.model = 1;
                break;
            case "CROSS":
            case 2:
                message.model = 2;
                break;
            case "CUSTOM":
            case 3:
                message.model = 3;
                break;
            }
            if (object.textures) {
                if (!Array.isArray(object.textures))
                    throw TypeError(".ItemDef.textures: array expected");
                message.textures = [];
                for (var i = 0; i < object.textures.length; ++i)
                    message.textures[i] = String(object.textures[i]);
            }
            if (object.toolType) {
                if (!Array.isArray(object.toolType))
                    throw TypeError(".ItemDef.toolType: array expected");
                message.toolType = [];
                for (var i = 0; i < object.toolType.length; ++i)
                    message.toolType[i] = String(object.toolType[i]);
            }
            if (object.miningSpeed != null)
                message.miningSpeed = Number(object.miningSpeed);
            if (object.miningPower != null)
                message.miningPower = Number(object.miningPower);
            if (object.customModel != null)
                message.customModel = String(object.customModel);
            if (object.armorTexture != null)
                message.armorTexture = String(object.armorTexture);
            return message;
        };
    
        /**
         * Creates a plain object from an ItemDef message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ItemDef
         * @static
         * @param {ItemDef} message ItemDef
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ItemDef.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.name = [];
                object.textures = [];
                object.toolType = [];
            }
            if (options.defaults) {
                object.id = "";
                object.maxStack = 0;
                object.type = options.enums === String ? "NONE" : 0;
                object.model = options.enums === String ? "FLAT" : 0;
                object.miningSpeed = 0;
                object.miningPower = 0;
                object.customModel = "";
                object.armorTexture = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.maxStack != null && message.hasOwnProperty("maxStack"))
                object.maxStack = message.maxStack;
            if (message.name && message.name.length) {
                object.name = [];
                for (var j = 0; j < message.name.length; ++j)
                    object.name[j] = $root.BasicChatComponentType.toObject(message.name[j], options);
            }
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = options.enums === String ? $root.ItemDef.Type[message.type] : message.type;
            if (message.model != null && message.hasOwnProperty("model"))
                object.model = options.enums === String ? $root.ItemDef.Model[message.model] : message.model;
            if (message.textures && message.textures.length) {
                object.textures = [];
                for (var j = 0; j < message.textures.length; ++j)
                    object.textures[j] = message.textures[j];
            }
            if (message.toolType && message.toolType.length) {
                object.toolType = [];
                for (var j = 0; j < message.toolType.length; ++j)
                    object.toolType[j] = message.toolType[j];
            }
            if (message.miningSpeed != null && message.hasOwnProperty("miningSpeed"))
                object.miningSpeed = options.json && !isFinite(message.miningSpeed) ? String(message.miningSpeed) : message.miningSpeed;
            if (message.miningPower != null && message.hasOwnProperty("miningPower"))
                object.miningPower = options.json && !isFinite(message.miningPower) ? String(message.miningPower) : message.miningPower;
            if (message.customModel != null && message.hasOwnProperty("customModel"))
                object.customModel = message.customModel;
            if (message.armorTexture != null && message.hasOwnProperty("armorTexture"))
                object.armorTexture = message.armorTexture;
            return object;
        };
    
        /**
         * Converts this ItemDef to JSON.
         * @function toJSON
         * @memberof ItemDef
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ItemDef.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Type enum.
         * @name ItemDef.Type
         * @enum {number}
         * @property {number} NONE=0 NONE value
         * @property {number} TOOL=1 TOOL value
         * @property {number} BLOCK=2 BLOCK value
         * @property {number} ARMOR=3 ARMOR value
         */
        ItemDef.Type = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "NONE"] = 0;
            values[valuesById[1] = "TOOL"] = 1;
            values[valuesById[2] = "BLOCK"] = 2;
            values[valuesById[3] = "ARMOR"] = 3;
            return values;
        })();
    
        /**
         * Model enum.
         * @name ItemDef.Model
         * @enum {number}
         * @property {number} FLAT=0 FLAT value
         * @property {number} CUBE=1 CUBE value
         * @property {number} CROSS=2 CROSS value
         * @property {number} CUSTOM=3 CUSTOM value
         */
        ItemDef.Model = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "FLAT"] = 0;
            values[valuesById[1] = "CUBE"] = 1;
            values[valuesById[2] = "CROSS"] = 2;
            values[valuesById[3] = "CUSTOM"] = 3;
            return values;
        })();
    
        return ItemDef;
    })();
    
    $root.BlockDef = (function() {
    
        /**
         * Properties of a BlockDef.
         * @exports IBlockDef
         * @interface IBlockDef
         * @property {string|null} [id] BlockDef id
         * @property {number|null} [numId] BlockDef numId
         * @property {BlockDef.Model|null} [model] BlockDef model
         * @property {Array.<string>|null} [textures] BlockDef textures
         * @property {Array.<string>|null} [toolType] BlockDef toolType
         * @property {number|null} [miningSpeed] BlockDef miningSpeed
         * @property {number|null} [miningPower] BlockDef miningPower
         * @property {boolean|null} [solid] BlockDef solid
         * @property {boolean|null} [fluid] BlockDef fluid
         * @property {boolean|null} [opaque] BlockDef opaque
         * @property {Array.<number>|null} [color] BlockDef color
         * @property {Array.<string>|null} [material] BlockDef material
         * @property {number|null} [fluidDensity] BlockDef fluidDensity
         * @property {number|null} [viscosity] BlockDef viscosity
         * @property {string|null} [customModel] BlockDef customModel
         */
    
        /**
         * Constructs a new BlockDef.
         * @exports BlockDef
         * @classdesc Represents a BlockDef.
         * @implements IBlockDef
         * @constructor
         * @param {IBlockDef=} [properties] Properties to set
         */
        function BlockDef(properties) {
            this.textures = [];
            this.toolType = [];
            this.color = [];
            this.material = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * BlockDef id.
         * @member {string} id
         * @memberof BlockDef
         * @instance
         */
        BlockDef.prototype.id = "";
    
        /**
         * BlockDef numId.
         * @member {number} numId
         * @memberof BlockDef
         * @instance
         */
        BlockDef.prototype.numId = 0;
    
        /**
         * BlockDef model.
         * @member {BlockDef.Model} model
         * @memberof BlockDef
         * @instance
         */
        BlockDef.prototype.model = 0;
    
        /**
         * BlockDef textures.
         * @member {Array.<string>} textures
         * @memberof BlockDef
         * @instance
         */
        BlockDef.prototype.textures = $util.emptyArray;
    
        /**
         * BlockDef toolType.
         * @member {Array.<string>} toolType
         * @memberof BlockDef
         * @instance
         */
        BlockDef.prototype.toolType = $util.emptyArray;
    
        /**
         * BlockDef miningSpeed.
         * @member {number} miningSpeed
         * @memberof BlockDef
         * @instance
         */
        BlockDef.prototype.miningSpeed = 0;
    
        /**
         * BlockDef miningPower.
         * @member {number} miningPower
         * @memberof BlockDef
         * @instance
         */
        BlockDef.prototype.miningPower = 0;
    
        /**
         * BlockDef solid.
         * @member {boolean} solid
         * @memberof BlockDef
         * @instance
         */
        BlockDef.prototype.solid = false;
    
        /**
         * BlockDef fluid.
         * @member {boolean} fluid
         * @memberof BlockDef
         * @instance
         */
        BlockDef.prototype.fluid = false;
    
        /**
         * BlockDef opaque.
         * @member {boolean} opaque
         * @memberof BlockDef
         * @instance
         */
        BlockDef.prototype.opaque = false;
    
        /**
         * BlockDef color.
         * @member {Array.<number>} color
         * @memberof BlockDef
         * @instance
         */
        BlockDef.prototype.color = $util.emptyArray;
    
        /**
         * BlockDef material.
         * @member {Array.<string>} material
         * @memberof BlockDef
         * @instance
         */
        BlockDef.prototype.material = $util.emptyArray;
    
        /**
         * BlockDef fluidDensity.
         * @member {number} fluidDensity
         * @memberof BlockDef
         * @instance
         */
        BlockDef.prototype.fluidDensity = 0;
    
        /**
         * BlockDef viscosity.
         * @member {number} viscosity
         * @memberof BlockDef
         * @instance
         */
        BlockDef.prototype.viscosity = 0;
    
        /**
         * BlockDef customModel.
         * @member {string} customModel
         * @memberof BlockDef
         * @instance
         */
        BlockDef.prototype.customModel = "";
    
        /**
         * Creates a new BlockDef instance using the specified properties.
         * @function create
         * @memberof BlockDef
         * @static
         * @param {IBlockDef=} [properties] Properties to set
         * @returns {BlockDef} BlockDef instance
         */
        BlockDef.create = function create(properties) {
            return new BlockDef(properties);
        };
    
        /**
         * Encodes the specified BlockDef message. Does not implicitly {@link BlockDef.verify|verify} messages.
         * @function encode
         * @memberof BlockDef
         * @static
         * @param {IBlockDef} message BlockDef message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BlockDef.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.numId != null && Object.hasOwnProperty.call(message, "numId"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.numId);
            if (message.model != null && Object.hasOwnProperty.call(message, "model"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.model);
            if (message.textures != null && message.textures.length)
                for (var i = 0; i < message.textures.length; ++i)
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.textures[i]);
            if (message.toolType != null && message.toolType.length)
                for (var i = 0; i < message.toolType.length; ++i)
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.toolType[i]);
            if (message.miningSpeed != null && Object.hasOwnProperty.call(message, "miningSpeed"))
                writer.uint32(/* id 6, wireType 5 =*/53).float(message.miningSpeed);
            if (message.miningPower != null && Object.hasOwnProperty.call(message, "miningPower"))
                writer.uint32(/* id 7, wireType 5 =*/61).float(message.miningPower);
            if (message.solid != null && Object.hasOwnProperty.call(message, "solid"))
                writer.uint32(/* id 8, wireType 0 =*/64).bool(message.solid);
            if (message.fluid != null && Object.hasOwnProperty.call(message, "fluid"))
                writer.uint32(/* id 9, wireType 0 =*/72).bool(message.fluid);
            if (message.opaque != null && Object.hasOwnProperty.call(message, "opaque"))
                writer.uint32(/* id 10, wireType 0 =*/80).bool(message.opaque);
            if (message.color != null && message.color.length) {
                writer.uint32(/* id 11, wireType 2 =*/90).fork();
                for (var i = 0; i < message.color.length; ++i)
                    writer.float(message.color[i]);
                writer.ldelim();
            }
            if (message.material != null && message.material.length)
                for (var i = 0; i < message.material.length; ++i)
                    writer.uint32(/* id 12, wireType 2 =*/98).string(message.material[i]);
            if (message.fluidDensity != null && Object.hasOwnProperty.call(message, "fluidDensity"))
                writer.uint32(/* id 13, wireType 1 =*/105).double(message.fluidDensity);
            if (message.viscosity != null && Object.hasOwnProperty.call(message, "viscosity"))
                writer.uint32(/* id 14, wireType 1 =*/113).double(message.viscosity);
            if (message.customModel != null && Object.hasOwnProperty.call(message, "customModel"))
                writer.uint32(/* id 15, wireType 2 =*/122).string(message.customModel);
            return writer;
        };
    
        /**
         * Encodes the specified BlockDef message, length delimited. Does not implicitly {@link BlockDef.verify|verify} messages.
         * @function encodeDelimited
         * @memberof BlockDef
         * @static
         * @param {IBlockDef} message BlockDef message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BlockDef.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a BlockDef message from the specified reader or buffer.
         * @function decode
         * @memberof BlockDef
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {BlockDef} BlockDef
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BlockDef.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.BlockDef();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.numId = reader.uint32();
                    break;
                case 3:
                    message.model = reader.int32();
                    break;
                case 4:
                    if (!(message.textures && message.textures.length))
                        message.textures = [];
                    message.textures.push(reader.string());
                    break;
                case 5:
                    if (!(message.toolType && message.toolType.length))
                        message.toolType = [];
                    message.toolType.push(reader.string());
                    break;
                case 6:
                    message.miningSpeed = reader.float();
                    break;
                case 7:
                    message.miningPower = reader.float();
                    break;
                case 8:
                    message.solid = reader.bool();
                    break;
                case 9:
                    message.fluid = reader.bool();
                    break;
                case 10:
                    message.opaque = reader.bool();
                    break;
                case 11:
                    if (!(message.color && message.color.length))
                        message.color = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.color.push(reader.float());
                    } else
                        message.color.push(reader.float());
                    break;
                case 12:
                    if (!(message.material && message.material.length))
                        message.material = [];
                    message.material.push(reader.string());
                    break;
                case 13:
                    message.fluidDensity = reader.double();
                    break;
                case 14:
                    message.viscosity = reader.double();
                    break;
                case 15:
                    message.customModel = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a BlockDef message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof BlockDef
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {BlockDef} BlockDef
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BlockDef.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a BlockDef message.
         * @function verify
         * @memberof BlockDef
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BlockDef.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.numId != null && message.hasOwnProperty("numId"))
                if (!$util.isInteger(message.numId))
                    return "numId: integer expected";
            if (message.model != null && message.hasOwnProperty("model"))
                switch (message.model) {
                default:
                    return "model: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.textures != null && message.hasOwnProperty("textures")) {
                if (!Array.isArray(message.textures))
                    return "textures: array expected";
                for (var i = 0; i < message.textures.length; ++i)
                    if (!$util.isString(message.textures[i]))
                        return "textures: string[] expected";
            }
            if (message.toolType != null && message.hasOwnProperty("toolType")) {
                if (!Array.isArray(message.toolType))
                    return "toolType: array expected";
                for (var i = 0; i < message.toolType.length; ++i)
                    if (!$util.isString(message.toolType[i]))
                        return "toolType: string[] expected";
            }
            if (message.miningSpeed != null && message.hasOwnProperty("miningSpeed"))
                if (typeof message.miningSpeed !== "number")
                    return "miningSpeed: number expected";
            if (message.miningPower != null && message.hasOwnProperty("miningPower"))
                if (typeof message.miningPower !== "number")
                    return "miningPower: number expected";
            if (message.solid != null && message.hasOwnProperty("solid"))
                if (typeof message.solid !== "boolean")
                    return "solid: boolean expected";
            if (message.fluid != null && message.hasOwnProperty("fluid"))
                if (typeof message.fluid !== "boolean")
                    return "fluid: boolean expected";
            if (message.opaque != null && message.hasOwnProperty("opaque"))
                if (typeof message.opaque !== "boolean")
                    return "opaque: boolean expected";
            if (message.color != null && message.hasOwnProperty("color")) {
                if (!Array.isArray(message.color))
                    return "color: array expected";
                for (var i = 0; i < message.color.length; ++i)
                    if (typeof message.color[i] !== "number")
                        return "color: number[] expected";
            }
            if (message.material != null && message.hasOwnProperty("material")) {
                if (!Array.isArray(message.material))
                    return "material: array expected";
                for (var i = 0; i < message.material.length; ++i)
                    if (!$util.isString(message.material[i]))
                        return "material: string[] expected";
            }
            if (message.fluidDensity != null && message.hasOwnProperty("fluidDensity"))
                if (typeof message.fluidDensity !== "number")
                    return "fluidDensity: number expected";
            if (message.viscosity != null && message.hasOwnProperty("viscosity"))
                if (typeof message.viscosity !== "number")
                    return "viscosity: number expected";
            if (message.customModel != null && message.hasOwnProperty("customModel"))
                if (!$util.isString(message.customModel))
                    return "customModel: string expected";
            return null;
        };
    
        /**
         * Creates a BlockDef message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof BlockDef
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {BlockDef} BlockDef
         */
        BlockDef.fromObject = function fromObject(object) {
            if (object instanceof $root.BlockDef)
                return object;
            var message = new $root.BlockDef();
            if (object.id != null)
                message.id = String(object.id);
            if (object.numId != null)
                message.numId = object.numId >>> 0;
            switch (object.model) {
            case "BLOCK":
            case 0:
                message.model = 0;
                break;
            case "CROSS":
            case 1:
                message.model = 1;
                break;
            case "TRANSPARENT":
            case 2:
                message.model = 2;
                break;
            }
            if (object.textures) {
                if (!Array.isArray(object.textures))
                    throw TypeError(".BlockDef.textures: array expected");
                message.textures = [];
                for (var i = 0; i < object.textures.length; ++i)
                    message.textures[i] = String(object.textures[i]);
            }
            if (object.toolType) {
                if (!Array.isArray(object.toolType))
                    throw TypeError(".BlockDef.toolType: array expected");
                message.toolType = [];
                for (var i = 0; i < object.toolType.length; ++i)
                    message.toolType[i] = String(object.toolType[i]);
            }
            if (object.miningSpeed != null)
                message.miningSpeed = Number(object.miningSpeed);
            if (object.miningPower != null)
                message.miningPower = Number(object.miningPower);
            if (object.solid != null)
                message.solid = Boolean(object.solid);
            if (object.fluid != null)
                message.fluid = Boolean(object.fluid);
            if (object.opaque != null)
                message.opaque = Boolean(object.opaque);
            if (object.color) {
                if (!Array.isArray(object.color))
                    throw TypeError(".BlockDef.color: array expected");
                message.color = [];
                for (var i = 0; i < object.color.length; ++i)
                    message.color[i] = Number(object.color[i]);
            }
            if (object.material) {
                if (!Array.isArray(object.material))
                    throw TypeError(".BlockDef.material: array expected");
                message.material = [];
                for (var i = 0; i < object.material.length; ++i)
                    message.material[i] = String(object.material[i]);
            }
            if (object.fluidDensity != null)
                message.fluidDensity = Number(object.fluidDensity);
            if (object.viscosity != null)
                message.viscosity = Number(object.viscosity);
            if (object.customModel != null)
                message.customModel = String(object.customModel);
            return message;
        };
    
        /**
         * Creates a plain object from a BlockDef message. Also converts values to other types if specified.
         * @function toObject
         * @memberof BlockDef
         * @static
         * @param {BlockDef} message BlockDef
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BlockDef.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.textures = [];
                object.toolType = [];
                object.color = [];
                object.material = [];
            }
            if (options.defaults) {
                object.id = "";
                object.numId = 0;
                object.model = options.enums === String ? "BLOCK" : 0;
                object.miningSpeed = 0;
                object.miningPower = 0;
                object.solid = false;
                object.fluid = false;
                object.opaque = false;
                object.fluidDensity = 0;
                object.viscosity = 0;
                object.customModel = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.numId != null && message.hasOwnProperty("numId"))
                object.numId = message.numId;
            if (message.model != null && message.hasOwnProperty("model"))
                object.model = options.enums === String ? $root.BlockDef.Model[message.model] : message.model;
            if (message.textures && message.textures.length) {
                object.textures = [];
                for (var j = 0; j < message.textures.length; ++j)
                    object.textures[j] = message.textures[j];
            }
            if (message.toolType && message.toolType.length) {
                object.toolType = [];
                for (var j = 0; j < message.toolType.length; ++j)
                    object.toolType[j] = message.toolType[j];
            }
            if (message.miningSpeed != null && message.hasOwnProperty("miningSpeed"))
                object.miningSpeed = options.json && !isFinite(message.miningSpeed) ? String(message.miningSpeed) : message.miningSpeed;
            if (message.miningPower != null && message.hasOwnProperty("miningPower"))
                object.miningPower = options.json && !isFinite(message.miningPower) ? String(message.miningPower) : message.miningPower;
            if (message.solid != null && message.hasOwnProperty("solid"))
                object.solid = message.solid;
            if (message.fluid != null && message.hasOwnProperty("fluid"))
                object.fluid = message.fluid;
            if (message.opaque != null && message.hasOwnProperty("opaque"))
                object.opaque = message.opaque;
            if (message.color && message.color.length) {
                object.color = [];
                for (var j = 0; j < message.color.length; ++j)
                    object.color[j] = options.json && !isFinite(message.color[j]) ? String(message.color[j]) : message.color[j];
            }
            if (message.material && message.material.length) {
                object.material = [];
                for (var j = 0; j < message.material.length; ++j)
                    object.material[j] = message.material[j];
            }
            if (message.fluidDensity != null && message.hasOwnProperty("fluidDensity"))
                object.fluidDensity = options.json && !isFinite(message.fluidDensity) ? String(message.fluidDensity) : message.fluidDensity;
            if (message.viscosity != null && message.hasOwnProperty("viscosity"))
                object.viscosity = options.json && !isFinite(message.viscosity) ? String(message.viscosity) : message.viscosity;
            if (message.customModel != null && message.hasOwnProperty("customModel"))
                object.customModel = message.customModel;
            return object;
        };
    
        /**
         * Converts this BlockDef to JSON.
         * @function toJSON
         * @memberof BlockDef
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BlockDef.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Model enum.
         * @name BlockDef.Model
         * @enum {number}
         * @property {number} BLOCK=0 BLOCK value
         * @property {number} CROSS=1 CROSS value
         * @property {number} TRANSPARENT=2 TRANSPARENT value
         */
        BlockDef.Model = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "BLOCK"] = 0;
            values[valuesById[1] = "CROSS"] = 1;
            values[valuesById[2] = "TRANSPARENT"] = 2;
            return values;
        })();
    
        return BlockDef;
    })();

    return $root;
});
