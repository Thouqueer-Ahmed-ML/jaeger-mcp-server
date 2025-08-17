import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace jaeger. */
export namespace jaeger {

    /** Namespace api_v3. */
    namespace api_v3 {

        /** Properties of a GetTraceRequest. */
        interface IGetTraceRequest {

            /** GetTraceRequest traceId */
            traceId?: (string|null);

            /** GetTraceRequest startTime */
            startTime?: (google.protobuf.ITimestamp|null);

            /** GetTraceRequest endTime */
            endTime?: (google.protobuf.ITimestamp|null);

            /** GetTraceRequest rawTraces */
            rawTraces?: (boolean|null);
        }

        /** Represents a GetTraceRequest. */
        class GetTraceRequest implements IGetTraceRequest {

            /**
             * Constructs a new GetTraceRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: jaeger.api_v3.IGetTraceRequest);

            /** GetTraceRequest traceId. */
            public traceId?: (string|null);

            /** GetTraceRequest startTime. */
            public startTime?: (google.protobuf.ITimestamp|null);

            /** GetTraceRequest endTime. */
            public endTime?: (google.protobuf.ITimestamp|null);

            /** GetTraceRequest rawTraces. */
            public rawTraces?: (boolean|null);

            /**
             * Creates a new GetTraceRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GetTraceRequest instance
             */
            public static create(properties?: jaeger.api_v3.IGetTraceRequest): jaeger.api_v3.GetTraceRequest;

            /**
             * Encodes the specified GetTraceRequest message. Does not implicitly {@link jaeger.api_v3.GetTraceRequest.verify|verify} messages.
             * @param message GetTraceRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: jaeger.api_v3.IGetTraceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GetTraceRequest message, length delimited. Does not implicitly {@link jaeger.api_v3.GetTraceRequest.verify|verify} messages.
             * @param message GetTraceRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: jaeger.api_v3.IGetTraceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetTraceRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GetTraceRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): jaeger.api_v3.GetTraceRequest;

            /**
             * Decodes a GetTraceRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GetTraceRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): jaeger.api_v3.GetTraceRequest;

            /**
             * Verifies a GetTraceRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GetTraceRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GetTraceRequest
             */
            public static fromObject(object: { [k: string]: any }): jaeger.api_v3.GetTraceRequest;

            /**
             * Creates a plain object from a GetTraceRequest message. Also converts values to other types if specified.
             * @param message GetTraceRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: jaeger.api_v3.GetTraceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GetTraceRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for GetTraceRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a TraceQueryParameters. */
        interface ITraceQueryParameters {

            /** TraceQueryParameters serviceName */
            serviceName?: (string|null);

            /** TraceQueryParameters operationName */
            operationName?: (string|null);

            /** TraceQueryParameters attributes */
            attributes?: ({ [k: string]: string }|null);

            /** TraceQueryParameters startTimeMin */
            startTimeMin?: (google.protobuf.ITimestamp|null);

            /** TraceQueryParameters startTimeMax */
            startTimeMax?: (google.protobuf.ITimestamp|null);

            /** TraceQueryParameters durationMin */
            durationMin?: (google.protobuf.IDuration|null);

            /** TraceQueryParameters durationMax */
            durationMax?: (google.protobuf.IDuration|null);

            /** TraceQueryParameters searchDepth */
            searchDepth?: (number|null);

            /** TraceQueryParameters rawTraces */
            rawTraces?: (boolean|null);
        }

        /** Represents a TraceQueryParameters. */
        class TraceQueryParameters implements ITraceQueryParameters {

            /**
             * Constructs a new TraceQueryParameters.
             * @param [properties] Properties to set
             */
            constructor(properties?: jaeger.api_v3.ITraceQueryParameters);

            /** TraceQueryParameters serviceName. */
            public serviceName?: (string|null);

            /** TraceQueryParameters operationName. */
            public operationName?: (string|null);

            /** TraceQueryParameters attributes. */
            public attributes: { [k: string]: string };

            /** TraceQueryParameters startTimeMin. */
            public startTimeMin?: (google.protobuf.ITimestamp|null);

            /** TraceQueryParameters startTimeMax. */
            public startTimeMax?: (google.protobuf.ITimestamp|null);

            /** TraceQueryParameters durationMin. */
            public durationMin?: (google.protobuf.IDuration|null);

            /** TraceQueryParameters durationMax. */
            public durationMax?: (google.protobuf.IDuration|null);

            /** TraceQueryParameters searchDepth. */
            public searchDepth?: (number|null);

            /** TraceQueryParameters rawTraces. */
            public rawTraces?: (boolean|null);

            /**
             * Creates a new TraceQueryParameters instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TraceQueryParameters instance
             */
            public static create(properties?: jaeger.api_v3.ITraceQueryParameters): jaeger.api_v3.TraceQueryParameters;

            /**
             * Encodes the specified TraceQueryParameters message. Does not implicitly {@link jaeger.api_v3.TraceQueryParameters.verify|verify} messages.
             * @param message TraceQueryParameters message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: jaeger.api_v3.ITraceQueryParameters, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TraceQueryParameters message, length delimited. Does not implicitly {@link jaeger.api_v3.TraceQueryParameters.verify|verify} messages.
             * @param message TraceQueryParameters message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: jaeger.api_v3.ITraceQueryParameters, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TraceQueryParameters message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TraceQueryParameters
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): jaeger.api_v3.TraceQueryParameters;

            /**
             * Decodes a TraceQueryParameters message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns TraceQueryParameters
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): jaeger.api_v3.TraceQueryParameters;

            /**
             * Verifies a TraceQueryParameters message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a TraceQueryParameters message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns TraceQueryParameters
             */
            public static fromObject(object: { [k: string]: any }): jaeger.api_v3.TraceQueryParameters;

            /**
             * Creates a plain object from a TraceQueryParameters message. Also converts values to other types if specified.
             * @param message TraceQueryParameters
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: jaeger.api_v3.TraceQueryParameters, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this TraceQueryParameters to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for TraceQueryParameters
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a FindTracesRequest. */
        interface IFindTracesRequest {

            /** FindTracesRequest query */
            query?: (jaeger.api_v3.ITraceQueryParameters|null);
        }

        /** Represents a FindTracesRequest. */
        class FindTracesRequest implements IFindTracesRequest {

            /**
             * Constructs a new FindTracesRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: jaeger.api_v3.IFindTracesRequest);

            /** FindTracesRequest query. */
            public query?: (jaeger.api_v3.ITraceQueryParameters|null);

            /**
             * Creates a new FindTracesRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FindTracesRequest instance
             */
            public static create(properties?: jaeger.api_v3.IFindTracesRequest): jaeger.api_v3.FindTracesRequest;

            /**
             * Encodes the specified FindTracesRequest message. Does not implicitly {@link jaeger.api_v3.FindTracesRequest.verify|verify} messages.
             * @param message FindTracesRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: jaeger.api_v3.IFindTracesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FindTracesRequest message, length delimited. Does not implicitly {@link jaeger.api_v3.FindTracesRequest.verify|verify} messages.
             * @param message FindTracesRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: jaeger.api_v3.IFindTracesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FindTracesRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FindTracesRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): jaeger.api_v3.FindTracesRequest;

            /**
             * Decodes a FindTracesRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FindTracesRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): jaeger.api_v3.FindTracesRequest;

            /**
             * Verifies a FindTracesRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FindTracesRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FindTracesRequest
             */
            public static fromObject(object: { [k: string]: any }): jaeger.api_v3.FindTracesRequest;

