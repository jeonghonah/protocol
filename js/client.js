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
    
    $root.LoginResponse = (function() {
    
        /**
         * Properties of a LoginResponse.
         * @exports ILoginResponse
         * @interface ILoginResponse
         * @property {string|null} [username] LoginResponse username
         * @property {number|null} [protocol] LoginResponse protocol
         * @property {boolean|null} [mobile] LoginResponse mobile
         * @property {string|null} [client] LoginResponse client
         * @property {string|null} [uuid] LoginResponse uuid
         * @property {string|null} [secret] LoginResponse secret
         * @property {number|null} [protocolRev] LoginResponse protocolRev
         */
    
        /**
         * Constructs a new LoginResponse.
         * @exports LoginResponse
         * @classdesc Represents a LoginResponse.
         * @implements ILoginResponse
         * @constructor
         * @param {ILoginResponse=} [properties] Properties to set
         */
        function LoginResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * LoginResponse username.
         * @member {string} username
         * @memberof LoginResponse
         * @instance
         */
        LoginResponse.prototype.username = "";
    
        /**
         * LoginResponse protocol.
         * @member {number} protocol
         * @memberof LoginResponse
         * @instance
         */
        LoginResponse.prototype.protocol = 0;
    
        /**
         * LoginResponse mobile.
         * @member {boolean} mobile
         * @memberof LoginResponse
         * @instance
         */
        LoginResponse.prototype.mobile = false;
    
        /**
         * LoginResponse client.
         * @member {string} client
         * @memberof LoginResponse
         * @instance
         */
        LoginResponse.prototype.client = "";
    
        /**
         * LoginResponse uuid.
         * @member {string} uuid
         * @memberof LoginResponse
         * @instance
         */
        LoginResponse.prototype.uuid = "";
    
        /**
         * LoginResponse secret.
         * @member {string} secret
         * @memberof LoginResponse
         * @instance
         */
        LoginResponse.prototype.secret = "";
    
        /**
         * LoginResponse protocolRev.
         * @member {number} protocolRev
         * @memberof LoginResponse
         * @instance
         */
        LoginResponse.prototype.protocolRev = 0;
    
        /**
         * Creates a new LoginResponse instance using the specified properties.
         * @function create
         * @memberof LoginResponse
         * @static
         * @param {ILoginResponse=} [properties] Properties to set
         * @returns {LoginResponse} LoginResponse instance
         */
        LoginResponse.create = function create(properties) {
            return new LoginResponse(properties);
        };
    
        /**
         * Encodes the specified LoginResponse message. Does not implicitly {@link LoginResponse.verify|verify} messages.
         * @function encode
         * @memberof LoginResponse
         * @static
         * @param {ILoginResponse} message LoginResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.username != null && Object.hasOwnProperty.call(message, "username"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.username);
            if (message.protocol != null && Object.hasOwnProperty.call(message, "protocol"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.protocol);
            if (message.mobile != null && Object.hasOwnProperty.call(message, "mobile"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.mobile);
            if (message.client != null && Object.hasOwnProperty.call(message, "client"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.client);
            if (message.uuid != null && Object.hasOwnProperty.call(message, "uuid"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.uuid);
            if (message.secret != null && Object.hasOwnProperty.call(message, "secret"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.secret);
            if (message.protocolRev != null && Object.hasOwnProperty.call(message, "protocolRev"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.protocolRev);
            return writer;
        };
    
        /**
         * Encodes the specified LoginResponse message, length delimited. Does not implicitly {@link LoginResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof LoginResponse
         * @static
         * @param {ILoginResponse} message LoginResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a LoginResponse message from the specified reader or buffer.
         * @function decode
         * @memberof LoginResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {LoginResponse} LoginResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.LoginResponse();
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
                    message.mobile = reader.bool();
                    break;
                case 4:
                    message.client = reader.string();
                    break;
                case 5:
                    message.uuid = reader.string();
                    break;
                case 6:
                    message.secret = reader.string();
                    break;
                case 7:
                    message.protocolRev = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a LoginResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof LoginResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {LoginResponse} LoginResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a LoginResponse message.
         * @function verify
         * @memberof LoginResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LoginResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.username != null && message.hasOwnProperty("username"))
                if (!$util.isString(message.username))
                    return "username: string expected";
            if (message.protocol != null && message.hasOwnProperty("protocol"))
                if (!$util.isInteger(message.protocol))
                    return "protocol: integer expected";
            if (message.mobile != null && message.hasOwnProperty("mobile"))
                if (typeof message.mobile !== "boolean")
                    return "mobile: boolean expected";
            if (message.client != null && message.hasOwnProperty("client"))
                if (!$util.isString(message.client))
                    return "client: string expected";
            if (message.uuid != null && message.hasOwnProperty("uuid"))
                if (!$util.isString(message.uuid))
                    return "uuid: string expected";
            if (message.secret != null && message.hasOwnProperty("secret"))
                if (!$util.isString(message.secret))
                    return "secret: string expected";
            if (message.protocolRev != null && message.hasOwnProperty("protocolRev"))
                if (!$util.isInteger(message.protocolRev))
                    return "protocolRev: integer expected";
            return null;
        };
    
        /**
         * Creates a LoginResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof LoginResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {LoginResponse} LoginResponse
         */
        LoginResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.LoginResponse)
                return object;
            var message = new $root.LoginResponse();
            if (object.username != null)
                message.username = String(object.username);
            if (object.protocol != null)
                message.protocol = object.protocol >>> 0;
            if (object.mobile != null)
                message.mobile = Boolean(object.mobile);
            if (object.client != null)
                message.client = String(object.client);
            if (object.uuid != null)
                message.uuid = String(object.uuid);
            if (object.secret != null)
                message.secret = String(object.secret);
            if (object.protocolRev != null)
                message.protocolRev = object.protocolRev | 0;
            return message;
        };
    
        /**
         * Creates a plain object from a LoginResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof LoginResponse
         * @static
         * @param {LoginResponse} message LoginResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LoginResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.username = "";
                object.protocol = 0;
                object.mobile = false;
                object.client = "";
                object.uuid = "";
                object.secret = "";
                object.protocolRev = 0;
            }
            if (message.username != null && message.hasOwnProperty("username"))
                object.username = message.username;
            if (message.protocol != null && message.hasOwnProperty("protocol"))
                object.protocol = message.protocol;
            if (message.mobile != null && message.hasOwnProperty("mobile"))
                object.mobile = message.mobile;
            if (message.client != null && message.hasOwnProperty("client"))
                object.client = message.client;
            if (message.uuid != null && message.hasOwnProperty("uuid"))
                object.uuid = message.uuid;
            if (message.secret != null && message.hasOwnProperty("secret"))
                object.secret = message.secret;
            if (message.protocolRev != null && message.hasOwnProperty("protocolRev"))
                object.protocolRev = message.protocolRev;
            return object;
        };
    
        /**
         * Converts this LoginResponse to JSON.
         * @function toJSON
         * @memberof LoginResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LoginResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return LoginResponse;
    })();
    
    $root.Ping = (function() {
    
        /**
         * Properties of a Ping.
         * @exports IPing
         * @interface IPing
         * @property {number|Long|null} [time] Ping time
         */
    
        /**
         * Constructs a new Ping.
         * @exports Ping
         * @classdesc Represents a Ping.
         * @implements IPing
         * @constructor
         * @param {IPing=} [properties] Properties to set
         */
        function Ping(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Ping time.
         * @member {number|Long} time
         * @memberof Ping
         * @instance
         */
        Ping.prototype.time = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * Creates a new Ping instance using the specified properties.
         * @function create
         * @memberof Ping
         * @static
         * @param {IPing=} [properties] Properties to set
         * @returns {Ping} Ping instance
         */
        Ping.create = function create(properties) {
            return new Ping(properties);
        };
    
        /**
         * Encodes the specified Ping message. Does not implicitly {@link Ping.verify|verify} messages.
         * @function encode
         * @memberof Ping
         * @static
         * @param {IPing} message Ping message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Ping.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.time != null && Object.hasOwnProperty.call(message, "time"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.time);
            return writer;
        };
    
        /**
         * Encodes the specified Ping message, length delimited. Does not implicitly {@link Ping.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Ping
         * @static
         * @param {IPing} message Ping message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Ping.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a Ping message from the specified reader or buffer.
         * @function decode
         * @memberof Ping
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Ping} Ping
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Ping.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Ping();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.time = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a Ping message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Ping
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Ping} Ping
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Ping.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a Ping message.
         * @function verify
         * @memberof Ping
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Ping.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.time != null && message.hasOwnProperty("time"))
                if (!$util.isInteger(message.time) && !(message.time && $util.isInteger(message.time.low) && $util.isInteger(message.time.high)))
                    return "time: integer|Long expected";
            return null;
        };
    
        /**
         * Creates a Ping message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Ping
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Ping} Ping
         */
        Ping.fromObject = function fromObject(object) {
            if (object instanceof $root.Ping)
                return object;
            var message = new $root.Ping();
            if (object.time != null)
                if ($util.Long)
                    (message.time = $util.Long.fromValue(object.time)).unsigned = true;
                else if (typeof object.time === "string")
                    message.time = parseInt(object.time, 10);
                else if (typeof object.time === "number")
                    message.time = object.time;
                else if (typeof object.time === "object")
                    message.time = new $util.LongBits(object.time.low >>> 0, object.time.high >>> 0).toNumber(true);
            return message;
        };
    
        /**
         * Creates a plain object from a Ping message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Ping
         * @static
         * @param {Ping} message Ping
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Ping.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.time = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.time = options.longs === String ? "0" : 0;
            if (message.time != null && message.hasOwnProperty("time"))
                if (typeof message.time === "number")
                    object.time = options.longs === String ? String(message.time) : message.time;
                else
                    object.time = options.longs === String ? $util.Long.prototype.toString.call(message.time) : options.longs === Number ? new $util.LongBits(message.time.low >>> 0, message.time.high >>> 0).toNumber(true) : message.time;
            return object;
        };
    
        /**
         * Converts this Ping to JSON.
         * @function toJSON
         * @memberof Ping
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Ping.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return Ping;
    })();
    
    $root.ActionMove = (function() {
    
        /**
         * Properties of an ActionMove.
         * @exports IActionMove
         * @interface IActionMove
         * @property {number|null} [x] ActionMove x
         * @property {number|null} [y] ActionMove y
         * @property {number|null} [z] ActionMove z
         */
    
        /**
         * Constructs a new ActionMove.
         * @exports ActionMove
         * @classdesc Represents an ActionMove.
         * @implements IActionMove
         * @constructor
         * @param {IActionMove=} [properties] Properties to set
         */
        function ActionMove(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * ActionMove x.
         * @member {number} x
         * @memberof ActionMove
         * @instance
         */
        ActionMove.prototype.x = 0;
    
        /**
         * ActionMove y.
         * @member {number} y
         * @memberof ActionMove
         * @instance
         */
        ActionMove.prototype.y = 0;
    
        /**
         * ActionMove z.
         * @member {number} z
         * @memberof ActionMove
         * @instance
         */
        ActionMove.prototype.z = 0;
    
        /**
         * Creates a new ActionMove instance using the specified properties.
         * @function create
         * @memberof ActionMove
         * @static
         * @param {IActionMove=} [properties] Properties to set
         * @returns {ActionMove} ActionMove instance
         */
        ActionMove.create = function create(properties) {
            return new ActionMove(properties);
        };
    
        /**
         * Encodes the specified ActionMove message. Does not implicitly {@link ActionMove.verify|verify} messages.
         * @function encode
         * @memberof ActionMove
         * @static
         * @param {IActionMove} message ActionMove message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ActionMove.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.x != null && Object.hasOwnProperty.call(message, "x"))
                writer.uint32(/* id 1, wireType 1 =*/9).double(message.x);
            if (message.y != null && Object.hasOwnProperty.call(message, "y"))
                writer.uint32(/* id 2, wireType 1 =*/17).double(message.y);
            if (message.z != null && Object.hasOwnProperty.call(message, "z"))
                writer.uint32(/* id 3, wireType 1 =*/25).double(message.z);
            return writer;
        };
    
        /**
         * Encodes the specified ActionMove message, length delimited. Does not implicitly {@link ActionMove.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ActionMove
         * @static
         * @param {IActionMove} message ActionMove message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ActionMove.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes an ActionMove message from the specified reader or buffer.
         * @function decode
         * @memberof ActionMove
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ActionMove} ActionMove
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ActionMove.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ActionMove();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.x = reader.double();
                    break;
                case 2:
                    message.y = reader.double();
                    break;
                case 3:
                    message.z = reader.double();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes an ActionMove message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ActionMove
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ActionMove} ActionMove
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ActionMove.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies an ActionMove message.
         * @function verify
         * @memberof ActionMove
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ActionMove.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.x != null && message.hasOwnProperty("x"))
                if (typeof message.x !== "number")
                    return "x: number expected";
            if (message.y != null && message.hasOwnProperty("y"))
                if (typeof message.y !== "number")
                    return "y: number expected";
            if (message.z != null && message.hasOwnProperty("z"))
                if (typeof message.z !== "number")
                    return "z: number expected";
            return null;
        };
    
        /**
         * Creates an ActionMove message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ActionMove
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ActionMove} ActionMove
         */
        ActionMove.fromObject = function fromObject(object) {
            if (object instanceof $root.ActionMove)
                return object;
            var message = new $root.ActionMove();
            if (object.x != null)
                message.x = Number(object.x);
            if (object.y != null)
                message.y = Number(object.y);
            if (object.z != null)
                message.z = Number(object.z);
            return message;
        };
    
        /**
         * Creates a plain object from an ActionMove message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ActionMove
         * @static
         * @param {ActionMove} message ActionMove
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ActionMove.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.x = 0;
                object.y = 0;
                object.z = 0;
            }
            if (message.x != null && message.hasOwnProperty("x"))
                object.x = options.json && !isFinite(message.x) ? String(message.x) : message.x;
            if (message.y != null && message.hasOwnProperty("y"))
                object.y = options.json && !isFinite(message.y) ? String(message.y) : message.y;
            if (message.z != null && message.hasOwnProperty("z"))
                object.z = options.json && !isFinite(message.z) ? String(message.z) : message.z;
            return object;
        };
    
        /**
         * Converts this ActionMove to JSON.
         * @function toJSON
         * @memberof ActionMove
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ActionMove.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return ActionMove;
    })();
    
    $root.ActionLook = (function() {
    
        /**
         * Properties of an ActionLook.
         * @exports IActionLook
         * @interface IActionLook
         * @property {number|null} [rotation] ActionLook rotation
         * @property {number|null} [pitch] ActionLook pitch
         */
    
        /**
         * Constructs a new ActionLook.
         * @exports ActionLook
         * @classdesc Represents an ActionLook.
         * @implements IActionLook
         * @constructor
         * @param {IActionLook=} [properties] Properties to set
         */
        function ActionLook(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * ActionLook rotation.
         * @member {number} rotation
         * @memberof ActionLook
         * @instance
         */
        ActionLook.prototype.rotation = 0;
    
        /**
         * ActionLook pitch.
         * @member {number} pitch
         * @memberof ActionLook
         * @instance
         */
        ActionLook.prototype.pitch = 0;
    
        /**
         * Creates a new ActionLook instance using the specified properties.
         * @function create
         * @memberof ActionLook
         * @static
         * @param {IActionLook=} [properties] Properties to set
         * @returns {ActionLook} ActionLook instance
         */
        ActionLook.create = function create(properties) {
            return new ActionLook(properties);
        };
    
        /**
         * Encodes the specified ActionLook message. Does not implicitly {@link ActionLook.verify|verify} messages.
         * @function encode
         * @memberof ActionLook
         * @static
         * @param {IActionLook} message ActionLook message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ActionLook.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.rotation != null && Object.hasOwnProperty.call(message, "rotation"))
                writer.uint32(/* id 1, wireType 5 =*/13).float(message.rotation);
            if (message.pitch != null && Object.hasOwnProperty.call(message, "pitch"))
                writer.uint32(/* id 2, wireType 5 =*/21).float(message.pitch);
            return writer;
        };
    
        /**
         * Encodes the specified ActionLook message, length delimited. Does not implicitly {@link ActionLook.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ActionLook
         * @static
         * @param {IActionLook} message ActionLook message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ActionLook.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes an ActionLook message from the specified reader or buffer.
         * @function decode
         * @memberof ActionLook
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ActionLook} ActionLook
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ActionLook.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ActionLook();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.rotation = reader.float();
                    break;
                case 2:
                    message.pitch = reader.float();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes an ActionLook message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ActionLook
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ActionLook} ActionLook
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ActionLook.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies an ActionLook message.
         * @function verify
         * @memberof ActionLook
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ActionLook.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.rotation != null && message.hasOwnProperty("rotation"))
                if (typeof message.rotation !== "number")
                    return "rotation: number expected";
            if (message.pitch != null && message.hasOwnProperty("pitch"))
                if (typeof message.pitch !== "number")
                    return "pitch: number expected";
            return null;
        };
    
        /**
         * Creates an ActionLook message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ActionLook
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ActionLook} ActionLook
         */
        ActionLook.fromObject = function fromObject(object) {
            if (object instanceof $root.ActionLook)
                return object;
            var message = new $root.ActionLook();
            if (object.rotation != null)
                message.rotation = Number(object.rotation);
            if (object.pitch != null)
                message.pitch = Number(object.pitch);
            return message;
        };
    
        /**
         * Creates a plain object from an ActionLook message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ActionLook
         * @static
         * @param {ActionLook} message ActionLook
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ActionLook.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.rotation = 0;
                object.pitch = 0;
            }
            if (message.rotation != null && message.hasOwnProperty("rotation"))
                object.rotation = options.json && !isFinite(message.rotation) ? String(message.rotation) : message.rotation;
            if (message.pitch != null && message.hasOwnProperty("pitch"))
                object.pitch = options.json && !isFinite(message.pitch) ? String(message.pitch) : message.pitch;
            return object;
        };
    
        /**
         * Converts this ActionLook to JSON.
         * @function toJSON
         * @memberof ActionLook
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ActionLook.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return ActionLook;
    })();
    
    $root.ActionMoveLook = (function() {
    
        /**
         * Properties of an ActionMoveLook.
         * @exports IActionMoveLook
         * @interface IActionMoveLook
         * @property {number|null} [x] ActionMoveLook x
         * @property {number|null} [y] ActionMoveLook y
         * @property {number|null} [z] ActionMoveLook z
         * @property {number|null} [rotation] ActionMoveLook rotation
         * @property {number|null} [pitch] ActionMoveLook pitch
         */
    
        /**
         * Constructs a new ActionMoveLook.
         * @exports ActionMoveLook
         * @classdesc Represents an ActionMoveLook.
         * @implements IActionMoveLook
         * @constructor
         * @param {IActionMoveLook=} [properties] Properties to set
         */
        function ActionMoveLook(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * ActionMoveLook x.
         * @member {number} x
         * @memberof ActionMoveLook
         * @instance
         */
        ActionMoveLook.prototype.x = 0;
    
        /**
         * ActionMoveLook y.
         * @member {number} y
         * @memberof ActionMoveLook
         * @instance
         */
        ActionMoveLook.prototype.y = 0;
    
        /**
         * ActionMoveLook z.
         * @member {number} z
         * @memberof ActionMoveLook
         * @instance
         */
        ActionMoveLook.prototype.z = 0;
    
        /**
         * ActionMoveLook rotation.
         * @member {number} rotation
         * @memberof ActionMoveLook
         * @instance
         */
        ActionMoveLook.prototype.rotation = 0;
    
        /**
         * ActionMoveLook pitch.
         * @member {number} pitch
         * @memberof ActionMoveLook
         * @instance
         */
        ActionMoveLook.prototype.pitch = 0;
    
        /**
         * Creates a new ActionMoveLook instance using the specified properties.
         * @function create
         * @memberof ActionMoveLook
         * @static
         * @param {IActionMoveLook=} [properties] Properties to set
         * @returns {ActionMoveLook} ActionMoveLook instance
         */
        ActionMoveLook.create = function create(properties) {
            return new ActionMoveLook(properties);
        };
    
        /**
         * Encodes the specified ActionMoveLook message. Does not implicitly {@link ActionMoveLook.verify|verify} messages.
         * @function encode
         * @memberof ActionMoveLook
         * @static
         * @param {IActionMoveLook} message ActionMoveLook message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ActionMoveLook.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.x != null && Object.hasOwnProperty.call(message, "x"))
                writer.uint32(/* id 1, wireType 1 =*/9).double(message.x);
            if (message.y != null && Object.hasOwnProperty.call(message, "y"))
                writer.uint32(/* id 2, wireType 1 =*/17).double(message.y);
            if (message.z != null && Object.hasOwnProperty.call(message, "z"))
                writer.uint32(/* id 3, wireType 1 =*/25).double(message.z);
            if (message.rotation != null && Object.hasOwnProperty.call(message, "rotation"))
                writer.uint32(/* id 4, wireType 5 =*/37).float(message.rotation);
            if (message.pitch != null && Object.hasOwnProperty.call(message, "pitch"))
                writer.uint32(/* id 5, wireType 5 =*/45).float(message.pitch);
            return writer;
        };
    
        /**
         * Encodes the specified ActionMoveLook message, length delimited. Does not implicitly {@link ActionMoveLook.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ActionMoveLook
         * @static
         * @param {IActionMoveLook} message ActionMoveLook message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ActionMoveLook.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes an ActionMoveLook message from the specified reader or buffer.
         * @function decode
         * @memberof ActionMoveLook
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ActionMoveLook} ActionMoveLook
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ActionMoveLook.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ActionMoveLook();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.x = reader.double();
                    break;
                case 2:
                    message.y = reader.double();
                    break;
                case 3:
                    message.z = reader.double();
                    break;
                case 4:
                    message.rotation = reader.float();
                    break;
                case 5:
                    message.pitch = reader.float();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes an ActionMoveLook message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ActionMoveLook
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ActionMoveLook} ActionMoveLook
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ActionMoveLook.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies an ActionMoveLook message.
         * @function verify
         * @memberof ActionMoveLook
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ActionMoveLook.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.x != null && message.hasOwnProperty("x"))
                if (typeof message.x !== "number")
                    return "x: number expected";
            if (message.y != null && message.hasOwnProperty("y"))
                if (typeof message.y !== "number")
                    return "y: number expected";
            if (message.z != null && message.hasOwnProperty("z"))
                if (typeof message.z !== "number")
                    return "z: number expected";
            if (message.rotation != null && message.hasOwnProperty("rotation"))
                if (typeof message.rotation !== "number")
                    return "rotation: number expected";
            if (message.pitch != null && message.hasOwnProperty("pitch"))
                if (typeof message.pitch !== "number")
                    return "pitch: number expected";
            return null;
        };
    
        /**
         * Creates an ActionMoveLook message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ActionMoveLook
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ActionMoveLook} ActionMoveLook
         */
        ActionMoveLook.fromObject = function fromObject(object) {
            if (object instanceof $root.ActionMoveLook)
                return object;
            var message = new $root.ActionMoveLook();
            if (object.x != null)
                message.x = Number(object.x);
            if (object.y != null)
                message.y = Number(object.y);
            if (object.z != null)
                message.z = Number(object.z);
            if (object.rotation != null)
                message.rotation = Number(object.rotation);
            if (object.pitch != null)
                message.pitch = Number(object.pitch);
            return message;
        };
    
        /**
         * Creates a plain object from an ActionMoveLook message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ActionMoveLook
         * @static
         * @param {ActionMoveLook} message ActionMoveLook
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ActionMoveLook.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.x = 0;
                object.y = 0;
                object.z = 0;
                object.rotation = 0;
                object.pitch = 0;
            }
            if (message.x != null && message.hasOwnProperty("x"))
                object.x = options.json && !isFinite(message.x) ? String(message.x) : message.x;
            if (message.y != null && message.hasOwnProperty("y"))
                object.y = options.json && !isFinite(message.y) ? String(message.y) : message.y;
            if (message.z != null && message.hasOwnProperty("z"))
                object.z = options.json && !isFinite(message.z) ? String(message.z) : message.z;
            if (message.rotation != null && message.hasOwnProperty("rotation"))
                object.rotation = options.json && !isFinite(message.rotation) ? String(message.rotation) : message.rotation;
            if (message.pitch != null && message.hasOwnProperty("pitch"))
                object.pitch = options.json && !isFinite(message.pitch) ? String(message.pitch) : message.pitch;
            return object;
        };
    
        /**
         * Converts this ActionMoveLook to JSON.
         * @function toJSON
         * @memberof ActionMoveLook
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ActionMoveLook.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return ActionMoveLook;
    })();
    
    $root.ActionMessage = (function() {
    
        /**
         * Properties of an ActionMessage.
         * @exports IActionMessage
         * @interface IActionMessage
         * @property {string|null} [message] ActionMessage message
         */
    
        /**
         * Constructs a new ActionMessage.
         * @exports ActionMessage
         * @classdesc Represents an ActionMessage.
         * @implements IActionMessage
         * @constructor
         * @param {IActionMessage=} [properties] Properties to set
         */
        function ActionMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * ActionMessage message.
         * @member {string} message
         * @memberof ActionMessage
         * @instance
         */
        ActionMessage.prototype.message = "";
    
        /**
         * Creates a new ActionMessage instance using the specified properties.
         * @function create
         * @memberof ActionMessage
         * @static
         * @param {IActionMessage=} [properties] Properties to set
         * @returns {ActionMessage} ActionMessage instance
         */
        ActionMessage.create = function create(properties) {
            return new ActionMessage(properties);
        };
    
        /**
         * Encodes the specified ActionMessage message. Does not implicitly {@link ActionMessage.verify|verify} messages.
         * @function encode
         * @memberof ActionMessage
         * @static
         * @param {IActionMessage} message ActionMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ActionMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.message);
            return writer;
        };
    
        /**
         * Encodes the specified ActionMessage message, length delimited. Does not implicitly {@link ActionMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ActionMessage
         * @static
         * @param {IActionMessage} message ActionMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ActionMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes an ActionMessage message from the specified reader or buffer.
         * @function decode
         * @memberof ActionMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ActionMessage} ActionMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ActionMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ActionMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
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
         * Decodes an ActionMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ActionMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ActionMessage} ActionMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ActionMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies an ActionMessage message.
         * @function verify
         * @memberof ActionMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ActionMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.message != null && message.hasOwnProperty("message"))
                if (!$util.isString(message.message))
                    return "message: string expected";
            return null;
        };
    
        /**
         * Creates an ActionMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ActionMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ActionMessage} ActionMessage
         */
        ActionMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.ActionMessage)
                return object;
            var message = new $root.ActionMessage();
            if (object.message != null)
                message.message = String(object.message);
            return message;
        };
    
        /**
         * Creates a plain object from an ActionMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ActionMessage
         * @static
         * @param {ActionMessage} message ActionMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ActionMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.message = "";
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = message.message;
            return object;
        };
    
        /**
         * Converts this ActionMessage to JSON.
         * @function toJSON
         * @memberof ActionMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ActionMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return ActionMessage;
    })();
    
    $root.ActionBlockPlace = (function() {
    
        /**
         * Properties of an ActionBlockPlace.
         * @exports IActionBlockPlace
         * @interface IActionBlockPlace
         * @property {number|null} [x] ActionBlockPlace x
         * @property {number|null} [y] ActionBlockPlace y
         * @property {number|null} [z] ActionBlockPlace z
         * @property {number|null} [x2] ActionBlockPlace x2
         * @property {number|null} [y2] ActionBlockPlace y2
         * @property {number|null} [z2] ActionBlockPlace z2
         */
    
        /**
         * Constructs a new ActionBlockPlace.
         * @exports ActionBlockPlace
         * @classdesc Represents an ActionBlockPlace.
         * @implements IActionBlockPlace
         * @constructor
         * @param {IActionBlockPlace=} [properties] Properties to set
         */
        function ActionBlockPlace(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * ActionBlockPlace x.
         * @member {number} x
         * @memberof ActionBlockPlace
         * @instance
         */
        ActionBlockPlace.prototype.x = 0;
    
        /**
         * ActionBlockPlace y.
         * @member {number} y
         * @memberof ActionBlockPlace
         * @instance
         */
        ActionBlockPlace.prototype.y = 0;
    
        /**
         * ActionBlockPlace z.
         * @member {number} z
         * @memberof ActionBlockPlace
         * @instance
         */
        ActionBlockPlace.prototype.z = 0;
    
        /**
         * ActionBlockPlace x2.
         * @member {number} x2
         * @memberof ActionBlockPlace
         * @instance
         */
        ActionBlockPlace.prototype.x2 = 0;
    
        /**
         * ActionBlockPlace y2.
         * @member {number} y2
         * @memberof ActionBlockPlace
         * @instance
         */
        ActionBlockPlace.prototype.y2 = 0;
    
        /**
         * ActionBlockPlace z2.
         * @member {number} z2
         * @memberof ActionBlockPlace
         * @instance
         */
        ActionBlockPlace.prototype.z2 = 0;
    
        /**
         * Creates a new ActionBlockPlace instance using the specified properties.
         * @function create
         * @memberof ActionBlockPlace
         * @static
         * @param {IActionBlockPlace=} [properties] Properties to set
         * @returns {ActionBlockPlace} ActionBlockPlace instance
         */
        ActionBlockPlace.create = function create(properties) {
            return new ActionBlockPlace(properties);
        };
    
        /**
         * Encodes the specified ActionBlockPlace message. Does not implicitly {@link ActionBlockPlace.verify|verify} messages.
         * @function encode
         * @memberof ActionBlockPlace
         * @static
         * @param {IActionBlockPlace} message ActionBlockPlace message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ActionBlockPlace.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.x != null && Object.hasOwnProperty.call(message, "x"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.x);
            if (message.y != null && Object.hasOwnProperty.call(message, "y"))
                writer.uint32(/* id 2, wireType 0 =*/16).sint32(message.y);
            if (message.z != null && Object.hasOwnProperty.call(message, "z"))
                writer.uint32(/* id 3, wireType 0 =*/24).sint32(message.z);
            if (message.x2 != null && Object.hasOwnProperty.call(message, "x2"))
                writer.uint32(/* id 4, wireType 0 =*/32).sint32(message.x2);
            if (message.y2 != null && Object.hasOwnProperty.call(message, "y2"))
                writer.uint32(/* id 5, wireType 0 =*/40).sint32(message.y2);
            if (message.z2 != null && Object.hasOwnProperty.call(message, "z2"))
                writer.uint32(/* id 6, wireType 0 =*/48).sint32(message.z2);
            return writer;
        };
    
        /**
         * Encodes the specified ActionBlockPlace message, length delimited. Does not implicitly {@link ActionBlockPlace.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ActionBlockPlace
         * @static
         * @param {IActionBlockPlace} message ActionBlockPlace message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ActionBlockPlace.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes an ActionBlockPlace message from the specified reader or buffer.
         * @function decode
         * @memberof ActionBlockPlace
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ActionBlockPlace} ActionBlockPlace
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ActionBlockPlace.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ActionBlockPlace();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.x = reader.sint32();
                    break;
                case 2:
                    message.y = reader.sint32();
                    break;
                case 3:
                    message.z = reader.sint32();
                    break;
                case 4:
                    message.x2 = reader.sint32();
                    break;
                case 5:
                    message.y2 = reader.sint32();
                    break;
                case 6:
                    message.z2 = reader.sint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes an ActionBlockPlace message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ActionBlockPlace
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ActionBlockPlace} ActionBlockPlace
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ActionBlockPlace.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies an ActionBlockPlace message.
         * @function verify
         * @memberof ActionBlockPlace
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ActionBlockPlace.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.x != null && message.hasOwnProperty("x"))
                if (!$util.isInteger(message.x))
                    return "x: integer expected";
            if (message.y != null && message.hasOwnProperty("y"))
                if (!$util.isInteger(message.y))
                    return "y: integer expected";
            if (message.z != null && message.hasOwnProperty("z"))
                if (!$util.isInteger(message.z))
                    return "z: integer expected";
            if (message.x2 != null && message.hasOwnProperty("x2"))
                if (!$util.isInteger(message.x2))
                    return "x2: integer expected";
            if (message.y2 != null && message.hasOwnProperty("y2"))
                if (!$util.isInteger(message.y2))
                    return "y2: integer expected";
            if (message.z2 != null && message.hasOwnProperty("z2"))
                if (!$util.isInteger(message.z2))
                    return "z2: integer expected";
            return null;
        };
    
        /**
         * Creates an ActionBlockPlace message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ActionBlockPlace
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ActionBlockPlace} ActionBlockPlace
         */
        ActionBlockPlace.fromObject = function fromObject(object) {
            if (object instanceof $root.ActionBlockPlace)
                return object;
            var message = new $root.ActionBlockPlace();
            if (object.x != null)
                message.x = object.x | 0;
            if (object.y != null)
                message.y = object.y | 0;
            if (object.z != null)
                message.z = object.z | 0;
            if (object.x2 != null)
                message.x2 = object.x2 | 0;
            if (object.y2 != null)
                message.y2 = object.y2 | 0;
            if (object.z2 != null)
                message.z2 = object.z2 | 0;
            return message;
        };
    
        /**
         * Creates a plain object from an ActionBlockPlace message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ActionBlockPlace
         * @static
         * @param {ActionBlockPlace} message ActionBlockPlace
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ActionBlockPlace.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.x = 0;
                object.y = 0;
                object.z = 0;
                object.x2 = 0;
                object.y2 = 0;
                object.z2 = 0;
            }
            if (message.x != null && message.hasOwnProperty("x"))
                object.x = message.x;
            if (message.y != null && message.hasOwnProperty("y"))
                object.y = message.y;
            if (message.z != null && message.hasOwnProperty("z"))
                object.z = message.z;
            if (message.x2 != null && message.hasOwnProperty("x2"))
                object.x2 = message.x2;
            if (message.y2 != null && message.hasOwnProperty("y2"))
                object.y2 = message.y2;
            if (message.z2 != null && message.hasOwnProperty("z2"))
                object.z2 = message.z2;
            return object;
        };
    
        /**
         * Converts this ActionBlockPlace to JSON.
         * @function toJSON
         * @memberof ActionBlockPlace
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ActionBlockPlace.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return ActionBlockPlace;
    })();
    
    $root.ActionBlockBreak = (function() {
    
        /**
         * Properties of an ActionBlockBreak.
         * @exports IActionBlockBreak
         * @interface IActionBlockBreak
         * @property {number|null} [x] ActionBlockBreak x
         * @property {number|null} [y] ActionBlockBreak y
         * @property {number|null} [z] ActionBlockBreak z
         * @property {number|null} [status] ActionBlockBreak status
         */
    
        /**
         * Constructs a new ActionBlockBreak.
         * @exports ActionBlockBreak
         * @classdesc Represents an ActionBlockBreak.
         * @implements IActionBlockBreak
         * @constructor
         * @param {IActionBlockBreak=} [properties] Properties to set
         */
        function ActionBlockBreak(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * ActionBlockBreak x.
         * @member {number} x
         * @memberof ActionBlockBreak
         * @instance
         */
        ActionBlockBreak.prototype.x = 0;
    
        /**
         * ActionBlockBreak y.
         * @member {number} y
         * @memberof ActionBlockBreak
         * @instance
         */
        ActionBlockBreak.prototype.y = 0;
    
        /**
         * ActionBlockBreak z.
         * @member {number} z
         * @memberof ActionBlockBreak
         * @instance
         */
        ActionBlockBreak.prototype.z = 0;
    
        /**
         * ActionBlockBreak status.
         * @member {number} status
         * @memberof ActionBlockBreak
         * @instance
         */
        ActionBlockBreak.prototype.status = 0;
    
        /**
         * Creates a new ActionBlockBreak instance using the specified properties.
         * @function create
         * @memberof ActionBlockBreak
         * @static
         * @param {IActionBlockBreak=} [properties] Properties to set
         * @returns {ActionBlockBreak} ActionBlockBreak instance
         */
        ActionBlockBreak.create = function create(properties) {
            return new ActionBlockBreak(properties);
        };
    
        /**
         * Encodes the specified ActionBlockBreak message. Does not implicitly {@link ActionBlockBreak.verify|verify} messages.
         * @function encode
         * @memberof ActionBlockBreak
         * @static
         * @param {IActionBlockBreak} message ActionBlockBreak message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ActionBlockBreak.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.x != null && Object.hasOwnProperty.call(message, "x"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.x);
            if (message.y != null && Object.hasOwnProperty.call(message, "y"))
                writer.uint32(/* id 2, wireType 0 =*/16).sint32(message.y);
            if (message.z != null && Object.hasOwnProperty.call(message, "z"))
                writer.uint32(/* id 3, wireType 0 =*/24).sint32(message.z);
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.status);
            return writer;
        };
    
        /**
         * Encodes the specified ActionBlockBreak message, length delimited. Does not implicitly {@link ActionBlockBreak.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ActionBlockBreak
         * @static
         * @param {IActionBlockBreak} message ActionBlockBreak message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ActionBlockBreak.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes an ActionBlockBreak message from the specified reader or buffer.
         * @function decode
         * @memberof ActionBlockBreak
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ActionBlockBreak} ActionBlockBreak
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ActionBlockBreak.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ActionBlockBreak();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.x = reader.sint32();
                    break;
                case 2:
                    message.y = reader.sint32();
                    break;
                case 3:
                    message.z = reader.sint32();
                    break;
                case 4:
                    message.status = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes an ActionBlockBreak message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ActionBlockBreak
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ActionBlockBreak} ActionBlockBreak
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ActionBlockBreak.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies an ActionBlockBreak message.
         * @function verify
         * @memberof ActionBlockBreak
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ActionBlockBreak.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.x != null && message.hasOwnProperty("x"))
                if (!$util.isInteger(message.x))
                    return "x: integer expected";
            if (message.y != null && message.hasOwnProperty("y"))
                if (!$util.isInteger(message.y))
                    return "y: integer expected";
            if (message.z != null && message.hasOwnProperty("z"))
                if (!$util.isInteger(message.z))
                    return "z: integer expected";
            if (message.status != null && message.hasOwnProperty("status"))
                if (!$util.isInteger(message.status))
                    return "status: integer expected";
            return null;
        };
    
        /**
         * Creates an ActionBlockBreak message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ActionBlockBreak
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ActionBlockBreak} ActionBlockBreak
         */
        ActionBlockBreak.fromObject = function fromObject(object) {
            if (object instanceof $root.ActionBlockBreak)
                return object;
            var message = new $root.ActionBlockBreak();
            if (object.x != null)
                message.x = object.x | 0;
            if (object.y != null)
                message.y = object.y | 0;
            if (object.z != null)
                message.z = object.z | 0;
            if (object.status != null)
                message.status = object.status >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from an ActionBlockBreak message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ActionBlockBreak
         * @static
         * @param {ActionBlockBreak} message ActionBlockBreak
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ActionBlockBreak.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.x = 0;
                object.y = 0;
                object.z = 0;
                object.status = 0;
            }
            if (message.x != null && message.hasOwnProperty("x"))
                object.x = message.x;
            if (message.y != null && message.hasOwnProperty("y"))
                object.y = message.y;
            if (message.z != null && message.hasOwnProperty("z"))
                object.z = message.z;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = message.status;
            return object;
        };
    
        /**
         * Converts this ActionBlockBreak to JSON.
         * @function toJSON
         * @memberof ActionBlockBreak
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ActionBlockBreak.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return ActionBlockBreak;
    })();
    
    $root.ActionInventoryClick = (function() {
    
        /**
         * Properties of an ActionInventoryClick.
         * @exports IActionInventoryClick
         * @interface IActionInventoryClick
         * @property {number|null} [slot] ActionInventoryClick slot
         * @property {MouseClickType|null} [type] ActionInventoryClick type
         * @property {InventoryType|null} [inventory] ActionInventoryClick inventory
         */
    
        /**
         * Constructs a new ActionInventoryClick.
         * @exports ActionInventoryClick
         * @classdesc Represents an ActionInventoryClick.
         * @implements IActionInventoryClick
         * @constructor
         * @param {IActionInventoryClick=} [properties] Properties to set
         */
        function ActionInventoryClick(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * ActionInventoryClick slot.
         * @member {number} slot
         * @memberof ActionInventoryClick
         * @instance
         */
        ActionInventoryClick.prototype.slot = 0;
    
        /**
         * ActionInventoryClick type.
         * @member {MouseClickType} type
         * @memberof ActionInventoryClick
         * @instance
         */
        ActionInventoryClick.prototype.type = 0;
    
        /**
         * ActionInventoryClick inventory.
         * @member {InventoryType} inventory
         * @memberof ActionInventoryClick
         * @instance
         */
        ActionInventoryClick.prototype.inventory = 0;
    
        /**
         * Creates a new ActionInventoryClick instance using the specified properties.
         * @function create
         * @memberof ActionInventoryClick
         * @static
         * @param {IActionInventoryClick=} [properties] Properties to set
         * @returns {ActionInventoryClick} ActionInventoryClick instance
         */
        ActionInventoryClick.create = function create(properties) {
            return new ActionInventoryClick(properties);
        };
    
        /**
         * Encodes the specified ActionInventoryClick message. Does not implicitly {@link ActionInventoryClick.verify|verify} messages.
         * @function encode
         * @memberof ActionInventoryClick
         * @static
         * @param {IActionInventoryClick} message ActionInventoryClick message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ActionInventoryClick.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.slot != null && Object.hasOwnProperty.call(message, "slot"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.slot);
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.type);
            if (message.inventory != null && Object.hasOwnProperty.call(message, "inventory"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.inventory);
            return writer;
        };
    
        /**
         * Encodes the specified ActionInventoryClick message, length delimited. Does not implicitly {@link ActionInventoryClick.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ActionInventoryClick
         * @static
         * @param {IActionInventoryClick} message ActionInventoryClick message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ActionInventoryClick.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes an ActionInventoryClick message from the specified reader or buffer.
         * @function decode
         * @memberof ActionInventoryClick
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ActionInventoryClick} ActionInventoryClick
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ActionInventoryClick.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ActionInventoryClick();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.slot = reader.int32();
                    break;
                case 2:
                    message.type = reader.int32();
                    break;
                case 3:
                    message.inventory = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes an ActionInventoryClick message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ActionInventoryClick
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ActionInventoryClick} ActionInventoryClick
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ActionInventoryClick.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies an ActionInventoryClick message.
         * @function verify
         * @memberof ActionInventoryClick
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ActionInventoryClick.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.slot != null && message.hasOwnProperty("slot"))
                if (!$util.isInteger(message.slot))
                    return "slot: integer expected";
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
            if (message.inventory != null && message.hasOwnProperty("inventory"))
                switch (message.inventory) {
                default:
                    return "inventory: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                    break;
                }
            return null;
        };
    
        /**
         * Creates an ActionInventoryClick message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ActionInventoryClick
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ActionInventoryClick} ActionInventoryClick
         */
        ActionInventoryClick.fromObject = function fromObject(object) {
            if (object instanceof $root.ActionInventoryClick)
                return object;
            var message = new $root.ActionInventoryClick();
            if (object.slot != null)
                message.slot = object.slot | 0;
            switch (object.type) {
            case "LEFT":
            case 0:
                message.type = 0;
                break;
            case "RIGHT":
            case 1:
                message.type = 1;
                break;
            case "MIDDLE":
            case 2:
                message.type = 2;
                break;
            case "SELECT":
            case 3:
                message.type = 3;
                break;
            }
            switch (object.inventory) {
            case "MAIN":
            case 0:
                message.inventory = 0;
                break;
            case "ARMOR":
            case 1:
                message.inventory = 1;
                break;
            case "CRAFT":
            case 2:
                message.inventory = 2;
                break;
            case "HOOK":
            case 3:
                message.inventory = 3;
                break;
            case "TEMP":
            case 4:
                message.inventory = 4;
                break;
            }
            return message;
        };
    
        /**
         * Creates a plain object from an ActionInventoryClick message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ActionInventoryClick
         * @static
         * @param {ActionInventoryClick} message ActionInventoryClick
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ActionInventoryClick.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.slot = 0;
                object.type = options.enums === String ? "LEFT" : 0;
                object.inventory = options.enums === String ? "MAIN" : 0;
            }
            if (message.slot != null && message.hasOwnProperty("slot"))
                object.slot = message.slot;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = options.enums === String ? $root.MouseClickType[message.type] : message.type;
            if (message.inventory != null && message.hasOwnProperty("inventory"))
                object.inventory = options.enums === String ? $root.InventoryType[message.inventory] : message.inventory;
            return object;
        };
    
        /**
         * Converts this ActionInventoryClick to JSON.
         * @function toJSON
         * @memberof ActionInventoryClick
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ActionInventoryClick.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return ActionInventoryClick;
    })();
    
    $root.ActionInventoryPick = (function() {
    
        /**
         * Properties of an ActionInventoryPick.
         * @exports IActionInventoryPick
         * @interface IActionInventoryPick
         * @property {number|null} [slot] ActionInventoryPick slot
         * @property {number|null} [slot2] ActionInventoryPick slot2
         * @property {number|null} [block] ActionInventoryPick block
         */
    
        /**
         * Constructs a new ActionInventoryPick.
         * @exports ActionInventoryPick
         * @classdesc Represents an ActionInventoryPick.
         * @implements IActionInventoryPick
         * @constructor
         * @param {IActionInventoryPick=} [properties] Properties to set
         */
        function ActionInventoryPick(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * ActionInventoryPick slot.
         * @member {number} slot
         * @memberof ActionInventoryPick
         * @instance
         */
        ActionInventoryPick.prototype.slot = 0;
    
        /**
         * ActionInventoryPick slot2.
         * @member {number} slot2
         * @memberof ActionInventoryPick
         * @instance
         */
        ActionInventoryPick.prototype.slot2 = 0;
    
        /**
         * ActionInventoryPick block.
         * @member {number} block
         * @memberof ActionInventoryPick
         * @instance
         */
        ActionInventoryPick.prototype.block = 0;
    
        /**
         * Creates a new ActionInventoryPick instance using the specified properties.
         * @function create
         * @memberof ActionInventoryPick
         * @static
         * @param {IActionInventoryPick=} [properties] Properties to set
         * @returns {ActionInventoryPick} ActionInventoryPick instance
         */
        ActionInventoryPick.create = function create(properties) {
            return new ActionInventoryPick(properties);
        };
    
        /**
         * Encodes the specified ActionInventoryPick message. Does not implicitly {@link ActionInventoryPick.verify|verify} messages.
         * @function encode
         * @memberof ActionInventoryPick
         * @static
         * @param {IActionInventoryPick} message ActionInventoryPick message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ActionInventoryPick.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.slot != null && Object.hasOwnProperty.call(message, "slot"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.slot);
            if (message.slot2 != null && Object.hasOwnProperty.call(message, "slot2"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.slot2);
            if (message.block != null && Object.hasOwnProperty.call(message, "block"))
                writer.uint32(/* id 3, wireType 0 =*/24).sint32(message.block);
            return writer;
        };
    
        /**
         * Encodes the specified ActionInventoryPick message, length delimited. Does not implicitly {@link ActionInventoryPick.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ActionInventoryPick
         * @static
         * @param {IActionInventoryPick} message ActionInventoryPick message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ActionInventoryPick.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes an ActionInventoryPick message from the specified reader or buffer.
         * @function decode
         * @memberof ActionInventoryPick
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ActionInventoryPick} ActionInventoryPick
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ActionInventoryPick.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ActionInventoryPick();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.slot = reader.int32();
                    break;
                case 2:
                    message.slot2 = reader.int32();
                    break;
                case 3:
                    message.block = reader.sint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes an ActionInventoryPick message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ActionInventoryPick
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ActionInventoryPick} ActionInventoryPick
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ActionInventoryPick.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies an ActionInventoryPick message.
         * @function verify
         * @memberof ActionInventoryPick
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ActionInventoryPick.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.slot != null && message.hasOwnProperty("slot"))
                if (!$util.isInteger(message.slot))
                    return "slot: integer expected";
            if (message.slot2 != null && message.hasOwnProperty("slot2"))
                if (!$util.isInteger(message.slot2))
                    return "slot2: integer expected";
            if (message.block != null && message.hasOwnProperty("block"))
                if (!$util.isInteger(message.block))
                    return "block: integer expected";
            return null;
        };
    
        /**
         * Creates an ActionInventoryPick message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ActionInventoryPick
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ActionInventoryPick} ActionInventoryPick
         */
        ActionInventoryPick.fromObject = function fromObject(object) {
            if (object instanceof $root.ActionInventoryPick)
                return object;
            var message = new $root.ActionInventoryPick();
            if (object.slot != null)
                message.slot = object.slot | 0;
            if (object.slot2 != null)
                message.slot2 = object.slot2 | 0;
            if (object.block != null)
                message.block = object.block | 0;
            return message;
        };
    
        /**
         * Creates a plain object from an ActionInventoryPick message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ActionInventoryPick
         * @static
         * @param {ActionInventoryPick} message ActionInventoryPick
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ActionInventoryPick.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.slot = 0;
                object.slot2 = 0;
                object.block = 0;
            }
            if (message.slot != null && message.hasOwnProperty("slot"))
                object.slot = message.slot;
            if (message.slot2 != null && message.hasOwnProperty("slot2"))
                object.slot2 = message.slot2;
            if (message.block != null && message.hasOwnProperty("block"))
                object.block = message.block;
            return object;
        };
    
        /**
         * Converts this ActionInventoryPick to JSON.
         * @function toJSON
         * @memberof ActionInventoryPick
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ActionInventoryPick.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return ActionInventoryPick;
    })();
    
    $root.ActionInventoryOpen = (function() {
    
        /**
         * Properties of an ActionInventoryOpen.
         * @exports IActionInventoryOpen
         * @interface IActionInventoryOpen
         * @property {ContainerType|null} [inventory] ActionInventoryOpen inventory
         */
    
        /**
         * Constructs a new ActionInventoryOpen.
         * @exports ActionInventoryOpen
         * @classdesc Represents an ActionInventoryOpen.
         * @implements IActionInventoryOpen
         * @constructor
         * @param {IActionInventoryOpen=} [properties] Properties to set
         */
        function ActionInventoryOpen(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * ActionInventoryOpen inventory.
         * @member {ContainerType} inventory
         * @memberof ActionInventoryOpen
         * @instance
         */
        ActionInventoryOpen.prototype.inventory = 0;
    
        /**
         * Creates a new ActionInventoryOpen instance using the specified properties.
         * @function create
         * @memberof ActionInventoryOpen
         * @static
         * @param {IActionInventoryOpen=} [properties] Properties to set
         * @returns {ActionInventoryOpen} ActionInventoryOpen instance
         */
        ActionInventoryOpen.create = function create(properties) {
            return new ActionInventoryOpen(properties);
        };
    
        /**
         * Encodes the specified ActionInventoryOpen message. Does not implicitly {@link ActionInventoryOpen.verify|verify} messages.
         * @function encode
         * @memberof ActionInventoryOpen
         * @static
         * @param {IActionInventoryOpen} message ActionInventoryOpen message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ActionInventoryOpen.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.inventory != null && Object.hasOwnProperty.call(message, "inventory"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.inventory);
            return writer;
        };
    
        /**
         * Encodes the specified ActionInventoryOpen message, length delimited. Does not implicitly {@link ActionInventoryOpen.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ActionInventoryOpen
         * @static
         * @param {IActionInventoryOpen} message ActionInventoryOpen message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ActionInventoryOpen.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes an ActionInventoryOpen message from the specified reader or buffer.
         * @function decode
         * @memberof ActionInventoryOpen
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ActionInventoryOpen} ActionInventoryOpen
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ActionInventoryOpen.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ActionInventoryOpen();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.inventory = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes an ActionInventoryOpen message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ActionInventoryOpen
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ActionInventoryOpen} ActionInventoryOpen
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ActionInventoryOpen.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies an ActionInventoryOpen message.
         * @function verify
         * @memberof ActionInventoryOpen
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ActionInventoryOpen.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.inventory != null && message.hasOwnProperty("inventory"))
                switch (message.inventory) {
                default:
                    return "inventory: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            return null;
        };
    
        /**
         * Creates an ActionInventoryOpen message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ActionInventoryOpen
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ActionInventoryOpen} ActionInventoryOpen
         */
        ActionInventoryOpen.fromObject = function fromObject(object) {
            if (object instanceof $root.ActionInventoryOpen)
                return object;
            var message = new $root.ActionInventoryOpen();
            switch (object.inventory) {
            case "PLAYER":
            case 0:
                message.inventory = 0;
                break;
            case "CHEST":
            case 1:
                message.inventory = 1;
                break;
            case "CRAFTING":
            case 2:
                message.inventory = 2;
                break;
            case "FURNACE":
            case 3:
                message.inventory = 3;
                break;
            }
            return message;
        };
    
        /**
         * Creates a plain object from an ActionInventoryOpen message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ActionInventoryOpen
         * @static
         * @param {ActionInventoryOpen} message ActionInventoryOpen
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ActionInventoryOpen.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.inventory = options.enums === String ? "PLAYER" : 0;
            if (message.inventory != null && message.hasOwnProperty("inventory"))
                object.inventory = options.enums === String ? $root.ContainerType[message.inventory] : message.inventory;
            return object;
        };
    
        /**
         * Converts this ActionInventoryOpen to JSON.
         * @function toJSON
         * @memberof ActionInventoryOpen
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ActionInventoryOpen.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return ActionInventoryOpen;
    })();
    
    $root.ActionInventoryClose = (function() {
    
        /**
         * Properties of an ActionInventoryClose.
         * @exports IActionInventoryClose
         * @interface IActionInventoryClose
         * @property {ContainerType|null} [inventory] ActionInventoryClose inventory
         */
    
        /**
         * Constructs a new ActionInventoryClose.
         * @exports ActionInventoryClose
         * @classdesc Represents an ActionInventoryClose.
         * @implements IActionInventoryClose
         * @constructor
         * @param {IActionInventoryClose=} [properties] Properties to set
         */
        function ActionInventoryClose(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * ActionInventoryClose inventory.
         * @member {ContainerType} inventory
         * @memberof ActionInventoryClose
         * @instance
         */
        ActionInventoryClose.prototype.inventory = 0;
    
        /**
         * Creates a new ActionInventoryClose instance using the specified properties.
         * @function create
         * @memberof ActionInventoryClose
         * @static
         * @param {IActionInventoryClose=} [properties] Properties to set
         * @returns {ActionInventoryClose} ActionInventoryClose instance
         */
        ActionInventoryClose.create = function create(properties) {
            return new ActionInventoryClose(properties);
        };
    
        /**
         * Encodes the specified ActionInventoryClose message. Does not implicitly {@link ActionInventoryClose.verify|verify} messages.
         * @function encode
         * @memberof ActionInventoryClose
         * @static
         * @param {IActionInventoryClose} message ActionInventoryClose message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ActionInventoryClose.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.inventory != null && Object.hasOwnProperty.call(message, "inventory"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.inventory);
            return writer;
        };
    
        /**
         * Encodes the specified ActionInventoryClose message, length delimited. Does not implicitly {@link ActionInventoryClose.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ActionInventoryClose
         * @static
         * @param {IActionInventoryClose} message ActionInventoryClose message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ActionInventoryClose.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes an ActionInventoryClose message from the specified reader or buffer.
         * @function decode
         * @memberof ActionInventoryClose
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ActionInventoryClose} ActionInventoryClose
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ActionInventoryClose.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ActionInventoryClose();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.inventory = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes an ActionInventoryClose message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ActionInventoryClose
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ActionInventoryClose} ActionInventoryClose
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ActionInventoryClose.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies an ActionInventoryClose message.
         * @function verify
         * @memberof ActionInventoryClose
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ActionInventoryClose.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.inventory != null && message.hasOwnProperty("inventory"))
                switch (message.inventory) {
                default:
                    return "inventory: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            return null;
        };
    
        /**
         * Creates an ActionInventoryClose message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ActionInventoryClose
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ActionInventoryClose} ActionInventoryClose
         */
        ActionInventoryClose.fromObject = function fromObject(object) {
            if (object instanceof $root.ActionInventoryClose)
                return object;
            var message = new $root.ActionInventoryClose();
            switch (object.inventory) {
            case "PLAYER":
            case 0:
                message.inventory = 0;
                break;
            case "CHEST":
            case 1:
                message.inventory = 1;
                break;
            case "CRAFTING":
            case 2:
                message.inventory = 2;
                break;
            case "FURNACE":
            case 3:
                message.inventory = 3;
                break;
            }
            return message;
        };
    
        /**
         * Creates a plain object from an ActionInventoryClose message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ActionInventoryClose
         * @static
         * @param {ActionInventoryClose} message ActionInventoryClose
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ActionInventoryClose.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.inventory = options.enums === String ? "PLAYER" : 0;
            if (message.inventory != null && message.hasOwnProperty("inventory"))
                object.inventory = options.enums === String ? $root.ContainerType[message.inventory] : message.inventory;
            return object;
        };
    
        /**
         * Converts this ActionInventoryClose to JSON.
         * @function toJSON
         * @memberof ActionInventoryClose
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ActionInventoryClose.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return ActionInventoryClose;
    })();
    
    $root.ActionClick = (function() {
    
        /**
         * Properties of an ActionClick.
         * @exports IActionClick
         * @interface IActionClick
         * @property {number|null} [x] ActionClick x
         * @property {number|null} [y] ActionClick y
         * @property {number|null} [z] ActionClick z
         * @property {MouseClickType|null} [type] ActionClick type
         * @property {boolean|null} [onBlock] ActionClick onBlock
         */
    
        /**
         * Constructs a new ActionClick.
         * @exports ActionClick
         * @classdesc Represents an ActionClick.
         * @implements IActionClick
         * @constructor
         * @param {IActionClick=} [properties] Properties to set
         */
        function ActionClick(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * ActionClick x.
         * @member {number} x
         * @memberof ActionClick
         * @instance
         */
        ActionClick.prototype.x = 0;
    
        /**
         * ActionClick y.
         * @member {number} y
         * @memberof ActionClick
         * @instance
         */
        ActionClick.prototype.y = 0;
    
        /**
         * ActionClick z.
         * @member {number} z
         * @memberof ActionClick
         * @instance
         */
        ActionClick.prototype.z = 0;
    
        /**
         * ActionClick type.
         * @member {MouseClickType} type
         * @memberof ActionClick
         * @instance
         */
        ActionClick.prototype.type = 0;
    
        /**
         * ActionClick onBlock.
         * @member {boolean} onBlock
         * @memberof ActionClick
         * @instance
         */
        ActionClick.prototype.onBlock = false;
    
        /**
         * Creates a new ActionClick instance using the specified properties.
         * @function create
         * @memberof ActionClick
         * @static
         * @param {IActionClick=} [properties] Properties to set
         * @returns {ActionClick} ActionClick instance
         */
        ActionClick.create = function create(properties) {
            return new ActionClick(properties);
        };
    
        /**
         * Encodes the specified ActionClick message. Does not implicitly {@link ActionClick.verify|verify} messages.
         * @function encode
         * @memberof ActionClick
         * @static
         * @param {IActionClick} message ActionClick message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ActionClick.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.x != null && Object.hasOwnProperty.call(message, "x"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.x);
            if (message.y != null && Object.hasOwnProperty.call(message, "y"))
                writer.uint32(/* id 2, wireType 0 =*/16).sint32(message.y);
            if (message.z != null && Object.hasOwnProperty.call(message, "z"))
                writer.uint32(/* id 3, wireType 0 =*/24).sint32(message.z);
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.type);
            if (message.onBlock != null && Object.hasOwnProperty.call(message, "onBlock"))
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.onBlock);
            return writer;
        };
    
        /**
         * Encodes the specified ActionClick message, length delimited. Does not implicitly {@link ActionClick.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ActionClick
         * @static
         * @param {IActionClick} message ActionClick message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ActionClick.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes an ActionClick message from the specified reader or buffer.
         * @function decode
         * @memberof ActionClick
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ActionClick} ActionClick
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ActionClick.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ActionClick();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.x = reader.sint32();
                    break;
                case 2:
                    message.y = reader.sint32();
                    break;
                case 3:
                    message.z = reader.sint32();
                    break;
                case 4:
                    message.type = reader.int32();
                    break;
                case 5:
                    message.onBlock = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes an ActionClick message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ActionClick
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ActionClick} ActionClick
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ActionClick.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies an ActionClick message.
         * @function verify
         * @memberof ActionClick
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ActionClick.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.x != null && message.hasOwnProperty("x"))
                if (!$util.isInteger(message.x))
                    return "x: integer expected";
            if (message.y != null && message.hasOwnProperty("y"))
                if (!$util.isInteger(message.y))
                    return "y: integer expected";
            if (message.z != null && message.hasOwnProperty("z"))
                if (!$util.isInteger(message.z))
                    return "z: integer expected";
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
            if (message.onBlock != null && message.hasOwnProperty("onBlock"))
                if (typeof message.onBlock !== "boolean")
                    return "onBlock: boolean expected";
            return null;
        };
    
        /**
         * Creates an ActionClick message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ActionClick
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ActionClick} ActionClick
         */
        ActionClick.fromObject = function fromObject(object) {
            if (object instanceof $root.ActionClick)
                return object;
            var message = new $root.ActionClick();
            if (object.x != null)
                message.x = object.x | 0;
            if (object.y != null)
                message.y = object.y | 0;
            if (object.z != null)
                message.z = object.z | 0;
            switch (object.type) {
            case "LEFT":
            case 0:
                message.type = 0;
                break;
            case "RIGHT":
            case 1:
                message.type = 1;
                break;
            case "MIDDLE":
            case 2:
                message.type = 2;
                break;
            case "SELECT":
            case 3:
                message.type = 3;
                break;
            }
            if (object.onBlock != null)
                message.onBlock = Boolean(object.onBlock);
            return message;
        };
    
        /**
         * Creates a plain object from an ActionClick message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ActionClick
         * @static
         * @param {ActionClick} message ActionClick
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ActionClick.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.x = 0;
                object.y = 0;
                object.z = 0;
                object.type = options.enums === String ? "LEFT" : 0;
                object.onBlock = false;
            }
            if (message.x != null && message.hasOwnProperty("x"))
                object.x = message.x;
            if (message.y != null && message.hasOwnProperty("y"))
                object.y = message.y;
            if (message.z != null && message.hasOwnProperty("z"))
                object.z = message.z;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = options.enums === String ? $root.MouseClickType[message.type] : message.type;
            if (message.onBlock != null && message.hasOwnProperty("onBlock"))
                object.onBlock = message.onBlock;
            return object;
        };
    
        /**
         * Converts this ActionClick to JSON.
         * @function toJSON
         * @memberof ActionClick
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ActionClick.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return ActionClick;
    })();
    
    $root.ActionClickEntity = (function() {
    
        /**
         * Properties of an ActionClickEntity.
         * @exports IActionClickEntity
         * @interface IActionClickEntity
         * @property {string|null} [uuid] ActionClickEntity uuid
         * @property {string|null} [type] ActionClickEntity type
         * @property {number|null} [distance] ActionClickEntity distance
         */
    
        /**
         * Constructs a new ActionClickEntity.
         * @exports ActionClickEntity
         * @classdesc Represents an ActionClickEntity.
         * @implements IActionClickEntity
         * @constructor
         * @param {IActionClickEntity=} [properties] Properties to set
         */
        function ActionClickEntity(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * ActionClickEntity uuid.
         * @member {string} uuid
         * @memberof ActionClickEntity
         * @instance
         */
        ActionClickEntity.prototype.uuid = "";
    
        /**
         * ActionClickEntity type.
         * @member {string} type
         * @memberof ActionClickEntity
         * @instance
         */
        ActionClickEntity.prototype.type = "";
    
        /**
         * ActionClickEntity distance.
         * @member {number} distance
         * @memberof ActionClickEntity
         * @instance
         */
        ActionClickEntity.prototype.distance = 0;
    
        /**
         * Creates a new ActionClickEntity instance using the specified properties.
         * @function create
         * @memberof ActionClickEntity
         * @static
         * @param {IActionClickEntity=} [properties] Properties to set
         * @returns {ActionClickEntity} ActionClickEntity instance
         */
        ActionClickEntity.create = function create(properties) {
            return new ActionClickEntity(properties);
        };
    
        /**
         * Encodes the specified ActionClickEntity message. Does not implicitly {@link ActionClickEntity.verify|verify} messages.
         * @function encode
         * @memberof ActionClickEntity
         * @static
         * @param {IActionClickEntity} message ActionClickEntity message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ActionClickEntity.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uuid != null && Object.hasOwnProperty.call(message, "uuid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.uuid);
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.type);
            if (message.distance != null && Object.hasOwnProperty.call(message, "distance"))
                writer.uint32(/* id 3, wireType 5 =*/29).float(message.distance);
            return writer;
        };
    
        /**
         * Encodes the specified ActionClickEntity message, length delimited. Does not implicitly {@link ActionClickEntity.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ActionClickEntity
         * @static
         * @param {IActionClickEntity} message ActionClickEntity message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ActionClickEntity.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes an ActionClickEntity message from the specified reader or buffer.
         * @function decode
         * @memberof ActionClickEntity
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ActionClickEntity} ActionClickEntity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ActionClickEntity.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ActionClickEntity();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uuid = reader.string();
                    break;
                case 2:
                    message.type = reader.string();
                    break;
                case 3:
                    message.distance = reader.float();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes an ActionClickEntity message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ActionClickEntity
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ActionClickEntity} ActionClickEntity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ActionClickEntity.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies an ActionClickEntity message.
         * @function verify
         * @memberof ActionClickEntity
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ActionClickEntity.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uuid != null && message.hasOwnProperty("uuid"))
                if (!$util.isString(message.uuid))
                    return "uuid: string expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isString(message.type))
                    return "type: string expected";
            if (message.distance != null && message.hasOwnProperty("distance"))
                if (typeof message.distance !== "number")
                    return "distance: number expected";
            return null;
        };
    
        /**
         * Creates an ActionClickEntity message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ActionClickEntity
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ActionClickEntity} ActionClickEntity
         */
        ActionClickEntity.fromObject = function fromObject(object) {
            if (object instanceof $root.ActionClickEntity)
                return object;
            var message = new $root.ActionClickEntity();
            if (object.uuid != null)
                message.uuid = String(object.uuid);
            if (object.type != null)
                message.type = String(object.type);
            if (object.distance != null)
                message.distance = Number(object.distance);
            return message;
        };
    
        /**
         * Creates a plain object from an ActionClickEntity message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ActionClickEntity
         * @static
         * @param {ActionClickEntity} message ActionClickEntity
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ActionClickEntity.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.uuid = "";
                object.type = "";
                object.distance = 0;
            }
            if (message.uuid != null && message.hasOwnProperty("uuid"))
                object.uuid = message.uuid;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.distance != null && message.hasOwnProperty("distance"))
                object.distance = options.json && !isFinite(message.distance) ? String(message.distance) : message.distance;
            return object;
        };
    
        /**
         * Converts this ActionClickEntity to JSON.
         * @function toJSON
         * @memberof ActionClickEntity
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ActionClickEntity.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return ActionClickEntity;
    })();
    
    $root.ActionLeaveVehicle = (function() {
    
        /**
         * Properties of an ActionLeaveVehicle.
         * @exports IActionLeaveVehicle
         * @interface IActionLeaveVehicle
         * @property {string|null} [uuid] ActionLeaveVehicle uuid
         */
    
        /**
         * Constructs a new ActionLeaveVehicle.
         * @exports ActionLeaveVehicle
         * @classdesc Represents an ActionLeaveVehicle.
         * @implements IActionLeaveVehicle
         * @constructor
         * @param {IActionLeaveVehicle=} [properties] Properties to set
         */
        function ActionLeaveVehicle(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * ActionLeaveVehicle uuid.
         * @member {string} uuid
         * @memberof ActionLeaveVehicle
         * @instance
         */
        ActionLeaveVehicle.prototype.uuid = "";
    
        /**
         * Creates a new ActionLeaveVehicle instance using the specified properties.
         * @function create
         * @memberof ActionLeaveVehicle
         * @static
         * @param {IActionLeaveVehicle=} [properties] Properties to set
         * @returns {ActionLeaveVehicle} ActionLeaveVehicle instance
         */
        ActionLeaveVehicle.create = function create(properties) {
            return new ActionLeaveVehicle(properties);
        };
    
        /**
         * Encodes the specified ActionLeaveVehicle message. Does not implicitly {@link ActionLeaveVehicle.verify|verify} messages.
         * @function encode
         * @memberof ActionLeaveVehicle
         * @static
         * @param {IActionLeaveVehicle} message ActionLeaveVehicle message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ActionLeaveVehicle.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uuid != null && Object.hasOwnProperty.call(message, "uuid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.uuid);
            return writer;
        };
    
        /**
         * Encodes the specified ActionLeaveVehicle message, length delimited. Does not implicitly {@link ActionLeaveVehicle.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ActionLeaveVehicle
         * @static
         * @param {IActionLeaveVehicle} message ActionLeaveVehicle message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ActionLeaveVehicle.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes an ActionLeaveVehicle message from the specified reader or buffer.
         * @function decode
         * @memberof ActionLeaveVehicle
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ActionLeaveVehicle} ActionLeaveVehicle
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ActionLeaveVehicle.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ActionLeaveVehicle();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uuid = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes an ActionLeaveVehicle message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ActionLeaveVehicle
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ActionLeaveVehicle} ActionLeaveVehicle
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ActionLeaveVehicle.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies an ActionLeaveVehicle message.
         * @function verify
         * @memberof ActionLeaveVehicle
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ActionLeaveVehicle.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uuid != null && message.hasOwnProperty("uuid"))
                if (!$util.isString(message.uuid))
                    return "uuid: string expected";
            return null;
        };
    
        /**
         * Creates an ActionLeaveVehicle message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ActionLeaveVehicle
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ActionLeaveVehicle} ActionLeaveVehicle
         */
        ActionLeaveVehicle.fromObject = function fromObject(object) {
            if (object instanceof $root.ActionLeaveVehicle)
                return object;
            var message = new $root.ActionLeaveVehicle();
            if (object.uuid != null)
                message.uuid = String(object.uuid);
            return message;
        };
    
        /**
         * Creates a plain object from an ActionLeaveVehicle message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ActionLeaveVehicle
         * @static
         * @param {ActionLeaveVehicle} message ActionLeaveVehicle
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ActionLeaveVehicle.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.uuid = "";
            if (message.uuid != null && message.hasOwnProperty("uuid"))
                object.uuid = message.uuid;
            return object;
        };
    
        /**
         * Converts this ActionLeaveVehicle to JSON.
         * @function toJSON
         * @memberof ActionLeaveVehicle
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ActionLeaveVehicle.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return ActionLeaveVehicle;
    })();
    
    $root.ActionDropItem = (function() {
    
        /**
         * Properties of an ActionDropItem.
         * @exports IActionDropItem
         * @interface IActionDropItem
         * @property {string|null} [uuid] ActionDropItem uuid
         * @property {InventoryType|null} [inventory] ActionDropItem inventory
         * @property {number|null} [slot] ActionDropItem slot
         */
    
        /**
         * Constructs a new ActionDropItem.
         * @exports ActionDropItem
         * @classdesc Represents an ActionDropItem.
         * @implements IActionDropItem
         * @constructor
         * @param {IActionDropItem=} [properties] Properties to set
         */
        function ActionDropItem(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * ActionDropItem uuid.
         * @member {string} uuid
         * @memberof ActionDropItem
         * @instance
         */
        ActionDropItem.prototype.uuid = "";
    
        /**
         * ActionDropItem inventory.
         * @member {InventoryType} inventory
         * @memberof ActionDropItem
         * @instance
         */
        ActionDropItem.prototype.inventory = 0;
    
        /**
         * ActionDropItem slot.
         * @member {number} slot
         * @memberof ActionDropItem
         * @instance
         */
        ActionDropItem.prototype.slot = 0;
    
        /**
         * Creates a new ActionDropItem instance using the specified properties.
         * @function create
         * @memberof ActionDropItem
         * @static
         * @param {IActionDropItem=} [properties] Properties to set
         * @returns {ActionDropItem} ActionDropItem instance
         */
        ActionDropItem.create = function create(properties) {
            return new ActionDropItem(properties);
        };
    
        /**
         * Encodes the specified ActionDropItem message. Does not implicitly {@link ActionDropItem.verify|verify} messages.
         * @function encode
         * @memberof ActionDropItem
         * @static
         * @param {IActionDropItem} message ActionDropItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ActionDropItem.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uuid != null && Object.hasOwnProperty.call(message, "uuid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.uuid);
            if (message.inventory != null && Object.hasOwnProperty.call(message, "inventory"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.inventory);
            if (message.slot != null && Object.hasOwnProperty.call(message, "slot"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.slot);
            return writer;
        };
    
        /**
         * Encodes the specified ActionDropItem message, length delimited. Does not implicitly {@link ActionDropItem.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ActionDropItem
         * @static
         * @param {IActionDropItem} message ActionDropItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ActionDropItem.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes an ActionDropItem message from the specified reader or buffer.
         * @function decode
         * @memberof ActionDropItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ActionDropItem} ActionDropItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ActionDropItem.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ActionDropItem();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uuid = reader.string();
                    break;
                case 2:
                    message.inventory = reader.int32();
                    break;
                case 3:
                    message.slot = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes an ActionDropItem message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ActionDropItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ActionDropItem} ActionDropItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ActionDropItem.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies an ActionDropItem message.
         * @function verify
         * @memberof ActionDropItem
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ActionDropItem.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uuid != null && message.hasOwnProperty("uuid"))
                if (!$util.isString(message.uuid))
                    return "uuid: string expected";
            if (message.inventory != null && message.hasOwnProperty("inventory"))
                switch (message.inventory) {
                default:
                    return "inventory: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                    break;
                }
            if (message.slot != null && message.hasOwnProperty("slot"))
                if (!$util.isInteger(message.slot))
                    return "slot: integer expected";
            return null;
        };
    
        /**
         * Creates an ActionDropItem message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ActionDropItem
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ActionDropItem} ActionDropItem
         */
        ActionDropItem.fromObject = function fromObject(object) {
            if (object instanceof $root.ActionDropItem)
                return object;
            var message = new $root.ActionDropItem();
            if (object.uuid != null)
                message.uuid = String(object.uuid);
            switch (object.inventory) {
            case "MAIN":
            case 0:
                message.inventory = 0;
                break;
            case "ARMOR":
            case 1:
                message.inventory = 1;
                break;
            case "CRAFT":
            case 2:
                message.inventory = 2;
                break;
            case "HOOK":
            case 3:
                message.inventory = 3;
                break;
            case "TEMP":
            case 4:
                message.inventory = 4;
                break;
            }
            if (object.slot != null)
                message.slot = object.slot | 0;
            return message;
        };
    
        /**
         * Creates a plain object from an ActionDropItem message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ActionDropItem
         * @static
         * @param {ActionDropItem} message ActionDropItem
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ActionDropItem.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.uuid = "";
                object.inventory = options.enums === String ? "MAIN" : 0;
                object.slot = 0;
            }
            if (message.uuid != null && message.hasOwnProperty("uuid"))
                object.uuid = message.uuid;
            if (message.inventory != null && message.hasOwnProperty("inventory"))
                object.inventory = options.enums === String ? $root.InventoryType[message.inventory] : message.inventory;
            if (message.slot != null && message.hasOwnProperty("slot"))
                object.slot = message.slot;
            return object;
        };
    
        /**
         * Converts this ActionDropItem to JSON.
         * @function toJSON
         * @memberof ActionDropItem
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ActionDropItem.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return ActionDropItem;
    })();
    
    $root.ActionKeyPress = (function() {
    
        /**
         * Properties of an ActionKeyPress.
         * @exports IActionKeyPress
         * @interface IActionKeyPress
         * @property {string|null} [key] ActionKeyPress key
         * @property {boolean|null} [type] ActionKeyPress type
         */
    
        /**
         * Constructs a new ActionKeyPress.
         * @exports ActionKeyPress
         * @classdesc Represents an ActionKeyPress.
         * @implements IActionKeyPress
         * @constructor
         * @param {IActionKeyPress=} [properties] Properties to set
         */
        function ActionKeyPress(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * ActionKeyPress key.
         * @member {string} key
         * @memberof ActionKeyPress
         * @instance
         */
        ActionKeyPress.prototype.key = "";
    
        /**
         * ActionKeyPress type.
         * @member {boolean} type
         * @memberof ActionKeyPress
         * @instance
         */
        ActionKeyPress.prototype.type = false;
    
        /**
         * Creates a new ActionKeyPress instance using the specified properties.
         * @function create
         * @memberof ActionKeyPress
         * @static
         * @param {IActionKeyPress=} [properties] Properties to set
         * @returns {ActionKeyPress} ActionKeyPress instance
         */
        ActionKeyPress.create = function create(properties) {
            return new ActionKeyPress(properties);
        };
    
        /**
         * Encodes the specified ActionKeyPress message. Does not implicitly {@link ActionKeyPress.verify|verify} messages.
         * @function encode
         * @memberof ActionKeyPress
         * @static
         * @param {IActionKeyPress} message ActionKeyPress message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ActionKeyPress.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.key != null && Object.hasOwnProperty.call(message, "key"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.key);
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.type);
            return writer;
        };
    
        /**
         * Encodes the specified ActionKeyPress message, length delimited. Does not implicitly {@link ActionKeyPress.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ActionKeyPress
         * @static
         * @param {IActionKeyPress} message ActionKeyPress message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ActionKeyPress.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes an ActionKeyPress message from the specified reader or buffer.
         * @function decode
         * @memberof ActionKeyPress
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ActionKeyPress} ActionKeyPress
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ActionKeyPress.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ActionKeyPress();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.type = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes an ActionKeyPress message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ActionKeyPress
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ActionKeyPress} ActionKeyPress
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ActionKeyPress.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies an ActionKeyPress message.
         * @function verify
         * @memberof ActionKeyPress
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ActionKeyPress.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.key != null && message.hasOwnProperty("key"))
                if (!$util.isString(message.key))
                    return "key: string expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (typeof message.type !== "boolean")
                    return "type: boolean expected";
            return null;
        };
    
        /**
         * Creates an ActionKeyPress message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ActionKeyPress
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ActionKeyPress} ActionKeyPress
         */
        ActionKeyPress.fromObject = function fromObject(object) {
            if (object instanceof $root.ActionKeyPress)
                return object;
            var message = new $root.ActionKeyPress();
            if (object.key != null)
                message.key = String(object.key);
            if (object.type != null)
                message.type = Boolean(object.type);
            return message;
        };
    
        /**
         * Creates a plain object from an ActionKeyPress message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ActionKeyPress
         * @static
         * @param {ActionKeyPress} message ActionKeyPress
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ActionKeyPress.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.key = "";
                object.type = false;
            }
            if (message.key != null && message.hasOwnProperty("key"))
                object.key = message.key;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            return object;
        };
    
        /**
         * Converts this ActionKeyPress to JSON.
         * @function toJSON
         * @memberof ActionKeyPress
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ActionKeyPress.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return ActionKeyPress;
    })();
    
    $root.WorldChunkIsLoadedResponce = (function() {
    
        /**
         * Properties of a WorldChunkIsLoadedResponce.
         * @exports IWorldChunkIsLoadedResponce
         * @interface IWorldChunkIsLoadedResponce
         * @property {number|null} [x] WorldChunkIsLoadedResponce x
         * @property {number|null} [y] WorldChunkIsLoadedResponce y
         * @property {number|null} [z] WorldChunkIsLoadedResponce z
         * @property {boolean|null} [loaded] WorldChunkIsLoadedResponce loaded
         */
    
        /**
         * Constructs a new WorldChunkIsLoadedResponce.
         * @exports WorldChunkIsLoadedResponce
         * @classdesc Represents a WorldChunkIsLoadedResponce.
         * @implements IWorldChunkIsLoadedResponce
         * @constructor
         * @param {IWorldChunkIsLoadedResponce=} [properties] Properties to set
         */
        function WorldChunkIsLoadedResponce(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * WorldChunkIsLoadedResponce x.
         * @member {number} x
         * @memberof WorldChunkIsLoadedResponce
         * @instance
         */
        WorldChunkIsLoadedResponce.prototype.x = 0;
    
        /**
         * WorldChunkIsLoadedResponce y.
         * @member {number} y
         * @memberof WorldChunkIsLoadedResponce
         * @instance
         */
        WorldChunkIsLoadedResponce.prototype.y = 0;
    
        /**
         * WorldChunkIsLoadedResponce z.
         * @member {number} z
         * @memberof WorldChunkIsLoadedResponce
         * @instance
         */
        WorldChunkIsLoadedResponce.prototype.z = 0;
    
        /**
         * WorldChunkIsLoadedResponce loaded.
         * @member {boolean} loaded
         * @memberof WorldChunkIsLoadedResponce
         * @instance
         */
        WorldChunkIsLoadedResponce.prototype.loaded = false;
    
        /**
         * Creates a new WorldChunkIsLoadedResponce instance using the specified properties.
         * @function create
         * @memberof WorldChunkIsLoadedResponce
         * @static
         * @param {IWorldChunkIsLoadedResponce=} [properties] Properties to set
         * @returns {WorldChunkIsLoadedResponce} WorldChunkIsLoadedResponce instance
         */
        WorldChunkIsLoadedResponce.create = function create(properties) {
            return new WorldChunkIsLoadedResponce(properties);
        };
    
        /**
         * Encodes the specified WorldChunkIsLoadedResponce message. Does not implicitly {@link WorldChunkIsLoadedResponce.verify|verify} messages.
         * @function encode
         * @memberof WorldChunkIsLoadedResponce
         * @static
         * @param {IWorldChunkIsLoadedResponce} message WorldChunkIsLoadedResponce message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WorldChunkIsLoadedResponce.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.x != null && Object.hasOwnProperty.call(message, "x"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.x);
            if (message.y != null && Object.hasOwnProperty.call(message, "y"))
                writer.uint32(/* id 2, wireType 0 =*/16).sint32(message.y);
            if (message.z != null && Object.hasOwnProperty.call(message, "z"))
                writer.uint32(/* id 3, wireType 0 =*/24).sint32(message.z);
            if (message.loaded != null && Object.hasOwnProperty.call(message, "loaded"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.loaded);
            return writer;
        };
    
        /**
         * Encodes the specified WorldChunkIsLoadedResponce message, length delimited. Does not implicitly {@link WorldChunkIsLoadedResponce.verify|verify} messages.
         * @function encodeDelimited
         * @memberof WorldChunkIsLoadedResponce
         * @static
         * @param {IWorldChunkIsLoadedResponce} message WorldChunkIsLoadedResponce message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WorldChunkIsLoadedResponce.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a WorldChunkIsLoadedResponce message from the specified reader or buffer.
         * @function decode
         * @memberof WorldChunkIsLoadedResponce
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {WorldChunkIsLoadedResponce} WorldChunkIsLoadedResponce
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WorldChunkIsLoadedResponce.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.WorldChunkIsLoadedResponce();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.x = reader.sint32();
                    break;
                case 2:
                    message.y = reader.sint32();
                    break;
                case 3:
                    message.z = reader.sint32();
                    break;
                case 4:
                    message.loaded = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a WorldChunkIsLoadedResponce message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof WorldChunkIsLoadedResponce
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {WorldChunkIsLoadedResponce} WorldChunkIsLoadedResponce
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WorldChunkIsLoadedResponce.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a WorldChunkIsLoadedResponce message.
         * @function verify
         * @memberof WorldChunkIsLoadedResponce
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WorldChunkIsLoadedResponce.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.x != null && message.hasOwnProperty("x"))
                if (!$util.isInteger(message.x))
                    return "x: integer expected";
            if (message.y != null && message.hasOwnProperty("y"))
                if (!$util.isInteger(message.y))
                    return "y: integer expected";
            if (message.z != null && message.hasOwnProperty("z"))
                if (!$util.isInteger(message.z))
                    return "z: integer expected";
            if (message.loaded != null && message.hasOwnProperty("loaded"))
                if (typeof message.loaded !== "boolean")
                    return "loaded: boolean expected";
            return null;
        };
    
        /**
         * Creates a WorldChunkIsLoadedResponce message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof WorldChunkIsLoadedResponce
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {WorldChunkIsLoadedResponce} WorldChunkIsLoadedResponce
         */
        WorldChunkIsLoadedResponce.fromObject = function fromObject(object) {
            if (object instanceof $root.WorldChunkIsLoadedResponce)
                return object;
            var message = new $root.WorldChunkIsLoadedResponce();
            if (object.x != null)
                message.x = object.x | 0;
            if (object.y != null)
                message.y = object.y | 0;
            if (object.z != null)
                message.z = object.z | 0;
            if (object.loaded != null)
                message.loaded = Boolean(object.loaded);
            return message;
        };
    
        /**
         * Creates a plain object from a WorldChunkIsLoadedResponce message. Also converts values to other types if specified.
         * @function toObject
         * @memberof WorldChunkIsLoadedResponce
         * @static
         * @param {WorldChunkIsLoadedResponce} message WorldChunkIsLoadedResponce
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WorldChunkIsLoadedResponce.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.x = 0;
                object.y = 0;
                object.z = 0;
                object.loaded = false;
            }
            if (message.x != null && message.hasOwnProperty("x"))
                object.x = message.x;
            if (message.y != null && message.hasOwnProperty("y"))
                object.y = message.y;
            if (message.z != null && message.hasOwnProperty("z"))
                object.z = message.z;
            if (message.loaded != null && message.hasOwnProperty("loaded"))
                object.loaded = message.loaded;
            return object;
        };
    
        /**
         * Converts this WorldChunkIsLoadedResponce to JSON.
         * @function toJSON
         * @memberof WorldChunkIsLoadedResponce
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WorldChunkIsLoadedResponce.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return WorldChunkIsLoadedResponce;
    })();
    
    $root.PluginMessage = (function() {
    
        /**
         * Properties of a PluginMessage.
         * @exports IPluginMessage
         * @interface IPluginMessage
         * @property {string|null} [key] PluginMessage key
         * @property {number|null} [version] PluginMessage version
         * @property {Uint8Array|null} [value] PluginMessage value
         */
    
        /**
         * Constructs a new PluginMessage.
         * @exports PluginMessage
         * @classdesc Represents a PluginMessage.
         * @implements IPluginMessage
         * @constructor
         * @param {IPluginMessage=} [properties] Properties to set
         */
        function PluginMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * PluginMessage key.
         * @member {string} key
         * @memberof PluginMessage
         * @instance
         */
        PluginMessage.prototype.key = "";
    
        /**
         * PluginMessage version.
         * @member {number} version
         * @memberof PluginMessage
         * @instance
         */
        PluginMessage.prototype.version = 0;
    
        /**
         * PluginMessage value.
         * @member {Uint8Array} value
         * @memberof PluginMessage
         * @instance
         */
        PluginMessage.prototype.value = $util.newBuffer([]);
    
        /**
         * Creates a new PluginMessage instance using the specified properties.
         * @function create
         * @memberof PluginMessage
         * @static
         * @param {IPluginMessage=} [properties] Properties to set
         * @returns {PluginMessage} PluginMessage instance
         */
        PluginMessage.create = function create(properties) {
            return new PluginMessage(properties);
        };
    
        /**
         * Encodes the specified PluginMessage message. Does not implicitly {@link PluginMessage.verify|verify} messages.
         * @function encode
         * @memberof PluginMessage
         * @static
         * @param {IPluginMessage} message PluginMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PluginMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.key != null && Object.hasOwnProperty.call(message, "key"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.key);
            if (message.version != null && Object.hasOwnProperty.call(message, "version"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.version);
            if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.value);
            return writer;
        };
    
        /**
         * Encodes the specified PluginMessage message, length delimited. Does not implicitly {@link PluginMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PluginMessage
         * @static
         * @param {IPluginMessage} message PluginMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PluginMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a PluginMessage message from the specified reader or buffer.
         * @function decode
         * @memberof PluginMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PluginMessage} PluginMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PluginMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PluginMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.version = reader.uint32();
                    break;
                case 3:
                    message.value = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a PluginMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PluginMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PluginMessage} PluginMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PluginMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a PluginMessage message.
         * @function verify
         * @memberof PluginMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PluginMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.key != null && message.hasOwnProperty("key"))
                if (!$util.isString(message.key))
                    return "key: string expected";
            if (message.version != null && message.hasOwnProperty("version"))
                if (!$util.isInteger(message.version))
                    return "version: integer expected";
            if (message.value != null && message.hasOwnProperty("value"))
                if (!(message.value && typeof message.value.length === "number" || $util.isString(message.value)))
                    return "value: buffer expected";
            return null;
        };
    
        /**
         * Creates a PluginMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PluginMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PluginMessage} PluginMessage
         */
        PluginMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.PluginMessage)
                return object;
            var message = new $root.PluginMessage();
            if (object.key != null)
                message.key = String(object.key);
            if (object.version != null)
                message.version = object.version >>> 0;
            if (object.value != null)
                if (typeof object.value === "string")
                    $util.base64.decode(object.value, message.value = $util.newBuffer($util.base64.length(object.value)), 0);
                else if (object.value.length)
                    message.value = object.value;
            return message;
        };
    
        /**
         * Creates a plain object from a PluginMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PluginMessage
         * @static
         * @param {PluginMessage} message PluginMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PluginMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.key = "";
                object.version = 0;
                if (options.bytes === String)
                    object.value = "";
                else {
                    object.value = [];
                    if (options.bytes !== Array)
                        object.value = $util.newBuffer(object.value);
                }
            }
            if (message.key != null && message.hasOwnProperty("key"))
                object.key = message.key;
            if (message.version != null && message.hasOwnProperty("version"))
                object.version = message.version;
            if (message.value != null && message.hasOwnProperty("value"))
                object.value = options.bytes === String ? $util.base64.encode(message.value, 0, message.value.length) : options.bytes === Array ? Array.prototype.slice.call(message.value) : message.value;
            return object;
        };
    
        /**
         * Converts this PluginMessage to JSON.
         * @function toJSON
         * @memberof PluginMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PluginMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return PluginMessage;
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
         * @property {BlockDef.Type|null} [type] BlockDef type
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
         * BlockDef type.
         * @member {BlockDef.Type} type
         * @memberof BlockDef
         * @instance
         */
        BlockDef.prototype.type = 0;
    
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
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.type);
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
                    message.type = reader.int32();
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
            switch (object.type) {
            case "BLOCK":
            case 0:
                message.type = 0;
                break;
            case "CROSS":
            case 1:
                message.type = 1;
                break;
            case "TRANSPARENT":
            case 2:
                message.type = 2;
                break;
            case "CUSTOM":
            case 3:
                message.type = 3;
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
                object.type = options.enums === String ? "BLOCK" : 0;
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
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = options.enums === String ? $root.BlockDef.Type[message.type] : message.type;
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
         * Type enum.
         * @name BlockDef.Type
         * @enum {number}
         * @property {number} BLOCK=0 BLOCK value
         * @property {number} CROSS=1 CROSS value
         * @property {number} TRANSPARENT=2 TRANSPARENT value
         * @property {number} CUSTOM=3 CUSTOM value
         */
        BlockDef.Type = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "BLOCK"] = 0;
            values[valuesById[1] = "CROSS"] = 1;
            values[valuesById[2] = "TRANSPARENT"] = 2;
            values[valuesById[3] = "CUSTOM"] = 3;
            return values;
        })();
    
        return BlockDef;
    })();

    return $root;
});
