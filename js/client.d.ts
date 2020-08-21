import * as $protobuf from "protobufjs";
/** Properties of a loginResponse. */
export interface IloginResponse {

    /** loginResponse username */
    username?: (string|null);

    /** loginResponse protocol */
    protocol?: (number|null);

    /** loginResponse mobile */
    mobile?: (boolean|null);
}

/** Represents a loginResponse. */
export class loginResponse implements IloginResponse {

    /**
     * Constructs a new loginResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IloginResponse);

    /** loginResponse username. */
    public username: string;

    /** loginResponse protocol. */
    public protocol: number;

    /** loginResponse mobile. */
    public mobile: boolean;

    /**
     * Creates a new loginResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns loginResponse instance
     */
    public static create(properties?: IloginResponse): loginResponse;

    /**
     * Encodes the specified loginResponse message. Does not implicitly {@link loginResponse.verify|verify} messages.
     * @param message loginResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IloginResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified loginResponse message, length delimited. Does not implicitly {@link loginResponse.verify|verify} messages.
     * @param message loginResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IloginResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a loginResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns loginResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): loginResponse;

    /**
     * Decodes a loginResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns loginResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): loginResponse;

    /**
     * Verifies a loginResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a loginResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns loginResponse
     */
    public static fromObject(object: { [k: string]: any }): loginResponse;

    /**
     * Creates a plain object from a loginResponse message. Also converts values to other types if specified.
     * @param message loginResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: loginResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this loginResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an actionMove. */
export interface IactionMove {

    /** actionMove x */
    x?: (number|null);

    /** actionMove y */
    y?: (number|null);

    /** actionMove z */
    z?: (number|null);

    /** actionMove rotation */
    rotation?: (number|null);
}

/** Represents an actionMove. */
export class actionMove implements IactionMove {

    /**
     * Constructs a new actionMove.
     * @param [properties] Properties to set
     */
    constructor(properties?: IactionMove);

    /** actionMove x. */
    public x: number;

    /** actionMove y. */
    public y: number;

    /** actionMove z. */
    public z: number;

    /** actionMove rotation. */
    public rotation: number;

    /**
     * Creates a new actionMove instance using the specified properties.
     * @param [properties] Properties to set
     * @returns actionMove instance
     */
    public static create(properties?: IactionMove): actionMove;

    /**
     * Encodes the specified actionMove message. Does not implicitly {@link actionMove.verify|verify} messages.
     * @param message actionMove message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IactionMove, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified actionMove message, length delimited. Does not implicitly {@link actionMove.verify|verify} messages.
     * @param message actionMove message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IactionMove, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an actionMove message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns actionMove
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): actionMove;

    /**
     * Decodes an actionMove message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns actionMove
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): actionMove;

    /**
     * Verifies an actionMove message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an actionMove message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns actionMove
     */
    public static fromObject(object: { [k: string]: any }): actionMove;

    /**
     * Creates a plain object from an actionMove message. Also converts values to other types if specified.
     * @param message actionMove
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: actionMove, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this actionMove to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an actionMessage. */
export interface IactionMessage {

    /** actionMessage message */
    message?: (string|null);
}

/** Represents an actionMessage. */
export class actionMessage implements IactionMessage {

    /**
     * Constructs a new actionMessage.
     * @param [properties] Properties to set
     */
    constructor(properties?: IactionMessage);

    /** actionMessage message. */
    public message: string;

    /**
     * Creates a new actionMessage instance using the specified properties.
     * @param [properties] Properties to set
     * @returns actionMessage instance
     */
    public static create(properties?: IactionMessage): actionMessage;

    /**
     * Encodes the specified actionMessage message. Does not implicitly {@link actionMessage.verify|verify} messages.
     * @param message actionMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IactionMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified actionMessage message, length delimited. Does not implicitly {@link actionMessage.verify|verify} messages.
     * @param message actionMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IactionMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an actionMessage message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns actionMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): actionMessage;

    /**
     * Decodes an actionMessage message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns actionMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): actionMessage;

    /**
     * Verifies an actionMessage message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an actionMessage message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns actionMessage
     */
    public static fromObject(object: { [k: string]: any }): actionMessage;

