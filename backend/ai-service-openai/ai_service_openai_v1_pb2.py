# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# NO CHECKED-IN PROTOBUF GENCODE
# source: ai_service_openai_v1.proto
# Protobuf Python Version: 5.29.0
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import runtime_version as _runtime_version
from google.protobuf import symbol_database as _symbol_database
from google.protobuf.internal import builder as _builder
_runtime_version.ValidateProtobufRuntimeVersion(
    _runtime_version.Domain.PUBLIC,
    5,
    29,
    0,
    '',
    'ai_service_openai_v1.proto'
)
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


import ai_service_common_pb2 as ai__service__common__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x1a\x61i_service_openai_v1.proto\x12\x14\x61i_service_openai_v1\x1a\x17\x61i_service_common.proto2\xed\x02\n\x11\x41iServiceOpenAIv1\x12L\n\rProcessPrompt\x12\x1c.ai_service_common.AiRequest\x1a\x1d.ai_service_common.AiResponse\x12T\n\x13StreamProcessPrompt\x12\x1c.ai_service_common.AiRequest\x1a\x1d.ai_service_common.AiResponse0\x01\x12V\n\tInterrupt\x12#.ai_service_common.InterruptRequest\x1a$.ai_service_common.InterruptResponse\x12\\\n\x0b\x43heckStatus\x12%.ai_service_common.CheckStatusRequest\x1a&.ai_service_common.CheckStatusResponseb\x06proto3')

_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'ai_service_openai_v1_pb2', _globals)
if not _descriptor._USE_C_DESCRIPTORS:
  DESCRIPTOR._loaded_options = None
  _globals['_AISERVICEOPENAIV1']._serialized_start=78
  _globals['_AISERVICEOPENAIV1']._serialized_end=443
# @@protoc_insertion_point(module_scope)
