import * as $protobuf from "protobufjs";
/** Properties of a LoginResponse. */
export interface ILoginResponse {

    /** LoginResponse username */
    username?: (string|null);

    /** LoginResponse protocol */
    protocol?: (number|null);

    /** LoginResponse mobile */
    mobile?: (boolean|null);

    /** LoginResponse client */
    client?: (string|null);

    /** LoginResponse uuid */
    uuid?: (string|null);

    /** LoginResponse secret */
    secret?: (string|null);
}

/** Represents a LoginResponse. */
export class LoginResponse implements ILoginResponse {

    /**
     * Constructs a new LoginResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: ILoginResponse);

    /** LoginResponse username. */
    public username: string;

    /** LoginResponse protocol. */
    public protocol: number;

    /** LoginResponse mobile. */
    public mobile: boolean;

    /** LoginResponse client. */
    public client: string;

    /** LoginResponse uuid. */
    public uuid: string;

    /** LoginResponse secret. */
    public secret: string;

    /**
     * Creates a new LoginResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LoginResponse instance
     */
    public static create(properties?: ILoginResponse): LoginResponse;

    /**
     * Encodes the specified LoginResponse message. Does not implicitly {@link LoginResponse.verify|verify} messages.
     * @param message LoginResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ILoginResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified LoginResponse message, length delimited. Does not implicitly {@link LoginResponse.verify|verify} messages.
     * @param message LoginResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ILoginResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LoginResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns LoginResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LoginResponse;

    /**
     * Decodes a LoginResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns LoginResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LoginResponse;

    /**
     * Verifies a LoginResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a LoginResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns LoginResponse
     */
    public static fromObject(object: { [k: string]: any }): LoginResponse;

    /**
     * Creates a plain object from a LoginResponse message. Also converts values to other types if specified.
     * @param message LoginResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: LoginResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this LoginResponse to JSON.
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

/** Properties of an ActionMove. */
export interface IActionMove {

    /** ActionMove x */
    x?: (number|null);

    /** ActionMove y */
    y?: (number|null);

    /** ActionMove z */
    z?: (number|null);
}

/** Represents an ActionMove. */
export class ActionMove implements IActionMove {

    /**
     * Constructs a new ActionMove.
     * @param [properties] Properties to set
     */
    constructor(properties?: IActionMove);

    /** ActionMove x. */
    public x: number;

    /** ActionMove y. */
    public y: number;

    /** ActionMove z. */
    public z: number;

    /**
     * Creates a new ActionMove instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ActionMove instance
     */
    public static create(properties?: IActionMove): ActionMove;

    /**
     * Encodes the specified ActionMove message. Does not implicitly {@link ActionMove.verify|verify} messages.
     * @param message ActionMove message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IActionMove, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ActionMove message, length delimited. Does not implicitly {@link ActionMove.verify|verify} messages.
     * @param message ActionMove message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IActionMove, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an ActionMove message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ActionMove
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ActionMove;

    /**
     * Decodes an ActionMove message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ActionMove
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ActionMove;

    /**
     * Verifies an ActionMove message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an ActionMove message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ActionMove
     */
    public static fromObject(object: { [k: string]: any }): ActionMove;

    /**
     * Creates a plain object from an ActionMove message. Also converts values to other types if specified.
     * @param message ActionMove
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ActionMove, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ActionMove to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an ActionLook. */
export interface IActionLook {

    /** ActionLook rotation */
    rotation?: (number|null);

    /** ActionLook pitch */
    pitch?: (number|null);
}

/** Represents an ActionLook. */
export class ActionLook implements IActionLook {

    /**
     * Constructs a new ActionLook.
     * @param [properties] Properties to set
     */
    constructor(properties?: IActionLook);

    /** ActionLook rotation. */
    public rotation: number;

    /** ActionLook pitch. */
    public pitch: number;

    /**
     * Creates a new ActionLook instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ActionLook instance
     */
    public static create(properties?: IActionLook): ActionLook;

    /**
     * Encodes the specified ActionLook message. Does not implicitly {@link ActionLook.verify|verify} messages.
     * @param message ActionLook message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IActionLook, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ActionLook message, length delimited. Does not implicitly {@link ActionLook.verify|verify} messages.
     * @param message ActionLook message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IActionLook, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an ActionLook message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ActionLook
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ActionLook;

    /**
     * Decodes an ActionLook message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ActionLook
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ActionLook;

    /**
     * Verifies an ActionLook message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an ActionLook message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ActionLook
     */
    public static fromObject(object: { [k: string]: any }): ActionLook;

