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
    
    $root.AuthResponce = (function() {
    
        /**
         * Properties of an AuthResponce.
         * @exports IAuthResponce
         * @interface IAuthResponce
         * @property {number|null} [responce] AuthResponce responce
         * @property {string|null} [message] AuthResponce message
         */
    
        /**
         * Constructs a new AuthResponce.
         * @exports AuthResponce
         * @classdesc Represents an AuthResponce.
         * @implements IAuthResponce
         * @constructor
         * @param {IAuthResponce=} [properties] Properties to set
         */
        function AuthResponce(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * AuthResponce responce.
         * @member {number} responce
         * @memberof AuthResponce
         * @instance
         */
        AuthResponce.prototype.responce = 0;
    
        /**
         * AuthResponce message.
         * @member {string} message
         * @memberof AuthResponce
         * @instance
         */
        AuthResponce.prototype.message = "";
    
        /**
         * Creates a new AuthResponce instance using the specified properties.
         * @function create
         * @memberof AuthResponce
         * @static
         * @param {IAuthResponce=} [properties] Properties to set
         * @returns {AuthResponce} AuthResponce instance
         */
        AuthResponce.create = function create(properties) {
            return new AuthResponce(properties);
        };
    
        /**
         * Encodes the specified AuthResponce message. Does not implicitly {@link AuthResponce.verify|verify} messages.
         * @function encode
         * @memberof AuthResponce
         * @static
         * @param {IAuthResponce} message AuthResponce message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AuthResponce.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.responce != null && Object.hasOwnProperty.call(message, "responce"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.responce);
            if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.message);
            return writer;
        };
    
        /**
         * Encodes the specified AuthResponce message, length delimited. Does not implicitly {@link AuthResponce.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AuthResponce
         * @static
         * @param {IAuthResponce} message AuthResponce message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AuthResponce.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes an AuthResponce message from the specified reader or buffer.
         * @function decode
         * @memberof AuthResponce
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AuthResponce} AuthResponce
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AuthResponce.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AuthResponce();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.responce = reader.int32();
                    break;
                case 2:
                    message.message = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes an AuthResponce message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AuthResponce
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AuthResponce} AuthResponce
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AuthResponce.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies an AuthResponce message.
         * @function verify
         * @memberof AuthResponce
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AuthResponce.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.responce != null && message.hasOwnProperty("responce"))
                if (!$util.isInteger(message.responce))
                    return "responce: integer expected";
            if (message.message != null && message.hasOwnProperty("message"))
                if (!$util.isString(message.message))
                    return "message: string expected";
            return null;
        };
    
        /**
         * Creates an AuthResponce message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AuthResponce
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AuthResponce} AuthResponce
         */
        AuthResponce.fromObject = function fromObject(object) {
            if (object instanceof $root.AuthResponce)
                return object;
            var message = new $root.AuthResponce();
            if (object.responce != null)
                message.responce = object.responce | 0;
            if (object.message != null)
                message.message = String(object.message);
            return message;
        };
    
        /**
         * Creates a plain object from an AuthResponce message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AuthResponce
         * @static
         * @param {AuthResponce} message AuthResponce
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AuthResponce.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.responce = 0;
                object.message = "";
            }
            if (message.responce != null && message.hasOwnProperty("responce"))
                object.responce = message.responce;
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = message.message;
            return object;
        };
    
        /**
         * Converts this AuthResponce to JSON.
         * @function toJSON
         * @memberof AuthResponce
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AuthResponce.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return AuthResponce;
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

    return $root;
});
