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

/** Properties of a LoginStatus. */
export interface ILoginStatus {

    /** LoginStatus message */
    message?: (string|null);

    /** LoginStatus time */
    time?: (number|Long|null);
}

/** Represents a LoginStatus. */
export class LoginStatus implements ILoginStatus {

    /**
     * Constructs a new LoginStatus.
     * @param [properties] Properties to set
     */
    constructor(properties?: ILoginStatus);

    /** LoginStatus message. */
    public message: string;

    /** LoginStatus time. */
    public time: (number|Long);

    /**
     * Creates a new LoginStatus instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LoginStatus instance
     */
    public static create(properties?: ILoginStatus): LoginStatus;

    /**
     * Encodes the specified LoginStatus message. Does not implicitly {@link LoginStatus.verify|verify} messages.
     * @param message LoginStatus message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ILoginStatus, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified LoginStatus message, length delimited. Does not implicitly {@link LoginStatus.verify|verify} messages.
     * @param message LoginStatus message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ILoginStatus, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LoginStatus message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns LoginStatus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LoginStatus;

    /**
     * Decodes a LoginStatus message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns LoginStatus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LoginStatus;

    /**
     * Verifies a LoginStatus message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a LoginStatus message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns LoginStatus
     */
    public static fromObject(object: { [k: string]: any }): LoginStatus;

    /**
     * Creates a plain object from a LoginStatus message. Also converts values to other types if specified.
     * @param message LoginStatus
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: LoginStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this LoginStatus to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a LoginSuccess. */
export interface ILoginSuccess {

    /** LoginSuccess message */
    message?: (string|null);

    /** LoginSuccess time */
    time?: (number|Long|null);

    /** LoginSuccess assets */
    assets?: (string|null);

    /** LoginSuccess itemsDef */
    itemsDef?: (IItemDef[]|null);

    /** LoginSuccess blocksDef */
    blocksDef?: (IBlockDef[]|null);
}

/** Represents a LoginSuccess. */
export class LoginSuccess implements ILoginSuccess {

    /**
     * Constructs a new LoginSuccess.
     * @param [properties] Properties to set
     */
    constructor(properties?: ILoginSuccess);

    /** LoginSuccess message. */
    public message: string;

    /** LoginSuccess time. */
    public time: (number|Long);

    /** LoginSuccess assets. */
    public assets: string;

    /** LoginSuccess itemsDef. */
    public itemsDef: IItemDef[];

    /** LoginSuccess blocksDef. */
    public blocksDef: IBlockDef[];

    /**
     * Creates a new LoginSuccess instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LoginSuccess instance
     */
    public static create(properties?: ILoginSuccess): LoginSuccess;

    /**
     * Encodes the specified LoginSuccess message. Does not implicitly {@link LoginSuccess.verify|verify} messages.
     * @param message LoginSuccess message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ILoginSuccess, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified LoginSuccess message, length delimited. Does not implicitly {@link LoginSuccess.verify|verify} messages.
     * @param message LoginSuccess message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ILoginSuccess, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LoginSuccess message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns LoginSuccess
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LoginSuccess;

    /**
     * Decodes a LoginSuccess message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns LoginSuccess
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LoginSuccess;

    /**
     * Verifies a LoginSuccess message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a LoginSuccess message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns LoginSuccess
     */
    public static fromObject(object: { [k: string]: any }): LoginSuccess;

    /**
     * Creates a plain object from a LoginSuccess message. Also converts values to other types if specified.
     * @param message LoginSuccess
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: LoginSuccess, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this LoginSuccess to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Ping. */
export interface IPing {

    /** Ping time */
    time?: (number|Long|null);
}

/** Represents a Ping. */
export class Ping implements IPing {

    /**
     * Constructs a new Ping.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPing);

    /** Ping time. */
    public time: (number|Long);

    /**
     * Creates a new Ping instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Ping instance
     */
    public static create(properties?: IPing): Ping;

    /**
     * Encodes the specified Ping message. Does not implicitly {@link Ping.verify|verify} messages.
     * @param message Ping message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPing, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Ping message, length delimited. Does not implicitly {@link Ping.verify|verify} messages.
     * @param message Ping message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPing, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Ping message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Ping
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ping;

    /**
     * Decodes a Ping message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Ping
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ping;

    /**
     * Verifies a Ping message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Ping message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Ping
     */
    public static fromObject(object: { [k: string]: any }): Ping;

    /**
     * Creates a plain object from a Ping message. Also converts values to other types if specified.
     * @param message Ping
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Ping, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Ping to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a PlayerSpawn. */
export interface IPlayerSpawn {

    /** PlayerSpawn xPos */
    xPos?: (number|null);

    /** PlayerSpawn yPos */
    yPos?: (number|null);

    /** PlayerSpawn zPos */
    zPos?: (number|null);

    /** PlayerSpawn rotation */
    rotation?: (number|null);

    /** PlayerSpawn pitch */
    pitch?: (number|null);

    /** PlayerSpawn movement */
    movement?: ({ [k: string]: number }|null);

    /** PlayerSpawn inventory */
    inventory?: (IPlayerInventory|null);

    /** PlayerSpawn entity */
    entity?: (IPlayerEntity|null);
}

/** Represents a PlayerSpawn. */
export class PlayerSpawn implements IPlayerSpawn {

    /**
     * Constructs a new PlayerSpawn.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPlayerSpawn);

    /** PlayerSpawn xPos. */
    public xPos: number;

    /** PlayerSpawn yPos. */
    public yPos: number;

    /** PlayerSpawn zPos. */
    public zPos: number;

    /** PlayerSpawn rotation. */
    public rotation: number;

    /** PlayerSpawn pitch. */
    public pitch: number;

    /** PlayerSpawn movement. */
    public movement: { [k: string]: number };

    /** PlayerSpawn inventory. */
    public inventory?: (IPlayerInventory|null);

    /** PlayerSpawn entity. */
    public entity?: (IPlayerEntity|null);

    /**
     * Creates a new PlayerSpawn instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PlayerSpawn instance
     */
    public static create(properties?: IPlayerSpawn): PlayerSpawn;

    /**
     * Encodes the specified PlayerSpawn message. Does not implicitly {@link PlayerSpawn.verify|verify} messages.
     * @param message PlayerSpawn message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPlayerSpawn, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PlayerSpawn message, length delimited. Does not implicitly {@link PlayerSpawn.verify|verify} messages.
     * @param message PlayerSpawn message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPlayerSpawn, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PlayerSpawn message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PlayerSpawn
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PlayerSpawn;

    /**
     * Decodes a PlayerSpawn message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PlayerSpawn
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PlayerSpawn;

    /**
     * Verifies a PlayerSpawn message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a PlayerSpawn message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PlayerSpawn
     */
    public static fromObject(object: { [k: string]: any }): PlayerSpawn;

    /**
     * Creates a plain object from a PlayerSpawn message. Also converts values to other types if specified.
     * @param message PlayerSpawn
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PlayerSpawn, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this PlayerSpawn to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a PlayerKick. */
export interface IPlayerKick {

    /** PlayerKick reason */
    reason?: (IBasicChatComponentType[]|null);

    /** PlayerKick time */
    time?: (number|Long|null);
}

/** Represents a PlayerKick. */
export class PlayerKick implements IPlayerKick {

    /**
     * Constructs a new PlayerKick.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPlayerKick);

    /** PlayerKick reason. */
    public reason: IBasicChatComponentType[];

    /** PlayerKick time. */
    public time: (number|Long);

    /**
     * Creates a new PlayerKick instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PlayerKick instance
     */
    public static create(properties?: IPlayerKick): PlayerKick;

    /**
     * Encodes the specified PlayerKick message. Does not implicitly {@link PlayerKick.verify|verify} messages.
     * @param message PlayerKick message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPlayerKick, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PlayerKick message, length delimited. Does not implicitly {@link PlayerKick.verify|verify} messages.
     * @param message PlayerKick message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPlayerKick, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PlayerKick message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PlayerKick
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PlayerKick;

    /**
     * Decodes a PlayerKick message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PlayerKick
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PlayerKick;

    /**
     * Verifies a PlayerKick message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a PlayerKick message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PlayerKick
     */
    public static fromObject(object: { [k: string]: any }): PlayerKick;

    /**
     * Creates a plain object from a PlayerKick message. Also converts values to other types if specified.
     * @param message PlayerKick
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PlayerKick, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this PlayerKick to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a PlayerEntity. */
export interface IPlayerEntity {

    /** PlayerEntity uuid */
    uuid?: (string|null);

    /** PlayerEntity model */
    model?: (string|null);

    /** PlayerEntity texture */
    texture?: (string|null);

    /** PlayerEntity height */
    height?: (number|null);

    /** PlayerEntity witdh */
    witdh?: (number|null);
}

/** Represents a PlayerEntity. */
export class PlayerEntity implements IPlayerEntity {

    /**
     * Constructs a new PlayerEntity.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPlayerEntity);

    /** PlayerEntity uuid. */
    public uuid: string;

    /** PlayerEntity model. */
    public model: string;

    /** PlayerEntity texture. */
    public texture: string;

    /** PlayerEntity height. */
    public height: number;

    /** PlayerEntity witdh. */
    public witdh: number;

    /**
     * Creates a new PlayerEntity instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PlayerEntity instance
     */
    public static create(properties?: IPlayerEntity): PlayerEntity;