    /**
     * Creates a plain object from an ActionLook message. Also converts values to other types if specified.
     * @param message ActionLook
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ActionLook, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ActionLook to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an ActionMoveLook. */
export interface IActionMoveLook {

    /** ActionMoveLook x */
    x?: (number|null);

    /** ActionMoveLook y */
    y?: (number|null);

    /** ActionMoveLook z */
    z?: (number|null);

    /** ActionMoveLook rotation */
    rotation?: (number|null);

    /** ActionMoveLook pitch */
    pitch?: (number|null);
}

/** Represents an ActionMoveLook. */
export class ActionMoveLook implements IActionMoveLook {

    /**
     * Constructs a new ActionMoveLook.
     * @param [properties] Properties to set
     */
    constructor(properties?: IActionMoveLook);

    /** ActionMoveLook x. */
    public x: number;

    /** ActionMoveLook y. */
    public y: number;

    /** ActionMoveLook z. */
    public z: number;

    /** ActionMoveLook rotation. */
    public rotation: number;

    /** ActionMoveLook pitch. */
    public pitch: number;

    /**
     * Creates a new ActionMoveLook instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ActionMoveLook instance
     */
    public static create(properties?: IActionMoveLook): ActionMoveLook;

    /**
     * Encodes the specified ActionMoveLook message. Does not implicitly {@link ActionMoveLook.verify|verify} messages.
     * @param message ActionMoveLook message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IActionMoveLook, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ActionMoveLook message, length delimited. Does not implicitly {@link ActionMoveLook.verify|verify} messages.
     * @param message ActionMoveLook message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IActionMoveLook, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an ActionMoveLook message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ActionMoveLook
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ActionMoveLook;

    /**
     * Decodes an ActionMoveLook message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ActionMoveLook
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ActionMoveLook;

    /**
     * Verifies an ActionMoveLook message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an ActionMoveLook message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ActionMoveLook
     */
    public static fromObject(object: { [k: string]: any }): ActionMoveLook;

    /**
     * Creates a plain object from an ActionMoveLook message. Also converts values to other types if specified.
     * @param message ActionMoveLook
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ActionMoveLook, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ActionMoveLook to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an ActionMessage. */
export interface IActionMessage {

    /** ActionMessage message */
    message?: (string|null);
}

/** Represents an ActionMessage. */
export class ActionMessage implements IActionMessage {

    /**
     * Constructs a new ActionMessage.
     * @param [properties] Properties to set
     */
    constructor(properties?: IActionMessage);

    /** ActionMessage message. */
    public message: string;

    /**
     * Creates a new ActionMessage instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ActionMessage instance
     */
    public static create(properties?: IActionMessage): ActionMessage;

    /**
     * Encodes the specified ActionMessage message. Does not implicitly {@link ActionMessage.verify|verify} messages.
     * @param message ActionMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IActionMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ActionMessage message, length delimited. Does not implicitly {@link ActionMessage.verify|verify} messages.
     * @param message ActionMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IActionMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an ActionMessage message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ActionMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ActionMessage;

    /**
     * Decodes an ActionMessage message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ActionMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ActionMessage;

    /**
     * Verifies an ActionMessage message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an ActionMessage message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ActionMessage
     */
    public static fromObject(object: { [k: string]: any }): ActionMessage;

    /**
     * Creates a plain object from an ActionMessage message. Also converts values to other types if specified.
     * @param message ActionMessage
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ActionMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ActionMessage to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an ActionBlockPlace. */
export interface IActionBlockPlace {

    /** ActionBlockPlace x */
    x?: (number|null);

    /** ActionBlockPlace y */
    y?: (number|null);

    /** ActionBlockPlace z */
    z?: (number|null);

    /** ActionBlockPlace x2 */
    x2?: (number|null);

    /** ActionBlockPlace y2 */
    y2?: (number|null);

    /** ActionBlockPlace z2 */
    z2?: (number|null);
}

/** Represents an ActionBlockPlace. */
export class ActionBlockPlace implements IActionBlockPlace {

