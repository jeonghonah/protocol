import * as $protobuf from "protobufjs";
/** Properties of a loginRequest. */
export interface IloginRequest {

    /** loginRequest name */
    name?: (string|null);

    /** loginRequest protocol */
    protocol?: (number|null);

    /** loginRequest maxplayers */
    maxplayers?: (number|null);

    /** loginRequest numberplayers */
    numberplayers?: (number|null);

    /** loginRequest motd */
    motd?: (string|null);

    /** loginRequest software */
    software?: (string|null);
}

/** Represents a loginRequest. */
export class loginRequest implements IloginRequest {

    /**
     * Constructs a new loginRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IloginRequest);

    /** loginRequest name. */
    public name: string;

    /** loginRequest protocol. */
    public protocol: number;

    /** loginRequest maxplayers. */
    public maxplayers: number;

    /** loginRequest numberplayers. */
    public numberplayers: number;

    /** loginRequest motd. */
    public motd: string;

    /** loginRequest software. */
    public software: string;

    /**
     * Creates a new loginRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns loginRequest instance
     */
    public static create(properties?: IloginRequest): loginRequest;

    /**
     * Encodes the specified loginRequest message. Does not implicitly {@link loginRequest.verify|verify} messages.
     * @param message loginRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IloginRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified loginRequest message, length delimited. Does not implicitly {@link loginRequest.verify|verify} messages.
     * @param message loginRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IloginRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a loginRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns loginRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): loginRequest;

    /**
     * Decodes a loginRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns loginRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): loginRequest;

    /**
     * Verifies a loginRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a loginRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns loginRequest
     */
    public static fromObject(object: { [k: string]: any }): loginRequest;

    /**
     * Creates a plain object from a loginRequest message. Also converts values to other types if specified.
     * @param message loginRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: loginRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this loginRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a loginSuccess. */
export interface IloginSuccess {

    /** loginSuccess xPos */
    xPos?: (number|null);

    /** loginSuccess yPos */
    yPos?: (number|null);

    /** loginSuccess zPos */
    zPos?: (number|null);

    /** loginSuccess itemsDef */
    itemsDef?: (string|null);

    /** loginSuccess blocksDef */
    blocksDef?: (string|null);

    /** loginSuccess inventory */
    inventory?: (string|null);
}

/** Represents a loginSuccess. */
export class loginSuccess implements IloginSuccess {

    /**
     * Constructs a new loginSuccess.
     * @param [properties] Properties to set
     */
    constructor(properties?: IloginSuccess);

    /** loginSuccess xPos. */
    public xPos: number;

    /** loginSuccess yPos. */
    public yPos: number;

    /** loginSuccess zPos. */
    public zPos: number;

    /** loginSuccess itemsDef. */
    public itemsDef: string;

    /** loginSuccess blocksDef. */
    public blocksDef: string;

    /** loginSuccess inventory. */
    public inventory: string;

    /**
     * Creates a new loginSuccess instance using the specified properties.
     * @param [properties] Properties to set
     * @returns loginSuccess instance
     */
    public static create(properties?: IloginSuccess): loginSuccess;

    /**
     * Encodes the specified loginSuccess message. Does not implicitly {@link loginSuccess.verify|verify} messages.
     * @param message loginSuccess message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IloginSuccess, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified loginSuccess message, length delimited. Does not implicitly {@link loginSuccess.verify|verify} messages.
     * @param message loginSuccess message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IloginSuccess, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a loginSuccess message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns loginSuccess
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): loginSuccess;

    /**
     * Decodes a loginSuccess message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns loginSuccess
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): loginSuccess;

    /**
     * Verifies a loginSuccess message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a loginSuccess message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns loginSuccess
     */
    public static fromObject(object: { [k: string]: any }): loginSuccess;

    /**
     * Creates a plain object from a loginSuccess message. Also converts values to other types if specified.
     * @param message loginSuccess
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: loginSuccess, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this loginSuccess to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a playerEntity. */
export interface IplayerEntity {

    /** playerEntity uuid */
    uuid?: (string|null);
}

/** Represents a playerEntity. */
export class playerEntity implements IplayerEntity {

    /**
     * Constructs a new playerEntity.
     * @param [properties] Properties to set
     */
    constructor(properties?: IplayerEntity);

    /** playerEntity uuid. */
    public uuid: string;