    /**
     * Encodes the specified PlayerEntity message. Does not implicitly {@link PlayerEntity.verify|verify} messages.
     * @param message PlayerEntity message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPlayerEntity, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PlayerEntity message, length delimited. Does not implicitly {@link PlayerEntity.verify|verify} messages.
     * @param message PlayerEntity message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPlayerEntity, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PlayerEntity message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PlayerEntity
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PlayerEntity;

    /**
     * Decodes a PlayerEntity message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PlayerEntity
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PlayerEntity;

    /**
     * Verifies a PlayerEntity message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a PlayerEntity message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PlayerEntity
     */
    public static fromObject(object: { [k: string]: any }): PlayerEntity;

    /**
     * Creates a plain object from a PlayerEntity message. Also converts values to other types if specified.
     * @param message PlayerEntity
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PlayerEntity, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this PlayerEntity to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a PlayerTeleport. */
export interface IPlayerTeleport {

    /** PlayerTeleport x */
    x?: (number|null);

    /** PlayerTeleport y */
    y?: (number|null);

    /** PlayerTeleport z */
    z?: (number|null);

    /** PlayerTeleport rotation */
    rotation?: (number|null);

    /** PlayerTeleport pitch */
    pitch?: (number|null);
}

/** Represents a PlayerTeleport. */
export class PlayerTeleport implements IPlayerTeleport {

    /**
     * Constructs a new PlayerTeleport.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPlayerTeleport);

    /** PlayerTeleport x. */
    public x: number;

    /** PlayerTeleport y. */
    public y: number;

    /** PlayerTeleport z. */
    public z: number;

    /** PlayerTeleport rotation. */
    public rotation: number;

    /** PlayerTeleport pitch. */
    public pitch: number;

    /**
     * Creates a new PlayerTeleport instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PlayerTeleport instance
     */
    public static create(properties?: IPlayerTeleport): PlayerTeleport;

    /**
     * Encodes the specified PlayerTeleport message. Does not implicitly {@link PlayerTeleport.verify|verify} messages.
     * @param message PlayerTeleport message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPlayerTeleport, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PlayerTeleport message, length delimited. Does not implicitly {@link PlayerTeleport.verify|verify} messages.
     * @param message PlayerTeleport message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPlayerTeleport, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PlayerTeleport message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PlayerTeleport
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PlayerTeleport;

    /**
     * Decodes a PlayerTeleport message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PlayerTeleport
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PlayerTeleport;

    /**
     * Verifies a PlayerTeleport message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a PlayerTeleport message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PlayerTeleport
     */
    public static fromObject(object: { [k: string]: any }): PlayerTeleport;

    /**
     * Creates a plain object from a PlayerTeleport message. Also converts values to other types if specified.
     * @param message PlayerTeleport
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PlayerTeleport, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this PlayerTeleport to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a PlayerEnterVehicle. */
export interface IPlayerEnterVehicle {

    /** PlayerEnterVehicle uuid */
    uuid?: (string|null);

    /** PlayerEnterVehicle allowControl */
    allowControl?: (boolean|null);
}

/** Represents a PlayerEnterVehicle. */
export class PlayerEnterVehicle implements IPlayerEnterVehicle {

    /**
     * Constructs a new PlayerEnterVehicle.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPlayerEnterVehicle);

    /** PlayerEnterVehicle uuid. */
    public uuid: string;

    /** PlayerEnterVehicle allowControl. */
    public allowControl: boolean;

    /**
     * Creates a new PlayerEnterVehicle instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PlayerEnterVehicle instance
     */
    public static create(properties?: IPlayerEnterVehicle): PlayerEnterVehicle;

    /**
     * Encodes the specified PlayerEnterVehicle message. Does not implicitly {@link PlayerEnterVehicle.verify|verify} messages.
     * @param message PlayerEnterVehicle message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPlayerEnterVehicle, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PlayerEnterVehicle message, length delimited. Does not implicitly {@link PlayerEnterVehicle.verify|verify} messages.
     * @param message PlayerEnterVehicle message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPlayerEnterVehicle, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PlayerEnterVehicle message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PlayerEnterVehicle
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PlayerEnterVehicle;

    /**
     * Decodes a PlayerEnterVehicle message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PlayerEnterVehicle
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PlayerEnterVehicle;

    /**
     * Verifies a PlayerEnterVehicle message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a PlayerEnterVehicle message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PlayerEnterVehicle
     */
    public static fromObject(object: { [k: string]: any }): PlayerEnterVehicle;

    /**
     * Creates a plain object from a PlayerEnterVehicle message. Also converts values to other types if specified.
     * @param message PlayerEnterVehicle
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PlayerEnterVehicle, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this PlayerEnterVehicle to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a PlayerInventory. */
export interface IPlayerInventory {

    /** PlayerInventory size */
    size?: (number|null);

    /** PlayerInventory main */
    main?: ({ [k: string]: IItem }|null);

    /** PlayerInventory armor */
    armor?: ({ [k: string]: IItem }|null);

    /** PlayerInventory crafting */
    crafting?: ({ [k: string]: IItem }|null);
}

/** Represents a PlayerInventory. */
export class PlayerInventory implements IPlayerInventory {

    /**
     * Constructs a new PlayerInventory.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPlayerInventory);

    /** PlayerInventory size. */
    public size: number;

    /** PlayerInventory main. */
    public main: { [k: string]: IItem };

    /** PlayerInventory armor. */
    public armor: { [k: string]: IItem };

    /** PlayerInventory crafting. */
    public crafting: { [k: string]: IItem };

    /**
     * Creates a new PlayerInventory instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PlayerInventory instance
     */
    public static create(properties?: IPlayerInventory): PlayerInventory;

    /**
     * Encodes the specified PlayerInventory message. Does not implicitly {@link PlayerInventory.verify|verify} messages.
     * @param message PlayerInventory message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPlayerInventory, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PlayerInventory message, length delimited. Does not implicitly {@link PlayerInventory.verify|verify} messages.
     * @param message PlayerInventory message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPlayerInventory, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PlayerInventory message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PlayerInventory
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PlayerInventory;

    /**
     * Decodes a PlayerInventory message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PlayerInventory
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PlayerInventory;

    /**
     * Verifies a PlayerInventory message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a PlayerInventory message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PlayerInventory
     */
    public static fromObject(object: { [k: string]: any }): PlayerInventory;

    /**
     * Creates a plain object from a PlayerInventory message. Also converts values to other types if specified.
     * @param message PlayerInventory
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PlayerInventory, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this PlayerInventory to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a PlayerSlotUpdate. */
export interface IPlayerSlotUpdate {

    /** PlayerSlotUpdate slot */
    slot?: (number|null);

    /** PlayerSlotUpdate type */
    type?: (InventoryType|null);

    /** PlayerSlotUpdate item */
    item?: (IItem|null);
}

/** Represents a PlayerSlotUpdate. */
export class PlayerSlotUpdate implements IPlayerSlotUpdate {

    /**
     * Constructs a new PlayerSlotUpdate.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPlayerSlotUpdate);

    /** PlayerSlotUpdate slot. */
    public slot: number;

    /** PlayerSlotUpdate type. */
    public type: InventoryType;

    /** PlayerSlotUpdate item. */
    public item?: (IItem|null);

    /**
     * Creates a new PlayerSlotUpdate instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PlayerSlotUpdate instance
     */
    public static create(properties?: IPlayerSlotUpdate): PlayerSlotUpdate;

    /**
     * Encodes the specified PlayerSlotUpdate message. Does not implicitly {@link PlayerSlotUpdate.verify|verify} messages.
     * @param message PlayerSlotUpdate message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPlayerSlotUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PlayerSlotUpdate message, length delimited. Does not implicitly {@link PlayerSlotUpdate.verify|verify} messages.
     * @param message PlayerSlotUpdate message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPlayerSlotUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PlayerSlotUpdate message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PlayerSlotUpdate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PlayerSlotUpdate;

    /**
     * Decodes a PlayerSlotUpdate message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PlayerSlotUpdate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PlayerSlotUpdate;

    /**
     * Verifies a PlayerSlotUpdate message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a PlayerSlotUpdate message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PlayerSlotUpdate
     */
    public static fromObject(object: { [k: string]: any }): PlayerSlotUpdate;

    /**
     * Creates a plain object from a PlayerSlotUpdate message. Also converts values to other types if specified.
     * @param message PlayerSlotUpdate
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PlayerSlotUpdate, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this PlayerSlotUpdate to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a PlayerApplyImpulse. */
export interface IPlayerApplyImpulse {

    /** PlayerApplyImpulse x */
    x?: (number|null);

    /** PlayerApplyImpulse y */
    y?: (number|null);

    /** PlayerApplyImpulse z */
    z?: (number|null);
}

/** Represents a PlayerApplyImpulse. */
export class PlayerApplyImpulse implements IPlayerApplyImpulse {

    /**
     * Constructs a new PlayerApplyImpulse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPlayerApplyImpulse);

    /** PlayerApplyImpulse x. */
    public x: number;

    /** PlayerApplyImpulse y. */
    public y: number;

    /** PlayerApplyImpulse z. */
    public z: number;

    /**
     * Creates a new PlayerApplyImpulse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PlayerApplyImpulse instance
     */
    public static create(properties?: IPlayerApplyImpulse): PlayerApplyImpulse;