    /**
     * Constructs a new ActionBlockPlace.
     * @param [properties] Properties to set
     */
    constructor(properties?: IActionBlockPlace);

    /** ActionBlockPlace x. */
    public x: number;

    /** ActionBlockPlace y. */
    public y: number;

    /** ActionBlockPlace z. */
    public z: number;

    /** ActionBlockPlace x2. */
    public x2: number;

    /** ActionBlockPlace y2. */
    public y2: number;

    /** ActionBlockPlace z2. */
    public z2: number;

    /**
     * Creates a new ActionBlockPlace instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ActionBlockPlace instance
     */
    public static create(properties?: IActionBlockPlace): ActionBlockPlace;

    /**
     * Encodes the specified ActionBlockPlace message. Does not implicitly {@link ActionBlockPlace.verify|verify} messages.
     * @param message ActionBlockPlace message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IActionBlockPlace, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ActionBlockPlace message, length delimited. Does not implicitly {@link ActionBlockPlace.verify|verify} messages.
     * @param message ActionBlockPlace message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IActionBlockPlace, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an ActionBlockPlace message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ActionBlockPlace
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ActionBlockPlace;

    /**
     * Decodes an ActionBlockPlace message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ActionBlockPlace
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ActionBlockPlace;

    /**
     * Verifies an ActionBlockPlace message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an ActionBlockPlace message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ActionBlockPlace
     */
    public static fromObject(object: { [k: string]: any }): ActionBlockPlace;

    /**
     * Creates a plain object from an ActionBlockPlace message. Also converts values to other types if specified.
     * @param message ActionBlockPlace
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ActionBlockPlace, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ActionBlockPlace to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an ActionBlockBreak. */
export interface IActionBlockBreak {

    /** ActionBlockBreak x */
    x?: (number|null);

    /** ActionBlockBreak y */
    y?: (number|null);

    /** ActionBlockBreak z */
    z?: (number|null);

    /** ActionBlockBreak finished */
    finished?: (boolean|null);
}

/** Represents an ActionBlockBreak. */
export class ActionBlockBreak implements IActionBlockBreak {

    /**
     * Constructs a new ActionBlockBreak.
     * @param [properties] Properties to set
     */
    constructor(properties?: IActionBlockBreak);

    /** ActionBlockBreak x. */
    public x: number;

    /** ActionBlockBreak y. */
    public y: number;

    /** ActionBlockBreak z. */
    public z: number;

    /** ActionBlockBreak finished. */
    public finished: boolean;

    /**
     * Creates a new ActionBlockBreak instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ActionBlockBreak instance
     */
    public static create(properties?: IActionBlockBreak): ActionBlockBreak;

    /**
     * Encodes the specified ActionBlockBreak message. Does not implicitly {@link ActionBlockBreak.verify|verify} messages.
     * @param message ActionBlockBreak message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IActionBlockBreak, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ActionBlockBreak message, length delimited. Does not implicitly {@link ActionBlockBreak.verify|verify} messages.
     * @param message ActionBlockBreak message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IActionBlockBreak, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an ActionBlockBreak message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ActionBlockBreak
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ActionBlockBreak;

    /**
     * Decodes an ActionBlockBreak message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ActionBlockBreak
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ActionBlockBreak;

    /**
     * Verifies an ActionBlockBreak message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an ActionBlockBreak message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ActionBlockBreak
     */
    public static fromObject(object: { [k: string]: any }): ActionBlockBreak;

    /**
     * Creates a plain object from an ActionBlockBreak message. Also converts values to other types if specified.
     * @param message ActionBlockBreak
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ActionBlockBreak, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ActionBlockBreak to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an ActionInventoryClick. */
export interface IActionInventoryClick {

    /** ActionInventoryClick slot */
    slot?: (number|null);

    /** ActionInventoryClick type */
    type?: (MouseClickType|null);

    /** ActionInventoryClick inventory */
    inventory?: (InventoryType|null);
}

/** Represents an ActionInventoryClick. */
export class ActionInventoryClick implements IActionInventoryClick {

    /**
     * Constructs a new ActionInventoryClick.
     * @param [properties] Properties to set
     */
    constructor(properties?: IActionInventoryClick);

    /** ActionInventoryClick slot. */
    public slot: number;

    /** ActionInventoryClick type. */
    public type: MouseClickType;