            /**
             * Creates a plain object from a FindTracesRequest message. Also converts values to other types if specified.
             * @param message FindTracesRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: jaeger.api_v3.FindTracesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FindTracesRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FindTracesRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a GetServicesRequest. */
        interface IGetServicesRequest {
        }

        /** Represents a GetServicesRequest. */
        class GetServicesRequest implements IGetServicesRequest {

            /**
             * Constructs a new GetServicesRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: jaeger.api_v3.IGetServicesRequest);

            /**
             * Creates a new GetServicesRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GetServicesRequest instance
             */
            public static create(properties?: jaeger.api_v3.IGetServicesRequest): jaeger.api_v3.GetServicesRequest;

            /**
             * Encodes the specified GetServicesRequest message. Does not implicitly {@link jaeger.api_v3.GetServicesRequest.verify|verify} messages.
             * @param message GetServicesRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: jaeger.api_v3.IGetServicesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GetServicesRequest message, length delimited. Does not implicitly {@link jaeger.api_v3.GetServicesRequest.verify|verify} messages.
             * @param message GetServicesRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: jaeger.api_v3.IGetServicesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetServicesRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GetServicesRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): jaeger.api_v3.GetServicesRequest;

            /**
             * Decodes a GetServicesRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GetServicesRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): jaeger.api_v3.GetServicesRequest;

            /**
             * Verifies a GetServicesRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GetServicesRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GetServicesRequest
             */
            public static fromObject(object: { [k: string]: any }): jaeger.api_v3.GetServicesRequest;

            /**
             * Creates a plain object from a GetServicesRequest message. Also converts values to other types if specified.
             * @param message GetServicesRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: jaeger.api_v3.GetServicesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GetServicesRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for GetServicesRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a GetServicesResponse. */
        interface IGetServicesResponse {

            /** GetServicesResponse services */
            services?: (string[]|null);
        }

        /** Represents a GetServicesResponse. */
        class GetServicesResponse implements IGetServicesResponse {

            /**
             * Constructs a new GetServicesResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: jaeger.api_v3.IGetServicesResponse);

            /** GetServicesResponse services. */
            public services: string[];

            /**
             * Creates a new GetServicesResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GetServicesResponse instance
             */
            public static create(properties?: jaeger.api_v3.IGetServicesResponse): jaeger.api_v3.GetServicesResponse;

            /**
             * Encodes the specified GetServicesResponse message. Does not implicitly {@link jaeger.api_v3.GetServicesResponse.verify|verify} messages.
             * @param message GetServicesResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: jaeger.api_v3.IGetServicesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GetServicesResponse message, length delimited. Does not implicitly {@link jaeger.api_v3.GetServicesResponse.verify|verify} messages.
             * @param message GetServicesResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: jaeger.api_v3.IGetServicesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetServicesResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GetServicesResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): jaeger.api_v3.GetServicesResponse;

            /**
             * Decodes a GetServicesResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GetServicesResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): jaeger.api_v3.GetServicesResponse;

            /**
             * Verifies a GetServicesResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GetServicesResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GetServicesResponse
             */
            public static fromObject(object: { [k: string]: any }): jaeger.api_v3.GetServicesResponse;

            /**
             * Creates a plain object from a GetServicesResponse message. Also converts values to other types if specified.
             * @param message GetServicesResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: jaeger.api_v3.GetServicesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GetServicesResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for GetServicesResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a GetOperationsRequest. */
        interface IGetOperationsRequest {

            /** GetOperationsRequest service */
            service?: (string|null);

            /** GetOperationsRequest spanKind */
            spanKind?: (string|null);
        }

        /** Represents a GetOperationsRequest. */
        class GetOperationsRequest implements IGetOperationsRequest {

            /**
             * Constructs a new GetOperationsRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: jaeger.api_v3.IGetOperationsRequest);

            /** GetOperationsRequest service. */
            public service?: (string|null);

            /** GetOperationsRequest spanKind. */
            public spanKind?: (string|null);

            /**
             * Creates a new GetOperationsRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GetOperationsRequest instance
             */
            public static create(properties?: jaeger.api_v3.IGetOperationsRequest): jaeger.api_v3.GetOperationsRequest;

            /**
             * Encodes the specified GetOperationsRequest message. Does not implicitly {@link jaeger.api_v3.GetOperationsRequest.verify|verify} messages.
             * @param message GetOperationsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: jaeger.api_v3.IGetOperationsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GetOperationsRequest message, length delimited. Does not implicitly {@link jaeger.api_v3.GetOperationsRequest.verify|verify} messages.
             * @param message GetOperationsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: jaeger.api_v3.IGetOperationsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetOperationsRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GetOperationsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): jaeger.api_v3.GetOperationsRequest;

            /**
             * Decodes a GetOperationsRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GetOperationsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): jaeger.api_v3.GetOperationsRequest;

            /**
             * Verifies a GetOperationsRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GetOperationsRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GetOperationsRequest
             */
            public static fromObject(object: { [k: string]: any }): jaeger.api_v3.GetOperationsRequest;

            /**
             * Creates a plain object from a GetOperationsRequest message. Also converts values to other types if specified.
             * @param message GetOperationsRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: jaeger.api_v3.GetOperationsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GetOperationsRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for GetOperationsRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an Operation. */
        interface IOperation {

            /** Operation name */
            name?: (string|null);

            /** Operation spanKind */
            spanKind?: (string|null);
        }

        /** Represents an Operation. */
        class Operation implements IOperation {

            /**
             * Constructs a new Operation.
             * @param [properties] Properties to set
             */
            constructor(properties?: jaeger.api_v3.IOperation);

            /** Operation name. */
            public name?: (string|null);

            /** Operation spanKind. */
            public spanKind?: (string|null);

            /**
             * Creates a new Operation instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Operation instance
             */
            public static create(properties?: jaeger.api_v3.IOperation): jaeger.api_v3.Operation;

            /**
             * Encodes the specified Operation message. Does not implicitly {@link jaeger.api_v3.Operation.verify|verify} messages.
             * @param message Operation message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: jaeger.api_v3.IOperation, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Operation message, length delimited. Does not implicitly {@link jaeger.api_v3.Operation.verify|verify} messages.
             * @param message Operation message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: jaeger.api_v3.IOperation, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Operation message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Operation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): jaeger.api_v3.Operation;

            /**
             * Decodes an Operation message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Operation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): jaeger.api_v3.Operation;

            /**
             * Verifies an Operation message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Operation message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Operation
             */
            public static fromObject(object: { [k: string]: any }): jaeger.api_v3.Operation;

            /**
             * Creates a plain object from an Operation message. Also converts values to other types if specified.
             * @param message Operation
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: jaeger.api_v3.Operation, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Operation to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Operation
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a GetOperationsResponse. */
        interface IGetOperationsResponse {

            /** GetOperationsResponse operations */
            operations?: (jaeger.api_v3.IOperation[]|null);
        }

        /** Represents a GetOperationsResponse. */
        class GetOperationsResponse implements IGetOperationsResponse {

            /**
             * Constructs a new GetOperationsResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: jaeger.api_v3.IGetOperationsResponse);

            /** GetOperationsResponse operations. */
            public operations: jaeger.api_v3.IOperation[];

            /**
             * Creates a new GetOperationsResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GetOperationsResponse instance
             */
            public static create(properties?: jaeger.api_v3.IGetOperationsResponse): jaeger.api_v3.GetOperationsResponse;