    /**
     * Encodes the specified PlayerApplyImpulse message. Does not implicitly {@link PlayerApplyImpulse.verify|verify} messages.
     * @param message PlayerApplyImpulse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPlayerApplyImpulse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PlayerApplyImpulse message, length delimited. Does not implicitly {@link PlayerApplyImpulse.verify|verify} messages.
     * @param message PlayerApplyImpulse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPlayerApplyImpulse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PlayerApplyImpulse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PlayerApplyImpulse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PlayerApplyImpulse;

    /**
     * Decodes a PlayerApplyImpulse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PlayerApplyImpulse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PlayerApplyImpulse;

    /**
     * Verifies a PlayerApplyImpulse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a PlayerApplyImpulse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PlayerApplyImpulse
     */
    public static fromObject(object: { [k: string]: any }): PlayerApplyImpulse;

    /**
     * Creates a plain object from a PlayerApplyImpulse message. Also converts values to other types if specified.
     * @param message PlayerApplyImpulse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PlayerApplyImpulse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this PlayerApplyImpulse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a PlayerUpdateMovement. */
export interface IPlayerUpdateMovement {

    /** PlayerUpdateMovement key */
    key?: (string|null);

    /** PlayerUpdateMovement value */
    value?: (number|null);
}

/** Represents a PlayerUpdateMovement. */
export class PlayerUpdateMovement implements IPlayerUpdateMovement {

    /**
     * Constructs a new PlayerUpdateMovement.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPlayerUpdateMovement);

    /** PlayerUpdateMovement key. */
    public key: string;

    /** PlayerUpdateMovement value. */
    public value: number;

    /**
     * Creates a new PlayerUpdateMovement instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PlayerUpdateMovement instance
     */
    public static create(properties?: IPlayerUpdateMovement): PlayerUpdateMovement;

    /**
     * Encodes the specified PlayerUpdateMovement message. Does not implicitly {@link PlayerUpdateMovement.verify|verify} messages.
     * @param message PlayerUpdateMovement message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPlayerUpdateMovement, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PlayerUpdateMovement message, length delimited. Does not implicitly {@link PlayerUpdateMovement.verify|verify} messages.
     * @param message PlayerUpdateMovement message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPlayerUpdateMovement, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PlayerUpdateMovement message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PlayerUpdateMovement
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PlayerUpdateMovement;

    /**
     * Decodes a PlayerUpdateMovement message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PlayerUpdateMovement
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PlayerUpdateMovement;

    /**
     * Verifies a PlayerUpdateMovement message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a PlayerUpdateMovement message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PlayerUpdateMovement
     */
    public static fromObject(object: { [k: string]: any }): PlayerUpdateMovement;

    /**
     * Creates a plain object from a PlayerUpdateMovement message. Also converts values to other types if specified.
     * @param message PlayerUpdateMovement
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PlayerUpdateMovement, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this PlayerUpdateMovement to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a PlayerUpdatePhysics. */
export interface IPlayerUpdatePhysics {

    /** PlayerUpdatePhysics key */
    key?: (string|null);

    /** PlayerUpdatePhysics value */
    value?: (number|null);
}

/** Represents a PlayerUpdatePhysics. */
export class PlayerUpdatePhysics implements IPlayerUpdatePhysics {

    /**
     * Constructs a new PlayerUpdatePhysics.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPlayerUpdatePhysics);

    /** PlayerUpdatePhysics key. */
    public key: string;

    /** PlayerUpdatePhysics value. */
    public value: number;

    /**
     * Creates a new PlayerUpdatePhysics instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PlayerUpdatePhysics instance
     */
    public static create(properties?: IPlayerUpdatePhysics): PlayerUpdatePhysics;

    /**
     * Encodes the specified PlayerUpdatePhysics message. Does not implicitly {@link PlayerUpdatePhysics.verify|verify} messages.
     * @param message PlayerUpdatePhysics message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPlayerUpdatePhysics, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PlayerUpdatePhysics message, length delimited. Does not implicitly {@link PlayerUpdatePhysics.verify|verify} messages.
     * @param message PlayerUpdatePhysics message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPlayerUpdatePhysics, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PlayerUpdatePhysics message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PlayerUpdatePhysics
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PlayerUpdatePhysics;

    /**
     * Decodes a PlayerUpdatePhysics message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PlayerUpdatePhysics
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PlayerUpdatePhysics;

    /**
     * Verifies a PlayerUpdatePhysics message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a PlayerUpdatePhysics message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PlayerUpdatePhysics
     */
    public static fromObject(object: { [k: string]: any }): PlayerUpdatePhysics;

    /**
     * Creates a plain object from a PlayerUpdatePhysics message. Also converts values to other types if specified.
     * @param message PlayerUpdatePhysics
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PlayerUpdatePhysics, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this PlayerUpdatePhysics to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a PlayerHealth. */
export interface IPlayerHealth {

    /** PlayerHealth value */
    value?: (number|null);

    /** PlayerHealth max */
    max?: (number|null);
}

/** Represents a PlayerHealth. */
export class PlayerHealth implements IPlayerHealth {

    /**
     * Constructs a new PlayerHealth.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPlayerHealth);

    /** PlayerHealth value. */
    public value: number;

    /** PlayerHealth max. */
    public max: number;

    /**
     * Creates a new PlayerHealth instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PlayerHealth instance
     */
    public static create(properties?: IPlayerHealth): PlayerHealth;

    /**
     * Encodes the specified PlayerHealth message. Does not implicitly {@link PlayerHealth.verify|verify} messages.
     * @param message PlayerHealth message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPlayerHealth, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PlayerHealth message, length delimited. Does not implicitly {@link PlayerHealth.verify|verify} messages.
     * @param message PlayerHealth message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPlayerHealth, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PlayerHealth message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PlayerHealth
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PlayerHealth;

    /**
     * Decodes a PlayerHealth message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PlayerHealth
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PlayerHealth;

    /**
     * Verifies a PlayerHealth message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a PlayerHealth message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PlayerHealth
     */
    public static fromObject(object: { [k: string]: any }): PlayerHealth;

    /**
     * Creates a plain object from a PlayerHealth message. Also converts values to other types if specified.
     * @param message PlayerHealth
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PlayerHealth, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this PlayerHealth to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a PlayerSetBlockReach. */
export interface IPlayerSetBlockReach {

    /** PlayerSetBlockReach value */
    value?: (number|null);
}

/** Represents a PlayerSetBlockReach. */
export class PlayerSetBlockReach implements IPlayerSetBlockReach {

    /**
     * Constructs a new PlayerSetBlockReach.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPlayerSetBlockReach);

    /** PlayerSetBlockReach value. */
    public value: number;

    /**
     * Creates a new PlayerSetBlockReach instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PlayerSetBlockReach instance
     */
    public static create(properties?: IPlayerSetBlockReach): PlayerSetBlockReach;

    /**
     * Encodes the specified PlayerSetBlockReach message. Does not implicitly {@link PlayerSetBlockReach.verify|verify} messages.
     * @param message PlayerSetBlockReach message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPlayerSetBlockReach, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PlayerSetBlockReach message, length delimited. Does not implicitly {@link PlayerSetBlockReach.verify|verify} messages.
     * @param message PlayerSetBlockReach message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPlayerSetBlockReach, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PlayerSetBlockReach message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PlayerSetBlockReach
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PlayerSetBlockReach;

    /**
     * Decodes a PlayerSetBlockReach message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PlayerSetBlockReach
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PlayerSetBlockReach;

    /**
     * Verifies a PlayerSetBlockReach message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a PlayerSetBlockReach message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PlayerSetBlockReach
     */
    public static fromObject(object: { [k: string]: any }): PlayerSetBlockReach;

    /**
     * Creates a plain object from a PlayerSetBlockReach message. Also converts values to other types if specified.
     * @param message PlayerSetBlockReach
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PlayerSetBlockReach, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this PlayerSetBlockReach to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a PlayerOpenInventory. */
export interface IPlayerOpenInventory {

    /** PlayerOpenInventory type */
    type?: (ContainerType|null);

    /** PlayerOpenInventory name */
    name?: (string|null);

    /** PlayerOpenInventory size */
    size?: (number|null);

    /** PlayerOpenInventory items */
    items?: ({ [k: string]: IItem }|null);
}

/** Represents a PlayerOpenInventory. */
export class PlayerOpenInventory implements IPlayerOpenInventory {

    /**
     * Constructs a new PlayerOpenInventory.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPlayerOpenInventory);

    /** PlayerOpenInventory type. */
    public type: ContainerType;

    /** PlayerOpenInventory name. */
    public name: string;

    /** PlayerOpenInventory size. */
    public size: number;

    /** PlayerOpenInventory items. */
    public items: { [k: string]: IItem };

    /**
     * Creates a new PlayerOpenInventory instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PlayerOpenInventory instance
     */
    public static create(properties?: IPlayerOpenInventory): PlayerOpenInventory;

    /**
     * Encodes the specified PlayerOpenInventory message. Does not implicitly {@link PlayerOpenInventory.verify|verify} messages.
     * @param message PlayerOpenInventory message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPlayerOpenInventory, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PlayerOpenInventory message, length delimited. Does not implicitly {@link PlayerOpenInventory.verify|verify} messages.
     * @param message PlayerOpenInventory message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPlayerOpenInventory, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PlayerOpenInventory message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PlayerOpenInventory
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PlayerOpenInventory;

    /**
     * Decodes a PlayerOpenInventory message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PlayerOpenInventory
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PlayerOpenInventory;

    /**
     * Verifies a PlayerOpenInventory message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a PlayerOpenInventory message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PlayerOpenInventory
     */
    public static fromObject(object: { [k: string]: any }): PlayerOpenInventory;

