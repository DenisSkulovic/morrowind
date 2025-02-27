// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.4.2
//   protoc               v3.20.3
// source: ai_service_common.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

export const protobufPackage = "ai_service_common";

export enum AiTaskStatusEnumDTO {
  QUEUED = 0,
  PROCESSING = 1,
  COMPLETED = 2,
  FAILED = 3,
  UNRECOGNIZED = -1,
}

export function aiTaskStatusEnumDTOFromJSON(object: any): AiTaskStatusEnumDTO {
  switch (object) {
    case 0:
    case "QUEUED":
      return AiTaskStatusEnumDTO.QUEUED;
    case 1:
    case "PROCESSING":
      return AiTaskStatusEnumDTO.PROCESSING;
    case 2:
    case "COMPLETED":
      return AiTaskStatusEnumDTO.COMPLETED;
    case 3:
    case "FAILED":
      return AiTaskStatusEnumDTO.FAILED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return AiTaskStatusEnumDTO.UNRECOGNIZED;
  }
}

export function aiTaskStatusEnumDTOToJSON(object: AiTaskStatusEnumDTO): string {
  switch (object) {
    case AiTaskStatusEnumDTO.QUEUED:
      return "QUEUED";
    case AiTaskStatusEnumDTO.PROCESSING:
      return "PROCESSING";
    case AiTaskStatusEnumDTO.COMPLETED:
      return "COMPLETED";
    case AiTaskStatusEnumDTO.FAILED:
      return "FAILED";
    case AiTaskStatusEnumDTO.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Request to the AI Service */
export interface AiRequest {
  requestId: string;
  /** The main prompt or input to be sent to the AI */
  prompt: string;
  /** General context or metadata for the request */
  metadata:
    | AiRequestMetadata
    | undefined;
  /** Options for AI behavior (e.g., temperature, max tokens) */
  options: AiRequestOptions | undefined;
}

export interface AiRequestMetadata {
  /** Unix timestamp when the request was created */
  timestamp: number;
  useCase: string;
}

export interface AiRequestOptions {
  model: string;
  temperature: number;
  maxTokens: number;
  /** Maximum processing time in seconds (optional) */
  timeout: number;
}

/** Response from the AI Service */
export interface AiResponse {
  /** Raw output from the AI */
  output: string;
  /** Error message in case of failure */
  errorMessage: string;
  /** Whether this is the last chunk of the response */
  isLast: boolean;
}

export interface AiResponseMetadata {
  /** Unix timestamp when the request was created */
  timestamp: number;
  useCase: string;
  context: string;
}

/** Interrupt Request */
export interface InterruptRequest {
  /** The ID of the request to interrupt */
  requestId: string;
}

/** Interrupt Response */
export interface InterruptResponse {
  /** The ID of the interrupted request */
  requestId: string;
  /** Whether the interruption was successful */
  success: boolean;
  /** Status after interruption: queued, interrupted, completed */
  status: string;
  /** Additional information about the interruption */
  message: string;
}

export interface CheckStatusRequest {
  /** The ID of the request whose status is being checked */
  requestId: string;
}

export interface CheckStatusResponse {
  /** Task status: queued, processing, completed, failed */
  status: AiTaskStatusEnumDTO;
}

function createBaseAiRequest(): AiRequest {
  return { requestId: "", prompt: "", metadata: undefined, options: undefined };
}

export const AiRequest: MessageFns<AiRequest> = {
  encode(message: AiRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.requestId !== "") {
      writer.uint32(10).string(message.requestId);
    }
    if (message.prompt !== "") {
      writer.uint32(18).string(message.prompt);
    }
    if (message.metadata !== undefined) {
      AiRequestMetadata.encode(message.metadata, writer.uint32(26).fork()).join();
    }
    if (message.options !== undefined) {
      AiRequestOptions.encode(message.options, writer.uint32(34).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): AiRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAiRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.requestId = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.prompt = reader.string();
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          message.metadata = AiRequestMetadata.decode(reader, reader.uint32());
          continue;
        }
        case 4: {
          if (tag !== 34) {
            break;
          }

          message.options = AiRequestOptions.decode(reader, reader.uint32());
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AiRequest {
    return {
      requestId: isSet(object.requestId) ? globalThis.String(object.requestId) : "",
      prompt: isSet(object.prompt) ? globalThis.String(object.prompt) : "",
      metadata: isSet(object.metadata) ? AiRequestMetadata.fromJSON(object.metadata) : undefined,
      options: isSet(object.options) ? AiRequestOptions.fromJSON(object.options) : undefined,
    };
  },

  toJSON(message: AiRequest): unknown {
    const obj: any = {};
    if (message.requestId !== "") {
      obj.requestId = message.requestId;
    }
    if (message.prompt !== "") {
      obj.prompt = message.prompt;
    }
    if (message.metadata !== undefined) {
      obj.metadata = AiRequestMetadata.toJSON(message.metadata);
    }
    if (message.options !== undefined) {
      obj.options = AiRequestOptions.toJSON(message.options);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AiRequest>, I>>(base?: I): AiRequest {
    return AiRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AiRequest>, I>>(object: I): AiRequest {
    const message = createBaseAiRequest();
    message.requestId = object.requestId ?? "";
    message.prompt = object.prompt ?? "";
    message.metadata = (object.metadata !== undefined && object.metadata !== null)
      ? AiRequestMetadata.fromPartial(object.metadata)
      : undefined;
    message.options = (object.options !== undefined && object.options !== null)
      ? AiRequestOptions.fromPartial(object.options)
      : undefined;
    return message;
  },
};

function createBaseAiRequestMetadata(): AiRequestMetadata {
  return { timestamp: 0, useCase: "" };
}

export const AiRequestMetadata: MessageFns<AiRequestMetadata> = {
  encode(message: AiRequestMetadata, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.timestamp !== 0) {
      writer.uint32(8).int64(message.timestamp);
    }
    if (message.useCase !== "") {
      writer.uint32(18).string(message.useCase);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): AiRequestMetadata {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAiRequestMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.timestamp = longToNumber(reader.int64());
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.useCase = reader.string();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AiRequestMetadata {
    return {
      timestamp: isSet(object.timestamp) ? globalThis.Number(object.timestamp) : 0,
      useCase: isSet(object.useCase) ? globalThis.String(object.useCase) : "",
    };
  },

  toJSON(message: AiRequestMetadata): unknown {
    const obj: any = {};
    if (message.timestamp !== 0) {
      obj.timestamp = Math.round(message.timestamp);
    }
    if (message.useCase !== "") {
      obj.useCase = message.useCase;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AiRequestMetadata>, I>>(base?: I): AiRequestMetadata {
    return AiRequestMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AiRequestMetadata>, I>>(object: I): AiRequestMetadata {
    const message = createBaseAiRequestMetadata();
    message.timestamp = object.timestamp ?? 0;
    message.useCase = object.useCase ?? "";
    return message;
  },
};

function createBaseAiRequestOptions(): AiRequestOptions {
  return { model: "", temperature: 0, maxTokens: 0, timeout: 0 };
}

export const AiRequestOptions: MessageFns<AiRequestOptions> = {
  encode(message: AiRequestOptions, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.model !== "") {
      writer.uint32(10).string(message.model);
    }
    if (message.temperature !== 0) {
      writer.uint32(21).float(message.temperature);
    }
    if (message.maxTokens !== 0) {
      writer.uint32(24).int32(message.maxTokens);
    }
    if (message.timeout !== 0) {
      writer.uint32(32).int32(message.timeout);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): AiRequestOptions {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAiRequestOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.model = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 21) {
            break;
          }

          message.temperature = reader.float();
          continue;
        }
        case 3: {
          if (tag !== 24) {
            break;
          }

          message.maxTokens = reader.int32();
          continue;
        }
        case 4: {
          if (tag !== 32) {
            break;
          }

          message.timeout = reader.int32();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AiRequestOptions {
    return {
      model: isSet(object.model) ? globalThis.String(object.model) : "",
      temperature: isSet(object.temperature) ? globalThis.Number(object.temperature) : 0,
      maxTokens: isSet(object.maxTokens) ? globalThis.Number(object.maxTokens) : 0,
      timeout: isSet(object.timeout) ? globalThis.Number(object.timeout) : 0,
    };
  },

  toJSON(message: AiRequestOptions): unknown {
    const obj: any = {};
    if (message.model !== "") {
      obj.model = message.model;
    }
    if (message.temperature !== 0) {
      obj.temperature = message.temperature;
    }
    if (message.maxTokens !== 0) {
      obj.maxTokens = Math.round(message.maxTokens);
    }
    if (message.timeout !== 0) {
      obj.timeout = Math.round(message.timeout);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AiRequestOptions>, I>>(base?: I): AiRequestOptions {
    return AiRequestOptions.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AiRequestOptions>, I>>(object: I): AiRequestOptions {
    const message = createBaseAiRequestOptions();
    message.model = object.model ?? "";
    message.temperature = object.temperature ?? 0;
    message.maxTokens = object.maxTokens ?? 0;
    message.timeout = object.timeout ?? 0;
    return message;
  },
};

function createBaseAiResponse(): AiResponse {
  return { output: "", errorMessage: "", isLast: false };
}

export const AiResponse: MessageFns<AiResponse> = {
  encode(message: AiResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.output !== "") {
      writer.uint32(10).string(message.output);
    }
    if (message.errorMessage !== "") {
      writer.uint32(18).string(message.errorMessage);
    }
    if (message.isLast !== false) {
      writer.uint32(24).bool(message.isLast);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): AiResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAiResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.output = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.errorMessage = reader.string();
          continue;
        }
        case 3: {
          if (tag !== 24) {
            break;
          }

          message.isLast = reader.bool();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AiResponse {
    return {
      output: isSet(object.output) ? globalThis.String(object.output) : "",
      errorMessage: isSet(object.errorMessage) ? globalThis.String(object.errorMessage) : "",
      isLast: isSet(object.isLast) ? globalThis.Boolean(object.isLast) : false,
    };
  },

  toJSON(message: AiResponse): unknown {
    const obj: any = {};
    if (message.output !== "") {
      obj.output = message.output;
    }
    if (message.errorMessage !== "") {
      obj.errorMessage = message.errorMessage;
    }
    if (message.isLast !== false) {
      obj.isLast = message.isLast;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AiResponse>, I>>(base?: I): AiResponse {
    return AiResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AiResponse>, I>>(object: I): AiResponse {
    const message = createBaseAiResponse();
    message.output = object.output ?? "";
    message.errorMessage = object.errorMessage ?? "";
    message.isLast = object.isLast ?? false;
    return message;
  },
};

function createBaseAiResponseMetadata(): AiResponseMetadata {
  return { timestamp: 0, useCase: "", context: "" };
}

export const AiResponseMetadata: MessageFns<AiResponseMetadata> = {
  encode(message: AiResponseMetadata, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.timestamp !== 0) {
      writer.uint32(8).int64(message.timestamp);
    }
    if (message.useCase !== "") {
      writer.uint32(18).string(message.useCase);
    }
    if (message.context !== "") {
      writer.uint32(26).string(message.context);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): AiResponseMetadata {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAiResponseMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.timestamp = longToNumber(reader.int64());
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.useCase = reader.string();
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          message.context = reader.string();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AiResponseMetadata {
    return {
      timestamp: isSet(object.timestamp) ? globalThis.Number(object.timestamp) : 0,
      useCase: isSet(object.useCase) ? globalThis.String(object.useCase) : "",
      context: isSet(object.context) ? globalThis.String(object.context) : "",
    };
  },

  toJSON(message: AiResponseMetadata): unknown {
    const obj: any = {};
    if (message.timestamp !== 0) {
      obj.timestamp = Math.round(message.timestamp);
    }
    if (message.useCase !== "") {
      obj.useCase = message.useCase;
    }
    if (message.context !== "") {
      obj.context = message.context;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AiResponseMetadata>, I>>(base?: I): AiResponseMetadata {
    return AiResponseMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AiResponseMetadata>, I>>(object: I): AiResponseMetadata {
    const message = createBaseAiResponseMetadata();
    message.timestamp = object.timestamp ?? 0;
    message.useCase = object.useCase ?? "";
    message.context = object.context ?? "";
    return message;
  },
};

function createBaseInterruptRequest(): InterruptRequest {
  return { requestId: "" };
}

export const InterruptRequest: MessageFns<InterruptRequest> = {
  encode(message: InterruptRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.requestId !== "") {
      writer.uint32(10).string(message.requestId);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): InterruptRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInterruptRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.requestId = reader.string();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): InterruptRequest {
    return { requestId: isSet(object.requestId) ? globalThis.String(object.requestId) : "" };
  },

  toJSON(message: InterruptRequest): unknown {
    const obj: any = {};
    if (message.requestId !== "") {
      obj.requestId = message.requestId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<InterruptRequest>, I>>(base?: I): InterruptRequest {
    return InterruptRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<InterruptRequest>, I>>(object: I): InterruptRequest {
    const message = createBaseInterruptRequest();
    message.requestId = object.requestId ?? "";
    return message;
  },
};

function createBaseInterruptResponse(): InterruptResponse {
  return { requestId: "", success: false, status: "", message: "" };
}

export const InterruptResponse: MessageFns<InterruptResponse> = {
  encode(message: InterruptResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.requestId !== "") {
      writer.uint32(10).string(message.requestId);
    }
    if (message.success !== false) {
      writer.uint32(16).bool(message.success);
    }
    if (message.status !== "") {
      writer.uint32(26).string(message.status);
    }
    if (message.message !== "") {
      writer.uint32(34).string(message.message);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): InterruptResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInterruptResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.requestId = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.success = reader.bool();
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          message.status = reader.string();
          continue;
        }
        case 4: {
          if (tag !== 34) {
            break;
          }

          message.message = reader.string();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): InterruptResponse {
    return {
      requestId: isSet(object.requestId) ? globalThis.String(object.requestId) : "",
      success: isSet(object.success) ? globalThis.Boolean(object.success) : false,
      status: isSet(object.status) ? globalThis.String(object.status) : "",
      message: isSet(object.message) ? globalThis.String(object.message) : "",
    };
  },

  toJSON(message: InterruptResponse): unknown {
    const obj: any = {};
    if (message.requestId !== "") {
      obj.requestId = message.requestId;
    }
    if (message.success !== false) {
      obj.success = message.success;
    }
    if (message.status !== "") {
      obj.status = message.status;
    }
    if (message.message !== "") {
      obj.message = message.message;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<InterruptResponse>, I>>(base?: I): InterruptResponse {
    return InterruptResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<InterruptResponse>, I>>(object: I): InterruptResponse {
    const message = createBaseInterruptResponse();
    message.requestId = object.requestId ?? "";
    message.success = object.success ?? false;
    message.status = object.status ?? "";
    message.message = object.message ?? "";
    return message;
  },
};

function createBaseCheckStatusRequest(): CheckStatusRequest {
  return { requestId: "" };
}

export const CheckStatusRequest: MessageFns<CheckStatusRequest> = {
  encode(message: CheckStatusRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.requestId !== "") {
      writer.uint32(10).string(message.requestId);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CheckStatusRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCheckStatusRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.requestId = reader.string();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CheckStatusRequest {
    return { requestId: isSet(object.requestId) ? globalThis.String(object.requestId) : "" };
  },

  toJSON(message: CheckStatusRequest): unknown {
    const obj: any = {};
    if (message.requestId !== "") {
      obj.requestId = message.requestId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CheckStatusRequest>, I>>(base?: I): CheckStatusRequest {
    return CheckStatusRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CheckStatusRequest>, I>>(object: I): CheckStatusRequest {
    const message = createBaseCheckStatusRequest();
    message.requestId = object.requestId ?? "";
    return message;
  },
};

function createBaseCheckStatusResponse(): CheckStatusResponse {
  return { status: 0 };
}

export const CheckStatusResponse: MessageFns<CheckStatusResponse> = {
  encode(message: CheckStatusResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CheckStatusResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCheckStatusResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CheckStatusResponse {
    return { status: isSet(object.status) ? aiTaskStatusEnumDTOFromJSON(object.status) : 0 };
  },

  toJSON(message: CheckStatusResponse): unknown {
    const obj: any = {};
    if (message.status !== 0) {
      obj.status = aiTaskStatusEnumDTOToJSON(message.status);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CheckStatusResponse>, I>>(base?: I): CheckStatusResponse {
    return CheckStatusResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CheckStatusResponse>, I>>(object: I): CheckStatusResponse {
    const message = createBaseCheckStatusResponse();
    message.status = object.status ?? 0;
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(int64: { toString(): string }): number {
  const num = globalThis.Number(int64.toString());
  if (num > globalThis.Number.MAX_SAFE_INTEGER) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  if (num < globalThis.Number.MIN_SAFE_INTEGER) {
    throw new globalThis.Error("Value is smaller than Number.MIN_SAFE_INTEGER");
  }
  return num;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

export interface MessageFns<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
  fromJSON(object: any): T;
  toJSON(message: T): unknown;
  create<I extends Exact<DeepPartial<T>, I>>(base?: I): T;
  fromPartial<I extends Exact<DeepPartial<T>, I>>(object: I): T;
}