            /**
             * Encodes the specified GetOperationsResponse message. Does not implicitly {@link jaeger.api_v3.GetOperationsResponse.verify|verify} messages.
             * @param message GetOperationsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: jaeger.api_v3.IGetOperationsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GetOperationsResponse message, length delimited. Does not implicitly {@link jaeger.api_v3.GetOperationsResponse.verify|verify} messages.
             * @param message GetOperationsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: jaeger.api_v3.IGetOperationsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetOperationsResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GetOperationsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): jaeger.api_v3.GetOperationsResponse;

            /**
             * Decodes a GetOperationsResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GetOperationsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): jaeger.api_v3.GetOperationsResponse;

            /**
             * Verifies a GetOperationsResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GetOperationsResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GetOperationsResponse
             */
            public static fromObject(object: { [k: string]: any }): jaeger.api_v3.GetOperationsResponse;

            /**
             * Creates a plain object from a GetOperationsResponse message. Also converts values to other types if specified.
             * @param message GetOperationsResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: jaeger.api_v3.GetOperationsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GetOperationsResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for GetOperationsResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Represents a QueryService */
        class QueryService extends $protobuf.rpc.Service {

            /**
             * Constructs a new QueryService service.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             */
            constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

            /**
             * Creates new QueryService service using the specified rpc implementation.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             * @returns RPC service. Useful where requests and/or responses are streamed.
             */
            public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): QueryService;

            /**
             * Calls GetTrace.
             * @param request GetTraceRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and TracesData
             */
            public getTrace(request: jaeger.api_v3.IGetTraceRequest, callback: jaeger.api_v3.QueryService.GetTraceCallback): void;

            /**
             * Calls GetTrace.
             * @param request GetTraceRequest message or plain object
             * @returns Promise
             */
            public getTrace(request: jaeger.api_v3.IGetTraceRequest): Promise<opentelemetry.proto.trace.v1.TracesData>;

            /**
             * Calls FindTraces.
             * @param request FindTracesRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and TracesData
             */
            public findTraces(request: jaeger.api_v3.IFindTracesRequest, callback: jaeger.api_v3.QueryService.FindTracesCallback): void;

            /**
             * Calls FindTraces.
             * @param request FindTracesRequest message or plain object
             * @returns Promise
             */
            public findTraces(request: jaeger.api_v3.IFindTracesRequest): Promise<opentelemetry.proto.trace.v1.TracesData>;

            /**
             * Calls GetServices.
             * @param request GetServicesRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and GetServicesResponse
             */
            public getServices(request: jaeger.api_v3.IGetServicesRequest, callback: jaeger.api_v3.QueryService.GetServicesCallback): void;

            /**
             * Calls GetServices.
             * @param request GetServicesRequest message or plain object
             * @returns Promise
             */
            public getServices(request: jaeger.api_v3.IGetServicesRequest): Promise<jaeger.api_v3.GetServicesResponse>;

            /**
             * Calls GetOperations.
             * @param request GetOperationsRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and GetOperationsResponse
             */
            public getOperations(request: jaeger.api_v3.IGetOperationsRequest, callback: jaeger.api_v3.QueryService.GetOperationsCallback): void;

            /**
             * Calls GetOperations.
             * @param request GetOperationsRequest message or plain object
             * @returns Promise
             */
            public getOperations(request: jaeger.api_v3.IGetOperationsRequest): Promise<jaeger.api_v3.GetOperationsResponse>;
        }

        namespace QueryService {

            /**
             * Callback as used by {@link jaeger.api_v3.QueryService#getTrace}.
             * @param error Error, if any
             * @param [response] TracesData
             */
            type GetTraceCallback = (error: (Error|null), response?: opentelemetry.proto.trace.v1.TracesData) => void;

            /**
             * Callback as used by {@link jaeger.api_v3.QueryService#findTraces}.
             * @param error Error, if any
             * @param [response] TracesData
             */
            type FindTracesCallback = (error: (Error|null), response?: opentelemetry.proto.trace.v1.TracesData) => void;

            /**
             * Callback as used by {@link jaeger.api_v3.QueryService#getServices}.
             * @param error Error, if any
             * @param [response] GetServicesResponse
             */
            type GetServicesCallback = (error: (Error|null), response?: jaeger.api_v3.GetServicesResponse) => void;

            /**
             * Callback as used by {@link jaeger.api_v3.QueryService#getOperations}.
             * @param error Error, if any
             * @param [response] GetOperationsResponse
             */
            type GetOperationsCallback = (error: (Error|null), response?: jaeger.api_v3.GetOperationsResponse) => void;
        }

        /** Properties of a GRPCGatewayError. */
        interface IGRPCGatewayError {

            /** GRPCGatewayError error */
            error?: (jaeger.api_v3.GRPCGatewayError.IGRPCGatewayErrorDetails|null);
        }

        /** Represents a GRPCGatewayError. */
        class GRPCGatewayError implements IGRPCGatewayError {

            /**
             * Constructs a new GRPCGatewayError.
             * @param [properties] Properties to set
             */
            constructor(properties?: jaeger.api_v3.IGRPCGatewayError);

            /** GRPCGatewayError error. */
            public error?: (jaeger.api_v3.GRPCGatewayError.IGRPCGatewayErrorDetails|null);

            /**
             * Creates a new GRPCGatewayError instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GRPCGatewayError instance
             */
            public static create(properties?: jaeger.api_v3.IGRPCGatewayError): jaeger.api_v3.GRPCGatewayError;

            /**
             * Encodes the specified GRPCGatewayError message. Does not implicitly {@link jaeger.api_v3.GRPCGatewayError.verify|verify} messages.
             * @param message GRPCGatewayError message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: jaeger.api_v3.IGRPCGatewayError, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GRPCGatewayError message, length delimited. Does not implicitly {@link jaeger.api_v3.GRPCGatewayError.verify|verify} messages.
             * @param message GRPCGatewayError message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: jaeger.api_v3.IGRPCGatewayError, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GRPCGatewayError message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GRPCGatewayError
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): jaeger.api_v3.GRPCGatewayError;

            /**
             * Decodes a GRPCGatewayError message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GRPCGatewayError
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): jaeger.api_v3.GRPCGatewayError;

            /**
             * Verifies a GRPCGatewayError message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GRPCGatewayError message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GRPCGatewayError
             */
            public static fromObject(object: { [k: string]: any }): jaeger.api_v3.GRPCGatewayError;

            /**
             * Creates a plain object from a GRPCGatewayError message. Also converts values to other types if specified.
             * @param message GRPCGatewayError
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: jaeger.api_v3.GRPCGatewayError, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GRPCGatewayError to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for GRPCGatewayError
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace GRPCGatewayError {

            /** Properties of a GRPCGatewayErrorDetails. */
            interface IGRPCGatewayErrorDetails {

                /** GRPCGatewayErrorDetails grpcCode */
                grpcCode?: (number|null);

                /** GRPCGatewayErrorDetails httpCode */
                httpCode?: (number|null);

                /** GRPCGatewayErrorDetails message */
                message?: (string|null);

                /** GRPCGatewayErrorDetails httpStatus */
                httpStatus?: (string|null);
            }

            /** Represents a GRPCGatewayErrorDetails. */
            class GRPCGatewayErrorDetails implements IGRPCGatewayErrorDetails {

                /**
                 * Constructs a new GRPCGatewayErrorDetails.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: jaeger.api_v3.GRPCGatewayError.IGRPCGatewayErrorDetails);

                /** GRPCGatewayErrorDetails grpcCode. */
                public grpcCode?: (number|null);

                /** GRPCGatewayErrorDetails httpCode. */
                public httpCode?: (number|null);

