import * as $protobuf from "protobufjs";
/** Properties of a LoginRequest. */
export interface ILoginRequest {

    /** LoginRequest name */
    name?: (string|null);

    /** LoginRequest protocol */
    protocol?: (number|null);

    /** LoginRequest onlinePlayers */
    onlinePlayers?: (number|null);

    /** LoginRequest maxPlayers */
    maxPlayers?: (number|null);

    /** LoginRequest motd */
    motd?: (string|null);

    /** LoginRequest software */
    software?: (string|null);

    /** LoginRequest auth */
    auth?: (boolean|null);

    /** LoginRequest secret */
    secret?: (string|null);

    /** LoginRequest isProxy */
    isProxy?: (boolean|null);

    /** LoginRequest protocolRev */
    protocolRev?: (number|null);
}

/** Represents a LoginRequest. */
export class LoginRequest implements ILoginRequest {

    /**
     * Constructs a new LoginRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: ILoginRequest);

    /** LoginRequest name. */
    public name: string;

    /** LoginRequest protocol. */
    public protocol: number;

    /** LoginRequest onlinePlayers. */
    public onlinePlayers: number;

    /** LoginRequest maxPlayers. */
    public maxPlayers: number;

    /** LoginRequest motd. */
    public motd: string;

    /** LoginRequest software. */
    public software: string;

    /** LoginRequest auth. */
    public auth: boolean;

    /** LoginRequest secret. */
    public secret: string;

    /** LoginRequest isProxy. */
    public isProxy: boolean;

    /** LoginRequest protocolRev. */
    public protocolRev: number;

    /**
     * Creates a new LoginRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LoginRequest instance
     */
    public static create(properties?: ILoginRequest): LoginRequest;

    /**
     * Encodes the specified LoginRequest message. Does not implicitly {@link LoginRequest.verify|verify} messages.
     * @param message LoginRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ILoginRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified LoginRequest message, length delimited. Does not implicitly {@link LoginRequest.verify|verify} messages.
     * @param message LoginRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ILoginRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LoginRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns LoginRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LoginRequest;

    /**
     * Decodes a LoginRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns LoginRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LoginRequest;

    /**
     * Verifies a LoginRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a LoginRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns LoginRequest
     */
    public static fromObject(object: { [k: string]: any }): LoginRequest;

    /**
     * Creates a plain object from a LoginRequest message. Also converts values to other types if specified.
     * @param message LoginRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: LoginRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this LoginRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an AuthResponce. */
export interface IAuthResponce {

    /** AuthResponce responce */
    responce?: (number|null);

    /** AuthResponce message */
    message?: (string|null);

    /** AuthResponce proxyVersion */
    proxyVersion?: (number|null);

    /** AuthResponce proxyVersionRev */
    proxyVersionRev?: (number|null);

    /** AuthResponce protocol */
    protocol?: (number|null);

    /** AuthResponce usePacketTranslation */
    usePacketTranslation?: (boolean|null);

    /** AuthResponce type */
    type?: (string|null);
}

/** Represents an AuthResponce. */
export class AuthResponce implements IAuthResponce {

    /**
     * Constructs a new AuthResponce.
     * @param [properties] Properties to set
     */
    constructor(properties?: IAuthResponce);

    /** AuthResponce responce. */
    public responce: number;

    /** AuthResponce message. */
    public message: string;

    /** AuthResponce proxyVersion. */
    public proxyVersion: number;

    /** AuthResponce proxyVersionRev. */
    public proxyVersionRev: number;

    /** AuthResponce protocol. */
    public protocol: number;

    /** AuthResponce usePacketTranslation. */
    public usePacketTranslation: boolean;

    /** AuthResponce type. */
    public type: string;

    /**
     * Creates a new AuthResponce instance using the specified properties.
     * @param [properties] Properties to set
     * @returns AuthResponce instance
     */
    public static create(properties?: IAuthResponce): AuthResponce;