    /**
     * Creates a new playerEntity instance using the specified properties.
     * @param [properties] Properties to set
     * @returns playerEntity instance
     */
    public static create(properties?: IplayerEntity): playerEntity;

    /**
     * Encodes the specified playerEntity message. Does not implicitly {@link playerEntity.verify|verify} messages.
     * @param message playerEntity message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IplayerEntity, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified playerEntity message, length delimited. Does not implicitly {@link playerEntity.verify|verify} messages.
     * @param message playerEntity message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IplayerEntity, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a playerEntity message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns playerEntity
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): playerEntity;

    /**
     * Decodes a playerEntity message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns playerEntity
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): playerEntity;

    /**
     * Verifies a playerEntity message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a playerEntity message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns playerEntity
     */
    public static fromObject(object: { [k: string]: any }): playerEntity;

    /**
     * Creates a plain object from a playerEntity message. Also converts values to other types if specified.
     * @param message playerEntity
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: playerEntity, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this playerEntity to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a playerTeleport. */
export interface IplayerTeleport {

    /** playerTeleport x */
    x?: (number|null);

    /** playerTeleport y */
    y?: (number|null);

    /** playerTeleport z */
    z?: (number|null);
}

/** Represents a playerTeleport. */
export class playerTeleport implements IplayerTeleport {

    /**
     * Constructs a new playerTeleport.
     * @param [properties] Properties to set
     */
    constructor(properties?: IplayerTeleport);

    /** playerTeleport x. */
    public x: number;

    /** playerTeleport y. */
    public y: number;

    /** playerTeleport z. */
    public z: number;

    /**
     * Creates a new playerTeleport instance using the specified properties.
     * @param [properties] Properties to set
     * @returns playerTeleport instance
     */
    public static create(properties?: IplayerTeleport): playerTeleport;

    /**
     * Encodes the specified playerTeleport message. Does not implicitly {@link playerTeleport.verify|verify} messages.
     * @param message playerTeleport message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IplayerTeleport, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified playerTeleport message, length delimited. Does not implicitly {@link playerTeleport.verify|verify} messages.
     * @param message playerTeleport message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IplayerTeleport, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a playerTeleport message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns playerTeleport
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): playerTeleport;

    /**
     * Decodes a playerTeleport message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns playerTeleport
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): playerTeleport;

    /**
     * Verifies a playerTeleport message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a playerTeleport message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns playerTeleport
     */
    public static fromObject(object: { [k: string]: any }): playerTeleport;

    /**
     * Creates a plain object from a playerTeleport message. Also converts values to other types if specified.
     * @param message playerTeleport
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: playerTeleport, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this playerTeleport to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a playerInventory. */
export interface IplayerInventory {

    /** playerInventory inventory */
    inventory?: (string|null);
}

/** Represents a playerInventory. */
export class playerInventory implements IplayerInventory {

    /**
     * Constructs a new playerInventory.
     * @param [properties] Properties to set
     */
    constructor(properties?: IplayerInventory);

    /** playerInventory inventory. */
    public inventory: string;

    /**
     * Creates a new playerInventory instance using the specified properties.
     * @param [properties] Properties to set
     * @returns playerInventory instance
     */
    public static create(properties?: IplayerInventory): playerInventory;

    /**
     * Encodes the specified playerInventory message. Does not implicitly {@link playerInventory.verify|verify} messages.
     * @param message playerInventory message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IplayerInventory, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified playerInventory message, length delimited. Does not implicitly {@link playerInventory.verify|verify} messages.
     * @param message playerInventory message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IplayerInventory, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a playerInventory message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns playerInventory
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): playerInventory;

    /**
     * Decodes a playerInventory message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns playerInventory
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): playerInventory;

    /**
     * Verifies a playerInventory message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a playerInventory message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns playerInventory
     */
    public static fromObject(object: { [k: string]: any }): playerInventory;

    /**
     * Creates a plain object from a playerInventory message. Also converts values to other types if specified.
     * @param message playerInventory
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: playerInventory, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this playerInventory to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a playerSlotUpdate. */
export interface IplayerSlotUpdate {

    /** playerSlotUpdate slot */
    slot?: (number|null);

    /** playerSlotUpdate type */
    type?: (string|null);

    /** playerSlotUpdate data */
    data?: (string|null);
}

/** Represents a playerSlotUpdate. */
export class playerSlotUpdate implements IplayerSlotUpdate {

