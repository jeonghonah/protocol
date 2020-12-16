import * as $protobuf from "protobufjs";
/** Properties of an AuthResponce. */
export interface IAuthResponce {

    /** AuthResponce username */
    username?: (string|null);

    /** AuthResponce protocol */
    protocol?: (number|null);

    /** AuthResponce mobile */
    mobile?: (boolean|null);

    /** AuthResponce client */
    client?: (string|null);

    /** AuthResponce uuid */
    uuid?: (string|null);

    /** AuthResponce secret */
    secret?: (string|null);
}

/** Represents an AuthResponce. */
export class AuthResponce implements IAuthResponce {

    /**
     * Constructs a new AuthResponce.
     * @param [properties] Properties to set
     */
    constructor(properties?: IAuthResponce);

    /** AuthResponce username. */
    public username: string;

    /** AuthResponce protocol. */
    public protocol: number;

    /** AuthResponce mobile. */
    public mobile: boolean;

    /** AuthResponce client. */
    public client: string;

    /** AuthResponce uuid. */
    public uuid: string;

    /** AuthResponce secret. */
    public secret: string;

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
