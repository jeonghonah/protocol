import * as $protobuf from "protobufjs";
/** Properties of a LoginRequest. */
export interface ILoginRequest {

    /** LoginRequest name */
    name?: (string|null);

    /** LoginRequest protocol */
    protocol?: (number|null);

    /** LoginRequest maxplayers */
    maxplayers?: (number|null);

    /** LoginRequest numberplayers */
    numberplayers?: (number|null);

    /** LoginRequest motd */
    motd?: (string|null);

    /** LoginRequest software */
    software?: (string|null);

    /** LoginRequest auth */
    auth?: (boolean|null);

    /** LoginRequest secret */
    secret?: (string|null);
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

    /** LoginRequest maxplayers. */
    public maxplayers: number;

    /** LoginRequest numberplayers. */
    public numberplayers: number;

    /** LoginRequest motd. */
    public motd: string;

    /** LoginRequest software. */
    public software: string;

    /** LoginRequest auth. */
    public auth: boolean;

    /** LoginRequest secret. */
    public secret: string;

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

/** Properties of a LoginSuccess. */
export interface ILoginSuccess {

    /** LoginSuccess xPos */
    xPos?: (number|null);

    /** LoginSuccess yPos */
    yPos?: (number|null);

    /** LoginSuccess zPos */
    zPos?: (number|null);

    /** LoginSuccess itemsDef */
    itemsDef?: (string|null);

    /** LoginSuccess blocksDef */
    blocksDef?: (string|null);

    /** LoginSuccess inventory */
    inventory?: (string|null);

    /** LoginSuccess armor */
    armor?: (string|null);

    /** LoginSuccess movement */
    movement?: (string|null);
}

/** Represents a LoginSuccess. */
export class LoginSuccess implements ILoginSuccess {

    /**
     * Constructs a new LoginSuccess.
     * @param [properties] Properties to set
     */
    constructor(properties?: ILoginSuccess);

    /** LoginSuccess xPos. */
    public xPos: number;

    /** LoginSuccess yPos. */
    public yPos: number;

    /** LoginSuccess zPos. */
    public zPos: number;

    /** LoginSuccess itemsDef. */
    public itemsDef: string;

    /** LoginSuccess blocksDef. */
    public blocksDef: string;

    /** LoginSuccess inventory. */
    public inventory: string;

    /** LoginSuccess armor. */
    public armor: string;

    /** LoginSuccess movement. */
    public movement: string;

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

/** Properties of a PlayerKick. */
export interface IPlayerKick {

    /** PlayerKick reason */
    reason?: (string|null);

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
    public reason: string;

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

/** Properties of a PlayerInventory. */
export interface IPlayerInventory {

    /** PlayerInventory type */
    type?: (string|null);

    /** PlayerInventory inventory */
    inventory?: (string|null);
}

/** Represents a PlayerInventory. */
export class PlayerInventory implements IPlayerInventory {

    /**
     * Constructs a new PlayerInventory.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPlayerInventory);

    /** PlayerInventory type. */
    public type: string;

    /** PlayerInventory inventory. */
    public inventory: string;

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
    type?: (string|null);

    /** PlayerSlotUpdate data */
    data?: (string|null);
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
    public type: string;

    /** PlayerSlotUpdate data. */
    public data: string;

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

/** Properties of a PlayerOpenInventory. */
export interface IPlayerOpenInventory {

    /** PlayerOpenInventory name */
    name?: (string|null);

    /** PlayerOpenInventory type */
    type?: (string|null);

    /** PlayerOpenInventory data */
    data?: (string|null);
}

/** Represents a PlayerOpenInventory. */
export class PlayerOpenInventory implements IPlayerOpenInventory {

    /**
     * Constructs a new PlayerOpenInventory.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPlayerOpenInventory);

    /** PlayerOpenInventory name. */
    public name: string;

    /** PlayerOpenInventory type. */
    public type: string;

    /** PlayerOpenInventory data. */
    public data: string;

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

/** Properties of a ChatMessage. */
export interface IChatMessage {

    /** ChatMessage message */
    message?: ({ [k: string]: ChatMessage.IChatComponent }|null);

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
    public message: { [k: string]: ChatMessage.IChatComponent };

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

export namespace ChatMessage {