                /** GRPCGatewayErrorDetails message. */
                public message?: (string|null);

                /** GRPCGatewayErrorDetails httpStatus. */
                public httpStatus?: (string|null);

                /**
                 * Creates a new GRPCGatewayErrorDetails instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GRPCGatewayErrorDetails instance
                 */
                public static create(properties?: jaeger.api_v3.GRPCGatewayError.IGRPCGatewayErrorDetails): jaeger.api_v3.GRPCGatewayError.GRPCGatewayErrorDetails;

                /**
                 * Encodes the specified GRPCGatewayErrorDetails message. Does not implicitly {@link jaeger.api_v3.GRPCGatewayError.GRPCGatewayErrorDetails.verify|verify} messages.
                 * @param message GRPCGatewayErrorDetails message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: jaeger.api_v3.GRPCGatewayError.IGRPCGatewayErrorDetails, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GRPCGatewayErrorDetails message, length delimited. Does not implicitly {@link jaeger.api_v3.GRPCGatewayError.GRPCGatewayErrorDetails.verify|verify} messages.
                 * @param message GRPCGatewayErrorDetails message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: jaeger.api_v3.GRPCGatewayError.IGRPCGatewayErrorDetails, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GRPCGatewayErrorDetails message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GRPCGatewayErrorDetails
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): jaeger.api_v3.GRPCGatewayError.GRPCGatewayErrorDetails;

                /**
                 * Decodes a GRPCGatewayErrorDetails message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GRPCGatewayErrorDetails
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): jaeger.api_v3.GRPCGatewayError.GRPCGatewayErrorDetails;

                /**
                 * Verifies a GRPCGatewayErrorDetails message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GRPCGatewayErrorDetails message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GRPCGatewayErrorDetails
                 */
                public static fromObject(object: { [k: string]: any }): jaeger.api_v3.GRPCGatewayError.GRPCGatewayErrorDetails;

                /**
                 * Creates a plain object from a GRPCGatewayErrorDetails message. Also converts values to other types if specified.
                 * @param message GRPCGatewayErrorDetails
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: jaeger.api_v3.GRPCGatewayError.GRPCGatewayErrorDetails, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GRPCGatewayErrorDetails to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for GRPCGatewayErrorDetails
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of a GRPCGatewayWrapper. */
        interface IGRPCGatewayWrapper {

            /** GRPCGatewayWrapper result */
            result?: (opentelemetry.proto.trace.v1.ITracesData|null);
        }

        /** Represents a GRPCGatewayWrapper. */
        class GRPCGatewayWrapper implements IGRPCGatewayWrapper {

            /**
             * Constructs a new GRPCGatewayWrapper.
             * @param [properties] Properties to set
             */
            constructor(properties?: jaeger.api_v3.IGRPCGatewayWrapper);

            /** GRPCGatewayWrapper result. */
            public result?: (opentelemetry.proto.trace.v1.ITracesData|null);

            /**
             * Creates a new GRPCGatewayWrapper instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GRPCGatewayWrapper instance
             */
            public static create(properties?: jaeger.api_v3.IGRPCGatewayWrapper): jaeger.api_v3.GRPCGatewayWrapper;

            /**
             * Encodes the specified GRPCGatewayWrapper message. Does not implicitly {@link jaeger.api_v3.GRPCGatewayWrapper.verify|verify} messages.
             * @param message GRPCGatewayWrapper message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: jaeger.api_v3.IGRPCGatewayWrapper, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GRPCGatewayWrapper message, length delimited. Does not implicitly {@link jaeger.api_v3.GRPCGatewayWrapper.verify|verify} messages.
             * @param message GRPCGatewayWrapper message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: jaeger.api_v3.IGRPCGatewayWrapper, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GRPCGatewayWrapper message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GRPCGatewayWrapper
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): jaeger.api_v3.GRPCGatewayWrapper;

            /**
             * Decodes a GRPCGatewayWrapper message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GRPCGatewayWrapper
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): jaeger.api_v3.GRPCGatewayWrapper;

            /**
             * Verifies a GRPCGatewayWrapper message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GRPCGatewayWrapper message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GRPCGatewayWrapper
             */
            public static fromObject(object: { [k: string]: any }): jaeger.api_v3.GRPCGatewayWrapper;

            /**
             * Creates a plain object from a GRPCGatewayWrapper message. Also converts values to other types if specified.
             * @param message GRPCGatewayWrapper
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: jaeger.api_v3.GRPCGatewayWrapper, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GRPCGatewayWrapper to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for GRPCGatewayWrapper
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }
}

/** Namespace google. */
export namespace google {

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of a Duration. */
        interface IDuration {

            /** Duration seconds */
            seconds?: (number|Long|null);

            /** Duration nanos */
            nanos?: (number|null);
        }

        /** Represents a Duration. */
        class Duration implements IDuration {

            /**
             * Constructs a new Duration.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IDuration);

            /** Duration seconds. */
            public seconds?: (number|Long|null);

            /** Duration nanos. */
            public nanos?: (number|null);

            /**
             * Creates a new Duration instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Duration instance
             */
            public static create(properties?: google.protobuf.IDuration): google.protobuf.Duration;

            /**
             * Encodes the specified Duration message. Does not implicitly {@link google.protobuf.Duration.verify|verify} messages.
             * @param message Duration message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IDuration, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Duration message, length delimited. Does not implicitly {@link google.protobuf.Duration.verify|verify} messages.
             * @param message Duration message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IDuration, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Duration message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Duration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Duration;

            /**
             * Decodes a Duration message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Duration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Duration;

            /**
             * Verifies a Duration message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Duration message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Duration
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Duration;

            /**
             * Creates a plain object from a Duration message. Also converts values to other types if specified.
             * @param message Duration
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Duration, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Duration to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Duration
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Timestamp. */
        interface ITimestamp {

            /** Timestamp seconds */
            seconds?: (number|Long|null);

            /** Timestamp nanos */
            nanos?: (number|null);
        }

        /** Represents a Timestamp. */
        class Timestamp implements ITimestamp {

            /**
             * Constructs a new Timestamp.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ITimestamp);

            /** Timestamp seconds. */
            public seconds?: (number|Long|null);

            /** Timestamp nanos. */
            public nanos?: (number|null);

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Timestamp instance
             */
            public static create(properties?: google.protobuf.ITimestamp): google.protobuf.Timestamp;

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Timestamp;

            /**
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Timestamp;

            /**
             * Verifies a Timestamp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Timestamp
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Timestamp;

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @param message Timestamp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Timestamp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Timestamp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Timestamp
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }
}

/** Namespace opentelemetry. */
export namespace opentelemetry {

    /** Namespace proto. */
    namespace proto {

        /** Namespace trace. */
        namespace trace {

            /** Namespace v1. */
            namespace v1 {

                /** Properties of a TracesData. */
                interface ITracesData {

                    /** TracesData resourceSpans */
                    resourceSpans?: (opentelemetry.proto.trace.v1.IResourceSpans[]|null);
                }

                /** Represents a TracesData. */
                class TracesData implements ITracesData {

                    /**
                     * Constructs a new TracesData.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: opentelemetry.proto.trace.v1.ITracesData);

                    /** TracesData resourceSpans. */
                    public resourceSpans: opentelemetry.proto.trace.v1.IResourceSpans[];

                    /**
                     * Creates a new TracesData instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TracesData instance
                     */
                    public static create(properties?: opentelemetry.proto.trace.v1.ITracesData): opentelemetry.proto.trace.v1.TracesData;