    /**
     * Creates a plain object from a PlayerOpenInventory message. Also converts values to other types if specified.
     * @param message PlayerOpenInventory
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PlayerOpenInventory, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this PlayerOpenInventory to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a PlayerUpdateOpenInventory. */
export interface IPlayerUpdateOpenInventory {

    /** PlayerUpdateOpenInventory name */
    name?: (string|null);

    /** PlayerUpdateOpenInventory items */
    items?: ({ [k: string]: IItem }|null);
}

/** Represents a PlayerUpdateOpenInventory. */
export class PlayerUpdateOpenInventory implements IPlayerUpdateOpenInventory {

    /**
     * Constructs a new PlayerUpdateOpenInventory.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPlayerUpdateOpenInventory);

    /** PlayerUpdateOpenInventory name. */
    public name: string;

    /** PlayerUpdateOpenInventory items. */
    public items: { [k: string]: IItem };

    /**
     * Creates a new PlayerUpdateOpenInventory instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PlayerUpdateOpenInventory instance
     */
    public static create(properties?: IPlayerUpdateOpenInventory): PlayerUpdateOpenInventory;

    /**
     * Encodes the specified PlayerUpdateOpenInventory message. Does not implicitly {@link PlayerUpdateOpenInventory.verify|verify} messages.
     * @param message PlayerUpdateOpenInventory message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPlayerUpdateOpenInventory, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PlayerUpdateOpenInventory message, length delimited. Does not implicitly {@link PlayerUpdateOpenInventory.verify|verify} messages.
     * @param message PlayerUpdateOpenInventory message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPlayerUpdateOpenInventory, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PlayerUpdateOpenInventory message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PlayerUpdateOpenInventory
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PlayerUpdateOpenInventory;

    /**
     * Decodes a PlayerUpdateOpenInventory message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PlayerUpdateOpenInventory
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PlayerUpdateOpenInventory;

    /**
     * Verifies a PlayerUpdateOpenInventory message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a PlayerUpdateOpenInventory message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PlayerUpdateOpenInventory
     */
    public static fromObject(object: { [k: string]: any }): PlayerUpdateOpenInventory;

    /**
     * Creates a plain object from a PlayerUpdateOpenInventory message. Also converts values to other types if specified.
     * @param message PlayerUpdateOpenInventory
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PlayerUpdateOpenInventory, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this PlayerUpdateOpenInventory to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a SoundPlay. */
export interface ISoundPlay {

    /** SoundPlay sound */
    sound?: (string|null);

    /** SoundPlay volume */
    volume?: (number|null);

    /** SoundPlay x */
    x?: (number|null);

    /** SoundPlay y */
    y?: (number|null);

    /** SoundPlay z */
    z?: (number|null);

    /** SoundPlay type */
    type?: (SoundPlay.Type|null);
}

/** Represents a SoundPlay. */
export class SoundPlay implements ISoundPlay {

    /**
     * Constructs a new SoundPlay.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISoundPlay);

    /** SoundPlay sound. */
    public sound: string;

    /** SoundPlay volume. */
    public volume: number;

    /** SoundPlay x. */
    public x: number;

    /** SoundPlay y. */
    public y: number;

    /** SoundPlay z. */
    public z: number;

    /** SoundPlay type. */
    public type: SoundPlay.Type;

    /**
     * Creates a new SoundPlay instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SoundPlay instance
     */
    public static create(properties?: ISoundPlay): SoundPlay;

    /**
     * Encodes the specified SoundPlay message. Does not implicitly {@link SoundPlay.verify|verify} messages.
     * @param message SoundPlay message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISoundPlay, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SoundPlay message, length delimited. Does not implicitly {@link SoundPlay.verify|verify} messages.
     * @param message SoundPlay message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISoundPlay, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SoundPlay message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SoundPlay
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SoundPlay;

    /**
     * Decodes a SoundPlay message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SoundPlay
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SoundPlay;

    /**
     * Verifies a SoundPlay message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a SoundPlay message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SoundPlay
     */
    public static fromObject(object: { [k: string]: any }): SoundPlay;

    /**
     * Creates a plain object from a SoundPlay message. Also converts values to other types if specified.
     * @param message SoundPlay
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SoundPlay, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this SoundPlay to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace SoundPlay {

    /** Type enum. */
    enum Type {
        GENERAL = 0,
        ENTITY = 1,
        BLOCK = 2,
        MUSIC = 3,
        SELF = 4
    }
}

/** Properties of a ChatMessage. */
export interface IChatMessage {

    /** ChatMessage message */
    message?: (IChatComponentType[]|null);

    /** ChatMessage time */
    time?: (number|Long|null);
}

/** Represents a ChatMessage. */
export class ChatMessage implements IChatMessage {

    /**
     * Constructs a new ChatMessage.
     * @param [properties] Properties to set
     */
    constructor(properties?: IChatMessage);

    /** ChatMessage message. */
    public message: IChatComponentType[];

    /** ChatMessage time. */
    public time: (number|Long);

    /**
     * Creates a new ChatMessage instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ChatMessage instance
     */
    public static create(properties?: IChatMessage): ChatMessage;

    /**
     * Encodes the specified ChatMessage message. Does not implicitly {@link ChatMessage.verify|verify} messages.
     * @param message ChatMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IChatMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ChatMessage message, length delimited. Does not implicitly {@link ChatMessage.verify|verify} messages.
     * @param message ChatMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IChatMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ChatMessage message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ChatMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ChatMessage;

    /**
     * Decodes a ChatMessage message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ChatMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ChatMessage;

    /**
     * Verifies a ChatMessage message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ChatMessage message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ChatMessage
     */
    public static fromObject(object: { [k: string]: any }): ChatMessage;

    /**
     * Creates a plain object from a ChatMessage message. Also converts values to other types if specified.
     * @param message ChatMessage
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ChatMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ChatMessage to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an UpdateTextBoard. */
export interface IUpdateTextBoard {

    /** UpdateTextBoard type */
    type?: (UpdateTextBoard.Type|null);

    /** UpdateTextBoard message */
    message?: (IBasicChatComponentType[]|null);

    /** UpdateTextBoard time */
    time?: (number|Long|null);
}

/** Represents an UpdateTextBoard. */
export class UpdateTextBoard implements IUpdateTextBoard {

    /**
     * Constructs a new UpdateTextBoard.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUpdateTextBoard);

    /** UpdateTextBoard type. */
    public type: UpdateTextBoard.Type;

    /** UpdateTextBoard message. */
    public message: IBasicChatComponentType[];

    /** UpdateTextBoard time. */
    public time: (number|Long);

    /**
     * Creates a new UpdateTextBoard instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UpdateTextBoard instance
     */
    public static create(properties?: IUpdateTextBoard): UpdateTextBoard;

    /**
     * Encodes the specified UpdateTextBoard message. Does not implicitly {@link UpdateTextBoard.verify|verify} messages.
     * @param message UpdateTextBoard message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUpdateTextBoard, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified UpdateTextBoard message, length delimited. Does not implicitly {@link UpdateTextBoard.verify|verify} messages.
     * @param message UpdateTextBoard message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IUpdateTextBoard, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an UpdateTextBoard message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UpdateTextBoard
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UpdateTextBoard;

    /**
     * Decodes an UpdateTextBoard message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns UpdateTextBoard
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UpdateTextBoard;

    /**
     * Verifies an UpdateTextBoard message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an UpdateTextBoard message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns UpdateTextBoard
     */
    public static fromObject(object: { [k: string]: any }): UpdateTextBoard;

    /**
     * Creates a plain object from an UpdateTextBoard message. Also converts values to other types if specified.
     * @param message UpdateTextBoard
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: UpdateTextBoard, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this UpdateTextBoard to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace UpdateTextBoard {

    /** Type enum. */
    enum Type {
        TAB = 0,
        SIDE = 1,
        CENTER = 2,
        HOTBAR = 3
    }
}

/** Properties of an EntityCreate. */
export interface IEntityCreate {

    /** EntityCreate uuid */
    uuid?: (string|null);

    /** EntityCreate x */
    x?: (number|null);

    /** EntityCreate y */
    y?: (number|null);

    /** EntityCreate z */
    z?: (number|null);

    /** EntityCreate rotation */
    rotation?: (number|null);

    /** EntityCreate pitch */
    pitch?: (number|null);

    /** EntityCreate model */
    model?: (string|null);

    /** EntityCreate texture */
    texture?: (string|null);

    /** EntityCreate nametag */
    nametag?: (boolean|null);

    /** EntityCreate name */
    name?: (IBasicChatComponentType[]|null);

    /** EntityCreate hitbox */
    hitbox?: (number[]|null);

    /** EntityCreate heldItem */
    heldItem?: (string|null);

    /** EntityCreate armor */
    armor?: ({ [k: string]: string }|null);
}

/** Represents an EntityCreate. */
export class EntityCreate implements IEntityCreate {

    /**
     * Constructs a new EntityCreate.
     * @param [properties] Properties to set
     */
    constructor(properties?: IEntityCreate);

    /** EntityCreate uuid. */
    public uuid: string;

    /** EntityCreate x. */
    public x: number;