    /** Properties of a ChatComponent. */
    interface IChatComponent {

        /** ChatComponent text */
        text?: (string|null);

        /** ChatComponent font */
        font?: (string|null);

        /** ChatComponent color */
        color?: (string|null);

        /** ChatComponent linethrough */
        linethrough?: (boolean|null);

        /** ChatComponent underline */
        underline?: (boolean|null);
    }

    /** Represents a ChatComponent. */
    class ChatComponent implements IChatComponent {

        /**
         * Constructs a new ChatComponent.
         * @param [properties] Properties to set
         */
        constructor(properties?: ChatMessage.IChatComponent);

        /** ChatComponent text. */
        public text: string;

        /** ChatComponent font. */
        public font: string;

        /** ChatComponent color. */
        public color: string;

        /** ChatComponent linethrough. */
        public linethrough: boolean;

        /** ChatComponent underline. */
        public underline: boolean;

        /**
         * Creates a new ChatComponent instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChatComponent instance
         */
        public static create(properties?: ChatMessage.IChatComponent): ChatMessage.ChatComponent;

        /**
         * Encodes the specified ChatComponent message. Does not implicitly {@link ChatMessage.ChatComponent.verify|verify} messages.
         * @param message ChatComponent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ChatMessage.IChatComponent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ChatComponent message, length delimited. Does not implicitly {@link ChatMessage.ChatComponent.verify|verify} messages.
         * @param message ChatComponent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ChatMessage.IChatComponent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChatComponent message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ChatComponent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ChatMessage.ChatComponent;

        /**
         * Decodes a ChatComponent message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ChatComponent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ChatMessage.ChatComponent;

        /**
         * Verifies a ChatComponent message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ChatComponent message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChatComponent
         */
        public static fromObject(object: { [k: string]: any }): ChatMessage.ChatComponent;

        /**
         * Creates a plain object from a ChatComponent message. Also converts values to other types if specified.
         * @param message ChatComponent
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ChatMessage.ChatComponent, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChatComponent to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Properties of a TabUpdate. */
export interface ITabUpdate {

    /** TabUpdate message */
    message?: ({ [k: string]: TabUpdate.IChatComponent }|null);

    /** TabUpdate time */
    time?: (number|Long|null);
}

/** Represents a TabUpdate. */
export class TabUpdate implements ITabUpdate {

    /**
     * Constructs a new TabUpdate.
     * @param [properties] Properties to set
     */
    constructor(properties?: ITabUpdate);

    /** TabUpdate message. */
    public message: { [k: string]: TabUpdate.IChatComponent };

    /** TabUpdate time. */
    public time: (number|Long);

    /**
     * Creates a new TabUpdate instance using the specified properties.
     * @param [properties] Properties to set
     * @returns TabUpdate instance
     */
    public static create(properties?: ITabUpdate): TabUpdate;

    /**
     * Encodes the specified TabUpdate message. Does not implicitly {@link TabUpdate.verify|verify} messages.
     * @param message TabUpdate message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ITabUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified TabUpdate message, length delimited. Does not implicitly {@link TabUpdate.verify|verify} messages.
     * @param message TabUpdate message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ITabUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a TabUpdate message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns TabUpdate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TabUpdate;

    /**
     * Decodes a TabUpdate message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns TabUpdate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): TabUpdate;

    /**
     * Verifies a TabUpdate message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a TabUpdate message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns TabUpdate
     */
    public static fromObject(object: { [k: string]: any }): TabUpdate;

    /**
     * Creates a plain object from a TabUpdate message. Also converts values to other types if specified.
     * @param message TabUpdate
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: TabUpdate, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this TabUpdate to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace TabUpdate {

    /** Properties of a ChatComponent. */
    interface IChatComponent {

        /** ChatComponent text */
        text?: (string|null);

        /** ChatComponent font */
        font?: (string|null);

        /** ChatComponent color */
        color?: (string|null);

        /** ChatComponent linethrough */
        linethrough?: (boolean|null);

        /** ChatComponent underline */
        underline?: (boolean|null);
    }

