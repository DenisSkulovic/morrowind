// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.4.2
//   protoc               v3.20.3
// source: campaign.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { CampaignDTO, ContextDTO, SearchQueryDTO } from "./common";

export const protobufPackage = "campaign";

export interface UpdateCampaignRequest {
  campaign: CampaignDTO | undefined;
}

export interface UpdateCampaignResponse {
  campaign: CampaignDTO | undefined;
}

export interface CreateCampaignRequest {
  campaign: CampaignDTO | undefined;
}

export interface CreateCampaignResponse {
  campaign: CampaignDTO | undefined;
}

export interface GetCampaignRequest {
  campaignId: string;
}

export interface GetCampaignResponse {
  campaign: CampaignDTO | undefined;
}

export interface DeleteCampaignRequest {
  campaignId: string;
}

/** No fields required for a 200 status response */
export interface DeleteCampaignResponse {
}

export interface SearchCampaignRequest {
  entityName: string;
  query: SearchQueryDTO | undefined;
  context: ContextDTO | undefined;
}

export interface SearchCampaignResponse {
  campaigns: CampaignDTO[];
  totalResults: number;
  totalPages: number;
  currentPage: number;
}

function createBaseUpdateCampaignRequest(): UpdateCampaignRequest {
  return { campaign: undefined };
}