    /**
     * Constructs a new playerSlotUpdate.
     * @param [properties] Properties to set
     */
    constructor(properties?: IplayerSlotUpdate);

    /** playerSlotUpdate slot. */
    public slot: number;

    /** playerSlotUpdate type. */
    public type: string;

    /** playerSlotUpdate data. */
    public data: string;

    /**
     * Creates a new playerSlotUpdate instance using the specified properties.
     * @param [properties] Properties to set
     * @returns playerSlotUpdate instance
     */
    public static create(properties?: IplayerSlotUpdate): playerSlotUpdate;

    /**
     * Encodes the specified playerSlotUpdate message. Does not implicitly {@link playerSlotUpdate.verify|verify} messages.
     * @param message playerSlotUpdate message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IplayerSlotUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified playerSlotUpdate message, length delimited. Does not implicitly {@link playerSlotUpdate.verify|verify} messages.
     * @param message playerSlotUpdate message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IplayerSlotUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a playerSlotUpdate message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns playerSlotUpdate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): playerSlotUpdate;

    /**
     * Decodes a playerSlotUpdate message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns playerSlotUpdate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): playerSlotUpdate;

    /**
     * Verifies a playerSlotUpdate message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a playerSlotUpdate message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns playerSlotUpdate
     */
    public static fromObject(object: { [k: string]: any }): playerSlotUpdate;

    /**
     * Creates a plain object from a playerSlotUpdate message. Also converts values to other types if specified.
     * @param message playerSlotUpdate
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: playerSlotUpdate, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this playerSlotUpdate to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a playerMovementChange. */
export interface IplayerMovementChange {

    /** playerMovementChange key */
    key?: (string|null);

    /** playerMovementChange value */
    value?: (number|null);
}

/** Represents a playerMovementChange. */
export class playerMovementChange implements IplayerMovementChange {

    /**
     * Constructs a new playerMovementChange.
     * @param [properties] Properties to set
     */
    constructor(properties?: IplayerMovementChange);

    /** playerMovementChange key. */
    public key: string;

    /** playerMovementChange value. */
    public value: number;

    /**
     * Creates a new playerMovementChange instance using the specified properties.
     * @param [properties] Properties to set
     * @returns playerMovementChange instance
     */
    public static create(properties?: IplayerMovementChange): playerMovementChange;

    /**
     * Encodes the specified playerMovementChange message. Does not implicitly {@link playerMovementChange.verify|verify} messages.
     * @param message playerMovementChange message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IplayerMovementChange, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified playerMovementChange message, length delimited. Does not implicitly {@link playerMovementChange.verify|verify} messages.
     * @param message playerMovementChange message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IplayerMovementChange, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a playerMovementChange message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns playerMovementChange
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): playerMovementChange;

    /**
     * Decodes a playerMovementChange message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns playerMovementChange
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): playerMovementChange;

    /**
     * Verifies a playerMovementChange message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a playerMovementChange message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns playerMovementChange
     */
    public static fromObject(object: { [k: string]: any }): playerMovementChange;

    /**
     * Creates a plain object from a playerMovementChange message. Also converts values to other types if specified.
     * @param message playerMovementChange
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: playerMovementChange, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this playerMovementChange to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a playerKick. */
export interface IplayerKick {

    /** playerKick reason */
    reason?: (string|null);
}

/** Represents a playerKick. */
export class playerKick implements IplayerKick {

    /**
     * Constructs a new playerKick.
     * @param [properties] Properties to set
     */
    constructor(properties?: IplayerKick);

    /** playerKick reason. */
    public reason: string;

    /**
     * Creates a new playerKick instance using the specified properties.
     * @param [properties] Properties to set
     * @returns playerKick instance
     */
    public static create(properties?: IplayerKick): playerKick;

    /**
     * Encodes the specified playerKick message. Does not implicitly {@link playerKick.verify|verify} messages.
     * @param message playerKick message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IplayerKick, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified playerKick message, length delimited. Does not implicitly {@link playerKick.verify|verify} messages.
     * @param message playerKick message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IplayerKick, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a playerKick message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns playerKick
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): playerKick;

    /**
     * Decodes a playerKick message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns playerKick
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): playerKick;

    /**
     * Verifies a playerKick message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a playerKick message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns playerKick
     */
    public static fromObject(object: { [k: string]: any }): playerKick;