    /**
     * Encodes the specified AuthResponce message. Does not implicitly {@link AuthResponce.verify|verify} messages.
     * @param message AuthResponce message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IAuthResponce, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified AuthResponce message, length delimited. Does not implicitly {@link AuthResponce.verify|verify} messages.
     * @param message AuthResponce message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IAuthResponce, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an AuthResponce message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns AuthResponce
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AuthResponce;

    /**
     * Decodes an AuthResponce message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns AuthResponce
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AuthResponce;

    /**
     * Verifies an AuthResponce message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an AuthResponce message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns AuthResponce
     */
    public static fromObject(object: { [k: string]: any }): AuthResponce;

    /**
     * Creates a plain object from an AuthResponce message. Also converts values to other types if specified.
     * @param message AuthResponce
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: AuthResponce, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this AuthResponce to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Data. */
export interface IData {

    /** Data message */
    message?: (Uint8Array|null);
}

/** Represents a Data. */
export class Data implements IData {

    /**
     * Constructs a new Data.
     * @param [properties] Properties to set
     */
    constructor(properties?: IData);

    /** Data message. */
    public message: Uint8Array;

    /**
     * Creates a new Data instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Data instance
     */
    public static create(properties?: IData): Data;

    /**
     * Encodes the specified Data message. Does not implicitly {@link Data.verify|verify} messages.
     * @param message Data message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IData, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Data message, length delimited. Does not implicitly {@link Data.verify|verify} messages.
     * @param message Data message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IData, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Data message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Data
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Data;

    /**
     * Decodes a Data message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Data
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Data;

    /**
     * Verifies a Data message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Data message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Data
     */
    public static fromObject(object: { [k: string]: any }): Data;

    /**
     * Creates a plain object from a Data message. Also converts values to other types if specified.
     * @param message Data
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Data, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Data to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a VoxelSrvMessage. */
export interface IVoxelSrvMessage {

    /** VoxelSrvMessage message */
    message?: (Uint8Array|null);
}

/** Represents a VoxelSrvMessage. */
export class VoxelSrvMessage implements IVoxelSrvMessage {

    /**
     * Constructs a new VoxelSrvMessage.
     * @param [properties] Properties to set
     */
    constructor(properties?: IVoxelSrvMessage);

    /** VoxelSrvMessage message. */
    public message: Uint8Array;

    /**
     * Creates a new VoxelSrvMessage instance using the specified properties.
     * @param [properties] Properties to set
     * @returns VoxelSrvMessage instance
     */
    public static create(properties?: IVoxelSrvMessage): VoxelSrvMessage;

    /**
     * Encodes the specified VoxelSrvMessage message. Does not implicitly {@link VoxelSrvMessage.verify|verify} messages.
     * @param message VoxelSrvMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IVoxelSrvMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified VoxelSrvMessage message, length delimited. Does not implicitly {@link VoxelSrvMessage.verify|verify} messages.
     * @param message VoxelSrvMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IVoxelSrvMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a VoxelSrvMessage message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns VoxelSrvMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): VoxelSrvMessage;

    /**
     * Decodes a VoxelSrvMessage message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns VoxelSrvMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): VoxelSrvMessage;

    /**
     * Verifies a VoxelSrvMessage message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a VoxelSrvMessage message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns VoxelSrvMessage
     */
    public static fromObject(object: { [k: string]: any }): VoxelSrvMessage;

    /**
     * Creates a plain object from a VoxelSrvMessage message. Also converts values to other types if specified.
     * @param message VoxelSrvMessage
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: VoxelSrvMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this VoxelSrvMessage to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Disconnect. */
export interface IDisconnect {

    /** Disconnect reason */
    reason?: (string|null);
}

/** Represents a Disconnect. */
export class Disconnect implements IDisconnect {

    /**
     * Constructs a new Disconnect.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDisconnect);

    /** Disconnect reason. */
    public reason: string;

    /**
     * Creates a new Disconnect instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Disconnect instance
     */
    public static create(properties?: IDisconnect): Disconnect;