                    /**
                     * Encodes the specified TracesData message. Does not implicitly {@link opentelemetry.proto.trace.v1.TracesData.verify|verify} messages.
                     * @param message TracesData message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: opentelemetry.proto.trace.v1.ITracesData, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TracesData message, length delimited. Does not implicitly {@link opentelemetry.proto.trace.v1.TracesData.verify|verify} messages.
                     * @param message TracesData message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: opentelemetry.proto.trace.v1.ITracesData, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TracesData message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TracesData
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): opentelemetry.proto.trace.v1.TracesData;

                    /**
                     * Decodes a TracesData message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TracesData
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): opentelemetry.proto.trace.v1.TracesData;

                    /**
                     * Verifies a TracesData message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TracesData message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TracesData
                     */
                    public static fromObject(object: { [k: string]: any }): opentelemetry.proto.trace.v1.TracesData;

                    /**
                     * Creates a plain object from a TracesData message. Also converts values to other types if specified.
                     * @param message TracesData
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: opentelemetry.proto.trace.v1.TracesData, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TracesData to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for TracesData
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ResourceSpans. */
                interface IResourceSpans {

                    /** ResourceSpans resource */
                    resource?: (opentelemetry.proto.resource.v1.IResource|null);

                    /** ResourceSpans scopeSpans */
                    scopeSpans?: (opentelemetry.proto.trace.v1.IScopeSpans[]|null);

                    /** ResourceSpans schemaUrl */
                    schemaUrl?: (string|null);
                }

                /** Represents a ResourceSpans. */
                class ResourceSpans implements IResourceSpans {

                    /**
                     * Constructs a new ResourceSpans.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: opentelemetry.proto.trace.v1.IResourceSpans);

                    /** ResourceSpans resource. */
                    public resource?: (opentelemetry.proto.resource.v1.IResource|null);

                    /** ResourceSpans scopeSpans. */
                    public scopeSpans: opentelemetry.proto.trace.v1.IScopeSpans[];

                    /** ResourceSpans schemaUrl. */
                    public schemaUrl?: (string|null);

                    /**
                     * Creates a new ResourceSpans instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ResourceSpans instance
                     */
                    public static create(properties?: opentelemetry.proto.trace.v1.IResourceSpans): opentelemetry.proto.trace.v1.ResourceSpans;

                    /**
                     * Encodes the specified ResourceSpans message. Does not implicitly {@link opentelemetry.proto.trace.v1.ResourceSpans.verify|verify} messages.
                     * @param message ResourceSpans message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: opentelemetry.proto.trace.v1.IResourceSpans, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ResourceSpans message, length delimited. Does not implicitly {@link opentelemetry.proto.trace.v1.ResourceSpans.verify|verify} messages.
                     * @param message ResourceSpans message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: opentelemetry.proto.trace.v1.IResourceSpans, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ResourceSpans message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ResourceSpans
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): opentelemetry.proto.trace.v1.ResourceSpans;

                    /**
                     * Decodes a ResourceSpans message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ResourceSpans
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): opentelemetry.proto.trace.v1.ResourceSpans;

                    /**
                     * Verifies a ResourceSpans message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ResourceSpans message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ResourceSpans
                     */
                    public static fromObject(object: { [k: string]: any }): opentelemetry.proto.trace.v1.ResourceSpans;

                    /**
                     * Creates a plain object from a ResourceSpans message. Also converts values to other types if specified.
                     * @param message ResourceSpans
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: opentelemetry.proto.trace.v1.ResourceSpans, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ResourceSpans to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ResourceSpans
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ScopeSpans. */
                interface IScopeSpans {

                    /** ScopeSpans scope */
                    scope?: (opentelemetry.proto.common.v1.IInstrumentationScope|null);

                    /** ScopeSpans spans */
                    spans?: (opentelemetry.proto.trace.v1.ISpan[]|null);

                    /** ScopeSpans schemaUrl */
                    schemaUrl?: (string|null);
                }

                /** Represents a ScopeSpans. */
                class ScopeSpans implements IScopeSpans {

                    /**
                     * Constructs a new ScopeSpans.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: opentelemetry.proto.trace.v1.IScopeSpans);

                    /** ScopeSpans scope. */
                    public scope?: (opentelemetry.proto.common.v1.IInstrumentationScope|null);

                    /** ScopeSpans spans. */
                    public spans: opentelemetry.proto.trace.v1.ISpan[];

                    /** ScopeSpans schemaUrl. */
                    public schemaUrl?: (string|null);

                    /**
                     * Creates a new ScopeSpans instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ScopeSpans instance
                     */
                    public static create(properties?: opentelemetry.proto.trace.v1.IScopeSpans): opentelemetry.proto.trace.v1.ScopeSpans;

                    /**
                     * Encodes the specified ScopeSpans message. Does not implicitly {@link opentelemetry.proto.trace.v1.ScopeSpans.verify|verify} messages.
                     * @param message ScopeSpans message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: opentelemetry.proto.trace.v1.IScopeSpans, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ScopeSpans message, length delimited. Does not implicitly {@link opentelemetry.proto.trace.v1.ScopeSpans.verify|verify} messages.
                     * @param message ScopeSpans message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: opentelemetry.proto.trace.v1.IScopeSpans, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ScopeSpans message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ScopeSpans
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): opentelemetry.proto.trace.v1.ScopeSpans;

                    /**
                     * Decodes a ScopeSpans message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ScopeSpans
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): opentelemetry.proto.trace.v1.ScopeSpans;

                    /**
                     * Verifies a ScopeSpans message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ScopeSpans message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ScopeSpans
                     */
                    public static fromObject(object: { [k: string]: any }): opentelemetry.proto.trace.v1.ScopeSpans;

                    /**
                     * Creates a plain object from a ScopeSpans message. Also converts values to other types if specified.
                     * @param message ScopeSpans
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: opentelemetry.proto.trace.v1.ScopeSpans, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ScopeSpans to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ScopeSpans
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Span. */
                interface ISpan {

                    /** Span traceId */
                    traceId?: (Uint8Array|null);

                    /** Span spanId */
                    spanId?: (Uint8Array|null);

                    /** Span traceState */
                    traceState?: (string|null);

                    /** Span parentSpanId */
                    parentSpanId?: (Uint8Array|null);

                    /** Span name */
                    name?: (string|null);

                    /** Span kind */
                    kind?: (opentelemetry.proto.trace.v1.Span.SpanKind|null);

                    /** Span startTimeUnixNano */
                    startTimeUnixNano?: (number|Long|null);

                    /** Span endTimeUnixNano */
                    endTimeUnixNano?: (number|Long|null);

                    /** Span attributes */
                    attributes?: (opentelemetry.proto.common.v1.IKeyValue[]|null);

                    /** Span droppedAttributesCount */
                    droppedAttributesCount?: (number|null);

                    /** Span events */
                    events?: (opentelemetry.proto.trace.v1.Span.IEvent[]|null);

                    /** Span droppedEventsCount */
                    droppedEventsCount?: (number|null);

                    /** Span links */
                    links?: (opentelemetry.proto.trace.v1.Span.ILink[]|null);

                    /** Span droppedLinksCount */
                    droppedLinksCount?: (number|null);

                    /** Span status */
                    status?: (opentelemetry.proto.trace.v1.IStatus|null);
                }

                /** Represents a Span. */
                class Span implements ISpan {

                    /**
                     * Constructs a new Span.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: opentelemetry.proto.trace.v1.ISpan);

                    /** Span traceId. */
                    public traceId?: (Uint8Array|null);

                    /** Span spanId. */
                    public spanId?: (Uint8Array|null);

