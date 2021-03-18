import * as $protobuf from "protobufjs";
/** Properties of an AuthRequest. */
export interface IAuthRequest {

    /** AuthRequest username */
    username?: (string|null);

    /** AuthRequest protocol */
    protocol?: (number|null);

    /** AuthRequest client */
    client?: (string|null);

    /** AuthRequest uuid */
    uuid?: (string|null);

    /** AuthRequest secret */
    secret?: (string|null);

    /** AuthRequest serverId */
    serverId?: (string|null);

    /** AuthRequest proxySupportedVersion */
    proxySupportedVersion?: (number|null);
}

/** Represents an AuthRequest. */
export class AuthRequest implements IAuthRequest {

    /**
     * Constructs a new AuthRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IAuthRequest);

    /** AuthRequest username. */
    public username: string;

    /** AuthRequest protocol. */
    public protocol: number;

    /** AuthRequest client. */
    public client: string;

    /** AuthRequest uuid. */
    public uuid: string;

    /** AuthRequest secret. */
    public secret: string;

    /** AuthRequest serverId. */
    public serverId: string;

    /** AuthRequest proxySupportedVersion. */
    public proxySupportedVersion: number;

    /**
     * Creates a new AuthRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns AuthRequest instance
     */
    public static create(properties?: IAuthRequest): AuthRequest;

    /**
     * Encodes the specified AuthRequest message. Does not implicitly {@link AuthRequest.verify|verify} messages.
     * @param message AuthRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IAuthRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified AuthRequest message, length delimited. Does not implicitly {@link AuthRequest.verify|verify} messages.
     * @param message AuthRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IAuthRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an AuthRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns AuthRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AuthRequest;

    /**
     * Decodes an AuthRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns AuthRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AuthRequest;

    /**
     * Verifies an AuthRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an AuthRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns AuthRequest
     */
    public static fromObject(object: { [k: string]: any }): AuthRequest;

    /**
     * Creates a plain object from an AuthRequest message. Also converts values to other types if specified.
     * @param message AuthRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: AuthRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this AuthRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Ready. */
export interface IReady {

    /** Ready ready */
    ready?: (boolean|null);
}

/** Represents a Ready. */
export class Ready implements IReady {

    /**
     * Constructs a new Ready.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReady);

    /** Ready ready. */
    public ready: boolean;

    /**
     * Creates a new Ready instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Ready instance
     */
    public static create(properties?: IReady): Ready;

    /**
     * Encodes the specified Ready message. Does not implicitly {@link Ready.verify|verify} messages.
     * @param message Ready message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReady, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Ready message, length delimited. Does not implicitly {@link Ready.verify|verify} messages.
     * @param message Ready message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReady, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Ready message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Ready
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ready;

    /**
     * Decodes a Ready message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Ready
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ready;

    /**
     * Verifies a Ready message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Ready message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Ready
     */
    public static fromObject(object: { [k: string]: any }): Ready;

    /**
     * Creates a plain object from a Ready message. Also converts values to other types if specified.
     * @param message Ready
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Ready, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Ready to JSON.
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
    name?: ({ [k: string]: IBasicChatComponentType }|null);
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
    public name: { [k: string]: IBasicChatComponentType };

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