    /**
     * Encodes the specified Disconnect message. Does not implicitly {@link Disconnect.verify|verify} messages.
     * @param message Disconnect message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDisconnect, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Disconnect message, length delimited. Does not implicitly {@link Disconnect.verify|verify} messages.
     * @param message Disconnect message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDisconnect, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Disconnect message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Disconnect
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Disconnect;

    /**
     * Decodes a Disconnect message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Disconnect
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Disconnect;

    /**
     * Verifies a Disconnect message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Disconnect message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Disconnect
     */
    public static fromObject(object: { [k: string]: any }): Disconnect;

    /**
     * Creates a plain object from a Disconnect message. Also converts values to other types if specified.
     * @param message Disconnect
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Disconnect, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Disconnect to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ProxyMessage. */
export interface IProxyMessage {

    /** ProxyMessage message */
    message?: (Uint8Array|null);
}

/** Represents a ProxyMessage. */
export class ProxyMessage implements IProxyMessage {

    /**
     * Constructs a new ProxyMessage.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProxyMessage);

    /** ProxyMessage message. */
    public message: Uint8Array;

    /**
     * Creates a new ProxyMessage instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProxyMessage instance
     */
    public static create(properties?: IProxyMessage): ProxyMessage;

    /**
     * Encodes the specified ProxyMessage message. Does not implicitly {@link ProxyMessage.verify|verify} messages.
     * @param message ProxyMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProxyMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ProxyMessage message, length delimited. Does not implicitly {@link ProxyMessage.verify|verify} messages.
     * @param message ProxyMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProxyMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProxyMessage message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProxyMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProxyMessage;

    /**
     * Decodes a ProxyMessage message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ProxyMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ProxyMessage;

    /**
     * Verifies a ProxyMessage message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ProxyMessage message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ProxyMessage
     */
    public static fromObject(object: { [k: string]: any }): ProxyMessage;

    /**
     * Creates a plain object from a ProxyMessage message. Also converts values to other types if specified.
     * @param message ProxyMessage
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ProxyMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ProxyMessage to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ChatComponentType. */
export interface IChatComponentType {

    /** ChatComponentType text */
    text?: (string|null);

    /** ChatComponentType font */
    font?: (string|null);

    /** ChatComponentType color */
    color?: (string|null);

    /** ChatComponentType linethrough */
    linethrough?: (boolean|null);

    /** ChatComponentType underline */
    underline?: (boolean|null);

    /** ChatComponentType url */
    url?: (string|null);
}

/** Represents a ChatComponentType. */
export class ChatComponentType implements IChatComponentType {

    /**
     * Constructs a new ChatComponentType.
     * @param [properties] Properties to set
     */
    constructor(properties?: IChatComponentType);

    /** ChatComponentType text. */
    public text: string;

    /** ChatComponentType font. */
    public font: string;

    /** ChatComponentType color. */
    public color: string;

    /** ChatComponentType linethrough. */
    public linethrough: boolean;

    /** ChatComponentType underline. */
    public underline: boolean;

    /** ChatComponentType url. */
    public url: string;

    /**
     * Creates a new ChatComponentType instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ChatComponentType instance
     */
    public static create(properties?: IChatComponentType): ChatComponentType;

    /**
     * Encodes the specified ChatComponentType message. Does not implicitly {@link ChatComponentType.verify|verify} messages.
     * @param message ChatComponentType message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IChatComponentType, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ChatComponentType message, length delimited. Does not implicitly {@link ChatComponentType.verify|verify} messages.
     * @param message ChatComponentType message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IChatComponentType, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ChatComponentType message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ChatComponentType
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ChatComponentType;

    /**
     * Decodes a ChatComponentType message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ChatComponentType
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ChatComponentType;

    /**
     * Verifies a ChatComponentType message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ChatComponentType message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ChatComponentType
     */
    public static fromObject(object: { [k: string]: any }): ChatComponentType;

    /**
     * Creates a plain object from a ChatComponentType message. Also converts values to other types if specified.
     * @param message ChatComponentType
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ChatComponentType, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ChatComponentType to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a BasicChatComponentType. */
export interface IBasicChatComponentType {

    /** BasicChatComponentType text */
    text?: (string|null);

    /** BasicChatComponentType font */
    font?: (string|null);