    /** ActionInventoryClick inventory. */
    public inventory: InventoryType;

    /**
     * Creates a new ActionInventoryClick instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ActionInventoryClick instance
     */
    public static create(properties?: IActionInventoryClick): ActionInventoryClick;

    /**
     * Encodes the specified ActionInventoryClick message. Does not implicitly {@link ActionInventoryClick.verify|verify} messages.
     * @param message ActionInventoryClick message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IActionInventoryClick, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ActionInventoryClick message, length delimited. Does not implicitly {@link ActionInventoryClick.verify|verify} messages.
     * @param message ActionInventoryClick message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IActionInventoryClick, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an ActionInventoryClick message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ActionInventoryClick
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ActionInventoryClick;

    /**
     * Decodes an ActionInventoryClick message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ActionInventoryClick
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ActionInventoryClick;

    /**
     * Verifies an ActionInventoryClick message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an ActionInventoryClick message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ActionInventoryClick
     */
    public static fromObject(object: { [k: string]: any }): ActionInventoryClick;

    /**
     * Creates a plain object from an ActionInventoryClick message. Also converts values to other types if specified.
     * @param message ActionInventoryClick
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ActionInventoryClick, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ActionInventoryClick to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an ActionInventoryPick. */
export interface IActionInventoryPick {

    /** ActionInventoryPick slot */
    slot?: (number|null);

    /** ActionInventoryPick slot2 */
    slot2?: (number|null);

    /** ActionInventoryPick block */
    block?: (number|null);
}

/** Represents an ActionInventoryPick. */
export class ActionInventoryPick implements IActionInventoryPick {

    /**
     * Constructs a new ActionInventoryPick.
     * @param [properties] Properties to set
     */
    constructor(properties?: IActionInventoryPick);

    /** ActionInventoryPick slot. */
    public slot: number;

    /** ActionInventoryPick slot2. */
    public slot2: number;

    /** ActionInventoryPick block. */
    public block: number;

    /**
     * Creates a new ActionInventoryPick instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ActionInventoryPick instance
     */
    public static create(properties?: IActionInventoryPick): ActionInventoryPick;

    /**
     * Encodes the specified ActionInventoryPick message. Does not implicitly {@link ActionInventoryPick.verify|verify} messages.
     * @param message ActionInventoryPick message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IActionInventoryPick, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ActionInventoryPick message, length delimited. Does not implicitly {@link ActionInventoryPick.verify|verify} messages.
     * @param message ActionInventoryPick message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IActionInventoryPick, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an ActionInventoryPick message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ActionInventoryPick
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ActionInventoryPick;

    /**
     * Decodes an ActionInventoryPick message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ActionInventoryPick
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ActionInventoryPick;

    /**
     * Verifies an ActionInventoryPick message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an ActionInventoryPick message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ActionInventoryPick
     */
    public static fromObject(object: { [k: string]: any }): ActionInventoryPick;

    /**
     * Creates a plain object from an ActionInventoryPick message. Also converts values to other types if specified.
     * @param message ActionInventoryPick
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ActionInventoryPick, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ActionInventoryPick to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an ActionInventoryOpen. */
export interface IActionInventoryOpen {

    /** ActionInventoryOpen inventory */
    inventory?: (ContainerType|null);
}

/** Represents an ActionInventoryOpen. */
export class ActionInventoryOpen implements IActionInventoryOpen {

    /**
     * Constructs a new ActionInventoryOpen.
     * @param [properties] Properties to set
     */
    constructor(properties?: IActionInventoryOpen);

    /** ActionInventoryOpen inventory. */
    public inventory: ContainerType;

    /**
     * Creates a new ActionInventoryOpen instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ActionInventoryOpen instance
     */
    public static create(properties?: IActionInventoryOpen): ActionInventoryOpen;

    /**
     * Encodes the specified ActionInventoryOpen message. Does not implicitly {@link ActionInventoryOpen.verify|verify} messages.
     * @param message ActionInventoryOpen message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IActionInventoryOpen, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ActionInventoryOpen message, length delimited. Does not implicitly {@link ActionInventoryOpen.verify|verify} messages.
     * @param message ActionInventoryOpen message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IActionInventoryOpen, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an ActionInventoryOpen message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ActionInventoryOpen
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ActionInventoryOpen;

    /**
     * Decodes an ActionInventoryOpen message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ActionInventoryOpen
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ActionInventoryOpen;

    /**
     * Verifies an ActionInventoryOpen message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an ActionInventoryOpen message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ActionInventoryOpen
     */
    public static fromObject(object: { [k: string]: any }): ActionInventoryOpen;

