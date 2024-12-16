/**
 * @fileoverview gRPC-Web generated client stub for campaign
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.5.0
// 	protoc              v3.20.3
// source: campaign.proto


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as campaign_pb from './campaign_pb'; // proto import: "campaign.proto"


export class CampaignServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'binary';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname.replace(/\/+$/, '');
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorgetCampaign = new grpcWeb.MethodDescriptor(
    '/campaign.CampaignService/getCampaign',
    grpcWeb.MethodType.UNARY,
    campaign_pb.GetCampaignRequest,
    campaign_pb.GetCampaignResponse,
    (request: campaign_pb.GetCampaignRequest) => {
      return request.serializeBinary();
    },
    campaign_pb.GetCampaignResponse.deserializeBinary
  );

  getCampaign(
    request: campaign_pb.GetCampaignRequest,
    metadata?: grpcWeb.Metadata | null): Promise<campaign_pb.GetCampaignResponse>;

  getCampaign(
    request: campaign_pb.GetCampaignRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: campaign_pb.GetCampaignResponse) => void): grpcWeb.ClientReadableStream<campaign_pb.GetCampaignResponse>;

  getCampaign(
    request: campaign_pb.GetCampaignRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: campaign_pb.GetCampaignResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/campaign.CampaignService/getCampaign',
        request,
        metadata || {},
        this.methodDescriptorgetCampaign,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/campaign.CampaignService/getCampaign',
    request,
    metadata || {},
    this.methodDescriptorgetCampaign);
  }

  methodDescriptorcreateCampaign = new grpcWeb.MethodDescriptor(
    '/campaign.CampaignService/createCampaign',
    grpcWeb.MethodType.UNARY,
    campaign_pb.CreateCampaignRequest,
    campaign_pb.CreateCampaignResponse,
    (request: campaign_pb.CreateCampaignRequest) => {
      return request.serializeBinary();
    },
    campaign_pb.CreateCampaignResponse.deserializeBinary
  );

  createCampaign(
    request: campaign_pb.CreateCampaignRequest,
    metadata?: grpcWeb.Metadata | null): Promise<campaign_pb.CreateCampaignResponse>;

  createCampaign(
    request: campaign_pb.CreateCampaignRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: campaign_pb.CreateCampaignResponse) => void): grpcWeb.ClientReadableStream<campaign_pb.CreateCampaignResponse>;

  createCampaign(
    request: campaign_pb.CreateCampaignRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: campaign_pb.CreateCampaignResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/campaign.CampaignService/createCampaign',
        request,
        metadata || {},
        this.methodDescriptorcreateCampaign,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/campaign.CampaignService/createCampaign',
    request,
    metadata || {},
    this.methodDescriptorcreateCampaign);
  }

  methodDescriptorupdateCampaign = new grpcWeb.MethodDescriptor(
    '/campaign.CampaignService/updateCampaign',
    grpcWeb.MethodType.UNARY,
    campaign_pb.UpdateCampaignRequest,
    campaign_pb.UpdateCampaignResponse,
    (request: campaign_pb.UpdateCampaignRequest) => {
      return request.serializeBinary();
    },
    campaign_pb.UpdateCampaignResponse.deserializeBinary
  );

  updateCampaign(
    request: campaign_pb.UpdateCampaignRequest,
    metadata?: grpcWeb.Metadata | null): Promise<campaign_pb.UpdateCampaignResponse>;

  updateCampaign(
    request: campaign_pb.UpdateCampaignRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: campaign_pb.UpdateCampaignResponse) => void): grpcWeb.ClientReadableStream<campaign_pb.UpdateCampaignResponse>;

  updateCampaign(
    request: campaign_pb.UpdateCampaignRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: campaign_pb.UpdateCampaignResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/campaign.CampaignService/updateCampaign',
        request,
        metadata || {},
        this.methodDescriptorupdateCampaign,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/campaign.CampaignService/updateCampaign',
    request,
    metadata || {},
    this.methodDescriptorupdateCampaign);
  }

  methodDescriptordeleteCampaign = new grpcWeb.MethodDescriptor(
    '/campaign.CampaignService/deleteCampaign',
    grpcWeb.MethodType.UNARY,
    campaign_pb.DeleteCampaignRequest,
    campaign_pb.DeleteCampaignResponse,
    (request: campaign_pb.DeleteCampaignRequest) => {
      return request.serializeBinary();
    },
    campaign_pb.DeleteCampaignResponse.deserializeBinary
  );

  deleteCampaign(
    request: campaign_pb.DeleteCampaignRequest,
    metadata?: grpcWeb.Metadata | null): Promise<campaign_pb.DeleteCampaignResponse>;

  deleteCampaign(
    request: campaign_pb.DeleteCampaignRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: campaign_pb.DeleteCampaignResponse) => void): grpcWeb.ClientReadableStream<campaign_pb.DeleteCampaignResponse>;

  deleteCampaign(
    request: campaign_pb.DeleteCampaignRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: campaign_pb.DeleteCampaignResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/campaign.CampaignService/deleteCampaign',
        request,
        metadata || {},
        this.methodDescriptordeleteCampaign,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/campaign.CampaignService/deleteCampaign',
    request,
    metadata || {},
    this.methodDescriptordeleteCampaign);
  }

  methodDescriptorsearch = new grpcWeb.MethodDescriptor(
    '/campaign.CampaignService/search',
    grpcWeb.MethodType.UNARY,
    campaign_pb.SearchCampaignRequest,
    campaign_pb.SearchCampaignResponse,
    (request: campaign_pb.SearchCampaignRequest) => {
      return request.serializeBinary();
    },
    campaign_pb.SearchCampaignResponse.deserializeBinary
  );

  search(
    request: campaign_pb.SearchCampaignRequest,
    metadata?: grpcWeb.Metadata | null): Promise<campaign_pb.SearchCampaignResponse>;

  search(
    request: campaign_pb.SearchCampaignRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: campaign_pb.SearchCampaignResponse) => void): grpcWeb.ClientReadableStream<campaign_pb.SearchCampaignResponse>;

  search(
    request: campaign_pb.SearchCampaignRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: campaign_pb.SearchCampaignResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/campaign.CampaignService/search',
        request,
        metadata || {},
        this.methodDescriptorsearch,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/campaign.CampaignService/search',
    request,
    metadata || {},
    this.methodDescriptorsearch);
  }

}