    /** Represents a ChatComponent. */
    class ChatComponent implements IChatComponent {

        /**
         * Constructs a new ChatComponent.
         * @param [properties] Properties to set
         */
        constructor(properties?: TabUpdate.IChatComponent);

        /** ChatComponent text. */
        public text: string;

        /** ChatComponent font. */
        public font: string;

        /** ChatComponent color. */
        public color: string;

        /** ChatComponent linethrough. */
        public linethrough: boolean;

        /** ChatComponent underline. */
        public underline: boolean;

        /**
         * Creates a new ChatComponent instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChatComponent instance
         */
        public static create(properties?: TabUpdate.IChatComponent): TabUpdate.ChatComponent;

        /**
         * Encodes the specified ChatComponent message. Does not implicitly {@link TabUpdate.ChatComponent.verify|verify} messages.
         * @param message ChatComponent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: TabUpdate.IChatComponent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ChatComponent message, length delimited. Does not implicitly {@link TabUpdate.ChatComponent.verify|verify} messages.
         * @param message ChatComponent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: TabUpdate.IChatComponent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChatComponent message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ChatComponent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TabUpdate.ChatComponent;

        /**
         * Decodes a ChatComponent message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ChatComponent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): TabUpdate.ChatComponent;

        /**
         * Verifies a ChatComponent message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ChatComponent message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChatComponent
         */
        public static fromObject(object: { [k: string]: any }): TabUpdate.ChatComponent;

        /**
         * Creates a plain object from a ChatComponent message. Also converts values to other types if specified.
         * @param message ChatComponent
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: TabUpdate.ChatComponent, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChatComponent to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Properties of an EntityCreate. */
export interface IEntityCreate {

    /** EntityCreate uuid */
    uuid?: (string|null);

    /** EntityCreate data */
    data?: (string|null);
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

    /** EntityCreate data. */
    public data: string;

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

/** Properties of an EntityUpdate. */
export interface IEntityUpdate {

    /** EntityUpdate uuid */
    uuid?: (string|null);

    /** EntityUpdate key */
    key?: (string|null);

    /** EntityUpdate value */
    value?: (string|null);
}

/** Represents an EntityUpdate. */
export class EntityUpdate implements IEntityUpdate {

    /**
     * Constructs a new EntityUpdate.
     * @param [properties] Properties to set
     */
    constructor(properties?: IEntityUpdate);

    /** EntityUpdate uuid. */
    public uuid: string;

    /** EntityUpdate key. */
    public key: string;

    /** EntityUpdate value. */
    public value: string;

    /**
     * Creates a new EntityUpdate instance using the specified properties.
     * @param [properties] Properties to set
     * @returns EntityUpdate instance
     */
    public static create(properties?: IEntityUpdate): EntityUpdate;

    /**
     * Encodes the specified EntityUpdate message. Does not implicitly {@link EntityUpdate.verify|verify} messages.
     * @param message EntityUpdate message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IEntityUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified EntityUpdate message, length delimited. Does not implicitly {@link EntityUpdate.verify|verify} messages.
     * @param message EntityUpdate message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IEntityUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an EntityUpdate message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns EntityUpdate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EntityUpdate;

    /**
     * Decodes an EntityUpdate message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns EntityUpdate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EntityUpdate;

    /**
     * Verifies an EntityUpdate message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an EntityUpdate message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns EntityUpdate
     */
    public static fromObject(object: { [k: string]: any }): EntityUpdate;

    /**
     * Creates a plain object from an EntityUpdate message. Also converts values to other types if specified.
     * @param message EntityUpdate
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: EntityUpdate, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this EntityUpdate to JSON.
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
    blocks?: ({ [k: string]: IWorldBlockUpdate }|null);
}

/** Represents a WorldMultiBlockUpdate. */
export class WorldMultiBlockUpdate implements IWorldMultiBlockUpdate {

    /**
     * Constructs a new WorldMultiBlockUpdate.
     * @param [properties] Properties to set
     */
    constructor(properties?: IWorldMultiBlockUpdate);