    /**
     * Creates a plain object from an ActionInventoryOpen message. Also converts values to other types if specified.
     * @param message ActionInventoryOpen
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ActionInventoryOpen, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ActionInventoryOpen to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an ActionInventoryClose. */
export interface IActionInventoryClose {

    /** ActionInventoryClose inventory */
    inventory?: (ContainerType|null);
}

/** Represents an ActionInventoryClose. */
export class ActionInventoryClose implements IActionInventoryClose {

    /**
     * Constructs a new ActionInventoryClose.
     * @param [properties] Properties to set
     */
    constructor(properties?: IActionInventoryClose);

    /** ActionInventoryClose inventory. */
    public inventory: ContainerType;

    /**
     * Creates a new ActionInventoryClose instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ActionInventoryClose instance
     */
    public static create(properties?: IActionInventoryClose): ActionInventoryClose;

    /**
     * Encodes the specified ActionInventoryClose message. Does not implicitly {@link ActionInventoryClose.verify|verify} messages.
     * @param message ActionInventoryClose message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IActionInventoryClose, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ActionInventoryClose message, length delimited. Does not implicitly {@link ActionInventoryClose.verify|verify} messages.
     * @param message ActionInventoryClose message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IActionInventoryClose, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an ActionInventoryClose message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ActionInventoryClose
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ActionInventoryClose;

    /**
     * Decodes an ActionInventoryClose message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ActionInventoryClose
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ActionInventoryClose;

    /**
     * Verifies an ActionInventoryClose message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an ActionInventoryClose message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ActionInventoryClose
     */
    public static fromObject(object: { [k: string]: any }): ActionInventoryClose;

    /**
     * Creates a plain object from an ActionInventoryClose message. Also converts values to other types if specified.
     * @param message ActionInventoryClose
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ActionInventoryClose, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ActionInventoryClose to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an ActionClick. */
export interface IActionClick {

    /** ActionClick x */
    x?: (number|null);

    /** ActionClick y */
    y?: (number|null);

    /** ActionClick z */
    z?: (number|null);

    /** ActionClick type */
    type?: (MouseClickType|null);

    /** ActionClick onBlock */
    onBlock?: (boolean|null);
}

/** Represents an ActionClick. */
export class ActionClick implements IActionClick {

    /**
     * Constructs a new ActionClick.
     * @param [properties] Properties to set
     */
    constructor(properties?: IActionClick);

    /** ActionClick x. */
    public x: number;

    /** ActionClick y. */
    public y: number;

    /** ActionClick z. */
    public z: number;

    /** ActionClick type. */
    public type: MouseClickType;

    /** ActionClick onBlock. */
    public onBlock: boolean;

    /**
     * Creates a new ActionClick instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ActionClick instance
     */
    public static create(properties?: IActionClick): ActionClick;

    /**
     * Encodes the specified ActionClick message. Does not implicitly {@link ActionClick.verify|verify} messages.
     * @param message ActionClick message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IActionClick, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ActionClick message, length delimited. Does not implicitly {@link ActionClick.verify|verify} messages.
     * @param message ActionClick message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IActionClick, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an ActionClick message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ActionClick
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ActionClick;

    /**
     * Decodes an ActionClick message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ActionClick
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ActionClick;

    /**
     * Verifies an ActionClick message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an ActionClick message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ActionClick
     */
    public static fromObject(object: { [k: string]: any }): ActionClick;

    /**
     * Creates a plain object from an ActionClick message. Also converts values to other types if specified.
     * @param message ActionClick
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ActionClick, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ActionClick to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an ActionClickEntity. */
export interface IActionClickEntity {

    /** ActionClickEntity uuid */
    uuid?: (string|null);

    /** ActionClickEntity type */
    type?: (string|null);

    /** ActionClickEntity distance */
    distance?: (number|null);
}

/** Represents an ActionClickEntity. */
export class ActionClickEntity implements IActionClickEntity {

    /**
     * Constructs a new ActionClickEntity.
     * @param [properties] Properties to set
     */
    constructor(properties?: IActionClickEntity);

