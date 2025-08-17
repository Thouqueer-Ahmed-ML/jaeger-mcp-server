/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.jaeger = (function() {

    /**
     * Namespace jaeger.
     * @exports jaeger
     * @namespace
     */
    var jaeger = {};

    jaeger.api_v3 = (function() {

        /**
         * Namespace api_v3.
         * @memberof jaeger
         * @namespace
         */
        var api_v3 = {};

        api_v3.GetTraceRequest = (function() {

            /**
             * Properties of a GetTraceRequest.
             * @memberof jaeger.api_v3
             * @interface IGetTraceRequest
             * @property {string|null} [traceId] GetTraceRequest traceId
             * @property {google.protobuf.ITimestamp|null} [startTime] GetTraceRequest startTime
             * @property {google.protobuf.ITimestamp|null} [endTime] GetTraceRequest endTime
             * @property {boolean|null} [rawTraces] GetTraceRequest rawTraces
             */

            /**
             * Constructs a new GetTraceRequest.
             * @memberof jaeger.api_v3
             * @classdesc Represents a GetTraceRequest.
             * @implements IGetTraceRequest
             * @constructor
             * @param {jaeger.api_v3.IGetTraceRequest=} [properties] Properties to set
             */
            function GetTraceRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * GetTraceRequest traceId.
             * @member {string|null|undefined} traceId
             * @memberof jaeger.api_v3.GetTraceRequest
             * @instance
             */
            GetTraceRequest.prototype.traceId = null;

            /**
             * GetTraceRequest startTime.
             * @member {google.protobuf.ITimestamp|null|undefined} startTime
             * @memberof jaeger.api_v3.GetTraceRequest
             * @instance
             */
            GetTraceRequest.prototype.startTime = null;

            /**
             * GetTraceRequest endTime.
             * @member {google.protobuf.ITimestamp|null|undefined} endTime
             * @memberof jaeger.api_v3.GetTraceRequest
             * @instance
             */
            GetTraceRequest.prototype.endTime = null;

            /**
             * GetTraceRequest rawTraces.
             * @member {boolean|null|undefined} rawTraces
             * @memberof jaeger.api_v3.GetTraceRequest
             * @instance
             */
            GetTraceRequest.prototype.rawTraces = null;

            /**
             * Creates a new GetTraceRequest instance using the specified properties.
             * @function create
             * @memberof jaeger.api_v3.GetTraceRequest
             * @static
             * @param {jaeger.api_v3.IGetTraceRequest=} [properties] Properties to set
             * @returns {jaeger.api_v3.GetTraceRequest} GetTraceRequest instance
             */
            GetTraceRequest.create = function create(properties) {
                return new GetTraceRequest(properties);
            };

            /**
             * Encodes the specified GetTraceRequest message. Does not implicitly {@link jaeger.api_v3.GetTraceRequest.verify|verify} messages.
             * @function encode
             * @memberof jaeger.api_v3.GetTraceRequest
             * @static
             * @param {jaeger.api_v3.IGetTraceRequest} message GetTraceRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetTraceRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.traceId != null && Object.hasOwnProperty.call(message, "traceId"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.traceId);
                if (message.startTime != null && Object.hasOwnProperty.call(message, "startTime"))
                    $root.google.protobuf.Timestamp.encode(message.startTime, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.endTime != null && Object.hasOwnProperty.call(message, "endTime"))
                    $root.google.protobuf.Timestamp.encode(message.endTime, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.rawTraces != null && Object.hasOwnProperty.call(message, "rawTraces"))
                    writer.uint32(/* id 4, wireType 0 =*/32).bool(message.rawTraces);
                return writer;
            };

            /**
             * Encodes the specified GetTraceRequest message, length delimited. Does not implicitly {@link jaeger.api_v3.GetTraceRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof jaeger.api_v3.GetTraceRequest
             * @static
             * @param {jaeger.api_v3.IGetTraceRequest} message GetTraceRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetTraceRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a GetTraceRequest message from the specified reader or buffer.
             * @function decode
             * @memberof jaeger.api_v3.GetTraceRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {jaeger.api_v3.GetTraceRequest} GetTraceRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetTraceRequest.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.jaeger.api_v3.GetTraceRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.traceId = reader.string();
                            break;
                        }
                    case 2: {
                            message.startTime = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                            break;
                        }
                    case 3: {
                            message.endTime = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                            break;
                        }
                    case 4: {
                            message.rawTraces = reader.bool();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a GetTraceRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof jaeger.api_v3.GetTraceRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {jaeger.api_v3.GetTraceRequest} GetTraceRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetTraceRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a GetTraceRequest message.
             * @function verify
             * @memberof jaeger.api_v3.GetTraceRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GetTraceRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.traceId != null && message.hasOwnProperty("traceId"))
                    if (!$util.isString(message.traceId))
                        return "traceId: string expected";
                if (message.startTime != null && message.hasOwnProperty("startTime")) {
                    var error = $root.google.protobuf.Timestamp.verify(message.startTime);
                    if (error)
                        return "startTime." + error;
                }
                if (message.endTime != null && message.hasOwnProperty("endTime")) {
                    var error = $root.google.protobuf.Timestamp.verify(message.endTime);
                    if (error)
                        return "endTime." + error;
                }
                if (message.rawTraces != null && message.hasOwnProperty("rawTraces"))
                    if (typeof message.rawTraces !== "boolean")
                        return "rawTraces: boolean expected";
                return null;
            };

            /**
             * Creates a GetTraceRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof jaeger.api_v3.GetTraceRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {jaeger.api_v3.GetTraceRequest} GetTraceRequest
             */
            GetTraceRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.jaeger.api_v3.GetTraceRequest)
                    return object;
                var message = new $root.jaeger.api_v3.GetTraceRequest();
                if (object.traceId != null)
                    message.traceId = String(object.traceId);
                if (object.startTime != null) {
                    if (typeof object.startTime !== "object")
                        throw TypeError(".jaeger.api_v3.GetTraceRequest.startTime: object expected");
                    message.startTime = $root.google.protobuf.Timestamp.fromObject(object.startTime);
                }
                if (object.endTime != null) {
                    if (typeof object.endTime !== "object")
                        throw TypeError(".jaeger.api_v3.GetTraceRequest.endTime: object expected");
                    message.endTime = $root.google.protobuf.Timestamp.fromObject(object.endTime);
                }
                if (object.rawTraces != null)
                    message.rawTraces = Boolean(object.rawTraces);
                return message;
            };

            /**
             * Creates a plain object from a GetTraceRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof jaeger.api_v3.GetTraceRequest
             * @static
             * @param {jaeger.api_v3.GetTraceRequest} message GetTraceRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GetTraceRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.traceId = "";
                    object.startTime = null;
                    object.endTime = null;
                    object.rawTraces = false;
                }
                if (message.traceId != null && message.hasOwnProperty("traceId"))
                    object.traceId = message.traceId;
                if (message.startTime != null && message.hasOwnProperty("startTime"))
                    object.startTime = $root.google.protobuf.Timestamp.toObject(message.startTime, options);
                if (message.endTime != null && message.hasOwnProperty("endTime"))
                    object.endTime = $root.google.protobuf.Timestamp.toObject(message.endTime, options);
                if (message.rawTraces != null && message.hasOwnProperty("rawTraces"))
                    object.rawTraces = message.rawTraces;
                return object;
            };

            /**
             * Converts this GetTraceRequest to JSON.
             * @function toJSON
             * @memberof jaeger.api_v3.GetTraceRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GetTraceRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for GetTraceRequest
             * @function getTypeUrl
             * @memberof jaeger.api_v3.GetTraceRequest
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            GetTraceRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/jaeger.api_v3.GetTraceRequest";
            };

            return GetTraceRequest;
        })();

        api_v3.TraceQueryParameters = (function() {

            /**
             * Properties of a TraceQueryParameters.
             * @memberof jaeger.api_v3
             * @interface ITraceQueryParameters
             * @property {string|null} [serviceName] TraceQueryParameters serviceName
             * @property {string|null} [operationName] TraceQueryParameters operationName
             * @property {Object.<string,string>|null} [attributes] TraceQueryParameters attributes
             * @property {google.protobuf.ITimestamp|null} [startTimeMin] TraceQueryParameters startTimeMin
             * @property {google.protobuf.ITimestamp|null} [startTimeMax] TraceQueryParameters startTimeMax
             * @property {google.protobuf.IDuration|null} [durationMin] TraceQueryParameters durationMin
             * @property {google.protobuf.IDuration|null} [durationMax] TraceQueryParameters durationMax
             * @property {number|null} [searchDepth] TraceQueryParameters searchDepth
             * @property {boolean|null} [rawTraces] TraceQueryParameters rawTraces
             */

            /**
             * Constructs a new TraceQueryParameters.
             * @memberof jaeger.api_v3
             * @classdesc Represents a TraceQueryParameters.
             * @implements ITraceQueryParameters
             * @constructor
             * @param {jaeger.api_v3.ITraceQueryParameters=} [properties] Properties to set
             */
            function TraceQueryParameters(properties) {
                this.attributes = {};
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * TraceQueryParameters serviceName.
             * @member {string|null|undefined} serviceName
             * @memberof jaeger.api_v3.TraceQueryParameters
             * @instance
             */
            TraceQueryParameters.prototype.serviceName = null;

            /**
             * TraceQueryParameters operationName.
             * @member {string|null|undefined} operationName
             * @memberof jaeger.api_v3.TraceQueryParameters
             * @instance
             */
            TraceQueryParameters.prototype.operationName = null;

            /**
             * TraceQueryParameters attributes.
             * @member {Object.<string,string>} attributes
             * @memberof jaeger.api_v3.TraceQueryParameters
             * @instance
             */
            TraceQueryParameters.prototype.attributes = $util.emptyObject;

            /**
             * TraceQueryParameters startTimeMin.
             * @member {google.protobuf.ITimestamp|null|undefined} startTimeMin
             * @memberof jaeger.api_v3.TraceQueryParameters
             * @instance
             */
            TraceQueryParameters.prototype.startTimeMin = null;

            /**
             * TraceQueryParameters startTimeMax.
             * @member {google.protobuf.ITimestamp|null|undefined} startTimeMax
             * @memberof jaeger.api_v3.TraceQueryParameters
             * @instance
             */
            TraceQueryParameters.prototype.startTimeMax = null;

            /**
             * TraceQueryParameters durationMin.
             * @member {google.protobuf.IDuration|null|undefined} durationMin
             * @memberof jaeger.api_v3.TraceQueryParameters
             * @instance
             */
            TraceQueryParameters.prototype.durationMin = null;

            /**
             * TraceQueryParameters durationMax.
             * @member {google.protobuf.IDuration|null|undefined} durationMax
             * @memberof jaeger.api_v3.TraceQueryParameters
             * @instance
             */
            TraceQueryParameters.prototype.durationMax = null;

            /**
             * TraceQueryParameters searchDepth.
             * @member {number|null|undefined} searchDepth
             * @memberof jaeger.api_v3.TraceQueryParameters
             * @instance
             */
            TraceQueryParameters.prototype.searchDepth = null;

            /**
             * TraceQueryParameters rawTraces.
             * @member {boolean|null|undefined} rawTraces
             * @memberof jaeger.api_v3.TraceQueryParameters
             * @instance
             */
            TraceQueryParameters.prototype.rawTraces = null;

            /**
             * Creates a new TraceQueryParameters instance using the specified properties.
             * @function create
             * @memberof jaeger.api_v3.TraceQueryParameters
             * @static
             * @param {jaeger.api_v3.ITraceQueryParameters=} [properties] Properties to set
             * @returns {jaeger.api_v3.TraceQueryParameters} TraceQueryParameters instance
             */
            TraceQueryParameters.create = function create(properties) {
                return new TraceQueryParameters(properties);
            };

            /**
             * Encodes the specified TraceQueryParameters message. Does not implicitly {@link jaeger.api_v3.TraceQueryParameters.verify|verify} messages.
             * @function encode
             * @memberof jaeger.api_v3.TraceQueryParameters
             * @static
             * @param {jaeger.api_v3.ITraceQueryParameters} message TraceQueryParameters message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TraceQueryParameters.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.serviceName != null && Object.hasOwnProperty.call(message, "serviceName"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.serviceName);
                if (message.operationName != null && Object.hasOwnProperty.call(message, "operationName"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.operationName);
                if (message.attributes != null && Object.hasOwnProperty.call(message, "attributes"))
                    for (var keys = Object.keys(message.attributes), i = 0; i < keys.length; ++i)
                        writer.uint32(/* id 3, wireType 2 =*/26).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.attributes[keys[i]]).ldelim();
                if (message.startTimeMin != null && Object.hasOwnProperty.call(message, "startTimeMin"))
                    $root.google.protobuf.Timestamp.encode(message.startTimeMin, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.startTimeMax != null && Object.hasOwnProperty.call(message, "startTimeMax"))
                    $root.google.protobuf.Timestamp.encode(message.startTimeMax, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                if (message.durationMin != null && Object.hasOwnProperty.call(message, "durationMin"))
                    $root.google.protobuf.Duration.encode(message.durationMin, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                if (message.durationMax != null && Object.hasOwnProperty.call(message, "durationMax"))
                    $root.google.protobuf.Duration.encode(message.durationMax, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                if (message.searchDepth != null && Object.hasOwnProperty.call(message, "searchDepth"))
                    writer.uint32(/* id 8, wireType 0 =*/64).int32(message.searchDepth);
                if (message.rawTraces != null && Object.hasOwnProperty.call(message, "rawTraces"))
                    writer.uint32(/* id 9, wireType 0 =*/72).bool(message.rawTraces);
                return writer;
            };

            /**
             * Encodes the specified TraceQueryParameters message, length delimited. Does not implicitly {@link jaeger.api_v3.TraceQueryParameters.verify|verify} messages.
             * @function encodeDelimited
             * @memberof jaeger.api_v3.TraceQueryParameters
             * @static
             * @param {jaeger.api_v3.ITraceQueryParameters} message TraceQueryParameters message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TraceQueryParameters.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a TraceQueryParameters message from the specified reader or buffer.
             * @function decode
             * @memberof jaeger.api_v3.TraceQueryParameters
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {jaeger.api_v3.TraceQueryParameters} TraceQueryParameters
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TraceQueryParameters.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.jaeger.api_v3.TraceQueryParameters(), key, value;
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.serviceName = reader.string();
                            break;
                        }
                    case 2: {
                            message.operationName = reader.string();
                            break;
                        }
                    case 3: {
                            if (message.attributes === $util.emptyObject)
                                message.attributes = {};
                            var end2 = reader.uint32() + reader.pos;
                            key = "";
                            value = "";
                            while (reader.pos < end2) {
                                var tag2 = reader.uint32();
                                switch (tag2 >>> 3) {
                                case 1:
                                    key = reader.string();
                                    break;
                                case 2:
                                    value = reader.string();
                                    break;
                                default:
                                    reader.skipType(tag2 & 7);
                                    break;
                                }
                            }
                            message.attributes[key] = value;
                            break;
                        }
                    case 4: {
                            message.startTimeMin = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                            break;
                        }
                    case 5: {
                            message.startTimeMax = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                            break;
                        }
                    case 6: {
                            message.durationMin = $root.google.protobuf.Duration.decode(reader, reader.uint32());
                            break;
                        }
                    case 7: {
                            message.durationMax = $root.google.protobuf.Duration.decode(reader, reader.uint32());
                            break;
                        }
                    case 8: {
                            message.searchDepth = reader.int32();
                            break;
                        }
                    case 9: {
                            message.rawTraces = reader.bool();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a TraceQueryParameters message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof jaeger.api_v3.TraceQueryParameters
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {jaeger.api_v3.TraceQueryParameters} TraceQueryParameters
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TraceQueryParameters.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a TraceQueryParameters message.
             * @function verify
             * @memberof jaeger.api_v3.TraceQueryParameters
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TraceQueryParameters.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.serviceName != null && message.hasOwnProperty("serviceName"))
                    if (!$util.isString(message.serviceName))
                        return "serviceName: string expected";
                if (message.operationName != null && message.hasOwnProperty("operationName"))
                    if (!$util.isString(message.operationName))
                        return "operationName: string expected";
                if (message.attributes != null && message.hasOwnProperty("attributes")) {
                    if (!$util.isObject(message.attributes))
                        return "attributes: object expected";
                    var key = Object.keys(message.attributes);
                    for (var i = 0; i < key.length; ++i)
                        if (!$util.isString(message.attributes[key[i]]))
                            return "attributes: string{k:string} expected";
                }
                if (message.startTimeMin != null && message.hasOwnProperty("startTimeMin")) {
                    var error = $root.google.protobuf.Timestamp.verify(message.startTimeMin);
                    if (error)
                        return "startTimeMin." + error;
                }
                if (message.startTimeMax != null && message.hasOwnProperty("startTimeMax")) {
                    var error = $root.google.protobuf.Timestamp.verify(message.startTimeMax);
                    if (error)
                        return "startTimeMax." + error;
                }
                if (message.durationMin != null && message.hasOwnProperty("durationMin")) {
                    var error = $root.google.protobuf.Duration.verify(message.durationMin);
                    if (error)
                        return "durationMin." + error;
                }
                if (message.durationMax != null && message.hasOwnProperty("durationMax")) {
                    var error = $root.google.protobuf.Duration.verify(message.durationMax);
                    if (error)
                        return "durationMax." + error;
                }
                if (message.searchDepth != null && message.hasOwnProperty("searchDepth"))
                    if (!$util.isInteger(message.searchDepth))
                        return "searchDepth: integer expected";
                if (message.rawTraces != null && message.hasOwnProperty("rawTraces"))
                    if (typeof message.rawTraces !== "boolean")
                        return "rawTraces: boolean expected";
                return null;
            };

            /**
             * Creates a TraceQueryParameters message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof jaeger.api_v3.TraceQueryParameters
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {jaeger.api_v3.TraceQueryParameters} TraceQueryParameters
             */
            TraceQueryParameters.fromObject = function fromObject(object) {
                if (object instanceof $root.jaeger.api_v3.TraceQueryParameters)
                    return object;
                var message = new $root.jaeger.api_v3.TraceQueryParameters();
                if (object.serviceName != null)
                    message.serviceName = String(object.serviceName);
                if (object.operationName != null)
                    message.operationName = String(object.operationName);
                if (object.attributes) {
                    if (typeof object.attributes !== "object")
                        throw TypeError(".jaeger.api_v3.TraceQueryParameters.attributes: object expected");
                    message.attributes = {};
                    for (var keys = Object.keys(object.attributes), i = 0; i < keys.length; ++i)
                        message.attributes[keys[i]] = String(object.attributes[keys[i]]);
                }
                if (object.startTimeMin != null) {
                    if (typeof object.startTimeMin !== "object")
                        throw TypeError(".jaeger.api_v3.TraceQueryParameters.startTimeMin: object expected");
                    message.startTimeMin = $root.google.protobuf.Timestamp.fromObject(object.startTimeMin);
                }
                if (object.startTimeMax != null) {
                    if (typeof object.startTimeMax !== "object")
                        throw TypeError(".jaeger.api_v3.TraceQueryParameters.startTimeMax: object expected");
                    message.startTimeMax = $root.google.protobuf.Timestamp.fromObject(object.startTimeMax);
                }
                if (object.durationMin != null) {
                    if (typeof object.durationMin !== "object")
                        throw TypeError(".jaeger.api_v3.TraceQueryParameters.durationMin: object expected");
                    message.durationMin = $root.google.protobuf.Duration.fromObject(object.durationMin);
                }
                if (object.durationMax != null) {
                    if (typeof object.durationMax !== "object")
                        throw TypeError(".jaeger.api_v3.TraceQueryParameters.durationMax: object expected");
                    message.durationMax = $root.google.protobuf.Duration.fromObject(object.durationMax);
                }
                if (object.searchDepth != null)
                    message.searchDepth = object.searchDepth | 0;
                if (object.rawTraces != null)
                    message.rawTraces = Boolean(object.rawTraces);
                return message;
            };

            /**
             * Creates a plain object from a TraceQueryParameters message. Also converts values to other types if specified.
             * @function toObject
             * @memberof jaeger.api_v3.TraceQueryParameters
             * @static
             * @param {jaeger.api_v3.TraceQueryParameters} message TraceQueryParameters
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TraceQueryParameters.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.objects || options.defaults)
                    object.attributes = {};
                if (options.defaults) {
                    object.serviceName = "";
                    object.operationName = "";
                    object.startTimeMin = null;
                    object.startTimeMax = null;
                    object.durationMin = null;
                    object.durationMax = null;
                    object.searchDepth = 0;
                    object.rawTraces = false;
                }
                if (message.serviceName != null && message.hasOwnProperty("serviceName"))
                    object.serviceName = message.serviceName;
                if (message.operationName != null && message.hasOwnProperty("operationName"))
                    object.operationName = message.operationName;
                var keys2;
                if (message.attributes && (keys2 = Object.keys(message.attributes)).length) {
                    object.attributes = {};
                    for (var j = 0; j < keys2.length; ++j)
                        object.attributes[keys2[j]] = message.attributes[keys2[j]];
                }
                if (message.startTimeMin != null && message.hasOwnProperty("startTimeMin"))
                    object.startTimeMin = $root.google.protobuf.Timestamp.toObject(message.startTimeMin, options);
                if (message.startTimeMax != null && message.hasOwnProperty("startTimeMax"))
                    object.startTimeMax = $root.google.protobuf.Timestamp.toObject(message.startTimeMax, options);
                if (message.durationMin != null && message.hasOwnProperty("durationMin"))
                    object.durationMin = $root.google.protobuf.Duration.toObject(message.durationMin, options);
                if (message.durationMax != null && message.hasOwnProperty("durationMax"))
                    object.durationMax = $root.google.protobuf.Duration.toObject(message.durationMax, options);
                if (message.searchDepth != null && message.hasOwnProperty("searchDepth"))
                    object.searchDepth = message.searchDepth;
                if (message.rawTraces != null && message.hasOwnProperty("rawTraces"))
                    object.rawTraces = message.rawTraces;
                return object;
            };

            /**
             * Converts this TraceQueryParameters to JSON.
             * @function toJSON
             * @memberof jaeger.api_v3.TraceQueryParameters
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            TraceQueryParameters.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for TraceQueryParameters
             * @function getTypeUrl
             * @memberof jaeger.api_v3.TraceQueryParameters
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            TraceQueryParameters.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/jaeger.api_v3.TraceQueryParameters";
            };

            return TraceQueryParameters;
        })();

        api_v3.FindTracesRequest = (function() {

            /**
             * Properties of a FindTracesRequest.
             * @memberof jaeger.api_v3
             * @interface IFindTracesRequest
             * @property {jaeger.api_v3.ITraceQueryParameters|null} [query] FindTracesRequest query
             */

            /**
             * Constructs a new FindTracesRequest.
             * @memberof jaeger.api_v3
             * @classdesc Represents a FindTracesRequest.
             * @implements IFindTracesRequest
             * @constructor
             * @param {jaeger.api_v3.IFindTracesRequest=} [properties] Properties to set
             */
            function FindTracesRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * FindTracesRequest query.
             * @member {jaeger.api_v3.ITraceQueryParameters|null|undefined} query
             * @memberof jaeger.api_v3.FindTracesRequest
             * @instance
             */
            FindTracesRequest.prototype.query = null;

            /**
             * Creates a new FindTracesRequest instance using the specified properties.
             * @function create
             * @memberof jaeger.api_v3.FindTracesRequest
             * @static
             * @param {jaeger.api_v3.IFindTracesRequest=} [properties] Properties to set
             * @returns {jaeger.api_v3.FindTracesRequest} FindTracesRequest instance
             */
            FindTracesRequest.create = function create(properties) {
                return new FindTracesRequest(properties);
            };

            /**
             * Encodes the specified FindTracesRequest message. Does not implicitly {@link jaeger.api_v3.FindTracesRequest.verify|verify} messages.
             * @function encode
             * @memberof jaeger.api_v3.FindTracesRequest
             * @static
             * @param {jaeger.api_v3.IFindTracesRequest} message FindTracesRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FindTracesRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.query != null && Object.hasOwnProperty.call(message, "query"))
                    $root.jaeger.api_v3.TraceQueryParameters.encode(message.query, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified FindTracesRequest message, length delimited. Does not implicitly {@link jaeger.api_v3.FindTracesRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof jaeger.api_v3.FindTracesRequest
             * @static
             * @param {jaeger.api_v3.IFindTracesRequest} message FindTracesRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FindTracesRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a FindTracesRequest message from the specified reader or buffer.
             * @function decode
             * @memberof jaeger.api_v3.FindTracesRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {jaeger.api_v3.FindTracesRequest} FindTracesRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FindTracesRequest.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.jaeger.api_v3.FindTracesRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.query = $root.jaeger.api_v3.TraceQueryParameters.decode(reader, reader.uint32());
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a FindTracesRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof jaeger.api_v3.FindTracesRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {jaeger.api_v3.FindTracesRequest} FindTracesRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FindTracesRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a FindTracesRequest message.
             * @function verify
             * @memberof jaeger.api_v3.FindTracesRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            FindTracesRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.query != null && message.hasOwnProperty("query")) {
                    var error = $root.jaeger.api_v3.TraceQueryParameters.verify(message.query);
                    if (error)
                        return "query." + error;
                }
                return null;
            };

            /**
             * Creates a FindTracesRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof jaeger.api_v3.FindTracesRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {jaeger.api_v3.FindTracesRequest} FindTracesRequest
             */
            FindTracesRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.jaeger.api_v3.FindTracesRequest)
                    return object;
                var message = new $root.jaeger.api_v3.FindTracesRequest();
                if (object.query != null) {
                    if (typeof object.query !== "object")
                        throw TypeError(".jaeger.api_v3.FindTracesRequest.query: object expected");
                    message.query = $root.jaeger.api_v3.TraceQueryParameters.fromObject(object.query);
                }
                return message;
            };

            /**
             * Creates a plain object from a FindTracesRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof jaeger.api_v3.FindTracesRequest
             * @static
             * @param {jaeger.api_v3.FindTracesRequest} message FindTracesRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FindTracesRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.query = null;
                if (message.query != null && message.hasOwnProperty("query"))
                    object.query = $root.jaeger.api_v3.TraceQueryParameters.toObject(message.query, options);
                return object;
            };

            /**
             * Converts this FindTracesRequest to JSON.
             * @function toJSON
             * @memberof jaeger.api_v3.FindTracesRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            FindTracesRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for FindTracesRequest
             * @function getTypeUrl
             * @memberof jaeger.api_v3.FindTracesRequest
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            FindTracesRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/jaeger.api_v3.FindTracesRequest";
            };

            return FindTracesRequest;
        })();

        api_v3.GetServicesRequest = (function() {

            /**
             * Properties of a GetServicesRequest.
             * @memberof jaeger.api_v3
             * @interface IGetServicesRequest
             */

            /**
             * Constructs a new GetServicesRequest.
             * @memberof jaeger.api_v3
             * @classdesc Represents a GetServicesRequest.
             * @implements IGetServicesRequest
             * @constructor
             * @param {jaeger.api_v3.IGetServicesRequest=} [properties] Properties to set
             */
            function GetServicesRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new GetServicesRequest instance using the specified properties.
             * @function create
             * @memberof jaeger.api_v3.GetServicesRequest
             * @static
             * @param {jaeger.api_v3.IGetServicesRequest=} [properties] Properties to set
             * @returns {jaeger.api_v3.GetServicesRequest} GetServicesRequest instance
             */
            GetServicesRequest.create = function create(properties) {
                return new GetServicesRequest(properties);
            };

            /**
             * Encodes the specified GetServicesRequest message. Does not implicitly {@link jaeger.api_v3.GetServicesRequest.verify|verify} messages.
             * @function encode
             * @memberof jaeger.api_v3.GetServicesRequest
             * @static
             * @param {jaeger.api_v3.IGetServicesRequest} message GetServicesRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetServicesRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified GetServicesRequest message, length delimited. Does not implicitly {@link jaeger.api_v3.GetServicesRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof jaeger.api_v3.GetServicesRequest
             * @static
             * @param {jaeger.api_v3.IGetServicesRequest} message GetServicesRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetServicesRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a GetServicesRequest message from the specified reader or buffer.
             * @function decode
             * @memberof jaeger.api_v3.GetServicesRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {jaeger.api_v3.GetServicesRequest} GetServicesRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetServicesRequest.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.jaeger.api_v3.GetServicesRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a GetServicesRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof jaeger.api_v3.GetServicesRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {jaeger.api_v3.GetServicesRequest} GetServicesRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetServicesRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a GetServicesRequest message.
             * @function verify
             * @memberof jaeger.api_v3.GetServicesRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GetServicesRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            /**
             * Creates a GetServicesRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof jaeger.api_v3.GetServicesRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {jaeger.api_v3.GetServicesRequest} GetServicesRequest
             */
            GetServicesRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.jaeger.api_v3.GetServicesRequest)
                    return object;
                return new $root.jaeger.api_v3.GetServicesRequest();
            };

            /**
             * Creates a plain object from a GetServicesRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof jaeger.api_v3.GetServicesRequest
             * @static
             * @param {jaeger.api_v3.GetServicesRequest} message GetServicesRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GetServicesRequest.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this GetServicesRequest to JSON.
             * @function toJSON
             * @memberof jaeger.api_v3.GetServicesRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GetServicesRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for GetServicesRequest
             * @function getTypeUrl
             * @memberof jaeger.api_v3.GetServicesRequest
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            GetServicesRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/jaeger.api_v3.GetServicesRequest";
            };

            return GetServicesRequest;
        })();

        api_v3.GetServicesResponse = (function() {

            /**
             * Properties of a GetServicesResponse.
             * @memberof jaeger.api_v3
             * @interface IGetServicesResponse
             * @property {Array.<string>|null} [services] GetServicesResponse services
             */

            /**
             * Constructs a new GetServicesResponse.
             * @memberof jaeger.api_v3
             * @classdesc Represents a GetServicesResponse.
             * @implements IGetServicesResponse
             * @constructor
             * @param {jaeger.api_v3.IGetServicesResponse=} [properties] Properties to set
             */
            function GetServicesResponse(properties) {
                this.services = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * GetServicesResponse services.
             * @member {Array.<string>} services
             * @memberof jaeger.api_v3.GetServicesResponse
             * @instance
             */
            GetServicesResponse.prototype.services = $util.emptyArray;

            /**
             * Creates a new GetServicesResponse instance using the specified properties.
             * @function create
             * @memberof jaeger.api_v3.GetServicesResponse
             * @static
             * @param {jaeger.api_v3.IGetServicesResponse=} [properties] Properties to set
             * @returns {jaeger.api_v3.GetServicesResponse} GetServicesResponse instance
             */
            GetServicesResponse.create = function create(properties) {
                return new GetServicesResponse(properties);
            };

            /**
             * Encodes the specified GetServicesResponse message. Does not implicitly {@link jaeger.api_v3.GetServicesResponse.verify|verify} messages.
             * @function encode
             * @memberof jaeger.api_v3.GetServicesResponse
             * @static
             * @param {jaeger.api_v3.IGetServicesResponse} message GetServicesResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetServicesResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.services != null && message.services.length)
                    for (var i = 0; i < message.services.length; ++i)
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.services[i]);
                return writer;
            };

            /**
             * Encodes the specified GetServicesResponse message, length delimited. Does not implicitly {@link jaeger.api_v3.GetServicesResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof jaeger.api_v3.GetServicesResponse
             * @static
             * @param {jaeger.api_v3.IGetServicesResponse} message GetServicesResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetServicesResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a GetServicesResponse message from the specified reader or buffer.
             * @function decode
             * @memberof jaeger.api_v3.GetServicesResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {jaeger.api_v3.GetServicesResponse} GetServicesResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetServicesResponse.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.jaeger.api_v3.GetServicesResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            if (!(message.services && message.services.length))
                                message.services = [];
                            message.services.push(reader.string());
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a GetServicesResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof jaeger.api_v3.GetServicesResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {jaeger.api_v3.GetServicesResponse} GetServicesResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetServicesResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a GetServicesResponse message.
             * @function verify
             * @memberof jaeger.api_v3.GetServicesResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GetServicesResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.services != null && message.hasOwnProperty("services")) {
                    if (!Array.isArray(message.services))
                        return "services: array expected";
                    for (var i = 0; i < message.services.length; ++i)
                        if (!$util.isString(message.services[i]))
                            return "services: string[] expected";
                }
                return null;
            };

            /**
             * Creates a GetServicesResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof jaeger.api_v3.GetServicesResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {jaeger.api_v3.GetServicesResponse} GetServicesResponse
             */
            GetServicesResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.jaeger.api_v3.GetServicesResponse)
                    return object;
                var message = new $root.jaeger.api_v3.GetServicesResponse();
                if (object.services) {
                    if (!Array.isArray(object.services))
                        throw TypeError(".jaeger.api_v3.GetServicesResponse.services: array expected");
                    message.services = [];
                    for (var i = 0; i < object.services.length; ++i)
                        message.services[i] = String(object.services[i]);
                }
                return message;
            };

            /**
             * Creates a plain object from a GetServicesResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof jaeger.api_v3.GetServicesResponse
             * @static
             * @param {jaeger.api_v3.GetServicesResponse} message GetServicesResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GetServicesResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.services = [];
                if (message.services && message.services.length) {
                    object.services = [];
                    for (var j = 0; j < message.services.length; ++j)
                        object.services[j] = message.services[j];
                }
                return object;
            };

            /**
             * Converts this GetServicesResponse to JSON.
             * @function toJSON
             * @memberof jaeger.api_v3.GetServicesResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GetServicesResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for GetServicesResponse
             * @function getTypeUrl
             * @memberof jaeger.api_v3.GetServicesResponse
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            GetServicesResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/jaeger.api_v3.GetServicesResponse";
            };

            return GetServicesResponse;
        })();

        api_v3.GetOperationsRequest = (function() {

            /**
             * Properties of a GetOperationsRequest.
             * @memberof jaeger.api_v3
             * @interface IGetOperationsRequest
             * @property {string|null} [service] GetOperationsRequest service
             * @property {string|null} [spanKind] GetOperationsRequest spanKind
             */

            /**
             * Constructs a new GetOperationsRequest.
             * @memberof jaeger.api_v3
             * @classdesc Represents a GetOperationsRequest.
             * @implements IGetOperationsRequest
             * @constructor
             * @param {jaeger.api_v3.IGetOperationsRequest=} [properties] Properties to set
             */
            function GetOperationsRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * GetOperationsRequest service.
             * @member {string|null|undefined} service
             * @memberof jaeger.api_v3.GetOperationsRequest
             * @instance
             */
            GetOperationsRequest.prototype.service = null;

            /**
             * GetOperationsRequest spanKind.
             * @member {string|null|undefined} spanKind
             * @memberof jaeger.api_v3.GetOperationsRequest
             * @instance
             */
            GetOperationsRequest.prototype.spanKind = null;

            /**
             * Creates a new GetOperationsRequest instance using the specified properties.
             * @function create
             * @memberof jaeger.api_v3.GetOperationsRequest
             * @static
             * @param {jaeger.api_v3.IGetOperationsRequest=} [properties] Properties to set
             * @returns {jaeger.api_v3.GetOperationsRequest} GetOperationsRequest instance
             */
            GetOperationsRequest.create = function create(properties) {
                return new GetOperationsRequest(properties);
            };

            /**
             * Encodes the specified GetOperationsRequest message. Does not implicitly {@link jaeger.api_v3.GetOperationsRequest.verify|verify} messages.
             * @function encode
             * @memberof jaeger.api_v3.GetOperationsRequest
             * @static
             * @param {jaeger.api_v3.IGetOperationsRequest} message GetOperationsRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetOperationsRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.service != null && Object.hasOwnProperty.call(message, "service"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.service);
                if (message.spanKind != null && Object.hasOwnProperty.call(message, "spanKind"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.spanKind);
                return writer;
            };

            /**
             * Encodes the specified GetOperationsRequest message, length delimited. Does not implicitly {@link jaeger.api_v3.GetOperationsRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof jaeger.api_v3.GetOperationsRequest
             * @static
             * @param {jaeger.api_v3.IGetOperationsRequest} message GetOperationsRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetOperationsRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a GetOperationsRequest message from the specified reader or buffer.
             * @function decode
             * @memberof jaeger.api_v3.GetOperationsRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {jaeger.api_v3.GetOperationsRequest} GetOperationsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetOperationsRequest.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.jaeger.api_v3.GetOperationsRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.service = reader.string();
                            break;
                        }
                    case 2: {
                            message.spanKind = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a GetOperationsRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof jaeger.api_v3.GetOperationsRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {jaeger.api_v3.GetOperationsRequest} GetOperationsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetOperationsRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a GetOperationsRequest message.
             * @function verify
             * @memberof jaeger.api_v3.GetOperationsRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GetOperationsRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.service != null && message.hasOwnProperty("service"))
                    if (!$util.isString(message.service))
                        return "service: string expected";
                if (message.spanKind != null && message.hasOwnProperty("spanKind"))
                    if (!$util.isString(message.spanKind))
                        return "spanKind: string expected";
                return null;
            };

            /**
             * Creates a GetOperationsRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof jaeger.api_v3.GetOperationsRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {jaeger.api_v3.GetOperationsRequest} GetOperationsRequest
             */
            GetOperationsRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.jaeger.api_v3.GetOperationsRequest)
                    return object;
                var message = new $root.jaeger.api_v3.GetOperationsRequest();
                if (object.service != null)
                    message.service = String(object.service);
                if (object.spanKind != null)
                    message.spanKind = String(object.spanKind);
                return message;
            };

            /**
             * Creates a plain object from a GetOperationsRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof jaeger.api_v3.GetOperationsRequest
             * @static
             * @param {jaeger.api_v3.GetOperationsRequest} message GetOperationsRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GetOperationsRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.service = "";
                    object.spanKind = "";
                }
                if (message.service != null && message.hasOwnProperty("service"))
                    object.service = message.service;
                if (message.spanKind != null && message.hasOwnProperty("spanKind"))
                    object.spanKind = message.spanKind;
                return object;
            };

            /**
             * Converts this GetOperationsRequest to JSON.
             * @function toJSON
             * @memberof jaeger.api_v3.GetOperationsRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GetOperationsRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for GetOperationsRequest
             * @function getTypeUrl
             * @memberof jaeger.api_v3.GetOperationsRequest
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            GetOperationsRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/jaeger.api_v3.GetOperationsRequest";
            };

            return GetOperationsRequest;
        })();

        api_v3.Operation = (function() {

            /**
             * Properties of an Operation.
             * @memberof jaeger.api_v3
             * @interface IOperation
             * @property {string|null} [name] Operation name
             * @property {string|null} [spanKind] Operation spanKind
             */

            /**
             * Constructs a new Operation.
             * @memberof jaeger.api_v3
             * @classdesc Represents an Operation.
             * @implements IOperation
             * @constructor
             * @param {jaeger.api_v3.IOperation=} [properties] Properties to set
             */
            function Operation(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Operation name.
             * @member {string|null|undefined} name
             * @memberof jaeger.api_v3.Operation
             * @instance
             */
            Operation.prototype.name = null;

            /**
             * Operation spanKind.
             * @member {string|null|undefined} spanKind
             * @memberof jaeger.api_v3.Operation
             * @instance
             */
            Operation.prototype.spanKind = null;

            /**
             * Creates a new Operation instance using the specified properties.
             * @function create
             * @memberof jaeger.api_v3.Operation
             * @static
             * @param {jaeger.api_v3.IOperation=} [properties] Properties to set
             * @returns {jaeger.api_v3.Operation} Operation instance
             */
            Operation.create = function create(properties) {
                return new Operation(properties);
            };

            /**
             * Encodes the specified Operation message. Does not implicitly {@link jaeger.api_v3.Operation.verify|verify} messages.
             * @function encode
             * @memberof jaeger.api_v3.Operation
             * @static
             * @param {jaeger.api_v3.IOperation} message Operation message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Operation.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.spanKind != null && Object.hasOwnProperty.call(message, "spanKind"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.spanKind);
                return writer;
            };

            /**
             * Encodes the specified Operation message, length delimited. Does not implicitly {@link jaeger.api_v3.Operation.verify|verify} messages.
             * @function encodeDelimited
             * @memberof jaeger.api_v3.Operation
             * @static
             * @param {jaeger.api_v3.IOperation} message Operation message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Operation.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Operation message from the specified reader or buffer.
             * @function decode
             * @memberof jaeger.api_v3.Operation
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {jaeger.api_v3.Operation} Operation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Operation.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.jaeger.api_v3.Operation();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.name = reader.string();
                            break;
                        }
                    case 2: {
                            message.spanKind = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an Operation message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof jaeger.api_v3.Operation
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {jaeger.api_v3.Operation} Operation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Operation.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Operation message.
             * @function verify
             * @memberof jaeger.api_v3.Operation
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Operation.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.spanKind != null && message.hasOwnProperty("spanKind"))
                    if (!$util.isString(message.spanKind))
                        return "spanKind: string expected";
                return null;
            };

            /**
             * Creates an Operation message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof jaeger.api_v3.Operation
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {jaeger.api_v3.Operation} Operation
             */
            Operation.fromObject = function fromObject(object) {
                if (object instanceof $root.jaeger.api_v3.Operation)
                    return object;
                var message = new $root.jaeger.api_v3.Operation();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.spanKind != null)
                    message.spanKind = String(object.spanKind);
                return message;
            };

            /**
             * Creates a plain object from an Operation message. Also converts values to other types if specified.
             * @function toObject
             * @memberof jaeger.api_v3.Operation
             * @static
             * @param {jaeger.api_v3.Operation} message Operation
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Operation.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.name = "";
                    object.spanKind = "";
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.spanKind != null && message.hasOwnProperty("spanKind"))
                    object.spanKind = message.spanKind;
                return object;
            };

            /**
             * Converts this Operation to JSON.
             * @function toJSON
             * @memberof jaeger.api_v3.Operation
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Operation.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Operation
             * @function getTypeUrl
             * @memberof jaeger.api_v3.Operation
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Operation.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/jaeger.api_v3.Operation";
            };

            return Operation;
        })();

        api_v3.GetOperationsResponse = (function() {

            /**
             * Properties of a GetOperationsResponse.
             * @memberof jaeger.api_v3
             * @interface IGetOperationsResponse
             * @property {Array.<jaeger.api_v3.IOperation>|null} [operations] GetOperationsResponse operations
             */

            /**
             * Constructs a new GetOperationsResponse.
             * @memberof jaeger.api_v3
             * @classdesc Represents a GetOperationsResponse.
             * @implements IGetOperationsResponse
             * @constructor
             * @param {jaeger.api_v3.IGetOperationsResponse=} [properties] Properties to set
             */
            function GetOperationsResponse(properties) {
                this.operations = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * GetOperationsResponse operations.
             * @member {Array.<jaeger.api_v3.IOperation>} operations
             * @memberof jaeger.api_v3.GetOperationsResponse
             * @instance
             */
            GetOperationsResponse.prototype.operations = $util.emptyArray;

            /**
             * Creates a new GetOperationsResponse instance using the specified properties.
             * @function create
             * @memberof jaeger.api_v3.GetOperationsResponse
             * @static
             * @param {jaeger.api_v3.IGetOperationsResponse=} [properties] Properties to set
             * @returns {jaeger.api_v3.GetOperationsResponse} GetOperationsResponse instance
             */
            GetOperationsResponse.create = function create(properties) {
                return new GetOperationsResponse(properties);
            };

            /**
             * Encodes the specified GetOperationsResponse message. Does not implicitly {@link jaeger.api_v3.GetOperationsResponse.verify|verify} messages.
             * @function encode
             * @memberof jaeger.api_v3.GetOperationsResponse
             * @static
             * @param {jaeger.api_v3.IGetOperationsResponse} message GetOperationsResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetOperationsResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.operations != null && message.operations.length)
                    for (var i = 0; i < message.operations.length; ++i)
                        $root.jaeger.api_v3.Operation.encode(message.operations[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified GetOperationsResponse message, length delimited. Does not implicitly {@link jaeger.api_v3.GetOperationsResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof jaeger.api_v3.GetOperationsResponse
             * @static
             * @param {jaeger.api_v3.IGetOperationsResponse} message GetOperationsResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetOperationsResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a GetOperationsResponse message from the specified reader or buffer.
             * @function decode
             * @memberof jaeger.api_v3.GetOperationsResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {jaeger.api_v3.GetOperationsResponse} GetOperationsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetOperationsResponse.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.jaeger.api_v3.GetOperationsResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            if (!(message.operations && message.operations.length))
                                message.operations = [];
                            message.operations.push($root.jaeger.api_v3.Operation.decode(reader, reader.uint32()));
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a GetOperationsResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof jaeger.api_v3.GetOperationsResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {jaeger.api_v3.GetOperationsResponse} GetOperationsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetOperationsResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a GetOperationsResponse message.
             * @function verify
             * @memberof jaeger.api_v3.GetOperationsResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GetOperationsResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.operations != null && message.hasOwnProperty("operations")) {
                    if (!Array.isArray(message.operations))
                        return "operations: array expected";
                    for (var i = 0; i < message.operations.length; ++i) {
                        var error = $root.jaeger.api_v3.Operation.verify(message.operations[i]);
                        if (error)
                            return "operations." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a GetOperationsResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof jaeger.api_v3.GetOperationsResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {jaeger.api_v3.GetOperationsResponse} GetOperationsResponse
             */
            GetOperationsResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.jaeger.api_v3.GetOperationsResponse)
                    return object;
                var message = new $root.jaeger.api_v3.GetOperationsResponse();
                if (object.operations) {
                    if (!Array.isArray(object.operations))
                        throw TypeError(".jaeger.api_v3.GetOperationsResponse.operations: array expected");
                    message.operations = [];
                    for (var i = 0; i < object.operations.length; ++i) {
                        if (typeof object.operations[i] !== "object")
                            throw TypeError(".jaeger.api_v3.GetOperationsResponse.operations: object expected");
                        message.operations[i] = $root.jaeger.api_v3.Operation.fromObject(object.operations[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a GetOperationsResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof jaeger.api_v3.GetOperationsResponse
             * @static
             * @param {jaeger.api_v3.GetOperationsResponse} message GetOperationsResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GetOperationsResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.operations = [];
                if (message.operations && message.operations.length) {
                    object.operations = [];
                    for (var j = 0; j < message.operations.length; ++j)
                        object.operations[j] = $root.jaeger.api_v3.Operation.toObject(message.operations[j], options);
                }
                return object;
            };

            /**
             * Converts this GetOperationsResponse to JSON.
             * @function toJSON
             * @memberof jaeger.api_v3.GetOperationsResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GetOperationsResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for GetOperationsResponse
             * @function getTypeUrl
             * @memberof jaeger.api_v3.GetOperationsResponse
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            GetOperationsResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/jaeger.api_v3.GetOperationsResponse";
            };

            return GetOperationsResponse;
        })();

        api_v3.QueryService = (function() {

            /**
             * Constructs a new QueryService service.
             * @memberof jaeger.api_v3
             * @classdesc Represents a QueryService
             * @extends $protobuf.rpc.Service
             * @constructor
             * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
             * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
             * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
             */
            function QueryService(rpcImpl, requestDelimited, responseDelimited) {
                $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
            }

            (QueryService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = QueryService;

            /**
             * Creates new QueryService service using the specified rpc implementation.
             * @function create
             * @memberof jaeger.api_v3.QueryService
             * @static
             * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
             * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
             * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
             * @returns {QueryService} RPC service. Useful where requests and/or responses are streamed.
             */
            QueryService.create = function create(rpcImpl, requestDelimited, responseDelimited) {
                return new this(rpcImpl, requestDelimited, responseDelimited);
            };

            /**
             * Callback as used by {@link jaeger.api_v3.QueryService#getTrace}.
             * @memberof jaeger.api_v3.QueryService
             * @typedef GetTraceCallback
             * @type {function}
             * @param {Error|null} error Error, if any
             * @param {opentelemetry.proto.trace.v1.TracesData} [response] TracesData
             */

            /**
             * Calls GetTrace.
             * @function getTrace
             * @memberof jaeger.api_v3.QueryService
             * @instance
             * @param {jaeger.api_v3.IGetTraceRequest} request GetTraceRequest message or plain object
             * @param {jaeger.api_v3.QueryService.GetTraceCallback} callback Node-style callback called with the error, if any, and TracesData
             * @returns {undefined}
             * @variation 1
             */
            Object.defineProperty(QueryService.prototype.getTrace = function getTrace(request, callback) {
                return this.rpcCall(getTrace, $root.jaeger.api_v3.GetTraceRequest, $root.opentelemetry.proto.trace.v1.TracesData, request, callback);
            }, "name", { value: "GetTrace" });

            /**
             * Calls GetTrace.
             * @function getTrace
             * @memberof jaeger.api_v3.QueryService
             * @instance
             * @param {jaeger.api_v3.IGetTraceRequest} request GetTraceRequest message or plain object
             * @returns {Promise<opentelemetry.proto.trace.v1.TracesData>} Promise
             * @variation 2
             */

            /**
             * Callback as used by {@link jaeger.api_v3.QueryService#findTraces}.
             * @memberof jaeger.api_v3.QueryService
             * @typedef FindTracesCallback
             * @type {function}
             * @param {Error|null} error Error, if any
             * @param {opentelemetry.proto.trace.v1.TracesData} [response] TracesData
             */

            /**
             * Calls FindTraces.
             * @function findTraces
             * @memberof jaeger.api_v3.QueryService
             * @instance
             * @param {jaeger.api_v3.IFindTracesRequest} request FindTracesRequest message or plain object
             * @param {jaeger.api_v3.QueryService.FindTracesCallback} callback Node-style callback called with the error, if any, and TracesData
             * @returns {undefined}
             * @variation 1
             */
            Object.defineProperty(QueryService.prototype.findTraces = function findTraces(request, callback) {
                return this.rpcCall(findTraces, $root.jaeger.api_v3.FindTracesRequest, $root.opentelemetry.proto.trace.v1.TracesData, request, callback);
            }, "name", { value: "FindTraces" });

            /**
             * Calls FindTraces.
             * @function findTraces
             * @memberof jaeger.api_v3.QueryService
             * @instance
             * @param {jaeger.api_v3.IFindTracesRequest} request FindTracesRequest message or plain object
             * @returns {Promise<opentelemetry.proto.trace.v1.TracesData>} Promise
             * @variation 2
             */

            /**
             * Callback as used by {@link jaeger.api_v3.QueryService#getServices}.
             * @memberof jaeger.api_v3.QueryService
             * @typedef GetServicesCallback
             * @type {function}
             * @param {Error|null} error Error, if any
             * @param {jaeger.api_v3.GetServicesResponse} [response] GetServicesResponse
             */

            /**
             * Calls GetServices.
             * @function getServices
             * @memberof jaeger.api_v3.QueryService
             * @instance
             * @param {jaeger.api_v3.IGetServicesRequest} request GetServicesRequest message or plain object
             * @param {jaeger.api_v3.QueryService.GetServicesCallback} callback Node-style callback called with the error, if any, and GetServicesResponse
             * @returns {undefined}
             * @variation 1
             */
            Object.defineProperty(QueryService.prototype.getServices = function getServices(request, callback) {
                return this.rpcCall(getServices, $root.jaeger.api_v3.GetServicesRequest, $root.jaeger.api_v3.GetServicesResponse, request, callback);
            }, "name", { value: "GetServices" });

            /**
             * Calls GetServices.
             * @function getServices
             * @memberof jaeger.api_v3.QueryService
             * @instance
             * @param {jaeger.api_v3.IGetServicesRequest} request GetServicesRequest message or plain object
             * @returns {Promise<jaeger.api_v3.GetServicesResponse>} Promise
             * @variation 2
             */

            /**
             * Callback as used by {@link jaeger.api_v3.QueryService#getOperations}.
             * @memberof jaeger.api_v3.QueryService
             * @typedef GetOperationsCallback
             * @type {function}
             * @param {Error|null} error Error, if any
             * @param {jaeger.api_v3.GetOperationsResponse} [response] GetOperationsResponse
             */

            /**
             * Calls GetOperations.
             * @function getOperations
             * @memberof jaeger.api_v3.QueryService
             * @instance
             * @param {jaeger.api_v3.IGetOperationsRequest} request GetOperationsRequest message or plain object
             * @param {jaeger.api_v3.QueryService.GetOperationsCallback} callback Node-style callback called with the error, if any, and GetOperationsResponse
             * @returns {undefined}
             * @variation 1
             */
            Object.defineProperty(QueryService.prototype.getOperations = function getOperations(request, callback) {
                return this.rpcCall(getOperations, $root.jaeger.api_v3.GetOperationsRequest, $root.jaeger.api_v3.GetOperationsResponse, request, callback);
            }, "name", { value: "GetOperations" });

            /**
             * Calls GetOperations.
             * @function getOperations
             * @memberof jaeger.api_v3.QueryService
             * @instance
             * @param {jaeger.api_v3.IGetOperationsRequest} request GetOperationsRequest message or plain object
             * @returns {Promise<jaeger.api_v3.GetOperationsResponse>} Promise
             * @variation 2
             */

            return QueryService;
        })();

        api_v3.GRPCGatewayError = (function() {

            /**
             * Properties of a GRPCGatewayError.
             * @memberof jaeger.api_v3
             * @interface IGRPCGatewayError
             * @property {jaeger.api_v3.GRPCGatewayError.IGRPCGatewayErrorDetails|null} [error] GRPCGatewayError error
             */

            /**
             * Constructs a new GRPCGatewayError.
             * @memberof jaeger.api_v3
             * @classdesc Represents a GRPCGatewayError.
             * @implements IGRPCGatewayError
             * @constructor
             * @param {jaeger.api_v3.IGRPCGatewayError=} [properties] Properties to set
             */
            function GRPCGatewayError(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * GRPCGatewayError error.
             * @member {jaeger.api_v3.GRPCGatewayError.IGRPCGatewayErrorDetails|null|undefined} error
             * @memberof jaeger.api_v3.GRPCGatewayError
             * @instance
             */
            GRPCGatewayError.prototype.error = null;

            /**
             * Creates a new GRPCGatewayError instance using the specified properties.
             * @function create
             * @memberof jaeger.api_v3.GRPCGatewayError
             * @static
             * @param {jaeger.api_v3.IGRPCGatewayError=} [properties] Properties to set
             * @returns {jaeger.api_v3.GRPCGatewayError} GRPCGatewayError instance
             */
            GRPCGatewayError.create = function create(properties) {
                return new GRPCGatewayError(properties);
            };

            /**
             * Encodes the specified GRPCGatewayError message. Does not implicitly {@link jaeger.api_v3.GRPCGatewayError.verify|verify} messages.
             * @function encode
             * @memberof jaeger.api_v3.GRPCGatewayError
             * @static
             * @param {jaeger.api_v3.IGRPCGatewayError} message GRPCGatewayError message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GRPCGatewayError.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.error != null && Object.hasOwnProperty.call(message, "error"))
                    $root.jaeger.api_v3.GRPCGatewayError.GRPCGatewayErrorDetails.encode(message.error, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified GRPCGatewayError message, length delimited. Does not implicitly {@link jaeger.api_v3.GRPCGatewayError.verify|verify} messages.
             * @function encodeDelimited
             * @memberof jaeger.api_v3.GRPCGatewayError
             * @static
             * @param {jaeger.api_v3.IGRPCGatewayError} message GRPCGatewayError message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GRPCGatewayError.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a GRPCGatewayError message from the specified reader or buffer.
             * @function decode
             * @memberof jaeger.api_v3.GRPCGatewayError
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {jaeger.api_v3.GRPCGatewayError} GRPCGatewayError
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GRPCGatewayError.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.jaeger.api_v3.GRPCGatewayError();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.error = $root.jaeger.api_v3.GRPCGatewayError.GRPCGatewayErrorDetails.decode(reader, reader.uint32());
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a GRPCGatewayError message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof jaeger.api_v3.GRPCGatewayError
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {jaeger.api_v3.GRPCGatewayError} GRPCGatewayError
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GRPCGatewayError.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a GRPCGatewayError message.
             * @function verify
             * @memberof jaeger.api_v3.GRPCGatewayError
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GRPCGatewayError.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.error != null && message.hasOwnProperty("error")) {
                    var error = $root.jaeger.api_v3.GRPCGatewayError.GRPCGatewayErrorDetails.verify(message.error);
                    if (error)
                        return "error." + error;
                }
                return null;
            };

            /**
             * Creates a GRPCGatewayError message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof jaeger.api_v3.GRPCGatewayError
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {jaeger.api_v3.GRPCGatewayError} GRPCGatewayError
             */
            GRPCGatewayError.fromObject = function fromObject(object) {
                if (object instanceof $root.jaeger.api_v3.GRPCGatewayError)
                    return object;
                var message = new $root.jaeger.api_v3.GRPCGatewayError();
                if (object.error != null) {
                    if (typeof object.error !== "object")
                        throw TypeError(".jaeger.api_v3.GRPCGatewayError.error: object expected");
                    message.error = $root.jaeger.api_v3.GRPCGatewayError.GRPCGatewayErrorDetails.fromObject(object.error);
                }
                return message;
            };

            /**
             * Creates a plain object from a GRPCGatewayError message. Also converts values to other types if specified.
             * @function toObject
             * @memberof jaeger.api_v3.GRPCGatewayError
             * @static
             * @param {jaeger.api_v3.GRPCGatewayError} message GRPCGatewayError
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GRPCGatewayError.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.error = null;
                if (message.error != null && message.hasOwnProperty("error"))
                    object.error = $root.jaeger.api_v3.GRPCGatewayError.GRPCGatewayErrorDetails.toObject(message.error, options);
                return object;
            };

            /**
             * Converts this GRPCGatewayError to JSON.
             * @function toJSON
             * @memberof jaeger.api_v3.GRPCGatewayError
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GRPCGatewayError.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for GRPCGatewayError
             * @function getTypeUrl
             * @memberof jaeger.api_v3.GRPCGatewayError
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            GRPCGatewayError.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/jaeger.api_v3.GRPCGatewayError";
            };

            GRPCGatewayError.GRPCGatewayErrorDetails = (function() {

                /**
                 * Properties of a GRPCGatewayErrorDetails.
                 * @memberof jaeger.api_v3.GRPCGatewayError
                 * @interface IGRPCGatewayErrorDetails
                 * @property {number|null} [grpcCode] GRPCGatewayErrorDetails grpcCode
                 * @property {number|null} [httpCode] GRPCGatewayErrorDetails httpCode
                 * @property {string|null} [message] GRPCGatewayErrorDetails message
                 * @property {string|null} [httpStatus] GRPCGatewayErrorDetails httpStatus
                 */

                /**
                 * Constructs a new GRPCGatewayErrorDetails.
                 * @memberof jaeger.api_v3.GRPCGatewayError
                 * @classdesc Represents a GRPCGatewayErrorDetails.
                 * @implements IGRPCGatewayErrorDetails
                 * @constructor
                 * @param {jaeger.api_v3.GRPCGatewayError.IGRPCGatewayErrorDetails=} [properties] Properties to set
                 */
                function GRPCGatewayErrorDetails(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * GRPCGatewayErrorDetails grpcCode.
                 * @member {number|null|undefined} grpcCode
                 * @memberof jaeger.api_v3.GRPCGatewayError.GRPCGatewayErrorDetails
                 * @instance
                 */
                GRPCGatewayErrorDetails.prototype.grpcCode = null;

                /**
                 * GRPCGatewayErrorDetails httpCode.
                 * @member {number|null|undefined} httpCode
                 * @memberof jaeger.api_v3.GRPCGatewayError.GRPCGatewayErrorDetails
                 * @instance
                 */
                GRPCGatewayErrorDetails.prototype.httpCode = null;

                /**
                 * GRPCGatewayErrorDetails message.
                 * @member {string|null|undefined} message
                 * @memberof jaeger.api_v3.GRPCGatewayError.GRPCGatewayErrorDetails
                 * @instance
                 */
                GRPCGatewayErrorDetails.prototype.message = null;

                /**
                 * GRPCGatewayErrorDetails httpStatus.
                 * @member {string|null|undefined} httpStatus
                 * @memberof jaeger.api_v3.GRPCGatewayError.GRPCGatewayErrorDetails
                 * @instance
                 */
                GRPCGatewayErrorDetails.prototype.httpStatus = null;

                /**
                 * Creates a new GRPCGatewayErrorDetails instance using the specified properties.
                 * @function create
                 * @memberof jaeger.api_v3.GRPCGatewayError.GRPCGatewayErrorDetails
                 * @static
                 * @param {jaeger.api_v3.GRPCGatewayError.IGRPCGatewayErrorDetails=} [properties] Properties to set
                 * @returns {jaeger.api_v3.GRPCGatewayError.GRPCGatewayErrorDetails} GRPCGatewayErrorDetails instance
                 */
                GRPCGatewayErrorDetails.create = function create(properties) {
                    return new GRPCGatewayErrorDetails(properties);
                };

                /**
                 * Encodes the specified GRPCGatewayErrorDetails message. Does not implicitly {@link jaeger.api_v3.GRPCGatewayError.GRPCGatewayErrorDetails.verify|verify} messages.
                 * @function encode
                 * @memberof jaeger.api_v3.GRPCGatewayError.GRPCGatewayErrorDetails
                 * @static
                 * @param {jaeger.api_v3.GRPCGatewayError.IGRPCGatewayErrorDetails} message GRPCGatewayErrorDetails message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GRPCGatewayErrorDetails.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.grpcCode != null && Object.hasOwnProperty.call(message, "grpcCode"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.grpcCode);
                    if (message.httpCode != null && Object.hasOwnProperty.call(message, "httpCode"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.httpCode);
                    if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.message);
                    if (message.httpStatus != null && Object.hasOwnProperty.call(message, "httpStatus"))
                        writer.uint32(/* id 4, wireType 2 =*/34).string(message.httpStatus);
                    return writer;
                };

                /**
                 * Encodes the specified GRPCGatewayErrorDetails message, length delimited. Does not implicitly {@link jaeger.api_v3.GRPCGatewayError.GRPCGatewayErrorDetails.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof jaeger.api_v3.GRPCGatewayError.GRPCGatewayErrorDetails
                 * @static
                 * @param {jaeger.api_v3.GRPCGatewayError.IGRPCGatewayErrorDetails} message GRPCGatewayErrorDetails message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GRPCGatewayErrorDetails.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a GRPCGatewayErrorDetails message from the specified reader or buffer.
                 * @function decode
                 * @memberof jaeger.api_v3.GRPCGatewayError.GRPCGatewayErrorDetails
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {jaeger.api_v3.GRPCGatewayError.GRPCGatewayErrorDetails} GRPCGatewayErrorDetails
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GRPCGatewayErrorDetails.decode = function decode(reader, length, error) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.jaeger.api_v3.GRPCGatewayError.GRPCGatewayErrorDetails();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        case 1: {
                                message.grpcCode = reader.int32();
                                break;
                            }
                        case 2: {
                                message.httpCode = reader.int32();
                                break;
                            }
                        case 3: {
                                message.message = reader.string();
                                break;
                            }
                        case 4: {
                                message.httpStatus = reader.string();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a GRPCGatewayErrorDetails message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof jaeger.api_v3.GRPCGatewayError.GRPCGatewayErrorDetails
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {jaeger.api_v3.GRPCGatewayError.GRPCGatewayErrorDetails} GRPCGatewayErrorDetails
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GRPCGatewayErrorDetails.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a GRPCGatewayErrorDetails message.
                 * @function verify
                 * @memberof jaeger.api_v3.GRPCGatewayError.GRPCGatewayErrorDetails
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                GRPCGatewayErrorDetails.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.grpcCode != null && message.hasOwnProperty("grpcCode"))
                        if (!$util.isInteger(message.grpcCode))
                            return "grpcCode: integer expected";
                    if (message.httpCode != null && message.hasOwnProperty("httpCode"))
                        if (!$util.isInteger(message.httpCode))
                            return "httpCode: integer expected";
                    if (message.message != null && message.hasOwnProperty("message"))
                        if (!$util.isString(message.message))
                            return "message: string expected";
                    if (message.httpStatus != null && message.hasOwnProperty("httpStatus"))
                        if (!$util.isString(message.httpStatus))
                            return "httpStatus: string expected";
                    return null;
                };

                /**
                 * Creates a GRPCGatewayErrorDetails message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof jaeger.api_v3.GRPCGatewayError.GRPCGatewayErrorDetails
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {jaeger.api_v3.GRPCGatewayError.GRPCGatewayErrorDetails} GRPCGatewayErrorDetails
                 */
                GRPCGatewayErrorDetails.fromObject = function fromObject(object) {
                    if (object instanceof $root.jaeger.api_v3.GRPCGatewayError.GRPCGatewayErrorDetails)
                        return object;
                    var message = new $root.jaeger.api_v3.GRPCGatewayError.GRPCGatewayErrorDetails();
                    if (object.grpcCode != null)
                        message.grpcCode = object.grpcCode | 0;
                    if (object.httpCode != null)
                        message.httpCode = object.httpCode | 0;
                    if (object.message != null)
                        message.message = String(object.message);
                    if (object.httpStatus != null)
                        message.httpStatus = String(object.httpStatus);
                    return message;
                };

                /**
                 * Creates a plain object from a GRPCGatewayErrorDetails message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof jaeger.api_v3.GRPCGatewayError.GRPCGatewayErrorDetails
                 * @static
                 * @param {jaeger.api_v3.GRPCGatewayError.GRPCGatewayErrorDetails} message GRPCGatewayErrorDetails
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                GRPCGatewayErrorDetails.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.grpcCode = 0;
                        object.httpCode = 0;
                        object.message = "";
                        object.httpStatus = "";
                    }
                    if (message.grpcCode != null && message.hasOwnProperty("grpcCode"))
                        object.grpcCode = message.grpcCode;
                    if (message.httpCode != null && message.hasOwnProperty("httpCode"))
                        object.httpCode = message.httpCode;
                    if (message.message != null && message.hasOwnProperty("message"))
                        object.message = message.message;
                    if (message.httpStatus != null && message.hasOwnProperty("httpStatus"))
                        object.httpStatus = message.httpStatus;
                    return object;
                };

                /**
                 * Converts this GRPCGatewayErrorDetails to JSON.
                 * @function toJSON
                 * @memberof jaeger.api_v3.GRPCGatewayError.GRPCGatewayErrorDetails
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                GRPCGatewayErrorDetails.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for GRPCGatewayErrorDetails
                 * @function getTypeUrl
                 * @memberof jaeger.api_v3.GRPCGatewayError.GRPCGatewayErrorDetails
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                GRPCGatewayErrorDetails.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/jaeger.api_v3.GRPCGatewayError.GRPCGatewayErrorDetails";
                };

                return GRPCGatewayErrorDetails;
            })();

            return GRPCGatewayError;
        })();

        api_v3.GRPCGatewayWrapper = (function() {

            /**
             * Properties of a GRPCGatewayWrapper.
             * @memberof jaeger.api_v3
             * @interface IGRPCGatewayWrapper
             * @property {opentelemetry.proto.trace.v1.ITracesData|null} [result] GRPCGatewayWrapper result
             */

            /**
             * Constructs a new GRPCGatewayWrapper.
             * @memberof jaeger.api_v3
             * @classdesc Represents a GRPCGatewayWrapper.
             * @implements IGRPCGatewayWrapper
             * @constructor
             * @param {jaeger.api_v3.IGRPCGatewayWrapper=} [properties] Properties to set
             */
            function GRPCGatewayWrapper(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * GRPCGatewayWrapper result.
             * @member {opentelemetry.proto.trace.v1.ITracesData|null|undefined} result
             * @memberof jaeger.api_v3.GRPCGatewayWrapper
             * @instance
             */
            GRPCGatewayWrapper.prototype.result = null;

            /**
             * Creates a new GRPCGatewayWrapper instance using the specified properties.
             * @function create
             * @memberof jaeger.api_v3.GRPCGatewayWrapper
             * @static
             * @param {jaeger.api_v3.IGRPCGatewayWrapper=} [properties] Properties to set
             * @returns {jaeger.api_v3.GRPCGatewayWrapper} GRPCGatewayWrapper instance
             */
            GRPCGatewayWrapper.create = function create(properties) {
                return new GRPCGatewayWrapper(properties);
            };

            /**
             * Encodes the specified GRPCGatewayWrapper message. Does not implicitly {@link jaeger.api_v3.GRPCGatewayWrapper.verify|verify} messages.
             * @function encode
             * @memberof jaeger.api_v3.GRPCGatewayWrapper
             * @static
             * @param {jaeger.api_v3.IGRPCGatewayWrapper} message GRPCGatewayWrapper message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GRPCGatewayWrapper.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.result != null && Object.hasOwnProperty.call(message, "result"))
                    $root.opentelemetry.proto.trace.v1.TracesData.encode(message.result, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified GRPCGatewayWrapper message, length delimited. Does not implicitly {@link jaeger.api_v3.GRPCGatewayWrapper.verify|verify} messages.
             * @function encodeDelimited
             * @memberof jaeger.api_v3.GRPCGatewayWrapper
             * @static
             * @param {jaeger.api_v3.IGRPCGatewayWrapper} message GRPCGatewayWrapper message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GRPCGatewayWrapper.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a GRPCGatewayWrapper message from the specified reader or buffer.
             * @function decode
             * @memberof jaeger.api_v3.GRPCGatewayWrapper
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {jaeger.api_v3.GRPCGatewayWrapper} GRPCGatewayWrapper
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GRPCGatewayWrapper.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.jaeger.api_v3.GRPCGatewayWrapper();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.result = $root.opentelemetry.proto.trace.v1.TracesData.decode(reader, reader.uint32());
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a GRPCGatewayWrapper message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof jaeger.api_v3.GRPCGatewayWrapper
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {jaeger.api_v3.GRPCGatewayWrapper} GRPCGatewayWrapper
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GRPCGatewayWrapper.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a GRPCGatewayWrapper message.
             * @function verify
             * @memberof jaeger.api_v3.GRPCGatewayWrapper
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GRPCGatewayWrapper.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.result != null && message.hasOwnProperty("result")) {
                    var error = $root.opentelemetry.proto.trace.v1.TracesData.verify(message.result);
                    if (error)
                        return "result." + error;
                }
                return null;
            };

            /**
             * Creates a GRPCGatewayWrapper message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof jaeger.api_v3.GRPCGatewayWrapper
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {jaeger.api_v3.GRPCGatewayWrapper} GRPCGatewayWrapper
             */
            GRPCGatewayWrapper.fromObject = function fromObject(object) {
                if (object instanceof $root.jaeger.api_v3.GRPCGatewayWrapper)
                    return object;
                var message = new $root.jaeger.api_v3.GRPCGatewayWrapper();
                if (object.result != null) {
                    if (typeof object.result !== "object")
                        throw TypeError(".jaeger.api_v3.GRPCGatewayWrapper.result: object expected");
                    message.result = $root.opentelemetry.proto.trace.v1.TracesData.fromObject(object.result);
                }
                return message;
            };

            /**
             * Creates a plain object from a GRPCGatewayWrapper message. Also converts values to other types if specified.
             * @function toObject
             * @memberof jaeger.api_v3.GRPCGatewayWrapper
             * @static
             * @param {jaeger.api_v3.GRPCGatewayWrapper} message GRPCGatewayWrapper
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GRPCGatewayWrapper.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.result = null;
                if (message.result != null && message.hasOwnProperty("result"))
                    object.result = $root.opentelemetry.proto.trace.v1.TracesData.toObject(message.result, options);
                return object;
            };

            /**
             * Converts this GRPCGatewayWrapper to JSON.
             * @function toJSON
             * @memberof jaeger.api_v3.GRPCGatewayWrapper
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GRPCGatewayWrapper.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for GRPCGatewayWrapper
             * @function getTypeUrl
             * @memberof jaeger.api_v3.GRPCGatewayWrapper
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            GRPCGatewayWrapper.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/jaeger.api_v3.GRPCGatewayWrapper";
            };

            return GRPCGatewayWrapper;
        })();

        return api_v3;
    })();

    return jaeger;
})();

$root.google = (function() {

    /**
     * Namespace google.
     * @exports google
     * @namespace
     */
    var google = {};

    google.protobuf = (function() {

        /**
         * Namespace protobuf.
         * @memberof google
         * @namespace
         */
        var protobuf = {};

        protobuf.Duration = (function() {

            /**
             * Properties of a Duration.
             * @memberof google.protobuf
             * @interface IDuration
             * @property {number|Long|null} [seconds] Duration seconds
             * @property {number|null} [nanos] Duration nanos
             */

            /**
             * Constructs a new Duration.
             * @memberof google.protobuf
             * @classdesc Represents a Duration.
             * @implements IDuration
             * @constructor
             * @param {google.protobuf.IDuration=} [properties] Properties to set
             */
            function Duration(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Duration seconds.
             * @member {number|Long|null|undefined} seconds
             * @memberof google.protobuf.Duration
             * @instance
             */
            Duration.prototype.seconds = null;

            /**
             * Duration nanos.
             * @member {number|null|undefined} nanos
             * @memberof google.protobuf.Duration
             * @instance
             */
            Duration.prototype.nanos = null;

            /**
             * Creates a new Duration instance using the specified properties.
             * @function create
             * @memberof google.protobuf.Duration
             * @static
             * @param {google.protobuf.IDuration=} [properties] Properties to set
             * @returns {google.protobuf.Duration} Duration instance
             */
            Duration.create = function create(properties) {
                return new Duration(properties);
            };

            /**
             * Encodes the specified Duration message. Does not implicitly {@link google.protobuf.Duration.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Duration
             * @static
             * @param {google.protobuf.IDuration} message Duration message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Duration.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.seconds != null && Object.hasOwnProperty.call(message, "seconds"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.seconds);
                if (message.nanos != null && Object.hasOwnProperty.call(message, "nanos"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nanos);
                return writer;
            };

            /**
             * Encodes the specified Duration message, length delimited. Does not implicitly {@link google.protobuf.Duration.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.Duration
             * @static
             * @param {google.protobuf.IDuration} message Duration message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Duration.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Duration message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Duration
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Duration} Duration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Duration.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Duration();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.seconds = reader.int64();
                            break;
                        }
                    case 2: {
                            message.nanos = reader.int32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Duration message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.Duration
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.Duration} Duration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Duration.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Duration message.
             * @function verify
             * @memberof google.protobuf.Duration
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Duration.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    if (!$util.isInteger(message.seconds) && !(message.seconds && $util.isInteger(message.seconds.low) && $util.isInteger(message.seconds.high)))
                        return "seconds: integer|Long expected";
                if (message.nanos != null && message.hasOwnProperty("nanos"))
                    if (!$util.isInteger(message.nanos))
                        return "nanos: integer expected";
                return null;
            };

            /**
             * Creates a Duration message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.Duration
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.Duration} Duration
             */
            Duration.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.Duration)
                    return object;
                var message = new $root.google.protobuf.Duration();
                if (object.seconds != null)
                    if ($util.Long)
                        (message.seconds = $util.Long.fromValue(object.seconds)).unsigned = false;
                    else if (typeof object.seconds === "string")
                        message.seconds = parseInt(object.seconds, 10);
                    else if (typeof object.seconds === "number")
                        message.seconds = object.seconds;
                    else if (typeof object.seconds === "object")
                        message.seconds = new $util.LongBits(object.seconds.low >>> 0, object.seconds.high >>> 0).toNumber();
                if (object.nanos != null)
                    message.nanos = object.nanos | 0;
                return message;
            };

            /**
             * Creates a plain object from a Duration message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.Duration
             * @static
             * @param {google.protobuf.Duration} message Duration
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Duration.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.seconds = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.seconds = options.longs === String ? "0" : 0;
                    object.nanos = 0;
                }
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    if (typeof message.seconds === "number")
                        object.seconds = options.longs === String ? String(message.seconds) : message.seconds;
                    else
                        object.seconds = options.longs === String ? $util.Long.prototype.toString.call(message.seconds) : options.longs === Number ? new $util.LongBits(message.seconds.low >>> 0, message.seconds.high >>> 0).toNumber() : message.seconds;
                if (message.nanos != null && message.hasOwnProperty("nanos"))
                    object.nanos = message.nanos;
                return object;
            };

            /**
             * Converts this Duration to JSON.
             * @function toJSON
             * @memberof google.protobuf.Duration
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Duration.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Duration
             * @function getTypeUrl
             * @memberof google.protobuf.Duration
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Duration.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.Duration";
            };

            return Duration;
        })();

        protobuf.Timestamp = (function() {

            /**
             * Properties of a Timestamp.
             * @memberof google.protobuf
             * @interface ITimestamp
             * @property {number|Long|null} [seconds] Timestamp seconds
             * @property {number|null} [nanos] Timestamp nanos
             */

            /**
             * Constructs a new Timestamp.
             * @memberof google.protobuf
             * @classdesc Represents a Timestamp.
             * @implements ITimestamp
             * @constructor
             * @param {google.protobuf.ITimestamp=} [properties] Properties to set
             */
            function Timestamp(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Timestamp seconds.
             * @member {number|Long|null|undefined} seconds
             * @memberof google.protobuf.Timestamp
             * @instance
             */
            Timestamp.prototype.seconds = null;

            /**
             * Timestamp nanos.
             * @member {number|null|undefined} nanos
             * @memberof google.protobuf.Timestamp
             * @instance
             */
            Timestamp.prototype.nanos = null;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @function create
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp=} [properties] Properties to set
             * @returns {google.protobuf.Timestamp} Timestamp instance
             */
            Timestamp.create = function create(properties) {
                return new Timestamp(properties);
            };

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp} message Timestamp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Timestamp.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.seconds != null && Object.hasOwnProperty.call(message, "seconds"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.seconds);
                if (message.nanos != null && Object.hasOwnProperty.call(message, "nanos"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nanos);
                return writer;
            };

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp} message Timestamp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Timestamp.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Timestamp} Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Timestamp.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Timestamp();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.seconds = reader.int64();
                            break;
                        }
                    case 2: {
                            message.nanos = reader.int32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.Timestamp} Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Timestamp.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Timestamp message.
             * @function verify
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Timestamp.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    if (!$util.isInteger(message.seconds) && !(message.seconds && $util.isInteger(message.seconds.low) && $util.isInteger(message.seconds.high)))
                        return "seconds: integer|Long expected";
                if (message.nanos != null && message.hasOwnProperty("nanos"))
                    if (!$util.isInteger(message.nanos))
                        return "nanos: integer expected";
                return null;
            };

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.Timestamp} Timestamp
             */
            Timestamp.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.Timestamp)
                    return object;
                var message = new $root.google.protobuf.Timestamp();
                if (object.seconds != null)
                    if ($util.Long)
                        (message.seconds = $util.Long.fromValue(object.seconds)).unsigned = false;
                    else if (typeof object.seconds === "string")
                        message.seconds = parseInt(object.seconds, 10);
                    else if (typeof object.seconds === "number")
                        message.seconds = object.seconds;
                    else if (typeof object.seconds === "object")
                        message.seconds = new $util.LongBits(object.seconds.low >>> 0, object.seconds.high >>> 0).toNumber();
                if (object.nanos != null)
                    message.nanos = object.nanos | 0;
                return message;
            };

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.Timestamp} message Timestamp
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Timestamp.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.seconds = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.seconds = options.longs === String ? "0" : 0;
                    object.nanos = 0;
                }
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    if (typeof message.seconds === "number")
                        object.seconds = options.longs === String ? String(message.seconds) : message.seconds;
                    else
                        object.seconds = options.longs === String ? $util.Long.prototype.toString.call(message.seconds) : options.longs === Number ? new $util.LongBits(message.seconds.low >>> 0, message.seconds.high >>> 0).toNumber() : message.seconds;
                if (message.nanos != null && message.hasOwnProperty("nanos"))
                    object.nanos = message.nanos;
                return object;
            };

            /**
             * Converts this Timestamp to JSON.
             * @function toJSON
             * @memberof google.protobuf.Timestamp
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Timestamp.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Timestamp
             * @function getTypeUrl
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Timestamp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.Timestamp";
            };

            return Timestamp;
        })();

        return protobuf;
    })();

    return google;
})();

$root.opentelemetry = (function() {

    /**
     * Namespace opentelemetry.
     * @exports opentelemetry
     * @namespace
     */
    var opentelemetry = {};

    opentelemetry.proto = (function() {

        /**
         * Namespace proto.
         * @memberof opentelemetry
         * @namespace
         */
        var proto = {};

        proto.trace = (function() {

            /**
             * Namespace trace.
             * @memberof opentelemetry.proto
             * @namespace
             */
            var trace = {};

            trace.v1 = (function() {

                /**
                 * Namespace v1.
                 * @memberof opentelemetry.proto.trace
                 * @namespace
                 */
                var v1 = {};

                v1.TracesData = (function() {

                    /**
                     * Properties of a TracesData.
                     * @memberof opentelemetry.proto.trace.v1
                     * @interface ITracesData
                     * @property {Array.<opentelemetry.proto.trace.v1.IResourceSpans>|null} [resourceSpans] TracesData resourceSpans
                     */

                    /**
                     * Constructs a new TracesData.
                     * @memberof opentelemetry.proto.trace.v1
                     * @classdesc Represents a TracesData.
                     * @implements ITracesData
                     * @constructor
                     * @param {opentelemetry.proto.trace.v1.ITracesData=} [properties] Properties to set
                     */
                    function TracesData(properties) {
                        this.resourceSpans = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * TracesData resourceSpans.
                     * @member {Array.<opentelemetry.proto.trace.v1.IResourceSpans>} resourceSpans
                     * @memberof opentelemetry.proto.trace.v1.TracesData
                     * @instance
                     */
                    TracesData.prototype.resourceSpans = $util.emptyArray;

                    /**
                     * Creates a new TracesData instance using the specified properties.
                     * @function create
                     * @memberof opentelemetry.proto.trace.v1.TracesData
                     * @static
                     * @param {opentelemetry.proto.trace.v1.ITracesData=} [properties] Properties to set
                     * @returns {opentelemetry.proto.trace.v1.TracesData} TracesData instance
                     */
                    TracesData.create = function create(properties) {
                        return new TracesData(properties);
                    };

                    /**
                     * Encodes the specified TracesData message. Does not implicitly {@link opentelemetry.proto.trace.v1.TracesData.verify|verify} messages.
                     * @function encode
                     * @memberof opentelemetry.proto.trace.v1.TracesData
                     * @static
                     * @param {opentelemetry.proto.trace.v1.ITracesData} message TracesData message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    TracesData.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.resourceSpans != null && message.resourceSpans.length)
                            for (var i = 0; i < message.resourceSpans.length; ++i)
                                $root.opentelemetry.proto.trace.v1.ResourceSpans.encode(message.resourceSpans[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified TracesData message, length delimited. Does not implicitly {@link opentelemetry.proto.trace.v1.TracesData.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof opentelemetry.proto.trace.v1.TracesData
                     * @static
                     * @param {opentelemetry.proto.trace.v1.ITracesData} message TracesData message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    TracesData.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a TracesData message from the specified reader or buffer.
                     * @function decode
                     * @memberof opentelemetry.proto.trace.v1.TracesData
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {opentelemetry.proto.trace.v1.TracesData} TracesData
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    TracesData.decode = function decode(reader, length, error) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.opentelemetry.proto.trace.v1.TracesData();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            if (tag === error)
                                break;
                            switch (tag >>> 3) {
                            case 1: {
                                    if (!(message.resourceSpans && message.resourceSpans.length))
                                        message.resourceSpans = [];
                                    message.resourceSpans.push($root.opentelemetry.proto.trace.v1.ResourceSpans.decode(reader, reader.uint32()));
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a TracesData message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof opentelemetry.proto.trace.v1.TracesData
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {opentelemetry.proto.trace.v1.TracesData} TracesData
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    TracesData.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a TracesData message.
                     * @function verify
                     * @memberof opentelemetry.proto.trace.v1.TracesData
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    TracesData.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.resourceSpans != null && message.hasOwnProperty("resourceSpans")) {
                            if (!Array.isArray(message.resourceSpans))
                                return "resourceSpans: array expected";
                            for (var i = 0; i < message.resourceSpans.length; ++i) {
                                var error = $root.opentelemetry.proto.trace.v1.ResourceSpans.verify(message.resourceSpans[i]);
                                if (error)
                                    return "resourceSpans." + error;
                            }
                        }
                        return null;
                    };

                    /**
                     * Creates a TracesData message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof opentelemetry.proto.trace.v1.TracesData
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {opentelemetry.proto.trace.v1.TracesData} TracesData
                     */
                    TracesData.fromObject = function fromObject(object) {
                        if (object instanceof $root.opentelemetry.proto.trace.v1.TracesData)
                            return object;
                        var message = new $root.opentelemetry.proto.trace.v1.TracesData();
                        if (object.resourceSpans) {
                            if (!Array.isArray(object.resourceSpans))
                                throw TypeError(".opentelemetry.proto.trace.v1.TracesData.resourceSpans: array expected");
                            message.resourceSpans = [];
                            for (var i = 0; i < object.resourceSpans.length; ++i) {
                                if (typeof object.resourceSpans[i] !== "object")
                                    throw TypeError(".opentelemetry.proto.trace.v1.TracesData.resourceSpans: object expected");
                                message.resourceSpans[i] = $root.opentelemetry.proto.trace.v1.ResourceSpans.fromObject(object.resourceSpans[i]);
                            }
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a TracesData message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof opentelemetry.proto.trace.v1.TracesData
                     * @static
                     * @param {opentelemetry.proto.trace.v1.TracesData} message TracesData
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    TracesData.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.resourceSpans = [];
                        if (message.resourceSpans && message.resourceSpans.length) {
                            object.resourceSpans = [];
                            for (var j = 0; j < message.resourceSpans.length; ++j)
                                object.resourceSpans[j] = $root.opentelemetry.proto.trace.v1.ResourceSpans.toObject(message.resourceSpans[j], options);
                        }
                        return object;
                    };

                    /**
                     * Converts this TracesData to JSON.
                     * @function toJSON
                     * @memberof opentelemetry.proto.trace.v1.TracesData
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    TracesData.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for TracesData
                     * @function getTypeUrl
                     * @memberof opentelemetry.proto.trace.v1.TracesData
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    TracesData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/opentelemetry.proto.trace.v1.TracesData";
                    };

                    return TracesData;
                })();

                v1.ResourceSpans = (function() {

                    /**
                     * Properties of a ResourceSpans.
                     * @memberof opentelemetry.proto.trace.v1
                     * @interface IResourceSpans
                     * @property {opentelemetry.proto.resource.v1.IResource|null} [resource] ResourceSpans resource
                     * @property {Array.<opentelemetry.proto.trace.v1.IScopeSpans>|null} [scopeSpans] ResourceSpans scopeSpans
                     * @property {string|null} [schemaUrl] ResourceSpans schemaUrl
                     */

                    /**
                     * Constructs a new ResourceSpans.
                     * @memberof opentelemetry.proto.trace.v1
                     * @classdesc Represents a ResourceSpans.
                     * @implements IResourceSpans
                     * @constructor
                     * @param {opentelemetry.proto.trace.v1.IResourceSpans=} [properties] Properties to set
                     */
                    function ResourceSpans(properties) {
                        this.scopeSpans = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * ResourceSpans resource.
                     * @member {opentelemetry.proto.resource.v1.IResource|null|undefined} resource
                     * @memberof opentelemetry.proto.trace.v1.ResourceSpans
                     * @instance
                     */
                    ResourceSpans.prototype.resource = null;

                    /**
                     * ResourceSpans scopeSpans.
                     * @member {Array.<opentelemetry.proto.trace.v1.IScopeSpans>} scopeSpans
                     * @memberof opentelemetry.proto.trace.v1.ResourceSpans
                     * @instance
                     */
                    ResourceSpans.prototype.scopeSpans = $util.emptyArray;

                    /**
                     * ResourceSpans schemaUrl.
                     * @member {string|null|undefined} schemaUrl
                     * @memberof opentelemetry.proto.trace.v1.ResourceSpans
                     * @instance
                     */
                    ResourceSpans.prototype.schemaUrl = null;

                    /**
                     * Creates a new ResourceSpans instance using the specified properties.
                     * @function create
                     * @memberof opentelemetry.proto.trace.v1.ResourceSpans
                     * @static
                     * @param {opentelemetry.proto.trace.v1.IResourceSpans=} [properties] Properties to set
                     * @returns {opentelemetry.proto.trace.v1.ResourceSpans} ResourceSpans instance
                     */
                    ResourceSpans.create = function create(properties) {
                        return new ResourceSpans(properties);
                    };

                    /**
                     * Encodes the specified ResourceSpans message. Does not implicitly {@link opentelemetry.proto.trace.v1.ResourceSpans.verify|verify} messages.
                     * @function encode
                     * @memberof opentelemetry.proto.trace.v1.ResourceSpans
                     * @static
                     * @param {opentelemetry.proto.trace.v1.IResourceSpans} message ResourceSpans message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ResourceSpans.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.resource != null && Object.hasOwnProperty.call(message, "resource"))
                            $root.opentelemetry.proto.resource.v1.Resource.encode(message.resource, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        if (message.scopeSpans != null && message.scopeSpans.length)
                            for (var i = 0; i < message.scopeSpans.length; ++i)
                                $root.opentelemetry.proto.trace.v1.ScopeSpans.encode(message.scopeSpans[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                        if (message.schemaUrl != null && Object.hasOwnProperty.call(message, "schemaUrl"))
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.schemaUrl);
                        return writer;
                    };

                    /**
                     * Encodes the specified ResourceSpans message, length delimited. Does not implicitly {@link opentelemetry.proto.trace.v1.ResourceSpans.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof opentelemetry.proto.trace.v1.ResourceSpans
                     * @static
                     * @param {opentelemetry.proto.trace.v1.IResourceSpans} message ResourceSpans message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ResourceSpans.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a ResourceSpans message from the specified reader or buffer.
                     * @function decode
                     * @memberof opentelemetry.proto.trace.v1.ResourceSpans
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {opentelemetry.proto.trace.v1.ResourceSpans} ResourceSpans
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ResourceSpans.decode = function decode(reader, length, error) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.opentelemetry.proto.trace.v1.ResourceSpans();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            if (tag === error)
                                break;
                            switch (tag >>> 3) {
                            case 1: {
                                    message.resource = $root.opentelemetry.proto.resource.v1.Resource.decode(reader, reader.uint32());
                                    break;
                                }
                            case 2: {
                                    if (!(message.scopeSpans && message.scopeSpans.length))
                                        message.scopeSpans = [];
                                    message.scopeSpans.push($root.opentelemetry.proto.trace.v1.ScopeSpans.decode(reader, reader.uint32()));
                                    break;
                                }
                            case 3: {
                                    message.schemaUrl = reader.string();
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a ResourceSpans message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof opentelemetry.proto.trace.v1.ResourceSpans
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {opentelemetry.proto.trace.v1.ResourceSpans} ResourceSpans
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ResourceSpans.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a ResourceSpans message.
                     * @function verify
                     * @memberof opentelemetry.proto.trace.v1.ResourceSpans
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ResourceSpans.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.resource != null && message.hasOwnProperty("resource")) {
                            var error = $root.opentelemetry.proto.resource.v1.Resource.verify(message.resource);
                            if (error)
                                return "resource." + error;
                        }
                        if (message.scopeSpans != null && message.hasOwnProperty("scopeSpans")) {
                            if (!Array.isArray(message.scopeSpans))
                                return "scopeSpans: array expected";
                            for (var i = 0; i < message.scopeSpans.length; ++i) {
                                var error = $root.opentelemetry.proto.trace.v1.ScopeSpans.verify(message.scopeSpans[i]);
                                if (error)
                                    return "scopeSpans." + error;
                            }
                        }
                        if (message.schemaUrl != null && message.hasOwnProperty("schemaUrl"))
                            if (!$util.isString(message.schemaUrl))
                                return "schemaUrl: string expected";
                        return null;
                    };

                    /**
                     * Creates a ResourceSpans message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof opentelemetry.proto.trace.v1.ResourceSpans
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {opentelemetry.proto.trace.v1.ResourceSpans} ResourceSpans
                     */
                    ResourceSpans.fromObject = function fromObject(object) {
                        if (object instanceof $root.opentelemetry.proto.trace.v1.ResourceSpans)
                            return object;
                        var message = new $root.opentelemetry.proto.trace.v1.ResourceSpans();
                        if (object.resource != null) {
                            if (typeof object.resource !== "object")
                                throw TypeError(".opentelemetry.proto.trace.v1.ResourceSpans.resource: object expected");
                            message.resource = $root.opentelemetry.proto.resource.v1.Resource.fromObject(object.resource);
                        }
                        if (object.scopeSpans) {
                            if (!Array.isArray(object.scopeSpans))
                                throw TypeError(".opentelemetry.proto.trace.v1.ResourceSpans.scopeSpans: array expected");
                            message.scopeSpans = [];
                            for (var i = 0; i < object.scopeSpans.length; ++i) {
                                if (typeof object.scopeSpans[i] !== "object")
                                    throw TypeError(".opentelemetry.proto.trace.v1.ResourceSpans.scopeSpans: object expected");
                                message.scopeSpans[i] = $root.opentelemetry.proto.trace.v1.ScopeSpans.fromObject(object.scopeSpans[i]);
                            }
                        }
                        if (object.schemaUrl != null)
                            message.schemaUrl = String(object.schemaUrl);
                        return message;
                    };

                    /**
                     * Creates a plain object from a ResourceSpans message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof opentelemetry.proto.trace.v1.ResourceSpans
                     * @static
                     * @param {opentelemetry.proto.trace.v1.ResourceSpans} message ResourceSpans
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ResourceSpans.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.scopeSpans = [];
                        if (options.defaults) {
                            object.resource = null;
                            object.schemaUrl = "";
                        }
                        if (message.resource != null && message.hasOwnProperty("resource"))
                            object.resource = $root.opentelemetry.proto.resource.v1.Resource.toObject(message.resource, options);
                        if (message.scopeSpans && message.scopeSpans.length) {
                            object.scopeSpans = [];
                            for (var j = 0; j < message.scopeSpans.length; ++j)
                                object.scopeSpans[j] = $root.opentelemetry.proto.trace.v1.ScopeSpans.toObject(message.scopeSpans[j], options);
                        }
                        if (message.schemaUrl != null && message.hasOwnProperty("schemaUrl"))
                            object.schemaUrl = message.schemaUrl;
                        return object;
                    };

                    /**
                     * Converts this ResourceSpans to JSON.
                     * @function toJSON
                     * @memberof opentelemetry.proto.trace.v1.ResourceSpans
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ResourceSpans.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for ResourceSpans
                     * @function getTypeUrl
                     * @memberof opentelemetry.proto.trace.v1.ResourceSpans
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    ResourceSpans.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/opentelemetry.proto.trace.v1.ResourceSpans";
                    };

                    return ResourceSpans;
                })();

                v1.ScopeSpans = (function() {

                    /**
                     * Properties of a ScopeSpans.
                     * @memberof opentelemetry.proto.trace.v1
                     * @interface IScopeSpans
                     * @property {opentelemetry.proto.common.v1.IInstrumentationScope|null} [scope] ScopeSpans scope
                     * @property {Array.<opentelemetry.proto.trace.v1.ISpan>|null} [spans] ScopeSpans spans
                     * @property {string|null} [schemaUrl] ScopeSpans schemaUrl
                     */

                    /**
                     * Constructs a new ScopeSpans.
                     * @memberof opentelemetry.proto.trace.v1
                     * @classdesc Represents a ScopeSpans.
                     * @implements IScopeSpans
                     * @constructor
                     * @param {opentelemetry.proto.trace.v1.IScopeSpans=} [properties] Properties to set
                     */
                    function ScopeSpans(properties) {
                        this.spans = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * ScopeSpans scope.
                     * @member {opentelemetry.proto.common.v1.IInstrumentationScope|null|undefined} scope
                     * @memberof opentelemetry.proto.trace.v1.ScopeSpans
                     * @instance
                     */
                    ScopeSpans.prototype.scope = null;

                    /**
                     * ScopeSpans spans.
                     * @member {Array.<opentelemetry.proto.trace.v1.ISpan>} spans
                     * @memberof opentelemetry.proto.trace.v1.ScopeSpans
                     * @instance
                     */
                    ScopeSpans.prototype.spans = $util.emptyArray;

                    /**
                     * ScopeSpans schemaUrl.
                     * @member {string|null|undefined} schemaUrl
                     * @memberof opentelemetry.proto.trace.v1.ScopeSpans
                     * @instance
                     */
                    ScopeSpans.prototype.schemaUrl = null;

                    /**
                     * Creates a new ScopeSpans instance using the specified properties.
                     * @function create
                     * @memberof opentelemetry.proto.trace.v1.ScopeSpans
                     * @static
                     * @param {opentelemetry.proto.trace.v1.IScopeSpans=} [properties] Properties to set
                     * @returns {opentelemetry.proto.trace.v1.ScopeSpans} ScopeSpans instance
                     */
                    ScopeSpans.create = function create(properties) {
                        return new ScopeSpans(properties);
                    };

                    /**
                     * Encodes the specified ScopeSpans message. Does not implicitly {@link opentelemetry.proto.trace.v1.ScopeSpans.verify|verify} messages.
                     * @function encode
                     * @memberof opentelemetry.proto.trace.v1.ScopeSpans
                     * @static
                     * @param {opentelemetry.proto.trace.v1.IScopeSpans} message ScopeSpans message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ScopeSpans.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.scope != null && Object.hasOwnProperty.call(message, "scope"))
                            $root.opentelemetry.proto.common.v1.InstrumentationScope.encode(message.scope, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        if (message.spans != null && message.spans.length)
                            for (var i = 0; i < message.spans.length; ++i)
                                $root.opentelemetry.proto.trace.v1.Span.encode(message.spans[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                        if (message.schemaUrl != null && Object.hasOwnProperty.call(message, "schemaUrl"))
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.schemaUrl);
                        return writer;
                    };

                    /**
                     * Encodes the specified ScopeSpans message, length delimited. Does not implicitly {@link opentelemetry.proto.trace.v1.ScopeSpans.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof opentelemetry.proto.trace.v1.ScopeSpans
                     * @static
                     * @param {opentelemetry.proto.trace.v1.IScopeSpans} message ScopeSpans message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ScopeSpans.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a ScopeSpans message from the specified reader or buffer.
                     * @function decode
                     * @memberof opentelemetry.proto.trace.v1.ScopeSpans
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {opentelemetry.proto.trace.v1.ScopeSpans} ScopeSpans
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ScopeSpans.decode = function decode(reader, length, error) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.opentelemetry.proto.trace.v1.ScopeSpans();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            if (tag === error)
                                break;
                            switch (tag >>> 3) {
                            case 1: {
                                    message.scope = $root.opentelemetry.proto.common.v1.InstrumentationScope.decode(reader, reader.uint32());
                                    break;
                                }
                            case 2: {
                                    if (!(message.spans && message.spans.length))
                                        message.spans = [];
                                    message.spans.push($root.opentelemetry.proto.trace.v1.Span.decode(reader, reader.uint32()));
                                    break;
                                }
                            case 3: {
                                    message.schemaUrl = reader.string();
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a ScopeSpans message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof opentelemetry.proto.trace.v1.ScopeSpans
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {opentelemetry.proto.trace.v1.ScopeSpans} ScopeSpans
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ScopeSpans.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a ScopeSpans message.
                     * @function verify
                     * @memberof opentelemetry.proto.trace.v1.ScopeSpans
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ScopeSpans.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.scope != null && message.hasOwnProperty("scope")) {
                            var error = $root.opentelemetry.proto.common.v1.InstrumentationScope.verify(message.scope);
                            if (error)
                                return "scope." + error;
                        }
                        if (message.spans != null && message.hasOwnProperty("spans")) {
                            if (!Array.isArray(message.spans))
                                return "spans: array expected";
                            for (var i = 0; i < message.spans.length; ++i) {
                                var error = $root.opentelemetry.proto.trace.v1.Span.verify(message.spans[i]);
                                if (error)
                                    return "spans." + error;
                            }
                        }
                        if (message.schemaUrl != null && message.hasOwnProperty("schemaUrl"))
                            if (!$util.isString(message.schemaUrl))
                                return "schemaUrl: string expected";
                        return null;
                    };

                    /**
                     * Creates a ScopeSpans message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof opentelemetry.proto.trace.v1.ScopeSpans
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {opentelemetry.proto.trace.v1.ScopeSpans} ScopeSpans
                     */
                    ScopeSpans.fromObject = function fromObject(object) {
                        if (object instanceof $root.opentelemetry.proto.trace.v1.ScopeSpans)
                            return object;
                        var message = new $root.opentelemetry.proto.trace.v1.ScopeSpans();
                        if (object.scope != null) {
                            if (typeof object.scope !== "object")
                                throw TypeError(".opentelemetry.proto.trace.v1.ScopeSpans.scope: object expected");
                            message.scope = $root.opentelemetry.proto.common.v1.InstrumentationScope.fromObject(object.scope);
                        }
                        if (object.spans) {
                            if (!Array.isArray(object.spans))
                                throw TypeError(".opentelemetry.proto.trace.v1.ScopeSpans.spans: array expected");
                            message.spans = [];
                            for (var i = 0; i < object.spans.length; ++i) {
                                if (typeof object.spans[i] !== "object")
                                    throw TypeError(".opentelemetry.proto.trace.v1.ScopeSpans.spans: object expected");
                                message.spans[i] = $root.opentelemetry.proto.trace.v1.Span.fromObject(object.spans[i]);
                            }
                        }
                        if (object.schemaUrl != null)
                            message.schemaUrl = String(object.schemaUrl);
                        return message;
                    };

                    /**
                     * Creates a plain object from a ScopeSpans message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof opentelemetry.proto.trace.v1.ScopeSpans
                     * @static
                     * @param {opentelemetry.proto.trace.v1.ScopeSpans} message ScopeSpans
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ScopeSpans.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.spans = [];
                        if (options.defaults) {
                            object.scope = null;
                            object.schemaUrl = "";
                        }
                        if (message.scope != null && message.hasOwnProperty("scope"))
                            object.scope = $root.opentelemetry.proto.common.v1.InstrumentationScope.toObject(message.scope, options);
                        if (message.spans && message.spans.length) {
                            object.spans = [];
                            for (var j = 0; j < message.spans.length; ++j)
                                object.spans[j] = $root.opentelemetry.proto.trace.v1.Span.toObject(message.spans[j], options);
                        }
                        if (message.schemaUrl != null && message.hasOwnProperty("schemaUrl"))
                            object.schemaUrl = message.schemaUrl;
                        return object;
                    };

                    /**
                     * Converts this ScopeSpans to JSON.
                     * @function toJSON
                     * @memberof opentelemetry.proto.trace.v1.ScopeSpans
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ScopeSpans.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for ScopeSpans
                     * @function getTypeUrl
                     * @memberof opentelemetry.proto.trace.v1.ScopeSpans
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    ScopeSpans.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/opentelemetry.proto.trace.v1.ScopeSpans";
                    };

                    return ScopeSpans;
                })();

                v1.Span = (function() {

                    /**
                     * Properties of a Span.
                     * @memberof opentelemetry.proto.trace.v1
                     * @interface ISpan
                     * @property {Uint8Array|null} [traceId] Span traceId
                     * @property {Uint8Array|null} [spanId] Span spanId
                     * @property {string|null} [traceState] Span traceState
                     * @property {Uint8Array|null} [parentSpanId] Span parentSpanId
                     * @property {string|null} [name] Span name
                     * @property {opentelemetry.proto.trace.v1.Span.SpanKind|null} [kind] Span kind
                     * @property {number|Long|null} [startTimeUnixNano] Span startTimeUnixNano
                     * @property {number|Long|null} [endTimeUnixNano] Span endTimeUnixNano
                     * @property {Array.<opentelemetry.proto.common.v1.IKeyValue>|null} [attributes] Span attributes
                     * @property {number|null} [droppedAttributesCount] Span droppedAttributesCount
                     * @property {Array.<opentelemetry.proto.trace.v1.Span.IEvent>|null} [events] Span events
                     * @property {number|null} [droppedEventsCount] Span droppedEventsCount
                     * @property {Array.<opentelemetry.proto.trace.v1.Span.ILink>|null} [links] Span links
                     * @property {number|null} [droppedLinksCount] Span droppedLinksCount
                     * @property {opentelemetry.proto.trace.v1.IStatus|null} [status] Span status
                     */

                    /**
                     * Constructs a new Span.
                     * @memberof opentelemetry.proto.trace.v1
                     * @classdesc Represents a Span.
                     * @implements ISpan
                     * @constructor
                     * @param {opentelemetry.proto.trace.v1.ISpan=} [properties] Properties to set
                     */
                    function Span(properties) {
                        this.attributes = [];
                        this.events = [];
                        this.links = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Span traceId.
                     * @member {Uint8Array|null|undefined} traceId
                     * @memberof opentelemetry.proto.trace.v1.Span
                     * @instance
                     */
                    Span.prototype.traceId = null;

                    /**
                     * Span spanId.
                     * @member {Uint8Array|null|undefined} spanId
                     * @memberof opentelemetry.proto.trace.v1.Span
                     * @instance
                     */
                    Span.prototype.spanId = null;

                    /**
                     * Span traceState.
                     * @member {string|null|undefined} traceState
                     * @memberof opentelemetry.proto.trace.v1.Span
                     * @instance
                     */
                    Span.prototype.traceState = null;

                    /**
                     * Span parentSpanId.
                     * @member {Uint8Array|null|undefined} parentSpanId
                     * @memberof opentelemetry.proto.trace.v1.Span
                     * @instance
                     */
                    Span.prototype.parentSpanId = null;

                    /**
                     * Span name.
                     * @member {string|null|undefined} name
                     * @memberof opentelemetry.proto.trace.v1.Span
                     * @instance
                     */
                    Span.prototype.name = null;

                    /**
                     * Span kind.
                     * @member {opentelemetry.proto.trace.v1.Span.SpanKind|null|undefined} kind
                     * @memberof opentelemetry.proto.trace.v1.Span
                     * @instance
                     */
                    Span.prototype.kind = null;

                    /**
                     * Span startTimeUnixNano.
                     * @member {number|Long|null|undefined} startTimeUnixNano
                     * @memberof opentelemetry.proto.trace.v1.Span
                     * @instance
                     */
                    Span.prototype.startTimeUnixNano = null;

                    /**
                     * Span endTimeUnixNano.
                     * @member {number|Long|null|undefined} endTimeUnixNano
                     * @memberof opentelemetry.proto.trace.v1.Span
                     * @instance
                     */
                    Span.prototype.endTimeUnixNano = null;

                    /**
                     * Span attributes.
                     * @member {Array.<opentelemetry.proto.common.v1.IKeyValue>} attributes
                     * @memberof opentelemetry.proto.trace.v1.Span
                     * @instance
                     */
                    Span.prototype.attributes = $util.emptyArray;

                    /**
                     * Span droppedAttributesCount.
                     * @member {number|null|undefined} droppedAttributesCount
                     * @memberof opentelemetry.proto.trace.v1.Span
                     * @instance
                     */
                    Span.prototype.droppedAttributesCount = null;

                    /**
                     * Span events.
                     * @member {Array.<opentelemetry.proto.trace.v1.Span.IEvent>} events
                     * @memberof opentelemetry.proto.trace.v1.Span
                     * @instance
                     */
                    Span.prototype.events = $util.emptyArray;

                    /**
                     * Span droppedEventsCount.
                     * @member {number|null|undefined} droppedEventsCount
                     * @memberof opentelemetry.proto.trace.v1.Span
                     * @instance
                     */
                    Span.prototype.droppedEventsCount = null;

                    /**
                     * Span links.
                     * @member {Array.<opentelemetry.proto.trace.v1.Span.ILink>} links
                     * @memberof opentelemetry.proto.trace.v1.Span
                     * @instance
                     */
                    Span.prototype.links = $util.emptyArray;

                    /**
                     * Span droppedLinksCount.
                     * @member {number|null|undefined} droppedLinksCount
                     * @memberof opentelemetry.proto.trace.v1.Span
                     * @instance
                     */
                    Span.prototype.droppedLinksCount = null;

                    /**
                     * Span status.
                     * @member {opentelemetry.proto.trace.v1.IStatus|null|undefined} status
                     * @memberof opentelemetry.proto.trace.v1.Span
                     * @instance
                     */
                    Span.prototype.status = null;

                    /**
                     * Creates a new Span instance using the specified properties.
                     * @function create
                     * @memberof opentelemetry.proto.trace.v1.Span
                     * @static
                     * @param {opentelemetry.proto.trace.v1.ISpan=} [properties] Properties to set
                     * @returns {opentelemetry.proto.trace.v1.Span} Span instance
                     */
                    Span.create = function create(properties) {
                        return new Span(properties);
                    };

                    /**
                     * Encodes the specified Span message. Does not implicitly {@link opentelemetry.proto.trace.v1.Span.verify|verify} messages.
                     * @function encode
                     * @memberof opentelemetry.proto.trace.v1.Span
                     * @static
                     * @param {opentelemetry.proto.trace.v1.ISpan} message Span message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Span.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.traceId != null && Object.hasOwnProperty.call(message, "traceId"))
                            writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.traceId);
                        if (message.spanId != null && Object.hasOwnProperty.call(message, "spanId"))
                            writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.spanId);
                        if (message.traceState != null && Object.hasOwnProperty.call(message, "traceState"))
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.traceState);
                        if (message.parentSpanId != null && Object.hasOwnProperty.call(message, "parentSpanId"))
                            writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.parentSpanId);
                        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                            writer.uint32(/* id 5, wireType 2 =*/42).string(message.name);
                        if (message.kind != null && Object.hasOwnProperty.call(message, "kind"))
                            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.kind);
                        if (message.startTimeUnixNano != null && Object.hasOwnProperty.call(message, "startTimeUnixNano"))
                            writer.uint32(/* id 7, wireType 1 =*/57).fixed64(message.startTimeUnixNano);
                        if (message.endTimeUnixNano != null && Object.hasOwnProperty.call(message, "endTimeUnixNano"))
                            writer.uint32(/* id 8, wireType 1 =*/65).fixed64(message.endTimeUnixNano);
                        if (message.attributes != null && message.attributes.length)
                            for (var i = 0; i < message.attributes.length; ++i)
                                $root.opentelemetry.proto.common.v1.KeyValue.encode(message.attributes[i], writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
                        if (message.droppedAttributesCount != null && Object.hasOwnProperty.call(message, "droppedAttributesCount"))
                            writer.uint32(/* id 10, wireType 0 =*/80).uint32(message.droppedAttributesCount);
                        if (message.events != null && message.events.length)
                            for (var i = 0; i < message.events.length; ++i)
                                $root.opentelemetry.proto.trace.v1.Span.Event.encode(message.events[i], writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
                        if (message.droppedEventsCount != null && Object.hasOwnProperty.call(message, "droppedEventsCount"))
                            writer.uint32(/* id 12, wireType 0 =*/96).uint32(message.droppedEventsCount);
                        if (message.links != null && message.links.length)
                            for (var i = 0; i < message.links.length; ++i)
                                $root.opentelemetry.proto.trace.v1.Span.Link.encode(message.links[i], writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
                        if (message.droppedLinksCount != null && Object.hasOwnProperty.call(message, "droppedLinksCount"))
                            writer.uint32(/* id 14, wireType 0 =*/112).uint32(message.droppedLinksCount);
                        if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                            $root.opentelemetry.proto.trace.v1.Status.encode(message.status, writer.uint32(/* id 15, wireType 2 =*/122).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified Span message, length delimited. Does not implicitly {@link opentelemetry.proto.trace.v1.Span.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof opentelemetry.proto.trace.v1.Span
                     * @static
                     * @param {opentelemetry.proto.trace.v1.ISpan} message Span message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Span.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a Span message from the specified reader or buffer.
                     * @function decode
                     * @memberof opentelemetry.proto.trace.v1.Span
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {opentelemetry.proto.trace.v1.Span} Span
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Span.decode = function decode(reader, length, error) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.opentelemetry.proto.trace.v1.Span();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            if (tag === error)
                                break;
                            switch (tag >>> 3) {
                            case 1: {
                                    message.traceId = reader.bytes();
                                    break;
                                }
                            case 2: {
                                    message.spanId = reader.bytes();
                                    break;
                                }
                            case 3: {
                                    message.traceState = reader.string();
                                    break;
                                }
                            case 4: {
                                    message.parentSpanId = reader.bytes();
                                    break;
                                }
                            case 5: {
                                    message.name = reader.string();
                                    break;
                                }
                            case 6: {
                                    message.kind = reader.int32();
                                    break;
                                }
                            case 7: {
                                    message.startTimeUnixNano = reader.fixed64();
                                    break;
                                }
                            case 8: {
                                    message.endTimeUnixNano = reader.fixed64();
                                    break;
                                }
                            case 9: {
                                    if (!(message.attributes && message.attributes.length))
                                        message.attributes = [];
                                    message.attributes.push($root.opentelemetry.proto.common.v1.KeyValue.decode(reader, reader.uint32()));
                                    break;
                                }
                            case 10: {
                                    message.droppedAttributesCount = reader.uint32();
                                    break;
                                }
                            case 11: {
                                    if (!(message.events && message.events.length))
                                        message.events = [];
                                    message.events.push($root.opentelemetry.proto.trace.v1.Span.Event.decode(reader, reader.uint32()));
                                    break;
                                }
                            case 12: {
                                    message.droppedEventsCount = reader.uint32();
                                    break;
                                }
                            case 13: {
                                    if (!(message.links && message.links.length))
                                        message.links = [];
                                    message.links.push($root.opentelemetry.proto.trace.v1.Span.Link.decode(reader, reader.uint32()));
                                    break;
                                }
                            case 14: {
                                    message.droppedLinksCount = reader.uint32();
                                    break;
                                }
                            case 15: {
                                    message.status = $root.opentelemetry.proto.trace.v1.Status.decode(reader, reader.uint32());
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a Span message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof opentelemetry.proto.trace.v1.Span
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {opentelemetry.proto.trace.v1.Span} Span
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Span.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a Span message.
                     * @function verify
                     * @memberof opentelemetry.proto.trace.v1.Span
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Span.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.traceId != null && message.hasOwnProperty("traceId"))
                            if (!(message.traceId && typeof message.traceId.length === "number" || $util.isString(message.traceId)))
                                return "traceId: buffer expected";
                        if (message.spanId != null && message.hasOwnProperty("spanId"))
                            if (!(message.spanId && typeof message.spanId.length === "number" || $util.isString(message.spanId)))
                                return "spanId: buffer expected";
                        if (message.traceState != null && message.hasOwnProperty("traceState"))
                            if (!$util.isString(message.traceState))
                                return "traceState: string expected";
                        if (message.parentSpanId != null && message.hasOwnProperty("parentSpanId"))
                            if (!(message.parentSpanId && typeof message.parentSpanId.length === "number" || $util.isString(message.parentSpanId)))
                                return "parentSpanId: buffer expected";
                        if (message.name != null && message.hasOwnProperty("name"))
                            if (!$util.isString(message.name))
                                return "name: string expected";
                        if (message.kind != null && message.hasOwnProperty("kind"))
                            switch (message.kind) {
                            default:
                                return "kind: enum value expected";
                            case 0:
                            case 1:
                            case 2:
                            case 3:
                            case 4:
                            case 5:
                                break;
                            }
                        if (message.startTimeUnixNano != null && message.hasOwnProperty("startTimeUnixNano"))
                            if (!$util.isInteger(message.startTimeUnixNano) && !(message.startTimeUnixNano && $util.isInteger(message.startTimeUnixNano.low) && $util.isInteger(message.startTimeUnixNano.high)))
                                return "startTimeUnixNano: integer|Long expected";
                        if (message.endTimeUnixNano != null && message.hasOwnProperty("endTimeUnixNano"))
                            if (!$util.isInteger(message.endTimeUnixNano) && !(message.endTimeUnixNano && $util.isInteger(message.endTimeUnixNano.low) && $util.isInteger(message.endTimeUnixNano.high)))
                                return "endTimeUnixNano: integer|Long expected";
                        if (message.attributes != null && message.hasOwnProperty("attributes")) {
                            if (!Array.isArray(message.attributes))
                                return "attributes: array expected";
                            for (var i = 0; i < message.attributes.length; ++i) {
                                var error = $root.opentelemetry.proto.common.v1.KeyValue.verify(message.attributes[i]);
                                if (error)
                                    return "attributes." + error;
                            }
                        }
                        if (message.droppedAttributesCount != null && message.hasOwnProperty("droppedAttributesCount"))
                            if (!$util.isInteger(message.droppedAttributesCount))
                                return "droppedAttributesCount: integer expected";
                        if (message.events != null && message.hasOwnProperty("events")) {
                            if (!Array.isArray(message.events))
                                return "events: array expected";
                            for (var i = 0; i < message.events.length; ++i) {
                                var error = $root.opentelemetry.proto.trace.v1.Span.Event.verify(message.events[i]);
                                if (error)
                                    return "events." + error;
                            }
                        }
                        if (message.droppedEventsCount != null && message.hasOwnProperty("droppedEventsCount"))
                            if (!$util.isInteger(message.droppedEventsCount))
                                return "droppedEventsCount: integer expected";
                        if (message.links != null && message.hasOwnProperty("links")) {
                            if (!Array.isArray(message.links))
                                return "links: array expected";
                            for (var i = 0; i < message.links.length; ++i) {
                                var error = $root.opentelemetry.proto.trace.v1.Span.Link.verify(message.links[i]);
                                if (error)
                                    return "links." + error;
                            }
                        }
                        if (message.droppedLinksCount != null && message.hasOwnProperty("droppedLinksCount"))
                            if (!$util.isInteger(message.droppedLinksCount))
                                return "droppedLinksCount: integer expected";
                        if (message.status != null && message.hasOwnProperty("status")) {
                            var error = $root.opentelemetry.proto.trace.v1.Status.verify(message.status);
                            if (error)
                                return "status." + error;
                        }
                        return null;
                    };

                    /**
                     * Creates a Span message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof opentelemetry.proto.trace.v1.Span
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {opentelemetry.proto.trace.v1.Span} Span
                     */
                    Span.fromObject = function fromObject(object) {
                        if (object instanceof $root.opentelemetry.proto.trace.v1.Span)
                            return object;
                        var message = new $root.opentelemetry.proto.trace.v1.Span();
                        if (object.traceId != null)
                            if (typeof object.traceId === "string")
                                $util.base64.decode(object.traceId, message.traceId = $util.newBuffer($util.base64.length(object.traceId)), 0);
                            else if (object.traceId.length >= 0)
                                message.traceId = object.traceId;
                        if (object.spanId != null)
                            if (typeof object.spanId === "string")
                                $util.base64.decode(object.spanId, message.spanId = $util.newBuffer($util.base64.length(object.spanId)), 0);
                            else if (object.spanId.length >= 0)
                                message.spanId = object.spanId;
                        if (object.traceState != null)
                            message.traceState = String(object.traceState);
                        if (object.parentSpanId != null)
                            if (typeof object.parentSpanId === "string")
                                $util.base64.decode(object.parentSpanId, message.parentSpanId = $util.newBuffer($util.base64.length(object.parentSpanId)), 0);
                            else if (object.parentSpanId.length >= 0)
                                message.parentSpanId = object.parentSpanId;
                        if (object.name != null)
                            message.name = String(object.name);
                        switch (object.kind) {
                        default:
                            if (typeof object.kind === "number") {
                                message.kind = object.kind;
                                break;
                            }
                            break;
                        case "SPAN_KIND_UNSPECIFIED":
                        case 0:
                            message.kind = 0;
                            break;
                        case "SPAN_KIND_INTERNAL":
                        case 1:
                            message.kind = 1;
                            break;
                        case "SPAN_KIND_SERVER":
                        case 2:
                            message.kind = 2;
                            break;
                        case "SPAN_KIND_CLIENT":
                        case 3:
                            message.kind = 3;
                            break;
                        case "SPAN_KIND_PRODUCER":
                        case 4:
                            message.kind = 4;
                            break;
                        case "SPAN_KIND_CONSUMER":
                        case 5:
                            message.kind = 5;
                            break;
                        }
                        if (object.startTimeUnixNano != null)
                            if ($util.Long)
                                (message.startTimeUnixNano = $util.Long.fromValue(object.startTimeUnixNano)).unsigned = false;
                            else if (typeof object.startTimeUnixNano === "string")
                                message.startTimeUnixNano = parseInt(object.startTimeUnixNano, 10);
                            else if (typeof object.startTimeUnixNano === "number")
                                message.startTimeUnixNano = object.startTimeUnixNano;
                            else if (typeof object.startTimeUnixNano === "object")
                                message.startTimeUnixNano = new $util.LongBits(object.startTimeUnixNano.low >>> 0, object.startTimeUnixNano.high >>> 0).toNumber();
                        if (object.endTimeUnixNano != null)
                            if ($util.Long)
                                (message.endTimeUnixNano = $util.Long.fromValue(object.endTimeUnixNano)).unsigned = false;
                            else if (typeof object.endTimeUnixNano === "string")
                                message.endTimeUnixNano = parseInt(object.endTimeUnixNano, 10);
                            else if (typeof object.endTimeUnixNano === "number")
                                message.endTimeUnixNano = object.endTimeUnixNano;
                            else if (typeof object.endTimeUnixNano === "object")
                                message.endTimeUnixNano = new $util.LongBits(object.endTimeUnixNano.low >>> 0, object.endTimeUnixNano.high >>> 0).toNumber();
                        if (object.attributes) {
                            if (!Array.isArray(object.attributes))
                                throw TypeError(".opentelemetry.proto.trace.v1.Span.attributes: array expected");
                            message.attributes = [];
                            for (var i = 0; i < object.attributes.length; ++i) {
                                if (typeof object.attributes[i] !== "object")
                                    throw TypeError(".opentelemetry.proto.trace.v1.Span.attributes: object expected");
                                message.attributes[i] = $root.opentelemetry.proto.common.v1.KeyValue.fromObject(object.attributes[i]);
                            }
                        }
                        if (object.droppedAttributesCount != null)
                            message.droppedAttributesCount = object.droppedAttributesCount >>> 0;
                        if (object.events) {
                            if (!Array.isArray(object.events))
                                throw TypeError(".opentelemetry.proto.trace.v1.Span.events: array expected");
                            message.events = [];
                            for (var i = 0; i < object.events.length; ++i) {
                                if (typeof object.events[i] !== "object")
                                    throw TypeError(".opentelemetry.proto.trace.v1.Span.events: object expected");
                                message.events[i] = $root.opentelemetry.proto.trace.v1.Span.Event.fromObject(object.events[i]);
                            }
                        }
                        if (object.droppedEventsCount != null)
                            message.droppedEventsCount = object.droppedEventsCount >>> 0;
                        if (object.links) {
                            if (!Array.isArray(object.links))
                                throw TypeError(".opentelemetry.proto.trace.v1.Span.links: array expected");
                            message.links = [];
                            for (var i = 0; i < object.links.length; ++i) {
                                if (typeof object.links[i] !== "object")
                                    throw TypeError(".opentelemetry.proto.trace.v1.Span.links: object expected");
                                message.links[i] = $root.opentelemetry.proto.trace.v1.Span.Link.fromObject(object.links[i]);
                            }
                        }
                        if (object.droppedLinksCount != null)
                            message.droppedLinksCount = object.droppedLinksCount >>> 0;
                        if (object.status != null) {
                            if (typeof object.status !== "object")
                                throw TypeError(".opentelemetry.proto.trace.v1.Span.status: object expected");
                            message.status = $root.opentelemetry.proto.trace.v1.Status.fromObject(object.status);
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a Span message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof opentelemetry.proto.trace.v1.Span
                     * @static
                     * @param {opentelemetry.proto.trace.v1.Span} message Span
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Span.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults) {
                            object.attributes = [];
                            object.events = [];
                            object.links = [];
                        }
                        if (options.defaults) {
                            if (options.bytes === String)
                                object.traceId = "";
                            else {
                                object.traceId = [];
                                if (options.bytes !== Array)
                                    object.traceId = $util.newBuffer(object.traceId);
                            }
                            if (options.bytes === String)
                                object.spanId = "";
                            else {
                                object.spanId = [];
                                if (options.bytes !== Array)
                                    object.spanId = $util.newBuffer(object.spanId);
                            }
                            object.traceState = "";
                            if (options.bytes === String)
                                object.parentSpanId = "";
                            else {
                                object.parentSpanId = [];
                                if (options.bytes !== Array)
                                    object.parentSpanId = $util.newBuffer(object.parentSpanId);
                            }
                            object.name = "";
                            object.kind = options.enums === String ? "SPAN_KIND_UNSPECIFIED" : 0;
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.startTimeUnixNano = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.startTimeUnixNano = options.longs === String ? "0" : 0;
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.endTimeUnixNano = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.endTimeUnixNano = options.longs === String ? "0" : 0;
                            object.droppedAttributesCount = 0;
                            object.droppedEventsCount = 0;
                            object.droppedLinksCount = 0;
                            object.status = null;
                        }
                        if (message.traceId != null && message.hasOwnProperty("traceId"))
                            object.traceId = options.bytes === String ? $util.base64.encode(message.traceId, 0, message.traceId.length) : options.bytes === Array ? Array.prototype.slice.call(message.traceId) : message.traceId;
                        if (message.spanId != null && message.hasOwnProperty("spanId"))
                            object.spanId = options.bytes === String ? $util.base64.encode(message.spanId, 0, message.spanId.length) : options.bytes === Array ? Array.prototype.slice.call(message.spanId) : message.spanId;
                        if (message.traceState != null && message.hasOwnProperty("traceState"))
                            object.traceState = message.traceState;
                        if (message.parentSpanId != null && message.hasOwnProperty("parentSpanId"))
                            object.parentSpanId = options.bytes === String ? $util.base64.encode(message.parentSpanId, 0, message.parentSpanId.length) : options.bytes === Array ? Array.prototype.slice.call(message.parentSpanId) : message.parentSpanId;
                        if (message.name != null && message.hasOwnProperty("name"))
                            object.name = message.name;
                        if (message.kind != null && message.hasOwnProperty("kind"))
                            object.kind = options.enums === String ? $root.opentelemetry.proto.trace.v1.Span.SpanKind[message.kind] === undefined ? message.kind : $root.opentelemetry.proto.trace.v1.Span.SpanKind[message.kind] : message.kind;
                        if (message.startTimeUnixNano != null && message.hasOwnProperty("startTimeUnixNano"))
                            if (typeof message.startTimeUnixNano === "number")
                                object.startTimeUnixNano = options.longs === String ? String(message.startTimeUnixNano) : message.startTimeUnixNano;
                            else
                                object.startTimeUnixNano = options.longs === String ? $util.Long.prototype.toString.call(message.startTimeUnixNano) : options.longs === Number ? new $util.LongBits(message.startTimeUnixNano.low >>> 0, message.startTimeUnixNano.high >>> 0).toNumber() : message.startTimeUnixNano;
                        if (message.endTimeUnixNano != null && message.hasOwnProperty("endTimeUnixNano"))
                            if (typeof message.endTimeUnixNano === "number")
                                object.endTimeUnixNano = options.longs === String ? String(message.endTimeUnixNano) : message.endTimeUnixNano;
                            else
                                object.endTimeUnixNano = options.longs === String ? $util.Long.prototype.toString.call(message.endTimeUnixNano) : options.longs === Number ? new $util.LongBits(message.endTimeUnixNano.low >>> 0, message.endTimeUnixNano.high >>> 0).toNumber() : message.endTimeUnixNano;
                        if (message.attributes && message.attributes.length) {
                            object.attributes = [];
                            for (var j = 0; j < message.attributes.length; ++j)
                                object.attributes[j] = $root.opentelemetry.proto.common.v1.KeyValue.toObject(message.attributes[j], options);
                        }
                        if (message.droppedAttributesCount != null && message.hasOwnProperty("droppedAttributesCount"))
                            object.droppedAttributesCount = message.droppedAttributesCount;
                        if (message.events && message.events.length) {
                            object.events = [];
                            for (var j = 0; j < message.events.length; ++j)
                                object.events[j] = $root.opentelemetry.proto.trace.v1.Span.Event.toObject(message.events[j], options);
                        }
                        if (message.droppedEventsCount != null && message.hasOwnProperty("droppedEventsCount"))
                            object.droppedEventsCount = message.droppedEventsCount;
                        if (message.links && message.links.length) {
                            object.links = [];
                            for (var j = 0; j < message.links.length; ++j)
                                object.links[j] = $root.opentelemetry.proto.trace.v1.Span.Link.toObject(message.links[j], options);
                        }
                        if (message.droppedLinksCount != null && message.hasOwnProperty("droppedLinksCount"))
                            object.droppedLinksCount = message.droppedLinksCount;
                        if (message.status != null && message.hasOwnProperty("status"))
                            object.status = $root.opentelemetry.proto.trace.v1.Status.toObject(message.status, options);
                        return object;
                    };

                    /**
                     * Converts this Span to JSON.
                     * @function toJSON
                     * @memberof opentelemetry.proto.trace.v1.Span
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Span.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for Span
                     * @function getTypeUrl
                     * @memberof opentelemetry.proto.trace.v1.Span
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    Span.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/opentelemetry.proto.trace.v1.Span";
                    };

                    /**
                     * SpanKind enum.
                     * @name opentelemetry.proto.trace.v1.Span.SpanKind
                     * @enum {number}
                     * @property {number} SPAN_KIND_UNSPECIFIED=0 SPAN_KIND_UNSPECIFIED value
                     * @property {number} SPAN_KIND_INTERNAL=1 SPAN_KIND_INTERNAL value
                     * @property {number} SPAN_KIND_SERVER=2 SPAN_KIND_SERVER value
                     * @property {number} SPAN_KIND_CLIENT=3 SPAN_KIND_CLIENT value
                     * @property {number} SPAN_KIND_PRODUCER=4 SPAN_KIND_PRODUCER value
                     * @property {number} SPAN_KIND_CONSUMER=5 SPAN_KIND_CONSUMER value
                     */
                    Span.SpanKind = (function() {
                        var valuesById = {}, values = Object.create(valuesById);
                        values[valuesById[0] = "SPAN_KIND_UNSPECIFIED"] = 0;
                        values[valuesById[1] = "SPAN_KIND_INTERNAL"] = 1;
                        values[valuesById[2] = "SPAN_KIND_SERVER"] = 2;
                        values[valuesById[3] = "SPAN_KIND_CLIENT"] = 3;
                        values[valuesById[4] = "SPAN_KIND_PRODUCER"] = 4;
                        values[valuesById[5] = "SPAN_KIND_CONSUMER"] = 5;
                        return values;
                    })();

                    Span.Event = (function() {

                        /**
                         * Properties of an Event.
                         * @memberof opentelemetry.proto.trace.v1.Span
                         * @interface IEvent
                         * @property {number|Long|null} [timeUnixNano] Event timeUnixNano
                         * @property {string|null} [name] Event name
                         * @property {Array.<opentelemetry.proto.common.v1.IKeyValue>|null} [attributes] Event attributes
                         * @property {number|null} [droppedAttributesCount] Event droppedAttributesCount
                         */

                        /**
                         * Constructs a new Event.
                         * @memberof opentelemetry.proto.trace.v1.Span
                         * @classdesc Represents an Event.
                         * @implements IEvent
                         * @constructor
                         * @param {opentelemetry.proto.trace.v1.Span.IEvent=} [properties] Properties to set
                         */
                        function Event(properties) {
                            this.attributes = [];
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * Event timeUnixNano.
                         * @member {number|Long|null|undefined} timeUnixNano
                         * @memberof opentelemetry.proto.trace.v1.Span.Event
                         * @instance
                         */
                        Event.prototype.timeUnixNano = null;

                        /**
                         * Event name.
                         * @member {string|null|undefined} name
                         * @memberof opentelemetry.proto.trace.v1.Span.Event
                         * @instance
                         */
                        Event.prototype.name = null;

                        /**
                         * Event attributes.
                         * @member {Array.<opentelemetry.proto.common.v1.IKeyValue>} attributes
                         * @memberof opentelemetry.proto.trace.v1.Span.Event
                         * @instance
                         */
                        Event.prototype.attributes = $util.emptyArray;

                        /**
                         * Event droppedAttributesCount.
                         * @member {number|null|undefined} droppedAttributesCount
                         * @memberof opentelemetry.proto.trace.v1.Span.Event
                         * @instance
                         */
                        Event.prototype.droppedAttributesCount = null;

                        /**
                         * Creates a new Event instance using the specified properties.
                         * @function create
                         * @memberof opentelemetry.proto.trace.v1.Span.Event
                         * @static
                         * @param {opentelemetry.proto.trace.v1.Span.IEvent=} [properties] Properties to set
                         * @returns {opentelemetry.proto.trace.v1.Span.Event} Event instance
                         */
                        Event.create = function create(properties) {
                            return new Event(properties);
                        };

                        /**
                         * Encodes the specified Event message. Does not implicitly {@link opentelemetry.proto.trace.v1.Span.Event.verify|verify} messages.
                         * @function encode
                         * @memberof opentelemetry.proto.trace.v1.Span.Event
                         * @static
                         * @param {opentelemetry.proto.trace.v1.Span.IEvent} message Event message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Event.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.timeUnixNano != null && Object.hasOwnProperty.call(message, "timeUnixNano"))
                                writer.uint32(/* id 1, wireType 1 =*/9).fixed64(message.timeUnixNano);
                            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
                            if (message.attributes != null && message.attributes.length)
                                for (var i = 0; i < message.attributes.length; ++i)
                                    $root.opentelemetry.proto.common.v1.KeyValue.encode(message.attributes[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                            if (message.droppedAttributesCount != null && Object.hasOwnProperty.call(message, "droppedAttributesCount"))
                                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.droppedAttributesCount);
                            return writer;
                        };

                        /**
                         * Encodes the specified Event message, length delimited. Does not implicitly {@link opentelemetry.proto.trace.v1.Span.Event.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof opentelemetry.proto.trace.v1.Span.Event
                         * @static
                         * @param {opentelemetry.proto.trace.v1.Span.IEvent} message Event message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Event.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes an Event message from the specified reader or buffer.
                         * @function decode
                         * @memberof opentelemetry.proto.trace.v1.Span.Event
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {opentelemetry.proto.trace.v1.Span.Event} Event
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Event.decode = function decode(reader, length, error) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.opentelemetry.proto.trace.v1.Span.Event();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                if (tag === error)
                                    break;
                                switch (tag >>> 3) {
                                case 1: {
                                        message.timeUnixNano = reader.fixed64();
                                        break;
                                    }
                                case 2: {
                                        message.name = reader.string();
                                        break;
                                    }
                                case 3: {
                                        if (!(message.attributes && message.attributes.length))
                                            message.attributes = [];
                                        message.attributes.push($root.opentelemetry.proto.common.v1.KeyValue.decode(reader, reader.uint32()));
                                        break;
                                    }
                                case 4: {
                                        message.droppedAttributesCount = reader.uint32();
                                        break;
                                    }
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes an Event message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof opentelemetry.proto.trace.v1.Span.Event
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {opentelemetry.proto.trace.v1.Span.Event} Event
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Event.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies an Event message.
                         * @function verify
                         * @memberof opentelemetry.proto.trace.v1.Span.Event
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        Event.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.timeUnixNano != null && message.hasOwnProperty("timeUnixNano"))
                                if (!$util.isInteger(message.timeUnixNano) && !(message.timeUnixNano && $util.isInteger(message.timeUnixNano.low) && $util.isInteger(message.timeUnixNano.high)))
                                    return "timeUnixNano: integer|Long expected";
                            if (message.name != null && message.hasOwnProperty("name"))
                                if (!$util.isString(message.name))
                                    return "name: string expected";
                            if (message.attributes != null && message.hasOwnProperty("attributes")) {
                                if (!Array.isArray(message.attributes))
                                    return "attributes: array expected";
                                for (var i = 0; i < message.attributes.length; ++i) {
                                    var error = $root.opentelemetry.proto.common.v1.KeyValue.verify(message.attributes[i]);
                                    if (error)
                                        return "attributes." + error;
                                }
                            }
                            if (message.droppedAttributesCount != null && message.hasOwnProperty("droppedAttributesCount"))
                                if (!$util.isInteger(message.droppedAttributesCount))
                                    return "droppedAttributesCount: integer expected";
                            return null;
                        };

                        /**
                         * Creates an Event message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof opentelemetry.proto.trace.v1.Span.Event
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {opentelemetry.proto.trace.v1.Span.Event} Event
                         */
                        Event.fromObject = function fromObject(object) {
                            if (object instanceof $root.opentelemetry.proto.trace.v1.Span.Event)
                                return object;
                            var message = new $root.opentelemetry.proto.trace.v1.Span.Event();
                            if (object.timeUnixNano != null)
                                if ($util.Long)
                                    (message.timeUnixNano = $util.Long.fromValue(object.timeUnixNano)).unsigned = false;
                                else if (typeof object.timeUnixNano === "string")
                                    message.timeUnixNano = parseInt(object.timeUnixNano, 10);
                                else if (typeof object.timeUnixNano === "number")
                                    message.timeUnixNano = object.timeUnixNano;
                                else if (typeof object.timeUnixNano === "object")
                                    message.timeUnixNano = new $util.LongBits(object.timeUnixNano.low >>> 0, object.timeUnixNano.high >>> 0).toNumber();
                            if (object.name != null)
                                message.name = String(object.name);
                            if (object.attributes) {
                                if (!Array.isArray(object.attributes))
                                    throw TypeError(".opentelemetry.proto.trace.v1.Span.Event.attributes: array expected");
                                message.attributes = [];
                                for (var i = 0; i < object.attributes.length; ++i) {
                                    if (typeof object.attributes[i] !== "object")
                                        throw TypeError(".opentelemetry.proto.trace.v1.Span.Event.attributes: object expected");
                                    message.attributes[i] = $root.opentelemetry.proto.common.v1.KeyValue.fromObject(object.attributes[i]);
                                }
                            }
                            if (object.droppedAttributesCount != null)
                                message.droppedAttributesCount = object.droppedAttributesCount >>> 0;
                            return message;
                        };

                        /**
                         * Creates a plain object from an Event message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof opentelemetry.proto.trace.v1.Span.Event
                         * @static
                         * @param {opentelemetry.proto.trace.v1.Span.Event} message Event
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        Event.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.arrays || options.defaults)
                                object.attributes = [];
                            if (options.defaults) {
                                if ($util.Long) {
                                    var long = new $util.Long(0, 0, false);
                                    object.timeUnixNano = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                                } else
                                    object.timeUnixNano = options.longs === String ? "0" : 0;
                                object.name = "";
                                object.droppedAttributesCount = 0;
                            }
                            if (message.timeUnixNano != null && message.hasOwnProperty("timeUnixNano"))
                                if (typeof message.timeUnixNano === "number")
                                    object.timeUnixNano = options.longs === String ? String(message.timeUnixNano) : message.timeUnixNano;
                                else
                                    object.timeUnixNano = options.longs === String ? $util.Long.prototype.toString.call(message.timeUnixNano) : options.longs === Number ? new $util.LongBits(message.timeUnixNano.low >>> 0, message.timeUnixNano.high >>> 0).toNumber() : message.timeUnixNano;
                            if (message.name != null && message.hasOwnProperty("name"))
                                object.name = message.name;
                            if (message.attributes && message.attributes.length) {
                                object.attributes = [];
                                for (var j = 0; j < message.attributes.length; ++j)
                                    object.attributes[j] = $root.opentelemetry.proto.common.v1.KeyValue.toObject(message.attributes[j], options);
                            }
                            if (message.droppedAttributesCount != null && message.hasOwnProperty("droppedAttributesCount"))
                                object.droppedAttributesCount = message.droppedAttributesCount;
                            return object;
                        };

                        /**
                         * Converts this Event to JSON.
                         * @function toJSON
                         * @memberof opentelemetry.proto.trace.v1.Span.Event
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        Event.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        /**
                         * Gets the default type url for Event
                         * @function getTypeUrl
                         * @memberof opentelemetry.proto.trace.v1.Span.Event
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        Event.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/opentelemetry.proto.trace.v1.Span.Event";
                        };

                        return Event;
                    })();

                    Span.Link = (function() {

                        /**
                         * Properties of a Link.
                         * @memberof opentelemetry.proto.trace.v1.Span
                         * @interface ILink
                         * @property {Uint8Array|null} [traceId] Link traceId
                         * @property {Uint8Array|null} [spanId] Link spanId
                         * @property {string|null} [traceState] Link traceState
                         * @property {Array.<opentelemetry.proto.common.v1.IKeyValue>|null} [attributes] Link attributes
                         * @property {number|null} [droppedAttributesCount] Link droppedAttributesCount
                         */

                        /**
                         * Constructs a new Link.
                         * @memberof opentelemetry.proto.trace.v1.Span
                         * @classdesc Represents a Link.
                         * @implements ILink
                         * @constructor
                         * @param {opentelemetry.proto.trace.v1.Span.ILink=} [properties] Properties to set
                         */
                        function Link(properties) {
                            this.attributes = [];
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * Link traceId.
                         * @member {Uint8Array|null|undefined} traceId
                         * @memberof opentelemetry.proto.trace.v1.Span.Link
                         * @instance
                         */
                        Link.prototype.traceId = null;

                        /**
                         * Link spanId.
                         * @member {Uint8Array|null|undefined} spanId
                         * @memberof opentelemetry.proto.trace.v1.Span.Link
                         * @instance
                         */
                        Link.prototype.spanId = null;

                        /**
                         * Link traceState.
                         * @member {string|null|undefined} traceState
                         * @memberof opentelemetry.proto.trace.v1.Span.Link
                         * @instance
                         */
                        Link.prototype.traceState = null;

                        /**
                         * Link attributes.
                         * @member {Array.<opentelemetry.proto.common.v1.IKeyValue>} attributes
                         * @memberof opentelemetry.proto.trace.v1.Span.Link
                         * @instance
                         */
                        Link.prototype.attributes = $util.emptyArray;

                        /**
                         * Link droppedAttributesCount.
                         * @member {number|null|undefined} droppedAttributesCount
                         * @memberof opentelemetry.proto.trace.v1.Span.Link
                         * @instance
                         */
                        Link.prototype.droppedAttributesCount = null;

                        /**
                         * Creates a new Link instance using the specified properties.
                         * @function create
                         * @memberof opentelemetry.proto.trace.v1.Span.Link
                         * @static
                         * @param {opentelemetry.proto.trace.v1.Span.ILink=} [properties] Properties to set
                         * @returns {opentelemetry.proto.trace.v1.Span.Link} Link instance
                         */
                        Link.create = function create(properties) {
                            return new Link(properties);
                        };

                        /**
                         * Encodes the specified Link message. Does not implicitly {@link opentelemetry.proto.trace.v1.Span.Link.verify|verify} messages.
                         * @function encode
                         * @memberof opentelemetry.proto.trace.v1.Span.Link
                         * @static
                         * @param {opentelemetry.proto.trace.v1.Span.ILink} message Link message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Link.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.traceId != null && Object.hasOwnProperty.call(message, "traceId"))
                                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.traceId);
                            if (message.spanId != null && Object.hasOwnProperty.call(message, "spanId"))
                                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.spanId);
                            if (message.traceState != null && Object.hasOwnProperty.call(message, "traceState"))
                                writer.uint32(/* id 3, wireType 2 =*/26).string(message.traceState);
                            if (message.attributes != null && message.attributes.length)
                                for (var i = 0; i < message.attributes.length; ++i)
                                    $root.opentelemetry.proto.common.v1.KeyValue.encode(message.attributes[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                            if (message.droppedAttributesCount != null && Object.hasOwnProperty.call(message, "droppedAttributesCount"))
                                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.droppedAttributesCount);
                            return writer;
                        };

                        /**
                         * Encodes the specified Link message, length delimited. Does not implicitly {@link opentelemetry.proto.trace.v1.Span.Link.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof opentelemetry.proto.trace.v1.Span.Link
                         * @static
                         * @param {opentelemetry.proto.trace.v1.Span.ILink} message Link message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Link.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes a Link message from the specified reader or buffer.
                         * @function decode
                         * @memberof opentelemetry.proto.trace.v1.Span.Link
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {opentelemetry.proto.trace.v1.Span.Link} Link
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Link.decode = function decode(reader, length, error) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.opentelemetry.proto.trace.v1.Span.Link();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                if (tag === error)
                                    break;
                                switch (tag >>> 3) {
                                case 1: {
                                        message.traceId = reader.bytes();
                                        break;
                                    }
                                case 2: {
                                        message.spanId = reader.bytes();
                                        break;
                                    }
                                case 3: {
                                        message.traceState = reader.string();
                                        break;
                                    }
                                case 4: {
                                        if (!(message.attributes && message.attributes.length))
                                            message.attributes = [];
                                        message.attributes.push($root.opentelemetry.proto.common.v1.KeyValue.decode(reader, reader.uint32()));
                                        break;
                                    }
                                case 5: {
                                        message.droppedAttributesCount = reader.uint32();
                                        break;
                                    }
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes a Link message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof opentelemetry.proto.trace.v1.Span.Link
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {opentelemetry.proto.trace.v1.Span.Link} Link
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Link.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies a Link message.
                         * @function verify
                         * @memberof opentelemetry.proto.trace.v1.Span.Link
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        Link.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.traceId != null && message.hasOwnProperty("traceId"))
                                if (!(message.traceId && typeof message.traceId.length === "number" || $util.isString(message.traceId)))
                                    return "traceId: buffer expected";
                            if (message.spanId != null && message.hasOwnProperty("spanId"))
                                if (!(message.spanId && typeof message.spanId.length === "number" || $util.isString(message.spanId)))
                                    return "spanId: buffer expected";
                            if (message.traceState != null && message.hasOwnProperty("traceState"))
                                if (!$util.isString(message.traceState))
                                    return "traceState: string expected";
                            if (message.attributes != null && message.hasOwnProperty("attributes")) {
                                if (!Array.isArray(message.attributes))
                                    return "attributes: array expected";
                                for (var i = 0; i < message.attributes.length; ++i) {
                                    var error = $root.opentelemetry.proto.common.v1.KeyValue.verify(message.attributes[i]);
                                    if (error)
                                        return "attributes." + error;
                                }
                            }
                            if (message.droppedAttributesCount != null && message.hasOwnProperty("droppedAttributesCount"))
                                if (!$util.isInteger(message.droppedAttributesCount))
                                    return "droppedAttributesCount: integer expected";
                            return null;
                        };

                        /**
                         * Creates a Link message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof opentelemetry.proto.trace.v1.Span.Link
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {opentelemetry.proto.trace.v1.Span.Link} Link
                         */
                        Link.fromObject = function fromObject(object) {
                            if (object instanceof $root.opentelemetry.proto.trace.v1.Span.Link)
                                return object;
                            var message = new $root.opentelemetry.proto.trace.v1.Span.Link();
                            if (object.traceId != null)
                                if (typeof object.traceId === "string")
                                    $util.base64.decode(object.traceId, message.traceId = $util.newBuffer($util.base64.length(object.traceId)), 0);
                                else if (object.traceId.length >= 0)
                                    message.traceId = object.traceId;
                            if (object.spanId != null)
                                if (typeof object.spanId === "string")
                                    $util.base64.decode(object.spanId, message.spanId = $util.newBuffer($util.base64.length(object.spanId)), 0);
                                else if (object.spanId.length >= 0)
                                    message.spanId = object.spanId;
                            if (object.traceState != null)
                                message.traceState = String(object.traceState);
                            if (object.attributes) {
                                if (!Array.isArray(object.attributes))
                                    throw TypeError(".opentelemetry.proto.trace.v1.Span.Link.attributes: array expected");
                                message.attributes = [];
                                for (var i = 0; i < object.attributes.length; ++i) {
                                    if (typeof object.attributes[i] !== "object")
                                        throw TypeError(".opentelemetry.proto.trace.v1.Span.Link.attributes: object expected");
                                    message.attributes[i] = $root.opentelemetry.proto.common.v1.KeyValue.fromObject(object.attributes[i]);
                                }
                            }
                            if (object.droppedAttributesCount != null)
                                message.droppedAttributesCount = object.droppedAttributesCount >>> 0;
                            return message;
                        };

                        /**
                         * Creates a plain object from a Link message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof opentelemetry.proto.trace.v1.Span.Link
                         * @static
                         * @param {opentelemetry.proto.trace.v1.Span.Link} message Link
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        Link.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.arrays || options.defaults)
                                object.attributes = [];
                            if (options.defaults) {
                                if (options.bytes === String)
                                    object.traceId = "";
                                else {
                                    object.traceId = [];
                                    if (options.bytes !== Array)
                                        object.traceId = $util.newBuffer(object.traceId);
                                }
                                if (options.bytes === String)
                                    object.spanId = "";
                                else {
                                    object.spanId = [];
                                    if (options.bytes !== Array)
                                        object.spanId = $util.newBuffer(object.spanId);
                                }
                                object.traceState = "";
                                object.droppedAttributesCount = 0;
                            }
                            if (message.traceId != null && message.hasOwnProperty("traceId"))
                                object.traceId = options.bytes === String ? $util.base64.encode(message.traceId, 0, message.traceId.length) : options.bytes === Array ? Array.prototype.slice.call(message.traceId) : message.traceId;
                            if (message.spanId != null && message.hasOwnProperty("spanId"))
                                object.spanId = options.bytes === String ? $util.base64.encode(message.spanId, 0, message.spanId.length) : options.bytes === Array ? Array.prototype.slice.call(message.spanId) : message.spanId;
                            if (message.traceState != null && message.hasOwnProperty("traceState"))
                                object.traceState = message.traceState;
                            if (message.attributes && message.attributes.length) {
                                object.attributes = [];
                                for (var j = 0; j < message.attributes.length; ++j)
                                    object.attributes[j] = $root.opentelemetry.proto.common.v1.KeyValue.toObject(message.attributes[j], options);
                            }
                            if (message.droppedAttributesCount != null && message.hasOwnProperty("droppedAttributesCount"))
                                object.droppedAttributesCount = message.droppedAttributesCount;
                            return object;
                        };

                        /**
                         * Converts this Link to JSON.
                         * @function toJSON
                         * @memberof opentelemetry.proto.trace.v1.Span.Link
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        Link.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        /**
                         * Gets the default type url for Link
                         * @function getTypeUrl
                         * @memberof opentelemetry.proto.trace.v1.Span.Link
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        Link.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/opentelemetry.proto.trace.v1.Span.Link";
                        };

                        return Link;
                    })();

                    return Span;
                })();

                v1.Status = (function() {

                    /**
                     * Properties of a Status.
                     * @memberof opentelemetry.proto.trace.v1
                     * @interface IStatus
                     * @property {string|null} [message] Status message
                     * @property {opentelemetry.proto.trace.v1.Status.StatusCode|null} [code] Status code
                     */

                    /**
                     * Constructs a new Status.
                     * @memberof opentelemetry.proto.trace.v1
                     * @classdesc Represents a Status.
                     * @implements IStatus
                     * @constructor
                     * @param {opentelemetry.proto.trace.v1.IStatus=} [properties] Properties to set
                     */
                    function Status(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Status message.
                     * @member {string|null|undefined} message
                     * @memberof opentelemetry.proto.trace.v1.Status
                     * @instance
                     */
                    Status.prototype.message = null;

                    /**
                     * Status code.
                     * @member {opentelemetry.proto.trace.v1.Status.StatusCode|null|undefined} code
                     * @memberof opentelemetry.proto.trace.v1.Status
                     * @instance
                     */
                    Status.prototype.code = null;

                    /**
                     * Creates a new Status instance using the specified properties.
                     * @function create
                     * @memberof opentelemetry.proto.trace.v1.Status
                     * @static
                     * @param {opentelemetry.proto.trace.v1.IStatus=} [properties] Properties to set
                     * @returns {opentelemetry.proto.trace.v1.Status} Status instance
                     */
                    Status.create = function create(properties) {
                        return new Status(properties);
                    };

                    /**
                     * Encodes the specified Status message. Does not implicitly {@link opentelemetry.proto.trace.v1.Status.verify|verify} messages.
                     * @function encode
                     * @memberof opentelemetry.proto.trace.v1.Status
                     * @static
                     * @param {opentelemetry.proto.trace.v1.IStatus} message Status message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Status.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.message);
                        if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.code);
                        return writer;
                    };

                    /**
                     * Encodes the specified Status message, length delimited. Does not implicitly {@link opentelemetry.proto.trace.v1.Status.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof opentelemetry.proto.trace.v1.Status
                     * @static
                     * @param {opentelemetry.proto.trace.v1.IStatus} message Status message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Status.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a Status message from the specified reader or buffer.
                     * @function decode
                     * @memberof opentelemetry.proto.trace.v1.Status
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {opentelemetry.proto.trace.v1.Status} Status
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Status.decode = function decode(reader, length, error) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.opentelemetry.proto.trace.v1.Status();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            if (tag === error)
                                break;
                            switch (tag >>> 3) {
                            case 2: {
                                    message.message = reader.string();
                                    break;
                                }
                            case 3: {
                                    message.code = reader.int32();
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a Status message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof opentelemetry.proto.trace.v1.Status
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {opentelemetry.proto.trace.v1.Status} Status
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Status.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a Status message.
                     * @function verify
                     * @memberof opentelemetry.proto.trace.v1.Status
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Status.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.message != null && message.hasOwnProperty("message"))
                            if (!$util.isString(message.message))
                                return "message: string expected";
                        if (message.code != null && message.hasOwnProperty("code"))
                            switch (message.code) {
                            default:
                                return "code: enum value expected";
                            case 0:
                            case 1:
                            case 2:
                                break;
                            }
                        return null;
                    };

                    /**
                     * Creates a Status message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof opentelemetry.proto.trace.v1.Status
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {opentelemetry.proto.trace.v1.Status} Status
                     */
                    Status.fromObject = function fromObject(object) {
                        if (object instanceof $root.opentelemetry.proto.trace.v1.Status)
                            return object;
                        var message = new $root.opentelemetry.proto.trace.v1.Status();
                        if (object.message != null)
                            message.message = String(object.message);
                        switch (object.code) {
                        default:
                            if (typeof object.code === "number") {
                                message.code = object.code;
                                break;
                            }
                            break;
                        case "STATUS_CODE_UNSET":
                        case 0:
                            message.code = 0;
                            break;
                        case "STATUS_CODE_OK":
                        case 1:
                            message.code = 1;
                            break;
                        case "STATUS_CODE_ERROR":
                        case 2:
                            message.code = 2;
                            break;
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a Status message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof opentelemetry.proto.trace.v1.Status
                     * @static
                     * @param {opentelemetry.proto.trace.v1.Status} message Status
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Status.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.message = "";
                            object.code = options.enums === String ? "STATUS_CODE_UNSET" : 0;
                        }
                        if (message.message != null && message.hasOwnProperty("message"))
                            object.message = message.message;
                        if (message.code != null && message.hasOwnProperty("code"))
                            object.code = options.enums === String ? $root.opentelemetry.proto.trace.v1.Status.StatusCode[message.code] === undefined ? message.code : $root.opentelemetry.proto.trace.v1.Status.StatusCode[message.code] : message.code;
                        return object;
                    };

                    /**
                     * Converts this Status to JSON.
                     * @function toJSON
                     * @memberof opentelemetry.proto.trace.v1.Status
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Status.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for Status
                     * @function getTypeUrl
                     * @memberof opentelemetry.proto.trace.v1.Status
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    Status.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/opentelemetry.proto.trace.v1.Status";
                    };

                    /**
                     * StatusCode enum.
                     * @name opentelemetry.proto.trace.v1.Status.StatusCode
                     * @enum {number}
                     * @property {number} STATUS_CODE_UNSET=0 STATUS_CODE_UNSET value
                     * @property {number} STATUS_CODE_OK=1 STATUS_CODE_OK value
                     * @property {number} STATUS_CODE_ERROR=2 STATUS_CODE_ERROR value
                     */
                    Status.StatusCode = (function() {
                        var valuesById = {}, values = Object.create(valuesById);
                        values[valuesById[0] = "STATUS_CODE_UNSET"] = 0;
                        values[valuesById[1] = "STATUS_CODE_OK"] = 1;
                        values[valuesById[2] = "STATUS_CODE_ERROR"] = 2;
                        return values;
                    })();

                    return Status;
                })();

                return v1;
            })();

            return trace;
        })();

        proto.common = (function() {

            /**
             * Namespace common.
             * @memberof opentelemetry.proto
             * @namespace
             */
            var common = {};

            common.v1 = (function() {

                /**
                 * Namespace v1.
                 * @memberof opentelemetry.proto.common
                 * @namespace
                 */
                var v1 = {};

                v1.AnyValue = (function() {

                    /**
                     * Properties of an AnyValue.
                     * @memberof opentelemetry.proto.common.v1
                     * @interface IAnyValue
                     * @property {string|null} [stringValue] AnyValue stringValue
                     * @property {boolean|null} [boolValue] AnyValue boolValue
                     * @property {number|Long|null} [intValue] AnyValue intValue
                     * @property {number|null} [doubleValue] AnyValue doubleValue
                     * @property {opentelemetry.proto.common.v1.IArrayValue|null} [arrayValue] AnyValue arrayValue
                     * @property {opentelemetry.proto.common.v1.IKeyValueList|null} [kvlistValue] AnyValue kvlistValue
                     * @property {Uint8Array|null} [bytesValue] AnyValue bytesValue
                     */

                    /**
                     * Constructs a new AnyValue.
                     * @memberof opentelemetry.proto.common.v1
                     * @classdesc Represents an AnyValue.
                     * @implements IAnyValue
                     * @constructor
                     * @param {opentelemetry.proto.common.v1.IAnyValue=} [properties] Properties to set
                     */
                    function AnyValue(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * AnyValue stringValue.
                     * @member {string|null|undefined} stringValue
                     * @memberof opentelemetry.proto.common.v1.AnyValue
                     * @instance
                     */
                    AnyValue.prototype.stringValue = null;

                    /**
                     * AnyValue boolValue.
                     * @member {boolean|null|undefined} boolValue
                     * @memberof opentelemetry.proto.common.v1.AnyValue
                     * @instance
                     */
                    AnyValue.prototype.boolValue = null;

                    /**
                     * AnyValue intValue.
                     * @member {number|Long|null|undefined} intValue
                     * @memberof opentelemetry.proto.common.v1.AnyValue
                     * @instance
                     */
                    AnyValue.prototype.intValue = null;

                    /**
                     * AnyValue doubleValue.
                     * @member {number|null|undefined} doubleValue
                     * @memberof opentelemetry.proto.common.v1.AnyValue
                     * @instance
                     */
                    AnyValue.prototype.doubleValue = null;

                    /**
                     * AnyValue arrayValue.
                     * @member {opentelemetry.proto.common.v1.IArrayValue|null|undefined} arrayValue
                     * @memberof opentelemetry.proto.common.v1.AnyValue
                     * @instance
                     */
                    AnyValue.prototype.arrayValue = null;

                    /**
                     * AnyValue kvlistValue.
                     * @member {opentelemetry.proto.common.v1.IKeyValueList|null|undefined} kvlistValue
                     * @memberof opentelemetry.proto.common.v1.AnyValue
                     * @instance
                     */
                    AnyValue.prototype.kvlistValue = null;

                    /**
                     * AnyValue bytesValue.
                     * @member {Uint8Array|null|undefined} bytesValue
                     * @memberof opentelemetry.proto.common.v1.AnyValue
                     * @instance
                     */
                    AnyValue.prototype.bytesValue = null;

                    // OneOf field names bound to virtual getters and setters
                    var $oneOfFields;

                    /**
                     * AnyValue value.
                     * @member {"stringValue"|"boolValue"|"intValue"|"doubleValue"|"arrayValue"|"kvlistValue"|"bytesValue"|undefined} value
                     * @memberof opentelemetry.proto.common.v1.AnyValue
                     * @instance
                     */
                    Object.defineProperty(AnyValue.prototype, "value", {
                        get: $util.oneOfGetter($oneOfFields = ["stringValue", "boolValue", "intValue", "doubleValue", "arrayValue", "kvlistValue", "bytesValue"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * Creates a new AnyValue instance using the specified properties.
                     * @function create
                     * @memberof opentelemetry.proto.common.v1.AnyValue
                     * @static
                     * @param {opentelemetry.proto.common.v1.IAnyValue=} [properties] Properties to set
                     * @returns {opentelemetry.proto.common.v1.AnyValue} AnyValue instance
                     */
                    AnyValue.create = function create(properties) {
                        return new AnyValue(properties);
                    };

                    /**
                     * Encodes the specified AnyValue message. Does not implicitly {@link opentelemetry.proto.common.v1.AnyValue.verify|verify} messages.
                     * @function encode
                     * @memberof opentelemetry.proto.common.v1.AnyValue
                     * @static
                     * @param {opentelemetry.proto.common.v1.IAnyValue} message AnyValue message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    AnyValue.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.stringValue != null && Object.hasOwnProperty.call(message, "stringValue"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.stringValue);
                        if (message.boolValue != null && Object.hasOwnProperty.call(message, "boolValue"))
                            writer.uint32(/* id 2, wireType 0 =*/16).bool(message.boolValue);
                        if (message.intValue != null && Object.hasOwnProperty.call(message, "intValue"))
                            writer.uint32(/* id 3, wireType 0 =*/24).int64(message.intValue);
                        if (message.doubleValue != null && Object.hasOwnProperty.call(message, "doubleValue"))
                            writer.uint32(/* id 4, wireType 1 =*/33).double(message.doubleValue);
                        if (message.arrayValue != null && Object.hasOwnProperty.call(message, "arrayValue"))
                            $root.opentelemetry.proto.common.v1.ArrayValue.encode(message.arrayValue, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                        if (message.kvlistValue != null && Object.hasOwnProperty.call(message, "kvlistValue"))
                            $root.opentelemetry.proto.common.v1.KeyValueList.encode(message.kvlistValue, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                        if (message.bytesValue != null && Object.hasOwnProperty.call(message, "bytesValue"))
                            writer.uint32(/* id 7, wireType 2 =*/58).bytes(message.bytesValue);
                        return writer;
                    };

                    /**
                     * Encodes the specified AnyValue message, length delimited. Does not implicitly {@link opentelemetry.proto.common.v1.AnyValue.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof opentelemetry.proto.common.v1.AnyValue
                     * @static
                     * @param {opentelemetry.proto.common.v1.IAnyValue} message AnyValue message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    AnyValue.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes an AnyValue message from the specified reader or buffer.
                     * @function decode
                     * @memberof opentelemetry.proto.common.v1.AnyValue
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {opentelemetry.proto.common.v1.AnyValue} AnyValue
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    AnyValue.decode = function decode(reader, length, error) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.opentelemetry.proto.common.v1.AnyValue();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            if (tag === error)
                                break;
                            switch (tag >>> 3) {
                            case 1: {
                                    message.stringValue = reader.string();
                                    break;
                                }
                            case 2: {
                                    message.boolValue = reader.bool();
                                    break;
                                }
                            case 3: {
                                    message.intValue = reader.int64();
                                    break;
                                }
                            case 4: {
                                    message.doubleValue = reader.double();
                                    break;
                                }
                            case 5: {
                                    message.arrayValue = $root.opentelemetry.proto.common.v1.ArrayValue.decode(reader, reader.uint32());
                                    break;
                                }
                            case 6: {
                                    message.kvlistValue = $root.opentelemetry.proto.common.v1.KeyValueList.decode(reader, reader.uint32());
                                    break;
                                }
                            case 7: {
                                    message.bytesValue = reader.bytes();
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes an AnyValue message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof opentelemetry.proto.common.v1.AnyValue
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {opentelemetry.proto.common.v1.AnyValue} AnyValue
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    AnyValue.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies an AnyValue message.
                     * @function verify
                     * @memberof opentelemetry.proto.common.v1.AnyValue
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    AnyValue.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        var properties = {};
                        if (message.stringValue != null && message.hasOwnProperty("stringValue")) {
                            properties.value = 1;
                            if (!$util.isString(message.stringValue))
                                return "stringValue: string expected";
                        }
                        if (message.boolValue != null && message.hasOwnProperty("boolValue")) {
                            if (properties.value === 1)
                                return "value: multiple values";
                            properties.value = 1;
                            if (typeof message.boolValue !== "boolean")
                                return "boolValue: boolean expected";
                        }
                        if (message.intValue != null && message.hasOwnProperty("intValue")) {
                            if (properties.value === 1)
                                return "value: multiple values";
                            properties.value = 1;
                            if (!$util.isInteger(message.intValue) && !(message.intValue && $util.isInteger(message.intValue.low) && $util.isInteger(message.intValue.high)))
                                return "intValue: integer|Long expected";
                        }
                        if (message.doubleValue != null && message.hasOwnProperty("doubleValue")) {
                            if (properties.value === 1)
                                return "value: multiple values";
                            properties.value = 1;
                            if (typeof message.doubleValue !== "number")
                                return "doubleValue: number expected";
                        }
                        if (message.arrayValue != null && message.hasOwnProperty("arrayValue")) {
                            if (properties.value === 1)
                                return "value: multiple values";
                            properties.value = 1;
                            {
                                var error = $root.opentelemetry.proto.common.v1.ArrayValue.verify(message.arrayValue);
                                if (error)
                                    return "arrayValue." + error;
                            }
                        }
                        if (message.kvlistValue != null && message.hasOwnProperty("kvlistValue")) {
                            if (properties.value === 1)
                                return "value: multiple values";
                            properties.value = 1;
                            {
                                var error = $root.opentelemetry.proto.common.v1.KeyValueList.verify(message.kvlistValue);
                                if (error)
                                    return "kvlistValue." + error;
                            }
                        }
                        if (message.bytesValue != null && message.hasOwnProperty("bytesValue")) {
                            if (properties.value === 1)
                                return "value: multiple values";
                            properties.value = 1;
                            if (!(message.bytesValue && typeof message.bytesValue.length === "number" || $util.isString(message.bytesValue)))
                                return "bytesValue: buffer expected";
                        }
                        return null;
                    };

                    /**
                     * Creates an AnyValue message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof opentelemetry.proto.common.v1.AnyValue
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {opentelemetry.proto.common.v1.AnyValue} AnyValue
                     */
                    AnyValue.fromObject = function fromObject(object) {
                        if (object instanceof $root.opentelemetry.proto.common.v1.AnyValue)
                            return object;
                        var message = new $root.opentelemetry.proto.common.v1.AnyValue();
                        if (object.stringValue != null)
                            message.stringValue = String(object.stringValue);
                        if (object.boolValue != null)
                            message.boolValue = Boolean(object.boolValue);
                        if (object.intValue != null)
                            if ($util.Long)
                                (message.intValue = $util.Long.fromValue(object.intValue)).unsigned = false;
                            else if (typeof object.intValue === "string")
                                message.intValue = parseInt(object.intValue, 10);
                            else if (typeof object.intValue === "number")
                                message.intValue = object.intValue;
                            else if (typeof object.intValue === "object")
                                message.intValue = new $util.LongBits(object.intValue.low >>> 0, object.intValue.high >>> 0).toNumber();
                        if (object.doubleValue != null)
                            message.doubleValue = Number(object.doubleValue);
                        if (object.arrayValue != null) {
                            if (typeof object.arrayValue !== "object")
                                throw TypeError(".opentelemetry.proto.common.v1.AnyValue.arrayValue: object expected");
                            message.arrayValue = $root.opentelemetry.proto.common.v1.ArrayValue.fromObject(object.arrayValue);
                        }
                        if (object.kvlistValue != null) {
                            if (typeof object.kvlistValue !== "object")
                                throw TypeError(".opentelemetry.proto.common.v1.AnyValue.kvlistValue: object expected");
                            message.kvlistValue = $root.opentelemetry.proto.common.v1.KeyValueList.fromObject(object.kvlistValue);
                        }
                        if (object.bytesValue != null)
                            if (typeof object.bytesValue === "string")
                                $util.base64.decode(object.bytesValue, message.bytesValue = $util.newBuffer($util.base64.length(object.bytesValue)), 0);
                            else if (object.bytesValue.length >= 0)
                                message.bytesValue = object.bytesValue;
                        return message;
                    };

                    /**
                     * Creates a plain object from an AnyValue message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof opentelemetry.proto.common.v1.AnyValue
                     * @static
                     * @param {opentelemetry.proto.common.v1.AnyValue} message AnyValue
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    AnyValue.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (message.stringValue != null && message.hasOwnProperty("stringValue")) {
                            object.stringValue = message.stringValue;
                            if (options.oneofs)
                                object.value = "stringValue";
                        }
                        if (message.boolValue != null && message.hasOwnProperty("boolValue")) {
                            object.boolValue = message.boolValue;
                            if (options.oneofs)
                                object.value = "boolValue";
                        }
                        if (message.intValue != null && message.hasOwnProperty("intValue")) {
                            if (typeof message.intValue === "number")
                                object.intValue = options.longs === String ? String(message.intValue) : message.intValue;
                            else
                                object.intValue = options.longs === String ? $util.Long.prototype.toString.call(message.intValue) : options.longs === Number ? new $util.LongBits(message.intValue.low >>> 0, message.intValue.high >>> 0).toNumber() : message.intValue;
                            if (options.oneofs)
                                object.value = "intValue";
                        }
                        if (message.doubleValue != null && message.hasOwnProperty("doubleValue")) {
                            object.doubleValue = options.json && !isFinite(message.doubleValue) ? String(message.doubleValue) : message.doubleValue;
                            if (options.oneofs)
                                object.value = "doubleValue";
                        }
                        if (message.arrayValue != null && message.hasOwnProperty("arrayValue")) {
                            object.arrayValue = $root.opentelemetry.proto.common.v1.ArrayValue.toObject(message.arrayValue, options);
                            if (options.oneofs)
                                object.value = "arrayValue";
                        }
                        if (message.kvlistValue != null && message.hasOwnProperty("kvlistValue")) {
                            object.kvlistValue = $root.opentelemetry.proto.common.v1.KeyValueList.toObject(message.kvlistValue, options);
                            if (options.oneofs)
                                object.value = "kvlistValue";
                        }
                        if (message.bytesValue != null && message.hasOwnProperty("bytesValue")) {
                            object.bytesValue = options.bytes === String ? $util.base64.encode(message.bytesValue, 0, message.bytesValue.length) : options.bytes === Array ? Array.prototype.slice.call(message.bytesValue) : message.bytesValue;
                            if (options.oneofs)
                                object.value = "bytesValue";
                        }
                        return object;
                    };

                    /**
                     * Converts this AnyValue to JSON.
                     * @function toJSON
                     * @memberof opentelemetry.proto.common.v1.AnyValue
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    AnyValue.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for AnyValue
                     * @function getTypeUrl
                     * @memberof opentelemetry.proto.common.v1.AnyValue
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    AnyValue.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/opentelemetry.proto.common.v1.AnyValue";
                    };

                    return AnyValue;
                })();

                v1.ArrayValue = (function() {

                    /**
                     * Properties of an ArrayValue.
                     * @memberof opentelemetry.proto.common.v1
                     * @interface IArrayValue
                     * @property {Array.<opentelemetry.proto.common.v1.IAnyValue>|null} [values] ArrayValue values
                     */

                    /**
                     * Constructs a new ArrayValue.
                     * @memberof opentelemetry.proto.common.v1
                     * @classdesc Represents an ArrayValue.
                     * @implements IArrayValue
                     * @constructor
                     * @param {opentelemetry.proto.common.v1.IArrayValue=} [properties] Properties to set
                     */
                    function ArrayValue(properties) {
                        this.values = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * ArrayValue values.
                     * @member {Array.<opentelemetry.proto.common.v1.IAnyValue>} values
                     * @memberof opentelemetry.proto.common.v1.ArrayValue
                     * @instance
                     */
                    ArrayValue.prototype.values = $util.emptyArray;

                    /**
                     * Creates a new ArrayValue instance using the specified properties.
                     * @function create
                     * @memberof opentelemetry.proto.common.v1.ArrayValue
                     * @static
                     * @param {opentelemetry.proto.common.v1.IArrayValue=} [properties] Properties to set
                     * @returns {opentelemetry.proto.common.v1.ArrayValue} ArrayValue instance
                     */
                    ArrayValue.create = function create(properties) {
                        return new ArrayValue(properties);
                    };

                    /**
                     * Encodes the specified ArrayValue message. Does not implicitly {@link opentelemetry.proto.common.v1.ArrayValue.verify|verify} messages.
                     * @function encode
                     * @memberof opentelemetry.proto.common.v1.ArrayValue
                     * @static
                     * @param {opentelemetry.proto.common.v1.IArrayValue} message ArrayValue message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ArrayValue.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.values != null && message.values.length)
                            for (var i = 0; i < message.values.length; ++i)
                                $root.opentelemetry.proto.common.v1.AnyValue.encode(message.values[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified ArrayValue message, length delimited. Does not implicitly {@link opentelemetry.proto.common.v1.ArrayValue.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof opentelemetry.proto.common.v1.ArrayValue
                     * @static
                     * @param {opentelemetry.proto.common.v1.IArrayValue} message ArrayValue message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ArrayValue.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes an ArrayValue message from the specified reader or buffer.
                     * @function decode
                     * @memberof opentelemetry.proto.common.v1.ArrayValue
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {opentelemetry.proto.common.v1.ArrayValue} ArrayValue
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ArrayValue.decode = function decode(reader, length, error) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.opentelemetry.proto.common.v1.ArrayValue();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            if (tag === error)
                                break;
                            switch (tag >>> 3) {
                            case 1: {
                                    if (!(message.values && message.values.length))
                                        message.values = [];
                                    message.values.push($root.opentelemetry.proto.common.v1.AnyValue.decode(reader, reader.uint32()));
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes an ArrayValue message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof opentelemetry.proto.common.v1.ArrayValue
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {opentelemetry.proto.common.v1.ArrayValue} ArrayValue
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ArrayValue.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies an ArrayValue message.
                     * @function verify
                     * @memberof opentelemetry.proto.common.v1.ArrayValue
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ArrayValue.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.values != null && message.hasOwnProperty("values")) {
                            if (!Array.isArray(message.values))
                                return "values: array expected";
                            for (var i = 0; i < message.values.length; ++i) {
                                var error = $root.opentelemetry.proto.common.v1.AnyValue.verify(message.values[i]);
                                if (error)
                                    return "values." + error;
                            }
                        }
                        return null;
                    };

                    /**
                     * Creates an ArrayValue message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof opentelemetry.proto.common.v1.ArrayValue
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {opentelemetry.proto.common.v1.ArrayValue} ArrayValue
                     */
                    ArrayValue.fromObject = function fromObject(object) {
                        if (object instanceof $root.opentelemetry.proto.common.v1.ArrayValue)
                            return object;
                        var message = new $root.opentelemetry.proto.common.v1.ArrayValue();
                        if (object.values) {
                            if (!Array.isArray(object.values))
                                throw TypeError(".opentelemetry.proto.common.v1.ArrayValue.values: array expected");
                            message.values = [];
                            for (var i = 0; i < object.values.length; ++i) {
                                if (typeof object.values[i] !== "object")
                                    throw TypeError(".opentelemetry.proto.common.v1.ArrayValue.values: object expected");
                                message.values[i] = $root.opentelemetry.proto.common.v1.AnyValue.fromObject(object.values[i]);
                            }
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from an ArrayValue message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof opentelemetry.proto.common.v1.ArrayValue
                     * @static
                     * @param {opentelemetry.proto.common.v1.ArrayValue} message ArrayValue
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ArrayValue.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.values = [];
                        if (message.values && message.values.length) {
                            object.values = [];
                            for (var j = 0; j < message.values.length; ++j)
                                object.values[j] = $root.opentelemetry.proto.common.v1.AnyValue.toObject(message.values[j], options);
                        }
                        return object;
                    };

                    /**
                     * Converts this ArrayValue to JSON.
                     * @function toJSON
                     * @memberof opentelemetry.proto.common.v1.ArrayValue
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ArrayValue.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for ArrayValue
                     * @function getTypeUrl
                     * @memberof opentelemetry.proto.common.v1.ArrayValue
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    ArrayValue.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/opentelemetry.proto.common.v1.ArrayValue";
                    };

                    return ArrayValue;
                })();

                v1.KeyValueList = (function() {

                    /**
                     * Properties of a KeyValueList.
                     * @memberof opentelemetry.proto.common.v1
                     * @interface IKeyValueList
                     * @property {Array.<opentelemetry.proto.common.v1.IKeyValue>|null} [values] KeyValueList values
                     */

                    /**
                     * Constructs a new KeyValueList.
                     * @memberof opentelemetry.proto.common.v1
                     * @classdesc Represents a KeyValueList.
                     * @implements IKeyValueList
                     * @constructor
                     * @param {opentelemetry.proto.common.v1.IKeyValueList=} [properties] Properties to set
                     */
                    function KeyValueList(properties) {
                        this.values = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * KeyValueList values.
                     * @member {Array.<opentelemetry.proto.common.v1.IKeyValue>} values
                     * @memberof opentelemetry.proto.common.v1.KeyValueList
                     * @instance
                     */
                    KeyValueList.prototype.values = $util.emptyArray;

                    /**
                     * Creates a new KeyValueList instance using the specified properties.
                     * @function create
                     * @memberof opentelemetry.proto.common.v1.KeyValueList
                     * @static
                     * @param {opentelemetry.proto.common.v1.IKeyValueList=} [properties] Properties to set
                     * @returns {opentelemetry.proto.common.v1.KeyValueList} KeyValueList instance
                     */
                    KeyValueList.create = function create(properties) {
                        return new KeyValueList(properties);
                    };

                    /**
                     * Encodes the specified KeyValueList message. Does not implicitly {@link opentelemetry.proto.common.v1.KeyValueList.verify|verify} messages.
                     * @function encode
                     * @memberof opentelemetry.proto.common.v1.KeyValueList
                     * @static
                     * @param {opentelemetry.proto.common.v1.IKeyValueList} message KeyValueList message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    KeyValueList.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.values != null && message.values.length)
                            for (var i = 0; i < message.values.length; ++i)
                                $root.opentelemetry.proto.common.v1.KeyValue.encode(message.values[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified KeyValueList message, length delimited. Does not implicitly {@link opentelemetry.proto.common.v1.KeyValueList.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof opentelemetry.proto.common.v1.KeyValueList
                     * @static
                     * @param {opentelemetry.proto.common.v1.IKeyValueList} message KeyValueList message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    KeyValueList.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a KeyValueList message from the specified reader or buffer.
                     * @function decode
                     * @memberof opentelemetry.proto.common.v1.KeyValueList
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {opentelemetry.proto.common.v1.KeyValueList} KeyValueList
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    KeyValueList.decode = function decode(reader, length, error) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.opentelemetry.proto.common.v1.KeyValueList();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            if (tag === error)
                                break;
                            switch (tag >>> 3) {
                            case 1: {
                                    if (!(message.values && message.values.length))
                                        message.values = [];
                                    message.values.push($root.opentelemetry.proto.common.v1.KeyValue.decode(reader, reader.uint32()));
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a KeyValueList message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof opentelemetry.proto.common.v1.KeyValueList
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {opentelemetry.proto.common.v1.KeyValueList} KeyValueList
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    KeyValueList.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a KeyValueList message.
                     * @function verify
                     * @memberof opentelemetry.proto.common.v1.KeyValueList
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    KeyValueList.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.values != null && message.hasOwnProperty("values")) {
                            if (!Array.isArray(message.values))
                                return "values: array expected";
                            for (var i = 0; i < message.values.length; ++i) {
                                var error = $root.opentelemetry.proto.common.v1.KeyValue.verify(message.values[i]);
                                if (error)
                                    return "values." + error;
                            }
                        }
                        return null;
                    };

                    /**
                     * Creates a KeyValueList message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof opentelemetry.proto.common.v1.KeyValueList
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {opentelemetry.proto.common.v1.KeyValueList} KeyValueList
                     */
                    KeyValueList.fromObject = function fromObject(object) {
                        if (object instanceof $root.opentelemetry.proto.common.v1.KeyValueList)
                            return object;
                        var message = new $root.opentelemetry.proto.common.v1.KeyValueList();
                        if (object.values) {
                            if (!Array.isArray(object.values))
                                throw TypeError(".opentelemetry.proto.common.v1.KeyValueList.values: array expected");
                            message.values = [];
                            for (var i = 0; i < object.values.length; ++i) {
                                if (typeof object.values[i] !== "object")
                                    throw TypeError(".opentelemetry.proto.common.v1.KeyValueList.values: object expected");
                                message.values[i] = $root.opentelemetry.proto.common.v1.KeyValue.fromObject(object.values[i]);
                            }
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a KeyValueList message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof opentelemetry.proto.common.v1.KeyValueList
                     * @static
                     * @param {opentelemetry.proto.common.v1.KeyValueList} message KeyValueList
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    KeyValueList.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.values = [];
                        if (message.values && message.values.length) {
                            object.values = [];
                            for (var j = 0; j < message.values.length; ++j)
                                object.values[j] = $root.opentelemetry.proto.common.v1.KeyValue.toObject(message.values[j], options);
                        }
                        return object;
                    };

                    /**
                     * Converts this KeyValueList to JSON.
                     * @function toJSON
                     * @memberof opentelemetry.proto.common.v1.KeyValueList
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    KeyValueList.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for KeyValueList
                     * @function getTypeUrl
                     * @memberof opentelemetry.proto.common.v1.KeyValueList
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    KeyValueList.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/opentelemetry.proto.common.v1.KeyValueList";
                    };

                    return KeyValueList;
                })();

                v1.KeyValue = (function() {

                    /**
                     * Properties of a KeyValue.
                     * @memberof opentelemetry.proto.common.v1
                     * @interface IKeyValue
                     * @property {string|null} [key] KeyValue key
                     * @property {opentelemetry.proto.common.v1.IAnyValue|null} [value] KeyValue value
                     */

                    /**
                     * Constructs a new KeyValue.
                     * @memberof opentelemetry.proto.common.v1
                     * @classdesc Represents a KeyValue.
                     * @implements IKeyValue
                     * @constructor
                     * @param {opentelemetry.proto.common.v1.IKeyValue=} [properties] Properties to set
                     */
                    function KeyValue(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * KeyValue key.
                     * @member {string|null|undefined} key
                     * @memberof opentelemetry.proto.common.v1.KeyValue
                     * @instance
                     */
                    KeyValue.prototype.key = null;

                    /**
                     * KeyValue value.
                     * @member {opentelemetry.proto.common.v1.IAnyValue|null|undefined} value
                     * @memberof opentelemetry.proto.common.v1.KeyValue
                     * @instance
                     */
                    KeyValue.prototype.value = null;

                    /**
                     * Creates a new KeyValue instance using the specified properties.
                     * @function create
                     * @memberof opentelemetry.proto.common.v1.KeyValue
                     * @static
                     * @param {opentelemetry.proto.common.v1.IKeyValue=} [properties] Properties to set
                     * @returns {opentelemetry.proto.common.v1.KeyValue} KeyValue instance
                     */
                    KeyValue.create = function create(properties) {
                        return new KeyValue(properties);
                    };

                    /**
                     * Encodes the specified KeyValue message. Does not implicitly {@link opentelemetry.proto.common.v1.KeyValue.verify|verify} messages.
                     * @function encode
                     * @memberof opentelemetry.proto.common.v1.KeyValue
                     * @static
                     * @param {opentelemetry.proto.common.v1.IKeyValue} message KeyValue message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    KeyValue.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.key != null && Object.hasOwnProperty.call(message, "key"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.key);
                        if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                            $root.opentelemetry.proto.common.v1.AnyValue.encode(message.value, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified KeyValue message, length delimited. Does not implicitly {@link opentelemetry.proto.common.v1.KeyValue.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof opentelemetry.proto.common.v1.KeyValue
                     * @static
                     * @param {opentelemetry.proto.common.v1.IKeyValue} message KeyValue message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    KeyValue.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a KeyValue message from the specified reader or buffer.
                     * @function decode
                     * @memberof opentelemetry.proto.common.v1.KeyValue
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {opentelemetry.proto.common.v1.KeyValue} KeyValue
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    KeyValue.decode = function decode(reader, length, error) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.opentelemetry.proto.common.v1.KeyValue();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            if (tag === error)
                                break;
                            switch (tag >>> 3) {
                            case 1: {
                                    message.key = reader.string();
                                    break;
                                }
                            case 2: {
                                    message.value = $root.opentelemetry.proto.common.v1.AnyValue.decode(reader, reader.uint32());
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a KeyValue message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof opentelemetry.proto.common.v1.KeyValue
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {opentelemetry.proto.common.v1.KeyValue} KeyValue
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    KeyValue.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a KeyValue message.
                     * @function verify
                     * @memberof opentelemetry.proto.common.v1.KeyValue
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    KeyValue.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.key != null && message.hasOwnProperty("key"))
                            if (!$util.isString(message.key))
                                return "key: string expected";
                        if (message.value != null && message.hasOwnProperty("value")) {
                            var error = $root.opentelemetry.proto.common.v1.AnyValue.verify(message.value);
                            if (error)
                                return "value." + error;
                        }
                        return null;
                    };

                    /**
                     * Creates a KeyValue message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof opentelemetry.proto.common.v1.KeyValue
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {opentelemetry.proto.common.v1.KeyValue} KeyValue
                     */
                    KeyValue.fromObject = function fromObject(object) {
                        if (object instanceof $root.opentelemetry.proto.common.v1.KeyValue)
                            return object;
                        var message = new $root.opentelemetry.proto.common.v1.KeyValue();
                        if (object.key != null)
                            message.key = String(object.key);
                        if (object.value != null) {
                            if (typeof object.value !== "object")
                                throw TypeError(".opentelemetry.proto.common.v1.KeyValue.value: object expected");
                            message.value = $root.opentelemetry.proto.common.v1.AnyValue.fromObject(object.value);
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a KeyValue message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof opentelemetry.proto.common.v1.KeyValue
                     * @static
                     * @param {opentelemetry.proto.common.v1.KeyValue} message KeyValue
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    KeyValue.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.key = "";
                            object.value = null;
                        }
                        if (message.key != null && message.hasOwnProperty("key"))
                            object.key = message.key;
                        if (message.value != null && message.hasOwnProperty("value"))
                            object.value = $root.opentelemetry.proto.common.v1.AnyValue.toObject(message.value, options);
                        return object;
                    };

                    /**
                     * Converts this KeyValue to JSON.
                     * @function toJSON
                     * @memberof opentelemetry.proto.common.v1.KeyValue
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    KeyValue.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for KeyValue
                     * @function getTypeUrl
                     * @memberof opentelemetry.proto.common.v1.KeyValue
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    KeyValue.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/opentelemetry.proto.common.v1.KeyValue";
                    };

                    return KeyValue;
                })();

                v1.InstrumentationScope = (function() {

                    /**
                     * Properties of an InstrumentationScope.
                     * @memberof opentelemetry.proto.common.v1
                     * @interface IInstrumentationScope
                     * @property {string|null} [name] InstrumentationScope name
                     * @property {string|null} [version] InstrumentationScope version
                     * @property {Array.<opentelemetry.proto.common.v1.IKeyValue>|null} [attributes] InstrumentationScope attributes
                     * @property {number|null} [droppedAttributesCount] InstrumentationScope droppedAttributesCount
                     */

                    /**
                     * Constructs a new InstrumentationScope.
                     * @memberof opentelemetry.proto.common.v1
                     * @classdesc Represents an InstrumentationScope.
                     * @implements IInstrumentationScope
                     * @constructor
                     * @param {opentelemetry.proto.common.v1.IInstrumentationScope=} [properties] Properties to set
                     */
                    function InstrumentationScope(properties) {
                        this.attributes = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * InstrumentationScope name.
                     * @member {string|null|undefined} name
                     * @memberof opentelemetry.proto.common.v1.InstrumentationScope
                     * @instance
                     */
                    InstrumentationScope.prototype.name = null;

                    /**
                     * InstrumentationScope version.
                     * @member {string|null|undefined} version
                     * @memberof opentelemetry.proto.common.v1.InstrumentationScope
                     * @instance
                     */
                    InstrumentationScope.prototype.version = null;

                    /**
                     * InstrumentationScope attributes.
                     * @member {Array.<opentelemetry.proto.common.v1.IKeyValue>} attributes
                     * @memberof opentelemetry.proto.common.v1.InstrumentationScope
                     * @instance
                     */
                    InstrumentationScope.prototype.attributes = $util.emptyArray;

                    /**
                     * InstrumentationScope droppedAttributesCount.
                     * @member {number|null|undefined} droppedAttributesCount
                     * @memberof opentelemetry.proto.common.v1.InstrumentationScope
                     * @instance
                     */
                    InstrumentationScope.prototype.droppedAttributesCount = null;

                    /**
                     * Creates a new InstrumentationScope instance using the specified properties.
                     * @function create
                     * @memberof opentelemetry.proto.common.v1.InstrumentationScope
                     * @static
                     * @param {opentelemetry.proto.common.v1.IInstrumentationScope=} [properties] Properties to set
                     * @returns {opentelemetry.proto.common.v1.InstrumentationScope} InstrumentationScope instance
                     */
                    InstrumentationScope.create = function create(properties) {
                        return new InstrumentationScope(properties);
                    };

                    /**
                     * Encodes the specified InstrumentationScope message. Does not implicitly {@link opentelemetry.proto.common.v1.InstrumentationScope.verify|verify} messages.
                     * @function encode
                     * @memberof opentelemetry.proto.common.v1.InstrumentationScope
                     * @static
                     * @param {opentelemetry.proto.common.v1.IInstrumentationScope} message InstrumentationScope message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    InstrumentationScope.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                        if (message.version != null && Object.hasOwnProperty.call(message, "version"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.version);
                        if (message.attributes != null && message.attributes.length)
                            for (var i = 0; i < message.attributes.length; ++i)
                                $root.opentelemetry.proto.common.v1.KeyValue.encode(message.attributes[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                        if (message.droppedAttributesCount != null && Object.hasOwnProperty.call(message, "droppedAttributesCount"))
                            writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.droppedAttributesCount);
                        return writer;
                    };

                    /**
                     * Encodes the specified InstrumentationScope message, length delimited. Does not implicitly {@link opentelemetry.proto.common.v1.InstrumentationScope.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof opentelemetry.proto.common.v1.InstrumentationScope
                     * @static
                     * @param {opentelemetry.proto.common.v1.IInstrumentationScope} message InstrumentationScope message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    InstrumentationScope.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes an InstrumentationScope message from the specified reader or buffer.
                     * @function decode
                     * @memberof opentelemetry.proto.common.v1.InstrumentationScope
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {opentelemetry.proto.common.v1.InstrumentationScope} InstrumentationScope
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    InstrumentationScope.decode = function decode(reader, length, error) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.opentelemetry.proto.common.v1.InstrumentationScope();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            if (tag === error)
                                break;
                            switch (tag >>> 3) {
                            case 1: {
                                    message.name = reader.string();
                                    break;
                                }
                            case 2: {
                                    message.version = reader.string();
                                    break;
                                }
                            case 3: {
                                    if (!(message.attributes && message.attributes.length))
                                        message.attributes = [];
                                    message.attributes.push($root.opentelemetry.proto.common.v1.KeyValue.decode(reader, reader.uint32()));
                                    break;
                                }
                            case 4: {
                                    message.droppedAttributesCount = reader.uint32();
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes an InstrumentationScope message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof opentelemetry.proto.common.v1.InstrumentationScope
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {opentelemetry.proto.common.v1.InstrumentationScope} InstrumentationScope
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    InstrumentationScope.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies an InstrumentationScope message.
                     * @function verify
                     * @memberof opentelemetry.proto.common.v1.InstrumentationScope
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    InstrumentationScope.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.name != null && message.hasOwnProperty("name"))
                            if (!$util.isString(message.name))
                                return "name: string expected";
                        if (message.version != null && message.hasOwnProperty("version"))
                            if (!$util.isString(message.version))
                                return "version: string expected";
                        if (message.attributes != null && message.hasOwnProperty("attributes")) {
                            if (!Array.isArray(message.attributes))
                                return "attributes: array expected";
                            for (var i = 0; i < message.attributes.length; ++i) {
                                var error = $root.opentelemetry.proto.common.v1.KeyValue.verify(message.attributes[i]);
                                if (error)
                                    return "attributes." + error;
                            }
                        }
                        if (message.droppedAttributesCount != null && message.hasOwnProperty("droppedAttributesCount"))
                            if (!$util.isInteger(message.droppedAttributesCount))
                                return "droppedAttributesCount: integer expected";
                        return null;
                    };

                    /**
                     * Creates an InstrumentationScope message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof opentelemetry.proto.common.v1.InstrumentationScope
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {opentelemetry.proto.common.v1.InstrumentationScope} InstrumentationScope
                     */
                    InstrumentationScope.fromObject = function fromObject(object) {
                        if (object instanceof $root.opentelemetry.proto.common.v1.InstrumentationScope)
                            return object;
                        var message = new $root.opentelemetry.proto.common.v1.InstrumentationScope();
                        if (object.name != null)
                            message.name = String(object.name);
                        if (object.version != null)
                            message.version = String(object.version);
                        if (object.attributes) {
                            if (!Array.isArray(object.attributes))
                                throw TypeError(".opentelemetry.proto.common.v1.InstrumentationScope.attributes: array expected");
                            message.attributes = [];
                            for (var i = 0; i < object.attributes.length; ++i) {
                                if (typeof object.attributes[i] !== "object")
                                    throw TypeError(".opentelemetry.proto.common.v1.InstrumentationScope.attributes: object expected");
                                message.attributes[i] = $root.opentelemetry.proto.common.v1.KeyValue.fromObject(object.attributes[i]);
                            }
                        }
                        if (object.droppedAttributesCount != null)
                            message.droppedAttributesCount = object.droppedAttributesCount >>> 0;
                        return message;
                    };

                    /**
                     * Creates a plain object from an InstrumentationScope message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof opentelemetry.proto.common.v1.InstrumentationScope
                     * @static
                     * @param {opentelemetry.proto.common.v1.InstrumentationScope} message InstrumentationScope
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    InstrumentationScope.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.attributes = [];
                        if (options.defaults) {
                            object.name = "";
                            object.version = "";
                            object.droppedAttributesCount = 0;
                        }
                        if (message.name != null && message.hasOwnProperty("name"))
                            object.name = message.name;
                        if (message.version != null && message.hasOwnProperty("version"))
                            object.version = message.version;
                        if (message.attributes && message.attributes.length) {
                            object.attributes = [];
                            for (var j = 0; j < message.attributes.length; ++j)
                                object.attributes[j] = $root.opentelemetry.proto.common.v1.KeyValue.toObject(message.attributes[j], options);
                        }
                        if (message.droppedAttributesCount != null && message.hasOwnProperty("droppedAttributesCount"))
                            object.droppedAttributesCount = message.droppedAttributesCount;
                        return object;
                    };

                    /**
                     * Converts this InstrumentationScope to JSON.
                     * @function toJSON
                     * @memberof opentelemetry.proto.common.v1.InstrumentationScope
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    InstrumentationScope.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for InstrumentationScope
                     * @function getTypeUrl
                     * @memberof opentelemetry.proto.common.v1.InstrumentationScope
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    InstrumentationScope.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/opentelemetry.proto.common.v1.InstrumentationScope";
                    };

                    return InstrumentationScope;
                })();

                return v1;
            })();

            return common;
        })();

        proto.resource = (function() {

            /**
             * Namespace resource.
             * @memberof opentelemetry.proto
             * @namespace
             */
            var resource = {};

            resource.v1 = (function() {

                /**
                 * Namespace v1.
                 * @memberof opentelemetry.proto.resource
                 * @namespace
                 */
                var v1 = {};

                v1.Resource = (function() {

                    /**
                     * Properties of a Resource.
                     * @memberof opentelemetry.proto.resource.v1
                     * @interface IResource
                     * @property {Array.<opentelemetry.proto.common.v1.IKeyValue>|null} [attributes] Resource attributes
                     * @property {number|null} [droppedAttributesCount] Resource droppedAttributesCount
                     */

                    /**
                     * Constructs a new Resource.
                     * @memberof opentelemetry.proto.resource.v1
                     * @classdesc Represents a Resource.
                     * @implements IResource
                     * @constructor
                     * @param {opentelemetry.proto.resource.v1.IResource=} [properties] Properties to set
                     */
                    function Resource(properties) {
                        this.attributes = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Resource attributes.
                     * @member {Array.<opentelemetry.proto.common.v1.IKeyValue>} attributes
                     * @memberof opentelemetry.proto.resource.v1.Resource
                     * @instance
                     */
                    Resource.prototype.attributes = $util.emptyArray;

                    /**
                     * Resource droppedAttributesCount.
                     * @member {number|null|undefined} droppedAttributesCount
                     * @memberof opentelemetry.proto.resource.v1.Resource
                     * @instance
                     */
                    Resource.prototype.droppedAttributesCount = null;

                    /**
                     * Creates a new Resource instance using the specified properties.
                     * @function create
                     * @memberof opentelemetry.proto.resource.v1.Resource
                     * @static
                     * @param {opentelemetry.proto.resource.v1.IResource=} [properties] Properties to set
                     * @returns {opentelemetry.proto.resource.v1.Resource} Resource instance
                     */
                    Resource.create = function create(properties) {
                        return new Resource(properties);
                    };

                    /**
                     * Encodes the specified Resource message. Does not implicitly {@link opentelemetry.proto.resource.v1.Resource.verify|verify} messages.
                     * @function encode
                     * @memberof opentelemetry.proto.resource.v1.Resource
                     * @static
                     * @param {opentelemetry.proto.resource.v1.IResource} message Resource message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Resource.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.attributes != null && message.attributes.length)
                            for (var i = 0; i < message.attributes.length; ++i)
                                $root.opentelemetry.proto.common.v1.KeyValue.encode(message.attributes[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        if (message.droppedAttributesCount != null && Object.hasOwnProperty.call(message, "droppedAttributesCount"))
                            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.droppedAttributesCount);
                        return writer;
                    };

                    /**
                     * Encodes the specified Resource message, length delimited. Does not implicitly {@link opentelemetry.proto.resource.v1.Resource.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof opentelemetry.proto.resource.v1.Resource
                     * @static
                     * @param {opentelemetry.proto.resource.v1.IResource} message Resource message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Resource.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a Resource message from the specified reader or buffer.
                     * @function decode
                     * @memberof opentelemetry.proto.resource.v1.Resource
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {opentelemetry.proto.resource.v1.Resource} Resource
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Resource.decode = function decode(reader, length, error) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.opentelemetry.proto.resource.v1.Resource();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            if (tag === error)
                                break;
                            switch (tag >>> 3) {
                            case 1: {
                                    if (!(message.attributes && message.attributes.length))
                                        message.attributes = [];
                                    message.attributes.push($root.opentelemetry.proto.common.v1.KeyValue.decode(reader, reader.uint32()));
                                    break;
                                }
                            case 2: {
                                    message.droppedAttributesCount = reader.uint32();
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a Resource message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof opentelemetry.proto.resource.v1.Resource
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {opentelemetry.proto.resource.v1.Resource} Resource
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Resource.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a Resource message.
                     * @function verify
                     * @memberof opentelemetry.proto.resource.v1.Resource
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Resource.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.attributes != null && message.hasOwnProperty("attributes")) {
                            if (!Array.isArray(message.attributes))
                                return "attributes: array expected";
                            for (var i = 0; i < message.attributes.length; ++i) {
                                var error = $root.opentelemetry.proto.common.v1.KeyValue.verify(message.attributes[i]);
                                if (error)
                                    return "attributes." + error;
                            }
                        }
                        if (message.droppedAttributesCount != null && message.hasOwnProperty("droppedAttributesCount"))
                            if (!$util.isInteger(message.droppedAttributesCount))
                                return "droppedAttributesCount: integer expected";
                        return null;
                    };

                    /**
                     * Creates a Resource message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof opentelemetry.proto.resource.v1.Resource
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {opentelemetry.proto.resource.v1.Resource} Resource
                     */
                    Resource.fromObject = function fromObject(object) {
                        if (object instanceof $root.opentelemetry.proto.resource.v1.Resource)
                            return object;
                        var message = new $root.opentelemetry.proto.resource.v1.Resource();
                        if (object.attributes) {
                            if (!Array.isArray(object.attributes))
                                throw TypeError(".opentelemetry.proto.resource.v1.Resource.attributes: array expected");
                            message.attributes = [];
                            for (var i = 0; i < object.attributes.length; ++i) {
                                if (typeof object.attributes[i] !== "object")
                                    throw TypeError(".opentelemetry.proto.resource.v1.Resource.attributes: object expected");
                                message.attributes[i] = $root.opentelemetry.proto.common.v1.KeyValue.fromObject(object.attributes[i]);
                            }
                        }
                        if (object.droppedAttributesCount != null)
                            message.droppedAttributesCount = object.droppedAttributesCount >>> 0;
                        return message;
                    };

                    /**
                     * Creates a plain object from a Resource message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof opentelemetry.proto.resource.v1.Resource
                     * @static
                     * @param {opentelemetry.proto.resource.v1.Resource} message Resource
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Resource.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.attributes = [];
                        if (options.defaults)
                            object.droppedAttributesCount = 0;
                        if (message.attributes && message.attributes.length) {
                            object.attributes = [];
                            for (var j = 0; j < message.attributes.length; ++j)
                                object.attributes[j] = $root.opentelemetry.proto.common.v1.KeyValue.toObject(message.attributes[j], options);
                        }
                        if (message.droppedAttributesCount != null && message.hasOwnProperty("droppedAttributesCount"))
                            object.droppedAttributesCount = message.droppedAttributesCount;
                        return object;
                    };

                    /**
                     * Converts this Resource to JSON.
                     * @function toJSON
                     * @memberof opentelemetry.proto.resource.v1.Resource
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Resource.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for Resource
                     * @function getTypeUrl
                     * @memberof opentelemetry.proto.resource.v1.Resource
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    Resource.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/opentelemetry.proto.resource.v1.Resource";
                    };

                    return Resource;
                })();

                return v1;
            })();

            return resource;
        })();

        return proto;
    })();

    return opentelemetry;
})();

module.exports = $root;