    /** BasicChatComponentType color */
    color?: (string|null);

    /** BasicChatComponentType linethrough */
    linethrough?: (boolean|null);

    /** BasicChatComponentType underline */
    underline?: (boolean|null);
}

/** Represents a BasicChatComponentType. */
export class BasicChatComponentType implements IBasicChatComponentType {

    /**
     * Constructs a new BasicChatComponentType.
     * @param [properties] Properties to set
     */
    constructor(properties?: IBasicChatComponentType);

    /** BasicChatComponentType text. */
    public text: string;

    /** BasicChatComponentType font. */
    public font: string;

    /** BasicChatComponentType color. */
    public color: string;

    /** BasicChatComponentType linethrough. */
    public linethrough: boolean;

    /** BasicChatComponentType underline. */
    public underline: boolean;

    /**
     * Creates a new BasicChatComponentType instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BasicChatComponentType instance
     */
    public static create(properties?: IBasicChatComponentType): BasicChatComponentType;

    /**
     * Encodes the specified BasicChatComponentType message. Does not implicitly {@link BasicChatComponentType.verify|verify} messages.
     * @param message BasicChatComponentType message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IBasicChatComponentType, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified BasicChatComponentType message, length delimited. Does not implicitly {@link BasicChatComponentType.verify|verify} messages.
     * @param message BasicChatComponentType message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IBasicChatComponentType, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BasicChatComponentType message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns BasicChatComponentType
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BasicChatComponentType;

    /**
     * Decodes a BasicChatComponentType message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns BasicChatComponentType
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BasicChatComponentType;

    /**
     * Verifies a BasicChatComponentType message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a BasicChatComponentType message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns BasicChatComponentType
     */
    public static fromObject(object: { [k: string]: any }): BasicChatComponentType;

    /**
     * Creates a plain object from a BasicChatComponentType message. Also converts values to other types if specified.
     * @param message BasicChatComponentType
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: BasicChatComponentType, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this BasicChatComponentType to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an Item. */
export interface IItem {

    /** Item id */
    id?: (string|null);

    /** Item count */
    count?: (number|null);

    /** Item damage */
    damage?: (number|null);

    /** Item name */
    name?: (IBasicChatComponentType[]|null);
}

/** Represents an Item. */
export class Item implements IItem {

    /**
     * Constructs a new Item.
     * @param [properties] Properties to set
     */
    constructor(properties?: IItem);

    /** Item id. */
    public id: string;

    /** Item count. */
    public count: number;

    /** Item damage. */
    public damage: number;

    /** Item name. */
    public name: IBasicChatComponentType[];

    /**
     * Creates a new Item instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Item instance
     */
    public static create(properties?: IItem): Item;

    /**
     * Encodes the specified Item message. Does not implicitly {@link Item.verify|verify} messages.
     * @param message Item message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IItem, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Item message, length delimited. Does not implicitly {@link Item.verify|verify} messages.
     * @param message Item message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IItem, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an Item message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Item
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Item;

    /**
     * Decodes an Item message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Item
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Item;

    /**
     * Verifies an Item message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an Item message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Item
     */
    public static fromObject(object: { [k: string]: any }): Item;

    /**
     * Creates a plain object from an Item message. Also converts values to other types if specified.
     * @param message Item
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Item, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Item to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** InventoryType enum. */
export enum InventoryType {
    MAIN = 0,
    ARMOR = 1,
    CRAFT = 2,
    HOOK = 3,
    TEMP = 4
}

/** ContainerType enum. */
export enum ContainerType {
    PLAYER = 0,
    CHEST = 1,
    CRAFTING = 2,
    FURNACE = 3
}

/** MouseClickType enum. */
export enum MouseClickType {
    LEFT = 0,
    RIGHT = 1,
    MIDDLE = 2,
    SELECT = 3
}

/** Represents an ItemDef. */
export class ItemDef implements IItemDef {

    /**
     * Constructs a new ItemDef.
     * @param [properties] Properties to set
     */
    constructor(properties?: IItemDef);