    /** EntityCreate y. */
    public y: number;

    /** EntityCreate z. */
    public z: number;

    /** EntityCreate rotation. */
    public rotation: number;

    /** EntityCreate pitch. */
    public pitch: number;

    /** EntityCreate model. */
    public model: string;

    /** EntityCreate texture. */
    public texture: string;

    /** EntityCreate nametag. */
    public nametag: boolean;

    /** EntityCreate name. */
    public name: IBasicChatComponentType[];

    /** EntityCreate hitbox. */
    public hitbox: number[];

    /** EntityCreate heldItem. */
    public heldItem: string;

    /** EntityCreate armor. */
    public armor: { [k: string]: string };

    /**
     * Creates a new EntityCreate instance using the specified properties.
     * @param [properties] Properties to set
     * @returns EntityCreate instance
     */
    public static create(properties?: IEntityCreate): EntityCreate;

    /**
     * Encodes the specified EntityCreate message. Does not implicitly {@link EntityCreate.verify|verify} messages.
     * @param message EntityCreate message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IEntityCreate, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified EntityCreate message, length delimited. Does not implicitly {@link EntityCreate.verify|verify} messages.
     * @param message EntityCreate message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IEntityCreate, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an EntityCreate message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns EntityCreate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EntityCreate;

    /**
     * Decodes an EntityCreate message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns EntityCreate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EntityCreate;

    /**
     * Verifies an EntityCreate message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an EntityCreate message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns EntityCreate
     */
    public static fromObject(object: { [k: string]: any }): EntityCreate;

    /**
     * Creates a plain object from an EntityCreate message. Also converts values to other types if specified.
     * @param message EntityCreate
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: EntityCreate, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this EntityCreate to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an EntityRemove. */
export interface IEntityRemove {

    /** EntityRemove uuid */
    uuid?: (string|null);
}

/** Represents an EntityRemove. */
export class EntityRemove implements IEntityRemove {

    /**
     * Constructs a new EntityRemove.
     * @param [properties] Properties to set
     */
    constructor(properties?: IEntityRemove);

    /** EntityRemove uuid. */
    public uuid: string;

    /**
     * Creates a new EntityRemove instance using the specified properties.
     * @param [properties] Properties to set
     * @returns EntityRemove instance
     */
    public static create(properties?: IEntityRemove): EntityRemove;

    /**
     * Encodes the specified EntityRemove message. Does not implicitly {@link EntityRemove.verify|verify} messages.
     * @param message EntityRemove message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IEntityRemove, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified EntityRemove message, length delimited. Does not implicitly {@link EntityRemove.verify|verify} messages.
     * @param message EntityRemove message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IEntityRemove, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an EntityRemove message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns EntityRemove
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EntityRemove;

    /**
     * Decodes an EntityRemove message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns EntityRemove
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EntityRemove;

    /**
     * Verifies an EntityRemove message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an EntityRemove message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns EntityRemove
     */
    public static fromObject(object: { [k: string]: any }): EntityRemove;

    /**
     * Creates a plain object from an EntityRemove message. Also converts values to other types if specified.
     * @param message EntityRemove
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: EntityRemove, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this EntityRemove to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an EntityMove. */
export interface IEntityMove {

    /** EntityMove uuid */
    uuid?: (string|null);

    /** EntityMove x */
    x?: (number|null);

    /** EntityMove y */
    y?: (number|null);

    /** EntityMove z */
    z?: (number|null);

    /** EntityMove rotation */
    rotation?: (number|null);

    /** EntityMove pitch */
    pitch?: (number|null);
}

/** Represents an EntityMove. */
export class EntityMove implements IEntityMove {

    /**
     * Constructs a new EntityMove.
     * @param [properties] Properties to set
     */
    constructor(properties?: IEntityMove);

    /** EntityMove uuid. */
    public uuid: string;

    /** EntityMove x. */
    public x: number;

    /** EntityMove y. */
    public y: number;

    /** EntityMove z. */
    public z: number;

    /** EntityMove rotation. */
    public rotation: number;

    /** EntityMove pitch. */
    public pitch: number;

    /**
     * Creates a new EntityMove instance using the specified properties.
     * @param [properties] Properties to set
     * @returns EntityMove instance
     */
    public static create(properties?: IEntityMove): EntityMove;

    /**
     * Encodes the specified EntityMove message. Does not implicitly {@link EntityMove.verify|verify} messages.
     * @param message EntityMove message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IEntityMove, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified EntityMove message, length delimited. Does not implicitly {@link EntityMove.verify|verify} messages.
     * @param message EntityMove message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IEntityMove, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an EntityMove message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns EntityMove
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EntityMove;

    /**
     * Decodes an EntityMove message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns EntityMove
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EntityMove;

    /**
     * Verifies an EntityMove message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an EntityMove message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns EntityMove
     */
    public static fromObject(object: { [k: string]: any }): EntityMove;

    /**
     * Creates a plain object from an EntityMove message. Also converts values to other types if specified.
     * @param message EntityMove
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: EntityMove, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this EntityMove to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an EntityNameUpdate. */
export interface IEntityNameUpdate {

    /** EntityNameUpdate uuid */
    uuid?: (string|null);

    /** EntityNameUpdate name */
    name?: (IBasicChatComponentType[]|null);

    /** EntityNameUpdate visible */
    visible?: (boolean|null);
}

/** Represents an EntityNameUpdate. */
export class EntityNameUpdate implements IEntityNameUpdate {

    /**
     * Constructs a new EntityNameUpdate.
     * @param [properties] Properties to set
     */
    constructor(properties?: IEntityNameUpdate);

    /** EntityNameUpdate uuid. */
    public uuid: string;

    /** EntityNameUpdate name. */
    public name: IBasicChatComponentType[];

    /** EntityNameUpdate visible. */
    public visible: boolean;

    /**
     * Creates a new EntityNameUpdate instance using the specified properties.
     * @param [properties] Properties to set
     * @returns EntityNameUpdate instance
     */
    public static create(properties?: IEntityNameUpdate): EntityNameUpdate;

    /**
     * Encodes the specified EntityNameUpdate message. Does not implicitly {@link EntityNameUpdate.verify|verify} messages.
     * @param message EntityNameUpdate message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IEntityNameUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified EntityNameUpdate message, length delimited. Does not implicitly {@link EntityNameUpdate.verify|verify} messages.
     * @param message EntityNameUpdate message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IEntityNameUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an EntityNameUpdate message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns EntityNameUpdate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EntityNameUpdate;

    /**
     * Decodes an EntityNameUpdate message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns EntityNameUpdate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EntityNameUpdate;

    /**
     * Verifies an EntityNameUpdate message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an EntityNameUpdate message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns EntityNameUpdate
     */
    public static fromObject(object: { [k: string]: any }): EntityNameUpdate;

    /**
     * Creates a plain object from an EntityNameUpdate message. Also converts values to other types if specified.
     * @param message EntityNameUpdate
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: EntityNameUpdate, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this EntityNameUpdate to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an EntityHeldItem. */
export interface IEntityHeldItem {

    /** EntityHeldItem uuid */
    uuid?: (string|null);

    /** EntityHeldItem id */
    id?: (string|null);
}

/** Represents an EntityHeldItem. */
export class EntityHeldItem implements IEntityHeldItem {

    /**
     * Constructs a new EntityHeldItem.
     * @param [properties] Properties to set
     */
    constructor(properties?: IEntityHeldItem);

    /** EntityHeldItem uuid. */
    public uuid: string;

    /** EntityHeldItem id. */
    public id: string;

    /**
     * Creates a new EntityHeldItem instance using the specified properties.
     * @param [properties] Properties to set
     * @returns EntityHeldItem instance
     */
    public static create(properties?: IEntityHeldItem): EntityHeldItem;

    /**
     * Encodes the specified EntityHeldItem message. Does not implicitly {@link EntityHeldItem.verify|verify} messages.
     * @param message EntityHeldItem message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IEntityHeldItem, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified EntityHeldItem message, length delimited. Does not implicitly {@link EntityHeldItem.verify|verify} messages.
     * @param message EntityHeldItem message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IEntityHeldItem, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an EntityHeldItem message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns EntityHeldItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EntityHeldItem;

    /**
     * Decodes an EntityHeldItem message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns EntityHeldItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EntityHeldItem;

    /**
     * Verifies an EntityHeldItem message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an EntityHeldItem message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns EntityHeldItem
     */
    public static fromObject(object: { [k: string]: any }): EntityHeldItem;

    /**
     * Creates a plain object from an EntityHeldItem message. Also converts values to other types if specified.
     * @param message EntityHeldItem
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: EntityHeldItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this EntityHeldItem to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an EntityArmor. */
export interface IEntityArmor {

    /** EntityArmor uuid */
    uuid?: (string|null);

    /** EntityArmor type */
    type?: (number|null);

    /** EntityArmor id */
    id?: (string|null);
}

/** Represents an EntityArmor. */
export class EntityArmor implements IEntityArmor {

    /**
     * Constructs a new EntityArmor.
     * @param [properties] Properties to set
     */
    constructor(properties?: IEntityArmor);

    /** EntityArmor uuid. */
    public uuid: string;

    /** EntityArmor type. */
    public type: number;

    /** EntityArmor id. */
    public id: string;

