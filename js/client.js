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
    
    $root.loginResponse = (function() {
    
        /**
         * Properties of a loginResponse.
         * @exports IloginResponse
         * @interface IloginResponse
         * @property {string|null} [username] loginResponse username
         * @property {number|null} [protocol] loginResponse protocol
         * @property {boolean|null} [mobile] loginResponse mobile
         * @property {string|null} [client] loginResponse client
         * @property {string|null} [secret] loginResponse secret
         */
    
        /**
         * Constructs a new loginResponse.
         * @exports loginResponse
         * @classdesc Represents a loginResponse.
         * @implements IloginResponse
         * @constructor
         * @param {IloginResponse=} [properties] Properties to set
         */
        function loginResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * loginResponse username.
         * @member {string} username
         * @memberof loginResponse
         * @instance
         */
        loginResponse.prototype.username = "";
    
        /**
         * loginResponse protocol.
         * @member {number} protocol
         * @memberof loginResponse
         * @instance
         */
        loginResponse.prototype.protocol = 0;
    
        /**
         * loginResponse mobile.
         * @member {boolean} mobile
         * @memberof loginResponse
         * @instance
         */
        loginResponse.prototype.mobile = false;
    
        /**
         * loginResponse client.
         * @member {string} client
         * @memberof loginResponse
         * @instance
         */
        loginResponse.prototype.client = "";
    
        /**
         * loginResponse secret.
         * @member {string} secret
         * @memberof loginResponse
         * @instance
         */
        loginResponse.prototype.secret = "";
    
        /**
         * Creates a new loginResponse instance using the specified properties.
         * @function create
         * @memberof loginResponse
         * @static
         * @param {IloginResponse=} [properties] Properties to set
         * @returns {loginResponse} loginResponse instance
         */
        loginResponse.create = function create(properties) {
            return new loginResponse(properties);
        };
    
        /**
         * Encodes the specified loginResponse message. Does not implicitly {@link loginResponse.verify|verify} messages.
         * @function encode
         * @memberof loginResponse
         * @static
         * @param {IloginResponse} message loginResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        loginResponse.encode = function encode(message, writer) {
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
            if (message.secret != null && Object.hasOwnProperty.call(message, "secret"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.secret);
            return writer;
        };
    
        /**
         * Encodes the specified loginResponse message, length delimited. Does not implicitly {@link loginResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof loginResponse
         * @static
         * @param {IloginResponse} message loginResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        loginResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a loginResponse message from the specified reader or buffer.
         * @function decode
         * @memberof loginResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {loginResponse} loginResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        loginResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.loginResponse();
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
         * Decodes a loginResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof loginResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {loginResponse} loginResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        loginResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a loginResponse message.
         * @function verify
         * @memberof loginResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        loginResponse.verify = function verify(message) {
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
            if (message.secret != null && message.hasOwnProperty("secret"))
                if (!$util.isString(message.secret))
                    return "secret: string expected";
            return null;
        };
    
        /**
         * Creates a loginResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof loginResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {loginResponse} loginResponse
         */
        loginResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.loginResponse)
                return object;
            var message = new $root.loginResponse();
            if (object.username != null)
                message.username = String(object.username);
            if (object.protocol != null)
                message.protocol = object.protocol >>> 0;
            if (object.mobile != null)
                message.mobile = Boolean(object.mobile);
            if (object.client != null)
                message.client = String(object.client);
            if (object.secret != null)
                message.secret = String(object.secret);
            return message;
        };
    
        /**
         * Creates a plain object from a loginResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof loginResponse
         * @static
         * @param {loginResponse} message loginResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        loginResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.username = "";
                object.protocol = 0;
                object.mobile = false;
                object.client = "";
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
            if (message.secret != null && message.hasOwnProperty("secret"))
                object.secret = message.secret;
            return object;
        };
    
        /**
         * Converts this loginResponse to JSON.
         * @function toJSON
         * @memberof loginResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        loginResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return loginResponse;
    })();
    
    $root.actionMove = (function() {
    
        /**
         * Properties of an actionMove.
         * @exports IactionMove
         * @interface IactionMove
         * @property {number|null} [x] actionMove x
         * @property {number|null} [y] actionMove y
         * @property {number|null} [z] actionMove z
         * @property {number|null} [rotation] actionMove rotation
         */
    
        /**
         * Constructs a new actionMove.
         * @exports actionMove
         * @classdesc Represents an actionMove.
         * @implements IactionMove
         * @constructor
         * @param {IactionMove=} [properties] Properties to set
         */
        function actionMove(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * actionMove x.
         * @member {number} x
         * @memberof actionMove
         * @instance
         */
        actionMove.prototype.x = 0;
    
        /**
         * actionMove y.
         * @member {number} y
         * @memberof actionMove
         * @instance
         */
        actionMove.prototype.y = 0;
    
        /**
         * actionMove z.
         * @member {number} z
         * @memberof actionMove
         * @instance
         */
        actionMove.prototype.z = 0;
    
        /**
         * actionMove rotation.
         * @member {number} rotation
         * @memberof actionMove
         * @instance
         */
        actionMove.prototype.rotation = 0;
    
        /**
         * Creates a new actionMove instance using the specified properties.
         * @function create
         * @memberof actionMove
         * @static
         * @param {IactionMove=} [properties] Properties to set
         * @returns {actionMove} actionMove instance
         */
        actionMove.create = function create(properties) {
            return new actionMove(properties);
        };
    
        /**
         * Encodes the specified actionMove message. Does not implicitly {@link actionMove.verify|verify} messages.
         * @function encode
         * @memberof actionMove
         * @static
         * @param {IactionMove} message actionMove message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        actionMove.encode = function encode(message, writer) {
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
            return writer;
        };
    
        /**
         * Encodes the specified actionMove message, length delimited. Does not implicitly {@link actionMove.verify|verify} messages.
         * @function encodeDelimited
         * @memberof actionMove
         * @static
         * @param {IactionMove} message actionMove message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        actionMove.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes an actionMove message from the specified reader or buffer.
         * @function decode
         * @memberof actionMove
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {actionMove} actionMove
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        actionMove.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.actionMove();
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
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes an actionMove message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof actionMove
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {actionMove} actionMove
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        actionMove.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies an actionMove message.
         * @function verify
         * @memberof actionMove
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        actionMove.verify = function verify(message) {
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
            return null;
        };
    
        /**
         * Creates an actionMove message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof actionMove
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {actionMove} actionMove
         */
        actionMove.fromObject = function fromObject(object) {
            if (object instanceof $root.actionMove)
                return object;
            var message = new $root.actionMove();
            if (object.x != null)
                message.x = Number(object.x);
            if (object.y != null)
                message.y = Number(object.y);
            if (object.z != null)
                message.z = Number(object.z);
            if (object.rotation != null)
                message.rotation = Number(object.rotation);
            return message;
        };
    
        /**
         * Creates a plain object from an actionMove message. Also converts values to other types if specified.
         * @function toObject
         * @memberof actionMove
         * @static
         * @param {actionMove} message actionMove
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        actionMove.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.x = 0;
                object.y = 0;
                object.z = 0;
                object.rotation = 0;
            }
            if (message.x != null && message.hasOwnProperty("x"))
                object.x = options.json && !isFinite(message.x) ? String(message.x) : message.x;
            if (message.y != null && message.hasOwnProperty("y"))
                object.y = options.json && !isFinite(message.y) ? String(message.y) : message.y;
            if (message.z != null && message.hasOwnProperty("z"))
                object.z = options.json && !isFinite(message.z) ? String(message.z) : message.z;
            if (message.rotation != null && message.hasOwnProperty("rotation"))
                object.rotation = options.json && !isFinite(message.rotation) ? String(message.rotation) : message.rotation;
            return object;
        };
    
        /**
         * Converts this actionMove to JSON.
         * @function toJSON
         * @memberof actionMove
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        actionMove.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return actionMove;
    })();
    
    $root.actionMessage = (function() {
    
        /**
         * Properties of an actionMessage.
         * @exports IactionMessage
         * @interface IactionMessage
         * @property {string|null} [message] actionMessage message
         */
    
        /**
         * Constructs a new actionMessage.
         * @exports actionMessage
         * @classdesc Represents an actionMessage.
         * @implements IactionMessage
         * @constructor
         * @param {IactionMessage=} [properties] Properties to set
         */
        function actionMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * actionMessage message.
         * @member {string} message
         * @memberof actionMessage
         * @instance
         */
        actionMessage.prototype.message = "";
    
        /**
         * Creates a new actionMessage instance using the specified properties.
         * @function create
         * @memberof actionMessage
         * @static
         * @param {IactionMessage=} [properties] Properties to set
         * @returns {actionMessage} actionMessage instance
         */
        actionMessage.create = function create(properties) {
            return new actionMessage(properties);
        };
    
        /**
         * Encodes the specified actionMessage message. Does not implicitly {@link actionMessage.verify|verify} messages.
         * @function encode
         * @memberof actionMessage
         * @static
         * @param {IactionMessage} message actionMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        actionMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.message);
            return writer;
        };
    
        /**
         * Encodes the specified actionMessage message, length delimited. Does not implicitly {@link actionMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof actionMessage
         * @static
         * @param {IactionMessage} message actionMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        actionMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes an actionMessage message from the specified reader or buffer.
         * @function decode
         * @memberof actionMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {actionMessage} actionMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        actionMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.actionMessage();
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
         * Decodes an actionMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof actionMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {actionMessage} actionMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        actionMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies an actionMessage message.
         * @function verify
         * @memberof actionMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        actionMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.message != null && message.hasOwnProperty("message"))
                if (!$util.isString(message.message))
                    return "message: string expected";
            return null;
        };
    
        /**
         * Creates an actionMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof actionMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {actionMessage} actionMessage
         */
        actionMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.actionMessage)
                return object;
            var message = new $root.actionMessage();
            if (object.message != null)
                message.message = String(object.message);
            return message;
        };
    
        /**
         * Creates a plain object from an actionMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof actionMessage
         * @static
         * @param {actionMessage} message actionMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        actionMessage.toObject = function toObject(message, options) {
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
         * Converts this actionMessage to JSON.
         * @function toJSON
         * @memberof actionMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        actionMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return actionMessage;
    })();
    
    $root.actionBlockPlace = (function() {
    
        /**
         * Properties of an actionBlockPlace.
         * @exports IactionBlockPlace
         * @interface IactionBlockPlace
         * @property {number|null} [x] actionBlockPlace x
         * @property {number|null} [y] actionBlockPlace y
         * @property {number|null} [z] actionBlockPlace z
         * @property {number|null} [x2] actionBlockPlace x2
         * @property {number|null} [y2] actionBlockPlace y2
         * @property {number|null} [z2] actionBlockPlace z2
         */
    
        /**
         * Constructs a new actionBlockPlace.
         * @exports actionBlockPlace
         * @classdesc Represents an actionBlockPlace.
         * @implements IactionBlockPlace
         * @constructor
         * @param {IactionBlockPlace=} [properties] Properties to set
         */
        function actionBlockPlace(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * actionBlockPlace x.
         * @member {number} x
         * @memberof actionBlockPlace
         * @instance
         */
        actionBlockPlace.prototype.x = 0;
    
        /**
         * actionBlockPlace y.
         * @member {number} y
         * @memberof actionBlockPlace
         * @instance
         */
        actionBlockPlace.prototype.y = 0;
    
        /**
         * actionBlockPlace z.
         * @member {number} z
         * @memberof actionBlockPlace
         * @instance
         */
        actionBlockPlace.prototype.z = 0;
    
        /**
         * actionBlockPlace x2.
         * @member {number} x2
         * @memberof actionBlockPlace
         * @instance
         */
        actionBlockPlace.prototype.x2 = 0;
    
        /**
         * actionBlockPlace y2.
         * @member {number} y2
         * @memberof actionBlockPlace
         * @instance
         */
        actionBlockPlace.prototype.y2 = 0;
    
        /**
         * actionBlockPlace z2.
         * @member {number} z2
         * @memberof actionBlockPlace
         * @instance
         */
        actionBlockPlace.prototype.z2 = 0;
    
        /**
         * Creates a new actionBlockPlace instance using the specified properties.
         * @function create
         * @memberof actionBlockPlace
         * @static
         * @param {IactionBlockPlace=} [properties] Properties to set
         * @returns {actionBlockPlace} actionBlockPlace instance
         */
        actionBlockPlace.create = function create(properties) {
            return new actionBlockPlace(properties);
        };
    
        /**
         * Encodes the specified actionBlockPlace message. Does not implicitly {@link actionBlockPlace.verify|verify} messages.
         * @function encode
         * @memberof actionBlockPlace
         * @static
         * @param {IactionBlockPlace} message actionBlockPlace message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        actionBlockPlace.encode = function encode(message, writer) {
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
         * Encodes the specified actionBlockPlace message, length delimited. Does not implicitly {@link actionBlockPlace.verify|verify} messages.
         * @function encodeDelimited
         * @memberof actionBlockPlace
         * @static
         * @param {IactionBlockPlace} message actionBlockPlace message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        actionBlockPlace.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes an actionBlockPlace message from the specified reader or buffer.
         * @function decode
         * @memberof actionBlockPlace
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {actionBlockPlace} actionBlockPlace
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        actionBlockPlace.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.actionBlockPlace();
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
         * Decodes an actionBlockPlace message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof actionBlockPlace
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {actionBlockPlace} actionBlockPlace
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        actionBlockPlace.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies an actionBlockPlace message.
         * @function verify
         * @memberof actionBlockPlace
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        actionBlockPlace.verify = function verify(message) {
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
         * Creates an actionBlockPlace message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof actionBlockPlace
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {actionBlockPlace} actionBlockPlace
         */
        actionBlockPlace.fromObject = function fromObject(object) {
            if (object instanceof $root.actionBlockPlace)
                return object;
            var message = new $root.actionBlockPlace();
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
         * Creates a plain object from an actionBlockPlace message. Also converts values to other types if specified.
         * @function toObject
         * @memberof actionBlockPlace
         * @static
         * @param {actionBlockPlace} message actionBlockPlace
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        actionBlockPlace.toObject = function toObject(message, options) {
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
         * Converts this actionBlockPlace to JSON.
         * @function toJSON
         * @memberof actionBlockPlace
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        actionBlockPlace.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return actionBlockPlace;
    })();
    
    $root.actionBlockBreak = (function() {
    
        /**
         * Properties of an actionBlockBreak.
         * @exports IactionBlockBreak
         * @interface IactionBlockBreak
         * @property {number|null} [x] actionBlockBreak x
         * @property {number|null} [y] actionBlockBreak y
         * @property {number|null} [z] actionBlockBreak z
         */
    
        /**
         * Constructs a new actionBlockBreak.
         * @exports actionBlockBreak
         * @classdesc Represents an actionBlockBreak.
         * @implements IactionBlockBreak
         * @constructor
         * @param {IactionBlockBreak=} [properties] Properties to set
         */
        function actionBlockBreak(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * actionBlockBreak x.
         * @member {number} x
         * @memberof actionBlockBreak
         * @instance
         */
        actionBlockBreak.prototype.x = 0;
    
        /**
         * actionBlockBreak y.
         * @member {number} y
         * @memberof actionBlockBreak
         * @instance
         */
        actionBlockBreak.prototype.y = 0;
    
        /**
         * actionBlockBreak z.
         * @member {number} z
         * @memberof actionBlockBreak
         * @instance
         */
        actionBlockBreak.prototype.z = 0;
    
        /**
         * Creates a new actionBlockBreak instance using the specified properties.
         * @function create
         * @memberof actionBlockBreak
         * @static
         * @param {IactionBlockBreak=} [properties] Properties to set
         * @returns {actionBlockBreak} actionBlockBreak instance
         */
        actionBlockBreak.create = function create(properties) {
            return new actionBlockBreak(properties);
        };
    
        /**
         * Encodes the specified actionBlockBreak message. Does not implicitly {@link actionBlockBreak.verify|verify} messages.
         * @function encode
         * @memberof actionBlockBreak
         * @static
         * @param {IactionBlockBreak} message actionBlockBreak message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        actionBlockBreak.encode = function encode(message, writer) {
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
         * Encodes the specified actionBlockBreak message, length delimited. Does not implicitly {@link actionBlockBreak.verify|verify} messages.
         * @function encodeDelimited
         * @memberof actionBlockBreak
         * @static
         * @param {IactionBlockBreak} message actionBlockBreak message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        actionBlockBreak.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes an actionBlockBreak message from the specified reader or buffer.
         * @function decode
         * @memberof actionBlockBreak
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {actionBlockBreak} actionBlockBreak
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        actionBlockBreak.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.actionBlockBreak();
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
         * Decodes an actionBlockBreak message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof actionBlockBreak
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {actionBlockBreak} actionBlockBreak
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        actionBlockBreak.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies an actionBlockBreak message.
         * @function verify
         * @memberof actionBlockBreak
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        actionBlockBreak.verify = function verify(message) {
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
         * Creates an actionBlockBreak message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof actionBlockBreak
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {actionBlockBreak} actionBlockBreak
         */
        actionBlockBreak.fromObject = function fromObject(object) {
            if (object instanceof $root.actionBlockBreak)
                return object;
            var message = new $root.actionBlockBreak();
            if (object.x != null)
                message.x = object.x | 0;
            if (object.y != null)
                message.y = object.y | 0;
            if (object.z != null)
                message.z = object.z | 0;
            return message;
        };
    
        /**
         * Creates a plain object from an actionBlockBreak message. Also converts values to other types if specified.
         * @function toObject
         * @memberof actionBlockBreak
         * @static
         * @param {actionBlockBreak} message actionBlockBreak
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        actionBlockBreak.toObject = function toObject(message, options) {
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
         * Converts this actionBlockBreak to JSON.
         * @function toJSON
         * @memberof actionBlockBreak
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        actionBlockBreak.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return actionBlockBreak;
    })();
    
    $root.actionInventoryClick = (function() {
    
        /**
         * Properties of an actionInventoryClick.
         * @exports IactionInventoryClick
         * @interface IactionInventoryClick
         * @property {number|null} [slot] actionInventoryClick slot
         * @property {string|null} [type] actionInventoryClick type
         * @property {string|null} [inventory] actionInventoryClick inventory
         * @property {number|null} [slot2] actionInventoryClick slot2
         */
    
        /**
         * Constructs a new actionInventoryClick.
         * @exports actionInventoryClick
         * @classdesc Represents an actionInventoryClick.
         * @implements IactionInventoryClick
         * @constructor
         * @param {IactionInventoryClick=} [properties] Properties to set
         */
        function actionInventoryClick(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * actionInventoryClick slot.
         * @member {number} slot
         * @memberof actionInventoryClick
         * @instance
         */
        actionInventoryClick.prototype.slot = 0;
    
        /**
         * actionInventoryClick type.
         * @member {string} type
         * @memberof actionInventoryClick
         * @instance
         */
        actionInventoryClick.prototype.type = "";
    
        /**
         * actionInventoryClick inventory.
         * @member {string} inventory
         * @memberof actionInventoryClick
         * @instance
         */
        actionInventoryClick.prototype.inventory = "";
    
        /**
         * actionInventoryClick slot2.
         * @member {number} slot2
         * @memberof actionInventoryClick
         * @instance
         */
        actionInventoryClick.prototype.slot2 = 0;
    
        /**
         * Creates a new actionInventoryClick instance using the specified properties.
         * @function create
         * @memberof actionInventoryClick
         * @static
         * @param {IactionInventoryClick=} [properties] Properties to set
         * @returns {actionInventoryClick} actionInventoryClick instance
         */
        actionInventoryClick.create = function create(properties) {
            return new actionInventoryClick(properties);
        };
    
        /**
         * Encodes the specified actionInventoryClick message. Does not implicitly {@link actionInventoryClick.verify|verify} messages.
         * @function encode
         * @memberof actionInventoryClick
         * @static
         * @param {IactionInventoryClick} message actionInventoryClick message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        actionInventoryClick.encode = function encode(message, writer) {
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
         * Encodes the specified actionInventoryClick message, length delimited. Does not implicitly {@link actionInventoryClick.verify|verify} messages.
         * @function encodeDelimited
         * @memberof actionInventoryClick
         * @static
         * @param {IactionInventoryClick} message actionInventoryClick message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        actionInventoryClick.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes an actionInventoryClick message from the specified reader or buffer.
         * @function decode
         * @memberof actionInventoryClick
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {actionInventoryClick} actionInventoryClick
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        actionInventoryClick.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.actionInventoryClick();
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
         * Decodes an actionInventoryClick message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof actionInventoryClick
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {actionInventoryClick} actionInventoryClick
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        actionInventoryClick.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies an actionInventoryClick message.
         * @function verify
         * @memberof actionInventoryClick
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        actionInventoryClick.verify = function verify(message) {
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
         * Creates an actionInventoryClick message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof actionInventoryClick
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {actionInventoryClick} actionInventoryClick
         */
        actionInventoryClick.fromObject = function fromObject(object) {
            if (object instanceof $root.actionInventoryClick)
                return object;
            var message = new $root.actionInventoryClick();
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
         * Creates a plain object from an actionInventoryClick message. Also converts values to other types if specified.
         * @function toObject
         * @memberof actionInventoryClick
         * @static
         * @param {actionInventoryClick} message actionInventoryClick
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        actionInventoryClick.toObject = function toObject(message, options) {
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
         * Converts this actionInventoryClick to JSON.
         * @function toJSON
         * @memberof actionInventoryClick
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        actionInventoryClick.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return actionInventoryClick;
    })();
    
    $root.actionInventoryOpen = (function() {
    
        /**
         * Properties of an actionInventoryOpen.
         * @exports IactionInventoryOpen
         * @interface IactionInventoryOpen
         * @property {string|null} [inventory] actionInventoryOpen inventory
         * @property {boolean|null} [action] actionInventoryOpen action
         */
    
        /**
         * Constructs a new actionInventoryOpen.
         * @exports actionInventoryOpen
         * @classdesc Represents an actionInventoryOpen.
         * @implements IactionInventoryOpen
         * @constructor
         * @param {IactionInventoryOpen=} [properties] Properties to set
         */
        function actionInventoryOpen(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * actionInventoryOpen inventory.
         * @member {string} inventory
         * @memberof actionInventoryOpen
         * @instance
         */
        actionInventoryOpen.prototype.inventory = "";
    
        /**
         * actionInventoryOpen action.
         * @member {boolean} action
         * @memberof actionInventoryOpen
         * @instance
         */
        actionInventoryOpen.prototype.action = false;
    
        /**
         * Creates a new actionInventoryOpen instance using the specified properties.
         * @function create
         * @memberof actionInventoryOpen
         * @static
         * @param {IactionInventoryOpen=} [properties] Properties to set
         * @returns {actionInventoryOpen} actionInventoryOpen instance
         */
        actionInventoryOpen.create = function create(properties) {
            return new actionInventoryOpen(properties);
        };
    
        /**
         * Encodes the specified actionInventoryOpen message. Does not implicitly {@link actionInventoryOpen.verify|verify} messages.
         * @function encode
         * @memberof actionInventoryOpen
         * @static
         * @param {IactionInventoryOpen} message actionInventoryOpen message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        actionInventoryOpen.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.inventory != null && Object.hasOwnProperty.call(message, "inventory"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.inventory);
            if (message.action != null && Object.hasOwnProperty.call(message, "action"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.action);
            return writer;
        };
    
        /**
         * Encodes the specified actionInventoryOpen message, length delimited. Does not implicitly {@link actionInventoryOpen.verify|verify} messages.
         * @function encodeDelimited
         * @memberof actionInventoryOpen
         * @static
         * @param {IactionInventoryOpen} message actionInventoryOpen message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        actionInventoryOpen.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes an actionInventoryOpen message from the specified reader or buffer.
         * @function decode
         * @memberof actionInventoryOpen
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {actionInventoryOpen} actionInventoryOpen
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        actionInventoryOpen.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.actionInventoryOpen();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.inventory = reader.string();
                    break;
                case 2:
                    message.action = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes an actionInventoryOpen message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof actionInventoryOpen
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {actionInventoryOpen} actionInventoryOpen
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        actionInventoryOpen.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies an actionInventoryOpen message.
         * @function verify
         * @memberof actionInventoryOpen
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        actionInventoryOpen.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.inventory != null && message.hasOwnProperty("inventory"))
                if (!$util.isString(message.inventory))
                    return "inventory: string expected";
            if (message.action != null && message.hasOwnProperty("action"))
                if (typeof message.action !== "boolean")
                    return "action: boolean expected";
            return null;
        };
    
        /**
         * Creates an actionInventoryOpen message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof actionInventoryOpen
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {actionInventoryOpen} actionInventoryOpen
         */
        actionInventoryOpen.fromObject = function fromObject(object) {
            if (object instanceof $root.actionInventoryOpen)
                return object;
            var message = new $root.actionInventoryOpen();
            if (object.inventory != null)
                message.inventory = String(object.inventory);
            if (object.action != null)
                message.action = Boolean(object.action);
            return message;
        };
    
        /**
         * Creates a plain object from an actionInventoryOpen message. Also converts values to other types if specified.
         * @function toObject
         * @memberof actionInventoryOpen
         * @static
         * @param {actionInventoryOpen} message actionInventoryOpen
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        actionInventoryOpen.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.inventory = "";
                object.action = false;
            }
            if (message.inventory != null && message.hasOwnProperty("inventory"))
                object.inventory = message.inventory;
            if (message.action != null && message.hasOwnProperty("action"))
                object.action = message.action;
            return object;
        };
    
        /**
         * Converts this actionInventoryOpen to JSON.
         * @function toJSON
         * @memberof actionInventoryOpen
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        actionInventoryOpen.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return actionInventoryOpen;
    })();
    
    $root.actionInventoryClose = (function() {
    
        /**
         * Properties of an actionInventoryClose.
         * @exports IactionInventoryClose
         * @interface IactionInventoryClose
         * @property {string|null} [inventory] actionInventoryClose inventory
         */
    
        /**
         * Constructs a new actionInventoryClose.
         * @exports actionInventoryClose
         * @classdesc Represents an actionInventoryClose.
         * @implements IactionInventoryClose
         * @constructor
         * @param {IactionInventoryClose=} [properties] Properties to set
         */
        function actionInventoryClose(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * actionInventoryClose inventory.
         * @member {string} inventory
         * @memberof actionInventoryClose
         * @instance
         */
        actionInventoryClose.prototype.inventory = "";
    
        /**
         * Creates a new actionInventoryClose instance using the specified properties.
         * @function create
         * @memberof actionInventoryClose
         * @static
         * @param {IactionInventoryClose=} [properties] Properties to set
         * @returns {actionInventoryClose} actionInventoryClose instance
         */
        actionInventoryClose.create = function create(properties) {
            return new actionInventoryClose(properties);
        };
    
        /**
         * Encodes the specified actionInventoryClose message. Does not implicitly {@link actionInventoryClose.verify|verify} messages.
         * @function encode
         * @memberof actionInventoryClose
         * @static
         * @param {IactionInventoryClose} message actionInventoryClose message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        actionInventoryClose.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.inventory != null && Object.hasOwnProperty.call(message, "inventory"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.inventory);
            return writer;
        };
    
        /**
         * Encodes the specified actionInventoryClose message, length delimited. Does not implicitly {@link actionInventoryClose.verify|verify} messages.
         * @function encodeDelimited
         * @memberof actionInventoryClose
         * @static
         * @param {IactionInventoryClose} message actionInventoryClose message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        actionInventoryClose.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes an actionInventoryClose message from the specified reader or buffer.
         * @function decode
         * @memberof actionInventoryClose
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {actionInventoryClose} actionInventoryClose
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        actionInventoryClose.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.actionInventoryClose();
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
         * Decodes an actionInventoryClose message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof actionInventoryClose
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {actionInventoryClose} actionInventoryClose
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        actionInventoryClose.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies an actionInventoryClose message.
         * @function verify
         * @memberof actionInventoryClose
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        actionInventoryClose.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.inventory != null && message.hasOwnProperty("inventory"))
                if (!$util.isString(message.inventory))
                    return "inventory: string expected";
            return null;
        };
    
        /**
         * Creates an actionInventoryClose message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof actionInventoryClose
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {actionInventoryClose} actionInventoryClose
         */
        actionInventoryClose.fromObject = function fromObject(object) {
            if (object instanceof $root.actionInventoryClose)
                return object;
            var message = new $root.actionInventoryClose();
            if (object.inventory != null)
                message.inventory = String(object.inventory);
            return message;
        };
    
        /**
         * Creates a plain object from an actionInventoryClose message. Also converts values to other types if specified.
         * @function toObject
         * @memberof actionInventoryClose
         * @static
         * @param {actionInventoryClose} message actionInventoryClose
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        actionInventoryClose.toObject = function toObject(message, options) {
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
         * Converts this actionInventoryClose to JSON.
         * @function toJSON
         * @memberof actionInventoryClose
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        actionInventoryClose.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return actionInventoryClose;
    })();
    
    $root.actionClick = (function() {
    
        /**
         * Properties of an actionClick.
         * @exports IactionClick
         * @interface IactionClick
         * @property {number|null} [x] actionClick x
         * @property {number|null} [y] actionClick y
         * @property {number|null} [z] actionClick z
         * @property {string|null} [type] actionClick type
         */
    
        /**
         * Constructs a new actionClick.
         * @exports actionClick
         * @classdesc Represents an actionClick.
         * @implements IactionClick
         * @constructor
         * @param {IactionClick=} [properties] Properties to set
         */
        function actionClick(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * actionClick x.
         * @member {number} x
         * @memberof actionClick
         * @instance
         */
        actionClick.prototype.x = 0;
    
        /**
         * actionClick y.
         * @member {number} y
         * @memberof actionClick
         * @instance
         */
        actionClick.prototype.y = 0;
    
        /**
         * actionClick z.
         * @member {number} z
         * @memberof actionClick
         * @instance
         */
        actionClick.prototype.z = 0;
    
        /**
         * actionClick type.
         * @member {string} type
         * @memberof actionClick
         * @instance
         */
        actionClick.prototype.type = "";
    
        /**
         * Creates a new actionClick instance using the specified properties.
         * @function create
         * @memberof actionClick
         * @static
         * @param {IactionClick=} [properties] Properties to set
         * @returns {actionClick} actionClick instance
         */
        actionClick.create = function create(properties) {
            return new actionClick(properties);
        };
    
        /**
         * Encodes the specified actionClick message. Does not implicitly {@link actionClick.verify|verify} messages.
         * @function encode
         * @memberof actionClick
         * @static
         * @param {IactionClick} message actionClick message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        actionClick.encode = function encode(message, writer) {
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
            return writer;
        };
    
        /**
         * Encodes the specified actionClick message, length delimited. Does not implicitly {@link actionClick.verify|verify} messages.
         * @function encodeDelimited
         * @memberof actionClick
         * @static
         * @param {IactionClick} message actionClick message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        actionClick.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes an actionClick message from the specified reader or buffer.
         * @function decode
         * @memberof actionClick
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {actionClick} actionClick
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        actionClick.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.actionClick();
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
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes an actionClick message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof actionClick
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {actionClick} actionClick
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        actionClick.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies an actionClick message.
         * @function verify
         * @memberof actionClick
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        actionClick.verify = function verify(message) {
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
            return null;
        };
    
        /**
         * Creates an actionClick message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof actionClick
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {actionClick} actionClick
         */
        actionClick.fromObject = function fromObject(object) {
            if (object instanceof $root.actionClick)
                return object;
            var message = new $root.actionClick();
            if (object.x != null)
                message.x = object.x | 0;
            if (object.y != null)
                message.y = object.y | 0;
            if (object.z != null)
                message.z = object.z | 0;
            if (object.type != null)
                message.type = String(object.type);
            return message;
        };
    
        /**
         * Creates a plain object from an actionClick message. Also converts values to other types if specified.
         * @function toObject
         * @memberof actionClick
         * @static
         * @param {actionClick} message actionClick
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        actionClick.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.x = 0;
                object.y = 0;
                object.z = 0;
                object.type = "";
            }
            if (message.x != null && message.hasOwnProperty("x"))
                object.x = message.x;
            if (message.y != null && message.hasOwnProperty("y"))
                object.y = message.y;
            if (message.z != null && message.hasOwnProperty("z"))
                object.z = message.z;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            return object;
        };
    
        /**
         * Converts this actionClick to JSON.
         * @function toJSON
         * @memberof actionClick
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        actionClick.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return actionClick;
    })();
    
    $root.actionClickEntity = (function() {
    
        /**
         * Properties of an actionClickEntity.
         * @exports IactionClickEntity
         * @interface IactionClickEntity
         * @property {string|null} [uuid] actionClickEntity uuid
         * @property {string|null} [type] actionClickEntity type
         */
    
        /**
         * Constructs a new actionClickEntity.
         * @exports actionClickEntity
         * @classdesc Represents an actionClickEntity.
         * @implements IactionClickEntity
         * @constructor
         * @param {IactionClickEntity=} [properties] Properties to set
         */
        function actionClickEntity(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * actionClickEntity uuid.
         * @member {string} uuid
         * @memberof actionClickEntity
         * @instance
         */
        actionClickEntity.prototype.uuid = "";
    
        /**
         * actionClickEntity type.
         * @member {string} type
         * @memberof actionClickEntity
         * @instance
         */
        actionClickEntity.prototype.type = "";
    
        /**
         * Creates a new actionClickEntity instance using the specified properties.
         * @function create
         * @memberof actionClickEntity
         * @static
         * @param {IactionClickEntity=} [properties] Properties to set
         * @returns {actionClickEntity} actionClickEntity instance
         */
        actionClickEntity.create = function create(properties) {
            return new actionClickEntity(properties);
        };
    
        /**
         * Encodes the specified actionClickEntity message. Does not implicitly {@link actionClickEntity.verify|verify} messages.
         * @function encode
         * @memberof actionClickEntity
         * @static
         * @param {IactionClickEntity} message actionClickEntity message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        actionClickEntity.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uuid != null && Object.hasOwnProperty.call(message, "uuid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.uuid);
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.type);
            return writer;
        };
    
        /**
         * Encodes the specified actionClickEntity message, length delimited. Does not implicitly {@link actionClickEntity.verify|verify} messages.
         * @function encodeDelimited
         * @memberof actionClickEntity
         * @static
         * @param {IactionClickEntity} message actionClickEntity message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        actionClickEntity.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes an actionClickEntity message from the specified reader or buffer.
         * @function decode
         * @memberof actionClickEntity
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {actionClickEntity} actionClickEntity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        actionClickEntity.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.actionClickEntity();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uuid = reader.string();
                    break;
                case 2:
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
         * Decodes an actionClickEntity message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof actionClickEntity
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {actionClickEntity} actionClickEntity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        actionClickEntity.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies an actionClickEntity message.
         * @function verify
         * @memberof actionClickEntity
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        actionClickEntity.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uuid != null && message.hasOwnProperty("uuid"))
                if (!$util.isString(message.uuid))
                    return "uuid: string expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isString(message.type))
                    return "type: string expected";
            return null;
        };
    
        /**
         * Creates an actionClickEntity message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof actionClickEntity
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {actionClickEntity} actionClickEntity
         */
        actionClickEntity.fromObject = function fromObject(object) {
            if (object instanceof $root.actionClickEntity)
                return object;
            var message = new $root.actionClickEntity();
            if (object.uuid != null)
                message.uuid = String(object.uuid);
            if (object.type != null)
                message.type = String(object.type);
            return message;
        };
    
        /**
         * Creates a plain object from an actionClickEntity message. Also converts values to other types if specified.
         * @function toObject
         * @memberof actionClickEntity
         * @static
         * @param {actionClickEntity} message actionClickEntity
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        actionClickEntity.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.uuid = "";
                object.type = "";
            }
            if (message.uuid != null && message.hasOwnProperty("uuid"))
                object.uuid = message.uuid;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            return object;
        };
    
        /**
         * Converts this actionClickEntity to JSON.
         * @function toJSON
         * @memberof actionClickEntity
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        actionClickEntity.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return actionClickEntity;
    })();
    
    $root.chunkRequest = (function() {
    
        /**
         * Properties of a chunkRequest.
         * @exports IchunkRequest
         * @interface IchunkRequest
         * @property {number|null} [x] chunkRequest x
         * @property {number|null} [y] chunkRequest y
         * @property {number|null} [z] chunkRequest z
         */
    
        /**
         * Constructs a new chunkRequest.
         * @exports chunkRequest
         * @classdesc Represents a chunkRequest.
         * @implements IchunkRequest
         * @constructor
         * @param {IchunkRequest=} [properties] Properties to set
         */
        function chunkRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * chunkRequest x.
         * @member {number} x
         * @memberof chunkRequest
         * @instance
         */
        chunkRequest.prototype.x = 0;
    
        /**
         * chunkRequest y.
         * @member {number} y
         * @memberof chunkRequest
         * @instance
         */
        chunkRequest.prototype.y = 0;
    
        /**
         * chunkRequest z.
         * @member {number} z
         * @memberof chunkRequest
         * @instance
         */
        chunkRequest.prototype.z = 0;
    
        /**
         * Creates a new chunkRequest instance using the specified properties.
         * @function create
         * @memberof chunkRequest
         * @static
         * @param {IchunkRequest=} [properties] Properties to set
         * @returns {chunkRequest} chunkRequest instance
         */
        chunkRequest.create = function create(properties) {
            return new chunkRequest(properties);
        };
    
        /**
         * Encodes the specified chunkRequest message. Does not implicitly {@link chunkRequest.verify|verify} messages.
         * @function encode
         * @memberof chunkRequest
         * @static
         * @param {IchunkRequest} message chunkRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        chunkRequest.encode = function encode(message, writer) {
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
         * Encodes the specified chunkRequest message, length delimited. Does not implicitly {@link chunkRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof chunkRequest
         * @static
         * @param {IchunkRequest} message chunkRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        chunkRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a chunkRequest message from the specified reader or buffer.
         * @function decode
         * @memberof chunkRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {chunkRequest} chunkRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        chunkRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.chunkRequest();
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
         * Decodes a chunkRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof chunkRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {chunkRequest} chunkRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        chunkRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a chunkRequest message.
         * @function verify
         * @memberof chunkRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        chunkRequest.verify = function verify(message) {
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
         * Creates a chunkRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof chunkRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {chunkRequest} chunkRequest
         */
        chunkRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.chunkRequest)
                return object;
            var message = new $root.chunkRequest();
            if (object.x != null)
                message.x = object.x | 0;
            if (object.y != null)
                message.y = object.y | 0;
            if (object.z != null)
                message.z = object.z | 0;
            return message;
        };
    
        /**
         * Creates a plain object from a chunkRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof chunkRequest
         * @static
         * @param {chunkRequest} message chunkRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        chunkRequest.toObject = function toObject(message, options) {
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
         * Converts this chunkRequest to JSON.
         * @function toJSON
         * @memberof chunkRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        chunkRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return chunkRequest;
    })();

    return $root;
});