    /**
     * Creates a plain object from an actionMessage message. Also converts values to other types if specified.
     * @param message actionMessage
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: actionMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this actionMessage to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an actionBlockPlace. */
export interface IactionBlockPlace {

    /** actionBlockPlace x */
    x?: (number|null);

    /** actionBlockPlace y */
    y?: (number|null);

    /** actionBlockPlace z */
    z?: (number|null);

    /** actionBlockPlace x2 */
    x2?: (number|null);

    /** actionBlockPlace y2 */
    y2?: (number|null);

    /** actionBlockPlace z2 */
    z2?: (number|null);
}

/** Represents an actionBlockPlace. */
export class actionBlockPlace implements IactionBlockPlace {

    /**
     * Constructs a new actionBlockPlace.
     * @param [properties] Properties to set
     */
    constructor(properties?: IactionBlockPlace);

    /** actionBlockPlace x. */
    public x: number;

    /** actionBlockPlace y. */
    public y: number;

    /** actionBlockPlace z. */
    public z: number;

    /** actionBlockPlace x2. */
    public x2: number;

    /** actionBlockPlace y2. */
    public y2: number;

    /** actionBlockPlace z2. */
    public z2: number;

    /**
     * Creates a new actionBlockPlace instance using the specified properties.
     * @param [properties] Properties to set
     * @returns actionBlockPlace instance
     */
    public static create(properties?: IactionBlockPlace): actionBlockPlace;

    /**
     * Encodes the specified actionBlockPlace message. Does not implicitly {@link actionBlockPlace.verify|verify} messages.
     * @param message actionBlockPlace message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IactionBlockPlace, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified actionBlockPlace message, length delimited. Does not implicitly {@link actionBlockPlace.verify|verify} messages.
     * @param message actionBlockPlace message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IactionBlockPlace, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an actionBlockPlace message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns actionBlockPlace
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): actionBlockPlace;

    /**
     * Decodes an actionBlockPlace message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns actionBlockPlace
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): actionBlockPlace;

    /**
     * Verifies an actionBlockPlace message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an actionBlockPlace message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns actionBlockPlace
     */
    public static fromObject(object: { [k: string]: any }): actionBlockPlace;

    /**
     * Creates a plain object from an actionBlockPlace message. Also converts values to other types if specified.
     * @param message actionBlockPlace
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: actionBlockPlace, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this actionBlockPlace to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an actionBlockBreak. */
export interface IactionBlockBreak {

    /** actionBlockBreak x */
    x?: (number|null);

    /** actionBlockBreak y */
    y?: (number|null);

    /** actionBlockBreak z */
    z?: (number|null);
}

/** Represents an actionBlockBreak. */
export class actionBlockBreak implements IactionBlockBreak {

    /**
     * Constructs a new actionBlockBreak.
     * @param [properties] Properties to set
     */
    constructor(properties?: IactionBlockBreak);

    /** actionBlockBreak x. */
    public x: number;

    /** actionBlockBreak y. */
    public y: number;

    /** actionBlockBreak z. */
    public z: number;

    /**
     * Creates a new actionBlockBreak instance using the specified properties.
     * @param [properties] Properties to set
     * @returns actionBlockBreak instance
     */
    public static create(properties?: IactionBlockBreak): actionBlockBreak;

    /**
     * Encodes the specified actionBlockBreak message. Does not implicitly {@link actionBlockBreak.verify|verify} messages.
     * @param message actionBlockBreak message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IactionBlockBreak, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified actionBlockBreak message, length delimited. Does not implicitly {@link actionBlockBreak.verify|verify} messages.
     * @param message actionBlockBreak message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IactionBlockBreak, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an actionBlockBreak message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns actionBlockBreak
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): actionBlockBreak;

    /**
     * Decodes an actionBlockBreak message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns actionBlockBreak
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): actionBlockBreak;

    /**
     * Verifies an actionBlockBreak message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an actionBlockBreak message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns actionBlockBreak
     */
    public static fromObject(object: { [k: string]: any }): actionBlockBreak;