    /**
     * Creates a new EntityArmor instance using the specified properties.
     * @param [properties] Properties to set
     * @returns EntityArmor instance
     */
    public static create(properties?: IEntityArmor): EntityArmor;

    /**
     * Encodes the specified EntityArmor message. Does not implicitly {@link EntityArmor.verify|verify} messages.
     * @param message EntityArmor message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IEntityArmor, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified EntityArmor message, length delimited. Does not implicitly {@link EntityArmor.verify|verify} messages.
     * @param message EntityArmor message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IEntityArmor, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an EntityArmor message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns EntityArmor
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EntityArmor;

    /**
     * Decodes an EntityArmor message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns EntityArmor
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EntityArmor;

    /**
     * Verifies an EntityArmor message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an EntityArmor message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns EntityArmor
     */
    public static fromObject(object: { [k: string]: any }): EntityArmor;

    /**
     * Creates a plain object from an EntityArmor message. Also converts values to other types if specified.
     * @param message EntityArmor
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: EntityArmor, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this EntityArmor to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an EntityAnimate. */
export interface IEntityAnimate {

    /** EntityAnimate uuid */
    uuid?: (string|null);

    /** EntityAnimate animation */
    animation?: (string|null);

    /** EntityAnimate time */
    time?: (number|null);

    /** EntityAnimate replace */
    replace?: (boolean|null);
}

/** Represents an EntityAnimate. */
export class EntityAnimate implements IEntityAnimate {

    /**
     * Constructs a new EntityAnimate.
     * @param [properties] Properties to set
     */
    constructor(properties?: IEntityAnimate);

    /** EntityAnimate uuid. */
    public uuid: string;

    /** EntityAnimate animation. */
    public animation: string;

    /** EntityAnimate time. */
    public time: number;

    /** EntityAnimate replace. */
    public replace: boolean;

    /**
     * Creates a new EntityAnimate instance using the specified properties.
     * @param [properties] Properties to set
     * @returns EntityAnimate instance
     */
    public static create(properties?: IEntityAnimate): EntityAnimate;

    /**
     * Encodes the specified EntityAnimate message. Does not implicitly {@link EntityAnimate.verify|verify} messages.
     * @param message EntityAnimate message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IEntityAnimate, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified EntityAnimate message, length delimited. Does not implicitly {@link EntityAnimate.verify|verify} messages.
     * @param message EntityAnimate message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IEntityAnimate, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an EntityAnimate message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns EntityAnimate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EntityAnimate;

    /**
     * Decodes an EntityAnimate message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns EntityAnimate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EntityAnimate;

    /**
     * Verifies an EntityAnimate message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an EntityAnimate message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns EntityAnimate
     */
    public static fromObject(object: { [k: string]: any }): EntityAnimate;

    /**
     * Creates a plain object from an EntityAnimate message. Also converts values to other types if specified.
     * @param message EntityAnimate
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: EntityAnimate, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this EntityAnimate to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a WorldBlockUpdate. */
export interface IWorldBlockUpdate {

    /** WorldBlockUpdate x */
    x?: (number|null);

    /** WorldBlockUpdate y */
    y?: (number|null);

    /** WorldBlockUpdate z */
    z?: (number|null);

    /** WorldBlockUpdate id */
    id?: (number|null);

    /** WorldBlockUpdate particles */
    particles?: (boolean|null);
}

/** Represents a WorldBlockUpdate. */
export class WorldBlockUpdate implements IWorldBlockUpdate {

    /**
     * Constructs a new WorldBlockUpdate.
     * @param [properties] Properties to set
     */
    constructor(properties?: IWorldBlockUpdate);

    /** WorldBlockUpdate x. */
    public x: number;

    /** WorldBlockUpdate y. */
    public y: number;

    /** WorldBlockUpdate z. */
    public z: number;

    /** WorldBlockUpdate id. */
    public id: number;

    /** WorldBlockUpdate particles. */
    public particles: boolean;

    /**
     * Creates a new WorldBlockUpdate instance using the specified properties.
     * @param [properties] Properties to set
     * @returns WorldBlockUpdate instance
     */
    public static create(properties?: IWorldBlockUpdate): WorldBlockUpdate;

    /**
     * Encodes the specified WorldBlockUpdate message. Does not implicitly {@link WorldBlockUpdate.verify|verify} messages.
     * @param message WorldBlockUpdate message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IWorldBlockUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified WorldBlockUpdate message, length delimited. Does not implicitly {@link WorldBlockUpdate.verify|verify} messages.
     * @param message WorldBlockUpdate message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IWorldBlockUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a WorldBlockUpdate message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns WorldBlockUpdate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WorldBlockUpdate;

    /**
     * Decodes a WorldBlockUpdate message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns WorldBlockUpdate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WorldBlockUpdate;

    /**
     * Verifies a WorldBlockUpdate message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a WorldBlockUpdate message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns WorldBlockUpdate
     */
    public static fromObject(object: { [k: string]: any }): WorldBlockUpdate;

    /**
     * Creates a plain object from a WorldBlockUpdate message. Also converts values to other types if specified.
     * @param message WorldBlockUpdate
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: WorldBlockUpdate, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this WorldBlockUpdate to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a WorldMultiBlockUpdate. */
export interface IWorldMultiBlockUpdate {

    /** WorldMultiBlockUpdate blocks */
    blocks?: (IWorldBlockUpdate[]|null);
}

/** Represents a WorldMultiBlockUpdate. */
export class WorldMultiBlockUpdate implements IWorldMultiBlockUpdate {

    /**
     * Constructs a new WorldMultiBlockUpdate.
     * @param [properties] Properties to set
     */
    constructor(properties?: IWorldMultiBlockUpdate);

    /** WorldMultiBlockUpdate blocks. */
    public blocks: IWorldBlockUpdate[];

    /**
     * Creates a new WorldMultiBlockUpdate instance using the specified properties.
     * @param [properties] Properties to set
     * @returns WorldMultiBlockUpdate instance
     */
    public static create(properties?: IWorldMultiBlockUpdate): WorldMultiBlockUpdate;

    /**
     * Encodes the specified WorldMultiBlockUpdate message. Does not implicitly {@link WorldMultiBlockUpdate.verify|verify} messages.
     * @param message WorldMultiBlockUpdate message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IWorldMultiBlockUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified WorldMultiBlockUpdate message, length delimited. Does not implicitly {@link WorldMultiBlockUpdate.verify|verify} messages.
     * @param message WorldMultiBlockUpdate message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IWorldMultiBlockUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a WorldMultiBlockUpdate message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns WorldMultiBlockUpdate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WorldMultiBlockUpdate;

    /**
     * Decodes a WorldMultiBlockUpdate message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns WorldMultiBlockUpdate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WorldMultiBlockUpdate;

    /**
     * Verifies a WorldMultiBlockUpdate message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a WorldMultiBlockUpdate message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns WorldMultiBlockUpdate
     */
    public static fromObject(object: { [k: string]: any }): WorldMultiBlockUpdate;

    /**
     * Creates a plain object from a WorldMultiBlockUpdate message. Also converts values to other types if specified.
     * @param message WorldMultiBlockUpdate
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: WorldMultiBlockUpdate, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this WorldMultiBlockUpdate to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a WorldChunkLoad. */
export interface IWorldChunkLoad {

    /** WorldChunkLoad x */
    x?: (number|null);

    /** WorldChunkLoad y */
    y?: (number|null);

    /** WorldChunkLoad z */
    z?: (number|null);

    /** WorldChunkLoad height */
    height?: (number|null);

    /** WorldChunkLoad compressed */
    compressed?: (boolean|null);

    /** WorldChunkLoad blockData */
    blockData?: (Uint8Array|null);

    /** WorldChunkLoad lightData */
    lightData?: (Uint8Array|null);
}

/** Represents a WorldChunkLoad. */
export class WorldChunkLoad implements IWorldChunkLoad {

    /**
     * Constructs a new WorldChunkLoad.
     * @param [properties] Properties to set
     */
    constructor(properties?: IWorldChunkLoad);

    /** WorldChunkLoad x. */
    public x: number;

    /** WorldChunkLoad y. */
    public y: number;

    /** WorldChunkLoad z. */
    public z: number;

    /** WorldChunkLoad height. */
    public height: number;

    /** WorldChunkLoad compressed. */
    public compressed: boolean;

    /** WorldChunkLoad blockData. */
    public blockData: Uint8Array;

    /** WorldChunkLoad lightData. */
    public lightData: Uint8Array;

    /**
     * Creates a new WorldChunkLoad instance using the specified properties.
     * @param [properties] Properties to set
     * @returns WorldChunkLoad instance
     */
    public static create(properties?: IWorldChunkLoad): WorldChunkLoad;

    /**
     * Encodes the specified WorldChunkLoad message. Does not implicitly {@link WorldChunkLoad.verify|verify} messages.
     * @param message WorldChunkLoad message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IWorldChunkLoad, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified WorldChunkLoad message, length delimited. Does not implicitly {@link WorldChunkLoad.verify|verify} messages.
     * @param message WorldChunkLoad message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IWorldChunkLoad, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a WorldChunkLoad message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns WorldChunkLoad
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WorldChunkLoad;

    /**
     * Decodes a WorldChunkLoad message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns WorldChunkLoad
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WorldChunkLoad;

    /**
     * Verifies a WorldChunkLoad message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a WorldChunkLoad message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns WorldChunkLoad
     */
    public static fromObject(object: { [k: string]: any }): WorldChunkLoad;