    /**
     * Creates a plain object from a playerKick message. Also converts values to other types if specified.
     * @param message playerKick
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: playerKick, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this playerKick to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a soundPlay. */
export interface IsoundPlay {

    /** soundPlay sound */
    sound?: (string|null);

    /** soundPlay volume */
    volume?: (number|null);

    /** soundPlay x */
    x?: (number|null);

    /** soundPlay y */
    y?: (number|null);

    /** soundPlay z */
    z?: (number|null);
}

/** Represents a soundPlay. */
export class soundPlay implements IsoundPlay {

    /**
     * Constructs a new soundPlay.
     * @param [properties] Properties to set
     */
    constructor(properties?: IsoundPlay);

    /** soundPlay sound. */
    public sound: string;

    /** soundPlay volume. */
    public volume: number;

    /** soundPlay x. */
    public x: number;

    /** soundPlay y. */
    public y: number;

    /** soundPlay z. */
    public z: number;

    /**
     * Creates a new soundPlay instance using the specified properties.
     * @param [properties] Properties to set
     * @returns soundPlay instance
     */
    public static create(properties?: IsoundPlay): soundPlay;

    /**
     * Encodes the specified soundPlay message. Does not implicitly {@link soundPlay.verify|verify} messages.
     * @param message soundPlay message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IsoundPlay, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified soundPlay message, length delimited. Does not implicitly {@link soundPlay.verify|verify} messages.
     * @param message soundPlay message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IsoundPlay, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a soundPlay message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns soundPlay
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): soundPlay;

    /**
     * Decodes a soundPlay message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns soundPlay
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): soundPlay;

    /**
     * Verifies a soundPlay message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a soundPlay message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns soundPlay
     */
    public static fromObject(object: { [k: string]: any }): soundPlay;

    /**
     * Creates a plain object from a soundPlay message. Also converts values to other types if specified.
     * @param message soundPlay
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: soundPlay, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this soundPlay to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a chatMessage. */
export interface IchatMessage {

    /** chatMessage message */
    message?: (string|null);
}

/** Represents a chatMessage. */
export class chatMessage implements IchatMessage {

    /**
     * Constructs a new chatMessage.
     * @param [properties] Properties to set
     */
    constructor(properties?: IchatMessage);

    /** chatMessage message. */
    public message: string;

    /**
     * Creates a new chatMessage instance using the specified properties.
     * @param [properties] Properties to set
     * @returns chatMessage instance
     */
    public static create(properties?: IchatMessage): chatMessage;

    /**
     * Encodes the specified chatMessage message. Does not implicitly {@link chatMessage.verify|verify} messages.
     * @param message chatMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IchatMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified chatMessage message, length delimited. Does not implicitly {@link chatMessage.verify|verify} messages.
     * @param message chatMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IchatMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a chatMessage message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns chatMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): chatMessage;

    /**
     * Decodes a chatMessage message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns chatMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): chatMessage;

    /**
     * Verifies a chatMessage message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a chatMessage message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns chatMessage
     */
    public static fromObject(object: { [k: string]: any }): chatMessage;

    /**
     * Creates a plain object from a chatMessage message. Also converts values to other types if specified.
     * @param message chatMessage
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: chatMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this chatMessage to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a tabUpdate. */
export interface ItabUpdate {

    /** tabUpdate message */
    message?: (string|null);
}

/** Represents a tabUpdate. */
export class tabUpdate implements ItabUpdate {

    /**
     * Constructs a new tabUpdate.
     * @param [properties] Properties to set
     */
    constructor(properties?: ItabUpdate);

    /** tabUpdate message. */
    public message: string;

    /**
     * Creates a new tabUpdate instance using the specified properties.
     * @param [properties] Properties to set
     * @returns tabUpdate instance
     */
    public static create(properties?: ItabUpdate): tabUpdate;

    /**
     * Encodes the specified tabUpdate message. Does not implicitly {@link tabUpdate.verify|verify} messages.
     * @param message tabUpdate message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ItabUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified tabUpdate message, length delimited. Does not implicitly {@link tabUpdate.verify|verify} messages.
     * @param message tabUpdate message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ItabUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a tabUpdate message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns tabUpdate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tabUpdate;

    /**
     * Decodes a tabUpdate message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns tabUpdate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tabUpdate;

    /**
     * Verifies a tabUpdate message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a tabUpdate message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns tabUpdate
     */
    public static fromObject(object: { [k: string]: any }): tabUpdate;