    /**
     * Creates a plain object from an actionBlockBreak message. Also converts values to other types if specified.
     * @param message actionBlockBreak
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: actionBlockBreak, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this actionBlockBreak to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an actionInventoryClick. */
export interface IactionInventoryClick {

    /** actionInventoryClick slot */
    slot?: (number|null);

    /** actionInventoryClick type */
    type?: (string|null);

    /** actionInventoryClick inventory */
    inventory?: (string|null);

    /** actionInventoryClick slot2 */
    slot2?: (number|null);
}

/** Represents an actionInventoryClick. */
export class actionInventoryClick implements IactionInventoryClick {

    /**
     * Constructs a new actionInventoryClick.
     * @param [properties] Properties to set
     */
    constructor(properties?: IactionInventoryClick);

    /** actionInventoryClick slot. */
    public slot: number;

    /** actionInventoryClick type. */
    public type: string;

    /** actionInventoryClick inventory. */
    public inventory: string;

    /** actionInventoryClick slot2. */
    public slot2: number;

    /**
     * Creates a new actionInventoryClick instance using the specified properties.
     * @param [properties] Properties to set
     * @returns actionInventoryClick instance
     */
    public static create(properties?: IactionInventoryClick): actionInventoryClick;

    /**
     * Encodes the specified actionInventoryClick message. Does not implicitly {@link actionInventoryClick.verify|verify} messages.
     * @param message actionInventoryClick message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IactionInventoryClick, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified actionInventoryClick message, length delimited. Does not implicitly {@link actionInventoryClick.verify|verify} messages.
     * @param message actionInventoryClick message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IactionInventoryClick, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an actionInventoryClick message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns actionInventoryClick
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): actionInventoryClick;

    /**
     * Decodes an actionInventoryClick message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns actionInventoryClick
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): actionInventoryClick;

    /**
     * Verifies an actionInventoryClick message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an actionInventoryClick message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns actionInventoryClick
     */
    public static fromObject(object: { [k: string]: any }): actionInventoryClick;

    /**
     * Creates a plain object from an actionInventoryClick message. Also converts values to other types if specified.
     * @param message actionInventoryClick
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: actionInventoryClick, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this actionInventoryClick to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a chunkRequest. */
export interface IchunkRequest {

    /** chunkRequest x */
    x?: (number|null);

    /** chunkRequest y */
    y?: (number|null);

    /** chunkRequest z */
    z?: (number|null);
}

/** Represents a chunkRequest. */
export class chunkRequest implements IchunkRequest {

    /**
     * Constructs a new chunkRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IchunkRequest);

    /** chunkRequest x. */
    public x: number;

    /** chunkRequest y. */
    public y: number;

    /** chunkRequest z. */
    public z: number;

    /**
     * Creates a new chunkRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns chunkRequest instance
     */
    public static create(properties?: IchunkRequest): chunkRequest;

    /**
     * Encodes the specified chunkRequest message. Does not implicitly {@link chunkRequest.verify|verify} messages.
     * @param message chunkRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IchunkRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified chunkRequest message, length delimited. Does not implicitly {@link chunkRequest.verify|verify} messages.
     * @param message chunkRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IchunkRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a chunkRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns chunkRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): chunkRequest;

    /**
     * Decodes a chunkRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns chunkRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): chunkRequest;

    /**
     * Verifies a chunkRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a chunkRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns chunkRequest
     */
    public static fromObject(object: { [k: string]: any }): chunkRequest;

    /**
     * Creates a plain object from a chunkRequest message. Also converts values to other types if specified.
     * @param message chunkRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: chunkRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this chunkRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}