    /**
     * Creates a plain object from a WorldChunkLoad message. Also converts values to other types if specified.
     * @param message WorldChunkLoad
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: WorldChunkLoad, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this WorldChunkLoad to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a WorldChunkUnload. */
export interface IWorldChunkUnload {

    /** WorldChunkUnload x */
    x?: (number|null);

    /** WorldChunkUnload y */
    y?: (number|null);

    /** WorldChunkUnload z */
    z?: (number|null);

    /** WorldChunkUnload height */
    height?: (number|null);
}

/** Represents a WorldChunkUnload. */
export class WorldChunkUnload implements IWorldChunkUnload {

    /**
     * Constructs a new WorldChunkUnload.
     * @param [properties] Properties to set
     */
    constructor(properties?: IWorldChunkUnload);

    /** WorldChunkUnload x. */
    public x: number;

    /** WorldChunkUnload y. */
    public y: number;

    /** WorldChunkUnload z. */
    public z: number;

    /** WorldChunkUnload height. */
    public height: number;

    /**
     * Creates a new WorldChunkUnload instance using the specified properties.
     * @param [properties] Properties to set
     * @returns WorldChunkUnload instance
     */
    public static create(properties?: IWorldChunkUnload): WorldChunkUnload;

    /**
     * Encodes the specified WorldChunkUnload message. Does not implicitly {@link WorldChunkUnload.verify|verify} messages.
     * @param message WorldChunkUnload message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IWorldChunkUnload, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified WorldChunkUnload message, length delimited. Does not implicitly {@link WorldChunkUnload.verify|verify} messages.
     * @param message WorldChunkUnload message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IWorldChunkUnload, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a WorldChunkUnload message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns WorldChunkUnload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WorldChunkUnload;

    /**
     * Decodes a WorldChunkUnload message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns WorldChunkUnload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WorldChunkUnload;

    /**
     * Verifies a WorldChunkUnload message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a WorldChunkUnload message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns WorldChunkUnload
     */
    public static fromObject(object: { [k: string]: any }): WorldChunkUnload;

    /**
     * Creates a plain object from a WorldChunkUnload message. Also converts values to other types if specified.
     * @param message WorldChunkUnload
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: WorldChunkUnload, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this WorldChunkUnload to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a WorldChunkIsLoaded. */
export interface IWorldChunkIsLoaded {

    /** WorldChunkIsLoaded x */
    x?: (number|null);

    /** WorldChunkIsLoaded y */
    y?: (number|null);

    /** WorldChunkIsLoaded z */
    z?: (number|null);
}

/** Represents a WorldChunkIsLoaded. */
export class WorldChunkIsLoaded implements IWorldChunkIsLoaded {

    /**
     * Constructs a new WorldChunkIsLoaded.
     * @param [properties] Properties to set
     */
    constructor(properties?: IWorldChunkIsLoaded);

    /** WorldChunkIsLoaded x. */
    public x: number;

    /** WorldChunkIsLoaded y. */
    public y: number;

    /** WorldChunkIsLoaded z. */
    public z: number;

    /**
     * Creates a new WorldChunkIsLoaded instance using the specified properties.
     * @param [properties] Properties to set
     * @returns WorldChunkIsLoaded instance
     */
    public static create(properties?: IWorldChunkIsLoaded): WorldChunkIsLoaded;

    /**
     * Encodes the specified WorldChunkIsLoaded message. Does not implicitly {@link WorldChunkIsLoaded.verify|verify} messages.
     * @param message WorldChunkIsLoaded message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IWorldChunkIsLoaded, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified WorldChunkIsLoaded message, length delimited. Does not implicitly {@link WorldChunkIsLoaded.verify|verify} messages.
     * @param message WorldChunkIsLoaded message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IWorldChunkIsLoaded, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a WorldChunkIsLoaded message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns WorldChunkIsLoaded
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WorldChunkIsLoaded;

    /**
     * Decodes a WorldChunkIsLoaded message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns WorldChunkIsLoaded
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WorldChunkIsLoaded;

    /**
     * Verifies a WorldChunkIsLoaded message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a WorldChunkIsLoaded message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns WorldChunkIsLoaded
     */
    public static fromObject(object: { [k: string]: any }): WorldChunkIsLoaded;

    /**
     * Creates a plain object from a WorldChunkIsLoaded message. Also converts values to other types if specified.
     * @param message WorldChunkIsLoaded
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: WorldChunkIsLoaded, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this WorldChunkIsLoaded to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a WorldChunksRemoveAll. */
export interface IWorldChunksRemoveAll {

    /** WorldChunksRemoveAll confirm */
    confirm?: (boolean|null);
}

/** Represents a WorldChunksRemoveAll. */
export class WorldChunksRemoveAll implements IWorldChunksRemoveAll {

    /**
     * Constructs a new WorldChunksRemoveAll.
     * @param [properties] Properties to set
     */
    constructor(properties?: IWorldChunksRemoveAll);

    /** WorldChunksRemoveAll confirm. */
    public confirm: boolean;

    /**
     * Creates a new WorldChunksRemoveAll instance using the specified properties.
     * @param [properties] Properties to set
     * @returns WorldChunksRemoveAll instance
     */
    public static create(properties?: IWorldChunksRemoveAll): WorldChunksRemoveAll;

    /**
     * Encodes the specified WorldChunksRemoveAll message. Does not implicitly {@link WorldChunksRemoveAll.verify|verify} messages.
     * @param message WorldChunksRemoveAll message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IWorldChunksRemoveAll, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified WorldChunksRemoveAll message, length delimited. Does not implicitly {@link WorldChunksRemoveAll.verify|verify} messages.
     * @param message WorldChunksRemoveAll message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IWorldChunksRemoveAll, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a WorldChunksRemoveAll message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns WorldChunksRemoveAll
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WorldChunksRemoveAll;

    /**
     * Decodes a WorldChunksRemoveAll message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns WorldChunksRemoveAll
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WorldChunksRemoveAll;

    /**
     * Verifies a WorldChunksRemoveAll message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a WorldChunksRemoveAll message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns WorldChunksRemoveAll
     */
    public static fromObject(object: { [k: string]: any }): WorldChunksRemoveAll;

    /**
     * Creates a plain object from a WorldChunksRemoveAll message. Also converts values to other types if specified.
     * @param message WorldChunksRemoveAll
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: WorldChunksRemoveAll, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this WorldChunksRemoveAll to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an EnvironmentTimeUpdate. */
export interface IEnvironmentTimeUpdate {

    /** EnvironmentTimeUpdate value */
    value?: (number|null);
}

/** Represents an EnvironmentTimeUpdate. */
export class EnvironmentTimeUpdate implements IEnvironmentTimeUpdate {

    /**
     * Constructs a new EnvironmentTimeUpdate.
     * @param [properties] Properties to set
     */
    constructor(properties?: IEnvironmentTimeUpdate);

    /** EnvironmentTimeUpdate value. */
    public value: number;

    /**
     * Creates a new EnvironmentTimeUpdate instance using the specified properties.
     * @param [properties] Properties to set
     * @returns EnvironmentTimeUpdate instance
     */
    public static create(properties?: IEnvironmentTimeUpdate): EnvironmentTimeUpdate;

    /**
     * Encodes the specified EnvironmentTimeUpdate message. Does not implicitly {@link EnvironmentTimeUpdate.verify|verify} messages.
     * @param message EnvironmentTimeUpdate message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IEnvironmentTimeUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified EnvironmentTimeUpdate message, length delimited. Does not implicitly {@link EnvironmentTimeUpdate.verify|verify} messages.
     * @param message EnvironmentTimeUpdate message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IEnvironmentTimeUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an EnvironmentTimeUpdate message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns EnvironmentTimeUpdate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EnvironmentTimeUpdate;

    /**
     * Decodes an EnvironmentTimeUpdate message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns EnvironmentTimeUpdate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EnvironmentTimeUpdate;

    /**
     * Verifies an EnvironmentTimeUpdate message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an EnvironmentTimeUpdate message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns EnvironmentTimeUpdate
     */
    public static fromObject(object: { [k: string]: any }): EnvironmentTimeUpdate;

    /**
     * Creates a plain object from an EnvironmentTimeUpdate message. Also converts values to other types if specified.
     * @param message EnvironmentTimeUpdate
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: EnvironmentTimeUpdate, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this EnvironmentTimeUpdate to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an EnvironmentFogUpdate. */
export interface IEnvironmentFogUpdate {

    /** EnvironmentFogUpdate mode */
    mode?: (number|null);

    /** EnvironmentFogUpdate density */
    density?: (number|null);

    /** EnvironmentFogUpdate start */
    start?: (number|null);

    /** EnvironmentFogUpdate end */
    end?: (number|null);

    /** EnvironmentFogUpdate colorRed */
    colorRed?: (number|null);

    /** EnvironmentFogUpdate colorGreen */
    colorGreen?: (number|null);

    /** EnvironmentFogUpdate colorBlue */
    colorBlue?: (number|null);
}

/** Represents an EnvironmentFogUpdate. */
export class EnvironmentFogUpdate implements IEnvironmentFogUpdate {

    /**
     * Constructs a new EnvironmentFogUpdate.
     * @param [properties] Properties to set
     */
    constructor(properties?: IEnvironmentFogUpdate);