    /** WorldMultiBlockUpdate blocks. */
    public blocks: { [k: string]: IWorldBlockUpdate };

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

    /** WorldChunkLoad data */
    data?: (Uint8Array|null);

    /** WorldChunkLoad type */
    type?: (boolean|null);

    /** WorldChunkLoad compressed */
    compressed?: (boolean|null);
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

    /** WorldChunkLoad data. */
    public data: Uint8Array;

    /** WorldChunkLoad type. */
    public type: boolean;

    /** WorldChunkLoad compressed. */
    public compressed: boolean;

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

    /** WorldChunkUnload type */
    type?: (boolean|null);
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

    /** WorldChunkUnload type. */
    public type: boolean;

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

/** Properties of a RegistryUpdate. */
export interface IRegistryUpdate {

    /** RegistryUpdate itemsDef */
    itemsDef?: (string|null);

    /** RegistryUpdate blocksDef */
    blocksDef?: (string|null);
}

/** Represents a RegistryUpdate. */
export class RegistryUpdate implements IRegistryUpdate {

    /**
     * Constructs a new RegistryUpdate.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRegistryUpdate);

    /** RegistryUpdate itemsDef. */
    public itemsDef: string;

    /** RegistryUpdate blocksDef. */
    public blocksDef: string;

    /**
     * Creates a new RegistryUpdate instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RegistryUpdate instance
     */
    public static create(properties?: IRegistryUpdate): RegistryUpdate;

    /**
     * Encodes the specified RegistryUpdate message. Does not implicitly {@link RegistryUpdate.verify|verify} messages.
     * @param message RegistryUpdate message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRegistryUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified RegistryUpdate message, length delimited. Does not implicitly {@link RegistryUpdate.verify|verify} messages.
     * @param message RegistryUpdate message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IRegistryUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RegistryUpdate message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RegistryUpdate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RegistryUpdate;

    /**
     * Decodes a RegistryUpdate message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns RegistryUpdate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RegistryUpdate;

    /**
     * Verifies a RegistryUpdate message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a RegistryUpdate message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns RegistryUpdate
     */
    public static fromObject(object: { [k: string]: any }): RegistryUpdate;

    /**
     * Creates a plain object from a RegistryUpdate message. Also converts values to other types if specified.
     * @param message RegistryUpdate
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: RegistryUpdate, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this RegistryUpdate to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GameplaySettingUpdate. */
export interface IGameplaySettingUpdate {

    /** GameplaySettingUpdate key */
    key?: (string|null);

    /** GameplaySettingUpdate value */
    value?: (string|null);
}

/** Represents a GameplaySettingUpdate. */
export class GameplaySettingUpdate implements IGameplaySettingUpdate {

    /**
     * Constructs a new GameplaySettingUpdate.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGameplaySettingUpdate);

    /** GameplaySettingUpdate key. */
    public key: string;

    /** GameplaySettingUpdate value. */
    public value: string;

    /**
     * Creates a new GameplaySettingUpdate instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GameplaySettingUpdate instance
     */
    public static create(properties?: IGameplaySettingUpdate): GameplaySettingUpdate;

    /**
     * Encodes the specified GameplaySettingUpdate message. Does not implicitly {@link GameplaySettingUpdate.verify|verify} messages.
     * @param message GameplaySettingUpdate message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGameplaySettingUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GameplaySettingUpdate message, length delimited. Does not implicitly {@link GameplaySettingUpdate.verify|verify} messages.
     * @param message GameplaySettingUpdate message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGameplaySettingUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GameplaySettingUpdate message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GameplaySettingUpdate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GameplaySettingUpdate;

    /**
     * Decodes a GameplaySettingUpdate message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GameplaySettingUpdate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GameplaySettingUpdate;

    /**
     * Verifies a GameplaySettingUpdate message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GameplaySettingUpdate message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GameplaySettingUpdate
     */
    public static fromObject(object: { [k: string]: any }): GameplaySettingUpdate;

    /**
     * Creates a plain object from a GameplaySettingUpdate message. Also converts values to other types if specified.
     * @param message GameplaySettingUpdate
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GameplaySettingUpdate, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GameplaySettingUpdate to JSON.
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
