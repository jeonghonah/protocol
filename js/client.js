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
    
    $root.ActionMove = (function() {
    
        /**
         * Properties of an ActionMove.
         * @exports IActionMove
         * @interface IActionMove
         * @property {number|null} [x] ActionMove x
         * @property {number|null} [y] ActionMove y
         * @property {number|null} [z] ActionMove z
         * @property {number|null} [rotation] ActionMove rotation
         * @property {number|null} [pitch] ActionMove pitch
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
         * ActionMove rotation.
         * @member {number} rotation
         * @memberof ActionMove
         * @instance
         */
        ActionMove.prototype.rotation = 0;
    
        /**
         * ActionMove pitch.
         * @member {number} pitch
         * @memberof ActionMove
         * @instance
         */
        ActionMove.prototype.pitch = 0;
    
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
            if (message.rotation != null && Object.hasOwnProperty.call(message, "rotation"))
                writer.uint32(/* id 4, wireType 5 =*/37).float(message.rotation);
            if (message.pitch != null && Object.hasOwnProperty.call(message, "pitch"))
                writer.uint32(/* id 5, wireType 5 =*/45).float(message.pitch);
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
            if (message.rotation != null && message.hasOwnProperty("rotation"))
                if (typeof message.rotation !== "number")
                    return "rotation: number expected";
            if (message.pitch != null && message.hasOwnProperty("pitch"))
                if (typeof message.pitch !== "number")
                    return "pitch: number expected";
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
            if (object.rotation != null)
                message.rotation = Number(object.rotation);
            if (object.pitch != null)
                message.pitch = Number(object.pitch);
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
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.x);
            if (message.y != null && Object.hasOwnProperty.call(message, "y"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.y);
            if (message.z != null && Object.hasOwnProperty.call(message, "z"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.z);
            if (message.x2 != null && Object.hasOwnProperty.call(message, "x2"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.x2);
            if (message.y2 != null && Object.hasOwnProperty.call(message, "y2"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.y2);
            if (message.z2 != null && Object.hasOwnProperty.call(message, "z2"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.z2);
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
                    message.x = reader.int32();
                    break;
                case 2:
                    message.y = reader.int32();
                    break;
                case 3:
                    message.z = reader.int32();
                    break;
                case 4:
                    message.x2 = reader.int32();
                    break;
                case 5:
                    message.y2 = reader.int32();
                    break;
                case 6:
                    message.z2 = reader.int32();
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
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.x);
            if (message.y != null && Object.hasOwnProperty.call(message, "y"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.y);
            if (message.z != null && Object.hasOwnProperty.call(message, "z"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.z);
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
                    message.x = reader.int32();
                    break;
                case 2:
                    message.y = reader.int32();
                    break;
                case 3:
                    message.z = reader.int32();
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
            }
            if (message.x != null && message.hasOwnProperty("x"))
                object.x = message.x;
            if (message.y != null && message.hasOwnProperty("y"))
                object.y = message.y;
            if (message.z != null && message.hasOwnProperty("z"))
                object.z = message.z;
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
         * @property {string|null} [type] ActionInventoryClick type
         * @property {string|null} [inventory] ActionInventoryClick inventory
         * @property {number|null} [slot2] ActionInventoryClick slot2
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
         * @member {string} type
         * @memberof ActionInventoryClick
         * @instance
         */
        ActionInventoryClick.prototype.type = "";
    
        /**
         * ActionInventoryClick inventory.
         * @member {string} inventory
         * @memberof ActionInventoryClick
         * @instance
         */
        ActionInventoryClick.prototype.inventory = "";
    
        /**
         * ActionInventoryClick slot2.
         * @member {number} slot2
         * @memberof ActionInventoryClick
         * @instance
         */
        ActionInventoryClick.prototype.slot2 = 0;
    
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
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.type);
            if (message.inventory != null && Object.hasOwnProperty.call(message, "inventory"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.inventory);
            if (message.slot2 != null && Object.hasOwnProperty.call(message, "slot2"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.slot2);
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
                    message.type = reader.string();
                    break;
                case 3:
                    message.inventory = reader.string();
                    break;
                case 4:
                    message.slot2 = reader.int32();
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
                if (!$util.isString(message.type))
                    return "type: string expected";
            if (message.inventory != null && message.hasOwnProperty("inventory"))
                if (!$util.isString(message.inventory))
                    return "inventory: string expected";
            if (message.slot2 != null && message.hasOwnProperty("slot2"))
                if (!$util.isInteger(message.slot2))
                    return "slot2: integer expected";
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
            if (object.type != null)
                message.type = String(object.type);
            if (object.inventory != null)
                message.inventory = String(object.inventory);
            if (object.slot2 != null)
                message.slot2 = object.slot2 | 0;
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
                object.type = "";
                object.inventory = "";
                object.slot2 = 0;
            }
            if (message.slot != null && message.hasOwnProperty("slot"))
                object.slot = message.slot;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.inventory != null && message.hasOwnProperty("inventory"))
                object.inventory = message.inventory;
            if (message.slot2 != null && message.hasOwnProperty("slot2"))
                object.slot2 = message.slot2;
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
    
    $root.ActionInventoryOpen = (function() {
    
        /**
         * Properties of an ActionInventoryOpen.
         * @exports IActionInventoryOpen
         * @interface IActionInventoryOpen
         * @property {string|null} [inventory] ActionInventoryOpen inventory
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
         * @member {string} inventory
         * @memberof ActionInventoryOpen
         * @instance
         */
        ActionInventoryOpen.prototype.inventory = "";
    
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
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.inventory);
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
                    message.inventory = reader.string();
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
                if (!$util.isString(message.inventory))
                    return "inventory: string expected";
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
            if (object.inventory != null)
                message.inventory = String(object.inventory);
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
                object.inventory = "";
            if (message.inventory != null && message.hasOwnProperty("inventory"))
                object.inventory = message.inventory;
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
         * @property {string|null} [inventory] ActionInventoryClose inventory
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
         * @member {string} inventory
         * @memberof ActionInventoryClose
         * @instance
         */
        ActionInventoryClose.prototype.inventory = "";
    
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
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.inventory);
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
                    message.inventory = reader.string();
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
                if (!$util.isString(message.inventory))
                    return "inventory: string expected";
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
            if (object.inventory != null)
                message.inventory = String(object.inventory);
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
                object.inventory = "";
            if (message.inventory != null && message.hasOwnProperty("inventory"))
                object.inventory = message.inventory;
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
         * @property {string|null} [type] ActionClick type
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
         * @member {string} type
         * @memberof ActionClick
         * @instance
         */
        ActionClick.prototype.type = "";
    
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
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.x);
            if (message.y != null && Object.hasOwnProperty.call(message, "y"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.y);
            if (message.z != null && Object.hasOwnProperty.call(message, "z"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.z);
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.type);
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
                    message.x = reader.int32();
                    break;
                case 2:
                    message.y = reader.int32();
                    break;
                case 3:
                    message.z = reader.int32();
                    break;
                case 4:
                    message.type = reader.string();
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
                if (!$util.isString(message.type))
                    return "type: string expected";
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
            if (object.type != null)
                message.type = String(object.type);
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
                object.type = "";
                object.onBlock = false;
            }
            if (message.x != null && message.hasOwnProperty("x"))
                object.x = message.x;
            if (message.y != null && message.hasOwnProperty("y"))
                object.y = message.y;
            if (message.z != null && message.hasOwnProperty("z"))
                object.z = message.z;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
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

    return $root;
});