                    /** Span traceState. */
                    public traceState?: (string|null);

                    /** Span parentSpanId. */
                    public parentSpanId?: (Uint8Array|null);

                    /** Span name. */
                    public name?: (string|null);

                    /** Span kind. */
                    public kind?: (opentelemetry.proto.trace.v1.Span.SpanKind|null);

                    /** Span startTimeUnixNano. */
                    public startTimeUnixNano?: (number|Long|null);

                    /** Span endTimeUnixNano. */
                    public endTimeUnixNano?: (number|Long|null);

                    /** Span attributes. */
                    public attributes: opentelemetry.proto.common.v1.IKeyValue[];

                    /** Span droppedAttributesCount. */
                    public droppedAttributesCount?: (number|null);

                    /** Span events. */
                    public events: opentelemetry.proto.trace.v1.Span.IEvent[];

                    /** Span droppedEventsCount. */
                    public droppedEventsCount?: (number|null);

                    /** Span links. */
                    public links: opentelemetry.proto.trace.v1.Span.ILink[];

                    /** Span droppedLinksCount. */
                    public droppedLinksCount?: (number|null);

                    /** Span status. */
                    public status?: (opentelemetry.proto.trace.v1.IStatus|null);

                    /**
                     * Creates a new Span instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Span instance
                     */
                    public static create(properties?: opentelemetry.proto.trace.v1.ISpan): opentelemetry.proto.trace.v1.Span;

                    /**
                     * Encodes the specified Span message. Does not implicitly {@link opentelemetry.proto.trace.v1.Span.verify|verify} messages.
                     * @param message Span message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: opentelemetry.proto.trace.v1.ISpan, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Span message, length delimited. Does not implicitly {@link opentelemetry.proto.trace.v1.Span.verify|verify} messages.
                     * @param message Span message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: opentelemetry.proto.trace.v1.ISpan, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Span message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Span
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): opentelemetry.proto.trace.v1.Span;

                    /**
                     * Decodes a Span message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Span
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): opentelemetry.proto.trace.v1.Span;

                    /**
                     * Verifies a Span message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Span message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Span
                     */
                    public static fromObject(object: { [k: string]: any }): opentelemetry.proto.trace.v1.Span;

                    /**
                     * Creates a plain object from a Span message. Also converts values to other types if specified.
                     * @param message Span
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: opentelemetry.proto.trace.v1.Span, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Span to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Span
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace Span {

                    /** SpanKind enum. */
                    enum SpanKind {
                        SPAN_KIND_UNSPECIFIED = 0,
                        SPAN_KIND_INTERNAL = 1,
                        SPAN_KIND_SERVER = 2,
                        SPAN_KIND_CLIENT = 3,
                        SPAN_KIND_PRODUCER = 4,
                        SPAN_KIND_CONSUMER = 5
                    }

                    /** Properties of an Event. */
                    interface IEvent {

                        /** Event timeUnixNano */
                        timeUnixNano?: (number|Long|null);

                        /** Event name */
                        name?: (string|null);

                        /** Event attributes */
                        attributes?: (opentelemetry.proto.common.v1.IKeyValue[]|null);

                        /** Event droppedAttributesCount */
                        droppedAttributesCount?: (number|null);
                    }

                    /** Represents an Event. */
                    class Event implements IEvent {

                        /**
                         * Constructs a new Event.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: opentelemetry.proto.trace.v1.Span.IEvent);

                        /** Event timeUnixNano. */
                        public timeUnixNano?: (number|Long|null);

                        /** Event name. */
                        public name?: (string|null);

                        /** Event attributes. */
                        public attributes: opentelemetry.proto.common.v1.IKeyValue[];

                        /** Event droppedAttributesCount. */
                        public droppedAttributesCount?: (number|null);

                        /**
                         * Creates a new Event instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Event instance
                         */
                        public static create(properties?: opentelemetry.proto.trace.v1.Span.IEvent): opentelemetry.proto.trace.v1.Span.Event;

                        /**
                         * Encodes the specified Event message. Does not implicitly {@link opentelemetry.proto.trace.v1.Span.Event.verify|verify} messages.
                         * @param message Event message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: opentelemetry.proto.trace.v1.Span.IEvent, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Event message, length delimited. Does not implicitly {@link opentelemetry.proto.trace.v1.Span.Event.verify|verify} messages.
                         * @param message Event message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: opentelemetry.proto.trace.v1.Span.IEvent, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an Event message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Event
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): opentelemetry.proto.trace.v1.Span.Event;

                        /**
                         * Decodes an Event message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Event
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): opentelemetry.proto.trace.v1.Span.Event;

                        /**
                         * Verifies an Event message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an Event message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Event
                         */
                        public static fromObject(object: { [k: string]: any }): opentelemetry.proto.trace.v1.Span.Event;

                        /**
                         * Creates a plain object from an Event message. Also converts values to other types if specified.
                         * @param message Event
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: opentelemetry.proto.trace.v1.Span.Event, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Event to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Event
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a Link. */
                    interface ILink {

                        /** Link traceId */
                        traceId?: (Uint8Array|null);

                        /** Link spanId */
                        spanId?: (Uint8Array|null);

                        /** Link traceState */
                        traceState?: (string|null);

                        /** Link attributes */
                        attributes?: (opentelemetry.proto.common.v1.IKeyValue[]|null);

                        /** Link droppedAttributesCount */
                        droppedAttributesCount?: (number|null);
                    }

                    /** Represents a Link. */
                    class Link implements ILink {

                        /**
                         * Constructs a new Link.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: opentelemetry.proto.trace.v1.Span.ILink);

                        /** Link traceId. */
                        public traceId?: (Uint8Array|null);

                        /** Link spanId. */
                        public spanId?: (Uint8Array|null);

                        /** Link traceState. */
                        public traceState?: (string|null);

                        /** Link attributes. */
                        public attributes: opentelemetry.proto.common.v1.IKeyValue[];

                        /** Link droppedAttributesCount. */
                        public droppedAttributesCount?: (number|null);

                        /**
                         * Creates a new Link instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Link instance
                         */
                        public static create(properties?: opentelemetry.proto.trace.v1.Span.ILink): opentelemetry.proto.trace.v1.Span.Link;

                        /**
                         * Encodes the specified Link message. Does not implicitly {@link opentelemetry.proto.trace.v1.Span.Link.verify|verify} messages.
                         * @param message Link message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: opentelemetry.proto.trace.v1.Span.ILink, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Link message, length delimited. Does not implicitly {@link opentelemetry.proto.trace.v1.Span.Link.verify|verify} messages.
                         * @param message Link message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: opentelemetry.proto.trace.v1.Span.ILink, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Link message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Link
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): opentelemetry.proto.trace.v1.Span.Link;

                        /**
                         * Decodes a Link message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Link
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): opentelemetry.proto.trace.v1.Span.Link;

                        /**
                         * Verifies a Link message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Link message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Link
                         */
                        public static fromObject(object: { [k: string]: any }): opentelemetry.proto.trace.v1.Span.Link;

                        /**
                         * Creates a plain object from a Link message. Also converts values to other types if specified.
                         * @param message Link
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: opentelemetry.proto.trace.v1.Span.Link, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Link to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Link
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }

                /** Properties of a Status. */
                interface IStatus {

                    /** Status message */
                    message?: (string|null);

                    /** Status code */
                    code?: (opentelemetry.proto.trace.v1.Status.StatusCode|null);
                }

                /** Represents a Status. */
                class Status implements IStatus {