export const UpdateCampaignRequest: MessageFns<UpdateCampaignRequest> = {
  encode(message: UpdateCampaignRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.campaign !== undefined) {
      CampaignDTO.encode(message.campaign, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): UpdateCampaignRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateCampaignRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.campaign = CampaignDTO.decode(reader, reader.uint32());
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

  fromJSON(object: any): UpdateCampaignRequest {
    return { campaign: isSet(object.campaign) ? CampaignDTO.fromJSON(object.campaign) : undefined };
  },

  toJSON(message: UpdateCampaignRequest): unknown {
    const obj: any = {};
    if (message.campaign !== undefined) {
      obj.campaign = CampaignDTO.toJSON(message.campaign);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateCampaignRequest>, I>>(base?: I): UpdateCampaignRequest {
    return UpdateCampaignRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateCampaignRequest>, I>>(object: I): UpdateCampaignRequest {
    const message = createBaseUpdateCampaignRequest();
    message.campaign = (object.campaign !== undefined && object.campaign !== null)
      ? CampaignDTO.fromPartial(object.campaign)
      : undefined;
    return message;
  },
};

function createBaseUpdateCampaignResponse(): UpdateCampaignResponse {
  return { campaign: undefined };
}

export const UpdateCampaignResponse: MessageFns<UpdateCampaignResponse> = {
  encode(message: UpdateCampaignResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.campaign !== undefined) {
      CampaignDTO.encode(message.campaign, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): UpdateCampaignResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateCampaignResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.campaign = CampaignDTO.decode(reader, reader.uint32());
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

  fromJSON(object: any): UpdateCampaignResponse {
    return { campaign: isSet(object.campaign) ? CampaignDTO.fromJSON(object.campaign) : undefined };
  },

  toJSON(message: UpdateCampaignResponse): unknown {
    const obj: any = {};
    if (message.campaign !== undefined) {
      obj.campaign = CampaignDTO.toJSON(message.campaign);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateCampaignResponse>, I>>(base?: I): UpdateCampaignResponse {
    return UpdateCampaignResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateCampaignResponse>, I>>(object: I): UpdateCampaignResponse {
    const message = createBaseUpdateCampaignResponse();
    message.campaign = (object.campaign !== undefined && object.campaign !== null)
      ? CampaignDTO.fromPartial(object.campaign)
      : undefined;
    return message;
  },
};

function createBaseCreateCampaignRequest(): CreateCampaignRequest {
  return { campaign: undefined };
}

export const CreateCampaignRequest: MessageFns<CreateCampaignRequest> = {
  encode(message: CreateCampaignRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.campaign !== undefined) {
      CampaignDTO.encode(message.campaign, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CreateCampaignRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateCampaignRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.campaign = CampaignDTO.decode(reader, reader.uint32());
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

  fromJSON(object: any): CreateCampaignRequest {
    return { campaign: isSet(object.campaign) ? CampaignDTO.fromJSON(object.campaign) : undefined };
  },

  toJSON(message: CreateCampaignRequest): unknown {
    const obj: any = {};
    if (message.campaign !== undefined) {
      obj.campaign = CampaignDTO.toJSON(message.campaign);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateCampaignRequest>, I>>(base?: I): CreateCampaignRequest {
    return CreateCampaignRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateCampaignRequest>, I>>(object: I): CreateCampaignRequest {
    const message = createBaseCreateCampaignRequest();
    message.campaign = (object.campaign !== undefined && object.campaign !== null)
      ? CampaignDTO.fromPartial(object.campaign)
      : undefined;
    return message;
  },
};

function createBaseCreateCampaignResponse(): CreateCampaignResponse {
  return { campaign: undefined };
}

export const CreateCampaignResponse: MessageFns<CreateCampaignResponse> = {
  encode(message: CreateCampaignResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.campaign !== undefined) {
      CampaignDTO.encode(message.campaign, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CreateCampaignResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateCampaignResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.campaign = CampaignDTO.decode(reader, reader.uint32());
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

  fromJSON(object: any): CreateCampaignResponse {
    return { campaign: isSet(object.campaign) ? CampaignDTO.fromJSON(object.campaign) : undefined };
  },

  toJSON(message: CreateCampaignResponse): unknown {
    const obj: any = {};
    if (message.campaign !== undefined) {
      obj.campaign = CampaignDTO.toJSON(message.campaign);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateCampaignResponse>, I>>(base?: I): CreateCampaignResponse {
    return CreateCampaignResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateCampaignResponse>, I>>(object: I): CreateCampaignResponse {
    const message = createBaseCreateCampaignResponse();
    message.campaign = (object.campaign !== undefined && object.campaign !== null)
      ? CampaignDTO.fromPartial(object.campaign)
      : undefined;
    return message;
  },
};

function createBaseGetCampaignRequest(): GetCampaignRequest {
  return { campaignId: "" };
}

export const GetCampaignRequest: MessageFns<GetCampaignRequest> = {
  encode(message: GetCampaignRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.campaignId !== "") {
      writer.uint32(10).string(message.campaignId);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): GetCampaignRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetCampaignRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.campaignId = reader.string();
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

  fromJSON(object: any): GetCampaignRequest {
    return { campaignId: isSet(object.campaignId) ? globalThis.String(object.campaignId) : "" };
  },

  toJSON(message: GetCampaignRequest): unknown {
    const obj: any = {};
    if (message.campaignId !== "") {
      obj.campaignId = message.campaignId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetCampaignRequest>, I>>(base?: I): GetCampaignRequest {
    return GetCampaignRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetCampaignRequest>, I>>(object: I): GetCampaignRequest {
    const message = createBaseGetCampaignRequest();
    message.campaignId = object.campaignId ?? "";
    return message;
  },
};

function createBaseGetCampaignResponse(): GetCampaignResponse {
  return { campaign: undefined };
}

export const GetCampaignResponse: MessageFns<GetCampaignResponse> = {
  encode(message: GetCampaignResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.campaign !== undefined) {
      CampaignDTO.encode(message.campaign, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): GetCampaignResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetCampaignResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.campaign = CampaignDTO.decode(reader, reader.uint32());
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

  fromJSON(object: any): GetCampaignResponse {
    return { campaign: isSet(object.campaign) ? CampaignDTO.fromJSON(object.campaign) : undefined };
  },

  toJSON(message: GetCampaignResponse): unknown {
    const obj: any = {};
    if (message.campaign !== undefined) {
      obj.campaign = CampaignDTO.toJSON(message.campaign);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetCampaignResponse>, I>>(base?: I): GetCampaignResponse {
    return GetCampaignResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetCampaignResponse>, I>>(object: I): GetCampaignResponse {
    const message = createBaseGetCampaignResponse();
    message.campaign = (object.campaign !== undefined && object.campaign !== null)
      ? CampaignDTO.fromPartial(object.campaign)
      : undefined;
    return message;
  },
};

function createBaseDeleteCampaignRequest(): DeleteCampaignRequest {
  return { campaignId: "" };
}

export const DeleteCampaignRequest: MessageFns<DeleteCampaignRequest> = {
  encode(message: DeleteCampaignRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.campaignId !== "") {
      writer.uint32(10).string(message.campaignId);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): DeleteCampaignRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteCampaignRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.campaignId = reader.string();
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

  fromJSON(object: any): DeleteCampaignRequest {
    return { campaignId: isSet(object.campaignId) ? globalThis.String(object.campaignId) : "" };
  },

  toJSON(message: DeleteCampaignRequest): unknown {
    const obj: any = {};
    if (message.campaignId !== "") {
      obj.campaignId = message.campaignId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteCampaignRequest>, I>>(base?: I): DeleteCampaignRequest {
    return DeleteCampaignRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteCampaignRequest>, I>>(object: I): DeleteCampaignRequest {
    const message = createBaseDeleteCampaignRequest();
    message.campaignId = object.campaignId ?? "";
    return message;
  },
};

function createBaseDeleteCampaignResponse(): DeleteCampaignResponse {
  return {};
}

export const DeleteCampaignResponse: MessageFns<DeleteCampaignResponse> = {
  encode(_: DeleteCampaignResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): DeleteCampaignResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteCampaignResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): DeleteCampaignResponse {
    return {};
  },

  toJSON(_: DeleteCampaignResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteCampaignResponse>, I>>(base?: I): DeleteCampaignResponse {
    return DeleteCampaignResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteCampaignResponse>, I>>(_: I): DeleteCampaignResponse {
    const message = createBaseDeleteCampaignResponse();
    return message;
  },
};

function createBaseSearchCampaignRequest(): SearchCampaignRequest {
  return { entityName: "", query: undefined, context: undefined };
}

export const SearchCampaignRequest: MessageFns<SearchCampaignRequest> = {
  encode(message: SearchCampaignRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.entityName !== "") {
      writer.uint32(10).string(message.entityName);
    }
    if (message.query !== undefined) {
      SearchQueryDTO.encode(message.query, writer.uint32(18).fork()).join();
    }
    if (message.context !== undefined) {
      ContextDTO.encode(message.context, writer.uint32(26).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): SearchCampaignRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSearchCampaignRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.entityName = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.query = SearchQueryDTO.decode(reader, reader.uint32());
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          message.context = ContextDTO.decode(reader, reader.uint32());
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

  fromJSON(object: any): SearchCampaignRequest {
    return {
      entityName: isSet(object.entityName) ? globalThis.String(object.entityName) : "",
      query: isSet(object.query) ? SearchQueryDTO.fromJSON(object.query) : undefined,
      context: isSet(object.context) ? ContextDTO.fromJSON(object.context) : undefined,
    };
  },

  toJSON(message: SearchCampaignRequest): unknown {
    const obj: any = {};
    if (message.entityName !== "") {
      obj.entityName = message.entityName;
    }
    if (message.query !== undefined) {
      obj.query = SearchQueryDTO.toJSON(message.query);
    }
    if (message.context !== undefined) {
      obj.context = ContextDTO.toJSON(message.context);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SearchCampaignRequest>, I>>(base?: I): SearchCampaignRequest {
    return SearchCampaignRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SearchCampaignRequest>, I>>(object: I): SearchCampaignRequest {
    const message = createBaseSearchCampaignRequest();
    message.entityName = object.entityName ?? "";
    message.query = (object.query !== undefined && object.query !== null)
      ? SearchQueryDTO.fromPartial(object.query)
      : undefined;
    message.context = (object.context !== undefined && object.context !== null)
      ? ContextDTO.fromPartial(object.context)
      : undefined;
    return message;
  },
};

function createBaseSearchCampaignResponse(): SearchCampaignResponse {
  return { campaigns: [], totalResults: 0, totalPages: 0, currentPage: 0 };
}

export const SearchCampaignResponse: MessageFns<SearchCampaignResponse> = {
  encode(message: SearchCampaignResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.campaigns) {
      CampaignDTO.encode(v!, writer.uint32(10).fork()).join();
    }
    if (message.totalResults !== 0) {
      writer.uint32(16).int32(message.totalResults);
    }
    if (message.totalPages !== 0) {
      writer.uint32(24).int32(message.totalPages);
    }
    if (message.currentPage !== 0) {
      writer.uint32(32).int32(message.currentPage);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): SearchCampaignResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSearchCampaignResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.campaigns.push(CampaignDTO.decode(reader, reader.uint32()));
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.totalResults = reader.int32();
          continue;
        }
        case 3: {
          if (tag !== 24) {
            break;
          }

          message.totalPages = reader.int32();
          continue;
        }
        case 4: {
          if (tag !== 32) {
            break;
          }

          message.currentPage = reader.int32();
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

  fromJSON(object: any): SearchCampaignResponse {
    return {
      campaigns: globalThis.Array.isArray(object?.campaigns)
        ? object.campaigns.map((e: any) => CampaignDTO.fromJSON(e))
        : [],
      totalResults: isSet(object.totalResults) ? globalThis.Number(object.totalResults) : 0,
      totalPages: isSet(object.totalPages) ? globalThis.Number(object.totalPages) : 0,
      currentPage: isSet(object.currentPage) ? globalThis.Number(object.currentPage) : 0,
    };
  },

  toJSON(message: SearchCampaignResponse): unknown {
    const obj: any = {};
    if (message.campaigns?.length) {
      obj.campaigns = message.campaigns.map((e) => CampaignDTO.toJSON(e));
    }
    if (message.totalResults !== 0) {
      obj.totalResults = Math.round(message.totalResults);
    }
    if (message.totalPages !== 0) {
      obj.totalPages = Math.round(message.totalPages);
    }
    if (message.currentPage !== 0) {
      obj.currentPage = Math.round(message.currentPage);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SearchCampaignResponse>, I>>(base?: I): SearchCampaignResponse {
    return SearchCampaignResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SearchCampaignResponse>, I>>(object: I): SearchCampaignResponse {
    const message = createBaseSearchCampaignResponse();
    message.campaigns = object.campaigns?.map((e) => CampaignDTO.fromPartial(e)) || [];
    message.totalResults = object.totalResults ?? 0;
    message.totalPages = object.totalPages ?? 0;
    message.currentPage = object.currentPage ?? 0;
    return message;
  },
};

export interface CampaignService {
  getCampaign(request: GetCampaignRequest): Promise<GetCampaignResponse>;
  createCampaign(request: CreateCampaignRequest): Promise<CreateCampaignResponse>;
  updateCampaign(request: UpdateCampaignRequest): Promise<UpdateCampaignResponse>;
  deleteCampaign(request: DeleteCampaignRequest): Promise<DeleteCampaignResponse>;
  search(request: SearchCampaignRequest): Promise<SearchCampaignResponse>;
}

export const CampaignServiceServiceName = "campaign.CampaignService";
export class CampaignServiceClientImpl implements CampaignService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || CampaignServiceServiceName;
    this.rpc = rpc;
    this.getCampaign = this.getCampaign.bind(this);
    this.createCampaign = this.createCampaign.bind(this);
    this.updateCampaign = this.updateCampaign.bind(this);
    this.deleteCampaign = this.deleteCampaign.bind(this);
    this.search = this.search.bind(this);
  }
  getCampaign(request: GetCampaignRequest): Promise<GetCampaignResponse> {
    const data = GetCampaignRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "getCampaign", data);
    return promise.then((data) => GetCampaignResponse.decode(new BinaryReader(data)));
  }

  createCampaign(request: CreateCampaignRequest): Promise<CreateCampaignResponse> {
    const data = CreateCampaignRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "createCampaign", data);
    return promise.then((data) => CreateCampaignResponse.decode(new BinaryReader(data)));
  }

  updateCampaign(request: UpdateCampaignRequest): Promise<UpdateCampaignResponse> {
    const data = UpdateCampaignRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "updateCampaign", data);
    return promise.then((data) => UpdateCampaignResponse.decode(new BinaryReader(data)));
  }

  deleteCampaign(request: DeleteCampaignRequest): Promise<DeleteCampaignResponse> {
    const data = DeleteCampaignRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "deleteCampaign", data);
    return promise.then((data) => DeleteCampaignResponse.decode(new BinaryReader(data)));
  }

  search(request: SearchCampaignRequest): Promise<SearchCampaignResponse> {
    const data = SearchCampaignRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "search", data);
    return promise.then((data) => SearchCampaignResponse.decode(new BinaryReader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

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