    /**
     * Creates a plain object from a tabUpdate message. Also converts values to other types if specified.
     * @param message tabUpdate
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: tabUpdate, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this tabUpdate to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an entityCreate. */
export interface IentityCreate {

    /** entityCreate uuid */
    uuid?: (string|null);

    /** entityCreate data */
    data?: (string|null);
}

/** Represents an entityCreate. */
export class entityCreate implements IentityCreate {

    /**
     * Constructs a new entityCreate.
     * @param [properties] Properties to set
     */
    constructor(properties?: IentityCreate);

    /** entityCreate uuid. */
    public uuid: string;

    /** entityCreate data. */
    public data: string;

    /**
     * Creates a new entityCreate instance using the specified properties.
     * @param [properties] Properties to set
     * @returns entityCreate instance
     */
    public static create(properties?: IentityCreate): entityCreate;

    /**
     * Encodes the specified entityCreate message. Does not implicitly {@link entityCreate.verify|verify} messages.
     * @param message entityCreate message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IentityCreate, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified entityCreate message, length delimited. Does not implicitly {@link entityCreate.verify|verify} messages.
     * @param message entityCreate message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IentityCreate, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an entityCreate message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns entityCreate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): entityCreate;

    /**
     * Decodes an entityCreate message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns entityCreate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): entityCreate;

    /**
     * Verifies an entityCreate message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an entityCreate message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns entityCreate
     */
    public static fromObject(object: { [k: string]: any }): entityCreate;

    /**
     * Creates a plain object from an entityCreate message. Also converts values to other types if specified.
     * @param message entityCreate
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: entityCreate, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this entityCreate to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an entityRemove. */
export interface IentityRemove {

    /** entityRemove uuid */
    uuid?: (string|null);
}

/** Represents an entityRemove. */
export class entityRemove implements IentityRemove {

    /**
     * Constructs a new entityRemove.
     * @param [properties] Properties to set
     */
    constructor(properties?: IentityRemove);

    /** entityRemove uuid. */
    public uuid: string;

    /**
     * Creates a new entityRemove instance using the specified properties.
     * @param [properties] Properties to set
     * @returns entityRemove instance
     */
    public static create(properties?: IentityRemove): entityRemove;

    /**
     * Encodes the specified entityRemove message. Does not implicitly {@link entityRemove.verify|verify} messages.
     * @param message entityRemove message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IentityRemove, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified entityRemove message, length delimited. Does not implicitly {@link entityRemove.verify|verify} messages.
     * @param message entityRemove message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IentityRemove, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an entityRemove message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns entityRemove
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): entityRemove;

    /**
     * Decodes an entityRemove message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns entityRemove
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): entityRemove;

    /**
     * Verifies an entityRemove message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an entityRemove message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns entityRemove
     */
    public static fromObject(object: { [k: string]: any }): entityRemove;

    /**
     * Creates a plain object from an entityRemove message. Also converts values to other types if specified.
     * @param message entityRemove
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: entityRemove, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this entityRemove to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an entityMove. */
export interface IentityMove {

    /** entityMove uuid */
    uuid?: (string|null);

    /** entityMove x */
    x?: (number|null);

    /** entityMove y */
    y?: (number|null);

    /** entityMove z */
    z?: (number|null);

    /** entityMove rotation */
    rotation?: (number|null);
}

/** Represents an entityMove. */
export class entityMove implements IentityMove {

    /**
     * Constructs a new entityMove.
     * @param [properties] Properties to set
     */
    constructor(properties?: IentityMove);

    /** entityMove uuid. */
    public uuid: string;

    /** entityMove x. */
    public x: number;

    /** entityMove y. */
    public y: number;

    /** entityMove z. */
    public z: number;

    /** entityMove rotation. */
    public rotation: number;

    /**
     * Creates a new entityMove instance using the specified properties.
     * @param [properties] Properties to set
     * @returns entityMove instance
     */
    public static create(properties?: IentityMove): entityMove;

