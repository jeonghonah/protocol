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
         * @property {boolean|null} [finished] ActionBlockBreak finished
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
         * ActionBlockBreak finished.
         * @member {boolean} finished
         * @memberof ActionBlockBreak
         * @instance
         */
        ActionBlockBreak.prototype.finished = false;
    
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
            if (message.finished != null && Object.hasOwnProperty.call(message, "finished"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.finished);
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
                    message.finished = reader.bool();
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
            if (message.finished != null && message.hasOwnProperty("finished"))
                if (typeof message.finished !== "boolean")
                    return "finished: boolean expected";
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
            if (object.finished != null)
                message.finished = Boolean(object.finished);
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
                object.finished = false;
            }
            if (message.x != null && message.hasOwnProperty("x"))
                object.x = message.x;
            if (message.y != null && message.hasOwnProperty("y"))
                object.y = message.y;
            if (message.z != null && message.hasOwnProperty("z"))
                object.z = message.z;
            if (message.finished != null && message.hasOwnProperty("finished"))
                object.finished = message.finished;
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
            case "CRAFTING":
            case 2:
                message.inventory = 2;
                break;
            case "HOOK":
            case 3:
                message.inventory = 3;
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
            case "MAIN":
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
                object.inventory = options.enums === String ? "MAIN" : 0;
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
            case "MAIN":
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
                object.inventory = options.enums === String ? "MAIN" : 0;
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
    
    $root.ProxyInfo = (function() {
    
        /**
         * Properties of a ProxyInfo.
         * @exports IProxyInfo
         * @interface IProxyInfo
         * @property {string|null} [name] ProxyInfo name
         * @property {number|null} [proxyProtocol] ProxyInfo proxyProtocol
         * @property {number|null} [onlinePlayers] ProxyInfo onlinePlayers
         * @property {number|null} [maxPlayers] ProxyInfo maxPlayers
         * @property {string|null} [motd] ProxyInfo motd
         * @property {string|null} [software] ProxyInfo software
         * @property {boolean|null} [auth] ProxyInfo auth
         * @property {string|null} [secret] ProxyInfo secret
         * @property {boolean|null} [isProxy] ProxyInfo isProxy
         */
    
        /**
         * Constructs a new ProxyInfo.
         * @exports ProxyInfo
         * @classdesc Represents a ProxyInfo.
         * @implements IProxyInfo
         * @constructor
         * @param {IProxyInfo=} [properties] Properties to set
         */
        function ProxyInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * ProxyInfo name.
         * @member {string} name
         * @memberof ProxyInfo
         * @instance
         */
        ProxyInfo.prototype.name = "";
    
        /**
         * ProxyInfo proxyProtocol.
         * @member {number} proxyProtocol
         * @memberof ProxyInfo
         * @instance
         */
        ProxyInfo.prototype.proxyProtocol = 0;
    
        /**
         * ProxyInfo onlinePlayers.
         * @member {number} onlinePlayers
         * @memberof ProxyInfo
         * @instance
         */
        ProxyInfo.prototype.onlinePlayers = 0;
    
        /**
         * ProxyInfo maxPlayers.
         * @member {number} maxPlayers
         * @memberof ProxyInfo
         * @instance
         */
        ProxyInfo.prototype.maxPlayers = 0;
    
        /**
         * ProxyInfo motd.
         * @member {string} motd
         * @memberof ProxyInfo
         * @instance
         */
        ProxyInfo.prototype.motd = "";
    
        /**
         * ProxyInfo software.
         * @member {string} software
         * @memberof ProxyInfo
         * @instance
         */
        ProxyInfo.prototype.software = "";
    
        /**
         * ProxyInfo auth.
         * @member {boolean} auth
         * @memberof ProxyInfo
         * @instance
         */
        ProxyInfo.prototype.auth = false;
    
        /**
         * ProxyInfo secret.
         * @member {string} secret
         * @memberof ProxyInfo
         * @instance
         */
        ProxyInfo.prototype.secret = "";
    
        /**
         * ProxyInfo isProxy.
         * @member {boolean} isProxy
         * @memberof ProxyInfo
         * @instance
         */
        ProxyInfo.prototype.isProxy = false;
    
        /**
         * Creates a new ProxyInfo instance using the specified properties.
         * @function create
         * @memberof ProxyInfo
         * @static
         * @param {IProxyInfo=} [properties] Properties to set
         * @returns {ProxyInfo} ProxyInfo instance
         */
        ProxyInfo.create = function create(properties) {
            return new ProxyInfo(properties);
        };
    
        /**
         * Encodes the specified ProxyInfo message. Does not implicitly {@link ProxyInfo.verify|verify} messages.
         * @function encode
         * @memberof ProxyInfo
         * @static
         * @param {IProxyInfo} message ProxyInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ProxyInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.proxyProtocol != null && Object.hasOwnProperty.call(message, "proxyProtocol"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.proxyProtocol);
            if (message.onlinePlayers != null && Object.hasOwnProperty.call(message, "onlinePlayers"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.onlinePlayers);
            if (message.maxPlayers != null && Object.hasOwnProperty.call(message, "maxPlayers"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.maxPlayers);
            if (message.motd != null && Object.hasOwnProperty.call(message, "motd"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.motd);
            if (message.software != null && Object.hasOwnProperty.call(message, "software"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.software);
            if (message.auth != null && Object.hasOwnProperty.call(message, "auth"))
                writer.uint32(/* id 7, wireType 0 =*/56).bool(message.auth);
            if (message.secret != null && Object.hasOwnProperty.call(message, "secret"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.secret);
            if (message.isProxy != null && Object.hasOwnProperty.call(message, "isProxy"))
                writer.uint32(/* id 9, wireType 0 =*/72).bool(message.isProxy);
            return writer;
        };
    
        /**
         * Encodes the specified ProxyInfo message, length delimited. Does not implicitly {@link ProxyInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ProxyInfo
         * @static
         * @param {IProxyInfo} message ProxyInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ProxyInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a ProxyInfo message from the specified reader or buffer.
         * @function decode
         * @memberof ProxyInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ProxyInfo} ProxyInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ProxyInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ProxyInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.proxyProtocol = reader.uint32();
                    break;
                case 3:
                    message.onlinePlayers = reader.uint32();
                    break;
                case 4:
                    message.maxPlayers = reader.uint32();
                    break;
                case 5:
                    message.motd = reader.string();
                    break;
                case 6:
                    message.software = reader.string();
                    break;
                case 7:
                    message.auth = reader.bool();
                    break;
                case 8:
                    message.secret = reader.string();
                    break;
                case 9:
                    message.isProxy = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a ProxyInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ProxyInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ProxyInfo} ProxyInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ProxyInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a ProxyInfo message.
         * @function verify
         * @memberof ProxyInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ProxyInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.proxyProtocol != null && message.hasOwnProperty("proxyProtocol"))
                if (!$util.isInteger(message.proxyProtocol))
                    return "proxyProtocol: integer expected";
            if (message.onlinePlayers != null && message.hasOwnProperty("onlinePlayers"))
                if (!$util.isInteger(message.onlinePlayers))
                    return "onlinePlayers: integer expected";
            if (message.maxPlayers != null && message.hasOwnProperty("maxPlayers"))
                if (!$util.isInteger(message.maxPlayers))
                    return "maxPlayers: integer expected";
            if (message.motd != null && message.hasOwnProperty("motd"))
                if (!$util.isString(message.motd))
                    return "motd: string expected";
            if (message.software != null && message.hasOwnProperty("software"))
                if (!$util.isString(message.software))
                    return "software: string expected";
            if (message.auth != null && message.hasOwnProperty("auth"))
                if (typeof message.auth !== "boolean")
                    return "auth: boolean expected";
            if (message.secret != null && message.hasOwnProperty("secret"))
                if (!$util.isString(message.secret))
                    return "secret: string expected";
            if (message.isProxy != null && message.hasOwnProperty("isProxy"))
                if (typeof message.isProxy !== "boolean")
                    return "isProxy: boolean expected";
            return null;
        };
    
        /**
         * Creates a ProxyInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ProxyInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ProxyInfo} ProxyInfo
         */
        ProxyInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.ProxyInfo)
                return object;
            var message = new $root.ProxyInfo();
            if (object.name != null)
                message.name = String(object.name);
            if (object.proxyProtocol != null)
                message.proxyProtocol = object.proxyProtocol >>> 0;
            if (object.onlinePlayers != null)
                message.onlinePlayers = object.onlinePlayers >>> 0;
            if (object.maxPlayers != null)
                message.maxPlayers = object.maxPlayers >>> 0;
            if (object.motd != null)
                message.motd = String(object.motd);
            if (object.software != null)
                message.software = String(object.software);
            if (object.auth != null)
                message.auth = Boolean(object.auth);
            if (object.secret != null)
                message.secret = String(object.secret);
            if (object.isProxy != null)
                message.isProxy = Boolean(object.isProxy);
            return message;
        };
    
        /**
         * Creates a plain object from a ProxyInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ProxyInfo
         * @static
         * @param {ProxyInfo} message ProxyInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ProxyInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.name = "";
                object.proxyProtocol = 0;
                object.onlinePlayers = 0;
                object.maxPlayers = 0;
                object.motd = "";
                object.software = "";
                object.auth = false;
                object.secret = "";
                object.isProxy = false;
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.proxyProtocol != null && message.hasOwnProperty("proxyProtocol"))
                object.proxyProtocol = message.proxyProtocol;
            if (message.onlinePlayers != null && message.hasOwnProperty("onlinePlayers"))
                object.onlinePlayers = message.onlinePlayers;
            if (message.maxPlayers != null && message.hasOwnProperty("maxPlayers"))
                object.maxPlayers = message.maxPlayers;
            if (message.motd != null && message.hasOwnProperty("motd"))
                object.motd = message.motd;
            if (message.software != null && message.hasOwnProperty("software"))
                object.software = message.software;
            if (message.auth != null && message.hasOwnProperty("auth"))
                object.auth = message.auth;
            if (message.secret != null && message.hasOwnProperty("secret"))
                object.secret = message.secret;
            if (message.isProxy != null && message.hasOwnProperty("isProxy"))
                object.isProxy = message.isProxy;
            return object;
        };
    
        /**
         * Converts this ProxyInfo to JSON.
         * @function toJSON
         * @memberof ProxyInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ProxyInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return ProxyInfo;
    })();
    
    $root.AuthResponce = (function() {
    
        /**
         * Properties of an AuthResponce.
         * @exports IAuthResponce
         * @interface IAuthResponce
         * @property {number|null} [responce] AuthResponce responce
         * @property {string|null} [message] AuthResponce message
         * @property {number|null} [proxyVersion] AuthResponce proxyVersion
         * @property {number|null} [proxyVersionRev] AuthResponce proxyVersionRev
         * @property {number|null} [protocol] AuthResponce protocol
         * @property {boolean|null} [usePacketTranslation] AuthResponce usePacketTranslation
         * @property {string|null} [type] AuthResponce type
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
         * AuthResponce proxyVersion.
         * @member {number} proxyVersion
         * @memberof AuthResponce
         * @instance
         */
        AuthResponce.prototype.proxyVersion = 0;
    
        /**
         * AuthResponce proxyVersionRev.
         * @member {number} proxyVersionRev
         * @memberof AuthResponce
         * @instance
         */
        AuthResponce.prototype.proxyVersionRev = 0;
    
        /**
         * AuthResponce protocol.
         * @member {number} protocol
         * @memberof AuthResponce
         * @instance
         */
        AuthResponce.prototype.protocol = 0;
    
        /**
         * AuthResponce usePacketTranslation.
         * @member {boolean} usePacketTranslation
         * @memberof AuthResponce
         * @instance
         */
        AuthResponce.prototype.usePacketTranslation = false;
    
        /**
         * AuthResponce type.
         * @member {string} type
         * @memberof AuthResponce
         * @instance
         */
        AuthResponce.prototype.type = "";
    
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
            if (message.proxyVersion != null && Object.hasOwnProperty.call(message, "proxyVersion"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.proxyVersion);
            if (message.proxyVersionRev != null && Object.hasOwnProperty.call(message, "proxyVersionRev"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.proxyVersionRev);
            if (message.protocol != null && Object.hasOwnProperty.call(message, "protocol"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.protocol);
            if (message.usePacketTranslation != null && Object.hasOwnProperty.call(message, "usePacketTranslation"))
                writer.uint32(/* id 6, wireType 0 =*/48).bool(message.usePacketTranslation);
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.type);
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
                case 3:
                    message.proxyVersion = reader.uint32();
                    break;
                case 4:
                    message.proxyVersionRev = reader.uint32();
                    break;
                case 5:
                    message.protocol = reader.uint32();
                    break;
                case 6:
                    message.usePacketTranslation = reader.bool();
                    break;
                case 7:
                    message.type = reader.string();
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
            if (message.proxyVersion != null && message.hasOwnProperty("proxyVersion"))
                if (!$util.isInteger(message.proxyVersion))
                    return "proxyVersion: integer expected";
            if (message.proxyVersionRev != null && message.hasOwnProperty("proxyVersionRev"))
                if (!$util.isInteger(message.proxyVersionRev))
                    return "proxyVersionRev: integer expected";
            if (message.protocol != null && message.hasOwnProperty("protocol"))
                if (!$util.isInteger(message.protocol))
                    return "protocol: integer expected";
            if (message.usePacketTranslation != null && message.hasOwnProperty("usePacketTranslation"))
                if (typeof message.usePacketTranslation !== "boolean")
                    return "usePacketTranslation: boolean expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isString(message.type))
                    return "type: string expected";
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
            if (object.proxyVersion != null)
                message.proxyVersion = object.proxyVersion >>> 0;
            if (object.proxyVersionRev != null)
                message.proxyVersionRev = object.proxyVersionRev >>> 0;
            if (object.protocol != null)
                message.protocol = object.protocol >>> 0;
            if (object.usePacketTranslation != null)
                message.usePacketTranslation = Boolean(object.usePacketTranslation);
            if (object.type != null)
                message.type = String(object.type);
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
                object.proxyVersion = 0;
                object.proxyVersionRev = 0;
                object.protocol = 0;
                object.usePacketTranslation = false;
                object.type = "";
            }
            if (message.responce != null && message.hasOwnProperty("responce"))
                object.responce = message.responce;
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = message.message;
            if (message.proxyVersion != null && message.hasOwnProperty("proxyVersion"))
                object.proxyVersion = message.proxyVersion;
            if (message.proxyVersionRev != null && message.hasOwnProperty("proxyVersionRev"))
                object.proxyVersionRev = message.proxyVersionRev;
            if (message.protocol != null && message.hasOwnProperty("protocol"))
                object.protocol = message.protocol;
            if (message.usePacketTranslation != null && message.hasOwnProperty("usePacketTranslation"))
                object.usePacketTranslation = message.usePacketTranslation;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
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
    
    $root.LoginRequest = (function() {
    
        /**
         * Properties of a LoginRequest.
         * @exports ILoginRequest
         * @interface ILoginRequest
         * @property {string|null} [name] LoginRequest name
         * @property {number|null} [protocol] LoginRequest protocol
         * @property {number|null} [onlinePlayers] LoginRequest onlinePlayers
         * @property {number|null} [maxPlayers] LoginRequest maxPlayers
         * @property {string|null} [motd] LoginRequest motd
         * @property {string|null} [software] LoginRequest software
         * @property {boolean|null} [auth] LoginRequest auth
         * @property {string|null} [secret] LoginRequest secret
         */
    
        /**
         * Constructs a new LoginRequest.
         * @exports LoginRequest
         * @classdesc Represents a LoginRequest.
         * @implements ILoginRequest
         * @constructor
         * @param {ILoginRequest=} [properties] Properties to set
         */
        function LoginRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * LoginRequest name.
         * @member {string} name
         * @memberof LoginRequest
         * @instance
         */
        LoginRequest.prototype.name = "";
    
        /**
         * LoginRequest protocol.
         * @member {number} protocol
         * @memberof LoginRequest
         * @instance
         */
        LoginRequest.prototype.protocol = 0;
    
        /**
         * LoginRequest onlinePlayers.
         * @member {number} onlinePlayers
         * @memberof LoginRequest
         * @instance
         */
        LoginRequest.prototype.onlinePlayers = 0;
    
        /**
         * LoginRequest maxPlayers.
         * @member {number} maxPlayers
         * @memberof LoginRequest
         * @instance
         */
        LoginRequest.prototype.maxPlayers = 0;
    
        /**
         * LoginRequest motd.
         * @member {string} motd
         * @memberof LoginRequest
         * @instance
         */
        LoginRequest.prototype.motd = "";
    
        /**
         * LoginRequest software.
         * @member {string} software
         * @memberof LoginRequest
         * @instance
         */
        LoginRequest.prototype.software = "";
    
        /**
         * LoginRequest auth.
         * @member {boolean} auth
         * @memberof LoginRequest
         * @instance
         */
        LoginRequest.prototype.auth = false;
    
        /**
         * LoginRequest secret.
         * @member {string} secret
         * @memberof LoginRequest
         * @instance
         */
        LoginRequest.prototype.secret = "";
    
        /**
         * Creates a new LoginRequest instance using the specified properties.
         * @function create
         * @memberof LoginRequest
         * @static
         * @param {ILoginRequest=} [properties] Properties to set
         * @returns {LoginRequest} LoginRequest instance
         */
        LoginRequest.create = function create(properties) {
            return new LoginRequest(properties);
        };
    
        /**
         * Encodes the specified LoginRequest message. Does not implicitly {@link LoginRequest.verify|verify} messages.
         * @function encode
         * @memberof LoginRequest
         * @static
         * @param {ILoginRequest} message LoginRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.protocol != null && Object.hasOwnProperty.call(message, "protocol"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.protocol);
            if (message.onlinePlayers != null && Object.hasOwnProperty.call(message, "onlinePlayers"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.onlinePlayers);
            if (message.maxPlayers != null && Object.hasOwnProperty.call(message, "maxPlayers"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.maxPlayers);
            if (message.motd != null && Object.hasOwnProperty.call(message, "motd"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.motd);
            if (message.software != null && Object.hasOwnProperty.call(message, "software"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.software);
            if (message.auth != null && Object.hasOwnProperty.call(message, "auth"))
                writer.uint32(/* id 7, wireType 0 =*/56).bool(message.auth);
            if (message.secret != null && Object.hasOwnProperty.call(message, "secret"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.secret);
            return writer;
        };
    
        /**
         * Encodes the specified LoginRequest message, length delimited. Does not implicitly {@link LoginRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof LoginRequest
         * @static
         * @param {ILoginRequest} message LoginRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a LoginRequest message from the specified reader or buffer.
         * @function decode
         * @memberof LoginRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {LoginRequest} LoginRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.LoginRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.protocol = reader.uint32();
                    break;
                case 3:
                    message.onlinePlayers = reader.uint32();
                    break;
                case 4:
                    message.maxPlayers = reader.uint32();
                    break;
                case 5:
                    message.motd = reader.string();
                    break;
                case 6:
                    message.software = reader.string();
                    break;
                case 7:
                    message.auth = reader.bool();
                    break;
                case 8:
                    message.secret = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a LoginRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof LoginRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {LoginRequest} LoginRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a LoginRequest message.
         * @function verify
         * @memberof LoginRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LoginRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.protocol != null && message.hasOwnProperty("protocol"))
                if (!$util.isInteger(message.protocol))
                    return "protocol: integer expected";
            if (message.onlinePlayers != null && message.hasOwnProperty("onlinePlayers"))
                if (!$util.isInteger(message.onlinePlayers))
                    return "onlinePlayers: integer expected";
            if (message.maxPlayers != null && message.hasOwnProperty("maxPlayers"))
                if (!$util.isInteger(message.maxPlayers))
                    return "maxPlayers: integer expected";
            if (message.motd != null && message.hasOwnProperty("motd"))
                if (!$util.isString(message.motd))
                    return "motd: string expected";
            if (message.software != null && message.hasOwnProperty("software"))
                if (!$util.isString(message.software))
                    return "software: string expected";
            if (message.auth != null && message.hasOwnProperty("auth"))
                if (typeof message.auth !== "boolean")
                    return "auth: boolean expected";
            if (message.secret != null && message.hasOwnProperty("secret"))
                if (!$util.isString(message.secret))
                    return "secret: string expected";
            return null;
        };
    
        /**
         * Creates a LoginRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof LoginRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {LoginRequest} LoginRequest
         */
        LoginRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.LoginRequest)
                return object;
            var message = new $root.LoginRequest();
            if (object.name != null)
                message.name = String(object.name);
            if (object.protocol != null)
                message.protocol = object.protocol >>> 0;
            if (object.onlinePlayers != null)
                message.onlinePlayers = object.onlinePlayers >>> 0;
            if (object.maxPlayers != null)
                message.maxPlayers = object.maxPlayers >>> 0;
            if (object.motd != null)
                message.motd = String(object.motd);
            if (object.software != null)
                message.software = String(object.software);
            if (object.auth != null)
                message.auth = Boolean(object.auth);
            if (object.secret != null)
                message.secret = String(object.secret);
            return message;
        };
    
        /**
         * Creates a plain object from a LoginRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof LoginRequest
         * @static
         * @param {LoginRequest} message LoginRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LoginRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.name = "";
                object.protocol = 0;
                object.onlinePlayers = 0;
                object.maxPlayers = 0;
                object.motd = "";
                object.software = "";
                object.auth = false;
                object.secret = "";
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.protocol != null && message.hasOwnProperty("protocol"))
                object.protocol = message.protocol;
            if (message.onlinePlayers != null && message.hasOwnProperty("onlinePlayers"))
                object.onlinePlayers = message.onlinePlayers;
            if (message.maxPlayers != null && message.hasOwnProperty("maxPlayers"))
                object.maxPlayers = message.maxPlayers;
            if (message.motd != null && message.hasOwnProperty("motd"))
                object.motd = message.motd;
            if (message.software != null && message.hasOwnProperty("software"))
                object.software = message.software;
            if (message.auth != null && message.hasOwnProperty("auth"))
                object.auth = message.auth;
            if (message.secret != null && message.hasOwnProperty("secret"))
                object.secret = message.secret;
            return object;
        };
    
        /**
         * Converts this LoginRequest to JSON.
         * @function toJSON
         * @memberof LoginRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LoginRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return LoginRequest;
    })();
    
    $root.LoginStatus = (function() {
    
        /**
         * Properties of a LoginStatus.
         * @exports ILoginStatus
         * @interface ILoginStatus
         * @property {string|null} [message] LoginStatus message
         * @property {number|Long|null} [time] LoginStatus time
         */
    
        /**
         * Constructs a new LoginStatus.
         * @exports LoginStatus
         * @classdesc Represents a LoginStatus.
         * @implements ILoginStatus
         * @constructor
         * @param {ILoginStatus=} [properties] Properties to set
         */
        function LoginStatus(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * LoginStatus message.
         * @member {string} message
         * @memberof LoginStatus
         * @instance
         */
        LoginStatus.prototype.message = "";
    
        /**
         * LoginStatus time.
         * @member {number|Long} time
         * @memberof LoginStatus
         * @instance
         */
        LoginStatus.prototype.time = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * Creates a new LoginStatus instance using the specified properties.
         * @function create
         * @memberof LoginStatus
         * @static
         * @param {ILoginStatus=} [properties] Properties to set
         * @returns {LoginStatus} LoginStatus instance
         */
        LoginStatus.create = function create(properties) {
            return new LoginStatus(properties);
        };
    
        /**
         * Encodes the specified LoginStatus message. Does not implicitly {@link LoginStatus.verify|verify} messages.
         * @function encode
         * @memberof LoginStatus
         * @static
         * @param {ILoginStatus} message LoginStatus message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginStatus.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.message);
            if (message.time != null && Object.hasOwnProperty.call(message, "time"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.time);
            return writer;
        };
    
        /**
         * Encodes the specified LoginStatus message, length delimited. Does not implicitly {@link LoginStatus.verify|verify} messages.
         * @function encodeDelimited
         * @memberof LoginStatus
         * @static
         * @param {ILoginStatus} message LoginStatus message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginStatus.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a LoginStatus message from the specified reader or buffer.
         * @function decode
         * @memberof LoginStatus
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {LoginStatus} LoginStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginStatus.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.LoginStatus();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.message = reader.string();
                    break;
                case 2:
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
         * Decodes a LoginStatus message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof LoginStatus
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {LoginStatus} LoginStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginStatus.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a LoginStatus message.
         * @function verify
         * @memberof LoginStatus
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LoginStatus.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.message != null && message.hasOwnProperty("message"))
                if (!$util.isString(message.message))
                    return "message: string expected";
            if (message.time != null && message.hasOwnProperty("time"))
                if (!$util.isInteger(message.time) && !(message.time && $util.isInteger(message.time.low) && $util.isInteger(message.time.high)))
                    return "time: integer|Long expected";
            return null;
        };
    
        /**
         * Creates a LoginStatus message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof LoginStatus
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {LoginStatus} LoginStatus
         */
        LoginStatus.fromObject = function fromObject(object) {
            if (object instanceof $root.LoginStatus)
                return object;
            var message = new $root.LoginStatus();
            if (object.message != null)
                message.message = String(object.message);
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
         * Creates a plain object from a LoginStatus message. Also converts values to other types if specified.
         * @function toObject
         * @memberof LoginStatus
         * @static
         * @param {LoginStatus} message LoginStatus
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LoginStatus.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.message = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.time = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.time = options.longs === String ? "0" : 0;
            }
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = message.message;
            if (message.time != null && message.hasOwnProperty("time"))
                if (typeof message.time === "number")
                    object.time = options.longs === String ? String(message.time) : message.time;
                else
                    object.time = options.longs === String ? $util.Long.prototype.toString.call(message.time) : options.longs === Number ? new $util.LongBits(message.time.low >>> 0, message.time.high >>> 0).toNumber(true) : message.time;
            return object;
        };
    
        /**
         * Converts this LoginStatus to JSON.
         * @function toJSON
         * @memberof LoginStatus
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LoginStatus.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return LoginStatus;
    })();
    
    $root.LoginSuccess = (function() {
    
        /**
         * Properties of a LoginSuccess.
         * @exports ILoginSuccess
         * @interface ILoginSuccess
         * @property {string|null} [message] LoginSuccess message
         * @property {number|Long|null} [time] LoginSuccess time
         * @property {string|null} [itemsDef] LoginSuccess itemsDef
         * @property {string|null} [blocksDef] LoginSuccess blocksDef
         */
    
        /**
         * Constructs a new LoginSuccess.
         * @exports LoginSuccess
         * @classdesc Represents a LoginSuccess.
         * @implements ILoginSuccess
         * @constructor
         * @param {ILoginSuccess=} [properties] Properties to set
         */
        function LoginSuccess(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * LoginSuccess message.
         * @member {string} message
         * @memberof LoginSuccess
         * @instance
         */
        LoginSuccess.prototype.message = "";
    
        /**
         * LoginSuccess time.
         * @member {number|Long} time
         * @memberof LoginSuccess
         * @instance
         */
        LoginSuccess.prototype.time = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * LoginSuccess itemsDef.
         * @member {string} itemsDef
         * @memberof LoginSuccess
         * @instance
         */
        LoginSuccess.prototype.itemsDef = "";
    
        /**
         * LoginSuccess blocksDef.
         * @member {string} blocksDef
         * @memberof LoginSuccess
         * @instance
         */
        LoginSuccess.prototype.blocksDef = "";
    
        /**
         * Creates a new LoginSuccess instance using the specified properties.
         * @function create
         * @memberof LoginSuccess
         * @static
         * @param {ILoginSuccess=} [properties] Properties to set
         * @returns {LoginSuccess} LoginSuccess instance
         */
        LoginSuccess.create = function create(properties) {
            return new LoginSuccess(properties);
        };
    
        /**
         * Encodes the specified LoginSuccess message. Does not implicitly {@link LoginSuccess.verify|verify} messages.
         * @function encode
         * @memberof LoginSuccess
         * @static
         * @param {ILoginSuccess} message LoginSuccess message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginSuccess.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.message);
            if (message.time != null && Object.hasOwnProperty.call(message, "time"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.time);
            if (message.itemsDef != null && Object.hasOwnProperty.call(message, "itemsDef"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.itemsDef);
            if (message.blocksDef != null && Object.hasOwnProperty.call(message, "blocksDef"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.blocksDef);
            return writer;
        };
    
        /**
         * Encodes the specified LoginSuccess message, length delimited. Does not implicitly {@link LoginSuccess.verify|verify} messages.
         * @function encodeDelimited
         * @memberof LoginSuccess
         * @static
         * @param {ILoginSuccess} message LoginSuccess message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginSuccess.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a LoginSuccess message from the specified reader or buffer.
         * @function decode
         * @memberof LoginSuccess
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {LoginSuccess} LoginSuccess
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginSuccess.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.LoginSuccess();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.message = reader.string();
                    break;
                case 2:
                    message.time = reader.uint64();
                    break;
                case 3:
                    message.itemsDef = reader.string();
                    break;
                case 4:
                    message.blocksDef = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a LoginSuccess message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof LoginSuccess
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {LoginSuccess} LoginSuccess
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginSuccess.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a LoginSuccess message.
         * @function verify
         * @memberof LoginSuccess
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LoginSuccess.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.message != null && message.hasOwnProperty("message"))
                if (!$util.isString(message.message))
                    return "message: string expected";
            if (message.time != null && message.hasOwnProperty("time"))
                if (!$util.isInteger(message.time) && !(message.time && $util.isInteger(message.time.low) && $util.isInteger(message.time.high)))
                    return "time: integer|Long expected";
            if (message.itemsDef != null && message.hasOwnProperty("itemsDef"))
                if (!$util.isString(message.itemsDef))
                    return "itemsDef: string expected";
            if (message.blocksDef != null && message.hasOwnProperty("blocksDef"))
                if (!$util.isString(message.blocksDef))
                    return "blocksDef: string expected";
            return null;
        };
    
        /**
         * Creates a LoginSuccess message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof LoginSuccess
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {LoginSuccess} LoginSuccess
         */
        LoginSuccess.fromObject = function fromObject(object) {
            if (object instanceof $root.LoginSuccess)
                return object;
            var message = new $root.LoginSuccess();
            if (object.message != null)
                message.message = String(object.message);
            if (object.time != null)
                if ($util.Long)
                    (message.time = $util.Long.fromValue(object.time)).unsigned = true;
                else if (typeof object.time === "string")
                    message.time = parseInt(object.time, 10);
                else if (typeof object.time === "number")
                    message.time = object.time;
                else if (typeof object.time === "object")
                    message.time = new $util.LongBits(object.time.low >>> 0, object.time.high >>> 0).toNumber(true);
            if (object.itemsDef != null)
                message.itemsDef = String(object.itemsDef);
            if (object.blocksDef != null)
                message.blocksDef = String(object.blocksDef);
            return message;
        };
    
        /**
         * Creates a plain object from a LoginSuccess message. Also converts values to other types if specified.
         * @function toObject
         * @memberof LoginSuccess
         * @static
         * @param {LoginSuccess} message LoginSuccess
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LoginSuccess.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.message = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.time = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.time = options.longs === String ? "0" : 0;
                object.itemsDef = "";
                object.blocksDef = "";
            }
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = message.message;
            if (message.time != null && message.hasOwnProperty("time"))
                if (typeof message.time === "number")
                    object.time = options.longs === String ? String(message.time) : message.time;
                else
                    object.time = options.longs === String ? $util.Long.prototype.toString.call(message.time) : options.longs === Number ? new $util.LongBits(message.time.low >>> 0, message.time.high >>> 0).toNumber(true) : message.time;
            if (message.itemsDef != null && message.hasOwnProperty("itemsDef"))
                object.itemsDef = message.itemsDef;
            if (message.blocksDef != null && message.hasOwnProperty("blocksDef"))
                object.blocksDef = message.blocksDef;
            return object;
        };
    
        /**
         * Converts this LoginSuccess to JSON.
         * @function toJSON
         * @memberof LoginSuccess
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LoginSuccess.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return LoginSuccess;
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
    
    /**
     * InventoryType enum.
     * @exports InventoryType
     * @enum {number}
     * @property {number} MAIN=0 MAIN value
     * @property {number} ARMOR=1 ARMOR value
     * @property {number} CRAFTING=2 CRAFTING value
     * @property {number} HOOK=3 HOOK value
     */
    $root.InventoryType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "MAIN"] = 0;
        values[valuesById[1] = "ARMOR"] = 1;
        values[valuesById[2] = "CRAFTING"] = 2;
        values[valuesById[3] = "HOOK"] = 3;
        return values;
    })();
    
    /**
     * ContainerType enum.
     * @exports ContainerType
     * @enum {number}
     * @property {number} MAIN=0 MAIN value
     * @property {number} CHEST=1 CHEST value
     * @property {number} CRAFTING=2 CRAFTING value
     * @property {number} FURNACE=3 FURNACE value
     */
    $root.ContainerType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "MAIN"] = 0;
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

    return $root;
});