                    /**
                     * Constructs a new Status.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: opentelemetry.proto.trace.v1.IStatus);

                    /** Status message. */
                    public message?: (string|null);

                    /** Status code. */
                    public code?: (opentelemetry.proto.trace.v1.Status.StatusCode|null);

                    /**
                     * Creates a new Status instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Status instance
                     */
                    public static create(properties?: opentelemetry.proto.trace.v1.IStatus): opentelemetry.proto.trace.v1.Status;

                    /**
                     * Encodes the specified Status message. Does not implicitly {@link opentelemetry.proto.trace.v1.Status.verify|verify} messages.
                     * @param message Status message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: opentelemetry.proto.trace.v1.IStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Status message, length delimited. Does not implicitly {@link opentelemetry.proto.trace.v1.Status.verify|verify} messages.
                     * @param message Status message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: opentelemetry.proto.trace.v1.IStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Status message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Status
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): opentelemetry.proto.trace.v1.Status;

                    /**
                     * Decodes a Status message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Status
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): opentelemetry.proto.trace.v1.Status;

                    /**
                     * Verifies a Status message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Status message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Status
                     */
                    public static fromObject(object: { [k: string]: any }): opentelemetry.proto.trace.v1.Status;

                    /**
                     * Creates a plain object from a Status message. Also converts values to other types if specified.
                     * @param message Status
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: opentelemetry.proto.trace.v1.Status, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Status to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Status
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace Status {

                    /** StatusCode enum. */
                    enum StatusCode {
                        STATUS_CODE_UNSET = 0,
                        STATUS_CODE_OK = 1,
                        STATUS_CODE_ERROR = 2
                    }
                }
            }
        }

        /** Namespace common. */
        namespace common {

            /** Namespace v1. */
            namespace v1 {

                /** Properties of an AnyValue. */
                interface IAnyValue {

                    /** AnyValue stringValue */
                    stringValue?: (string|null);

                    /** AnyValue boolValue */
                    boolValue?: (boolean|null);

                    /** AnyValue intValue */
                    intValue?: (number|Long|null);

                    /** AnyValue doubleValue */
                    doubleValue?: (number|null);

                    /** AnyValue arrayValue */
                    arrayValue?: (opentelemetry.proto.common.v1.IArrayValue|null);

                    /** AnyValue kvlistValue */
                    kvlistValue?: (opentelemetry.proto.common.v1.IKeyValueList|null);

                    /** AnyValue bytesValue */
                    bytesValue?: (Uint8Array|null);
                }

                /** Represents an AnyValue. */
                class AnyValue implements IAnyValue {

                    /**
                     * Constructs a new AnyValue.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: opentelemetry.proto.common.v1.IAnyValue);

                    /** AnyValue stringValue. */
                    public stringValue?: (string|null);

                    /** AnyValue boolValue. */
                    public boolValue?: (boolean|null);

                    /** AnyValue intValue. */
                    public intValue?: (number|Long|null);

                    /** AnyValue doubleValue. */
                    public doubleValue?: (number|null);

                    /** AnyValue arrayValue. */
                    public arrayValue?: (opentelemetry.proto.common.v1.IArrayValue|null);

                    /** AnyValue kvlistValue. */
                    public kvlistValue?: (opentelemetry.proto.common.v1.IKeyValueList|null);

                    /** AnyValue bytesValue. */
                    public bytesValue?: (Uint8Array|null);

                    /** AnyValue value. */
                    public value?: ("stringValue"|"boolValue"|"intValue"|"doubleValue"|"arrayValue"|"kvlistValue"|"bytesValue");

                    /**
                     * Creates a new AnyValue instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AnyValue instance
                     */
                    public static create(properties?: opentelemetry.proto.common.v1.IAnyValue): opentelemetry.proto.common.v1.AnyValue;

                    /**
                     * Encodes the specified AnyValue message. Does not implicitly {@link opentelemetry.proto.common.v1.AnyValue.verify|verify} messages.
                     * @param message AnyValue message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: opentelemetry.proto.common.v1.IAnyValue, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AnyValue message, length delimited. Does not implicitly {@link opentelemetry.proto.common.v1.AnyValue.verify|verify} messages.
                     * @param message AnyValue message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: opentelemetry.proto.common.v1.IAnyValue, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AnyValue message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AnyValue
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): opentelemetry.proto.common.v1.AnyValue;

                    /**
                     * Decodes an AnyValue message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AnyValue
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): opentelemetry.proto.common.v1.AnyValue;

                    /**
                     * Verifies an AnyValue message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AnyValue message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AnyValue
                     */
                    public static fromObject(object: { [k: string]: any }): opentelemetry.proto.common.v1.AnyValue;

                    /**
                     * Creates a plain object from an AnyValue message. Also converts values to other types if specified.
                     * @param message AnyValue
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: opentelemetry.proto.common.v1.AnyValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AnyValue to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AnyValue
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an ArrayValue. */
                interface IArrayValue {

                    /** ArrayValue values */
                    values?: (opentelemetry.proto.common.v1.IAnyValue[]|null);
                }

                /** Represents an ArrayValue. */
                class ArrayValue implements IArrayValue {

                    /**
                     * Constructs a new ArrayValue.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: opentelemetry.proto.common.v1.IArrayValue);

                    /** ArrayValue values. */
                    public values: opentelemetry.proto.common.v1.IAnyValue[];

                    /**
                     * Creates a new ArrayValue instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ArrayValue instance
                     */
                    public static create(properties?: opentelemetry.proto.common.v1.IArrayValue): opentelemetry.proto.common.v1.ArrayValue;

                    /**
                     * Encodes the specified ArrayValue message. Does not implicitly {@link opentelemetry.proto.common.v1.ArrayValue.verify|verify} messages.
                     * @param message ArrayValue message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: opentelemetry.proto.common.v1.IArrayValue, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ArrayValue message, length delimited. Does not implicitly {@link opentelemetry.proto.common.v1.ArrayValue.verify|verify} messages.
                     * @param message ArrayValue message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: opentelemetry.proto.common.v1.IArrayValue, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ArrayValue message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ArrayValue
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): opentelemetry.proto.common.v1.ArrayValue;

                    /**
                     * Decodes an ArrayValue message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ArrayValue
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): opentelemetry.proto.common.v1.ArrayValue;

                    /**
                     * Verifies an ArrayValue message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ArrayValue message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ArrayValue
                     */
                    public static fromObject(object: { [k: string]: any }): opentelemetry.proto.common.v1.ArrayValue;

                    /**
                     * Creates a plain object from an ArrayValue message. Also converts values to other types if specified.
                     * @param message ArrayValue
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: opentelemetry.proto.common.v1.ArrayValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ArrayValue to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ArrayValue
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a KeyValueList. */
                interface IKeyValueList {

                    /** KeyValueList values */
                    values?: (opentelemetry.proto.common.v1.IKeyValue[]|null);
                }

                /** Represents a KeyValueList. */
                class KeyValueList implements IKeyValueList {

                    /**
                     * Constructs a new KeyValueList.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: opentelemetry.proto.common.v1.IKeyValueList);

                    /** KeyValueList values. */
                    public values: opentelemetry.proto.common.v1.IKeyValue[];

                    /**
                     * Creates a new KeyValueList instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns KeyValueList instance
                     */
                    public static create(properties?: opentelemetry.proto.common.v1.IKeyValueList): opentelemetry.proto.common.v1.KeyValueList;