    /**
     * Encodes the specified entityMove message. Does not implicitly {@link entityMove.verify|verify} messages.
     * @param message entityMove message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IentityMove, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified entityMove message, length delimited. Does not implicitly {@link entityMove.verify|verify} messages.
     * @param message entityMove message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IentityMove, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an entityMove message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns entityMove
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): entityMove;

    /**
     * Decodes an entityMove message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns entityMove
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): entityMove;

    /**
     * Verifies an entityMove message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an entityMove message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns entityMove
     */
    public static fromObject(object: { [k: string]: any }): entityMove;

    /**
     * Creates a plain object from an entityMove message. Also converts values to other types if specified.
     * @param message entityMove
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: entityMove, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this entityMove to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a worldBlockUpdate. */
export interface IworldBlockUpdate {

    /** worldBlockUpdate x */
    x?: (number|null);

    /** worldBlockUpdate y */
    y?: (number|null);

    /** worldBlockUpdate z */
    z?: (number|null);

    /** worldBlockUpdate id */
    id?: (number|null);
}

/** Represents a worldBlockUpdate. */
export class worldBlockUpdate implements IworldBlockUpdate {

    /**
     * Constructs a new worldBlockUpdate.
     * @param [properties] Properties to set
     */
    constructor(properties?: IworldBlockUpdate);

    /** worldBlockUpdate x. */
    public x: number;

    /** worldBlockUpdate y. */
    public y: number;

    /** worldBlockUpdate z. */
    public z: number;

    /** worldBlockUpdate id. */
    public id: number;

    /**
     * Creates a new worldBlockUpdate instance using the specified properties.
     * @param [properties] Properties to set
     * @returns worldBlockUpdate instance
     */
    public static create(properties?: IworldBlockUpdate): worldBlockUpdate;

    /**
     * Encodes the specified worldBlockUpdate message. Does not implicitly {@link worldBlockUpdate.verify|verify} messages.
     * @param message worldBlockUpdate message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IworldBlockUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified worldBlockUpdate message, length delimited. Does not implicitly {@link worldBlockUpdate.verify|verify} messages.
     * @param message worldBlockUpdate message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IworldBlockUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a worldBlockUpdate message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns worldBlockUpdate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): worldBlockUpdate;

    /**
     * Decodes a worldBlockUpdate message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns worldBlockUpdate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): worldBlockUpdate;

    /**
     * Verifies a worldBlockUpdate message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a worldBlockUpdate message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns worldBlockUpdate
     */
    public static fromObject(object: { [k: string]: any }): worldBlockUpdate;

    /**
     * Creates a plain object from a worldBlockUpdate message. Also converts values to other types if specified.
     * @param message worldBlockUpdate
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: worldBlockUpdate, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this worldBlockUpdate to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a worldChunk. */
export interface IworldChunk {

    /** worldChunk x */
    x?: (number|null);

    /** worldChunk y */
    y?: (number|null);

    /** worldChunk z */
    z?: (number|null);

    /** worldChunk data */
    data?: (Uint8Array|null);

    /** worldChunk type */
    type?: (boolean|null);
}

/** Represents a worldChunk. */
export class worldChunk implements IworldChunk {

    /**
     * Constructs a new worldChunk.
     * @param [properties] Properties to set
     */
    constructor(properties?: IworldChunk);

    /** worldChunk x. */
    public x: number;

    /** worldChunk y. */
    public y: number;

    /** worldChunk z. */
    public z: number;

    /** worldChunk data. */
    public data: Uint8Array;

    /** worldChunk type. */
    public type: boolean;

    /**
     * Creates a new worldChunk instance using the specified properties.
     * @param [properties] Properties to set
     * @returns worldChunk instance
     */
    public static create(properties?: IworldChunk): worldChunk;

    /**
     * Encodes the specified worldChunk message. Does not implicitly {@link worldChunk.verify|verify} messages.
     * @param message worldChunk message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IworldChunk, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified worldChunk message, length delimited. Does not implicitly {@link worldChunk.verify|verify} messages.
     * @param message worldChunk message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IworldChunk, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a worldChunk message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns worldChunk
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): worldChunk;

    /**
     * Decodes a worldChunk message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns worldChunk
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): worldChunk;

    /**
     * Verifies a worldChunk message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a worldChunk message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns worldChunk
     */
    public static fromObject(object: { [k: string]: any }): worldChunk;

    /**
     * Creates a plain object from a worldChunk message. Also converts values to other types if specified.
     * @param message worldChunk
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: worldChunk, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this worldChunk to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}