    /** ActionClickEntity uuid. */
    public uuid: string;

    /** ActionClickEntity type. */
    public type: string;

    /** ActionClickEntity distance. */
    public distance: number;

    /**
     * Creates a new ActionClickEntity instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ActionClickEntity instance
     */
    public static create(properties?: IActionClickEntity): ActionClickEntity;

    /**
     * Encodes the specified ActionClickEntity message. Does not implicitly {@link ActionClickEntity.verify|verify} messages.
     * @param message ActionClickEntity message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IActionClickEntity, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ActionClickEntity message, length delimited. Does not implicitly {@link ActionClickEntity.verify|verify} messages.
     * @param message ActionClickEntity message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IActionClickEntity, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an ActionClickEntity message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ActionClickEntity
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ActionClickEntity;

    /**
     * Decodes an ActionClickEntity message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ActionClickEntity
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ActionClickEntity;

    /**
     * Verifies an ActionClickEntity message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an ActionClickEntity message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ActionClickEntity
     */
    public static fromObject(object: { [k: string]: any }): ActionClickEntity;

    /**
     * Creates a plain object from an ActionClickEntity message. Also converts values to other types if specified.
     * @param message ActionClickEntity
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ActionClickEntity, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ActionClickEntity to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an ActionKeyPress. */
export interface IActionKeyPress {

    /** ActionKeyPress key */
    key?: (string|null);

    /** ActionKeyPress type */
    type?: (boolean|null);
}

/** Represents an ActionKeyPress. */
export class ActionKeyPress implements IActionKeyPress {

    /**
     * Constructs a new ActionKeyPress.
     * @param [properties] Properties to set
     */
    constructor(properties?: IActionKeyPress);

    /** ActionKeyPress key. */
    public key: string;

    /** ActionKeyPress type. */
    public type: boolean;

    /**
     * Creates a new ActionKeyPress instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ActionKeyPress instance
     */
    public static create(properties?: IActionKeyPress): ActionKeyPress;

    /**
     * Encodes the specified ActionKeyPress message. Does not implicitly {@link ActionKeyPress.verify|verify} messages.
     * @param message ActionKeyPress message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IActionKeyPress, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ActionKeyPress message, length delimited. Does not implicitly {@link ActionKeyPress.verify|verify} messages.
     * @param message ActionKeyPress message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IActionKeyPress, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an ActionKeyPress message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ActionKeyPress
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ActionKeyPress;

    /**
     * Decodes an ActionKeyPress message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ActionKeyPress
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ActionKeyPress;

    /**
     * Verifies an ActionKeyPress message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an ActionKeyPress message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ActionKeyPress
     */
    public static fromObject(object: { [k: string]: any }): ActionKeyPress;

    /**
     * Creates a plain object from an ActionKeyPress message. Also converts values to other types if specified.
     * @param message ActionKeyPress
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ActionKeyPress, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ActionKeyPress to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a WorldChunkIsLoadedResponce. */
export interface IWorldChunkIsLoadedResponce {

    /** WorldChunkIsLoadedResponce x */
    x?: (number|null);

    /** WorldChunkIsLoadedResponce y */
    y?: (number|null);

    /** WorldChunkIsLoadedResponce z */
    z?: (number|null);

    /** WorldChunkIsLoadedResponce loaded */
    loaded?: (boolean|null);
}

/** Represents a WorldChunkIsLoadedResponce. */
export class WorldChunkIsLoadedResponce implements IWorldChunkIsLoadedResponce {

    /**
     * Constructs a new WorldChunkIsLoadedResponce.
     * @param [properties] Properties to set
     */
    constructor(properties?: IWorldChunkIsLoadedResponce);

    /** WorldChunkIsLoadedResponce x. */
    public x: number;

    /** WorldChunkIsLoadedResponce y. */
    public y: number;

    /** WorldChunkIsLoadedResponce z. */
    public z: number;

    /** WorldChunkIsLoadedResponce loaded. */
    public loaded: boolean;

    /**
     * Creates a new WorldChunkIsLoadedResponce instance using the specified properties.
     * @param [properties] Properties to set
     * @returns WorldChunkIsLoadedResponce instance
     */
    public static create(properties?: IWorldChunkIsLoadedResponce): WorldChunkIsLoadedResponce;

