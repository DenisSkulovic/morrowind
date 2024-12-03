// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.4.2
//   protoc               v3.20.3
// source: content.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import {
  AddictionDTO,
  BackgroundDTO,
  BirthsignDTO,
  CharacterDTO,
  CharacterGenInstructionDTO,
  CharacterGroupGenInstructionDTO,
  CharacterMemoryDTO,
  CharacterProfessionDTO,
  ContextDTO,
  DataSourceEnumDTO,
  dataSourceEnumDTOFromJSON,
  dataSourceEnumDTOToJSON,
  DiseaseDTO,
  EffectDTO,
  EquipmentSlotDTO,
  FactDTO,
  FactionDTO,
  ItemDTO,
  ItemSetDTO,
  MemoryDTO,
  MemoryPoolDTO,
  MemoryPoolEntryDTO,
  MoodDTO,
  NeedDTO,
  PastExperienceDTO,
  PersonalityProfileDTO,
  RaceDTO,
  ReligionDTO,
  ResistanceDTO,
  SkillDTO,
  SkillSetDTO,
  StatusDTO,
  StorageSlotDTO,
  TagDTO,
  TraitDTO,
} from "./common";

export const protobufPackage = "content";

export interface CreateContentRequest {
  source: DataSourceEnumDTO;
  contentBody: ContentBodyDTO | undefined;
  entityName: string;
  context: ContextDTO | undefined;
}

export interface CreateContentResponse {
}

export interface ContentBodyDTO {
  Item?: ItemDTO | undefined;
  PastExperience?: PastExperienceDTO | undefined;
  CharacterMemory?: CharacterMemoryDTO | undefined;
  Memory?: MemoryDTO | undefined;
  MemoryPool?: MemoryPoolDTO | undefined;
  MemoryPoolEntry?: MemoryPoolEntryDTO | undefined;
  Skill?: SkillDTO | undefined;
  SkillSet?: SkillSetDTO | undefined;
  EquipmentSlot?: EquipmentSlotDTO | undefined;
  StorageSlot?: StorageSlotDTO | undefined;
  Trait?: TraitDTO | undefined;
  Addiction?: AddictionDTO | undefined;
  Background?: BackgroundDTO | undefined;
  Birthsign?: BirthsignDTO | undefined;
  Character?: CharacterDTO | undefined;
  CharacterGenInstruction?: CharacterGenInstructionDTO | undefined;
  CharacterGroupGenInstruction?: CharacterGroupGenInstructionDTO | undefined;
  CharacterProfession?: CharacterProfessionDTO | undefined;
  Disease?: DiseaseDTO | undefined;
  Effect?: EffectDTO | undefined;
  Fact?: FactDTO | undefined;
  Faction?: FactionDTO | undefined;
  ItemSet?: ItemSetDTO | undefined;
  Mood?: MoodDTO | undefined;
  Need?: NeedDTO | undefined;
  PersonalityProfile?: PersonalityProfileDTO | undefined;
  Race?: RaceDTO | undefined;
  Religion?: ReligionDTO | undefined;
  Resistance?: ResistanceDTO | undefined;
  Status?: StatusDTO | undefined;
  Tag?: TagDTO | undefined;
}

function createBaseCreateContentRequest(): CreateContentRequest {
  return { source: 0, contentBody: undefined, entityName: "", context: undefined };
}

