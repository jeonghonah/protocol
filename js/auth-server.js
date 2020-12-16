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
         * @property {string|null} [username] AuthResponce username
         * @property {number|null} [protocol] AuthResponce protocol
         * @property {boolean|null} [mobile] AuthResponce mobile
         * @property {string|null} [client] AuthResponce client
         * @property {string|null} [uuid] AuthResponce uuid
         * @property {string|null} [secret] AuthResponce secret
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
         * AuthResponce username.
         * @member {string} username
         * @memberof AuthResponce
         * @instance
         */
        AuthResponce.prototype.username = "";
    
        /**
         * AuthResponce protocol.
         * @member {number} protocol
         * @memberof AuthResponce
         * @instance
         */
        AuthResponce.prototype.protocol = 0;
    
        /**
         * AuthResponce mobile.
         * @member {boolean} mobile
         * @memberof AuthResponce
         * @instance
         */
        AuthResponce.prototype.mobile = false;
    
        /**
         * AuthResponce client.
         * @member {string} client
         * @memberof AuthResponce
         * @instance
         */
        AuthResponce.prototype.client = "";
    
        /**
         * AuthResponce uuid.
         * @member {string} uuid
         * @memberof AuthResponce
         * @instance
         */
        AuthResponce.prototype.uuid = "";
    
        /**
         * AuthResponce secret.
         * @member {string} secret
         * @memberof AuthResponce
         * @instance
         */
        AuthResponce.prototype.secret = "";
    
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

    return $root;
});
