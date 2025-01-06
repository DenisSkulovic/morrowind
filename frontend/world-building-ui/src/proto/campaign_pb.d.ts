import * as jspb from 'google-protobuf'

import * as entities_pb from './entities_pb'; // proto import: "entities.proto"


export class UpdateCampaignRequest extends jspb.Message {
  getCampaign(): entities_pb.CampaignDTO | undefined;
  setCampaign(value?: entities_pb.CampaignDTO): UpdateCampaignRequest;
  hasCampaign(): boolean;
  clearCampaign(): UpdateCampaignRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCampaignRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCampaignRequest): UpdateCampaignRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateCampaignRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCampaignRequest;
  static deserializeBinaryFromReader(message: UpdateCampaignRequest, reader: jspb.BinaryReader): UpdateCampaignRequest;
}

export namespace UpdateCampaignRequest {
  export type AsObject = {
    campaign?: entities_pb.CampaignDTO.AsObject,
  }
}

export class UpdateCampaignResponse extends jspb.Message {
  getCampaign(): entities_pb.CampaignDTO | undefined;
  setCampaign(value?: entities_pb.CampaignDTO): UpdateCampaignResponse;
  hasCampaign(): boolean;
  clearCampaign(): UpdateCampaignResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCampaignResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCampaignResponse): UpdateCampaignResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateCampaignResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCampaignResponse;
  static deserializeBinaryFromReader(message: UpdateCampaignResponse, reader: jspb.BinaryReader): UpdateCampaignResponse;
}

export namespace UpdateCampaignResponse {
  export type AsObject = {
    campaign?: entities_pb.CampaignDTO.AsObject,
  }
}

export class CreateCampaignRequest extends jspb.Message {
  getCampaign(): entities_pb.CampaignDTO | undefined;
  setCampaign(value?: entities_pb.CampaignDTO): CreateCampaignRequest;
  hasCampaign(): boolean;
  clearCampaign(): CreateCampaignRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCampaignRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCampaignRequest): CreateCampaignRequest.AsObject;
  static serializeBinaryToWriter(message: CreateCampaignRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCampaignRequest;
  static deserializeBinaryFromReader(message: CreateCampaignRequest, reader: jspb.BinaryReader): CreateCampaignRequest;
}

export namespace CreateCampaignRequest {
  export type AsObject = {
    campaign?: entities_pb.CampaignDTO.AsObject,
  }
}

export class CreateCampaignResponse extends jspb.Message {
  getCampaign(): entities_pb.CampaignDTO | undefined;
  setCampaign(value?: entities_pb.CampaignDTO): CreateCampaignResponse;
  hasCampaign(): boolean;
  clearCampaign(): CreateCampaignResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCampaignResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCampaignResponse): CreateCampaignResponse.AsObject;
  static serializeBinaryToWriter(message: CreateCampaignResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCampaignResponse;
  static deserializeBinaryFromReader(message: CreateCampaignResponse, reader: jspb.BinaryReader): CreateCampaignResponse;
}

export namespace CreateCampaignResponse {
  export type AsObject = {
    campaign?: entities_pb.CampaignDTO.AsObject,
  }
}

export class GetCampaignRequest extends jspb.Message {
  getCampaignid(): string;
  setCampaignid(value: string): GetCampaignRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCampaignRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCampaignRequest): GetCampaignRequest.AsObject;
  static serializeBinaryToWriter(message: GetCampaignRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCampaignRequest;
  static deserializeBinaryFromReader(message: GetCampaignRequest, reader: jspb.BinaryReader): GetCampaignRequest;
}

export namespace GetCampaignRequest {
  export type AsObject = {
    campaignid: string,
  }
}

export class GetCampaignResponse extends jspb.Message {
  getCampaign(): entities_pb.CampaignDTO | undefined;
  setCampaign(value?: entities_pb.CampaignDTO): GetCampaignResponse;
  hasCampaign(): boolean;
  clearCampaign(): GetCampaignResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCampaignResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetCampaignResponse): GetCampaignResponse.AsObject;
  static serializeBinaryToWriter(message: GetCampaignResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCampaignResponse;
  static deserializeBinaryFromReader(message: GetCampaignResponse, reader: jspb.BinaryReader): GetCampaignResponse;
}

export namespace GetCampaignResponse {
  export type AsObject = {
    campaign?: entities_pb.CampaignDTO.AsObject,
  }
}

export class DeleteCampaignRequest extends jspb.Message {
  getCampaignid(): string;
  setCampaignid(value: string): DeleteCampaignRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteCampaignRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteCampaignRequest): DeleteCampaignRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteCampaignRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteCampaignRequest;
  static deserializeBinaryFromReader(message: DeleteCampaignRequest, reader: jspb.BinaryReader): DeleteCampaignRequest;
}

export namespace DeleteCampaignRequest {
  export type AsObject = {
    campaignid: string,
  }
}

export class DeleteCampaignResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteCampaignResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteCampaignResponse): DeleteCampaignResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteCampaignResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteCampaignResponse;
  static deserializeBinaryFromReader(message: DeleteCampaignResponse, reader: jspb.BinaryReader): DeleteCampaignResponse;
}

export namespace DeleteCampaignResponse {
  export type AsObject = {
  }
}

export class SearchCampaignRequest extends jspb.Message {
  getEntityname(): string;
  setEntityname(value: string): SearchCampaignRequest;

  getQuery(): entities_pb.SearchQueryDTO | undefined;
  setQuery(value?: entities_pb.SearchQueryDTO): SearchCampaignRequest;
  hasQuery(): boolean;
  clearQuery(): SearchCampaignRequest;

  getContext(): entities_pb.ContextDTO | undefined;
  setContext(value?: entities_pb.ContextDTO): SearchCampaignRequest;
  hasContext(): boolean;
  clearContext(): SearchCampaignRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchCampaignRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SearchCampaignRequest): SearchCampaignRequest.AsObject;
  static serializeBinaryToWriter(message: SearchCampaignRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchCampaignRequest;
  static deserializeBinaryFromReader(message: SearchCampaignRequest, reader: jspb.BinaryReader): SearchCampaignRequest;
}

export namespace SearchCampaignRequest {
  export type AsObject = {
    entityname: string,
    query?: entities_pb.SearchQueryDTO.AsObject,
    context?: entities_pb.ContextDTO.AsObject,
  }
}

export class SearchCampaignResponse extends jspb.Message {
  getCampaignsList(): Array<entities_pb.CampaignDTO>;
  setCampaignsList(value: Array<entities_pb.CampaignDTO>): SearchCampaignResponse;
  clearCampaignsList(): SearchCampaignResponse;
  addCampaigns(value?: entities_pb.CampaignDTO, index?: number): entities_pb.CampaignDTO;

  getTotalresults(): number;
  setTotalresults(value: number): SearchCampaignResponse;

  getTotalpages(): number;
  setTotalpages(value: number): SearchCampaignResponse;

  getCurrentpage(): number;
  setCurrentpage(value: number): SearchCampaignResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchCampaignResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SearchCampaignResponse): SearchCampaignResponse.AsObject;
  static serializeBinaryToWriter(message: SearchCampaignResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchCampaignResponse;
  static deserializeBinaryFromReader(message: SearchCampaignResponse, reader: jspb.BinaryReader): SearchCampaignResponse;
}

export namespace SearchCampaignResponse {
  export type AsObject = {
    campaignsList: Array<entities_pb.CampaignDTO.AsObject>,
    totalresults: number,
    totalpages: number,
    currentpage: number,
  }
}