export const CreateContentRequest: MessageFns<CreateContentRequest> = {
  encode(message: CreateContentRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.source !== 0) {
      writer.uint32(8).int32(message.source);
    }
    if (message.contentBody !== undefined) {
      ContentBodyDTO.encode(message.contentBody, writer.uint32(18).fork()).join();
    }
    if (message.entityName !== "") {
      writer.uint32(26).string(message.entityName);
    }
    if (message.context !== undefined) {
      ContextDTO.encode(message.context, writer.uint32(34).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CreateContentRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateContentRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.source = reader.int32() as any;
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.contentBody = ContentBodyDTO.decode(reader, reader.uint32());
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          message.entityName = reader.string();
          continue;
        }
        case 4: {
          if (tag !== 34) {
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

  fromJSON(object: any): CreateContentRequest {
    return {
      source: isSet(object.source) ? dataSourceEnumDTOFromJSON(object.source) : 0,
      contentBody: isSet(object.contentBody) ? ContentBodyDTO.fromJSON(object.contentBody) : undefined,
      entityName: isSet(object.entityName) ? globalThis.String(object.entityName) : "",
      context: isSet(object.context) ? ContextDTO.fromJSON(object.context) : undefined,
    };
  },

  toJSON(message: CreateContentRequest): unknown {
    const obj: any = {};
    if (message.source !== 0) {
      obj.source = dataSourceEnumDTOToJSON(message.source);
    }
    if (message.contentBody !== undefined) {
      obj.contentBody = ContentBodyDTO.toJSON(message.contentBody);
    }
    if (message.entityName !== "") {
      obj.entityName = message.entityName;
    }
    if (message.context !== undefined) {
      obj.context = ContextDTO.toJSON(message.context);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateContentRequest>, I>>(base?: I): CreateContentRequest {
    return CreateContentRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateContentRequest>, I>>(object: I): CreateContentRequest {
    const message = createBaseCreateContentRequest();
    message.source = object.source ?? 0;
    message.contentBody = (object.contentBody !== undefined && object.contentBody !== null)
      ? ContentBodyDTO.fromPartial(object.contentBody)
      : undefined;
    message.entityName = object.entityName ?? "";
    message.context = (object.context !== undefined && object.context !== null)
      ? ContextDTO.fromPartial(object.context)
      : undefined;
    return message;
  },
};

function createBaseCreateContentResponse(): CreateContentResponse {
  return {};
}

export const CreateContentResponse: MessageFns<CreateContentResponse> = {
  encode(_: CreateContentResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CreateContentResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateContentResponse();
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

  fromJSON(_: any): CreateContentResponse {
    return {};
  },

  toJSON(_: CreateContentResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateContentResponse>, I>>(base?: I): CreateContentResponse {
    return CreateContentResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateContentResponse>, I>>(_: I): CreateContentResponse {
    const message = createBaseCreateContentResponse();
    return message;
  },
};

function createBaseContentBodyDTO(): ContentBodyDTO {
  return {
    Item: undefined,
    PastExperience: undefined,
    CharacterMemory: undefined,
    Memory: undefined,
    MemoryPool: undefined,
    MemoryPoolEntry: undefined,
    Skill: undefined,
    SkillSet: undefined,
    EquipmentSlot: undefined,
    StorageSlot: undefined,
    Trait: undefined,
    Addiction: undefined,
    Background: undefined,
    Birthsign: undefined,
    Character: undefined,
    CharacterGenInstruction: undefined,
    CharacterGroupGenInstruction: undefined,
    CharacterProfession: undefined,
    Disease: undefined,
    Effect: undefined,
    Fact: undefined,
    Faction: undefined,
    ItemSet: undefined,
    Mood: undefined,
    Need: undefined,
    PersonalityProfile: undefined,
    Race: undefined,
    Religion: undefined,
    Resistance: undefined,
    Status: undefined,
    Tag: undefined,
  };
}

export const ContentBodyDTO: MessageFns<ContentBodyDTO> = {
  encode(message: ContentBodyDTO, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.Item !== undefined) {
      ItemDTO.encode(message.Item, writer.uint32(10).fork()).join();
    }
    if (message.PastExperience !== undefined) {
      PastExperienceDTO.encode(message.PastExperience, writer.uint32(18).fork()).join();
    }
    if (message.CharacterMemory !== undefined) {
      CharacterMemoryDTO.encode(message.CharacterMemory, writer.uint32(26).fork()).join();
    }
    if (message.Memory !== undefined) {
      MemoryDTO.encode(message.Memory, writer.uint32(34).fork()).join();
    }
    if (message.MemoryPool !== undefined) {
      MemoryPoolDTO.encode(message.MemoryPool, writer.uint32(42).fork()).join();
    }
    if (message.MemoryPoolEntry !== undefined) {
      MemoryPoolEntryDTO.encode(message.MemoryPoolEntry, writer.uint32(50).fork()).join();
    }
    if (message.Skill !== undefined) {
      SkillDTO.encode(message.Skill, writer.uint32(58).fork()).join();
    }
    if (message.SkillSet !== undefined) {
      SkillSetDTO.encode(message.SkillSet, writer.uint32(66).fork()).join();
    }
    if (message.EquipmentSlot !== undefined) {
      EquipmentSlotDTO.encode(message.EquipmentSlot, writer.uint32(74).fork()).join();
    }
    if (message.StorageSlot !== undefined) {
      StorageSlotDTO.encode(message.StorageSlot, writer.uint32(82).fork()).join();
    }
    if (message.Trait !== undefined) {
      TraitDTO.encode(message.Trait, writer.uint32(90).fork()).join();
    }
    if (message.Addiction !== undefined) {
      AddictionDTO.encode(message.Addiction, writer.uint32(98).fork()).join();
    }
    if (message.Background !== undefined) {
      BackgroundDTO.encode(message.Background, writer.uint32(106).fork()).join();
    }
    if (message.Birthsign !== undefined) {
      BirthsignDTO.encode(message.Birthsign, writer.uint32(114).fork()).join();
    }
    if (message.Character !== undefined) {
      CharacterDTO.encode(message.Character, writer.uint32(122).fork()).join();
    }
    if (message.CharacterGenInstruction !== undefined) {
      CharacterGenInstructionDTO.encode(message.CharacterGenInstruction, writer.uint32(130).fork()).join();
    }
    if (message.CharacterGroupGenInstruction !== undefined) {
      CharacterGroupGenInstructionDTO.encode(message.CharacterGroupGenInstruction, writer.uint32(138).fork()).join();
    }
    if (message.CharacterProfession !== undefined) {
      CharacterProfessionDTO.encode(message.CharacterProfession, writer.uint32(146).fork()).join();
    }
    if (message.Disease !== undefined) {
      DiseaseDTO.encode(message.Disease, writer.uint32(154).fork()).join();
    }
    if (message.Effect !== undefined) {
      EffectDTO.encode(message.Effect, writer.uint32(162).fork()).join();
    }
    if (message.Fact !== undefined) {
      FactDTO.encode(message.Fact, writer.uint32(170).fork()).join();
    }
    if (message.Faction !== undefined) {
      FactionDTO.encode(message.Faction, writer.uint32(178).fork()).join();
    }
    if (message.ItemSet !== undefined) {
      ItemSetDTO.encode(message.ItemSet, writer.uint32(186).fork()).join();
    }
    if (message.Mood !== undefined) {
      MoodDTO.encode(message.Mood, writer.uint32(194).fork()).join();
    }
    if (message.Need !== undefined) {
      NeedDTO.encode(message.Need, writer.uint32(202).fork()).join();
    }
    if (message.PersonalityProfile !== undefined) {
      PersonalityProfileDTO.encode(message.PersonalityProfile, writer.uint32(210).fork()).join();
    }
    if (message.Race !== undefined) {
      RaceDTO.encode(message.Race, writer.uint32(218).fork()).join();
    }
    if (message.Religion !== undefined) {
      ReligionDTO.encode(message.Religion, writer.uint32(226).fork()).join();
    }
    if (message.Resistance !== undefined) {
      ResistanceDTO.encode(message.Resistance, writer.uint32(234).fork()).join();
    }
    if (message.Status !== undefined) {
      StatusDTO.encode(message.Status, writer.uint32(242).fork()).join();
    }
    if (message.Tag !== undefined) {
      TagDTO.encode(message.Tag, writer.uint32(250).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ContentBodyDTO {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContentBodyDTO();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.Item = ItemDTO.decode(reader, reader.uint32());
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.PastExperience = PastExperienceDTO.decode(reader, reader.uint32());
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          message.CharacterMemory = CharacterMemoryDTO.decode(reader, reader.uint32());
          continue;
        }
        case 4: {
          if (tag !== 34) {
            break;
          }

          message.Memory = MemoryDTO.decode(reader, reader.uint32());
          continue;
        }
        case 5: {
          if (tag !== 42) {
            break;
          }

          message.MemoryPool = MemoryPoolDTO.decode(reader, reader.uint32());
          continue;
        }
        case 6: {
          if (tag !== 50) {
            break;
          }

          message.MemoryPoolEntry = MemoryPoolEntryDTO.decode(reader, reader.uint32());
          continue;
        }
        case 7: {
          if (tag !== 58) {
            break;
          }

          message.Skill = SkillDTO.decode(reader, reader.uint32());
          continue;
        }
        case 8: {
          if (tag !== 66) {
            break;
          }

          message.SkillSet = SkillSetDTO.decode(reader, reader.uint32());
          continue;
        }
        case 9: {
          if (tag !== 74) {
            break;
          }

          message.EquipmentSlot = EquipmentSlotDTO.decode(reader, reader.uint32());
          continue;
        }
        case 10: {
          if (tag !== 82) {
            break;
          }

          message.StorageSlot = StorageSlotDTO.decode(reader, reader.uint32());
          continue;
        }
        case 11: {
          if (tag !== 90) {
            break;
          }

          message.Trait = TraitDTO.decode(reader, reader.uint32());
          continue;
        }
        case 12: {
          if (tag !== 98) {
            break;
          }

          message.Addiction = AddictionDTO.decode(reader, reader.uint32());
          continue;
        }
        case 13: {
          if (tag !== 106) {
            break;
          }

          message.Background = BackgroundDTO.decode(reader, reader.uint32());
          continue;
        }
        case 14: {
          if (tag !== 114) {
            break;
          }

          message.Birthsign = BirthsignDTO.decode(reader, reader.uint32());
          continue;
        }
        case 15: {
          if (tag !== 122) {
            break;
          }

          message.Character = CharacterDTO.decode(reader, reader.uint32());
          continue;
        }
        case 16: {
          if (tag !== 130) {
            break;
          }

          message.CharacterGenInstruction = CharacterGenInstructionDTO.decode(reader, reader.uint32());
          continue;
        }
        case 17: {
          if (tag !== 138) {
            break;
          }

          message.CharacterGroupGenInstruction = CharacterGroupGenInstructionDTO.decode(reader, reader.uint32());
          continue;
        }
        case 18: {
          if (tag !== 146) {
            break;
          }

          message.CharacterProfession = CharacterProfessionDTO.decode(reader, reader.uint32());
          continue;
        }
        case 19: {
          if (tag !== 154) {
            break;
          }

          message.Disease = DiseaseDTO.decode(reader, reader.uint32());
          continue;
        }
        case 20: {
          if (tag !== 162) {
            break;
          }

          message.Effect = EffectDTO.decode(reader, reader.uint32());
          continue;
        }
        case 21: {
          if (tag !== 170) {
            break;
          }

          message.Fact = FactDTO.decode(reader, reader.uint32());
          continue;
        }
        case 22: {
          if (tag !== 178) {
            break;
          }

          message.Faction = FactionDTO.decode(reader, reader.uint32());
          continue;
        }
        case 23: {
          if (tag !== 186) {
            break;
          }

          message.ItemSet = ItemSetDTO.decode(reader, reader.uint32());
          continue;
        }
        case 24: {
          if (tag !== 194) {
            break;
          }

          message.Mood = MoodDTO.decode(reader, reader.uint32());
          continue;
        }
        case 25: {
          if (tag !== 202) {
            break;
          }

          message.Need = NeedDTO.decode(reader, reader.uint32());
          continue;
        }
        case 26: {
          if (tag !== 210) {
            break;
          }

          message.PersonalityProfile = PersonalityProfileDTO.decode(reader, reader.uint32());
          continue;
        }
        case 27: {
          if (tag !== 218) {
            break;
          }

          message.Race = RaceDTO.decode(reader, reader.uint32());
          continue;
        }
        case 28: {
          if (tag !== 226) {
            break;
          }

          message.Religion = ReligionDTO.decode(reader, reader.uint32());
          continue;
        }
        case 29: {
          if (tag !== 234) {
            break;
          }

          message.Resistance = ResistanceDTO.decode(reader, reader.uint32());
          continue;
        }
        case 30: {
          if (tag !== 242) {
            break;
          }

          message.Status = StatusDTO.decode(reader, reader.uint32());
          continue;
        }
        case 31: {
          if (tag !== 250) {
            break;
          }

          message.Tag = TagDTO.decode(reader, reader.uint32());
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

  fromJSON(object: any): ContentBodyDTO {
    return {
      Item: isSet(object.Item) ? ItemDTO.fromJSON(object.Item) : undefined,
      PastExperience: isSet(object.PastExperience) ? PastExperienceDTO.fromJSON(object.PastExperience) : undefined,
      CharacterMemory: isSet(object.CharacterMemory) ? CharacterMemoryDTO.fromJSON(object.CharacterMemory) : undefined,
      Memory: isSet(object.Memory) ? MemoryDTO.fromJSON(object.Memory) : undefined,
      MemoryPool: isSet(object.MemoryPool) ? MemoryPoolDTO.fromJSON(object.MemoryPool) : undefined,
      MemoryPoolEntry: isSet(object.MemoryPoolEntry) ? MemoryPoolEntryDTO.fromJSON(object.MemoryPoolEntry) : undefined,
      Skill: isSet(object.Skill) ? SkillDTO.fromJSON(object.Skill) : undefined,
      SkillSet: isSet(object.SkillSet) ? SkillSetDTO.fromJSON(object.SkillSet) : undefined,
      EquipmentSlot: isSet(object.EquipmentSlot) ? EquipmentSlotDTO.fromJSON(object.EquipmentSlot) : undefined,
      StorageSlot: isSet(object.StorageSlot) ? StorageSlotDTO.fromJSON(object.StorageSlot) : undefined,
      Trait: isSet(object.Trait) ? TraitDTO.fromJSON(object.Trait) : undefined,
      Addiction: isSet(object.Addiction) ? AddictionDTO.fromJSON(object.Addiction) : undefined,
      Background: isSet(object.Background) ? BackgroundDTO.fromJSON(object.Background) : undefined,
      Birthsign: isSet(object.Birthsign) ? BirthsignDTO.fromJSON(object.Birthsign) : undefined,
      Character: isSet(object.Character) ? CharacterDTO.fromJSON(object.Character) : undefined,
      CharacterGenInstruction: isSet(object.CharacterGenInstruction)
        ? CharacterGenInstructionDTO.fromJSON(object.CharacterGenInstruction)
        : undefined,
      CharacterGroupGenInstruction: isSet(object.CharacterGroupGenInstruction)
        ? CharacterGroupGenInstructionDTO.fromJSON(object.CharacterGroupGenInstruction)
        : undefined,
      CharacterProfession: isSet(object.CharacterProfession)
        ? CharacterProfessionDTO.fromJSON(object.CharacterProfession)
        : undefined,
      Disease: isSet(object.Disease) ? DiseaseDTO.fromJSON(object.Disease) : undefined,
      Effect: isSet(object.Effect) ? EffectDTO.fromJSON(object.Effect) : undefined,
      Fact: isSet(object.Fact) ? FactDTO.fromJSON(object.Fact) : undefined,
      Faction: isSet(object.Faction) ? FactionDTO.fromJSON(object.Faction) : undefined,
      ItemSet: isSet(object.ItemSet) ? ItemSetDTO.fromJSON(object.ItemSet) : undefined,
      Mood: isSet(object.Mood) ? MoodDTO.fromJSON(object.Mood) : undefined,
      Need: isSet(object.Need) ? NeedDTO.fromJSON(object.Need) : undefined,
      PersonalityProfile: isSet(object.PersonalityProfile)
        ? PersonalityProfileDTO.fromJSON(object.PersonalityProfile)
        : undefined,
      Race: isSet(object.Race) ? RaceDTO.fromJSON(object.Race) : undefined,
      Religion: isSet(object.Religion) ? ReligionDTO.fromJSON(object.Religion) : undefined,
      Resistance: isSet(object.Resistance) ? ResistanceDTO.fromJSON(object.Resistance) : undefined,
      Status: isSet(object.Status) ? StatusDTO.fromJSON(object.Status) : undefined,
      Tag: isSet(object.Tag) ? TagDTO.fromJSON(object.Tag) : undefined,
    };
  },

  toJSON(message: ContentBodyDTO): unknown {
    const obj: any = {};
    if (message.Item !== undefined) {
      obj.Item = ItemDTO.toJSON(message.Item);
    }
    if (message.PastExperience !== undefined) {
      obj.PastExperience = PastExperienceDTO.toJSON(message.PastExperience);
    }
    if (message.CharacterMemory !== undefined) {
      obj.CharacterMemory = CharacterMemoryDTO.toJSON(message.CharacterMemory);
    }
    if (message.Memory !== undefined) {
      obj.Memory = MemoryDTO.toJSON(message.Memory);
    }
    if (message.MemoryPool !== undefined) {
      obj.MemoryPool = MemoryPoolDTO.toJSON(message.MemoryPool);
    }
    if (message.MemoryPoolEntry !== undefined) {
      obj.MemoryPoolEntry = MemoryPoolEntryDTO.toJSON(message.MemoryPoolEntry);
    }
    if (message.Skill !== undefined) {
      obj.Skill = SkillDTO.toJSON(message.Skill);
    }
    if (message.SkillSet !== undefined) {
      obj.SkillSet = SkillSetDTO.toJSON(message.SkillSet);
    }
    if (message.EquipmentSlot !== undefined) {
      obj.EquipmentSlot = EquipmentSlotDTO.toJSON(message.EquipmentSlot);
    }
    if (message.StorageSlot !== undefined) {
      obj.StorageSlot = StorageSlotDTO.toJSON(message.StorageSlot);
    }
    if (message.Trait !== undefined) {
      obj.Trait = TraitDTO.toJSON(message.Trait);
    }
    if (message.Addiction !== undefined) {
      obj.Addiction = AddictionDTO.toJSON(message.Addiction);
    }
    if (message.Background !== undefined) {
      obj.Background = BackgroundDTO.toJSON(message.Background);
    }
    if (message.Birthsign !== undefined) {
      obj.Birthsign = BirthsignDTO.toJSON(message.Birthsign);
    }
    if (message.Character !== undefined) {
      obj.Character = CharacterDTO.toJSON(message.Character);
    }
    if (message.CharacterGenInstruction !== undefined) {
      obj.CharacterGenInstruction = CharacterGenInstructionDTO.toJSON(message.CharacterGenInstruction);
    }
    if (message.CharacterGroupGenInstruction !== undefined) {
      obj.CharacterGroupGenInstruction = CharacterGroupGenInstructionDTO.toJSON(message.CharacterGroupGenInstruction);
    }
    if (message.CharacterProfession !== undefined) {
      obj.CharacterProfession = CharacterProfessionDTO.toJSON(message.CharacterProfession);
    }
    if (message.Disease !== undefined) {
      obj.Disease = DiseaseDTO.toJSON(message.Disease);
    }
    if (message.Effect !== undefined) {
      obj.Effect = EffectDTO.toJSON(message.Effect);
    }
    if (message.Fact !== undefined) {
      obj.Fact = FactDTO.toJSON(message.Fact);
    }
    if (message.Faction !== undefined) {
      obj.Faction = FactionDTO.toJSON(message.Faction);
    }
    if (message.ItemSet !== undefined) {
      obj.ItemSet = ItemSetDTO.toJSON(message.ItemSet);
    }
    if (message.Mood !== undefined) {
      obj.Mood = MoodDTO.toJSON(message.Mood);
    }
    if (message.Need !== undefined) {
      obj.Need = NeedDTO.toJSON(message.Need);
    }
    if (message.PersonalityProfile !== undefined) {
      obj.PersonalityProfile = PersonalityProfileDTO.toJSON(message.PersonalityProfile);
    }
    if (message.Race !== undefined) {
      obj.Race = RaceDTO.toJSON(message.Race);
    }
    if (message.Religion !== undefined) {
      obj.Religion = ReligionDTO.toJSON(message.Religion);
    }
    if (message.Resistance !== undefined) {
      obj.Resistance = ResistanceDTO.toJSON(message.Resistance);
    }
    if (message.Status !== undefined) {
      obj.Status = StatusDTO.toJSON(message.Status);
    }
    if (message.Tag !== undefined) {
      obj.Tag = TagDTO.toJSON(message.Tag);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ContentBodyDTO>, I>>(base?: I): ContentBodyDTO {
    return ContentBodyDTO.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ContentBodyDTO>, I>>(object: I): ContentBodyDTO {
    const message = createBaseContentBodyDTO();
    message.Item = (object.Item !== undefined && object.Item !== null) ? ItemDTO.fromPartial(object.Item) : undefined;
    message.PastExperience = (object.PastExperience !== undefined && object.PastExperience !== null)
      ? PastExperienceDTO.fromPartial(object.PastExperience)
      : undefined;
    message.CharacterMemory = (object.CharacterMemory !== undefined && object.CharacterMemory !== null)
      ? CharacterMemoryDTO.fromPartial(object.CharacterMemory)
      : undefined;
    message.Memory = (object.Memory !== undefined && object.Memory !== null)
      ? MemoryDTO.fromPartial(object.Memory)
      : undefined;
    message.MemoryPool = (object.MemoryPool !== undefined && object.MemoryPool !== null)
      ? MemoryPoolDTO.fromPartial(object.MemoryPool)
      : undefined;
    message.MemoryPoolEntry = (object.MemoryPoolEntry !== undefined && object.MemoryPoolEntry !== null)
      ? MemoryPoolEntryDTO.fromPartial(object.MemoryPoolEntry)
      : undefined;
    message.Skill = (object.Skill !== undefined && object.Skill !== null)
      ? SkillDTO.fromPartial(object.Skill)
      : undefined;
    message.SkillSet = (object.SkillSet !== undefined && object.SkillSet !== null)
      ? SkillSetDTO.fromPartial(object.SkillSet)
      : undefined;
    message.EquipmentSlot = (object.EquipmentSlot !== undefined && object.EquipmentSlot !== null)
      ? EquipmentSlotDTO.fromPartial(object.EquipmentSlot)
      : undefined;
    message.StorageSlot = (object.StorageSlot !== undefined && object.StorageSlot !== null)
      ? StorageSlotDTO.fromPartial(object.StorageSlot)
      : undefined;
    message.Trait = (object.Trait !== undefined && object.Trait !== null)
      ? TraitDTO.fromPartial(object.Trait)
      : undefined;
    message.Addiction = (object.Addiction !== undefined && object.Addiction !== null)
      ? AddictionDTO.fromPartial(object.Addiction)
      : undefined;
    message.Background = (object.Background !== undefined && object.Background !== null)
      ? BackgroundDTO.fromPartial(object.Background)
      : undefined;
    message.Birthsign = (object.Birthsign !== undefined && object.Birthsign !== null)
      ? BirthsignDTO.fromPartial(object.Birthsign)
      : undefined;
    message.Character = (object.Character !== undefined && object.Character !== null)
      ? CharacterDTO.fromPartial(object.Character)
      : undefined;
    message.CharacterGenInstruction =
      (object.CharacterGenInstruction !== undefined && object.CharacterGenInstruction !== null)
        ? CharacterGenInstructionDTO.fromPartial(object.CharacterGenInstruction)
        : undefined;
    message.CharacterGroupGenInstruction =
      (object.CharacterGroupGenInstruction !== undefined && object.CharacterGroupGenInstruction !== null)
        ? CharacterGroupGenInstructionDTO.fromPartial(object.CharacterGroupGenInstruction)
        : undefined;
    message.CharacterProfession = (object.CharacterProfession !== undefined && object.CharacterProfession !== null)
      ? CharacterProfessionDTO.fromPartial(object.CharacterProfession)
      : undefined;
    message.Disease = (object.Disease !== undefined && object.Disease !== null)
      ? DiseaseDTO.fromPartial(object.Disease)
      : undefined;
    message.Effect = (object.Effect !== undefined && object.Effect !== null)
      ? EffectDTO.fromPartial(object.Effect)
      : undefined;
    message.Fact = (object.Fact !== undefined && object.Fact !== null) ? FactDTO.fromPartial(object.Fact) : undefined;
    message.Faction = (object.Faction !== undefined && object.Faction !== null)
      ? FactionDTO.fromPartial(object.Faction)
      : undefined;
    message.ItemSet = (object.ItemSet !== undefined && object.ItemSet !== null)
      ? ItemSetDTO.fromPartial(object.ItemSet)
      : undefined;
    message.Mood = (object.Mood !== undefined && object.Mood !== null) ? MoodDTO.fromPartial(object.Mood) : undefined;
    message.Need = (object.Need !== undefined && object.Need !== null) ? NeedDTO.fromPartial(object.Need) : undefined;
    message.PersonalityProfile = (object.PersonalityProfile !== undefined && object.PersonalityProfile !== null)
      ? PersonalityProfileDTO.fromPartial(object.PersonalityProfile)
      : undefined;
    message.Race = (object.Race !== undefined && object.Race !== null) ? RaceDTO.fromPartial(object.Race) : undefined;
    message.Religion = (object.Religion !== undefined && object.Religion !== null)
      ? ReligionDTO.fromPartial(object.Religion)
      : undefined;
    message.Resistance = (object.Resistance !== undefined && object.Resistance !== null)
      ? ResistanceDTO.fromPartial(object.Resistance)
      : undefined;
    message.Status = (object.Status !== undefined && object.Status !== null)
      ? StatusDTO.fromPartial(object.Status)
      : undefined;
    message.Tag = (object.Tag !== undefined && object.Tag !== null) ? TagDTO.fromPartial(object.Tag) : undefined;
    return message;
  },
};

export interface ContentService {
  create(request: CreateContentRequest): Promise<CreateContentResponse>;
}

export const ContentServiceServiceName = "content.ContentService";
export class ContentServiceClientImpl implements ContentService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || ContentServiceServiceName;
    this.rpc = rpc;
    this.create = this.create.bind(this);
  }
  create(request: CreateContentRequest): Promise<CreateContentResponse> {
    const data = CreateContentRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "create", data);
    return promise.then((data) => CreateContentResponse.decode(new BinaryReader(data)));
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
