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
    
    $root.LoginRequest = (function() {
    
        /**
         * Properties of a LoginRequest.
         * @exports ILoginRequest
         * @interface ILoginRequest
         * @property {string|null} [name] LoginRequest name
         * @property {number|null} [protocol] LoginRequest protocol
         * @property {number|null} [maxplayers] LoginRequest maxplayers
         * @property {number|null} [numberplayers] LoginRequest numberplayers
         * @property {string|null} [motd] LoginRequest motd
         * @property {string|null} [software] LoginRequest software
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
         * LoginRequest maxplayers.
         * @member {number} maxplayers
         * @memberof LoginRequest
         * @instance
         */
        LoginRequest.prototype.maxplayers = 0;
    
        /**
         * LoginRequest numberplayers.
         * @member {number} numberplayers
         * @memberof LoginRequest
         * @instance
         */
        LoginRequest.prototype.numberplayers = 0;
    
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
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.protocol);
            if (message.maxplayers != null && Object.hasOwnProperty.call(message, "maxplayers"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.maxplayers);
            if (message.numberplayers != null && Object.hasOwnProperty.call(message, "numberplayers"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.numberplayers);
            if (message.motd != null && Object.hasOwnProperty.call(message, "motd"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.motd);
            if (message.software != null && Object.hasOwnProperty.call(message, "software"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.software);
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
                    message.protocol = reader.int32();
                    break;
                case 3:
                    message.maxplayers = reader.int32();
                    break;
                case 4:
                    message.numberplayers = reader.int32();
                    break;
                case 5:
                    message.motd = reader.string();
                    break;
                case 6:
                    message.software = reader.string();
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
            if (message.maxplayers != null && message.hasOwnProperty("maxplayers"))
                if (!$util.isInteger(message.maxplayers))
                    return "maxplayers: integer expected";
            if (message.numberplayers != null && message.hasOwnProperty("numberplayers"))
                if (!$util.isInteger(message.numberplayers))
                    return "numberplayers: integer expected";
            if (message.motd != null && message.hasOwnProperty("motd"))
                if (!$util.isString(message.motd))
                    return "motd: string expected";
            if (message.software != null && message.hasOwnProperty("software"))
                if (!$util.isString(message.software))
                    return "software: string expected";
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
                message.protocol = object.protocol | 0;
            if (object.maxplayers != null)
                message.maxplayers = object.maxplayers | 0;
            if (object.numberplayers != null)
                message.numberplayers = object.numberplayers | 0;
            if (object.motd != null)
                message.motd = String(object.motd);
            if (object.software != null)
                message.software = String(object.software);
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
                object.maxplayers = 0;
                object.numberplayers = 0;
                object.motd = "";
                object.software = "";
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.protocol != null && message.hasOwnProperty("protocol"))
                object.protocol = message.protocol;
            if (message.maxplayers != null && message.hasOwnProperty("maxplayers"))
                object.maxplayers = message.maxplayers;
            if (message.numberplayers != null && message.hasOwnProperty("numberplayers"))
                object.numberplayers = message.numberplayers;
            if (message.motd != null && message.hasOwnProperty("motd"))
                object.motd = message.motd;
            if (message.software != null && message.hasOwnProperty("software"))
                object.software = message.software;
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
    
    $root.LoginSuccess = (function() {
    
        /**
         * Properties of a LoginSuccess.
         * @exports ILoginSuccess
         * @interface ILoginSuccess
         * @property {number|null} [xPos] LoginSuccess xPos
         * @property {number|null} [yPos] LoginSuccess yPos
         * @property {number|null} [zPos] LoginSuccess zPos
         * @property {string|null} [itemsDef] LoginSuccess itemsDef
         * @property {string|null} [blocksDef] LoginSuccess blocksDef
         * @property {string|null} [inventory] LoginSuccess inventory
         * @property {string|null} [armor] LoginSuccess armor
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
         * LoginSuccess xPos.
         * @member {number} xPos
         * @memberof LoginSuccess
         * @instance
         */
        LoginSuccess.prototype.xPos = 0;
    
        /**
         * LoginSuccess yPos.
         * @member {number} yPos
         * @memberof LoginSuccess
         * @instance
         */
        LoginSuccess.prototype.yPos = 0;
    
        /**
         * LoginSuccess zPos.
         * @member {number} zPos
         * @memberof LoginSuccess
         * @instance
         */
        LoginSuccess.prototype.zPos = 0;
    
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
         * LoginSuccess inventory.
         * @member {string} inventory
         * @memberof LoginSuccess
         * @instance
         */
        LoginSuccess.prototype.inventory = "";
    
        /**
         * LoginSuccess armor.
         * @member {string} armor
         * @memberof LoginSuccess
         * @instance
         */
        LoginSuccess.prototype.armor = "";
    
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
            if (message.xPos != null && Object.hasOwnProperty.call(message, "xPos"))
                writer.uint32(/* id 1, wireType 1 =*/9).double(message.xPos);
            if (message.yPos != null && Object.hasOwnProperty.call(message, "yPos"))
                writer.uint32(/* id 2, wireType 1 =*/17).double(message.yPos);
            if (message.zPos != null && Object.hasOwnProperty.call(message, "zPos"))
                writer.uint32(/* id 3, wireType 1 =*/25).double(message.zPos);
            if (message.itemsDef != null && Object.hasOwnProperty.call(message, "itemsDef"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.itemsDef);
            if (message.blocksDef != null && Object.hasOwnProperty.call(message, "blocksDef"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.blocksDef);
            if (message.inventory != null && Object.hasOwnProperty.call(message, "inventory"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.inventory);
            if (message.armor != null && Object.hasOwnProperty.call(message, "armor"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.armor);
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
                    message.xPos = reader.double();
                    break;
                case 2:
                    message.yPos = reader.double();
                    break;
                case 3:
                    message.zPos = reader.double();
                    break;
                case 4:
                    message.itemsDef = reader.string();
                    break;
                case 5:
                    message.blocksDef = reader.string();
                    break;
                case 6:
                    message.inventory = reader.string();
                    break;
                case 7:
                    message.armor = reader.string();
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
            if (message.xPos != null && message.hasOwnProperty("xPos"))
                if (typeof message.xPos !== "number")
                    return "xPos: number expected";
            if (message.yPos != null && message.hasOwnProperty("yPos"))
                if (typeof message.yPos !== "number")
                    return "yPos: number expected";
            if (message.zPos != null && message.hasOwnProperty("zPos"))
                if (typeof message.zPos !== "number")
                    return "zPos: number expected";
            if (message.itemsDef != null && message.hasOwnProperty("itemsDef"))
                if (!$util.isString(message.itemsDef))
                    return "itemsDef: string expected";
            if (message.blocksDef != null && message.hasOwnProperty("blocksDef"))
                if (!$util.isString(message.blocksDef))
                    return "blocksDef: string expected";
            if (message.inventory != null && message.hasOwnProperty("inventory"))
                if (!$util.isString(message.inventory))
                    return "inventory: string expected";
            if (message.armor != null && message.hasOwnProperty("armor"))
                if (!$util.isString(message.armor))
                    return "armor: string expected";
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
            if (object.xPos != null)
                message.xPos = Number(object.xPos);
            if (object.yPos != null)
                message.yPos = Number(object.yPos);
            if (object.zPos != null)
                message.zPos = Number(object.zPos);
            if (object.itemsDef != null)
                message.itemsDef = String(object.itemsDef);
            if (object.blocksDef != null)
                message.blocksDef = String(object.blocksDef);
            if (object.inventory != null)
                message.inventory = String(object.inventory);
            if (object.armor != null)
                message.armor = String(object.armor);
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
                object.xPos = 0;
                object.yPos = 0;
                object.zPos = 0;
                object.itemsDef = "";
                object.blocksDef = "";
                object.inventory = "";
                object.armor = "";
            }
            if (message.xPos != null && message.hasOwnProperty("xPos"))
                object.xPos = options.json && !isFinite(message.xPos) ? String(message.xPos) : message.xPos;
            if (message.yPos != null && message.hasOwnProperty("yPos"))
                object.yPos = options.json && !isFinite(message.yPos) ? String(message.yPos) : message.yPos;
            if (message.zPos != null && message.hasOwnProperty("zPos"))
                object.zPos = options.json && !isFinite(message.zPos) ? String(message.zPos) : message.zPos;
            if (message.itemsDef != null && message.hasOwnProperty("itemsDef"))
                object.itemsDef = message.itemsDef;
            if (message.blocksDef != null && message.hasOwnProperty("blocksDef"))
                object.blocksDef = message.blocksDef;
            if (message.inventory != null && message.hasOwnProperty("inventory"))
                object.inventory = message.inventory;
            if (message.armor != null && message.hasOwnProperty("armor"))
                object.armor = message.armor;
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
    
    $root.PlayerKick = (function() {
    
        /**
         * Properties of a PlayerKick.
         * @exports IPlayerKick
         * @interface IPlayerKick
         * @property {string|null} [reason] PlayerKick reason
         * @property {number|Long|null} [time] PlayerKick time
         */
    
        /**
         * Constructs a new PlayerKick.
         * @exports PlayerKick
         * @classdesc Represents a PlayerKick.
         * @implements IPlayerKick
         * @constructor
         * @param {IPlayerKick=} [properties] Properties to set
         */
        function PlayerKick(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * PlayerKick reason.
         * @member {string} reason
         * @memberof PlayerKick
         * @instance
         */
        PlayerKick.prototype.reason = "";
    
        /**
         * PlayerKick time.
         * @member {number|Long} time
         * @memberof PlayerKick
         * @instance
         */
        PlayerKick.prototype.time = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * Creates a new PlayerKick instance using the specified properties.
         * @function create
         * @memberof PlayerKick
         * @static
         * @param {IPlayerKick=} [properties] Properties to set
         * @returns {PlayerKick} PlayerKick instance
         */
        PlayerKick.create = function create(properties) {
            return new PlayerKick(properties);
        };
    
        /**
         * Encodes the specified PlayerKick message. Does not implicitly {@link PlayerKick.verify|verify} messages.
         * @function encode
         * @memberof PlayerKick
         * @static
         * @param {IPlayerKick} message PlayerKick message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerKick.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.reason != null && Object.hasOwnProperty.call(message, "reason"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.reason);
            if (message.time != null && Object.hasOwnProperty.call(message, "time"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.time);
            return writer;
        };
    
        /**
         * Encodes the specified PlayerKick message, length delimited. Does not implicitly {@link PlayerKick.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PlayerKick
         * @static
         * @param {IPlayerKick} message PlayerKick message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerKick.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a PlayerKick message from the specified reader or buffer.
         * @function decode
         * @memberof PlayerKick
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PlayerKick} PlayerKick
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerKick.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PlayerKick();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.reason = reader.string();
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
         * Decodes a PlayerKick message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PlayerKick
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PlayerKick} PlayerKick
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerKick.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a PlayerKick message.
         * @function verify
         * @memberof PlayerKick
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PlayerKick.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.reason != null && message.hasOwnProperty("reason"))
                if (!$util.isString(message.reason))
                    return "reason: string expected";
            if (message.time != null && message.hasOwnProperty("time"))
                if (!$util.isInteger(message.time) && !(message.time && $util.isInteger(message.time.low) && $util.isInteger(message.time.high)))
                    return "time: integer|Long expected";
            return null;
        };
    
        /**
         * Creates a PlayerKick message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PlayerKick
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PlayerKick} PlayerKick
         */
        PlayerKick.fromObject = function fromObject(object) {
            if (object instanceof $root.PlayerKick)
                return object;
            var message = new $root.PlayerKick();
            if (object.reason != null)
                message.reason = String(object.reason);
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
         * Creates a plain object from a PlayerKick message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PlayerKick
         * @static
         * @param {PlayerKick} message PlayerKick
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PlayerKick.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.reason = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.time = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.time = options.longs === String ? "0" : 0;
            }
            if (message.reason != null && message.hasOwnProperty("reason"))
                object.reason = message.reason;
            if (message.time != null && message.hasOwnProperty("time"))
                if (typeof message.time === "number")
                    object.time = options.longs === String ? String(message.time) : message.time;
                else
                    object.time = options.longs === String ? $util.Long.prototype.toString.call(message.time) : options.longs === Number ? new $util.LongBits(message.time.low >>> 0, message.time.high >>> 0).toNumber(true) : message.time;
            return object;
        };
    
        /**
         * Converts this PlayerKick to JSON.
         * @function toJSON
         * @memberof PlayerKick
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PlayerKick.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return PlayerKick;
    })();
    
    $root.PlayerEntity = (function() {
    
        /**
         * Properties of a PlayerEntity.
         * @exports IPlayerEntity
         * @interface IPlayerEntity
         * @property {string|null} [uuid] PlayerEntity uuid
         */
    
        /**
         * Constructs a new PlayerEntity.
         * @exports PlayerEntity
         * @classdesc Represents a PlayerEntity.
         * @implements IPlayerEntity
         * @constructor
         * @param {IPlayerEntity=} [properties] Properties to set
         */
        function PlayerEntity(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * PlayerEntity uuid.
         * @member {string} uuid
         * @memberof PlayerEntity
         * @instance
         */
        PlayerEntity.prototype.uuid = "";
    
        /**
         * Creates a new PlayerEntity instance using the specified properties.
         * @function create
         * @memberof PlayerEntity
         * @static
         * @param {IPlayerEntity=} [properties] Properties to set
         * @returns {PlayerEntity} PlayerEntity instance
         */
        PlayerEntity.create = function create(properties) {
            return new PlayerEntity(properties);
        };
    
        /**
         * Encodes the specified PlayerEntity message. Does not implicitly {@link PlayerEntity.verify|verify} messages.
         * @function encode
         * @memberof PlayerEntity
         * @static
         * @param {IPlayerEntity} message PlayerEntity message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerEntity.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uuid != null && Object.hasOwnProperty.call(message, "uuid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.uuid);
            return writer;
        };
    
        /**
         * Encodes the specified PlayerEntity message, length delimited. Does not implicitly {@link PlayerEntity.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PlayerEntity
         * @static
         * @param {IPlayerEntity} message PlayerEntity message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerEntity.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a PlayerEntity message from the specified reader or buffer.
         * @function decode
         * @memberof PlayerEntity
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PlayerEntity} PlayerEntity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerEntity.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PlayerEntity();
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
         * Decodes a PlayerEntity message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PlayerEntity
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PlayerEntity} PlayerEntity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerEntity.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a PlayerEntity message.
         * @function verify
         * @memberof PlayerEntity
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PlayerEntity.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uuid != null && message.hasOwnProperty("uuid"))
                if (!$util.isString(message.uuid))
                    return "uuid: string expected";
            return null;
        };
    
        /**
         * Creates a PlayerEntity message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PlayerEntity
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PlayerEntity} PlayerEntity
         */
        PlayerEntity.fromObject = function fromObject(object) {
            if (object instanceof $root.PlayerEntity)
                return object;
            var message = new $root.PlayerEntity();
            if (object.uuid != null)
                message.uuid = String(object.uuid);
            return message;
        };
    
        /**
         * Creates a plain object from a PlayerEntity message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PlayerEntity
         * @static
         * @param {PlayerEntity} message PlayerEntity
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PlayerEntity.toObject = function toObject(message, options) {
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
         * Converts this PlayerEntity to JSON.
         * @function toJSON
         * @memberof PlayerEntity
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PlayerEntity.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return PlayerEntity;
    })();
    
    $root.PlayerTeleport = (function() {
    
        /**
         * Properties of a PlayerTeleport.
         * @exports IPlayerTeleport
         * @interface IPlayerTeleport
         * @property {number|null} [x] PlayerTeleport x
         * @property {number|null} [y] PlayerTeleport y
         * @property {number|null} [z] PlayerTeleport z
         */
    
        /**
         * Constructs a new PlayerTeleport.
         * @exports PlayerTeleport
         * @classdesc Represents a PlayerTeleport.
         * @implements IPlayerTeleport
         * @constructor
         * @param {IPlayerTeleport=} [properties] Properties to set
         */
        function PlayerTeleport(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * PlayerTeleport x.
         * @member {number} x
         * @memberof PlayerTeleport
         * @instance
         */
        PlayerTeleport.prototype.x = 0;
    
        /**
         * PlayerTeleport y.
         * @member {number} y
         * @memberof PlayerTeleport
         * @instance
         */
        PlayerTeleport.prototype.y = 0;
    
        /**
         * PlayerTeleport z.
         * @member {number} z
         * @memberof PlayerTeleport
         * @instance
         */
        PlayerTeleport.prototype.z = 0;
    
        /**
         * Creates a new PlayerTeleport instance using the specified properties.
         * @function create
         * @memberof PlayerTeleport
         * @static
         * @param {IPlayerTeleport=} [properties] Properties to set
         * @returns {PlayerTeleport} PlayerTeleport instance
         */
        PlayerTeleport.create = function create(properties) {
            return new PlayerTeleport(properties);
        };
    
        /**
         * Encodes the specified PlayerTeleport message. Does not implicitly {@link PlayerTeleport.verify|verify} messages.
         * @function encode
         * @memberof PlayerTeleport
         * @static
         * @param {IPlayerTeleport} message PlayerTeleport message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerTeleport.encode = function encode(message, writer) {
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
         * Encodes the specified PlayerTeleport message, length delimited. Does not implicitly {@link PlayerTeleport.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PlayerTeleport
         * @static
         * @param {IPlayerTeleport} message PlayerTeleport message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerTeleport.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a PlayerTeleport message from the specified reader or buffer.
         * @function decode
         * @memberof PlayerTeleport
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PlayerTeleport} PlayerTeleport
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerTeleport.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PlayerTeleport();
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
         * Decodes a PlayerTeleport message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PlayerTeleport
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PlayerTeleport} PlayerTeleport
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerTeleport.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a PlayerTeleport message.
         * @function verify
         * @memberof PlayerTeleport
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PlayerTeleport.verify = function verify(message) {
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
         * Creates a PlayerTeleport message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PlayerTeleport
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PlayerTeleport} PlayerTeleport
         */
        PlayerTeleport.fromObject = function fromObject(object) {
            if (object instanceof $root.PlayerTeleport)
                return object;
            var message = new $root.PlayerTeleport();
            if (object.x != null)
                message.x = Number(object.x);
            if (object.y != null)
                message.y = Number(object.y);
            if (object.z != null)
                message.z = Number(object.z);
            return message;
        };
    
        /**
         * Creates a plain object from a PlayerTeleport message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PlayerTeleport
         * @static
         * @param {PlayerTeleport} message PlayerTeleport
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PlayerTeleport.toObject = function toObject(message, options) {
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
         * Converts this PlayerTeleport to JSON.
         * @function toJSON
         * @memberof PlayerTeleport
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PlayerTeleport.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return PlayerTeleport;
    })();
    
    $root.PlayerInventory = (function() {
    
        /**
         * Properties of a PlayerInventory.
         * @exports IPlayerInventory
         * @interface IPlayerInventory
         * @property {string|null} [inventory] PlayerInventory inventory
         * @property {string|null} [type] PlayerInventory type
         */
    
        /**
         * Constructs a new PlayerInventory.
         * @exports PlayerInventory
         * @classdesc Represents a PlayerInventory.
         * @implements IPlayerInventory
         * @constructor
         * @param {IPlayerInventory=} [properties] Properties to set
         */
        function PlayerInventory(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * PlayerInventory inventory.
         * @member {string} inventory
         * @memberof PlayerInventory
         * @instance
         */
        PlayerInventory.prototype.inventory = "";
    
        /**
         * PlayerInventory type.
         * @member {string} type
         * @memberof PlayerInventory
         * @instance
         */
        PlayerInventory.prototype.type = "";
    
        /**
         * Creates a new PlayerInventory instance using the specified properties.
         * @function create
         * @memberof PlayerInventory
         * @static
         * @param {IPlayerInventory=} [properties] Properties to set
         * @returns {PlayerInventory} PlayerInventory instance
         */
        PlayerInventory.create = function create(properties) {
            return new PlayerInventory(properties);
        };
    
        /**
         * Encodes the specified PlayerInventory message. Does not implicitly {@link PlayerInventory.verify|verify} messages.
         * @function encode
         * @memberof PlayerInventory
         * @static
         * @param {IPlayerInventory} message PlayerInventory message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerInventory.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.inventory != null && Object.hasOwnProperty.call(message, "inventory"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.inventory);
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.type);
            return writer;
        };
    
        /**
         * Encodes the specified PlayerInventory message, length delimited. Does not implicitly {@link PlayerInventory.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PlayerInventory
         * @static
         * @param {IPlayerInventory} message PlayerInventory message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerInventory.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a PlayerInventory message from the specified reader or buffer.
         * @function decode
         * @memberof PlayerInventory
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PlayerInventory} PlayerInventory
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerInventory.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PlayerInventory();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.inventory = reader.string();
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
         * Decodes a PlayerInventory message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PlayerInventory
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PlayerInventory} PlayerInventory
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerInventory.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a PlayerInventory message.
         * @function verify
         * @memberof PlayerInventory
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PlayerInventory.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.inventory != null && message.hasOwnProperty("inventory"))
                if (!$util.isString(message.inventory))
                    return "inventory: string expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isString(message.type))
                    return "type: string expected";
            return null;
        };
    
        /**
         * Creates a PlayerInventory message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PlayerInventory
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PlayerInventory} PlayerInventory
         */
        PlayerInventory.fromObject = function fromObject(object) {
            if (object instanceof $root.PlayerInventory)
                return object;
            var message = new $root.PlayerInventory();
            if (object.inventory != null)
                message.inventory = String(object.inventory);
            if (object.type != null)
                message.type = String(object.type);
            return message;
        };
    
        /**
         * Creates a plain object from a PlayerInventory message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PlayerInventory
         * @static
         * @param {PlayerInventory} message PlayerInventory
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PlayerInventory.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.inventory = "";
                object.type = "";
            }
            if (message.inventory != null && message.hasOwnProperty("inventory"))
                object.inventory = message.inventory;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            return object;
        };
    
        /**
         * Converts this PlayerInventory to JSON.
         * @function toJSON
         * @memberof PlayerInventory
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PlayerInventory.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return PlayerInventory;
    })();
    
    $root.PlayerSlotUpdate = (function() {
    
        /**
         * Properties of a PlayerSlotUpdate.
         * @exports IPlayerSlotUpdate
         * @interface IPlayerSlotUpdate
         * @property {number|null} [slot] PlayerSlotUpdate slot
         * @property {string|null} [type] PlayerSlotUpdate type
         * @property {string|null} [data] PlayerSlotUpdate data
         */
    
        /**
         * Constructs a new PlayerSlotUpdate.
         * @exports PlayerSlotUpdate
         * @classdesc Represents a PlayerSlotUpdate.
         * @implements IPlayerSlotUpdate
         * @constructor
         * @param {IPlayerSlotUpdate=} [properties] Properties to set
         */
        function PlayerSlotUpdate(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * PlayerSlotUpdate slot.
         * @member {number} slot
         * @memberof PlayerSlotUpdate
         * @instance
         */
        PlayerSlotUpdate.prototype.slot = 0;
    
        /**
         * PlayerSlotUpdate type.
         * @member {string} type
         * @memberof PlayerSlotUpdate
         * @instance
         */
        PlayerSlotUpdate.prototype.type = "";
    
        /**
         * PlayerSlotUpdate data.
         * @member {string} data
         * @memberof PlayerSlotUpdate
         * @instance
         */
        PlayerSlotUpdate.prototype.data = "";
    
        /**
         * Creates a new PlayerSlotUpdate instance using the specified properties.
         * @function create
         * @memberof PlayerSlotUpdate
         * @static
         * @param {IPlayerSlotUpdate=} [properties] Properties to set
         * @returns {PlayerSlotUpdate} PlayerSlotUpdate instance
         */
        PlayerSlotUpdate.create = function create(properties) {
            return new PlayerSlotUpdate(properties);
        };
    
        /**
         * Encodes the specified PlayerSlotUpdate message. Does not implicitly {@link PlayerSlotUpdate.verify|verify} messages.
         * @function encode
         * @memberof PlayerSlotUpdate
         * @static
         * @param {IPlayerSlotUpdate} message PlayerSlotUpdate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerSlotUpdate.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.slot != null && Object.hasOwnProperty.call(message, "slot"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.slot);
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.type);
            if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.data);
            return writer;
        };
    
        /**
         * Encodes the specified PlayerSlotUpdate message, length delimited. Does not implicitly {@link PlayerSlotUpdate.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PlayerSlotUpdate
         * @static
         * @param {IPlayerSlotUpdate} message PlayerSlotUpdate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerSlotUpdate.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a PlayerSlotUpdate message from the specified reader or buffer.
         * @function decode
         * @memberof PlayerSlotUpdate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PlayerSlotUpdate} PlayerSlotUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerSlotUpdate.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PlayerSlotUpdate();
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
                    message.data = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a PlayerSlotUpdate message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PlayerSlotUpdate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PlayerSlotUpdate} PlayerSlotUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerSlotUpdate.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a PlayerSlotUpdate message.
         * @function verify
         * @memberof PlayerSlotUpdate
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PlayerSlotUpdate.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.slot != null && message.hasOwnProperty("slot"))
                if (!$util.isInteger(message.slot))
                    return "slot: integer expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isString(message.type))
                    return "type: string expected";
            if (message.data != null && message.hasOwnProperty("data"))
                if (!$util.isString(message.data))
                    return "data: string expected";
            return null;
        };
    
        /**
         * Creates a PlayerSlotUpdate message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PlayerSlotUpdate
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PlayerSlotUpdate} PlayerSlotUpdate
         */
        PlayerSlotUpdate.fromObject = function fromObject(object) {
            if (object instanceof $root.PlayerSlotUpdate)
                return object;
            var message = new $root.PlayerSlotUpdate();
            if (object.slot != null)
                message.slot = object.slot | 0;
            if (object.type != null)
                message.type = String(object.type);
            if (object.data != null)
                message.data = String(object.data);
            return message;
        };
    
        /**
         * Creates a plain object from a PlayerSlotUpdate message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PlayerSlotUpdate
         * @static
         * @param {PlayerSlotUpdate} message PlayerSlotUpdate
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PlayerSlotUpdate.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.slot = 0;
                object.type = "";
                object.data = "";
            }
            if (message.slot != null && message.hasOwnProperty("slot"))
                object.slot = message.slot;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.data != null && message.hasOwnProperty("data"))
                object.data = message.data;
            return object;
        };
    
        /**
         * Converts this PlayerSlotUpdate to JSON.
         * @function toJSON
         * @memberof PlayerSlotUpdate
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PlayerSlotUpdate.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return PlayerSlotUpdate;
    })();
    
    $root.PlayerApplyImpulse = (function() {
    
        /**
         * Properties of a PlayerApplyImpulse.
         * @exports IPlayerApplyImpulse
         * @interface IPlayerApplyImpulse
         * @property {number|null} [x] PlayerApplyImpulse x
         * @property {number|null} [y] PlayerApplyImpulse y
         * @property {number|null} [z] PlayerApplyImpulse z
         */
    
        /**
         * Constructs a new PlayerApplyImpulse.
         * @exports PlayerApplyImpulse
         * @classdesc Represents a PlayerApplyImpulse.
         * @implements IPlayerApplyImpulse
         * @constructor
         * @param {IPlayerApplyImpulse=} [properties] Properties to set
         */
        function PlayerApplyImpulse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * PlayerApplyImpulse x.
         * @member {number} x
         * @memberof PlayerApplyImpulse
         * @instance
         */
        PlayerApplyImpulse.prototype.x = 0;
    
        /**
         * PlayerApplyImpulse y.
         * @member {number} y
         * @memberof PlayerApplyImpulse
         * @instance
         */
        PlayerApplyImpulse.prototype.y = 0;
    
        /**
         * PlayerApplyImpulse z.
         * @member {number} z
         * @memberof PlayerApplyImpulse
         * @instance
         */
        PlayerApplyImpulse.prototype.z = 0;
    
        /**
         * Creates a new PlayerApplyImpulse instance using the specified properties.
         * @function create
         * @memberof PlayerApplyImpulse
         * @static
         * @param {IPlayerApplyImpulse=} [properties] Properties to set
         * @returns {PlayerApplyImpulse} PlayerApplyImpulse instance
         */
        PlayerApplyImpulse.create = function create(properties) {
            return new PlayerApplyImpulse(properties);
        };
    
        /**
         * Encodes the specified PlayerApplyImpulse message. Does not implicitly {@link PlayerApplyImpulse.verify|verify} messages.
         * @function encode
         * @memberof PlayerApplyImpulse
         * @static
         * @param {IPlayerApplyImpulse} message PlayerApplyImpulse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerApplyImpulse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.x != null && Object.hasOwnProperty.call(message, "x"))
                writer.uint32(/* id 1, wireType 5 =*/13).float(message.x);
            if (message.y != null && Object.hasOwnProperty.call(message, "y"))
                writer.uint32(/* id 2, wireType 5 =*/21).float(message.y);
            if (message.z != null && Object.hasOwnProperty.call(message, "z"))
                writer.uint32(/* id 3, wireType 5 =*/29).float(message.z);
            return writer;
        };
    
        /**
         * Encodes the specified PlayerApplyImpulse message, length delimited. Does not implicitly {@link PlayerApplyImpulse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PlayerApplyImpulse
         * @static
         * @param {IPlayerApplyImpulse} message PlayerApplyImpulse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerApplyImpulse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a PlayerApplyImpulse message from the specified reader or buffer.
         * @function decode
         * @memberof PlayerApplyImpulse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PlayerApplyImpulse} PlayerApplyImpulse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerApplyImpulse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PlayerApplyImpulse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.x = reader.float();
                    break;
                case 2:
                    message.y = reader.float();
                    break;
                case 3:
                    message.z = reader.float();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a PlayerApplyImpulse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PlayerApplyImpulse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PlayerApplyImpulse} PlayerApplyImpulse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerApplyImpulse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a PlayerApplyImpulse message.
         * @function verify
         * @memberof PlayerApplyImpulse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PlayerApplyImpulse.verify = function verify(message) {
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
         * Creates a PlayerApplyImpulse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PlayerApplyImpulse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PlayerApplyImpulse} PlayerApplyImpulse
         */
        PlayerApplyImpulse.fromObject = function fromObject(object) {
            if (object instanceof $root.PlayerApplyImpulse)
                return object;
            var message = new $root.PlayerApplyImpulse();
            if (object.x != null)
                message.x = Number(object.x);
            if (object.y != null)
                message.y = Number(object.y);
            if (object.z != null)
                message.z = Number(object.z);
            return message;
        };
    
        /**
         * Creates a plain object from a PlayerApplyImpulse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PlayerApplyImpulse
         * @static
         * @param {PlayerApplyImpulse} message PlayerApplyImpulse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PlayerApplyImpulse.toObject = function toObject(message, options) {
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
         * Converts this PlayerApplyImpulse to JSON.
         * @function toJSON
         * @memberof PlayerApplyImpulse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PlayerApplyImpulse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return PlayerApplyImpulse;
    })();
    
    $root.PlayerUpdateMovement = (function() {
    
        /**
         * Properties of a PlayerUpdateMovement.
         * @exports IPlayerUpdateMovement
         * @interface IPlayerUpdateMovement
         * @property {string|null} [key] PlayerUpdateMovement key
         * @property {number|null} [value] PlayerUpdateMovement value
         */
    
        /**
         * Constructs a new PlayerUpdateMovement.
         * @exports PlayerUpdateMovement
         * @classdesc Represents a PlayerUpdateMovement.
         * @implements IPlayerUpdateMovement
         * @constructor
         * @param {IPlayerUpdateMovement=} [properties] Properties to set
         */
        function PlayerUpdateMovement(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * PlayerUpdateMovement key.
         * @member {string} key
         * @memberof PlayerUpdateMovement
         * @instance
         */
        PlayerUpdateMovement.prototype.key = "";
    
        /**
         * PlayerUpdateMovement value.
         * @member {number} value
         * @memberof PlayerUpdateMovement
         * @instance
         */
        PlayerUpdateMovement.prototype.value = 0;
    
        /**
         * Creates a new PlayerUpdateMovement instance using the specified properties.
         * @function create
         * @memberof PlayerUpdateMovement
         * @static
         * @param {IPlayerUpdateMovement=} [properties] Properties to set
         * @returns {PlayerUpdateMovement} PlayerUpdateMovement instance
         */
        PlayerUpdateMovement.create = function create(properties) {
            return new PlayerUpdateMovement(properties);
        };
    
        /**
         * Encodes the specified PlayerUpdateMovement message. Does not implicitly {@link PlayerUpdateMovement.verify|verify} messages.
         * @function encode
         * @memberof PlayerUpdateMovement
         * @static
         * @param {IPlayerUpdateMovement} message PlayerUpdateMovement message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerUpdateMovement.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.key != null && Object.hasOwnProperty.call(message, "key"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.key);
            if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                writer.uint32(/* id 2, wireType 1 =*/17).double(message.value);
            return writer;
        };
    
        /**
         * Encodes the specified PlayerUpdateMovement message, length delimited. Does not implicitly {@link PlayerUpdateMovement.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PlayerUpdateMovement
         * @static
         * @param {IPlayerUpdateMovement} message PlayerUpdateMovement message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerUpdateMovement.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a PlayerUpdateMovement message from the specified reader or buffer.
         * @function decode
         * @memberof PlayerUpdateMovement
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PlayerUpdateMovement} PlayerUpdateMovement
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerUpdateMovement.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PlayerUpdateMovement();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = reader.double();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a PlayerUpdateMovement message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PlayerUpdateMovement
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PlayerUpdateMovement} PlayerUpdateMovement
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerUpdateMovement.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a PlayerUpdateMovement message.
         * @function verify
         * @memberof PlayerUpdateMovement
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PlayerUpdateMovement.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.key != null && message.hasOwnProperty("key"))
                if (!$util.isString(message.key))
                    return "key: string expected";
            if (message.value != null && message.hasOwnProperty("value"))
                if (typeof message.value !== "number")
                    return "value: number expected";
            return null;
        };
    
        /**
         * Creates a PlayerUpdateMovement message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PlayerUpdateMovement
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PlayerUpdateMovement} PlayerUpdateMovement
         */
        PlayerUpdateMovement.fromObject = function fromObject(object) {
            if (object instanceof $root.PlayerUpdateMovement)
                return object;
            var message = new $root.PlayerUpdateMovement();
            if (object.key != null)
                message.key = String(object.key);
            if (object.value != null)
                message.value = Number(object.value);
            return message;
        };
    
        /**
         * Creates a plain object from a PlayerUpdateMovement message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PlayerUpdateMovement
         * @static
         * @param {PlayerUpdateMovement} message PlayerUpdateMovement
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PlayerUpdateMovement.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.key = "";
                object.value = 0;
            }
            if (message.key != null && message.hasOwnProperty("key"))
                object.key = message.key;
            if (message.value != null && message.hasOwnProperty("value"))
                object.value = options.json && !isFinite(message.value) ? String(message.value) : message.value;
            return object;
        };
    
        /**
         * Converts this PlayerUpdateMovement to JSON.
         * @function toJSON
         * @memberof PlayerUpdateMovement
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PlayerUpdateMovement.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return PlayerUpdateMovement;
    })();
    
    $root.PlayerUpdatePhysics = (function() {
    
        /**
         * Properties of a PlayerUpdatePhysics.
         * @exports IPlayerUpdatePhysics
         * @interface IPlayerUpdatePhysics
         * @property {string|null} [key] PlayerUpdatePhysics key
         * @property {number|null} [value] PlayerUpdatePhysics value
         */
    
        /**
         * Constructs a new PlayerUpdatePhysics.
         * @exports PlayerUpdatePhysics
         * @classdesc Represents a PlayerUpdatePhysics.
         * @implements IPlayerUpdatePhysics
         * @constructor
         * @param {IPlayerUpdatePhysics=} [properties] Properties to set
         */
        function PlayerUpdatePhysics(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * PlayerUpdatePhysics key.
         * @member {string} key
         * @memberof PlayerUpdatePhysics
         * @instance
         */
        PlayerUpdatePhysics.prototype.key = "";
    
        /**
         * PlayerUpdatePhysics value.
         * @member {number} value
         * @memberof PlayerUpdatePhysics
         * @instance
         */
        PlayerUpdatePhysics.prototype.value = 0;
    
        /**
         * Creates a new PlayerUpdatePhysics instance using the specified properties.
         * @function create
         * @memberof PlayerUpdatePhysics
         * @static
         * @param {IPlayerUpdatePhysics=} [properties] Properties to set
         * @returns {PlayerUpdatePhysics} PlayerUpdatePhysics instance
         */
        PlayerUpdatePhysics.create = function create(properties) {
            return new PlayerUpdatePhysics(properties);
        };
    
        /**
         * Encodes the specified PlayerUpdatePhysics message. Does not implicitly {@link PlayerUpdatePhysics.verify|verify} messages.
         * @function encode
         * @memberof PlayerUpdatePhysics
         * @static
         * @param {IPlayerUpdatePhysics} message PlayerUpdatePhysics message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerUpdatePhysics.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.key != null && Object.hasOwnProperty.call(message, "key"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.key);
            if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                writer.uint32(/* id 2, wireType 1 =*/17).double(message.value);
            return writer;
        };
    
        /**
         * Encodes the specified PlayerUpdatePhysics message, length delimited. Does not implicitly {@link PlayerUpdatePhysics.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PlayerUpdatePhysics
         * @static
         * @param {IPlayerUpdatePhysics} message PlayerUpdatePhysics message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerUpdatePhysics.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a PlayerUpdatePhysics message from the specified reader or buffer.
         * @function decode
         * @memberof PlayerUpdatePhysics
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PlayerUpdatePhysics} PlayerUpdatePhysics
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerUpdatePhysics.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PlayerUpdatePhysics();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = reader.double();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a PlayerUpdatePhysics message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PlayerUpdatePhysics
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PlayerUpdatePhysics} PlayerUpdatePhysics
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerUpdatePhysics.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a PlayerUpdatePhysics message.
         * @function verify
         * @memberof PlayerUpdatePhysics
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PlayerUpdatePhysics.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.key != null && message.hasOwnProperty("key"))
                if (!$util.isString(message.key))
                    return "key: string expected";
            if (message.value != null && message.hasOwnProperty("value"))
                if (typeof message.value !== "number")
                    return "value: number expected";
            return null;
        };
    
        /**
         * Creates a PlayerUpdatePhysics message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PlayerUpdatePhysics
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PlayerUpdatePhysics} PlayerUpdatePhysics
         */
        PlayerUpdatePhysics.fromObject = function fromObject(object) {
            if (object instanceof $root.PlayerUpdatePhysics)
                return object;
            var message = new $root.PlayerUpdatePhysics();
            if (object.key != null)
                message.key = String(object.key);
            if (object.value != null)
                message.value = Number(object.value);
            return message;
        };
    
        /**
         * Creates a plain object from a PlayerUpdatePhysics message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PlayerUpdatePhysics
         * @static
         * @param {PlayerUpdatePhysics} message PlayerUpdatePhysics
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PlayerUpdatePhysics.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.key = "";
                object.value = 0;
            }
            if (message.key != null && message.hasOwnProperty("key"))
                object.key = message.key;
            if (message.value != null && message.hasOwnProperty("value"))
                object.value = options.json && !isFinite(message.value) ? String(message.value) : message.value;
            return object;
        };
    
        /**
         * Converts this PlayerUpdatePhysics to JSON.
         * @function toJSON
         * @memberof PlayerUpdatePhysics
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PlayerUpdatePhysics.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return PlayerUpdatePhysics;
    })();
    
    $root.SoundPlay = (function() {
    
        /**
         * Properties of a SoundPlay.
         * @exports ISoundPlay
         * @interface ISoundPlay
         * @property {string|null} [sound] SoundPlay sound
         * @property {number|null} [volume] SoundPlay volume
         * @property {number|null} [x] SoundPlay x
         * @property {number|null} [y] SoundPlay y
         * @property {number|null} [z] SoundPlay z
         */
    
        /**
         * Constructs a new SoundPlay.
         * @exports SoundPlay
         * @classdesc Represents a SoundPlay.
         * @implements ISoundPlay
         * @constructor
         * @param {ISoundPlay=} [properties] Properties to set
         */
        function SoundPlay(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * SoundPlay sound.
         * @member {string} sound
         * @memberof SoundPlay
         * @instance
         */
        SoundPlay.prototype.sound = "";
    
        /**
         * SoundPlay volume.
         * @member {number} volume
         * @memberof SoundPlay
         * @instance
         */
        SoundPlay.prototype.volume = 0;
    
        /**
         * SoundPlay x.
         * @member {number} x
         * @memberof SoundPlay
         * @instance
         */
        SoundPlay.prototype.x = 0;
    
        /**
         * SoundPlay y.
         * @member {number} y
         * @memberof SoundPlay
         * @instance
         */
        SoundPlay.prototype.y = 0;
    
        /**
         * SoundPlay z.
         * @member {number} z
         * @memberof SoundPlay
         * @instance
         */
        SoundPlay.prototype.z = 0;
    
        /**
         * Creates a new SoundPlay instance using the specified properties.
         * @function create
         * @memberof SoundPlay
         * @static
         * @param {ISoundPlay=} [properties] Properties to set
         * @returns {SoundPlay} SoundPlay instance
         */
        SoundPlay.create = function create(properties) {
            return new SoundPlay(properties);
        };
    
        /**
         * Encodes the specified SoundPlay message. Does not implicitly {@link SoundPlay.verify|verify} messages.
         * @function encode
         * @memberof SoundPlay
         * @static
         * @param {ISoundPlay} message SoundPlay message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SoundPlay.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.sound != null && Object.hasOwnProperty.call(message, "sound"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.sound);
            if (message.volume != null && Object.hasOwnProperty.call(message, "volume"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.volume);
            if (message.x != null && Object.hasOwnProperty.call(message, "x"))
                writer.uint32(/* id 3, wireType 1 =*/25).double(message.x);
            if (message.y != null && Object.hasOwnProperty.call(message, "y"))
                writer.uint32(/* id 4, wireType 1 =*/33).double(message.y);
            if (message.z != null && Object.hasOwnProperty.call(message, "z"))
                writer.uint32(/* id 5, wireType 1 =*/41).double(message.z);
            return writer;
        };
    
        /**
         * Encodes the specified SoundPlay message, length delimited. Does not implicitly {@link SoundPlay.verify|verify} messages.
         * @function encodeDelimited
         * @memberof SoundPlay
         * @static
         * @param {ISoundPlay} message SoundPlay message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SoundPlay.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a SoundPlay message from the specified reader or buffer.
         * @function decode
         * @memberof SoundPlay
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {SoundPlay} SoundPlay
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SoundPlay.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SoundPlay();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.sound = reader.string();
                    break;
                case 2:
                    message.volume = reader.int32();
                    break;
                case 3:
                    message.x = reader.double();
                    break;
                case 4:
                    message.y = reader.double();
                    break;
                case 5:
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
         * Decodes a SoundPlay message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof SoundPlay
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {SoundPlay} SoundPlay
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SoundPlay.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a SoundPlay message.
         * @function verify
         * @memberof SoundPlay
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SoundPlay.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.sound != null && message.hasOwnProperty("sound"))
                if (!$util.isString(message.sound))
                    return "sound: string expected";
            if (message.volume != null && message.hasOwnProperty("volume"))
                if (!$util.isInteger(message.volume))
                    return "volume: integer expected";
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
         * Creates a SoundPlay message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof SoundPlay
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {SoundPlay} SoundPlay
         */
        SoundPlay.fromObject = function fromObject(object) {
            if (object instanceof $root.SoundPlay)
                return object;
            var message = new $root.SoundPlay();
            if (object.sound != null)
                message.sound = String(object.sound);
            if (object.volume != null)
                message.volume = object.volume | 0;
            if (object.x != null)
                message.x = Number(object.x);
            if (object.y != null)
                message.y = Number(object.y);
            if (object.z != null)
                message.z = Number(object.z);
            return message;
        };
    
        /**
         * Creates a plain object from a SoundPlay message. Also converts values to other types if specified.
         * @function toObject
         * @memberof SoundPlay
         * @static
         * @param {SoundPlay} message SoundPlay
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SoundPlay.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.sound = "";
                object.volume = 0;
                object.x = 0;
                object.y = 0;
                object.z = 0;
            }
            if (message.sound != null && message.hasOwnProperty("sound"))
                object.sound = message.sound;
            if (message.volume != null && message.hasOwnProperty("volume"))
                object.volume = message.volume;
            if (message.x != null && message.hasOwnProperty("x"))
                object.x = options.json && !isFinite(message.x) ? String(message.x) : message.x;
            if (message.y != null && message.hasOwnProperty("y"))
                object.y = options.json && !isFinite(message.y) ? String(message.y) : message.y;
            if (message.z != null && message.hasOwnProperty("z"))
                object.z = options.json && !isFinite(message.z) ? String(message.z) : message.z;
            return object;
        };
    
        /**
         * Converts this SoundPlay to JSON.
         * @function toJSON
         * @memberof SoundPlay
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SoundPlay.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return SoundPlay;
    })();
    
    $root.ChatMessage = (function() {
    
        /**
         * Properties of a ChatMessage.
         * @exports IChatMessage
         * @interface IChatMessage
         * @property {Object.<string,ChatMessage.IChatComponent>|null} [message] ChatMessage message
         * @property {number|Long|null} [time] ChatMessage time
         */
    
        /**
         * Constructs a new ChatMessage.
         * @exports ChatMessage
         * @classdesc Represents a ChatMessage.
         * @implements IChatMessage
         * @constructor
         * @param {IChatMessage=} [properties] Properties to set
         */
        function ChatMessage(properties) {
            this.message = {};
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * ChatMessage message.
         * @member {Object.<string,ChatMessage.IChatComponent>} message
         * @memberof ChatMessage
         * @instance
         */
        ChatMessage.prototype.message = $util.emptyObject;
    
        /**
         * ChatMessage time.
         * @member {number|Long} time
         * @memberof ChatMessage
         * @instance
         */
        ChatMessage.prototype.time = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * Creates a new ChatMessage instance using the specified properties.
         * @function create
         * @memberof ChatMessage
         * @static
         * @param {IChatMessage=} [properties] Properties to set
         * @returns {ChatMessage} ChatMessage instance
         */
        ChatMessage.create = function create(properties) {
            return new ChatMessage(properties);
        };
    
        /**
         * Encodes the specified ChatMessage message. Does not implicitly {@link ChatMessage.verify|verify} messages.
         * @function encode
         * @memberof ChatMessage
         * @static
         * @param {IChatMessage} message ChatMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChatMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                for (var keys = Object.keys(message.message), i = 0; i < keys.length; ++i) {
                    writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 0 =*/8).uint32(keys[i]);
                    $root.ChatMessage.ChatComponent.encode(message.message[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                }
            if (message.time != null && Object.hasOwnProperty.call(message, "time"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.time);
            return writer;
        };
    
        /**
         * Encodes the specified ChatMessage message, length delimited. Does not implicitly {@link ChatMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ChatMessage
         * @static
         * @param {IChatMessage} message ChatMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChatMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a ChatMessage message from the specified reader or buffer.
         * @function decode
         * @memberof ChatMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ChatMessage} ChatMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChatMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ChatMessage(), key, value;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (message.message === $util.emptyObject)
                        message.message = {};
                    var end2 = reader.uint32() + reader.pos;
                    key = 0;
                    value = null;
                    while (reader.pos < end2) {
                        var tag2 = reader.uint32();
                        switch (tag2 >>> 3) {
                        case 1:
                            key = reader.uint32();
                            break;
                        case 2:
                            value = $root.ChatMessage.ChatComponent.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag2 & 7);
                            break;
                        }
                    }
                    message.message[key] = value;
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
         * Decodes a ChatMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ChatMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ChatMessage} ChatMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChatMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a ChatMessage message.
         * @function verify
         * @memberof ChatMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ChatMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.message != null && message.hasOwnProperty("message")) {
                if (!$util.isObject(message.message))
                    return "message: object expected";
                var key = Object.keys(message.message);
                for (var i = 0; i < key.length; ++i) {
                    if (!$util.key32Re.test(key[i]))
                        return "message: integer key{k:uint32} expected";
                    {
                        var error = $root.ChatMessage.ChatComponent.verify(message.message[key[i]]);
                        if (error)
                            return "message." + error;
                    }
                }
            }
            if (message.time != null && message.hasOwnProperty("time"))
                if (!$util.isInteger(message.time) && !(message.time && $util.isInteger(message.time.low) && $util.isInteger(message.time.high)))
                    return "time: integer|Long expected";
            return null;
        };
    
        /**
         * Creates a ChatMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ChatMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ChatMessage} ChatMessage
         */
        ChatMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.ChatMessage)
                return object;
            var message = new $root.ChatMessage();
            if (object.message) {
                if (typeof object.message !== "object")
                    throw TypeError(".ChatMessage.message: object expected");
                message.message = {};
                for (var keys = Object.keys(object.message), i = 0; i < keys.length; ++i) {
                    if (typeof object.message[keys[i]] !== "object")
                        throw TypeError(".ChatMessage.message: object expected");
                    message.message[keys[i]] = $root.ChatMessage.ChatComponent.fromObject(object.message[keys[i]]);
                }
            }
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
         * Creates a plain object from a ChatMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ChatMessage
         * @static
         * @param {ChatMessage} message ChatMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ChatMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.objects || options.defaults)
                object.message = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.time = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.time = options.longs === String ? "0" : 0;
            var keys2;
            if (message.message && (keys2 = Object.keys(message.message)).length) {
                object.message = {};
                for (var j = 0; j < keys2.length; ++j)
                    object.message[keys2[j]] = $root.ChatMessage.ChatComponent.toObject(message.message[keys2[j]], options);
            }
            if (message.time != null && message.hasOwnProperty("time"))
                if (typeof message.time === "number")
                    object.time = options.longs === String ? String(message.time) : message.time;
                else
                    object.time = options.longs === String ? $util.Long.prototype.toString.call(message.time) : options.longs === Number ? new $util.LongBits(message.time.low >>> 0, message.time.high >>> 0).toNumber(true) : message.time;
            return object;
        };
    
        /**
         * Converts this ChatMessage to JSON.
         * @function toJSON
         * @memberof ChatMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ChatMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        ChatMessage.ChatComponent = (function() {
    
            /**
             * Properties of a ChatComponent.
             * @memberof ChatMessage
             * @interface IChatComponent
             * @property {string|null} [text] ChatComponent text
             * @property {string|null} [font] ChatComponent font
             * @property {string|null} [color] ChatComponent color
             * @property {boolean|null} [linethrough] ChatComponent linethrough
             * @property {boolean|null} [underline] ChatComponent underline
             */
    
            /**
             * Constructs a new ChatComponent.
             * @memberof ChatMessage
             * @classdesc Represents a ChatComponent.
             * @implements IChatComponent
             * @constructor
             * @param {ChatMessage.IChatComponent=} [properties] Properties to set
             */
            function ChatComponent(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * ChatComponent text.
             * @member {string} text
             * @memberof ChatMessage.ChatComponent
             * @instance
             */
            ChatComponent.prototype.text = "";
    
            /**
             * ChatComponent font.
             * @member {string} font
             * @memberof ChatMessage.ChatComponent
             * @instance
             */
            ChatComponent.prototype.font = "";
    
            /**
             * ChatComponent color.
             * @member {string} color
             * @memberof ChatMessage.ChatComponent
             * @instance
             */
            ChatComponent.prototype.color = "";
    
            /**
             * ChatComponent linethrough.
             * @member {boolean} linethrough
             * @memberof ChatMessage.ChatComponent
             * @instance
             */
            ChatComponent.prototype.linethrough = false;
    
            /**
             * ChatComponent underline.
             * @member {boolean} underline
             * @memberof ChatMessage.ChatComponent
             * @instance
             */
            ChatComponent.prototype.underline = false;
    
            /**
             * Creates a new ChatComponent instance using the specified properties.
             * @function create
             * @memberof ChatMessage.ChatComponent
             * @static
             * @param {ChatMessage.IChatComponent=} [properties] Properties to set
             * @returns {ChatMessage.ChatComponent} ChatComponent instance
             */
            ChatComponent.create = function create(properties) {
                return new ChatComponent(properties);
            };
    
            /**
             * Encodes the specified ChatComponent message. Does not implicitly {@link ChatMessage.ChatComponent.verify|verify} messages.
             * @function encode
             * @memberof ChatMessage.ChatComponent
             * @static
             * @param {ChatMessage.IChatComponent} message ChatComponent message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ChatComponent.encode = function encode(message, writer) {
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
             * Encodes the specified ChatComponent message, length delimited. Does not implicitly {@link ChatMessage.ChatComponent.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ChatMessage.ChatComponent
             * @static
             * @param {ChatMessage.IChatComponent} message ChatComponent message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ChatComponent.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a ChatComponent message from the specified reader or buffer.
             * @function decode
             * @memberof ChatMessage.ChatComponent
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ChatMessage.ChatComponent} ChatComponent
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ChatComponent.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ChatMessage.ChatComponent();
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
             * Decodes a ChatComponent message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ChatMessage.ChatComponent
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ChatMessage.ChatComponent} ChatComponent
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ChatComponent.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a ChatComponent message.
             * @function verify
             * @memberof ChatMessage.ChatComponent
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ChatComponent.verify = function verify(message) {
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
             * Creates a ChatComponent message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ChatMessage.ChatComponent
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ChatMessage.ChatComponent} ChatComponent
             */
            ChatComponent.fromObject = function fromObject(object) {
                if (object instanceof $root.ChatMessage.ChatComponent)
                    return object;
                var message = new $root.ChatMessage.ChatComponent();
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
             * Creates a plain object from a ChatComponent message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ChatMessage.ChatComponent
             * @static
             * @param {ChatMessage.ChatComponent} message ChatComponent
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ChatComponent.toObject = function toObject(message, options) {
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
             * Converts this ChatComponent to JSON.
             * @function toJSON
             * @memberof ChatMessage.ChatComponent
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ChatComponent.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return ChatComponent;
        })();
    
        return ChatMessage;
    })();
    
    $root.TabUpdate = (function() {
    
        /**
         * Properties of a TabUpdate.
         * @exports ITabUpdate
         * @interface ITabUpdate
         * @property {Object.<string,TabUpdate.IChatComponent>|null} [message] TabUpdate message
         * @property {number|Long|null} [time] TabUpdate time
         */
    
        /**
         * Constructs a new TabUpdate.
         * @exports TabUpdate
         * @classdesc Represents a TabUpdate.
         * @implements ITabUpdate
         * @constructor
         * @param {ITabUpdate=} [properties] Properties to set
         */
        function TabUpdate(properties) {
            this.message = {};
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * TabUpdate message.
         * @member {Object.<string,TabUpdate.IChatComponent>} message
         * @memberof TabUpdate
         * @instance
         */
        TabUpdate.prototype.message = $util.emptyObject;
    
        /**
         * TabUpdate time.
         * @member {number|Long} time
         * @memberof TabUpdate
         * @instance
         */
        TabUpdate.prototype.time = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * Creates a new TabUpdate instance using the specified properties.
         * @function create
         * @memberof TabUpdate
         * @static
         * @param {ITabUpdate=} [properties] Properties to set
         * @returns {TabUpdate} TabUpdate instance
         */
        TabUpdate.create = function create(properties) {
            return new TabUpdate(properties);
        };
    
        /**
         * Encodes the specified TabUpdate message. Does not implicitly {@link TabUpdate.verify|verify} messages.
         * @function encode
         * @memberof TabUpdate
         * @static
         * @param {ITabUpdate} message TabUpdate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TabUpdate.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                for (var keys = Object.keys(message.message), i = 0; i < keys.length; ++i) {
                    writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 0 =*/8).uint32(keys[i]);
                    $root.TabUpdate.ChatComponent.encode(message.message[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                }
            if (message.time != null && Object.hasOwnProperty.call(message, "time"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.time);
            return writer;
        };
    
        /**
         * Encodes the specified TabUpdate message, length delimited. Does not implicitly {@link TabUpdate.verify|verify} messages.
         * @function encodeDelimited
         * @memberof TabUpdate
         * @static
         * @param {ITabUpdate} message TabUpdate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TabUpdate.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a TabUpdate message from the specified reader or buffer.
         * @function decode
         * @memberof TabUpdate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {TabUpdate} TabUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TabUpdate.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TabUpdate(), key, value;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (message.message === $util.emptyObject)
                        message.message = {};
                    var end2 = reader.uint32() + reader.pos;
                    key = 0;
                    value = null;
                    while (reader.pos < end2) {
                        var tag2 = reader.uint32();
                        switch (tag2 >>> 3) {
                        case 1:
                            key = reader.uint32();
                            break;
                        case 2:
                            value = $root.TabUpdate.ChatComponent.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag2 & 7);
                            break;
                        }
                    }
                    message.message[key] = value;
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
         * Decodes a TabUpdate message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof TabUpdate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {TabUpdate} TabUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TabUpdate.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a TabUpdate message.
         * @function verify
         * @memberof TabUpdate
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TabUpdate.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.message != null && message.hasOwnProperty("message")) {
                if (!$util.isObject(message.message))
                    return "message: object expected";
                var key = Object.keys(message.message);
                for (var i = 0; i < key.length; ++i) {
                    if (!$util.key32Re.test(key[i]))
                        return "message: integer key{k:uint32} expected";
                    {
                        var error = $root.TabUpdate.ChatComponent.verify(message.message[key[i]]);
                        if (error)
                            return "message." + error;
                    }
                }
            }
            if (message.time != null && message.hasOwnProperty("time"))
                if (!$util.isInteger(message.time) && !(message.time && $util.isInteger(message.time.low) && $util.isInteger(message.time.high)))
                    return "time: integer|Long expected";
            return null;
        };
    
        /**
         * Creates a TabUpdate message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof TabUpdate
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {TabUpdate} TabUpdate
         */
        TabUpdate.fromObject = function fromObject(object) {
            if (object instanceof $root.TabUpdate)
                return object;
            var message = new $root.TabUpdate();
            if (object.message) {
                if (typeof object.message !== "object")
                    throw TypeError(".TabUpdate.message: object expected");
                message.message = {};
                for (var keys = Object.keys(object.message), i = 0; i < keys.length; ++i) {
                    if (typeof object.message[keys[i]] !== "object")
                        throw TypeError(".TabUpdate.message: object expected");
                    message.message[keys[i]] = $root.TabUpdate.ChatComponent.fromObject(object.message[keys[i]]);
                }
            }
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
         * Creates a plain object from a TabUpdate message. Also converts values to other types if specified.
         * @function toObject
         * @memberof TabUpdate
         * @static
         * @param {TabUpdate} message TabUpdate
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TabUpdate.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.objects || options.defaults)
                object.message = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.time = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.time = options.longs === String ? "0" : 0;
            var keys2;
            if (message.message && (keys2 = Object.keys(message.message)).length) {
                object.message = {};
                for (var j = 0; j < keys2.length; ++j)
                    object.message[keys2[j]] = $root.TabUpdate.ChatComponent.toObject(message.message[keys2[j]], options);
            }
            if (message.time != null && message.hasOwnProperty("time"))
                if (typeof message.time === "number")
                    object.time = options.longs === String ? String(message.time) : message.time;
                else
                    object.time = options.longs === String ? $util.Long.prototype.toString.call(message.time) : options.longs === Number ? new $util.LongBits(message.time.low >>> 0, message.time.high >>> 0).toNumber(true) : message.time;
            return object;
        };
    
        /**
         * Converts this TabUpdate to JSON.
         * @function toJSON
         * @memberof TabUpdate
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TabUpdate.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        TabUpdate.ChatComponent = (function() {
    
            /**
             * Properties of a ChatComponent.
             * @memberof TabUpdate
             * @interface IChatComponent
             * @property {string|null} [text] ChatComponent text
             * @property {string|null} [font] ChatComponent font
             * @property {string|null} [color] ChatComponent color
             * @property {boolean|null} [linethrough] ChatComponent linethrough
             * @property {boolean|null} [underline] ChatComponent underline
             */
    
            /**
             * Constructs a new ChatComponent.
             * @memberof TabUpdate
             * @classdesc Represents a ChatComponent.
             * @implements IChatComponent
             * @constructor
             * @param {TabUpdate.IChatComponent=} [properties] Properties to set
             */
            function ChatComponent(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * ChatComponent text.
             * @member {string} text
             * @memberof TabUpdate.ChatComponent
             * @instance
             */
            ChatComponent.prototype.text = "";
    
            /**
             * ChatComponent font.
             * @member {string} font
             * @memberof TabUpdate.ChatComponent
             * @instance
             */
            ChatComponent.prototype.font = "";
    
            /**
             * ChatComponent color.
             * @member {string} color
             * @memberof TabUpdate.ChatComponent
             * @instance
             */
            ChatComponent.prototype.color = "";
    
            /**
             * ChatComponent linethrough.
             * @member {boolean} linethrough
             * @memberof TabUpdate.ChatComponent
             * @instance
             */
            ChatComponent.prototype.linethrough = false;
    
            /**
             * ChatComponent underline.
             * @member {boolean} underline
             * @memberof TabUpdate.ChatComponent
             * @instance
             */
            ChatComponent.prototype.underline = false;
    
            /**
             * Creates a new ChatComponent instance using the specified properties.
             * @function create
             * @memberof TabUpdate.ChatComponent
             * @static
             * @param {TabUpdate.IChatComponent=} [properties] Properties to set
             * @returns {TabUpdate.ChatComponent} ChatComponent instance
             */
            ChatComponent.create = function create(properties) {
                return new ChatComponent(properties);
            };
    
            /**
             * Encodes the specified ChatComponent message. Does not implicitly {@link TabUpdate.ChatComponent.verify|verify} messages.
             * @function encode
             * @memberof TabUpdate.ChatComponent
             * @static
             * @param {TabUpdate.IChatComponent} message ChatComponent message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ChatComponent.encode = function encode(message, writer) {
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
             * Encodes the specified ChatComponent message, length delimited. Does not implicitly {@link TabUpdate.ChatComponent.verify|verify} messages.
             * @function encodeDelimited
             * @memberof TabUpdate.ChatComponent
             * @static
             * @param {TabUpdate.IChatComponent} message ChatComponent message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ChatComponent.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a ChatComponent message from the specified reader or buffer.
             * @function decode
             * @memberof TabUpdate.ChatComponent
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {TabUpdate.ChatComponent} ChatComponent
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ChatComponent.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TabUpdate.ChatComponent();
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
             * Decodes a ChatComponent message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof TabUpdate.ChatComponent
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {TabUpdate.ChatComponent} ChatComponent
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ChatComponent.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a ChatComponent message.
             * @function verify
             * @memberof TabUpdate.ChatComponent
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ChatComponent.verify = function verify(message) {
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
             * Creates a ChatComponent message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof TabUpdate.ChatComponent
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {TabUpdate.ChatComponent} ChatComponent
             */
            ChatComponent.fromObject = function fromObject(object) {
                if (object instanceof $root.TabUpdate.ChatComponent)
                    return object;
                var message = new $root.TabUpdate.ChatComponent();
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
             * Creates a plain object from a ChatComponent message. Also converts values to other types if specified.
             * @function toObject
             * @memberof TabUpdate.ChatComponent
             * @static
             * @param {TabUpdate.ChatComponent} message ChatComponent
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ChatComponent.toObject = function toObject(message, options) {
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
             * Converts this ChatComponent to JSON.
             * @function toJSON
             * @memberof TabUpdate.ChatComponent
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ChatComponent.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return ChatComponent;
        })();
    
        return TabUpdate;
    })();
    
    $root.EntityCreate = (function() {
    
        /**
         * Properties of an EntityCreate.
         * @exports IEntityCreate
         * @interface IEntityCreate
         * @property {string|null} [uuid] EntityCreate uuid
         * @property {string|null} [data] EntityCreate data
         */
    
        /**
         * Constructs a new EntityCreate.
         * @exports EntityCreate
         * @classdesc Represents an EntityCreate.
         * @implements IEntityCreate
         * @constructor
         * @param {IEntityCreate=} [properties] Properties to set
         */
        function EntityCreate(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * EntityCreate uuid.
         * @member {string} uuid
         * @memberof EntityCreate
         * @instance
         */
        EntityCreate.prototype.uuid = "";
    
        /**
         * EntityCreate data.
         * @member {string} data
         * @memberof EntityCreate
         * @instance
         */
        EntityCreate.prototype.data = "";
    
        /**
         * Creates a new EntityCreate instance using the specified properties.
         * @function create
         * @memberof EntityCreate
         * @static
         * @param {IEntityCreate=} [properties] Properties to set
         * @returns {EntityCreate} EntityCreate instance
         */
        EntityCreate.create = function create(properties) {
            return new EntityCreate(properties);
        };
    
        /**
         * Encodes the specified EntityCreate message. Does not implicitly {@link EntityCreate.verify|verify} messages.
         * @function encode
         * @memberof EntityCreate
         * @static
         * @param {IEntityCreate} message EntityCreate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EntityCreate.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uuid != null && Object.hasOwnProperty.call(message, "uuid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.uuid);
            if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.data);
            return writer;
        };
    
        /**
         * Encodes the specified EntityCreate message, length delimited. Does not implicitly {@link EntityCreate.verify|verify} messages.
         * @function encodeDelimited
         * @memberof EntityCreate
         * @static
         * @param {IEntityCreate} message EntityCreate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EntityCreate.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes an EntityCreate message from the specified reader or buffer.
         * @function decode
         * @memberof EntityCreate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {EntityCreate} EntityCreate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EntityCreate.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.EntityCreate();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uuid = reader.string();
                    break;
                case 2:
                    message.data = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes an EntityCreate message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof EntityCreate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {EntityCreate} EntityCreate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EntityCreate.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies an EntityCreate message.
         * @function verify
         * @memberof EntityCreate
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EntityCreate.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uuid != null && message.hasOwnProperty("uuid"))
                if (!$util.isString(message.uuid))
                    return "uuid: string expected";
            if (message.data != null && message.hasOwnProperty("data"))
                if (!$util.isString(message.data))
                    return "data: string expected";
            return null;
        };
    
        /**
         * Creates an EntityCreate message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof EntityCreate
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {EntityCreate} EntityCreate
         */
        EntityCreate.fromObject = function fromObject(object) {
            if (object instanceof $root.EntityCreate)
                return object;
            var message = new $root.EntityCreate();
            if (object.uuid != null)
                message.uuid = String(object.uuid);
            if (object.data != null)
                message.data = String(object.data);
            return message;
        };
    
        /**
         * Creates a plain object from an EntityCreate message. Also converts values to other types if specified.
         * @function toObject
         * @memberof EntityCreate
         * @static
         * @param {EntityCreate} message EntityCreate
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EntityCreate.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.uuid = "";
                object.data = "";
            }
            if (message.uuid != null && message.hasOwnProperty("uuid"))
                object.uuid = message.uuid;
            if (message.data != null && message.hasOwnProperty("data"))
                object.data = message.data;
            return object;
        };
    
        /**
         * Converts this EntityCreate to JSON.
         * @function toJSON
         * @memberof EntityCreate
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EntityCreate.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return EntityCreate;
    })();
    
    $root.EntityRemove = (function() {
    
        /**
         * Properties of an EntityRemove.
         * @exports IEntityRemove
         * @interface IEntityRemove
         * @property {string|null} [uuid] EntityRemove uuid
         */
    
        /**
         * Constructs a new EntityRemove.
         * @exports EntityRemove
         * @classdesc Represents an EntityRemove.
         * @implements IEntityRemove
         * @constructor
         * @param {IEntityRemove=} [properties] Properties to set
         */
        function EntityRemove(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * EntityRemove uuid.
         * @member {string} uuid
         * @memberof EntityRemove
         * @instance
         */
        EntityRemove.prototype.uuid = "";
    
        /**
         * Creates a new EntityRemove instance using the specified properties.
         * @function create
         * @memberof EntityRemove
         * @static
         * @param {IEntityRemove=} [properties] Properties to set
         * @returns {EntityRemove} EntityRemove instance
         */
        EntityRemove.create = function create(properties) {
            return new EntityRemove(properties);
        };
    
        /**
         * Encodes the specified EntityRemove message. Does not implicitly {@link EntityRemove.verify|verify} messages.
         * @function encode
         * @memberof EntityRemove
         * @static
         * @param {IEntityRemove} message EntityRemove message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EntityRemove.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uuid != null && Object.hasOwnProperty.call(message, "uuid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.uuid);
            return writer;
        };
    
        /**
         * Encodes the specified EntityRemove message, length delimited. Does not implicitly {@link EntityRemove.verify|verify} messages.
         * @function encodeDelimited
         * @memberof EntityRemove
         * @static
         * @param {IEntityRemove} message EntityRemove message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EntityRemove.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes an EntityRemove message from the specified reader or buffer.
         * @function decode
         * @memberof EntityRemove
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {EntityRemove} EntityRemove
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EntityRemove.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.EntityRemove();
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
         * Decodes an EntityRemove message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof EntityRemove
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {EntityRemove} EntityRemove
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EntityRemove.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies an EntityRemove message.
         * @function verify
         * @memberof EntityRemove
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EntityRemove.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uuid != null && message.hasOwnProperty("uuid"))
                if (!$util.isString(message.uuid))
                    return "uuid: string expected";
            return null;
        };
    
        /**
         * Creates an EntityRemove message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof EntityRemove
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {EntityRemove} EntityRemove
         */
        EntityRemove.fromObject = function fromObject(object) {
            if (object instanceof $root.EntityRemove)
                return object;
            var message = new $root.EntityRemove();
            if (object.uuid != null)
                message.uuid = String(object.uuid);
            return message;
        };
    
        /**
         * Creates a plain object from an EntityRemove message. Also converts values to other types if specified.
         * @function toObject
         * @memberof EntityRemove
         * @static
         * @param {EntityRemove} message EntityRemove
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EntityRemove.toObject = function toObject(message, options) {
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
         * Converts this EntityRemove to JSON.
         * @function toJSON
         * @memberof EntityRemove
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EntityRemove.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return EntityRemove;
    })();
    
    $root.EntityMove = (function() {
    
        /**
         * Properties of an EntityMove.
         * @exports IEntityMove
         * @interface IEntityMove
         * @property {string|null} [uuid] EntityMove uuid
         * @property {number|null} [x] EntityMove x
         * @property {number|null} [y] EntityMove y
         * @property {number|null} [z] EntityMove z
         * @property {number|null} [rotation] EntityMove rotation
         * @property {number|null} [pitch] EntityMove pitch
         */
    
        /**
         * Constructs a new EntityMove.
         * @exports EntityMove
         * @classdesc Represents an EntityMove.
         * @implements IEntityMove
         * @constructor
         * @param {IEntityMove=} [properties] Properties to set
         */
        function EntityMove(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * EntityMove uuid.
         * @member {string} uuid
         * @memberof EntityMove
         * @instance
         */
        EntityMove.prototype.uuid = "";
    
        /**
         * EntityMove x.
         * @member {number} x
         * @memberof EntityMove
         * @instance
         */
        EntityMove.prototype.x = 0;
    
        /**
         * EntityMove y.
         * @member {number} y
         * @memberof EntityMove
         * @instance
         */
        EntityMove.prototype.y = 0;
    
        /**
         * EntityMove z.
         * @member {number} z
         * @memberof EntityMove
         * @instance
         */
        EntityMove.prototype.z = 0;
    
        /**
         * EntityMove rotation.
         * @member {number} rotation
         * @memberof EntityMove
         * @instance
         */
        EntityMove.prototype.rotation = 0;
    
        /**
         * EntityMove pitch.
         * @member {number} pitch
         * @memberof EntityMove
         * @instance
         */
        EntityMove.prototype.pitch = 0;
    
        /**
         * Creates a new EntityMove instance using the specified properties.
         * @function create
         * @memberof EntityMove
         * @static
         * @param {IEntityMove=} [properties] Properties to set
         * @returns {EntityMove} EntityMove instance
         */
        EntityMove.create = function create(properties) {
            return new EntityMove(properties);
        };
    
        /**
         * Encodes the specified EntityMove message. Does not implicitly {@link EntityMove.verify|verify} messages.
         * @function encode
         * @memberof EntityMove
         * @static
         * @param {IEntityMove} message EntityMove message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EntityMove.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uuid != null && Object.hasOwnProperty.call(message, "uuid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.uuid);
            if (message.x != null && Object.hasOwnProperty.call(message, "x"))
                writer.uint32(/* id 2, wireType 1 =*/17).double(message.x);
            if (message.y != null && Object.hasOwnProperty.call(message, "y"))
                writer.uint32(/* id 3, wireType 1 =*/25).double(message.y);
            if (message.z != null && Object.hasOwnProperty.call(message, "z"))
                writer.uint32(/* id 4, wireType 1 =*/33).double(message.z);
            if (message.rotation != null && Object.hasOwnProperty.call(message, "rotation"))
                writer.uint32(/* id 5, wireType 5 =*/45).float(message.rotation);
            if (message.pitch != null && Object.hasOwnProperty.call(message, "pitch"))
                writer.uint32(/* id 6, wireType 5 =*/53).float(message.pitch);
            return writer;
        };
    
        /**
         * Encodes the specified EntityMove message, length delimited. Does not implicitly {@link EntityMove.verify|verify} messages.
         * @function encodeDelimited
         * @memberof EntityMove
         * @static
         * @param {IEntityMove} message EntityMove message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EntityMove.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes an EntityMove message from the specified reader or buffer.
         * @function decode
         * @memberof EntityMove
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {EntityMove} EntityMove
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EntityMove.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.EntityMove();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uuid = reader.string();
                    break;
                case 2:
                    message.x = reader.double();
                    break;
                case 3:
                    message.y = reader.double();
                    break;
                case 4:
                    message.z = reader.double();
                    break;
                case 5:
                    message.rotation = reader.float();
                    break;
                case 6:
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
         * Decodes an EntityMove message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof EntityMove
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {EntityMove} EntityMove
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EntityMove.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies an EntityMove message.
         * @function verify
         * @memberof EntityMove
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EntityMove.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uuid != null && message.hasOwnProperty("uuid"))
                if (!$util.isString(message.uuid))
                    return "uuid: string expected";
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
         * Creates an EntityMove message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof EntityMove
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {EntityMove} EntityMove
         */
        EntityMove.fromObject = function fromObject(object) {
            if (object instanceof $root.EntityMove)
                return object;
            var message = new $root.EntityMove();
            if (object.uuid != null)
                message.uuid = String(object.uuid);
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
         * Creates a plain object from an EntityMove message. Also converts values to other types if specified.
         * @function toObject
         * @memberof EntityMove
         * @static
         * @param {EntityMove} message EntityMove
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EntityMove.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.uuid = "";
                object.x = 0;
                object.y = 0;
                object.z = 0;
                object.rotation = 0;
                object.pitch = 0;
            }
            if (message.uuid != null && message.hasOwnProperty("uuid"))
                object.uuid = message.uuid;
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
         * Converts this EntityMove to JSON.
         * @function toJSON
         * @memberof EntityMove
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EntityMove.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return EntityMove;
    })();
    
    $root.EntityUpdate = (function() {
    
        /**
         * Properties of an EntityUpdate.
         * @exports IEntityUpdate
         * @interface IEntityUpdate
         * @property {string|null} [uuid] EntityUpdate uuid
         * @property {string|null} [key] EntityUpdate key
         * @property {string|null} [value] EntityUpdate value
         */
    
        /**
         * Constructs a new EntityUpdate.
         * @exports EntityUpdate
         * @classdesc Represents an EntityUpdate.
         * @implements IEntityUpdate
         * @constructor
         * @param {IEntityUpdate=} [properties] Properties to set
         */
        function EntityUpdate(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * EntityUpdate uuid.
         * @member {string} uuid
         * @memberof EntityUpdate
         * @instance
         */
        EntityUpdate.prototype.uuid = "";
    
        /**
         * EntityUpdate key.
         * @member {string} key
         * @memberof EntityUpdate
         * @instance
         */
        EntityUpdate.prototype.key = "";
    
        /**
         * EntityUpdate value.
         * @member {string} value
         * @memberof EntityUpdate
         * @instance
         */
        EntityUpdate.prototype.value = "";
    
        /**
         * Creates a new EntityUpdate instance using the specified properties.
         * @function create
         * @memberof EntityUpdate
         * @static
         * @param {IEntityUpdate=} [properties] Properties to set
         * @returns {EntityUpdate} EntityUpdate instance
         */
        EntityUpdate.create = function create(properties) {
            return new EntityUpdate(properties);
        };
    
        /**
         * Encodes the specified EntityUpdate message. Does not implicitly {@link EntityUpdate.verify|verify} messages.
         * @function encode
         * @memberof EntityUpdate
         * @static
         * @param {IEntityUpdate} message EntityUpdate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EntityUpdate.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uuid != null && Object.hasOwnProperty.call(message, "uuid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.uuid);
            if (message.key != null && Object.hasOwnProperty.call(message, "key"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.key);
            if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.value);
            return writer;
        };
    
        /**
         * Encodes the specified EntityUpdate message, length delimited. Does not implicitly {@link EntityUpdate.verify|verify} messages.
         * @function encodeDelimited
         * @memberof EntityUpdate
         * @static
         * @param {IEntityUpdate} message EntityUpdate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EntityUpdate.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes an EntityUpdate message from the specified reader or buffer.
         * @function decode
         * @memberof EntityUpdate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {EntityUpdate} EntityUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EntityUpdate.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.EntityUpdate();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uuid = reader.string();
                    break;
                case 2:
                    message.key = reader.string();
                    break;
                case 3:
                    message.value = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes an EntityUpdate message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof EntityUpdate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {EntityUpdate} EntityUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EntityUpdate.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies an EntityUpdate message.
         * @function verify
         * @memberof EntityUpdate
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EntityUpdate.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uuid != null && message.hasOwnProperty("uuid"))
                if (!$util.isString(message.uuid))
                    return "uuid: string expected";
            if (message.key != null && message.hasOwnProperty("key"))
                if (!$util.isString(message.key))
                    return "key: string expected";
            if (message.value != null && message.hasOwnProperty("value"))
                if (!$util.isString(message.value))
                    return "value: string expected";
            return null;
        };
    
        /**
         * Creates an EntityUpdate message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof EntityUpdate
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {EntityUpdate} EntityUpdate
         */
        EntityUpdate.fromObject = function fromObject(object) {
            if (object instanceof $root.EntityUpdate)
                return object;
            var message = new $root.EntityUpdate();
            if (object.uuid != null)
                message.uuid = String(object.uuid);
            if (object.key != null)
                message.key = String(object.key);
            if (object.value != null)
                message.value = String(object.value);
            return message;
        };
    
        /**
         * Creates a plain object from an EntityUpdate message. Also converts values to other types if specified.
         * @function toObject
         * @memberof EntityUpdate
         * @static
         * @param {EntityUpdate} message EntityUpdate
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EntityUpdate.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.uuid = "";
                object.key = "";
                object.value = "";
            }
            if (message.uuid != null && message.hasOwnProperty("uuid"))
                object.uuid = message.uuid;
            if (message.key != null && message.hasOwnProperty("key"))
                object.key = message.key;
            if (message.value != null && message.hasOwnProperty("value"))
                object.value = message.value;
            return object;
        };
    
        /**
         * Converts this EntityUpdate to JSON.
         * @function toJSON
         * @memberof EntityUpdate
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EntityUpdate.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return EntityUpdate;
    })();
    
    $root.EntityAnimate = (function() {
    
        /**
         * Properties of an EntityAnimate.
         * @exports IEntityAnimate
         * @interface IEntityAnimate
         * @property {string|null} [uuid] EntityAnimate uuid
         * @property {string|null} [animation] EntityAnimate animation
         * @property {number|null} [time] EntityAnimate time
         * @property {boolean|null} [replace] EntityAnimate replace
         */
    
        /**
         * Constructs a new EntityAnimate.
         * @exports EntityAnimate
         * @classdesc Represents an EntityAnimate.
         * @implements IEntityAnimate
         * @constructor
         * @param {IEntityAnimate=} [properties] Properties to set
         */
        function EntityAnimate(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * EntityAnimate uuid.
         * @member {string} uuid
         * @memberof EntityAnimate
         * @instance
         */
        EntityAnimate.prototype.uuid = "";
    
        /**
         * EntityAnimate animation.
         * @member {string} animation
         * @memberof EntityAnimate
         * @instance
         */
        EntityAnimate.prototype.animation = "";
    
        /**
         * EntityAnimate time.
         * @member {number} time
         * @memberof EntityAnimate
         * @instance
         */
        EntityAnimate.prototype.time = 0;
    
        /**
         * EntityAnimate replace.
         * @member {boolean} replace
         * @memberof EntityAnimate
         * @instance
         */
        EntityAnimate.prototype.replace = false;
    
        /**
         * Creates a new EntityAnimate instance using the specified properties.
         * @function create
         * @memberof EntityAnimate
         * @static
         * @param {IEntityAnimate=} [properties] Properties to set
         * @returns {EntityAnimate} EntityAnimate instance
         */
        EntityAnimate.create = function create(properties) {
            return new EntityAnimate(properties);
        };
    
        /**
         * Encodes the specified EntityAnimate message. Does not implicitly {@link EntityAnimate.verify|verify} messages.
         * @function encode
         * @memberof EntityAnimate
         * @static
         * @param {IEntityAnimate} message EntityAnimate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EntityAnimate.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uuid != null && Object.hasOwnProperty.call(message, "uuid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.uuid);
            if (message.animation != null && Object.hasOwnProperty.call(message, "animation"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.animation);
            if (message.time != null && Object.hasOwnProperty.call(message, "time"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.time);
            if (message.replace != null && Object.hasOwnProperty.call(message, "replace"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.replace);
            return writer;
        };
    
        /**
         * Encodes the specified EntityAnimate message, length delimited. Does not implicitly {@link EntityAnimate.verify|verify} messages.
         * @function encodeDelimited
         * @memberof EntityAnimate
         * @static
         * @param {IEntityAnimate} message EntityAnimate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EntityAnimate.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes an EntityAnimate message from the specified reader or buffer.
         * @function decode
         * @memberof EntityAnimate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {EntityAnimate} EntityAnimate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EntityAnimate.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.EntityAnimate();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uuid = reader.string();
                    break;
                case 2:
                    message.animation = reader.string();
                    break;
                case 3:
                    message.time = reader.uint32();
                    break;
                case 4:
                    message.replace = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes an EntityAnimate message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof EntityAnimate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {EntityAnimate} EntityAnimate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EntityAnimate.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies an EntityAnimate message.
         * @function verify
         * @memberof EntityAnimate
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EntityAnimate.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uuid != null && message.hasOwnProperty("uuid"))
                if (!$util.isString(message.uuid))
                    return "uuid: string expected";
            if (message.animation != null && message.hasOwnProperty("animation"))
                if (!$util.isString(message.animation))
                    return "animation: string expected";
            if (message.time != null && message.hasOwnProperty("time"))
                if (!$util.isInteger(message.time))
                    return "time: integer expected";
            if (message.replace != null && message.hasOwnProperty("replace"))
                if (typeof message.replace !== "boolean")
                    return "replace: boolean expected";
            return null;
        };
    
        /**
         * Creates an EntityAnimate message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof EntityAnimate
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {EntityAnimate} EntityAnimate
         */
        EntityAnimate.fromObject = function fromObject(object) {
            if (object instanceof $root.EntityAnimate)
                return object;
            var message = new $root.EntityAnimate();
            if (object.uuid != null)
                message.uuid = String(object.uuid);
            if (object.animation != null)
                message.animation = String(object.animation);
            if (object.time != null)
                message.time = object.time >>> 0;
            if (object.replace != null)
                message.replace = Boolean(object.replace);
            return message;
        };
    
        /**
         * Creates a plain object from an EntityAnimate message. Also converts values to other types if specified.
         * @function toObject
         * @memberof EntityAnimate
         * @static
         * @param {EntityAnimate} message EntityAnimate
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EntityAnimate.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.uuid = "";
                object.animation = "";
                object.time = 0;
                object.replace = false;
            }
            if (message.uuid != null && message.hasOwnProperty("uuid"))
                object.uuid = message.uuid;
            if (message.animation != null && message.hasOwnProperty("animation"))
                object.animation = message.animation;
            if (message.time != null && message.hasOwnProperty("time"))
                object.time = message.time;
            if (message.replace != null && message.hasOwnProperty("replace"))
                object.replace = message.replace;
            return object;
        };
    
        /**
         * Converts this EntityAnimate to JSON.
         * @function toJSON
         * @memberof EntityAnimate
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EntityAnimate.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return EntityAnimate;
    })();
    
    $root.WorldBlockUpdate = (function() {
    
        /**
         * Properties of a WorldBlockUpdate.
         * @exports IWorldBlockUpdate
         * @interface IWorldBlockUpdate
         * @property {number|null} [x] WorldBlockUpdate x
         * @property {number|null} [y] WorldBlockUpdate y
         * @property {number|null} [z] WorldBlockUpdate z
         * @property {number|null} [id] WorldBlockUpdate id
         */
    
        /**
         * Constructs a new WorldBlockUpdate.
         * @exports WorldBlockUpdate
         * @classdesc Represents a WorldBlockUpdate.
         * @implements IWorldBlockUpdate
         * @constructor
         * @param {IWorldBlockUpdate=} [properties] Properties to set
         */
        function WorldBlockUpdate(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * WorldBlockUpdate x.
         * @member {number} x
         * @memberof WorldBlockUpdate
         * @instance
         */
        WorldBlockUpdate.prototype.x = 0;
    
        /**
         * WorldBlockUpdate y.
         * @member {number} y
         * @memberof WorldBlockUpdate
         * @instance
         */
        WorldBlockUpdate.prototype.y = 0;
    
        /**
         * WorldBlockUpdate z.
         * @member {number} z
         * @memberof WorldBlockUpdate
         * @instance
         */
        WorldBlockUpdate.prototype.z = 0;
    
        /**
         * WorldBlockUpdate id.
         * @member {number} id
         * @memberof WorldBlockUpdate
         * @instance
         */
        WorldBlockUpdate.prototype.id = 0;
    
        /**
         * Creates a new WorldBlockUpdate instance using the specified properties.
         * @function create
         * @memberof WorldBlockUpdate
         * @static
         * @param {IWorldBlockUpdate=} [properties] Properties to set
         * @returns {WorldBlockUpdate} WorldBlockUpdate instance
         */
        WorldBlockUpdate.create = function create(properties) {
            return new WorldBlockUpdate(properties);
        };
    
        /**
         * Encodes the specified WorldBlockUpdate message. Does not implicitly {@link WorldBlockUpdate.verify|verify} messages.
         * @function encode
         * @memberof WorldBlockUpdate
         * @static
         * @param {IWorldBlockUpdate} message WorldBlockUpdate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WorldBlockUpdate.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.x != null && Object.hasOwnProperty.call(message, "x"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.x);
            if (message.y != null && Object.hasOwnProperty.call(message, "y"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.y);
            if (message.z != null && Object.hasOwnProperty.call(message, "z"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.z);
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.id);
            return writer;
        };
    
        /**
         * Encodes the specified WorldBlockUpdate message, length delimited. Does not implicitly {@link WorldBlockUpdate.verify|verify} messages.
         * @function encodeDelimited
         * @memberof WorldBlockUpdate
         * @static
         * @param {IWorldBlockUpdate} message WorldBlockUpdate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WorldBlockUpdate.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a WorldBlockUpdate message from the specified reader or buffer.
         * @function decode
         * @memberof WorldBlockUpdate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {WorldBlockUpdate} WorldBlockUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WorldBlockUpdate.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.WorldBlockUpdate();
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
                    message.id = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a WorldBlockUpdate message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof WorldBlockUpdate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {WorldBlockUpdate} WorldBlockUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WorldBlockUpdate.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a WorldBlockUpdate message.
         * @function verify
         * @memberof WorldBlockUpdate
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WorldBlockUpdate.verify = function verify(message) {
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
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            return null;
        };
    
        /**
         * Creates a WorldBlockUpdate message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof WorldBlockUpdate
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {WorldBlockUpdate} WorldBlockUpdate
         */
        WorldBlockUpdate.fromObject = function fromObject(object) {
            if (object instanceof $root.WorldBlockUpdate)
                return object;
            var message = new $root.WorldBlockUpdate();
            if (object.x != null)
                message.x = object.x | 0;
            if (object.y != null)
                message.y = object.y | 0;
            if (object.z != null)
                message.z = object.z | 0;
            if (object.id != null)
                message.id = object.id >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a WorldBlockUpdate message. Also converts values to other types if specified.
         * @function toObject
         * @memberof WorldBlockUpdate
         * @static
         * @param {WorldBlockUpdate} message WorldBlockUpdate
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WorldBlockUpdate.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.x = 0;
                object.y = 0;
                object.z = 0;
                object.id = 0;
            }
            if (message.x != null && message.hasOwnProperty("x"))
                object.x = message.x;
            if (message.y != null && message.hasOwnProperty("y"))
                object.y = message.y;
            if (message.z != null && message.hasOwnProperty("z"))
                object.z = message.z;
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            return object;
        };
    
        /**
         * Converts this WorldBlockUpdate to JSON.
         * @function toJSON
         * @memberof WorldBlockUpdate
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WorldBlockUpdate.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return WorldBlockUpdate;
    })();
    
    $root.WorldChunkLoad = (function() {
    
        /**
         * Properties of a WorldChunkLoad.
         * @exports IWorldChunkLoad
         * @interface IWorldChunkLoad
         * @property {number|null} [x] WorldChunkLoad x
         * @property {number|null} [y] WorldChunkLoad y
         * @property {number|null} [z] WorldChunkLoad z
         * @property {Uint8Array|null} [data] WorldChunkLoad data
         * @property {boolean|null} [type] WorldChunkLoad type
         * @property {boolean|null} [compressed] WorldChunkLoad compressed
         */
    
        /**
         * Constructs a new WorldChunkLoad.
         * @exports WorldChunkLoad
         * @classdesc Represents a WorldChunkLoad.
         * @implements IWorldChunkLoad
         * @constructor
         * @param {IWorldChunkLoad=} [properties] Properties to set
         */
        function WorldChunkLoad(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * WorldChunkLoad x.
         * @member {number} x
         * @memberof WorldChunkLoad
         * @instance
         */
        WorldChunkLoad.prototype.x = 0;
    
        /**
         * WorldChunkLoad y.
         * @member {number} y
         * @memberof WorldChunkLoad
         * @instance
         */
        WorldChunkLoad.prototype.y = 0;
    
        /**
         * WorldChunkLoad z.
         * @member {number} z
         * @memberof WorldChunkLoad
         * @instance
         */
        WorldChunkLoad.prototype.z = 0;
    
        /**
         * WorldChunkLoad data.
         * @member {Uint8Array} data
         * @memberof WorldChunkLoad
         * @instance
         */
        WorldChunkLoad.prototype.data = $util.newBuffer([]);
    
        /**
         * WorldChunkLoad type.
         * @member {boolean} type
         * @memberof WorldChunkLoad
         * @instance
         */
        WorldChunkLoad.prototype.type = false;
    
        /**
         * WorldChunkLoad compressed.
         * @member {boolean} compressed
         * @memberof WorldChunkLoad
         * @instance
         */
        WorldChunkLoad.prototype.compressed = false;
    
        /**
         * Creates a new WorldChunkLoad instance using the specified properties.
         * @function create
         * @memberof WorldChunkLoad
         * @static
         * @param {IWorldChunkLoad=} [properties] Properties to set
         * @returns {WorldChunkLoad} WorldChunkLoad instance
         */
        WorldChunkLoad.create = function create(properties) {
            return new WorldChunkLoad(properties);
        };
    
        /**
         * Encodes the specified WorldChunkLoad message. Does not implicitly {@link WorldChunkLoad.verify|verify} messages.
         * @function encode
         * @memberof WorldChunkLoad
         * @static
         * @param {IWorldChunkLoad} message WorldChunkLoad message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WorldChunkLoad.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.x != null && Object.hasOwnProperty.call(message, "x"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.x);
            if (message.y != null && Object.hasOwnProperty.call(message, "y"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.y);
            if (message.z != null && Object.hasOwnProperty.call(message, "z"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.z);
            if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.data);
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.type);
            if (message.compressed != null && Object.hasOwnProperty.call(message, "compressed"))
                writer.uint32(/* id 6, wireType 0 =*/48).bool(message.compressed);
            return writer;
        };
    
        /**
         * Encodes the specified WorldChunkLoad message, length delimited. Does not implicitly {@link WorldChunkLoad.verify|verify} messages.
         * @function encodeDelimited
         * @memberof WorldChunkLoad
         * @static
         * @param {IWorldChunkLoad} message WorldChunkLoad message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WorldChunkLoad.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a WorldChunkLoad message from the specified reader or buffer.
         * @function decode
         * @memberof WorldChunkLoad
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {WorldChunkLoad} WorldChunkLoad
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WorldChunkLoad.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.WorldChunkLoad();
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
                    message.data = reader.bytes();
                    break;
                case 5:
                    message.type = reader.bool();
                    break;
                case 6:
                    message.compressed = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a WorldChunkLoad message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof WorldChunkLoad
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {WorldChunkLoad} WorldChunkLoad
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WorldChunkLoad.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a WorldChunkLoad message.
         * @function verify
         * @memberof WorldChunkLoad
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WorldChunkLoad.verify = function verify(message) {
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
            if (message.data != null && message.hasOwnProperty("data"))
                if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                    return "data: buffer expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (typeof message.type !== "boolean")
                    return "type: boolean expected";
            if (message.compressed != null && message.hasOwnProperty("compressed"))
                if (typeof message.compressed !== "boolean")
                    return "compressed: boolean expected";
            return null;
        };
    
        /**
         * Creates a WorldChunkLoad message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof WorldChunkLoad
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {WorldChunkLoad} WorldChunkLoad
         */
        WorldChunkLoad.fromObject = function fromObject(object) {
            if (object instanceof $root.WorldChunkLoad)
                return object;
            var message = new $root.WorldChunkLoad();
            if (object.x != null)
                message.x = object.x | 0;
            if (object.y != null)
                message.y = object.y | 0;
            if (object.z != null)
                message.z = object.z | 0;
            if (object.data != null)
                if (typeof object.data === "string")
                    $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
                else if (object.data.length)
                    message.data = object.data;
            if (object.type != null)
                message.type = Boolean(object.type);
            if (object.compressed != null)
                message.compressed = Boolean(object.compressed);
            return message;
        };
    
        /**
         * Creates a plain object from a WorldChunkLoad message. Also converts values to other types if specified.
         * @function toObject
         * @memberof WorldChunkLoad
         * @static
         * @param {WorldChunkLoad} message WorldChunkLoad
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WorldChunkLoad.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.x = 0;
                object.y = 0;
                object.z = 0;
                if (options.bytes === String)
                    object.data = "";
                else {
                    object.data = [];
                    if (options.bytes !== Array)
                        object.data = $util.newBuffer(object.data);
                }
                object.type = false;
                object.compressed = false;
            }
            if (message.x != null && message.hasOwnProperty("x"))
                object.x = message.x;
            if (message.y != null && message.hasOwnProperty("y"))
                object.y = message.y;
            if (message.z != null && message.hasOwnProperty("z"))
                object.z = message.z;
            if (message.data != null && message.hasOwnProperty("data"))
                object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.compressed != null && message.hasOwnProperty("compressed"))
                object.compressed = message.compressed;
            return object;
        };
    
        /**
         * Converts this WorldChunkLoad to JSON.
         * @function toJSON
         * @memberof WorldChunkLoad
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WorldChunkLoad.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return WorldChunkLoad;
    })();
    
    $root.WorldChunkUnload = (function() {
    
        /**
         * Properties of a WorldChunkUnload.
         * @exports IWorldChunkUnload
         * @interface IWorldChunkUnload
         * @property {number|null} [x] WorldChunkUnload x
         * @property {number|null} [y] WorldChunkUnload y
         * @property {number|null} [z] WorldChunkUnload z
         * @property {boolean|null} [type] WorldChunkUnload type
         */
    
        /**
         * Constructs a new WorldChunkUnload.
         * @exports WorldChunkUnload
         * @classdesc Represents a WorldChunkUnload.
         * @implements IWorldChunkUnload
         * @constructor
         * @param {IWorldChunkUnload=} [properties] Properties to set
         */
        function WorldChunkUnload(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * WorldChunkUnload x.
         * @member {number} x
         * @memberof WorldChunkUnload
         * @instance
         */
        WorldChunkUnload.prototype.x = 0;
    
        /**
         * WorldChunkUnload y.
         * @member {number} y
         * @memberof WorldChunkUnload
         * @instance
         */
        WorldChunkUnload.prototype.y = 0;
    
        /**
         * WorldChunkUnload z.
         * @member {number} z
         * @memberof WorldChunkUnload
         * @instance
         */
        WorldChunkUnload.prototype.z = 0;
    
        /**
         * WorldChunkUnload type.
         * @member {boolean} type
         * @memberof WorldChunkUnload
         * @instance
         */
        WorldChunkUnload.prototype.type = false;
    
        /**
         * Creates a new WorldChunkUnload instance using the specified properties.
         * @function create
         * @memberof WorldChunkUnload
         * @static
         * @param {IWorldChunkUnload=} [properties] Properties to set
         * @returns {WorldChunkUnload} WorldChunkUnload instance
         */
        WorldChunkUnload.create = function create(properties) {
            return new WorldChunkUnload(properties);
        };
    
        /**
         * Encodes the specified WorldChunkUnload message. Does not implicitly {@link WorldChunkUnload.verify|verify} messages.
         * @function encode
         * @memberof WorldChunkUnload
         * @static
         * @param {IWorldChunkUnload} message WorldChunkUnload message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WorldChunkUnload.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.x != null && Object.hasOwnProperty.call(message, "x"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.x);
            if (message.y != null && Object.hasOwnProperty.call(message, "y"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.y);
            if (message.z != null && Object.hasOwnProperty.call(message, "z"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.z);
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.type);
            return writer;
        };
    
        /**
         * Encodes the specified WorldChunkUnload message, length delimited. Does not implicitly {@link WorldChunkUnload.verify|verify} messages.
         * @function encodeDelimited
         * @memberof WorldChunkUnload
         * @static
         * @param {IWorldChunkUnload} message WorldChunkUnload message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WorldChunkUnload.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a WorldChunkUnload message from the specified reader or buffer.
         * @function decode
         * @memberof WorldChunkUnload
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {WorldChunkUnload} WorldChunkUnload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WorldChunkUnload.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.WorldChunkUnload();
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
         * Decodes a WorldChunkUnload message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof WorldChunkUnload
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {WorldChunkUnload} WorldChunkUnload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WorldChunkUnload.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a WorldChunkUnload message.
         * @function verify
         * @memberof WorldChunkUnload
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WorldChunkUnload.verify = function verify(message) {
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
                if (typeof message.type !== "boolean")
                    return "type: boolean expected";
            return null;
        };
    
        /**
         * Creates a WorldChunkUnload message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof WorldChunkUnload
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {WorldChunkUnload} WorldChunkUnload
         */
        WorldChunkUnload.fromObject = function fromObject(object) {
            if (object instanceof $root.WorldChunkUnload)
                return object;
            var message = new $root.WorldChunkUnload();
            if (object.x != null)
                message.x = object.x | 0;
            if (object.y != null)
                message.y = object.y | 0;
            if (object.z != null)
                message.z = object.z | 0;
            if (object.type != null)
                message.type = Boolean(object.type);
            return message;
        };
    
        /**
         * Creates a plain object from a WorldChunkUnload message. Also converts values to other types if specified.
         * @function toObject
         * @memberof WorldChunkUnload
         * @static
         * @param {WorldChunkUnload} message WorldChunkUnload
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WorldChunkUnload.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.x = 0;
                object.y = 0;
                object.z = 0;
                object.type = false;
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
         * Converts this WorldChunkUnload to JSON.
         * @function toJSON
         * @memberof WorldChunkUnload
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WorldChunkUnload.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return WorldChunkUnload;
    })();
    
    $root.RegistryUpdate = (function() {
    
        /**
         * Properties of a RegistryUpdate.
         * @exports IRegistryUpdate
         * @interface IRegistryUpdate
         * @property {string|null} [itemsDef] RegistryUpdate itemsDef
         * @property {string|null} [blocksDef] RegistryUpdate blocksDef
         */
    
        /**
         * Constructs a new RegistryUpdate.
         * @exports RegistryUpdate
         * @classdesc Represents a RegistryUpdate.
         * @implements IRegistryUpdate
         * @constructor
         * @param {IRegistryUpdate=} [properties] Properties to set
         */
        function RegistryUpdate(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * RegistryUpdate itemsDef.
         * @member {string} itemsDef
         * @memberof RegistryUpdate
         * @instance
         */
        RegistryUpdate.prototype.itemsDef = "";
    
        /**
         * RegistryUpdate blocksDef.
         * @member {string} blocksDef
         * @memberof RegistryUpdate
         * @instance
         */
        RegistryUpdate.prototype.blocksDef = "";
    
        /**
         * Creates a new RegistryUpdate instance using the specified properties.
         * @function create
         * @memberof RegistryUpdate
         * @static
         * @param {IRegistryUpdate=} [properties] Properties to set
         * @returns {RegistryUpdate} RegistryUpdate instance
         */
        RegistryUpdate.create = function create(properties) {
            return new RegistryUpdate(properties);
        };
    
        /**
         * Encodes the specified RegistryUpdate message. Does not implicitly {@link RegistryUpdate.verify|verify} messages.
         * @function encode
         * @memberof RegistryUpdate
         * @static
         * @param {IRegistryUpdate} message RegistryUpdate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RegistryUpdate.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.itemsDef != null && Object.hasOwnProperty.call(message, "itemsDef"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.itemsDef);
            if (message.blocksDef != null && Object.hasOwnProperty.call(message, "blocksDef"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.blocksDef);
            return writer;
        };
    
        /**
         * Encodes the specified RegistryUpdate message, length delimited. Does not implicitly {@link RegistryUpdate.verify|verify} messages.
         * @function encodeDelimited
         * @memberof RegistryUpdate
         * @static
         * @param {IRegistryUpdate} message RegistryUpdate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RegistryUpdate.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a RegistryUpdate message from the specified reader or buffer.
         * @function decode
         * @memberof RegistryUpdate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {RegistryUpdate} RegistryUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RegistryUpdate.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.RegistryUpdate();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.itemsDef = reader.string();
                    break;
                case 2:
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
         * Decodes a RegistryUpdate message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof RegistryUpdate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {RegistryUpdate} RegistryUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RegistryUpdate.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a RegistryUpdate message.
         * @function verify
         * @memberof RegistryUpdate
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RegistryUpdate.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.itemsDef != null && message.hasOwnProperty("itemsDef"))
                if (!$util.isString(message.itemsDef))
                    return "itemsDef: string expected";
            if (message.blocksDef != null && message.hasOwnProperty("blocksDef"))
                if (!$util.isString(message.blocksDef))
                    return "blocksDef: string expected";
            return null;
        };
    
        /**
         * Creates a RegistryUpdate message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof RegistryUpdate
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {RegistryUpdate} RegistryUpdate
         */
        RegistryUpdate.fromObject = function fromObject(object) {
            if (object instanceof $root.RegistryUpdate)
                return object;
            var message = new $root.RegistryUpdate();
            if (object.itemsDef != null)
                message.itemsDef = String(object.itemsDef);
            if (object.blocksDef != null)
                message.blocksDef = String(object.blocksDef);
            return message;
        };
    
        /**
         * Creates a plain object from a RegistryUpdate message. Also converts values to other types if specified.
         * @function toObject
         * @memberof RegistryUpdate
         * @static
         * @param {RegistryUpdate} message RegistryUpdate
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RegistryUpdate.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.itemsDef = "";
                object.blocksDef = "";
            }
            if (message.itemsDef != null && message.hasOwnProperty("itemsDef"))
                object.itemsDef = message.itemsDef;
            if (message.blocksDef != null && message.hasOwnProperty("blocksDef"))
                object.blocksDef = message.blocksDef;
            return object;
        };
    
        /**
         * Converts this RegistryUpdate to JSON.
         * @function toJSON
         * @memberof RegistryUpdate
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RegistryUpdate.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return RegistryUpdate;
    })();

    return $root;
});