    /** ItemDef id. */
    public id: string;

    /** ItemDef maxStack. */
    public maxStack: number;

    /** ItemDef name. */
    public name: IBasicChatComponentType[];

    /** ItemDef type. */
    public type: ItemDef.Type;

    /** ItemDef model. */
    public model: ItemDef.Model;

    /** ItemDef textures. */
    public textures: string[];

    /** ItemDef toolType. */
    public toolType: string[];

    /** ItemDef miningSpeed. */
    public miningSpeed: number;

    /** ItemDef miningPower. */
    public miningPower: number;

    /** ItemDef customModel. */
    public customModel: string;

    /** ItemDef armorTexture. */
    public armorTexture: string;

    /**
     * Creates a new ItemDef instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ItemDef instance
     */
    public static create(properties?: IItemDef): ItemDef;

    /**
     * Encodes the specified ItemDef message. Does not implicitly {@link ItemDef.verify|verify} messages.
     * @param message ItemDef message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IItemDef, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ItemDef message, length delimited. Does not implicitly {@link ItemDef.verify|verify} messages.
     * @param message ItemDef message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IItemDef, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an ItemDef message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ItemDef
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ItemDef;

    /**
     * Decodes an ItemDef message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ItemDef
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ItemDef;

    /**
     * Verifies an ItemDef message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an ItemDef message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ItemDef
     */
    public static fromObject(object: { [k: string]: any }): ItemDef;

    /**
     * Creates a plain object from an ItemDef message. Also converts values to other types if specified.
     * @param message ItemDef
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ItemDef, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ItemDef to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace ItemDef {

    /** Type enum. */
    enum Type {
        NONE = 0,
        TOOL = 1,
        BLOCK = 2,
        ARMOR = 3
    }

    /** Model enum. */
    enum Model {
        FLAT = 0,
        CUBE = 1,
        CROSS = 2,
        CUSTOM = 3
    }
}

/** Represents a BlockDef. */
export class BlockDef implements IBlockDef {

    /**
     * Constructs a new BlockDef.
     * @param [properties] Properties to set
     */
    constructor(properties?: IBlockDef);

    /** BlockDef id. */
    public id: string;

    /** BlockDef numId. */
    public numId: number;

    /** BlockDef model. */
    public model: BlockDef.Model;

    /** BlockDef textures. */
    public textures: string[];

    /** BlockDef toolType. */
    public toolType: string[];

    /** BlockDef miningSpeed. */
    public miningSpeed: number;

    /** BlockDef miningPower. */
    public miningPower: number;

    /** BlockDef solid. */
    public solid: boolean;

    /** BlockDef fluid. */
    public fluid: boolean;

    /** BlockDef opaque. */
    public opaque: boolean;

    /** BlockDef color. */
    public color: number[];

    /** BlockDef material. */
    public material: string[];

    /** BlockDef fluidDensity. */
    public fluidDensity: number;

    /** BlockDef viscosity. */
    public viscosity: number;

    /** BlockDef customModel. */
    public customModel: string;

    /**
     * Creates a new BlockDef instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BlockDef instance
     */
    public static create(properties?: IBlockDef): BlockDef;

    /**
     * Encodes the specified BlockDef message. Does not implicitly {@link BlockDef.verify|verify} messages.
     * @param message BlockDef message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IBlockDef, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified BlockDef message, length delimited. Does not implicitly {@link BlockDef.verify|verify} messages.
     * @param message BlockDef message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IBlockDef, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BlockDef message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns BlockDef
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BlockDef;

    /**
     * Decodes a BlockDef message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns BlockDef
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BlockDef;

    /**
     * Verifies a BlockDef message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a BlockDef message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns BlockDef
     */
    public static fromObject(object: { [k: string]: any }): BlockDef;

    /**
     * Creates a plain object from a BlockDef message. Also converts values to other types if specified.
     * @param message BlockDef
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: BlockDef, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this BlockDef to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace BlockDef {

    /** Model enum. */
    enum Model {
        BLOCK = 0,
        CROSS = 1,
        TRANSPARENT = 2
    }
}