    /**
     * Encodes the specified WorldChunkIsLoadedResponce message. Does not implicitly {@link WorldChunkIsLoadedResponce.verify|verify} messages.
     * @param message WorldChunkIsLoadedResponce message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IWorldChunkIsLoadedResponce, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified WorldChunkIsLoadedResponce message, length delimited. Does not implicitly {@link WorldChunkIsLoadedResponce.verify|verify} messages.
     * @param message WorldChunkIsLoadedResponce message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IWorldChunkIsLoadedResponce, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a WorldChunkIsLoadedResponce message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns WorldChunkIsLoadedResponce
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WorldChunkIsLoadedResponce;

    /**
     * Decodes a WorldChunkIsLoadedResponce message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns WorldChunkIsLoadedResponce
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WorldChunkIsLoadedResponce;

    /**
     * Verifies a WorldChunkIsLoadedResponce message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a WorldChunkIsLoadedResponce message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns WorldChunkIsLoadedResponce
     */
    public static fromObject(object: { [k: string]: any }): WorldChunkIsLoadedResponce;

    /**
     * Creates a plain object from a WorldChunkIsLoadedResponce message. Also converts values to other types if specified.
     * @param message WorldChunkIsLoadedResponce
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: WorldChunkIsLoadedResponce, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this WorldChunkIsLoadedResponce to JSON.
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

/** Properties of a ProxyInfo. */
export interface IProxyInfo {

    /** ProxyInfo name */
    name?: (string|null);

    /** ProxyInfo proxyProtocol */
    proxyProtocol?: (number|null);

    /** ProxyInfo onlinePlayers */
    onlinePlayers?: (number|null);

    /** ProxyInfo maxPlayers */
    maxPlayers?: (number|null);

    /** ProxyInfo motd */
    motd?: (string|null);

    /** ProxyInfo software */
    software?: (string|null);

    /** ProxyInfo auth */
    auth?: (boolean|null);

    /** ProxyInfo secret */
    secret?: (string|null);

    /** ProxyInfo isProxy */
    isProxy?: (boolean|null);
}

/** Represents a ProxyInfo. */
export class ProxyInfo implements IProxyInfo {

    /**
     * Constructs a new ProxyInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProxyInfo);

    /** ProxyInfo name. */
    public name: string;

    /** ProxyInfo proxyProtocol. */
    public proxyProtocol: number;

    /** ProxyInfo onlinePlayers. */
    public onlinePlayers: number;

    /** ProxyInfo maxPlayers. */
    public maxPlayers: number;

    /** ProxyInfo motd. */
    public motd: string;

    /** ProxyInfo software. */
    public software: string;

    /** ProxyInfo auth. */
    public auth: boolean;

    /** ProxyInfo secret. */
    public secret: string;

    /** ProxyInfo isProxy. */
    public isProxy: boolean;

    /**
     * Creates a new ProxyInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProxyInfo instance
     */
    public static create(properties?: IProxyInfo): ProxyInfo;

    /**
     * Encodes the specified ProxyInfo message. Does not implicitly {@link ProxyInfo.verify|verify} messages.
     * @param message ProxyInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProxyInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ProxyInfo message, length delimited. Does not implicitly {@link ProxyInfo.verify|verify} messages.
     * @param message ProxyInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProxyInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProxyInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProxyInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProxyInfo;

    /**
     * Decodes a ProxyInfo message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ProxyInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ProxyInfo;

    /**
     * Verifies a ProxyInfo message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ProxyInfo message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ProxyInfo
     */
    public static fromObject(object: { [k: string]: any }): ProxyInfo;

    /**
     * Creates a plain object from a ProxyInfo message. Also converts values to other types if specified.
     * @param message ProxyInfo
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ProxyInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ProxyInfo to JSON.
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

    /** LoginSuccess itemsDef */
    itemsDef?: (string|null);

    /** LoginSuccess blocksDef */
    blocksDef?: (string|null);
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

    /** LoginSuccess itemsDef. */
    public itemsDef: string;

    /** LoginSuccess blocksDef. */
    public blocksDef: string;

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

/** InventoryType enum. */
export enum InventoryType {
    MAIN = 0,
    ARMOR = 1,
    CRAFTING = 2,
    HOOK = 3
}

/** ContainerType enum. */
export enum ContainerType {
    MAIN = 0,
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
