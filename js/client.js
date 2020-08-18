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
            }
            if (message.username != null && message.hasOwnProperty("username"))
                object.username = message.username;
            if (message.protocol != null && message.hasOwnProperty("protocol"))
                object.protocol = message.protocol;
            if (message.mobile != null && message.hasOwnProperty("mobile"))
                object.mobile = message.mobile;
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
            }
            if (message.slot != null && message.hasOwnProperty("slot"))
                object.slot = message.slot;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
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
    
        /**
         * ClickType enum.
         * @name actionInventoryClick.ClickType
         * @enum {number}
         * @property {number} LEFT=0 LEFT value
         * @property {number} RIGHT=1 RIGHT value
         * @property {number} SELECT=2 SELECT value
         * @property {number} LEFTSHIFT=3 LEFTSHIFT value
         * @property {number} RIGHTSHIFT=4 RIGHTSHIFT value
         */
        actionInventoryClick.ClickType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "LEFT"] = 0;
            values[valuesById[1] = "RIGHT"] = 1;
            values[valuesById[2] = "SELECT"] = 2;
            values[valuesById[3] = "LEFTSHIFT"] = 3;
            values[valuesById[4] = "RIGHTSHIFT"] = 4;
            return values;
        })();
    
        return actionInventoryClick;
    })();

    return $root;
});
