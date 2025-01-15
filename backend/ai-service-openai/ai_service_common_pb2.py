# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# NO CHECKED-IN PROTOBUF GENCODE
# source: ai_service_common.proto
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
    'ai_service_common.proto'
)
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x17\x61i_service_common.proto\x12\x11\x61i_service_common\"\x9c\x01\n\tAiRequest\x12\x11\n\trequestId\x18\x01 \x01(\t\x12\x0e\n\x06prompt\x18\x02 \x01(\t\x12\x36\n\x08metadata\x18\x03 \x01(\x0b\x32$.ai_service_common.AiRequestMetadata\x12\x34\n\x07options\x18\x04 \x01(\x0b\x32#.ai_service_common.AiRequestOptions\"7\n\x11\x41iRequestMetadata\x12\x11\n\ttimestamp\x18\x01 \x01(\x03\x12\x0f\n\x07useCase\x18\x02 \x01(\t\"Z\n\x10\x41iRequestOptions\x12\r\n\x05model\x18\x01 \x01(\t\x12\x13\n\x0btemperature\x18\x02 \x01(\x02\x12\x11\n\tmaxTokens\x18\x03 \x01(\x05\x12\x0f\n\x07timeout\x18\x04 \x01(\x05\"B\n\nAiResponse\x12\x0e\n\x06output\x18\x01 \x01(\t\x12\x14\n\x0c\x65rrorMessage\x18\x02 \x01(\t\x12\x0e\n\x06isLast\x18\x03 \x01(\x08\"I\n\x12\x41iResponseMetadata\x12\x11\n\ttimestamp\x18\x01 \x01(\x03\x12\x0f\n\x07useCase\x18\x02 \x01(\t\x12\x0f\n\x07\x63ontext\x18\x03 \x01(\t\"%\n\x10InterruptRequest\x12\x11\n\trequestId\x18\x01 \x01(\t\"X\n\x11InterruptResponse\x12\x11\n\trequestId\x18\x01 \x01(\t\x12\x0f\n\x07success\x18\x02 \x01(\x08\x12\x0e\n\x06status\x18\x03 \x01(\t\x12\x0f\n\x07message\x18\x04 \x01(\t\"\'\n\x12\x43heckStatusRequest\x12\x11\n\trequestId\x18\x01 \x01(\t\"M\n\x13\x43heckStatusResponse\x12\x36\n\x06status\x18\x01 \x01(\x0e\x32&.ai_service_common.AiTaskStatusEnumDTO*L\n\x13\x41iTaskStatusEnumDTO\x12\n\n\x06QUEUED\x10\x00\x12\x0e\n\nPROCESSING\x10\x01\x12\r\n\tCOMPLETED\x10\x02\x12\n\n\x06\x46\x41ILED\x10\x03\x62\x06proto3')

_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'ai_service_common_pb2', _globals)
if not _descriptor._USE_C_DESCRIPTORS:
  DESCRIPTOR._loaded_options = None
  _globals['_AITASKSTATUSENUMDTO']._serialized_start=746
  _globals['_AITASKSTATUSENUMDTO']._serialized_end=822
  _globals['_AIREQUEST']._serialized_start=47
  _globals['_AIREQUEST']._serialized_end=203
  _globals['_AIREQUESTMETADATA']._serialized_start=205
  _globals['_AIREQUESTMETADATA']._serialized_end=260
  _globals['_AIREQUESTOPTIONS']._serialized_start=262
  _globals['_AIREQUESTOPTIONS']._serialized_end=352
  _globals['_AIRESPONSE']._serialized_start=354
  _globals['_AIRESPONSE']._serialized_end=420
  _globals['_AIRESPONSEMETADATA']._serialized_start=422
  _globals['_AIRESPONSEMETADATA']._serialized_end=495
  _globals['_INTERRUPTREQUEST']._serialized_start=497
  _globals['_INTERRUPTREQUEST']._serialized_end=534
  _globals['_INTERRUPTRESPONSE']._serialized_start=536
  _globals['_INTERRUPTRESPONSE']._serialized_end=624
  _globals['_CHECKSTATUSREQUEST']._serialized_start=626
  _globals['_CHECKSTATUSREQUEST']._serialized_end=665
  _globals['_CHECKSTATUSRESPONSE']._serialized_start=667
  _globals['_CHECKSTATUSRESPONSE']._serialized_end=744
# @@protoc_insertion_point(module_scope)