    /** EnvironmentFogUpdate mode. */
    public mode: number;

    /** EnvironmentFogUpdate density. */
    public density: number;

    /** EnvironmentFogUpdate start. */
    public start: number;

    /** EnvironmentFogUpdate end. */
    public end: number;

    /** EnvironmentFogUpdate colorRed. */
    public colorRed: number;

    /** EnvironmentFogUpdate colorGreen. */
    public colorGreen: number;

    /** EnvironmentFogUpdate colorBlue. */
    public colorBlue: number;

    /**
     * Creates a new EnvironmentFogUpdate instance using the specified properties.
     * @param [properties] Properties to set
     * @returns EnvironmentFogUpdate instance
     */
    public static create(properties?: IEnvironmentFogUpdate): EnvironmentFogUpdate;

    /**
     * Encodes the specified EnvironmentFogUpdate message. Does not implicitly {@link EnvironmentFogUpdate.verify|verify} messages.
     * @param message EnvironmentFogUpdate message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IEnvironmentFogUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified EnvironmentFogUpdate message, length delimited. Does not implicitly {@link EnvironmentFogUpdate.verify|verify} messages.
     * @param message EnvironmentFogUpdate message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IEnvironmentFogUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an EnvironmentFogUpdate message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns EnvironmentFogUpdate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EnvironmentFogUpdate;

    /**
     * Decodes an EnvironmentFogUpdate message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns EnvironmentFogUpdate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EnvironmentFogUpdate;

    /**
     * Verifies an EnvironmentFogUpdate message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an EnvironmentFogUpdate message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns EnvironmentFogUpdate
     */
    public static fromObject(object: { [k: string]: any }): EnvironmentFogUpdate;

    /**
     * Creates a plain object from an EnvironmentFogUpdate message. Also converts values to other types if specified.
     * @param message EnvironmentFogUpdate
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: EnvironmentFogUpdate, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this EnvironmentFogUpdate to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an EnvironmentSkyUpdate. */
export interface IEnvironmentSkyUpdate {

    /** EnvironmentSkyUpdate clouds */
    clouds?: (boolean|null);

    /** EnvironmentSkyUpdate colorRed */
    colorRed?: (number|null);

    /** EnvironmentSkyUpdate colorGreen */
    colorGreen?: (number|null);

    /** EnvironmentSkyUpdate colorBlue */
    colorBlue?: (number|null);

    /** EnvironmentSkyUpdate colorRedTop */
    colorRedTop?: (number|null);

    /** EnvironmentSkyUpdate colorGreenTop */
    colorGreenTop?: (number|null);

    /** EnvironmentSkyUpdate colorBlueTop */
    colorBlueTop?: (number|null);

    /** EnvironmentSkyUpdate colorRedBottom */
    colorRedBottom?: (number|null);

    /** EnvironmentSkyUpdate colorGreenBottom */
    colorGreenBottom?: (number|null);

    /** EnvironmentSkyUpdate colorBlueBottom */
    colorBlueBottom?: (number|null);
}

/** Represents an EnvironmentSkyUpdate. */
export class EnvironmentSkyUpdate implements IEnvironmentSkyUpdate {

    /**
     * Constructs a new EnvironmentSkyUpdate.
     * @param [properties] Properties to set
     */
    constructor(properties?: IEnvironmentSkyUpdate);

    /** EnvironmentSkyUpdate clouds. */
    public clouds: boolean;

    /** EnvironmentSkyUpdate colorRed. */
    public colorRed: number;

    /** EnvironmentSkyUpdate colorGreen. */
    public colorGreen: number;

    /** EnvironmentSkyUpdate colorBlue. */
    public colorBlue: number;

    /** EnvironmentSkyUpdate colorRedTop. */
    public colorRedTop: number;

    /** EnvironmentSkyUpdate colorGreenTop. */
    public colorGreenTop: number;

    /** EnvironmentSkyUpdate colorBlueTop. */
    public colorBlueTop: number;

    /** EnvironmentSkyUpdate colorRedBottom. */
    public colorRedBottom: number;

    /** EnvironmentSkyUpdate colorGreenBottom. */
    public colorGreenBottom: number;

    /** EnvironmentSkyUpdate colorBlueBottom. */
    public colorBlueBottom: number;

    /**
     * Creates a new EnvironmentSkyUpdate instance using the specified properties.
     * @param [properties] Properties to set
     * @returns EnvironmentSkyUpdate instance
     */
    public static create(properties?: IEnvironmentSkyUpdate): EnvironmentSkyUpdate;

    /**
     * Encodes the specified EnvironmentSkyUpdate message. Does not implicitly {@link EnvironmentSkyUpdate.verify|verify} messages.
     * @param message EnvironmentSkyUpdate message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IEnvironmentSkyUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified EnvironmentSkyUpdate message, length delimited. Does not implicitly {@link EnvironmentSkyUpdate.verify|verify} messages.
     * @param message EnvironmentSkyUpdate message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IEnvironmentSkyUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an EnvironmentSkyUpdate message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns EnvironmentSkyUpdate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EnvironmentSkyUpdate;

    /**
     * Decodes an EnvironmentSkyUpdate message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns EnvironmentSkyUpdate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EnvironmentSkyUpdate;

    /**
     * Verifies an EnvironmentSkyUpdate message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an EnvironmentSkyUpdate message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns EnvironmentSkyUpdate
     */
    public static fromObject(object: { [k: string]: any }): EnvironmentSkyUpdate;

    /**
     * Creates a plain object from an EnvironmentSkyUpdate message. Also converts values to other types if specified.
     * @param message EnvironmentSkyUpdate
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: EnvironmentSkyUpdate, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this EnvironmentSkyUpdate to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an EnvironmentSetSkybox. */
export interface IEnvironmentSetSkybox {

    /** EnvironmentSetSkybox enable */
    enable?: (boolean|null);

    /** EnvironmentSetSkybox texture */
    texture?: (string|null);
}

/** Represents an EnvironmentSetSkybox. */
export class EnvironmentSetSkybox implements IEnvironmentSetSkybox {

    /**
     * Constructs a new EnvironmentSetSkybox.
     * @param [properties] Properties to set
     */
    constructor(properties?: IEnvironmentSetSkybox);

    /** EnvironmentSetSkybox enable. */
    public enable: boolean;

    /** EnvironmentSetSkybox texture. */
    public texture: string;

    /**
     * Creates a new EnvironmentSetSkybox instance using the specified properties.
     * @param [properties] Properties to set
     * @returns EnvironmentSetSkybox instance
     */
    public static create(properties?: IEnvironmentSetSkybox): EnvironmentSetSkybox;

    /**
     * Encodes the specified EnvironmentSetSkybox message. Does not implicitly {@link EnvironmentSetSkybox.verify|verify} messages.
     * @param message EnvironmentSetSkybox message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IEnvironmentSetSkybox, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified EnvironmentSetSkybox message, length delimited. Does not implicitly {@link EnvironmentSetSkybox.verify|verify} messages.
     * @param message EnvironmentSetSkybox message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IEnvironmentSetSkybox, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an EnvironmentSetSkybox message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns EnvironmentSetSkybox
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EnvironmentSetSkybox;

    /**
     * Decodes an EnvironmentSetSkybox message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns EnvironmentSetSkybox
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EnvironmentSetSkybox;

    /**
     * Verifies an EnvironmentSetSkybox message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an EnvironmentSetSkybox message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns EnvironmentSetSkybox
     */
    public static fromObject(object: { [k: string]: any }): EnvironmentSetSkybox;

    /**
     * Creates a plain object from an EnvironmentSetSkybox message. Also converts values to other types if specified.
     * @param message EnvironmentSetSkybox
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: EnvironmentSetSkybox, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this EnvironmentSetSkybox to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a PluginMessage. */
export interface IPluginMessage {

    /** PluginMessage key */
    key?: (string|null);

    /** PluginMessage version */
    version?: (number|null);

    /** PluginMessage value */
    value?: (Uint8Array|null);
}

/** Represents a PluginMessage. */
export class PluginMessage implements IPluginMessage {

    /**
     * Constructs a new PluginMessage.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPluginMessage);

    /** PluginMessage key. */
    public key: string;

    /** PluginMessage version. */
    public version: number;

    /** PluginMessage value. */
    public value: Uint8Array;

    /**
     * Creates a new PluginMessage instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PluginMessage instance
     */
    public static create(properties?: IPluginMessage): PluginMessage;

    /**
     * Encodes the specified PluginMessage message. Does not implicitly {@link PluginMessage.verify|verify} messages.
     * @param message PluginMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPluginMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PluginMessage message, length delimited. Does not implicitly {@link PluginMessage.verify|verify} messages.
     * @param message PluginMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPluginMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PluginMessage message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PluginMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PluginMessage;

    /**
     * Decodes a PluginMessage message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PluginMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PluginMessage;

    /**
     * Verifies a PluginMessage message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a PluginMessage message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PluginMessage
     */
    public static fromObject(object: { [k: string]: any }): PluginMessage;

    /**
     * Creates a plain object from a PluginMessage message. Also converts values to other types if specified.
     * @param message PluginMessage
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PluginMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this PluginMessage to JSON.
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

    /** BlockDef type. */
    public type: BlockDef.Type;

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

    /** Type enum. */
    enum Type {
        BLOCK = 0,
        CROSS = 1,
        TRANSPARENT = 2,
        CUSTOM = 3
    }
}
