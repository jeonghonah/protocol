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
    
    $root.loginRequest = (function() {
    
        /**
         * Properties of a loginRequest.
         * @exports IloginRequest
         * @interface IloginRequest
         * @property {string|null} [name] loginRequest name
         * @property {number|null} [protocol] loginRequest protocol
         * @property {number|null} [maxplayers] loginRequest maxplayers
         * @property {number|null} [numberplayers] loginRequest numberplayers
         * @property {string|null} [motd] loginRequest motd
         * @property {string|null} [software] loginRequest software
         */
    
        /**
         * Constructs a new loginRequest.
         * @exports loginRequest
         * @classdesc Represents a loginRequest.
         * @implements IloginRequest
         * @constructor
         * @param {IloginRequest=} [properties] Properties to set
         */
        function loginRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * loginRequest name.
         * @member {string} name
         * @memberof loginRequest
         * @instance
         */
        loginRequest.prototype.name = "";
    
        /**
         * loginRequest protocol.
         * @member {number} protocol
         * @memberof loginRequest
         * @instance
         */
        loginRequest.prototype.protocol = 0;
    
        /**
         * loginRequest maxplayers.
         * @member {number} maxplayers
         * @memberof loginRequest
         * @instance
         */
        loginRequest.prototype.maxplayers = 0;
    
        /**
         * loginRequest numberplayers.
         * @member {number} numberplayers
         * @memberof loginRequest
         * @instance
         */
        loginRequest.prototype.numberplayers = 0;
    
        /**
         * loginRequest motd.
         * @member {string} motd
         * @memberof loginRequest
         * @instance
         */
        loginRequest.prototype.motd = "";
    
        /**
         * loginRequest software.
         * @member {string} software
         * @memberof loginRequest
         * @instance
         */
        loginRequest.prototype.software = "";
    
        /**
         * Creates a new loginRequest instance using the specified properties.
         * @function create
         * @memberof loginRequest
         * @static
         * @param {IloginRequest=} [properties] Properties to set
         * @returns {loginRequest} loginRequest instance
         */
        loginRequest.create = function create(properties) {
            return new loginRequest(properties);
        };
    
        /**
         * Encodes the specified loginRequest message. Does not implicitly {@link loginRequest.verify|verify} messages.
         * @function encode
         * @memberof loginRequest
         * @static
         * @param {IloginRequest} message loginRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        loginRequest.encode = function encode(message, writer) {
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
         * Encodes the specified loginRequest message, length delimited. Does not implicitly {@link loginRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof loginRequest
         * @static
         * @param {IloginRequest} message loginRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        loginRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a loginRequest message from the specified reader or buffer.
         * @function decode
         * @memberof loginRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {loginRequest} loginRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        loginRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.loginRequest();
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
         * Decodes a loginRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof loginRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {loginRequest} loginRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        loginRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a loginRequest message.
         * @function verify
         * @memberof loginRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        loginRequest.verify = function verify(message) {
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
         * Creates a loginRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof loginRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {loginRequest} loginRequest
         */
        loginRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.loginRequest)
                return object;
            var message = new $root.loginRequest();
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
         * Creates a plain object from a loginRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof loginRequest
         * @static
         * @param {loginRequest} message loginRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        loginRequest.toObject = function toObject(message, options) {
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
         * Converts this loginRequest to JSON.
         * @function toJSON
         * @memberof loginRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        loginRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return loginRequest;
    })();
    
    $root.loginSuccess = (function() {
    
        /**
         * Properties of a loginSuccess.
         * @exports IloginSuccess
         * @interface IloginSuccess
         * @property {number|null} [xPos] loginSuccess xPos
         * @property {number|null} [yPos] loginSuccess yPos
         * @property {number|null} [zPos] loginSuccess zPos
         * @property {string|null} [itemsDef] loginSuccess itemsDef
         * @property {string|null} [blocksDef] loginSuccess blocksDef
         * @property {string|null} [inventory] loginSuccess inventory
         * @property {string|null} [armor] loginSuccess armor
         */
    
        /**
         * Constructs a new loginSuccess.
         * @exports loginSuccess
         * @classdesc Represents a loginSuccess.
         * @implements IloginSuccess
         * @constructor
         * @param {IloginSuccess=} [properties] Properties to set
         */
        function loginSuccess(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * loginSuccess xPos.
         * @member {number} xPos
         * @memberof loginSuccess
         * @instance
         */
        loginSuccess.prototype.xPos = 0;
    
        /**
         * loginSuccess yPos.
         * @member {number} yPos
         * @memberof loginSuccess
         * @instance
         */
        loginSuccess.prototype.yPos = 0;
    
        /**
         * loginSuccess zPos.
         * @member {number} zPos
         * @memberof loginSuccess
         * @instance
         */
        loginSuccess.prototype.zPos = 0;
    
        /**
         * loginSuccess itemsDef.
         * @member {string} itemsDef
         * @memberof loginSuccess
         * @instance
         */
        loginSuccess.prototype.itemsDef = "";
    
        /**
         * loginSuccess blocksDef.
         * @member {string} blocksDef
         * @memberof loginSuccess
         * @instance
         */
        loginSuccess.prototype.blocksDef = "";
    
        /**
         * loginSuccess inventory.
         * @member {string} inventory
         * @memberof loginSuccess
         * @instance
         */
        loginSuccess.prototype.inventory = "";
    
        /**
         * loginSuccess armor.
         * @member {string} armor
         * @memberof loginSuccess
         * @instance
         */
        loginSuccess.prototype.armor = "";
    
        /**
         * Creates a new loginSuccess instance using the specified properties.
         * @function create
         * @memberof loginSuccess
         * @static
         * @param {IloginSuccess=} [properties] Properties to set
         * @returns {loginSuccess} loginSuccess instance
         */
        loginSuccess.create = function create(properties) {
            return new loginSuccess(properties);
        };
    
        /**
         * Encodes the specified loginSuccess message. Does not implicitly {@link loginSuccess.verify|verify} messages.
         * @function encode
         * @memberof loginSuccess
         * @static
         * @param {IloginSuccess} message loginSuccess message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        loginSuccess.encode = function encode(message, writer) {
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
         * Encodes the specified loginSuccess message, length delimited. Does not implicitly {@link loginSuccess.verify|verify} messages.
         * @function encodeDelimited
         * @memberof loginSuccess
         * @static
         * @param {IloginSuccess} message loginSuccess message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        loginSuccess.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a loginSuccess message from the specified reader or buffer.
         * @function decode
         * @memberof loginSuccess
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {loginSuccess} loginSuccess
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        loginSuccess.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.loginSuccess();
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
         * Decodes a loginSuccess message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof loginSuccess
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {loginSuccess} loginSuccess
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        loginSuccess.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a loginSuccess message.
         * @function verify
         * @memberof loginSuccess
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        loginSuccess.verify = function verify(message) {
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
         * Creates a loginSuccess message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof loginSuccess
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {loginSuccess} loginSuccess
         */
        loginSuccess.fromObject = function fromObject(object) {
            if (object instanceof $root.loginSuccess)
                return object;
            var message = new $root.loginSuccess();
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
         * Creates a plain object from a loginSuccess message. Also converts values to other types if specified.
         * @function toObject
         * @memberof loginSuccess
         * @static
         * @param {loginSuccess} message loginSuccess
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        loginSuccess.toObject = function toObject(message, options) {
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
         * Converts this loginSuccess to JSON.
         * @function toJSON
         * @memberof loginSuccess
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        loginSuccess.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return loginSuccess;
    })();
    
    $root.playerEntity = (function() {
    
        /**
         * Properties of a playerEntity.
         * @exports IplayerEntity
         * @interface IplayerEntity
         * @property {string|null} [uuid] playerEntity uuid
         */
    
        /**
         * Constructs a new playerEntity.
         * @exports playerEntity
         * @classdesc Represents a playerEntity.
         * @implements IplayerEntity
         * @constructor
         * @param {IplayerEntity=} [properties] Properties to set
         */
        function playerEntity(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * playerEntity uuid.
         * @member {string} uuid
         * @memberof playerEntity
         * @instance
         */
        playerEntity.prototype.uuid = "";
    
        /**
         * Creates a new playerEntity instance using the specified properties.
         * @function create
         * @memberof playerEntity
         * @static
         * @param {IplayerEntity=} [properties] Properties to set
         * @returns {playerEntity} playerEntity instance
         */
        playerEntity.create = function create(properties) {
            return new playerEntity(properties);
        };
    
        /**
         * Encodes the specified playerEntity message. Does not implicitly {@link playerEntity.verify|verify} messages.
         * @function encode
         * @memberof playerEntity
         * @static
         * @param {IplayerEntity} message playerEntity message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        playerEntity.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uuid != null && Object.hasOwnProperty.call(message, "uuid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.uuid);
            return writer;
        };
    
        /**
         * Encodes the specified playerEntity message, length delimited. Does not implicitly {@link playerEntity.verify|verify} messages.
         * @function encodeDelimited
         * @memberof playerEntity
         * @static
         * @param {IplayerEntity} message playerEntity message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        playerEntity.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a playerEntity message from the specified reader or buffer.
         * @function decode
         * @memberof playerEntity
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {playerEntity} playerEntity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        playerEntity.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.playerEntity();
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
         * Decodes a playerEntity message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof playerEntity
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {playerEntity} playerEntity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        playerEntity.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a playerEntity message.
         * @function verify
         * @memberof playerEntity
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        playerEntity.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uuid != null && message.hasOwnProperty("uuid"))
                if (!$util.isString(message.uuid))
                    return "uuid: string expected";
            return null;
        };
    
        /**
         * Creates a playerEntity message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof playerEntity
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {playerEntity} playerEntity
         */
        playerEntity.fromObject = function fromObject(object) {
            if (object instanceof $root.playerEntity)
                return object;
            var message = new $root.playerEntity();
            if (object.uuid != null)
                message.uuid = String(object.uuid);
            return message;
        };
    
        /**
         * Creates a plain object from a playerEntity message. Also converts values to other types if specified.
         * @function toObject
         * @memberof playerEntity
         * @static
         * @param {playerEntity} message playerEntity
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        playerEntity.toObject = function toObject(message, options) {
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
         * Converts this playerEntity to JSON.
         * @function toJSON
         * @memberof playerEntity
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        playerEntity.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return playerEntity;
    })();
    
    $root.playerTeleport = (function() {
    
        /**
         * Properties of a playerTeleport.
         * @exports IplayerTeleport
         * @interface IplayerTeleport
         * @property {number|null} [x] playerTeleport x
         * @property {number|null} [y] playerTeleport y
         * @property {number|null} [z] playerTeleport z
         */
    
        /**
         * Constructs a new playerTeleport.
         * @exports playerTeleport
         * @classdesc Represents a playerTeleport.
         * @implements IplayerTeleport
         * @constructor
         * @param {IplayerTeleport=} [properties] Properties to set
         */
        function playerTeleport(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * playerTeleport x.
         * @member {number} x
         * @memberof playerTeleport
         * @instance
         */
        playerTeleport.prototype.x = 0;
    
        /**
         * playerTeleport y.
         * @member {number} y
         * @memberof playerTeleport
         * @instance
         */
        playerTeleport.prototype.y = 0;
    
        /**
         * playerTeleport z.
         * @member {number} z
         * @memberof playerTeleport
         * @instance
         */
        playerTeleport.prototype.z = 0;
    
        /**
         * Creates a new playerTeleport instance using the specified properties.
         * @function create
         * @memberof playerTeleport
         * @static
         * @param {IplayerTeleport=} [properties] Properties to set
         * @returns {playerTeleport} playerTeleport instance
         */
        playerTeleport.create = function create(properties) {
            return new playerTeleport(properties);
        };
    
        /**
         * Encodes the specified playerTeleport message. Does not implicitly {@link playerTeleport.verify|verify} messages.
         * @function encode
         * @memberof playerTeleport
         * @static
         * @param {IplayerTeleport} message playerTeleport message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        playerTeleport.encode = function encode(message, writer) {
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
         * Encodes the specified playerTeleport message, length delimited. Does not implicitly {@link playerTeleport.verify|verify} messages.
         * @function encodeDelimited
         * @memberof playerTeleport
         * @static
         * @param {IplayerTeleport} message playerTeleport message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        playerTeleport.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a playerTeleport message from the specified reader or buffer.
         * @function decode
         * @memberof playerTeleport
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {playerTeleport} playerTeleport
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        playerTeleport.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.playerTeleport();
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
         * Decodes a playerTeleport message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof playerTeleport
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {playerTeleport} playerTeleport
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        playerTeleport.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a playerTeleport message.
         * @function verify
         * @memberof playerTeleport
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        playerTeleport.verify = function verify(message) {
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
         * Creates a playerTeleport message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof playerTeleport
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {playerTeleport} playerTeleport
         */
        playerTeleport.fromObject = function fromObject(object) {
            if (object instanceof $root.playerTeleport)
                return object;
            var message = new $root.playerTeleport();
            if (object.x != null)
                message.x = Number(object.x);
            if (object.y != null)
                message.y = Number(object.y);
            if (object.z != null)
                message.z = Number(object.z);
            return message;
        };
    
        /**
         * Creates a plain object from a playerTeleport message. Also converts values to other types if specified.
         * @function toObject
         * @memberof playerTeleport
         * @static
         * @param {playerTeleport} message playerTeleport
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        playerTeleport.toObject = function toObject(message, options) {
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
         * Converts this playerTeleport to JSON.
         * @function toJSON
         * @memberof playerTeleport
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        playerTeleport.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return playerTeleport;
    })();
    
    $root.playerInventory = (function() {
    
        /**
         * Properties of a playerInventory.
         * @exports IplayerInventory
         * @interface IplayerInventory
         * @property {string|null} [inventory] playerInventory inventory
         * @property {string|null} [type] playerInventory type
         */
    
        /**
         * Constructs a new playerInventory.
         * @exports playerInventory
         * @classdesc Represents a playerInventory.
         * @implements IplayerInventory
         * @constructor
         * @param {IplayerInventory=} [properties] Properties to set
         */
        function playerInventory(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * playerInventory inventory.
         * @member {string} inventory
         * @memberof playerInventory
         * @instance
         */
        playerInventory.prototype.inventory = "";
    
        /**
         * playerInventory type.
         * @member {string} type
         * @memberof playerInventory
         * @instance
         */
        playerInventory.prototype.type = "";
    
        /**
         * Creates a new playerInventory instance using the specified properties.
         * @function create
         * @memberof playerInventory
         * @static
         * @param {IplayerInventory=} [properties] Properties to set
         * @returns {playerInventory} playerInventory instance
         */
        playerInventory.create = function create(properties) {
            return new playerInventory(properties);
        };
    
        /**
         * Encodes the specified playerInventory message. Does not implicitly {@link playerInventory.verify|verify} messages.
         * @function encode
         * @memberof playerInventory
         * @static
         * @param {IplayerInventory} message playerInventory message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        playerInventory.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.inventory != null && Object.hasOwnProperty.call(message, "inventory"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.inventory);
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.type);
            return writer;
        };
    
        /**
         * Encodes the specified playerInventory message, length delimited. Does not implicitly {@link playerInventory.verify|verify} messages.
         * @function encodeDelimited
         * @memberof playerInventory
         * @static
         * @param {IplayerInventory} message playerInventory message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        playerInventory.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a playerInventory message from the specified reader or buffer.
         * @function decode
         * @memberof playerInventory
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {playerInventory} playerInventory
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        playerInventory.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.playerInventory();
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
         * Decodes a playerInventory message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof playerInventory
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {playerInventory} playerInventory
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        playerInventory.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a playerInventory message.
         * @function verify
         * @memberof playerInventory
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        playerInventory.verify = function verify(message) {
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
         * Creates a playerInventory message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof playerInventory
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {playerInventory} playerInventory
         */
        playerInventory.fromObject = function fromObject(object) {
            if (object instanceof $root.playerInventory)
                return object;
            var message = new $root.playerInventory();
            if (object.inventory != null)
                message.inventory = String(object.inventory);
            if (object.type != null)
                message.type = String(object.type);
            return message;
        };
    
        /**
         * Creates a plain object from a playerInventory message. Also converts values to other types if specified.
         * @function toObject
         * @memberof playerInventory
         * @static
         * @param {playerInventory} message playerInventory
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        playerInventory.toObject = function toObject(message, options) {
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
         * Converts this playerInventory to JSON.
         * @function toJSON
         * @memberof playerInventory
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        playerInventory.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return playerInventory;
    })();
    
    $root.playerSlotUpdate = (function() {
    
        /**
         * Properties of a playerSlotUpdate.
         * @exports IplayerSlotUpdate
         * @interface IplayerSlotUpdate
         * @property {number|null} [slot] playerSlotUpdate slot
         * @property {string|null} [type] playerSlotUpdate type
         * @property {string|null} [data] playerSlotUpdate data
         */
    
        /**
         * Constructs a new playerSlotUpdate.
         * @exports playerSlotUpdate
         * @classdesc Represents a playerSlotUpdate.
         * @implements IplayerSlotUpdate
         * @constructor
         * @param {IplayerSlotUpdate=} [properties] Properties to set
         */
        function playerSlotUpdate(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * playerSlotUpdate slot.
         * @member {number} slot
         * @memberof playerSlotUpdate
         * @instance
         */
        playerSlotUpdate.prototype.slot = 0;
    
        /**
         * playerSlotUpdate type.
         * @member {string} type
         * @memberof playerSlotUpdate
         * @instance
         */
        playerSlotUpdate.prototype.type = "";
    
        /**
         * playerSlotUpdate data.
         * @member {string} data
         * @memberof playerSlotUpdate
         * @instance
         */
        playerSlotUpdate.prototype.data = "";
    
        /**
         * Creates a new playerSlotUpdate instance using the specified properties.
         * @function create
         * @memberof playerSlotUpdate
         * @static
         * @param {IplayerSlotUpdate=} [properties] Properties to set
         * @returns {playerSlotUpdate} playerSlotUpdate instance
         */
        playerSlotUpdate.create = function create(properties) {
            return new playerSlotUpdate(properties);
        };
    
        /**
         * Encodes the specified playerSlotUpdate message. Does not implicitly {@link playerSlotUpdate.verify|verify} messages.
         * @function encode
         * @memberof playerSlotUpdate
         * @static
         * @param {IplayerSlotUpdate} message playerSlotUpdate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        playerSlotUpdate.encode = function encode(message, writer) {
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
         * Encodes the specified playerSlotUpdate message, length delimited. Does not implicitly {@link playerSlotUpdate.verify|verify} messages.
         * @function encodeDelimited
         * @memberof playerSlotUpdate
         * @static
         * @param {IplayerSlotUpdate} message playerSlotUpdate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        playerSlotUpdate.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a playerSlotUpdate message from the specified reader or buffer.
         * @function decode
         * @memberof playerSlotUpdate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {playerSlotUpdate} playerSlotUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        playerSlotUpdate.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.playerSlotUpdate();
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
         * Decodes a playerSlotUpdate message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof playerSlotUpdate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {playerSlotUpdate} playerSlotUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        playerSlotUpdate.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a playerSlotUpdate message.
         * @function verify
         * @memberof playerSlotUpdate
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        playerSlotUpdate.verify = function verify(message) {
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
         * Creates a playerSlotUpdate message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof playerSlotUpdate
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {playerSlotUpdate} playerSlotUpdate
         */
        playerSlotUpdate.fromObject = function fromObject(object) {
            if (object instanceof $root.playerSlotUpdate)
                return object;
            var message = new $root.playerSlotUpdate();
            if (object.slot != null)
                message.slot = object.slot | 0;
            if (object.type != null)
                message.type = String(object.type);
            if (object.data != null)
                message.data = String(object.data);
            return message;
        };
    
        /**
         * Creates a plain object from a playerSlotUpdate message. Also converts values to other types if specified.
         * @function toObject
         * @memberof playerSlotUpdate
         * @static
         * @param {playerSlotUpdate} message playerSlotUpdate
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        playerSlotUpdate.toObject = function toObject(message, options) {
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
         * Converts this playerSlotUpdate to JSON.
         * @function toJSON
         * @memberof playerSlotUpdate
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        playerSlotUpdate.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return playerSlotUpdate;
    })();
    
    $root.playerMovementChange = (function() {
    
        /**
         * Properties of a playerMovementChange.
         * @exports IplayerMovementChange
         * @interface IplayerMovementChange
         * @property {string|null} [key] playerMovementChange key
         * @property {number|null} [value] playerMovementChange value
         */
    
        /**
         * Constructs a new playerMovementChange.
         * @exports playerMovementChange
         * @classdesc Represents a playerMovementChange.
         * @implements IplayerMovementChange
         * @constructor
         * @param {IplayerMovementChange=} [properties] Properties to set
         */
        function playerMovementChange(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * playerMovementChange key.
         * @member {string} key
         * @memberof playerMovementChange
         * @instance
         */
        playerMovementChange.prototype.key = "";
    
        /**
         * playerMovementChange value.
         * @member {number} value
         * @memberof playerMovementChange
         * @instance
         */
        playerMovementChange.prototype.value = 0;
    
        /**
         * Creates a new playerMovementChange instance using the specified properties.
         * @function create
         * @memberof playerMovementChange
         * @static
         * @param {IplayerMovementChange=} [properties] Properties to set
         * @returns {playerMovementChange} playerMovementChange instance
         */
        playerMovementChange.create = function create(properties) {
            return new playerMovementChange(properties);
        };
    
        /**
         * Encodes the specified playerMovementChange message. Does not implicitly {@link playerMovementChange.verify|verify} messages.
         * @function encode
         * @memberof playerMovementChange
         * @static
         * @param {IplayerMovementChange} message playerMovementChange message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        playerMovementChange.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.key != null && Object.hasOwnProperty.call(message, "key"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.key);
            if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                writer.uint32(/* id 2, wireType 1 =*/17).double(message.value);
            return writer;
        };
    
        /**
         * Encodes the specified playerMovementChange message, length delimited. Does not implicitly {@link playerMovementChange.verify|verify} messages.
         * @function encodeDelimited
         * @memberof playerMovementChange
         * @static
         * @param {IplayerMovementChange} message playerMovementChange message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        playerMovementChange.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a playerMovementChange message from the specified reader or buffer.
         * @function decode
         * @memberof playerMovementChange
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {playerMovementChange} playerMovementChange
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        playerMovementChange.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.playerMovementChange();
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
         * Decodes a playerMovementChange message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof playerMovementChange
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {playerMovementChange} playerMovementChange
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        playerMovementChange.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a playerMovementChange message.
         * @function verify
         * @memberof playerMovementChange
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        playerMovementChange.verify = function verify(message) {
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
         * Creates a playerMovementChange message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof playerMovementChange
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {playerMovementChange} playerMovementChange
         */
        playerMovementChange.fromObject = function fromObject(object) {
            if (object instanceof $root.playerMovementChange)
                return object;
            var message = new $root.playerMovementChange();
            if (object.key != null)
                message.key = String(object.key);
            if (object.value != null)
                message.value = Number(object.value);
            return message;
        };
    
        /**
         * Creates a plain object from a playerMovementChange message. Also converts values to other types if specified.
         * @function toObject
         * @memberof playerMovementChange
         * @static
         * @param {playerMovementChange} message playerMovementChange
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        playerMovementChange.toObject = function toObject(message, options) {
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
         * Converts this playerMovementChange to JSON.
         * @function toJSON
         * @memberof playerMovementChange
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        playerMovementChange.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return playerMovementChange;
    })();
    
    $root.playerKick = (function() {
    
        /**
         * Properties of a playerKick.
         * @exports IplayerKick
         * @interface IplayerKick
         * @property {string|null} [reason] playerKick reason
         * @property {number|Long|null} [time] playerKick time
         */
    
        /**
         * Constructs a new playerKick.
         * @exports playerKick
         * @classdesc Represents a playerKick.
         * @implements IplayerKick
         * @constructor
         * @param {IplayerKick=} [properties] Properties to set
         */
        function playerKick(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * playerKick reason.
         * @member {string} reason
         * @memberof playerKick
         * @instance
         */
        playerKick.prototype.reason = "";
    
        /**
         * playerKick time.
         * @member {number|Long} time
         * @memberof playerKick
         * @instance
         */
        playerKick.prototype.time = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * Creates a new playerKick instance using the specified properties.
         * @function create
         * @memberof playerKick
         * @static
         * @param {IplayerKick=} [properties] Properties to set
         * @returns {playerKick} playerKick instance
         */
        playerKick.create = function create(properties) {
            return new playerKick(properties);
        };
    
        /**
         * Encodes the specified playerKick message. Does not implicitly {@link playerKick.verify|verify} messages.
         * @function encode
         * @memberof playerKick
         * @static
         * @param {IplayerKick} message playerKick message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        playerKick.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.reason != null && Object.hasOwnProperty.call(message, "reason"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.reason);
            if (message.time != null && Object.hasOwnProperty.call(message, "time"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.time);
            return writer;
        };
    
        /**
         * Encodes the specified playerKick message, length delimited. Does not implicitly {@link playerKick.verify|verify} messages.
         * @function encodeDelimited
         * @memberof playerKick
         * @static
         * @param {IplayerKick} message playerKick message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        playerKick.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a playerKick message from the specified reader or buffer.
         * @function decode
         * @memberof playerKick
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {playerKick} playerKick
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        playerKick.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.playerKick();
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
         * Decodes a playerKick message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof playerKick
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {playerKick} playerKick
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        playerKick.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a playerKick message.
         * @function verify
         * @memberof playerKick
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        playerKick.verify = function verify(message) {
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
         * Creates a playerKick message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof playerKick
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {playerKick} playerKick
         */
        playerKick.fromObject = function fromObject(object) {
            if (object instanceof $root.playerKick)
                return object;
            var message = new $root.playerKick();
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
         * Creates a plain object from a playerKick message. Also converts values to other types if specified.
         * @function toObject
         * @memberof playerKick
         * @static
         * @param {playerKick} message playerKick
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        playerKick.toObject = function toObject(message, options) {
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
         * Converts this playerKick to JSON.
         * @function toJSON
         * @memberof playerKick
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        playerKick.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return playerKick;
    })();
    
    $root.soundPlay = (function() {
    
        /**
         * Properties of a soundPlay.
         * @exports IsoundPlay
         * @interface IsoundPlay
         * @property {string|null} [sound] soundPlay sound
         * @property {number|null} [volume] soundPlay volume
         * @property {number|null} [x] soundPlay x
         * @property {number|null} [y] soundPlay y
         * @property {number|null} [z] soundPlay z
         */
    
        /**
         * Constructs a new soundPlay.
         * @exports soundPlay
         * @classdesc Represents a soundPlay.
         * @implements IsoundPlay
         * @constructor
         * @param {IsoundPlay=} [properties] Properties to set
         */
        function soundPlay(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * soundPlay sound.
         * @member {string} sound
         * @memberof soundPlay
         * @instance
         */
        soundPlay.prototype.sound = "";
    
        /**
         * soundPlay volume.
         * @member {number} volume
         * @memberof soundPlay
         * @instance
         */
        soundPlay.prototype.volume = 0;
    
        /**
         * soundPlay x.
         * @member {number} x
         * @memberof soundPlay
         * @instance
         */
        soundPlay.prototype.x = 0;
    
        /**
         * soundPlay y.
         * @member {number} y
         * @memberof soundPlay
         * @instance
         */
        soundPlay.prototype.y = 0;
    
        /**
         * soundPlay z.
         * @member {number} z
         * @memberof soundPlay
         * @instance
         */
        soundPlay.prototype.z = 0;
    
        /**
         * Creates a new soundPlay instance using the specified properties.
         * @function create
         * @memberof soundPlay
         * @static
         * @param {IsoundPlay=} [properties] Properties to set
         * @returns {soundPlay} soundPlay instance
         */
        soundPlay.create = function create(properties) {
            return new soundPlay(properties);
        };
    
        /**
         * Encodes the specified soundPlay message. Does not implicitly {@link soundPlay.verify|verify} messages.
         * @function encode
         * @memberof soundPlay
         * @static
         * @param {IsoundPlay} message soundPlay message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        soundPlay.encode = function encode(message, writer) {
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
         * Encodes the specified soundPlay message, length delimited. Does not implicitly {@link soundPlay.verify|verify} messages.
         * @function encodeDelimited
         * @memberof soundPlay
         * @static
         * @param {IsoundPlay} message soundPlay message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        soundPlay.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a soundPlay message from the specified reader or buffer.
         * @function decode
         * @memberof soundPlay
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {soundPlay} soundPlay
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        soundPlay.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.soundPlay();
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
         * Decodes a soundPlay message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof soundPlay
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {soundPlay} soundPlay
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        soundPlay.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a soundPlay message.
         * @function verify
         * @memberof soundPlay
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        soundPlay.verify = function verify(message) {
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
         * Creates a soundPlay message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof soundPlay
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {soundPlay} soundPlay
         */
        soundPlay.fromObject = function fromObject(object) {
            if (object instanceof $root.soundPlay)
                return object;
            var message = new $root.soundPlay();
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
         * Creates a plain object from a soundPlay message. Also converts values to other types if specified.
         * @function toObject
         * @memberof soundPlay
         * @static
         * @param {soundPlay} message soundPlay
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        soundPlay.toObject = function toObject(message, options) {
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
         * Converts this soundPlay to JSON.
         * @function toJSON
         * @memberof soundPlay
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        soundPlay.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return soundPlay;
    })();
    
    $root.chatMessage = (function() {
    
        /**
         * Properties of a chatMessage.
         * @exports IchatMessage
         * @interface IchatMessage
         * @property {Object.<string,chatMessage.IchatComponent>|null} [message] chatMessage message
         * @property {number|Long|null} [time] chatMessage time
         */
    
        /**
         * Constructs a new chatMessage.
         * @exports chatMessage
         * @classdesc Represents a chatMessage.
         * @implements IchatMessage
         * @constructor
         * @param {IchatMessage=} [properties] Properties to set
         */
        function chatMessage(properties) {
            this.message = {};
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * chatMessage message.
         * @member {Object.<string,chatMessage.IchatComponent>} message
         * @memberof chatMessage
         * @instance
         */
        chatMessage.prototype.message = $util.emptyObject;
    
        /**
         * chatMessage time.
         * @member {number|Long} time
         * @memberof chatMessage
         * @instance
         */
        chatMessage.prototype.time = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * Creates a new chatMessage instance using the specified properties.
         * @function create
         * @memberof chatMessage
         * @static
         * @param {IchatMessage=} [properties] Properties to set
         * @returns {chatMessage} chatMessage instance
         */
        chatMessage.create = function create(properties) {
            return new chatMessage(properties);
        };
    
        /**
         * Encodes the specified chatMessage message. Does not implicitly {@link chatMessage.verify|verify} messages.
         * @function encode
         * @memberof chatMessage
         * @static
         * @param {IchatMessage} message chatMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        chatMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                for (var keys = Object.keys(message.message), i = 0; i < keys.length; ++i) {
                    writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 0 =*/8).uint32(keys[i]);
                    $root.chatMessage.chatComponent.encode(message.message[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                }
            if (message.time != null && Object.hasOwnProperty.call(message, "time"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.time);
            return writer;
        };
    
        /**
         * Encodes the specified chatMessage message, length delimited. Does not implicitly {@link chatMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof chatMessage
         * @static
         * @param {IchatMessage} message chatMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        chatMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a chatMessage message from the specified reader or buffer.
         * @function decode
         * @memberof chatMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {chatMessage} chatMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        chatMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.chatMessage(), key, value;
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
                            value = $root.chatMessage.chatComponent.decode(reader, reader.uint32());
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
         * Decodes a chatMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof chatMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {chatMessage} chatMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        chatMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a chatMessage message.
         * @function verify
         * @memberof chatMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        chatMessage.verify = function verify(message) {
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
                        var error = $root.chatMessage.chatComponent.verify(message.message[key[i]]);
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
         * Creates a chatMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof chatMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {chatMessage} chatMessage
         */
        chatMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.chatMessage)
                return object;
            var message = new $root.chatMessage();
            if (object.message) {
                if (typeof object.message !== "object")
                    throw TypeError(".chatMessage.message: object expected");
                message.message = {};
                for (var keys = Object.keys(object.message), i = 0; i < keys.length; ++i) {
                    if (typeof object.message[keys[i]] !== "object")
                        throw TypeError(".chatMessage.message: object expected");
                    message.message[keys[i]] = $root.chatMessage.chatComponent.fromObject(object.message[keys[i]]);
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
         * Creates a plain object from a chatMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof chatMessage
         * @static
         * @param {chatMessage} message chatMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        chatMessage.toObject = function toObject(message, options) {
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
                    object.message[keys2[j]] = $root.chatMessage.chatComponent.toObject(message.message[keys2[j]], options);
            }
            if (message.time != null && message.hasOwnProperty("time"))
                if (typeof message.time === "number")
                    object.time = options.longs === String ? String(message.time) : message.time;
                else
                    object.time = options.longs === String ? $util.Long.prototype.toString.call(message.time) : options.longs === Number ? new $util.LongBits(message.time.low >>> 0, message.time.high >>> 0).toNumber(true) : message.time;
            return object;
        };
    
        /**
         * Converts this chatMessage to JSON.
         * @function toJSON
         * @memberof chatMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        chatMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        chatMessage.chatComponent = (function() {
    
            /**
             * Properties of a chatComponent.
             * @memberof chatMessage
             * @interface IchatComponent
             * @property {string|null} [text] chatComponent text
             * @property {string|null} [font] chatComponent font
             * @property {string|null} [color] chatComponent color
             * @property {boolean|null} [linethrough] chatComponent linethrough
             * @property {boolean|null} [underline] chatComponent underline
             */
    
            /**
             * Constructs a new chatComponent.
             * @memberof chatMessage
             * @classdesc Represents a chatComponent.
             * @implements IchatComponent
             * @constructor
             * @param {chatMessage.IchatComponent=} [properties] Properties to set
             */
            function chatComponent(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * chatComponent text.
             * @member {string} text
             * @memberof chatMessage.chatComponent
             * @instance
             */
            chatComponent.prototype.text = "";
    
            /**
             * chatComponent font.
             * @member {string} font
             * @memberof chatMessage.chatComponent
             * @instance
             */
            chatComponent.prototype.font = "";
    
            /**
             * chatComponent color.
             * @member {string} color
             * @memberof chatMessage.chatComponent
             * @instance
             */
            chatComponent.prototype.color = "";
    
            /**
             * chatComponent linethrough.
             * @member {boolean} linethrough
             * @memberof chatMessage.chatComponent
             * @instance
             */
            chatComponent.prototype.linethrough = false;
    
            /**
             * chatComponent underline.
             * @member {boolean} underline
             * @memberof chatMessage.chatComponent
             * @instance
             */
            chatComponent.prototype.underline = false;
    
            /**
             * Creates a new chatComponent instance using the specified properties.
             * @function create
             * @memberof chatMessage.chatComponent
             * @static
             * @param {chatMessage.IchatComponent=} [properties] Properties to set
             * @returns {chatMessage.chatComponent} chatComponent instance
             */
            chatComponent.create = function create(properties) {
                return new chatComponent(properties);
            };
    
            /**
             * Encodes the specified chatComponent message. Does not implicitly {@link chatMessage.chatComponent.verify|verify} messages.
             * @function encode
             * @memberof chatMessage.chatComponent
             * @static
             * @param {chatMessage.IchatComponent} message chatComponent message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            chatComponent.encode = function encode(message, writer) {
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
             * Encodes the specified chatComponent message, length delimited. Does not implicitly {@link chatMessage.chatComponent.verify|verify} messages.
             * @function encodeDelimited
             * @memberof chatMessage.chatComponent
             * @static
             * @param {chatMessage.IchatComponent} message chatComponent message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            chatComponent.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a chatComponent message from the specified reader or buffer.
             * @function decode
             * @memberof chatMessage.chatComponent
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {chatMessage.chatComponent} chatComponent
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            chatComponent.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.chatMessage.chatComponent();
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
             * Decodes a chatComponent message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof chatMessage.chatComponent
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {chatMessage.chatComponent} chatComponent
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            chatComponent.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a chatComponent message.
             * @function verify
             * @memberof chatMessage.chatComponent
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            chatComponent.verify = function verify(message) {
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
             * Creates a chatComponent message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof chatMessage.chatComponent
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {chatMessage.chatComponent} chatComponent
             */
            chatComponent.fromObject = function fromObject(object) {
                if (object instanceof $root.chatMessage.chatComponent)
                    return object;
                var message = new $root.chatMessage.chatComponent();
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
             * Creates a plain object from a chatComponent message. Also converts values to other types if specified.
             * @function toObject
             * @memberof chatMessage.chatComponent
             * @static
             * @param {chatMessage.chatComponent} message chatComponent
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            chatComponent.toObject = function toObject(message, options) {
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
             * Converts this chatComponent to JSON.
             * @function toJSON
             * @memberof chatMessage.chatComponent
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            chatComponent.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return chatComponent;
        })();
    
        return chatMessage;
    })();
    
    $root.tabUpdate = (function() {
    
        /**
         * Properties of a tabUpdate.
         * @exports ItabUpdate
         * @interface ItabUpdate
         * @property {string|null} [message] tabUpdate message
         * @property {number|Long|null} [time] tabUpdate time
         */
    
        /**
         * Constructs a new tabUpdate.
         * @exports tabUpdate
         * @classdesc Represents a tabUpdate.
         * @implements ItabUpdate
         * @constructor
         * @param {ItabUpdate=} [properties] Properties to set
         */
        function tabUpdate(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * tabUpdate message.
         * @member {string} message
         * @memberof tabUpdate
         * @instance
         */
        tabUpdate.prototype.message = "";
    
        /**
         * tabUpdate time.
         * @member {number|Long} time
         * @memberof tabUpdate
         * @instance
         */
        tabUpdate.prototype.time = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * Creates a new tabUpdate instance using the specified properties.
         * @function create
         * @memberof tabUpdate
         * @static
         * @param {ItabUpdate=} [properties] Properties to set
         * @returns {tabUpdate} tabUpdate instance
         */
        tabUpdate.create = function create(properties) {
            return new tabUpdate(properties);
        };
    
        /**
         * Encodes the specified tabUpdate message. Does not implicitly {@link tabUpdate.verify|verify} messages.
         * @function encode
         * @memberof tabUpdate
         * @static
         * @param {ItabUpdate} message tabUpdate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        tabUpdate.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.message);
            if (message.time != null && Object.hasOwnProperty.call(message, "time"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.time);
            return writer;
        };
    
        /**
         * Encodes the specified tabUpdate message, length delimited. Does not implicitly {@link tabUpdate.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tabUpdate
         * @static
         * @param {ItabUpdate} message tabUpdate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        tabUpdate.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a tabUpdate message from the specified reader or buffer.
         * @function decode
         * @memberof tabUpdate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tabUpdate} tabUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        tabUpdate.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tabUpdate();
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
         * Decodes a tabUpdate message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof tabUpdate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tabUpdate} tabUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        tabUpdate.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a tabUpdate message.
         * @function verify
         * @memberof tabUpdate
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        tabUpdate.verify = function verify(message) {
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
         * Creates a tabUpdate message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof tabUpdate
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tabUpdate} tabUpdate
         */
        tabUpdate.fromObject = function fromObject(object) {
            if (object instanceof $root.tabUpdate)
                return object;
            var message = new $root.tabUpdate();
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
         * Creates a plain object from a tabUpdate message. Also converts values to other types if specified.
         * @function toObject
         * @memberof tabUpdate
         * @static
         * @param {tabUpdate} message tabUpdate
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        tabUpdate.toObject = function toObject(message, options) {
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
         * Converts this tabUpdate to JSON.
         * @function toJSON
         * @memberof tabUpdate
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        tabUpdate.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return tabUpdate;
    })();
    
    $root.entityCreate = (function() {
    
        /**
         * Properties of an entityCreate.
         * @exports IentityCreate
         * @interface IentityCreate
         * @property {string|null} [uuid] entityCreate uuid
         * @property {string|null} [data] entityCreate data
         */
    
        /**
         * Constructs a new entityCreate.
         * @exports entityCreate
         * @classdesc Represents an entityCreate.
         * @implements IentityCreate
         * @constructor
         * @param {IentityCreate=} [properties] Properties to set
         */
        function entityCreate(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * entityCreate uuid.
         * @member {string} uuid
         * @memberof entityCreate
         * @instance
         */
        entityCreate.prototype.uuid = "";
    
        /**
         * entityCreate data.
         * @member {string} data
         * @memberof entityCreate
         * @instance
         */
        entityCreate.prototype.data = "";
    
        /**
         * Creates a new entityCreate instance using the specified properties.
         * @function create
         * @memberof entityCreate
         * @static
         * @param {IentityCreate=} [properties] Properties to set
         * @returns {entityCreate} entityCreate instance
         */
        entityCreate.create = function create(properties) {
            return new entityCreate(properties);
        };
    
        /**
         * Encodes the specified entityCreate message. Does not implicitly {@link entityCreate.verify|verify} messages.
         * @function encode
         * @memberof entityCreate
         * @static
         * @param {IentityCreate} message entityCreate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        entityCreate.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uuid != null && Object.hasOwnProperty.call(message, "uuid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.uuid);
            if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.data);
            return writer;
        };
    
        /**
         * Encodes the specified entityCreate message, length delimited. Does not implicitly {@link entityCreate.verify|verify} messages.
         * @function encodeDelimited
         * @memberof entityCreate
         * @static
         * @param {IentityCreate} message entityCreate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        entityCreate.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes an entityCreate message from the specified reader or buffer.
         * @function decode
         * @memberof entityCreate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {entityCreate} entityCreate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        entityCreate.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.entityCreate();
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
         * Decodes an entityCreate message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof entityCreate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {entityCreate} entityCreate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        entityCreate.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies an entityCreate message.
         * @function verify
         * @memberof entityCreate
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        entityCreate.verify = function verify(message) {
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
         * Creates an entityCreate message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof entityCreate
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {entityCreate} entityCreate
         */
        entityCreate.fromObject = function fromObject(object) {
            if (object instanceof $root.entityCreate)
                return object;
            var message = new $root.entityCreate();
            if (object.uuid != null)
                message.uuid = String(object.uuid);
            if (object.data != null)
                message.data = String(object.data);
            return message;
        };
    
        /**
         * Creates a plain object from an entityCreate message. Also converts values to other types if specified.
         * @function toObject
         * @memberof entityCreate
         * @static
         * @param {entityCreate} message entityCreate
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        entityCreate.toObject = function toObject(message, options) {
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
         * Converts this entityCreate to JSON.
         * @function toJSON
         * @memberof entityCreate
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        entityCreate.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return entityCreate;
    })();
    
    $root.entityRemove = (function() {
    
        /**
         * Properties of an entityRemove.
         * @exports IentityRemove
         * @interface IentityRemove
         * @property {string|null} [uuid] entityRemove uuid
         */
    
        /**
         * Constructs a new entityRemove.
         * @exports entityRemove
         * @classdesc Represents an entityRemove.
         * @implements IentityRemove
         * @constructor
         * @param {IentityRemove=} [properties] Properties to set
         */
        function entityRemove(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * entityRemove uuid.
         * @member {string} uuid
         * @memberof entityRemove
         * @instance
         */
        entityRemove.prototype.uuid = "";
    
        /**
         * Creates a new entityRemove instance using the specified properties.
         * @function create
         * @memberof entityRemove
         * @static
         * @param {IentityRemove=} [properties] Properties to set
         * @returns {entityRemove} entityRemove instance
         */
        entityRemove.create = function create(properties) {
            return new entityRemove(properties);
        };
    
        /**
         * Encodes the specified entityRemove message. Does not implicitly {@link entityRemove.verify|verify} messages.
         * @function encode
         * @memberof entityRemove
         * @static
         * @param {IentityRemove} message entityRemove message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        entityRemove.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uuid != null && Object.hasOwnProperty.call(message, "uuid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.uuid);
            return writer;
        };
    
        /**
         * Encodes the specified entityRemove message, length delimited. Does not implicitly {@link entityRemove.verify|verify} messages.
         * @function encodeDelimited
         * @memberof entityRemove
         * @static
         * @param {IentityRemove} message entityRemove message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        entityRemove.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes an entityRemove message from the specified reader or buffer.
         * @function decode
         * @memberof entityRemove
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {entityRemove} entityRemove
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        entityRemove.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.entityRemove();
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
         * Decodes an entityRemove message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof entityRemove
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {entityRemove} entityRemove
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        entityRemove.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies an entityRemove message.
         * @function verify
         * @memberof entityRemove
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        entityRemove.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uuid != null && message.hasOwnProperty("uuid"))
                if (!$util.isString(message.uuid))
                    return "uuid: string expected";
            return null;
        };
    
        /**
         * Creates an entityRemove message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof entityRemove
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {entityRemove} entityRemove
         */
        entityRemove.fromObject = function fromObject(object) {
            if (object instanceof $root.entityRemove)
                return object;
            var message = new $root.entityRemove();
            if (object.uuid != null)
                message.uuid = String(object.uuid);
            return message;
        };
    
        /**
         * Creates a plain object from an entityRemove message. Also converts values to other types if specified.
         * @function toObject
         * @memberof entityRemove
         * @static
         * @param {entityRemove} message entityRemove
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        entityRemove.toObject = function toObject(message, options) {
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
         * Converts this entityRemove to JSON.
         * @function toJSON
         * @memberof entityRemove
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        entityRemove.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return entityRemove;
    })();
    
    $root.entityMove = (function() {
    
        /**
         * Properties of an entityMove.
         * @exports IentityMove
         * @interface IentityMove
         * @property {string|null} [uuid] entityMove uuid
         * @property {number|null} [x] entityMove x
         * @property {number|null} [y] entityMove y
         * @property {number|null} [z] entityMove z
         * @property {number|null} [rotation] entityMove rotation
         */
    
        /**
         * Constructs a new entityMove.
         * @exports entityMove
         * @classdesc Represents an entityMove.
         * @implements IentityMove
         * @constructor
         * @param {IentityMove=} [properties] Properties to set
         */
        function entityMove(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * entityMove uuid.
         * @member {string} uuid
         * @memberof entityMove
         * @instance
         */
        entityMove.prototype.uuid = "";
    
        /**
         * entityMove x.
         * @member {number} x
         * @memberof entityMove
         * @instance
         */
        entityMove.prototype.x = 0;
    
        /**
         * entityMove y.
         * @member {number} y
         * @memberof entityMove
         * @instance
         */
        entityMove.prototype.y = 0;
    
        /**
         * entityMove z.
         * @member {number} z
         * @memberof entityMove
         * @instance
         */
        entityMove.prototype.z = 0;
    
        /**
         * entityMove rotation.
         * @member {number} rotation
         * @memberof entityMove
         * @instance
         */
        entityMove.prototype.rotation = 0;
    
        /**
         * Creates a new entityMove instance using the specified properties.
         * @function create
         * @memberof entityMove
         * @static
         * @param {IentityMove=} [properties] Properties to set
         * @returns {entityMove} entityMove instance
         */
        entityMove.create = function create(properties) {
            return new entityMove(properties);
        };
    
        /**
         * Encodes the specified entityMove message. Does not implicitly {@link entityMove.verify|verify} messages.
         * @function encode
         * @memberof entityMove
         * @static
         * @param {IentityMove} message entityMove message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        entityMove.encode = function encode(message, writer) {
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
            return writer;
        };
    
        /**
         * Encodes the specified entityMove message, length delimited. Does not implicitly {@link entityMove.verify|verify} messages.
         * @function encodeDelimited
         * @memberof entityMove
         * @static
         * @param {IentityMove} message entityMove message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        entityMove.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes an entityMove message from the specified reader or buffer.
         * @function decode
         * @memberof entityMove
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {entityMove} entityMove
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        entityMove.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.entityMove();
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
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes an entityMove message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof entityMove
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {entityMove} entityMove
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        entityMove.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies an entityMove message.
         * @function verify
         * @memberof entityMove
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        entityMove.verify = function verify(message) {
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
            return null;
        };
    
        /**
         * Creates an entityMove message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof entityMove
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {entityMove} entityMove
         */
        entityMove.fromObject = function fromObject(object) {
            if (object instanceof $root.entityMove)
                return object;
            var message = new $root.entityMove();
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
            return message;
        };
    
        /**
         * Creates a plain object from an entityMove message. Also converts values to other types if specified.
         * @function toObject
         * @memberof entityMove
         * @static
         * @param {entityMove} message entityMove
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        entityMove.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.uuid = "";
                object.x = 0;
                object.y = 0;
                object.z = 0;
                object.rotation = 0;
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
            return object;
        };
    
        /**
         * Converts this entityMove to JSON.
         * @function toJSON
         * @memberof entityMove
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        entityMove.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return entityMove;
    })();
    
    $root.entityUpdate = (function() {
    
        /**
         * Properties of an entityUpdate.
         * @exports IentityUpdate
         * @interface IentityUpdate
         * @property {string|null} [uuid] entityUpdate uuid
         * @property {string|null} [key] entityUpdate key
         * @property {string|null} [value] entityUpdate value
         */
    
        /**
         * Constructs a new entityUpdate.
         * @exports entityUpdate
         * @classdesc Represents an entityUpdate.
         * @implements IentityUpdate
         * @constructor
         * @param {IentityUpdate=} [properties] Properties to set
         */
        function entityUpdate(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * entityUpdate uuid.
         * @member {string} uuid
         * @memberof entityUpdate
         * @instance
         */
        entityUpdate.prototype.uuid = "";
    
        /**
         * entityUpdate key.
         * @member {string} key
         * @memberof entityUpdate
         * @instance
         */
        entityUpdate.prototype.key = "";
    
        /**
         * entityUpdate value.
         * @member {string} value
         * @memberof entityUpdate
         * @instance
         */
        entityUpdate.prototype.value = "";
    
        /**
         * Creates a new entityUpdate instance using the specified properties.
         * @function create
         * @memberof entityUpdate
         * @static
         * @param {IentityUpdate=} [properties] Properties to set
         * @returns {entityUpdate} entityUpdate instance
         */
        entityUpdate.create = function create(properties) {
            return new entityUpdate(properties);
        };
    
        /**
         * Encodes the specified entityUpdate message. Does not implicitly {@link entityUpdate.verify|verify} messages.
         * @function encode
         * @memberof entityUpdate
         * @static
         * @param {IentityUpdate} message entityUpdate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        entityUpdate.encode = function encode(message, writer) {
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
         * Encodes the specified entityUpdate message, length delimited. Does not implicitly {@link entityUpdate.verify|verify} messages.
         * @function encodeDelimited
         * @memberof entityUpdate
         * @static
         * @param {IentityUpdate} message entityUpdate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        entityUpdate.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes an entityUpdate message from the specified reader or buffer.
         * @function decode
         * @memberof entityUpdate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {entityUpdate} entityUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        entityUpdate.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.entityUpdate();
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
         * Decodes an entityUpdate message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof entityUpdate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {entityUpdate} entityUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        entityUpdate.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies an entityUpdate message.
         * @function verify
         * @memberof entityUpdate
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        entityUpdate.verify = function verify(message) {
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
         * Creates an entityUpdate message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof entityUpdate
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {entityUpdate} entityUpdate
         */
        entityUpdate.fromObject = function fromObject(object) {
            if (object instanceof $root.entityUpdate)
                return object;
            var message = new $root.entityUpdate();
            if (object.uuid != null)
                message.uuid = String(object.uuid);
            if (object.key != null)
                message.key = String(object.key);
            if (object.value != null)
                message.value = String(object.value);
            return message;
        };
    
        /**
         * Creates a plain object from an entityUpdate message. Also converts values to other types if specified.
         * @function toObject
         * @memberof entityUpdate
         * @static
         * @param {entityUpdate} message entityUpdate
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        entityUpdate.toObject = function toObject(message, options) {
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
         * Converts this entityUpdate to JSON.
         * @function toJSON
         * @memberof entityUpdate
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        entityUpdate.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return entityUpdate;
    })();
    
    $root.entityAnimate = (function() {
    
        /**
         * Properties of an entityAnimate.
         * @exports IentityAnimate
         * @interface IentityAnimate
         * @property {string|null} [uuid] entityAnimate uuid
         * @property {string|null} [animation] entityAnimate animation
         * @property {number|null} [time] entityAnimate time
         * @property {boolean|null} [replace] entityAnimate replace
         */
    
        /**
         * Constructs a new entityAnimate.
         * @exports entityAnimate
         * @classdesc Represents an entityAnimate.
         * @implements IentityAnimate
         * @constructor
         * @param {IentityAnimate=} [properties] Properties to set
         */
        function entityAnimate(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * entityAnimate uuid.
         * @member {string} uuid
         * @memberof entityAnimate
         * @instance
         */
        entityAnimate.prototype.uuid = "";
    
        /**
         * entityAnimate animation.
         * @member {string} animation
         * @memberof entityAnimate
         * @instance
         */
        entityAnimate.prototype.animation = "";
    
        /**
         * entityAnimate time.
         * @member {number} time
         * @memberof entityAnimate
         * @instance
         */
        entityAnimate.prototype.time = 0;
    
        /**
         * entityAnimate replace.
         * @member {boolean} replace
         * @memberof entityAnimate
         * @instance
         */
        entityAnimate.prototype.replace = false;
    
        /**
         * Creates a new entityAnimate instance using the specified properties.
         * @function create
         * @memberof entityAnimate
         * @static
         * @param {IentityAnimate=} [properties] Properties to set
         * @returns {entityAnimate} entityAnimate instance
         */
        entityAnimate.create = function create(properties) {
            return new entityAnimate(properties);
        };
    
        /**
         * Encodes the specified entityAnimate message. Does not implicitly {@link entityAnimate.verify|verify} messages.
         * @function encode
         * @memberof entityAnimate
         * @static
         * @param {IentityAnimate} message entityAnimate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        entityAnimate.encode = function encode(message, writer) {
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
         * Encodes the specified entityAnimate message, length delimited. Does not implicitly {@link entityAnimate.verify|verify} messages.
         * @function encodeDelimited
         * @memberof entityAnimate
         * @static
         * @param {IentityAnimate} message entityAnimate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        entityAnimate.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes an entityAnimate message from the specified reader or buffer.
         * @function decode
         * @memberof entityAnimate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {entityAnimate} entityAnimate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        entityAnimate.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.entityAnimate();
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
         * Decodes an entityAnimate message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof entityAnimate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {entityAnimate} entityAnimate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        entityAnimate.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies an entityAnimate message.
         * @function verify
         * @memberof entityAnimate
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        entityAnimate.verify = function verify(message) {
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
         * Creates an entityAnimate message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof entityAnimate
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {entityAnimate} entityAnimate
         */
        entityAnimate.fromObject = function fromObject(object) {
            if (object instanceof $root.entityAnimate)
                return object;
            var message = new $root.entityAnimate();
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
         * Creates a plain object from an entityAnimate message. Also converts values to other types if specified.
         * @function toObject
         * @memberof entityAnimate
         * @static
         * @param {entityAnimate} message entityAnimate
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        entityAnimate.toObject = function toObject(message, options) {
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
         * Converts this entityAnimate to JSON.
         * @function toJSON
         * @memberof entityAnimate
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        entityAnimate.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return entityAnimate;
    })();
    
    $root.worldBlockUpdate = (function() {
    
        /**
         * Properties of a worldBlockUpdate.
         * @exports IworldBlockUpdate
         * @interface IworldBlockUpdate
         * @property {number|null} [x] worldBlockUpdate x
         * @property {number|null} [y] worldBlockUpdate y
         * @property {number|null} [z] worldBlockUpdate z
         * @property {number|null} [id] worldBlockUpdate id
         */
    
        /**
         * Constructs a new worldBlockUpdate.
         * @exports worldBlockUpdate
         * @classdesc Represents a worldBlockUpdate.
         * @implements IworldBlockUpdate
         * @constructor
         * @param {IworldBlockUpdate=} [properties] Properties to set
         */
        function worldBlockUpdate(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * worldBlockUpdate x.
         * @member {number} x
         * @memberof worldBlockUpdate
         * @instance
         */
        worldBlockUpdate.prototype.x = 0;
    
        /**
         * worldBlockUpdate y.
         * @member {number} y
         * @memberof worldBlockUpdate
         * @instance
         */
        worldBlockUpdate.prototype.y = 0;
    
        /**
         * worldBlockUpdate z.
         * @member {number} z
         * @memberof worldBlockUpdate
         * @instance
         */
        worldBlockUpdate.prototype.z = 0;
    
        /**
         * worldBlockUpdate id.
         * @member {number} id
         * @memberof worldBlockUpdate
         * @instance
         */
        worldBlockUpdate.prototype.id = 0;
    
        /**
         * Creates a new worldBlockUpdate instance using the specified properties.
         * @function create
         * @memberof worldBlockUpdate
         * @static
         * @param {IworldBlockUpdate=} [properties] Properties to set
         * @returns {worldBlockUpdate} worldBlockUpdate instance
         */
        worldBlockUpdate.create = function create(properties) {
            return new worldBlockUpdate(properties);
        };
    
        /**
         * Encodes the specified worldBlockUpdate message. Does not implicitly {@link worldBlockUpdate.verify|verify} messages.
         * @function encode
         * @memberof worldBlockUpdate
         * @static
         * @param {IworldBlockUpdate} message worldBlockUpdate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        worldBlockUpdate.encode = function encode(message, writer) {
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
         * Encodes the specified worldBlockUpdate message, length delimited. Does not implicitly {@link worldBlockUpdate.verify|verify} messages.
         * @function encodeDelimited
         * @memberof worldBlockUpdate
         * @static
         * @param {IworldBlockUpdate} message worldBlockUpdate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        worldBlockUpdate.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a worldBlockUpdate message from the specified reader or buffer.
         * @function decode
         * @memberof worldBlockUpdate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {worldBlockUpdate} worldBlockUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        worldBlockUpdate.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.worldBlockUpdate();
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
         * Decodes a worldBlockUpdate message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof worldBlockUpdate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {worldBlockUpdate} worldBlockUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        worldBlockUpdate.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a worldBlockUpdate message.
         * @function verify
         * @memberof worldBlockUpdate
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        worldBlockUpdate.verify = function verify(message) {
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
         * Creates a worldBlockUpdate message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof worldBlockUpdate
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {worldBlockUpdate} worldBlockUpdate
         */
        worldBlockUpdate.fromObject = function fromObject(object) {
            if (object instanceof $root.worldBlockUpdate)
                return object;
            var message = new $root.worldBlockUpdate();
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
         * Creates a plain object from a worldBlockUpdate message. Also converts values to other types if specified.
         * @function toObject
         * @memberof worldBlockUpdate
         * @static
         * @param {worldBlockUpdate} message worldBlockUpdate
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        worldBlockUpdate.toObject = function toObject(message, options) {
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
         * Converts this worldBlockUpdate to JSON.
         * @function toJSON
         * @memberof worldBlockUpdate
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        worldBlockUpdate.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return worldBlockUpdate;
    })();
    
    $root.worldChunk = (function() {
    
        /**
         * Properties of a worldChunk.
         * @exports IworldChunk
         * @interface IworldChunk
         * @property {number|null} [x] worldChunk x
         * @property {number|null} [y] worldChunk y
         * @property {number|null} [z] worldChunk z
         * @property {Uint8Array|null} [data] worldChunk data
         * @property {boolean|null} [type] worldChunk type
         * @property {boolean|null} [compressed] worldChunk compressed
         */
    
        /**
         * Constructs a new worldChunk.
         * @exports worldChunk
         * @classdesc Represents a worldChunk.
         * @implements IworldChunk
         * @constructor
         * @param {IworldChunk=} [properties] Properties to set
         */
        function worldChunk(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * worldChunk x.
         * @member {number} x
         * @memberof worldChunk
         * @instance
         */
        worldChunk.prototype.x = 0;
    
        /**
         * worldChunk y.
         * @member {number} y
         * @memberof worldChunk
         * @instance
         */
        worldChunk.prototype.y = 0;
    
        /**
         * worldChunk z.
         * @member {number} z
         * @memberof worldChunk
         * @instance
         */
        worldChunk.prototype.z = 0;
    
        /**
         * worldChunk data.
         * @member {Uint8Array} data
         * @memberof worldChunk
         * @instance
         */
        worldChunk.prototype.data = $util.newBuffer([]);
    
        /**
         * worldChunk type.
         * @member {boolean} type
         * @memberof worldChunk
         * @instance
         */
        worldChunk.prototype.type = false;
    
        /**
         * worldChunk compressed.
         * @member {boolean} compressed
         * @memberof worldChunk
         * @instance
         */
        worldChunk.prototype.compressed = false;
    
        /**
         * Creates a new worldChunk instance using the specified properties.
         * @function create
         * @memberof worldChunk
         * @static
         * @param {IworldChunk=} [properties] Properties to set
         * @returns {worldChunk} worldChunk instance
         */
        worldChunk.create = function create(properties) {
            return new worldChunk(properties);
        };
    
        /**
         * Encodes the specified worldChunk message. Does not implicitly {@link worldChunk.verify|verify} messages.
         * @function encode
         * @memberof worldChunk
         * @static
         * @param {IworldChunk} message worldChunk message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        worldChunk.encode = function encode(message, writer) {
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
         * Encodes the specified worldChunk message, length delimited. Does not implicitly {@link worldChunk.verify|verify} messages.
         * @function encodeDelimited
         * @memberof worldChunk
         * @static
         * @param {IworldChunk} message worldChunk message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        worldChunk.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a worldChunk message from the specified reader or buffer.
         * @function decode
         * @memberof worldChunk
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {worldChunk} worldChunk
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        worldChunk.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.worldChunk();
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
         * Decodes a worldChunk message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof worldChunk
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {worldChunk} worldChunk
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        worldChunk.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a worldChunk message.
         * @function verify
         * @memberof worldChunk
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        worldChunk.verify = function verify(message) {
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
         * Creates a worldChunk message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof worldChunk
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {worldChunk} worldChunk
         */
        worldChunk.fromObject = function fromObject(object) {
            if (object instanceof $root.worldChunk)
                return object;
            var message = new $root.worldChunk();
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
         * Creates a plain object from a worldChunk message. Also converts values to other types if specified.
         * @function toObject
         * @memberof worldChunk
         * @static
         * @param {worldChunk} message worldChunk
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        worldChunk.toObject = function toObject(message, options) {
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
         * Converts this worldChunk to JSON.
         * @function toJSON
         * @memberof worldChunk
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        worldChunk.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return worldChunk;
    })();
    
    $root.registryUpdate = (function() {
    
        /**
         * Properties of a registryUpdate.
         * @exports IregistryUpdate
         * @interface IregistryUpdate
         * @property {string|null} [itemsDef] registryUpdate itemsDef
         * @property {string|null} [blocksDef] registryUpdate blocksDef
         */
    
        /**
         * Constructs a new registryUpdate.
         * @exports registryUpdate
         * @classdesc Represents a registryUpdate.
         * @implements IregistryUpdate
         * @constructor
         * @param {IregistryUpdate=} [properties] Properties to set
         */
        function registryUpdate(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * registryUpdate itemsDef.
         * @member {string} itemsDef
         * @memberof registryUpdate
         * @instance
         */
        registryUpdate.prototype.itemsDef = "";
    
        /**
         * registryUpdate blocksDef.
         * @member {string} blocksDef
         * @memberof registryUpdate
         * @instance
         */
        registryUpdate.prototype.blocksDef = "";
    
        /**
         * Creates a new registryUpdate instance using the specified properties.
         * @function create
         * @memberof registryUpdate
         * @static
         * @param {IregistryUpdate=} [properties] Properties to set
         * @returns {registryUpdate} registryUpdate instance
         */
        registryUpdate.create = function create(properties) {
            return new registryUpdate(properties);
        };
    
        /**
         * Encodes the specified registryUpdate message. Does not implicitly {@link registryUpdate.verify|verify} messages.
         * @function encode
         * @memberof registryUpdate
         * @static
         * @param {IregistryUpdate} message registryUpdate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        registryUpdate.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.itemsDef != null && Object.hasOwnProperty.call(message, "itemsDef"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.itemsDef);
            if (message.blocksDef != null && Object.hasOwnProperty.call(message, "blocksDef"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.blocksDef);
            return writer;
        };
    
        /**
         * Encodes the specified registryUpdate message, length delimited. Does not implicitly {@link registryUpdate.verify|verify} messages.
         * @function encodeDelimited
         * @memberof registryUpdate
         * @static
         * @param {IregistryUpdate} message registryUpdate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        registryUpdate.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a registryUpdate message from the specified reader or buffer.
         * @function decode
         * @memberof registryUpdate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {registryUpdate} registryUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        registryUpdate.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.registryUpdate();
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
         * Decodes a registryUpdate message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof registryUpdate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {registryUpdate} registryUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        registryUpdate.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a registryUpdate message.
         * @function verify
         * @memberof registryUpdate
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        registryUpdate.verify = function verify(message) {
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
         * Creates a registryUpdate message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof registryUpdate
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {registryUpdate} registryUpdate
         */
        registryUpdate.fromObject = function fromObject(object) {
            if (object instanceof $root.registryUpdate)
                return object;
            var message = new $root.registryUpdate();
            if (object.itemsDef != null)
                message.itemsDef = String(object.itemsDef);
            if (object.blocksDef != null)
                message.blocksDef = String(object.blocksDef);
            return message;
        };
    
        /**
         * Creates a plain object from a registryUpdate message. Also converts values to other types if specified.
         * @function toObject
         * @memberof registryUpdate
         * @static
         * @param {registryUpdate} message registryUpdate
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        registryUpdate.toObject = function toObject(message, options) {
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
         * Converts this registryUpdate to JSON.
         * @function toJSON
         * @memberof registryUpdate
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        registryUpdate.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return registryUpdate;
    })();

    return $root;
});