                    /**
                     * Encodes the specified KeyValueList message. Does not implicitly {@link opentelemetry.proto.common.v1.KeyValueList.verify|verify} messages.
                     * @param message KeyValueList message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: opentelemetry.proto.common.v1.IKeyValueList, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified KeyValueList message, length delimited. Does not implicitly {@link opentelemetry.proto.common.v1.KeyValueList.verify|verify} messages.
                     * @param message KeyValueList message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: opentelemetry.proto.common.v1.IKeyValueList, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a KeyValueList message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns KeyValueList
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): opentelemetry.proto.common.v1.KeyValueList;

                    /**
                     * Decodes a KeyValueList message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns KeyValueList
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): opentelemetry.proto.common.v1.KeyValueList;

                    /**
                     * Verifies a KeyValueList message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a KeyValueList message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns KeyValueList
                     */
                    public static fromObject(object: { [k: string]: any }): opentelemetry.proto.common.v1.KeyValueList;

                    /**
                     * Creates a plain object from a KeyValueList message. Also converts values to other types if specified.
                     * @param message KeyValueList
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: opentelemetry.proto.common.v1.KeyValueList, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this KeyValueList to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for KeyValueList
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a KeyValue. */
                interface IKeyValue {

                    /** KeyValue key */
                    key?: (string|null);

                    /** KeyValue value */
                    value?: (opentelemetry.proto.common.v1.IAnyValue|null);
                }

                /** Represents a KeyValue. */
                class KeyValue implements IKeyValue {

                    /**
                     * Constructs a new KeyValue.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: opentelemetry.proto.common.v1.IKeyValue);

                    /** KeyValue key. */
                    public key?: (string|null);

                    /** KeyValue value. */
                    public value?: (opentelemetry.proto.common.v1.IAnyValue|null);

                    /**
                     * Creates a new KeyValue instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns KeyValue instance
                     */
                    public static create(properties?: opentelemetry.proto.common.v1.IKeyValue): opentelemetry.proto.common.v1.KeyValue;

                    /**
                     * Encodes the specified KeyValue message. Does not implicitly {@link opentelemetry.proto.common.v1.KeyValue.verify|verify} messages.
                     * @param message KeyValue message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: opentelemetry.proto.common.v1.IKeyValue, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified KeyValue message, length delimited. Does not implicitly {@link opentelemetry.proto.common.v1.KeyValue.verify|verify} messages.
                     * @param message KeyValue message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: opentelemetry.proto.common.v1.IKeyValue, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a KeyValue message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns KeyValue
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): opentelemetry.proto.common.v1.KeyValue;

                    /**
                     * Decodes a KeyValue message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns KeyValue
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): opentelemetry.proto.common.v1.KeyValue;

                    /**
                     * Verifies a KeyValue message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a KeyValue message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns KeyValue
                     */
                    public static fromObject(object: { [k: string]: any }): opentelemetry.proto.common.v1.KeyValue;

                    /**
                     * Creates a plain object from a KeyValue message. Also converts values to other types if specified.
                     * @param message KeyValue
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: opentelemetry.proto.common.v1.KeyValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this KeyValue to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for KeyValue
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an InstrumentationScope. */
                interface IInstrumentationScope {

                    /** InstrumentationScope name */
                    name?: (string|null);

                    /** InstrumentationScope version */
                    version?: (string|null);

                    /** InstrumentationScope attributes */
                    attributes?: (opentelemetry.proto.common.v1.IKeyValue[]|null);

                    /** InstrumentationScope droppedAttributesCount */
                    droppedAttributesCount?: (number|null);
                }

                /** Represents an InstrumentationScope. */
                class InstrumentationScope implements IInstrumentationScope {

                    /**
                     * Constructs a new InstrumentationScope.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: opentelemetry.proto.common.v1.IInstrumentationScope);

                    /** InstrumentationScope name. */
                    public name?: (string|null);

                    /** InstrumentationScope version. */
                    public version?: (string|null);

                    /** InstrumentationScope attributes. */
                    public attributes: opentelemetry.proto.common.v1.IKeyValue[];

                    /** InstrumentationScope droppedAttributesCount. */
                    public droppedAttributesCount?: (number|null);

                    /**
                     * Creates a new InstrumentationScope instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns InstrumentationScope instance
                     */
                    public static create(properties?: opentelemetry.proto.common.v1.IInstrumentationScope): opentelemetry.proto.common.v1.InstrumentationScope;

                    /**
                     * Encodes the specified InstrumentationScope message. Does not implicitly {@link opentelemetry.proto.common.v1.InstrumentationScope.verify|verify} messages.
                     * @param message InstrumentationScope message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: opentelemetry.proto.common.v1.IInstrumentationScope, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified InstrumentationScope message, length delimited. Does not implicitly {@link opentelemetry.proto.common.v1.InstrumentationScope.verify|verify} messages.
                     * @param message InstrumentationScope message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: opentelemetry.proto.common.v1.IInstrumentationScope, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an InstrumentationScope message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns InstrumentationScope
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): opentelemetry.proto.common.v1.InstrumentationScope;

                    /**
                     * Decodes an InstrumentationScope message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns InstrumentationScope
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): opentelemetry.proto.common.v1.InstrumentationScope;

                    /**
                     * Verifies an InstrumentationScope message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an InstrumentationScope message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns InstrumentationScope
                     */
                    public static fromObject(object: { [k: string]: any }): opentelemetry.proto.common.v1.InstrumentationScope;

                    /**
                     * Creates a plain object from an InstrumentationScope message. Also converts values to other types if specified.
                     * @param message InstrumentationScope
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: opentelemetry.proto.common.v1.InstrumentationScope, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this InstrumentationScope to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for InstrumentationScope
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }
            }
        }

        /** Namespace resource. */
        namespace resource {

            /** Namespace v1. */
            namespace v1 {

                /** Properties of a Resource. */
                interface IResource {

                    /** Resource attributes */
                    attributes?: (opentelemetry.proto.common.v1.IKeyValue[]|null);

                    /** Resource droppedAttributesCount */
                    droppedAttributesCount?: (number|null);
                }

                /** Represents a Resource. */
                class Resource implements IResource {

                    /**
                     * Constructs a new Resource.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: opentelemetry.proto.resource.v1.IResource);

                    /** Resource attributes. */
                    public attributes: opentelemetry.proto.common.v1.IKeyValue[];

                    /** Resource droppedAttributesCount. */
                    public droppedAttributesCount?: (number|null);

                    /**
                     * Creates a new Resource instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Resource instance
                     */
                    public static create(properties?: opentelemetry.proto.resource.v1.IResource): opentelemetry.proto.resource.v1.Resource;

                    /**
                     * Encodes the specified Resource message. Does not implicitly {@link opentelemetry.proto.resource.v1.Resource.verify|verify} messages.
                     * @param message Resource message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: opentelemetry.proto.resource.v1.IResource, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Resource message, length delimited. Does not implicitly {@link opentelemetry.proto.resource.v1.Resource.verify|verify} messages.
                     * @param message Resource message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: opentelemetry.proto.resource.v1.IResource, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Resource message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Resource
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): opentelemetry.proto.resource.v1.Resource;

                    /**
                     * Decodes a Resource message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Resource
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): opentelemetry.proto.resource.v1.Resource;

                    /**
                     * Verifies a Resource message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Resource message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Resource
                     */
                    public static fromObject(object: { [k: string]: any }): opentelemetry.proto.resource.v1.Resource;

                    /**
                     * Creates a plain object from a Resource message. Also converts values to other types if specified.
                     * @param message Resource
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: opentelemetry.proto.resource.v1.Resource, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Resource to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Resource
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }
            }
        }
    }
}
