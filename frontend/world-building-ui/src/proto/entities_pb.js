// source: entities.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() { return this || window || global || self || Function('return this')(); }).call(null);

goog.exportSymbol('proto.entities.AccountDTO', null, global);
goog.exportSymbol('proto.entities.AddictionDTO', null, global);
goog.exportSymbol('proto.entities.AddictionsDTO', null, global);
goog.exportSymbol('proto.entities.BackgroundCustomizationDTO', null, global);
goog.exportSymbol('proto.entities.BackgroundDTO', null, global);
goog.exportSymbol('proto.entities.BackgroundsDTO', null, global);
goog.exportSymbol('proto.entities.BirthsignDTO', null, global);
goog.exportSymbol('proto.entities.BirthsignsDTO', null, global);
goog.exportSymbol('proto.entities.CampaignDTO', null, global);
goog.exportSymbol('proto.entities.CampaignsDTO', null, global);
goog.exportSymbol('proto.entities.CharacterDTO', null, global);
goog.exportSymbol('proto.entities.CharacterGenInstructionDTO', null, global);
goog.exportSymbol('proto.entities.CharacterGenInstructions', null, global);
goog.exportSymbol('proto.entities.CharacterGroupGenInstructionDTO', null, global);
goog.exportSymbol('proto.entities.CharacterGroupGenInstructionsDTO', null, global);
goog.exportSymbol('proto.entities.CharacterMemoriesDTO', null, global);
goog.exportSymbol('proto.entities.CharacterMemoryDTO', null, global);
goog.exportSymbol('proto.entities.CharacterProfessionDTO', null, global);
goog.exportSymbol('proto.entities.CharacterProfessionsDTO', null, global);
goog.exportSymbol('proto.entities.CharactersDTO', null, global);
goog.exportSymbol('proto.entities.CombinatorDTO', null, global);
goog.exportSymbol('proto.entities.ConditionEnumDTO', null, global);
goog.exportSymbol('proto.entities.ContextDTO', null, global);
goog.exportSymbol('proto.entities.DataSourceEnumDTO', null, global);
goog.exportSymbol('proto.entities.DiseaseDTO', null, global);
goog.exportSymbol('proto.entities.DiseaseSeverityEnumDTO', null, global);
goog.exportSymbol('proto.entities.DiseasesDTO', null, global);
goog.exportSymbol('proto.entities.EffectDTO', null, global);
goog.exportSymbol('proto.entities.EffectElementEnumDTO', null, global);
goog.exportSymbol('proto.entities.EffectModeEnumDTO', null, global);
goog.exportSymbol('proto.entities.EffectTargetEnumDTO', null, global);
goog.exportSymbol('proto.entities.EffectTypeEnumDTO', null, global);
goog.exportSymbol('proto.entities.EffectsDTO', null, global);
goog.exportSymbol('proto.entities.EquipmentSlotDTO', null, global);
goog.exportSymbol('proto.entities.EquipmentSlotDefinitionDTO', null, global);
goog.exportSymbol('proto.entities.EquipmentSlotDefinitionsDTO', null, global);
goog.exportSymbol('proto.entities.EquipmentSlotsDTO', null, global);
goog.exportSymbol('proto.entities.FactDTO', null, global);
goog.exportSymbol('proto.entities.FactStatusDTO', null, global);
goog.exportSymbol('proto.entities.FactStatusEnumDTO', null, global);
goog.exportSymbol('proto.entities.FactStatusesDTO', null, global);
goog.exportSymbol('proto.entities.FactionDTO', null, global);
goog.exportSymbol('proto.entities.FactionsDTO', null, global);
goog.exportSymbol('proto.entities.FactsDTO', null, global);
goog.exportSymbol('proto.entities.GaussianProbDTO', null, global);
goog.exportSymbol('proto.entities.GenderEnumDTO', null, global);
goog.exportSymbol('proto.entities.GenerationInstructionDTO', null, global);
goog.exportSymbol('proto.entities.GenerationInstructionDTO.InstructionCase', null, global);
goog.exportSymbol('proto.entities.GenerationInstructionsDTO', null, global);
goog.exportSymbol('proto.entities.GridPositionDTO', null, global);
goog.exportSymbol('proto.entities.GridSizeDTO', null, global);
goog.exportSymbol('proto.entities.IdAndQuantDTO', null, global);
goog.exportSymbol('proto.entities.IdsAndQuantsDTO', null, global);
goog.exportSymbol('proto.entities.ItemActionEnumDTO', null, global);
goog.exportSymbol('proto.entities.ItemActionsDTO', null, global);
goog.exportSymbol('proto.entities.ItemDTO', null, global);
goog.exportSymbol('proto.entities.ItemRequirementDTO', null, global);
goog.exportSymbol('proto.entities.ItemRequirementDTO.ValueCase', null, global);
goog.exportSymbol('proto.entities.ItemRequirementTypeEnumDTO', null, global);
goog.exportSymbol('proto.entities.ItemRequirementsDTO', null, global);
goog.exportSymbol('proto.entities.ItemSetDTO', null, global);
goog.exportSymbol('proto.entities.ItemSetsDTO', null, global);
goog.exportSymbol('proto.entities.ItemsDTO', null, global);
goog.exportSymbol('proto.entities.MemoriesDTO', null, global);
goog.exportSymbol('proto.entities.MemoryDTO', null, global);
goog.exportSymbol('proto.entities.MemoryPoolDTO', null, global);
goog.exportSymbol('proto.entities.MemoryPoolEntriesDTO', null, global);
goog.exportSymbol('proto.entities.MemoryPoolEntryDTO', null, global);
goog.exportSymbol('proto.entities.MemoryPoolsDTO', null, global);
goog.exportSymbol('proto.entities.MemoryTypeEnumDTO', null, global);
goog.exportSymbol('proto.entities.Metadata', null, global);
goog.exportSymbol('proto.entities.MoodDTO', null, global);
goog.exportSymbol('proto.entities.MoodsDTO', null, global);
goog.exportSymbol('proto.entities.NeedDTO', null, global);
goog.exportSymbol('proto.entities.NeedLayerEnumDTO', null, global);
goog.exportSymbol('proto.entities.NeedTypeEnumDTO', null, global);
goog.exportSymbol('proto.entities.NeedsDTO', null, global);
goog.exportSymbol('proto.entities.PastExperienceDTO', null, global);
goog.exportSymbol('proto.entities.PastExperienceTypeEnumDTO', null, global);
goog.exportSymbol('proto.entities.PastExperiencesDTO', null, global);
goog.exportSymbol('proto.entities.PersonalityProfileDTO', null, global);
goog.exportSymbol('proto.entities.PersonalityProfilesDTO', null, global);
goog.exportSymbol('proto.entities.PreferencesDTO', null, global);
goog.exportSymbol('proto.entities.PresetEnumDTO', null, global);
goog.exportSymbol('proto.entities.QueryFilterDTO', null, global);
goog.exportSymbol('proto.entities.QueryFilterOperatorEnumDTO', null, global);
goog.exportSymbol('proto.entities.QueryFilterValueDTO', null, global);
goog.exportSymbol('proto.entities.QueryFilterValueDTO.ValueCase', null, global);
goog.exportSymbol('proto.entities.QueryFiltersDTO', null, global);
goog.exportSymbol('proto.entities.RaceDTO', null, global);
goog.exportSymbol('proto.entities.RacesDTO', null, global);
goog.exportSymbol('proto.entities.ReligionDTO', null, global);
goog.exportSymbol('proto.entities.ReligionRitualDTO', null, global);
goog.exportSymbol('proto.entities.ReligionRitualsDTO', null, global);
goog.exportSymbol('proto.entities.ReligionTenetDTO', null, global);
goog.exportSymbol('proto.entities.ReligionTenetsDTO', null, global);
goog.exportSymbol('proto.entities.ReligionsDTO', null, global);
goog.exportSymbol('proto.entities.ResistanceDTO', null, global);
goog.exportSymbol('proto.entities.ResistancesDTO', null, global);
goog.exportSymbol('proto.entities.SearchQueryDTO', null, global);
goog.exportSymbol('proto.entities.SimpleProbDTO', null, global);
goog.exportSymbol('proto.entities.SkillAdjustmentDTO', null, global);
goog.exportSymbol('proto.entities.SkillAdjustmentsDTO', null, global);
goog.exportSymbol('proto.entities.SkillCategoryEnumDTO', null, global);
goog.exportSymbol('proto.entities.SkillDTO', null, global);
goog.exportSymbol('proto.entities.SkillImprovementDTO', null, global);
goog.exportSymbol('proto.entities.SkillSetDTO', null, global);
goog.exportSymbol('proto.entities.SkillSetsDTO', null, global);
goog.exportSymbol('proto.entities.SkillsDTO', null, global);
goog.exportSymbol('proto.entities.SortByDTO', null, global);
goog.exportSymbol('proto.entities.SortByDirectionEnumDTO', null, global);
goog.exportSymbol('proto.entities.StatusDTO', null, global);
goog.exportSymbol('proto.entities.StatusesDTO', null, global);
goog.exportSymbol('proto.entities.StorageGridCellDTO', null, global);
goog.exportSymbol('proto.entities.StorageGridDTO', null, global);
goog.exportSymbol('proto.entities.StorageSlotDTO', null, global);
goog.exportSymbol('proto.entities.StorageSlotDefinitionDTO', null, global);
goog.exportSymbol('proto.entities.StorageSlotDefinitionsDTO', null, global);
goog.exportSymbol('proto.entities.StorageSlotsDTO', null, global);
goog.exportSymbol('proto.entities.TagDTO', null, global);
goog.exportSymbol('proto.entities.TagSubtypeEnumDTO', null, global);
goog.exportSymbol('proto.entities.TagsDTO', null, global);
goog.exportSymbol('proto.entities.TraitDTO', null, global);
goog.exportSymbol('proto.entities.TraitTypeEnumDTO', null, global);
goog.exportSymbol('proto.entities.TraitsDTO', null, global);
goog.exportSymbol('proto.entities.UserDTO', null, global);
goog.exportSymbol('proto.entities.UsersDTO', null, global);
goog.exportSymbol('proto.entities.WorldDTO', null, global);
goog.exportSymbol('proto.entities.WorldSettings', null, global);
goog.exportSymbol('proto.entities.WorldsDTO', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entities.ContextDTO = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.entities.ContextDTO, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entities.ContextDTO.displayName = 'proto.entities.ContextDTO';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entities.BackgroundDTO = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.entities.BackgroundDTO, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entities.BackgroundDTO.displayName = 'proto.entities.BackgroundDTO';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entities.BackgroundsDTO = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.entities.BackgroundsDTO.repeatedFields_, null);
};
goog.inherits(proto.entities.BackgroundsDTO, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entities.BackgroundsDTO.displayName = 'proto.entities.BackgroundsDTO';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entities.Metadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.entities.Metadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entities.Metadata.displayName = 'proto.entities.Metadata';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entities.EffectDTO = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.entities.EffectDTO.repeatedFields_, null);
};
goog.inherits(proto.entities.EffectDTO, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entities.EffectDTO.displayName = 'proto.entities.EffectDTO';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entities.EffectsDTO = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.entities.EffectsDTO.repeatedFields_, null);
};
goog.inherits(proto.entities.EffectsDTO, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entities.EffectsDTO.displayName = 'proto.entities.EffectsDTO';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entities.ResistanceDTO = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.entities.ResistanceDTO, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entities.ResistanceDTO.displayName = 'proto.entities.ResistanceDTO';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entities.ResistancesDTO = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.entities.ResistancesDTO.repeatedFields_, null);
};
goog.inherits(proto.entities.ResistancesDTO, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entities.ResistancesDTO.displayName = 'proto.entities.ResistancesDTO';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entities.StatusDTO = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.entities.StatusDTO.repeatedFields_, null);
};
goog.inherits(proto.entities.StatusDTO, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entities.StatusDTO.displayName = 'proto.entities.StatusDTO';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entities.StatusesDTO = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.entities.StatusesDTO.repeatedFields_, null);
};
goog.inherits(proto.entities.StatusesDTO, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entities.StatusesDTO.displayName = 'proto.entities.StatusesDTO';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entities.ItemSetDTO = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.entities.ItemSetDTO, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entities.ItemSetDTO.displayName = 'proto.entities.ItemSetDTO';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entities.ItemSetsDTO = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.entities.ItemSetsDTO.repeatedFields_, null);
};
goog.inherits(proto.entities.ItemSetsDTO, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entities.ItemSetsDTO.displayName = 'proto.entities.ItemSetsDTO';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entities.ItemDTO = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.entities.ItemDTO.repeatedFields_, null);
};
goog.inherits(proto.entities.ItemDTO, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entities.ItemDTO.displayName = 'proto.entities.ItemDTO';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entities.ItemsDTO = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.entities.ItemsDTO.repeatedFields_, null);
};
goog.inherits(proto.entities.ItemsDTO, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entities.ItemsDTO.displayName = 'proto.entities.ItemsDTO';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entities.GridSizeDTO = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.entities.GridSizeDTO, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entities.GridSizeDTO.displayName = 'proto.entities.GridSizeDTO';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entities.ItemActionsDTO = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.entities.ItemActionsDTO.repeatedFields_, null);
};
goog.inherits(proto.entities.ItemActionsDTO, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entities.ItemActionsDTO.displayName = 'proto.entities.ItemActionsDTO';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entities.StorageSlotDTO = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.entities.StorageSlotDTO.repeatedFields_, null);
};
goog.inherits(proto.entities.StorageSlotDTO, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entities.StorageSlotDTO.displayName = 'proto.entities.StorageSlotDTO';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entities.StorageSlotsDTO = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.entities.StorageSlotsDTO.repeatedFields_, null);
};
goog.inherits(proto.entities.StorageSlotsDTO, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entities.StorageSlotsDTO.displayName = 'proto.entities.StorageSlotsDTO';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entities.StorageGridDTO = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.entities.StorageGridDTO.repeatedFields_, null);
};
goog.inherits(proto.entities.StorageGridDTO, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entities.StorageGridDTO.displayName = 'proto.entities.StorageGridDTO';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entities.StorageGridCellDTO = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.entities.StorageGridCellDTO, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entities.StorageGridCellDTO.displayName = 'proto.entities.StorageGridCellDTO';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entities.ItemRequirementDTO = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.entities.ItemRequirementDTO.oneofGroups_);
};
goog.inherits(proto.entities.ItemRequirementDTO, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entities.ItemRequirementDTO.displayName = 'proto.entities.ItemRequirementDTO';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entities.ItemRequirementsDTO = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.entities.ItemRequirementsDTO.repeatedFields_, null);
};
goog.inherits(proto.entities.ItemRequirementsDTO, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entities.ItemRequirementsDTO.displayName = 'proto.entities.ItemRequirementsDTO';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entities.CharacterDTO = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.entities.CharacterDTO.repeatedFields_, null);
};
goog.inherits(proto.entities.CharacterDTO, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entities.CharacterDTO.displayName = 'proto.entities.CharacterDTO';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entities.CharactersDTO = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.entities.CharactersDTO.repeatedFields_, null);
};
goog.inherits(proto.entities.CharactersDTO, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entities.CharactersDTO.displayName = 'proto.entities.CharactersDTO';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entities.AddictionDTO = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.entities.AddictionDTO.repeatedFields_, null);
};
goog.inherits(proto.entities.AddictionDTO, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entities.AddictionDTO.displayName = 'proto.entities.AddictionDTO';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entities.AddictionsDTO = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.entities.AddictionsDTO.repeatedFields_, null);
};
goog.inherits(proto.entities.AddictionsDTO, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entities.AddictionsDTO.displayName = 'proto.entities.AddictionsDTO';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entities.CharacterMemoryDTO = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.entities.CharacterMemoryDTO.repeatedFields_, null);
};
goog.inherits(proto.entities.CharacterMemoryDTO, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entities.CharacterMemoryDTO.displayName = 'proto.entities.CharacterMemoryDTO';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entities.CharacterMemoriesDTO = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.entities.CharacterMemoriesDTO.repeatedFields_, null);
};
goog.inherits(proto.entities.CharacterMemoriesDTO, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entities.CharacterMemoriesDTO.displayName = 'proto.entities.CharacterMemoriesDTO';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entities.FactStatusDTO = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.entities.FactStatusDTO, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entities.FactStatusDTO.displayName = 'proto.entities.FactStatusDTO';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entities.FactStatusesDTO = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.entities.FactStatusesDTO.repeatedFields_, null);
};
goog.inherits(proto.entities.FactStatusesDTO, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entities.FactStatusesDTO.displayName = 'proto.entities.FactStatusesDTO';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entities.TagDTO = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.entities.TagDTO, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entities.TagDTO.displayName = 'proto.entities.TagDTO';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entities.TagsDTO = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.entities.TagsDTO.repeatedFields_, null);
};
goog.inherits(proto.entities.TagsDTO, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entities.TagsDTO.displayName = 'proto.entities.TagsDTO';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entities.SkillDTO = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.entities.SkillDTO.repeatedFields_, null);
};
goog.inherits(proto.entities.SkillDTO, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entities.SkillDTO.displayName = 'proto.entities.SkillDTO';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entities.SkillsDTO = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.entities.SkillsDTO.repeatedFields_, null);
};
goog.inherits(proto.entities.SkillsDTO, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entities.SkillsDTO.displayName = 'proto.entities.SkillsDTO';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entities.TraitDTO = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.entities.TraitDTO.repeatedFields_, null);
};
goog.inherits(proto.entities.TraitDTO, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entities.TraitDTO.displayName = 'proto.entities.TraitDTO';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entities.TraitsDTO = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.entities.TraitsDTO.repeatedFields_, null);
};
goog.inherits(proto.entities.TraitsDTO, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entities.TraitsDTO.displayName = 'proto.entities.TraitsDTO';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entities.DiseaseDTO = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.entities.DiseaseDTO.repeatedFields_, null);
};
goog.inherits(proto.entities.DiseaseDTO, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entities.DiseaseDTO.displayName = 'proto.entities.DiseaseDTO';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entities.DiseasesDTO = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.entities.DiseasesDTO.repeatedFields_, null);
};
goog.inherits(proto.entities.DiseasesDTO, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entities.DiseasesDTO.displayName = 'proto.entities.DiseasesDTO';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entities.FactDTO = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.entities.FactDTO.repeatedFields_, null);
};
goog.inherits(proto.entities.FactDTO, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entities.FactDTO.displayName = 'proto.entities.FactDTO';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entities.FactsDTO = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.entities.FactsDTO.repeatedFields_, null);
};
goog.inherits(proto.entities.FactsDTO, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entities.FactsDTO.displayName = 'proto.entities.FactsDTO';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entities.FactionDTO = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.entities.FactionDTO.repeatedFields_, null);
};
goog.inherits(proto.entities.FactionDTO, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entities.FactionDTO.displayName = 'proto.entities.FactionDTO';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entities.FactionsDTO = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.entities.FactionsDTO.repeatedFields_, null);
};
goog.inherits(proto.entities.FactionsDTO, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entities.FactionsDTO.displayName = 'proto.entities.FactionsDTO';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entities.MemoryPoolDTO = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.entities.MemoryPoolDTO.repeatedFields_, null);
};
goog.inherits(proto.entities.MemoryPoolDTO, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entities.MemoryPoolDTO.displayName = 'proto.entities.MemoryPoolDTO';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entities.MemoryPoolsDTO = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.entities.MemoryPoolsDTO.repeatedFields_, null);
};
goog.inherits(proto.entities.MemoryPoolsDTO, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entities.MemoryPoolsDTO.displayName = 'proto.entities.MemoryPoolsDTO';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entities.MemoryPoolEntryDTO = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.entities.MemoryPoolEntryDTO, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entities.MemoryPoolEntryDTO.displayName = 'proto.entities.MemoryPoolEntryDTO';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entities.MemoryPoolEntriesDTO = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.entities.MemoryPoolEntriesDTO.repeatedFields_, null);
};
goog.inherits(proto.entities.MemoryPoolEntriesDTO, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entities.MemoryPoolEntriesDTO.displayName = 'proto.entities.MemoryPoolEntriesDTO';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entities.CharacterProfessionDTO = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.entities.CharacterProfessionDTO.repeatedFields_, null);
};
goog.inherits(proto.entities.CharacterProfessionDTO, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entities.CharacterProfessionDTO.displayName = 'proto.entities.CharacterProfessionDTO';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entities.CharacterProfessionsDTO = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.entities.CharacterProfessionsDTO.repeatedFields_, null);
};
goog.inherits(proto.entities.CharacterProfessionsDTO, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entities.CharacterProfessionsDTO.displayName = 'proto.entities.CharacterProfessionsDTO';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entities.EquipmentSlotDTO = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.entities.EquipmentSlotDTO.repeatedFields_, null);
};
goog.inherits(proto.entities.EquipmentSlotDTO, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entities.EquipmentSlotDTO.displayName = 'proto.entities.EquipmentSlotDTO';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entities.EquipmentSlotsDTO = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.entities.EquipmentSlotsDTO.repeatedFields_, null);
};
goog.inherits(proto.entities.EquipmentSlotsDTO, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entities.EquipmentSlotsDTO.displayName = 'proto.entities.EquipmentSlotsDTO';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entities.BirthsignDTO = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.entities.BirthsignDTO, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entities.BirthsignDTO.displayName = 'proto.entities.BirthsignDTO';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entities.BirthsignsDTO = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.entities.BirthsignsDTO.repeatedFields_, null);
};
goog.inherits(proto.entities.BirthsignsDTO, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entities.BirthsignsDTO.displayName = 'proto.entities.BirthsignsDTO';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entities.RaceDTO = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.entities.RaceDTO, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entities.RaceDTO.displayName = 'proto.entities.RaceDTO';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entities.RacesDTO = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.entities.RacesDTO.repeatedFields_, null);
};
goog.inherits(proto.entities.RacesDTO, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entities.RacesDTO.displayName = 'proto.entities.RacesDTO';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entities.EquipmentSlotDefinitionDTO = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.entities.EquipmentSlotDefinitionDTO.repeatedFields_, null);
};
goog.inherits(proto.entities.EquipmentSlotDefinitionDTO, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entities.EquipmentSlotDefinitionDTO.displayName = 'proto.entities.EquipmentSlotDefinitionDTO';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entities.EquipmentSlotDefinitionsDTO = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.entities.EquipmentSlotDefinitionsDTO.repeatedFields_, null);
};
goog.inherits(proto.entities.EquipmentSlotDefinitionsDTO, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entities.EquipmentSlotDefinitionsDTO.displayName = 'proto.entities.EquipmentSlotDefinitionsDTO';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entities.StorageSlotDefinitionDTO = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.entities.StorageSlotDefinitionDTO.repeatedFields_, null);
};
goog.inherits(proto.entities.StorageSlotDefinitionDTO, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entities.StorageSlotDefinitionDTO.displayName = 'proto.entities.StorageSlotDefinitionDTO';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entities.StorageSlotDefinitionsDTO = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.entities.StorageSlotDefinitionsDTO.repeatedFields_, null);
};
goog.inherits(proto.entities.StorageSlotDefinitionsDTO, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entities.StorageSlotDefinitionsDTO.displayName = 'proto.entities.StorageSlotDefinitionsDTO';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entities.MoodDTO = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.entities.MoodDTO, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entities.MoodDTO.displayName = 'proto.entities.MoodDTO';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entities.MoodsDTO = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.entities.MoodsDTO.repeatedFields_, null);
};
goog.inherits(proto.entities.MoodsDTO, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entities.MoodsDTO.displayName = 'proto.entities.MoodsDTO';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entities.ReligionDTO = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.entities.ReligionDTO, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entities.ReligionDTO.displayName = 'proto.entities.ReligionDTO';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entities.ReligionsDTO = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.entities.ReligionsDTO.repeatedFields_, null);
};
goog.inherits(proto.entities.ReligionsDTO, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entities.ReligionsDTO.displayName = 'proto.entities.ReligionsDTO';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entities.ReligionRitualDTO = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.entities.ReligionRitualDTO, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entities.ReligionRitualDTO.displayName = 'proto.entities.ReligionRitualDTO';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entities.ReligionRitualsDTO = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.entities.ReligionRitualsDTO.repeatedFields_, null);
};
goog.inherits(proto.entities.ReligionRitualsDTO, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entities.ReligionRitualsDTO.displayName = 'proto.entities.ReligionRitualsDTO';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entities.ReligionTenetDTO = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.entities.ReligionTenetDTO, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entities.ReligionTenetDTO.displayName = 'proto.entities.ReligionTenetDTO';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entities.ReligionTenetsDTO = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.entities.ReligionTenetsDTO.repeatedFields_, null);
};
goog.inherits(proto.entities.ReligionTenetsDTO, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entities.ReligionTenetsDTO.displayName = 'proto.entities.ReligionTenetsDTO';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entities.GridPositionDTO = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.entities.GridPositionDTO, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entities.GridPositionDTO.displayName = 'proto.entities.GridPositionDTO';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entities.GenerationInstructionDTO = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.entities.GenerationInstructionDTO.oneofGroups_);
};
goog.inherits(proto.entities.GenerationInstructionDTO, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entities.GenerationInstructionDTO.displayName = 'proto.entities.GenerationInstructionDTO';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entities.GenerationInstructionsDTO = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.entities.GenerationInstructionsDTO.repeatedFields_, null);
};
goog.inherits(proto.entities.GenerationInstructionsDTO, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entities.GenerationInstructionsDTO.displayName = 'proto.entities.GenerationInstructionsDTO';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entities.IdAndQuantDTO = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.entities.IdAndQuantDTO, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entities.IdAndQuantDTO.displayName = 'proto.entities.IdAndQuantDTO';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entities.IdsAndQuantsDTO = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.entities.IdsAndQuantsDTO.repeatedFields_, null);
};
goog.inherits(proto.entities.IdsAndQuantsDTO, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entities.IdsAndQuantsDTO.displayName = 'proto.entities.IdsAndQuantsDTO';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entities.CharacterGenInstructionDTO = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.entities.CharacterGenInstructionDTO, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entities.CharacterGenInstructionDTO.displayName = 'proto.entities.CharacterGenInstructionDTO';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entities.CharacterGenInstructions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.entities.CharacterGenInstructions.repeatedFields_, null);
};
goog.inherits(proto.entities.CharacterGenInstructions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entities.CharacterGenInstructions.displayName = 'proto.entities.CharacterGenInstructions';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entities.CharacterGroupGenInstructionDTO = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.entities.CharacterGroupGenInstructionDTO, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entities.CharacterGroupGenInstructionDTO.displayName = 'proto.entities.CharacterGroupGenInstructionDTO';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entities.CharacterGroupGenInstructionsDTO = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.entities.CharacterGroupGenInstructionsDTO.repeatedFields_, null);
};
goog.inherits(proto.entities.CharacterGroupGenInstructionsDTO, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entities.CharacterGroupGenInstructionsDTO.displayName = 'proto.entities.CharacterGroupGenInstructionsDTO';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entities.BackgroundCustomizationDTO = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.entities.BackgroundCustomizationDTO, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entities.BackgroundCustomizationDTO.displayName = 'proto.entities.BackgroundCustomizationDTO';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entities.SkillAdjustmentDTO = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.entities.SkillAdjustmentDTO, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entities.SkillAdjustmentDTO.displayName = 'proto.entities.SkillAdjustmentDTO';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entities.SkillAdjustmentsDTO = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.entities.SkillAdjustmentsDTO.repeatedFields_, null);
};
goog.inherits(proto.entities.SkillAdjustmentsDTO, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entities.SkillAdjustmentsDTO.displayName = 'proto.entities.SkillAdjustmentsDTO';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entities.SimpleProbDTO = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.entities.SimpleProbDTO, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entities.SimpleProbDTO.displayName = 'proto.entities.SimpleProbDTO';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entities.GaussianProbDTO = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.entities.GaussianProbDTO, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entities.GaussianProbDTO.displayName = 'proto.entities.GaussianProbDTO';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entities.CombinatorDTO = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.entities.CombinatorDTO.repeatedFields_, null);
};
goog.inherits(proto.entities.CombinatorDTO, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entities.CombinatorDTO.displayName = 'proto.entities.CombinatorDTO';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entities.PastExperienceDTO = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.entities.PastExperienceDTO.repeatedFields_, null);
};
goog.inherits(proto.entities.PastExperienceDTO, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entities.PastExperienceDTO.displayName = 'proto.entities.PastExperienceDTO';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entities.PastExperiencesDTO = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.entities.PastExperiencesDTO.repeatedFields_, null);
};
goog.inherits(proto.entities.PastExperiencesDTO, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entities.PastExperiencesDTO.displayName = 'proto.entities.PastExperiencesDTO';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entities.MemoryDTO = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.entities.MemoryDTO.repeatedFields_, null);
};
goog.inherits(proto.entities.MemoryDTO, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entities.MemoryDTO.displayName = 'proto.entities.MemoryDTO';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entities.MemoriesDTO = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.entities.MemoriesDTO.repeatedFields_, null);
};
goog.inherits(proto.entities.MemoriesDTO, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entities.MemoriesDTO.displayName = 'proto.entities.MemoriesDTO';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entities.SkillSetDTO = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.entities.SkillSetDTO.repeatedFields_, null);
};
goog.inherits(proto.entities.SkillSetDTO, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entities.SkillSetDTO.displayName = 'proto.entities.SkillSetDTO';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entities.SkillSetsDTO = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.entities.SkillSetsDTO.repeatedFields_, null);
};
goog.inherits(proto.entities.SkillSetsDTO, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entities.SkillSetsDTO.displayName = 'proto.entities.SkillSetsDTO';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entities.SkillImprovementDTO = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.entities.SkillImprovementDTO, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entities.SkillImprovementDTO.displayName = 'proto.entities.SkillImprovementDTO';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entities.PersonalityProfileDTO = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.entities.PersonalityProfileDTO.repeatedFields_, null);
};
goog.inherits(proto.entities.PersonalityProfileDTO, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entities.PersonalityProfileDTO.displayName = 'proto.entities.PersonalityProfileDTO';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entities.PersonalityProfilesDTO = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.entities.PersonalityProfilesDTO.repeatedFields_, null);
};
goog.inherits(proto.entities.PersonalityProfilesDTO, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entities.PersonalityProfilesDTO.displayName = 'proto.entities.PersonalityProfilesDTO';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entities.NeedDTO = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.entities.NeedDTO, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entities.NeedDTO.displayName = 'proto.entities.NeedDTO';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entities.NeedsDTO = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.entities.NeedsDTO.repeatedFields_, null);
};
goog.inherits(proto.entities.NeedsDTO, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entities.NeedsDTO.displayName = 'proto.entities.NeedsDTO';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entities.UserDTO = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.entities.UserDTO.repeatedFields_, null);
};
goog.inherits(proto.entities.UserDTO, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entities.UserDTO.displayName = 'proto.entities.UserDTO';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entities.UsersDTO = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.entities.UsersDTO.repeatedFields_, null);
};
goog.inherits(proto.entities.UsersDTO, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entities.UsersDTO.displayName = 'proto.entities.UsersDTO';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entities.AccountDTO = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.entities.AccountDTO, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entities.AccountDTO.displayName = 'proto.entities.AccountDTO';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entities.PreferencesDTO = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.entities.PreferencesDTO, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entities.PreferencesDTO.displayName = 'proto.entities.PreferencesDTO';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entities.WorldSettings = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.entities.WorldSettings, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entities.WorldSettings.displayName = 'proto.entities.WorldSettings';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entities.WorldDTO = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.entities.WorldDTO.repeatedFields_, null);
};
goog.inherits(proto.entities.WorldDTO, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entities.WorldDTO.displayName = 'proto.entities.WorldDTO';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entities.WorldsDTO = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.entities.WorldsDTO.repeatedFields_, null);
};
goog.inherits(proto.entities.WorldsDTO, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entities.WorldsDTO.displayName = 'proto.entities.WorldsDTO';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entities.CampaignDTO = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.entities.CampaignDTO, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entities.CampaignDTO.displayName = 'proto.entities.CampaignDTO';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entities.CampaignsDTO = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.entities.CampaignsDTO.repeatedFields_, null);
};
goog.inherits(proto.entities.CampaignsDTO, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entities.CampaignsDTO.displayName = 'proto.entities.CampaignsDTO';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entities.SearchQueryDTO = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.entities.SearchQueryDTO, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entities.SearchQueryDTO.displayName = 'proto.entities.SearchQueryDTO';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entities.QueryFilterDTO = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.entities.QueryFilterDTO, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entities.QueryFilterDTO.displayName = 'proto.entities.QueryFilterDTO';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entities.QueryFiltersDTO = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.entities.QueryFiltersDTO.repeatedFields_, null);
};
goog.inherits(proto.entities.QueryFiltersDTO, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entities.QueryFiltersDTO.displayName = 'proto.entities.QueryFiltersDTO';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entities.QueryFilterValueDTO = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.entities.QueryFilterValueDTO.oneofGroups_);
};
goog.inherits(proto.entities.QueryFilterValueDTO, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entities.QueryFilterValueDTO.displayName = 'proto.entities.QueryFilterValueDTO';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entities.SortByDTO = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.entities.SortByDTO, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entities.SortByDTO.displayName = 'proto.entities.SortByDTO';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entities.ContextDTO.prototype.toObject = function(opt_includeInstance) {
  return proto.entities.ContextDTO.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entities.ContextDTO} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.ContextDTO.toObject = function(includeInstance, msg) {
  var f, obj = {
    user: jspb.Message.getFieldWithDefault(msg, 1, ""),
    world: jspb.Message.getFieldWithDefault(msg, 2, ""),
    campaign: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entities.ContextDTO}
 */
proto.entities.ContextDTO.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entities.ContextDTO;
  return proto.entities.ContextDTO.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entities.ContextDTO} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entities.ContextDTO}
 */
proto.entities.ContextDTO.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUser(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setWorld(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCampaign(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entities.ContextDTO.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entities.ContextDTO.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entities.ContextDTO} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.ContextDTO.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUser();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getWorld();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCampaign();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string user = 1;
 * @return {string}
 */
proto.entities.ContextDTO.prototype.getUser = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.ContextDTO} returns this
 */
proto.entities.ContextDTO.prototype.setUser = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string world = 2;
 * @return {string}
 */
proto.entities.ContextDTO.prototype.getWorld = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.ContextDTO} returns this
 */
proto.entities.ContextDTO.prototype.setWorld = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string campaign = 3;
 * @return {string}
 */
proto.entities.ContextDTO.prototype.getCampaign = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.ContextDTO} returns this
 */
proto.entities.ContextDTO.prototype.setCampaign = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entities.BackgroundDTO.prototype.toObject = function(opt_includeInstance) {
  return proto.entities.BackgroundDTO.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entities.BackgroundDTO} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.BackgroundDTO.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    faction: (f = msg.getFaction()) && proto.entities.GenerationInstructionsDTO.toObject(includeInstance, f),
    disease: (f = msg.getDisease()) && proto.entities.GenerationInstructionsDTO.toObject(includeInstance, f),
    addiction: (f = msg.getAddiction()) && proto.entities.GenerationInstructionsDTO.toObject(includeInstance, f),
    profession: (f = msg.getProfession()) && proto.entities.GenerationInstructionsDTO.toObject(includeInstance, f),
    race: (f = msg.getRace()) && proto.entities.GenerationInstructionsDTO.toObject(includeInstance, f),
    religion: (f = msg.getReligion()) && proto.entities.GenerationInstructionsDTO.toObject(includeInstance, f),
    personality: (f = msg.getPersonality()) && proto.entities.GenerationInstructionsDTO.toObject(includeInstance, f),
    items: (f = msg.getItems()) && proto.entities.GenerationInstructionsDTO.toObject(includeInstance, f),
    pastexpchild: (f = msg.getPastexpchild()) && proto.entities.GenerationInstructionsDTO.toObject(includeInstance, f),
    pastexpadult: (f = msg.getPastexpadult()) && proto.entities.GenerationInstructionsDTO.toObject(includeInstance, f),
    memorypools: (f = msg.getMemorypools()) && proto.entities.GenerationInstructionsDTO.toObject(includeInstance, f),
    skillsets: (f = msg.getSkillsets()) && proto.entities.GenerationInstructionsDTO.toObject(includeInstance, f),
    skilladjustmentsMap: (f = msg.getSkilladjustmentsMap()) ? f.toObject(includeInstance, undefined) : [],
    user: jspb.Message.getFieldWithDefault(msg, 16, ""),
    campaign: jspb.Message.getFieldWithDefault(msg, 17, ""),
    world: jspb.Message.getFieldWithDefault(msg, 18, ""),
    targetentity: jspb.Message.getFieldWithDefault(msg, 19, ""),
    gender: (f = msg.getGender()) && proto.entities.GenerationInstructionDTO.toObject(includeInstance, f),
    createdat: jspb.Message.getFieldWithDefault(msg, 21, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entities.BackgroundDTO}
 */
proto.entities.BackgroundDTO.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entities.BackgroundDTO;
  return proto.entities.BackgroundDTO.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entities.BackgroundDTO} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entities.BackgroundDTO}
 */
proto.entities.BackgroundDTO.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = new proto.entities.GenerationInstructionsDTO;
      reader.readMessage(value,proto.entities.GenerationInstructionsDTO.deserializeBinaryFromReader);
      msg.setFaction(value);
      break;
    case 4:
      var value = new proto.entities.GenerationInstructionsDTO;
      reader.readMessage(value,proto.entities.GenerationInstructionsDTO.deserializeBinaryFromReader);
      msg.setDisease(value);
      break;
    case 5:
      var value = new proto.entities.GenerationInstructionsDTO;
      reader.readMessage(value,proto.entities.GenerationInstructionsDTO.deserializeBinaryFromReader);
      msg.setAddiction(value);
      break;
    case 6:
      var value = new proto.entities.GenerationInstructionsDTO;
      reader.readMessage(value,proto.entities.GenerationInstructionsDTO.deserializeBinaryFromReader);
      msg.setProfession(value);
      break;
    case 7:
      var value = new proto.entities.GenerationInstructionsDTO;
      reader.readMessage(value,proto.entities.GenerationInstructionsDTO.deserializeBinaryFromReader);
      msg.setRace(value);
      break;
    case 8:
      var value = new proto.entities.GenerationInstructionsDTO;
      reader.readMessage(value,proto.entities.GenerationInstructionsDTO.deserializeBinaryFromReader);
      msg.setReligion(value);
      break;
    case 9:
      var value = new proto.entities.GenerationInstructionsDTO;
      reader.readMessage(value,proto.entities.GenerationInstructionsDTO.deserializeBinaryFromReader);
      msg.setPersonality(value);
      break;
    case 10:
      var value = new proto.entities.GenerationInstructionsDTO;
      reader.readMessage(value,proto.entities.GenerationInstructionsDTO.deserializeBinaryFromReader);
      msg.setItems(value);
      break;
    case 11:
      var value = new proto.entities.GenerationInstructionsDTO;
      reader.readMessage(value,proto.entities.GenerationInstructionsDTO.deserializeBinaryFromReader);
      msg.setPastexpchild(value);
      break;
    case 12:
      var value = new proto.entities.GenerationInstructionsDTO;
      reader.readMessage(value,proto.entities.GenerationInstructionsDTO.deserializeBinaryFromReader);
      msg.setPastexpadult(value);
      break;
    case 13:
      var value = new proto.entities.GenerationInstructionsDTO;
      reader.readMessage(value,proto.entities.GenerationInstructionsDTO.deserializeBinaryFromReader);
      msg.setMemorypools(value);
      break;
    case 14:
      var value = new proto.entities.GenerationInstructionsDTO;
      reader.readMessage(value,proto.entities.GenerationInstructionsDTO.deserializeBinaryFromReader);
      msg.setSkillsets(value);
      break;
    case 15:
      var value = msg.getSkilladjustmentsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readInt32, null, "", 0);
         });
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.setUser(value);
      break;
    case 17:
      var value = /** @type {string} */ (reader.readString());
      msg.setCampaign(value);
      break;
    case 18:
      var value = /** @type {string} */ (reader.readString());
      msg.setWorld(value);
      break;
    case 19:
      var value = /** @type {string} */ (reader.readString());
      msg.setTargetentity(value);
      break;
    case 20:
      var value = new proto.entities.GenerationInstructionDTO;
      reader.readMessage(value,proto.entities.GenerationInstructionDTO.deserializeBinaryFromReader);
      msg.setGender(value);
      break;
    case 21:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCreatedat(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entities.BackgroundDTO.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entities.BackgroundDTO.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entities.BackgroundDTO} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.BackgroundDTO.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getFaction();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.entities.GenerationInstructionsDTO.serializeBinaryToWriter
    );
  }
  f = message.getDisease();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.entities.GenerationInstructionsDTO.serializeBinaryToWriter
    );
  }
  f = message.getAddiction();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.entities.GenerationInstructionsDTO.serializeBinaryToWriter
    );
  }
  f = message.getProfession();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.entities.GenerationInstructionsDTO.serializeBinaryToWriter
    );
  }
  f = message.getRace();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.entities.GenerationInstructionsDTO.serializeBinaryToWriter
    );
  }
  f = message.getReligion();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.entities.GenerationInstructionsDTO.serializeBinaryToWriter
    );
  }
  f = message.getPersonality();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.entities.GenerationInstructionsDTO.serializeBinaryToWriter
    );
  }
  f = message.getItems();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.entities.GenerationInstructionsDTO.serializeBinaryToWriter
    );
  }
  f = message.getPastexpchild();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.entities.GenerationInstructionsDTO.serializeBinaryToWriter
    );
  }
  f = message.getPastexpadult();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.entities.GenerationInstructionsDTO.serializeBinaryToWriter
    );
  }
  f = message.getMemorypools();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto.entities.GenerationInstructionsDTO.serializeBinaryToWriter
    );
  }
  f = message.getSkillsets();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      proto.entities.GenerationInstructionsDTO.serializeBinaryToWriter
    );
  }
  f = message.getSkilladjustmentsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(15, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeInt32);
  }
  f = message.getUser();
  if (f.length > 0) {
    writer.writeString(
      16,
      f
    );
  }
  f = message.getCampaign();
  if (f.length > 0) {
    writer.writeString(
      17,
      f
    );
  }
  f = message.getWorld();
  if (f.length > 0) {
    writer.writeString(
      18,
      f
    );
  }
  f = message.getTargetentity();
  if (f.length > 0) {
    writer.writeString(
      19,
      f
    );
  }
  f = message.getGender();
  if (f != null) {
    writer.writeMessage(
      20,
      f,
      proto.entities.GenerationInstructionDTO.serializeBinaryToWriter
    );
  }
  f = message.getCreatedat();
  if (f !== 0) {
    writer.writeInt32(
      21,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.entities.BackgroundDTO.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.BackgroundDTO} returns this
 */
proto.entities.BackgroundDTO.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.entities.BackgroundDTO.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.BackgroundDTO} returns this
 */
proto.entities.BackgroundDTO.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional GenerationInstructionsDTO faction = 3;
 * @return {?proto.entities.GenerationInstructionsDTO}
 */
proto.entities.BackgroundDTO.prototype.getFaction = function() {
  return /** @type{?proto.entities.GenerationInstructionsDTO} */ (
    jspb.Message.getWrapperField(this, proto.entities.GenerationInstructionsDTO, 3));
};


/**
 * @param {?proto.entities.GenerationInstructionsDTO|undefined} value
 * @return {!proto.entities.BackgroundDTO} returns this
*/
proto.entities.BackgroundDTO.prototype.setFaction = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.entities.BackgroundDTO} returns this
 */
proto.entities.BackgroundDTO.prototype.clearFaction = function() {
  return this.setFaction(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.entities.BackgroundDTO.prototype.hasFaction = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional GenerationInstructionsDTO disease = 4;
 * @return {?proto.entities.GenerationInstructionsDTO}
 */
proto.entities.BackgroundDTO.prototype.getDisease = function() {
  return /** @type{?proto.entities.GenerationInstructionsDTO} */ (
    jspb.Message.getWrapperField(this, proto.entities.GenerationInstructionsDTO, 4));
};


/**
 * @param {?proto.entities.GenerationInstructionsDTO|undefined} value
 * @return {!proto.entities.BackgroundDTO} returns this
*/
proto.entities.BackgroundDTO.prototype.setDisease = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.entities.BackgroundDTO} returns this
 */
proto.entities.BackgroundDTO.prototype.clearDisease = function() {
  return this.setDisease(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.entities.BackgroundDTO.prototype.hasDisease = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional GenerationInstructionsDTO addiction = 5;
 * @return {?proto.entities.GenerationInstructionsDTO}
 */
proto.entities.BackgroundDTO.prototype.getAddiction = function() {
  return /** @type{?proto.entities.GenerationInstructionsDTO} */ (
    jspb.Message.getWrapperField(this, proto.entities.GenerationInstructionsDTO, 5));
};


/**
 * @param {?proto.entities.GenerationInstructionsDTO|undefined} value
 * @return {!proto.entities.BackgroundDTO} returns this
*/
proto.entities.BackgroundDTO.prototype.setAddiction = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.entities.BackgroundDTO} returns this
 */
proto.entities.BackgroundDTO.prototype.clearAddiction = function() {
  return this.setAddiction(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.entities.BackgroundDTO.prototype.hasAddiction = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional GenerationInstructionsDTO profession = 6;
 * @return {?proto.entities.GenerationInstructionsDTO}
 */
proto.entities.BackgroundDTO.prototype.getProfession = function() {
  return /** @type{?proto.entities.GenerationInstructionsDTO} */ (
    jspb.Message.getWrapperField(this, proto.entities.GenerationInstructionsDTO, 6));
};


/**
 * @param {?proto.entities.GenerationInstructionsDTO|undefined} value
 * @return {!proto.entities.BackgroundDTO} returns this
*/
proto.entities.BackgroundDTO.prototype.setProfession = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.entities.BackgroundDTO} returns this
 */
proto.entities.BackgroundDTO.prototype.clearProfession = function() {
  return this.setProfession(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.entities.BackgroundDTO.prototype.hasProfession = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional GenerationInstructionsDTO race = 7;
 * @return {?proto.entities.GenerationInstructionsDTO}
 */
proto.entities.BackgroundDTO.prototype.getRace = function() {
  return /** @type{?proto.entities.GenerationInstructionsDTO} */ (
    jspb.Message.getWrapperField(this, proto.entities.GenerationInstructionsDTO, 7));
};


/**
 * @param {?proto.entities.GenerationInstructionsDTO|undefined} value
 * @return {!proto.entities.BackgroundDTO} returns this
*/
proto.entities.BackgroundDTO.prototype.setRace = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.entities.BackgroundDTO} returns this
 */
proto.entities.BackgroundDTO.prototype.clearRace = function() {
  return this.setRace(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.entities.BackgroundDTO.prototype.hasRace = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional GenerationInstructionsDTO religion = 8;
 * @return {?proto.entities.GenerationInstructionsDTO}
 */
proto.entities.BackgroundDTO.prototype.getReligion = function() {
  return /** @type{?proto.entities.GenerationInstructionsDTO} */ (
    jspb.Message.getWrapperField(this, proto.entities.GenerationInstructionsDTO, 8));
};


/**
 * @param {?proto.entities.GenerationInstructionsDTO|undefined} value
 * @return {!proto.entities.BackgroundDTO} returns this
*/
proto.entities.BackgroundDTO.prototype.setReligion = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.entities.BackgroundDTO} returns this
 */
proto.entities.BackgroundDTO.prototype.clearReligion = function() {
  return this.setReligion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.entities.BackgroundDTO.prototype.hasReligion = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional GenerationInstructionsDTO personality = 9;
 * @return {?proto.entities.GenerationInstructionsDTO}
 */
proto.entities.BackgroundDTO.prototype.getPersonality = function() {
  return /** @type{?proto.entities.GenerationInstructionsDTO} */ (
    jspb.Message.getWrapperField(this, proto.entities.GenerationInstructionsDTO, 9));
};


/**
 * @param {?proto.entities.GenerationInstructionsDTO|undefined} value
 * @return {!proto.entities.BackgroundDTO} returns this
*/
proto.entities.BackgroundDTO.prototype.setPersonality = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.entities.BackgroundDTO} returns this
 */
proto.entities.BackgroundDTO.prototype.clearPersonality = function() {
  return this.setPersonality(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.entities.BackgroundDTO.prototype.hasPersonality = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional GenerationInstructionsDTO items = 10;
 * @return {?proto.entities.GenerationInstructionsDTO}
 */
proto.entities.BackgroundDTO.prototype.getItems = function() {
  return /** @type{?proto.entities.GenerationInstructionsDTO} */ (
    jspb.Message.getWrapperField(this, proto.entities.GenerationInstructionsDTO, 10));
};


/**
 * @param {?proto.entities.GenerationInstructionsDTO|undefined} value
 * @return {!proto.entities.BackgroundDTO} returns this
*/
proto.entities.BackgroundDTO.prototype.setItems = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.entities.BackgroundDTO} returns this
 */
proto.entities.BackgroundDTO.prototype.clearItems = function() {
  return this.setItems(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.entities.BackgroundDTO.prototype.hasItems = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional GenerationInstructionsDTO pastExpChild = 11;
 * @return {?proto.entities.GenerationInstructionsDTO}
 */
proto.entities.BackgroundDTO.prototype.getPastexpchild = function() {
  return /** @type{?proto.entities.GenerationInstructionsDTO} */ (
    jspb.Message.getWrapperField(this, proto.entities.GenerationInstructionsDTO, 11));
};


/**
 * @param {?proto.entities.GenerationInstructionsDTO|undefined} value
 * @return {!proto.entities.BackgroundDTO} returns this
*/
proto.entities.BackgroundDTO.prototype.setPastexpchild = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.entities.BackgroundDTO} returns this
 */
proto.entities.BackgroundDTO.prototype.clearPastexpchild = function() {
  return this.setPastexpchild(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.entities.BackgroundDTO.prototype.hasPastexpchild = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional GenerationInstructionsDTO pastExpAdult = 12;
 * @return {?proto.entities.GenerationInstructionsDTO}
 */
proto.entities.BackgroundDTO.prototype.getPastexpadult = function() {
  return /** @type{?proto.entities.GenerationInstructionsDTO} */ (
    jspb.Message.getWrapperField(this, proto.entities.GenerationInstructionsDTO, 12));
};


/**
 * @param {?proto.entities.GenerationInstructionsDTO|undefined} value
 * @return {!proto.entities.BackgroundDTO} returns this
*/
proto.entities.BackgroundDTO.prototype.setPastexpadult = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.entities.BackgroundDTO} returns this
 */
proto.entities.BackgroundDTO.prototype.clearPastexpadult = function() {
  return this.setPastexpadult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.entities.BackgroundDTO.prototype.hasPastexpadult = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional GenerationInstructionsDTO memoryPools = 13;
 * @return {?proto.entities.GenerationInstructionsDTO}
 */
proto.entities.BackgroundDTO.prototype.getMemorypools = function() {
  return /** @type{?proto.entities.GenerationInstructionsDTO} */ (
    jspb.Message.getWrapperField(this, proto.entities.GenerationInstructionsDTO, 13));
};


/**
 * @param {?proto.entities.GenerationInstructionsDTO|undefined} value
 * @return {!proto.entities.BackgroundDTO} returns this
*/
proto.entities.BackgroundDTO.prototype.setMemorypools = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.entities.BackgroundDTO} returns this
 */
proto.entities.BackgroundDTO.prototype.clearMemorypools = function() {
  return this.setMemorypools(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.entities.BackgroundDTO.prototype.hasMemorypools = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional GenerationInstructionsDTO skillSets = 14;
 * @return {?proto.entities.GenerationInstructionsDTO}
 */
proto.entities.BackgroundDTO.prototype.getSkillsets = function() {
  return /** @type{?proto.entities.GenerationInstructionsDTO} */ (
    jspb.Message.getWrapperField(this, proto.entities.GenerationInstructionsDTO, 14));
};


/**
 * @param {?proto.entities.GenerationInstructionsDTO|undefined} value
 * @return {!proto.entities.BackgroundDTO} returns this
*/
proto.entities.BackgroundDTO.prototype.setSkillsets = function(value) {
  return jspb.Message.setWrapperField(this, 14, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.entities.BackgroundDTO} returns this
 */
proto.entities.BackgroundDTO.prototype.clearSkillsets = function() {
  return this.setSkillsets(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.entities.BackgroundDTO.prototype.hasSkillsets = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * map<string, int32> skillAdjustments = 15;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,number>}
 */
proto.entities.BackgroundDTO.prototype.getSkilladjustmentsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,number>} */ (
      jspb.Message.getMapField(this, 15, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.entities.BackgroundDTO} returns this
 */
proto.entities.BackgroundDTO.prototype.clearSkilladjustmentsMap = function() {
  this.getSkilladjustmentsMap().clear();
  return this;};


/**
 * optional string user = 16;
 * @return {string}
 */
proto.entities.BackgroundDTO.prototype.getUser = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.BackgroundDTO} returns this
 */
proto.entities.BackgroundDTO.prototype.setUser = function(value) {
  return jspb.Message.setProto3StringField(this, 16, value);
};


/**
 * optional string campaign = 17;
 * @return {string}
 */
proto.entities.BackgroundDTO.prototype.getCampaign = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 17, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.BackgroundDTO} returns this
 */
proto.entities.BackgroundDTO.prototype.setCampaign = function(value) {
  return jspb.Message.setProto3StringField(this, 17, value);
};


/**
 * optional string world = 18;
 * @return {string}
 */
proto.entities.BackgroundDTO.prototype.getWorld = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 18, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.BackgroundDTO} returns this
 */
proto.entities.BackgroundDTO.prototype.setWorld = function(value) {
  return jspb.Message.setProto3StringField(this, 18, value);
};


/**
 * optional string targetEntity = 19;
 * @return {string}
 */
proto.entities.BackgroundDTO.prototype.getTargetentity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 19, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.BackgroundDTO} returns this
 */
proto.entities.BackgroundDTO.prototype.setTargetentity = function(value) {
  return jspb.Message.setProto3StringField(this, 19, value);
};


/**
 * optional GenerationInstructionDTO gender = 20;
 * @return {?proto.entities.GenerationInstructionDTO}
 */
proto.entities.BackgroundDTO.prototype.getGender = function() {
  return /** @type{?proto.entities.GenerationInstructionDTO} */ (
    jspb.Message.getWrapperField(this, proto.entities.GenerationInstructionDTO, 20));
};


/**
 * @param {?proto.entities.GenerationInstructionDTO|undefined} value
 * @return {!proto.entities.BackgroundDTO} returns this
*/
proto.entities.BackgroundDTO.prototype.setGender = function(value) {
  return jspb.Message.setWrapperField(this, 20, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.entities.BackgroundDTO} returns this
 */
proto.entities.BackgroundDTO.prototype.clearGender = function() {
  return this.setGender(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.entities.BackgroundDTO.prototype.hasGender = function() {
  return jspb.Message.getField(this, 20) != null;
};


/**
 * optional int32 createdAt = 21;
 * @return {number}
 */
proto.entities.BackgroundDTO.prototype.getCreatedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 21, 0));
};


/**
 * @param {number} value
 * @return {!proto.entities.BackgroundDTO} returns this
 */
proto.entities.BackgroundDTO.prototype.setCreatedat = function(value) {
  return jspb.Message.setProto3IntField(this, 21, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.entities.BackgroundsDTO.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entities.BackgroundsDTO.prototype.toObject = function(opt_includeInstance) {
  return proto.entities.BackgroundsDTO.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entities.BackgroundsDTO} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.BackgroundsDTO.toObject = function(includeInstance, msg) {
  var f, obj = {
    arrList: jspb.Message.toObjectList(msg.getArrList(),
    proto.entities.BackgroundDTO.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entities.BackgroundsDTO}
 */
proto.entities.BackgroundsDTO.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entities.BackgroundsDTO;
  return proto.entities.BackgroundsDTO.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entities.BackgroundsDTO} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entities.BackgroundsDTO}
 */
proto.entities.BackgroundsDTO.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.entities.BackgroundDTO;
      reader.readMessage(value,proto.entities.BackgroundDTO.deserializeBinaryFromReader);
      msg.addArr(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entities.BackgroundsDTO.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entities.BackgroundsDTO.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entities.BackgroundsDTO} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.BackgroundsDTO.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getArrList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.entities.BackgroundDTO.serializeBinaryToWriter
    );
  }
};


/**
 * repeated BackgroundDTO arr = 1;
 * @return {!Array<!proto.entities.BackgroundDTO>}
 */
proto.entities.BackgroundsDTO.prototype.getArrList = function() {
  return /** @type{!Array<!proto.entities.BackgroundDTO>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.entities.BackgroundDTO, 1));
};


/**
 * @param {!Array<!proto.entities.BackgroundDTO>} value
 * @return {!proto.entities.BackgroundsDTO} returns this
*/
proto.entities.BackgroundsDTO.prototype.setArrList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.entities.BackgroundDTO=} opt_value
 * @param {number=} opt_index
 * @return {!proto.entities.BackgroundDTO}
 */
proto.entities.BackgroundsDTO.prototype.addArr = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.entities.BackgroundDTO, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.entities.BackgroundsDTO} returns this
 */
proto.entities.BackgroundsDTO.prototype.clearArrList = function() {
  return this.setArrList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entities.Metadata.prototype.toObject = function(opt_includeInstance) {
  return proto.entities.Metadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entities.Metadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.Metadata.toObject = function(includeInstance, msg) {
  var f, obj = {
    metadataMap: (f = msg.getMetadataMap()) ? f.toObject(includeInstance, undefined) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entities.Metadata}
 */
proto.entities.Metadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entities.Metadata;
  return proto.entities.Metadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entities.Metadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entities.Metadata}
 */
proto.entities.Metadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = msg.getMetadataMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entities.Metadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entities.Metadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entities.Metadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.Metadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMetadataMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
};


/**
 * map<string, string> metadata = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.entities.Metadata.prototype.getMetadataMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.entities.Metadata} returns this
 */
proto.entities.Metadata.prototype.clearMetadataMap = function() {
  this.getMetadataMap().clear();
  return this;};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.entities.EffectDTO.repeatedFields_ = [8];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entities.EffectDTO.prototype.toObject = function(opt_includeInstance) {
  return proto.entities.EffectDTO.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entities.EffectDTO} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.EffectDTO.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    blueprintid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    name: jspb.Message.getFieldWithDefault(msg, 3, ""),
    metadata: (f = msg.getMetadata()) && proto.entities.Metadata.toObject(includeInstance, f),
    user: jspb.Message.getFieldWithDefault(msg, 5, ""),
    campaign: jspb.Message.getFieldWithDefault(msg, 6, ""),
    world: jspb.Message.getFieldWithDefault(msg, 7, ""),
    tagsList: (f = jspb.Message.getRepeatedField(msg, 8)) == null ? undefined : f,
    type: jspb.Message.getFieldWithDefault(msg, 9, 0),
    target: jspb.Message.getFieldWithDefault(msg, 10, 0),
    mode: jspb.Message.getFieldWithDefault(msg, 11, 0),
    element: jspb.Message.getFieldWithDefault(msg, 12, 0),
    targetentity: jspb.Message.getFieldWithDefault(msg, 13, ""),
    createdat: jspb.Message.getFieldWithDefault(msg, 14, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entities.EffectDTO}
 */
proto.entities.EffectDTO.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entities.EffectDTO;
  return proto.entities.EffectDTO.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entities.EffectDTO} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entities.EffectDTO}
 */
proto.entities.EffectDTO.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBlueprintid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = new proto.entities.Metadata;
      reader.readMessage(value,proto.entities.Metadata.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setUser(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setCampaign(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setWorld(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.addTags(value);
      break;
    case 9:
      var value = /** @type {!proto.entities.EffectTypeEnumDTO} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 10:
      var value = /** @type {!proto.entities.EffectTargetEnumDTO} */ (reader.readEnum());
      msg.setTarget(value);
      break;
    case 11:
      var value = /** @type {!proto.entities.EffectModeEnumDTO} */ (reader.readEnum());
      msg.setMode(value);
      break;
    case 12:
      var value = /** @type {!proto.entities.EffectElementEnumDTO} */ (reader.readEnum());
      msg.setElement(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setTargetentity(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCreatedat(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entities.EffectDTO.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entities.EffectDTO.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entities.EffectDTO} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.EffectDTO.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBlueprintid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.entities.Metadata.serializeBinaryToWriter
    );
  }
  f = message.getUser();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getCampaign();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getWorld();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getTagsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      8,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      9,
      f
    );
  }
  f = message.getTarget();
  if (f !== 0.0) {
    writer.writeEnum(
      10,
      f
    );
  }
  f = message.getMode();
  if (f !== 0.0) {
    writer.writeEnum(
      11,
      f
    );
  }
  f = message.getElement();
  if (f !== 0.0) {
    writer.writeEnum(
      12,
      f
    );
  }
  f = message.getTargetentity();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getCreatedat();
  if (f !== 0) {
    writer.writeInt32(
      14,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.entities.EffectDTO.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.EffectDTO} returns this
 */
proto.entities.EffectDTO.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string blueprintId = 2;
 * @return {string}
 */
proto.entities.EffectDTO.prototype.getBlueprintid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.EffectDTO} returns this
 */
proto.entities.EffectDTO.prototype.setBlueprintid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.entities.EffectDTO.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.EffectDTO} returns this
 */
proto.entities.EffectDTO.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional Metadata metadata = 4;
 * @return {?proto.entities.Metadata}
 */
proto.entities.EffectDTO.prototype.getMetadata = function() {
  return /** @type{?proto.entities.Metadata} */ (
    jspb.Message.getWrapperField(this, proto.entities.Metadata, 4));
};


/**
 * @param {?proto.entities.Metadata|undefined} value
 * @return {!proto.entities.EffectDTO} returns this
*/
proto.entities.EffectDTO.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.entities.EffectDTO} returns this
 */
proto.entities.EffectDTO.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.entities.EffectDTO.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string user = 5;
 * @return {string}
 */
proto.entities.EffectDTO.prototype.getUser = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.EffectDTO} returns this
 */
proto.entities.EffectDTO.prototype.setUser = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string campaign = 6;
 * @return {string}
 */
proto.entities.EffectDTO.prototype.getCampaign = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.EffectDTO} returns this
 */
proto.entities.EffectDTO.prototype.setCampaign = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string world = 7;
 * @return {string}
 */
proto.entities.EffectDTO.prototype.getWorld = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.EffectDTO} returns this
 */
proto.entities.EffectDTO.prototype.setWorld = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * repeated string tags = 8;
 * @return {!Array<string>}
 */
proto.entities.EffectDTO.prototype.getTagsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 8));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.entities.EffectDTO} returns this
 */
proto.entities.EffectDTO.prototype.setTagsList = function(value) {
  return jspb.Message.setField(this, 8, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.entities.EffectDTO} returns this
 */
proto.entities.EffectDTO.prototype.addTags = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 8, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.entities.EffectDTO} returns this
 */
proto.entities.EffectDTO.prototype.clearTagsList = function() {
  return this.setTagsList([]);
};


/**
 * optional EffectTypeEnumDTO type = 9;
 * @return {!proto.entities.EffectTypeEnumDTO}
 */
proto.entities.EffectDTO.prototype.getType = function() {
  return /** @type {!proto.entities.EffectTypeEnumDTO} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {!proto.entities.EffectTypeEnumDTO} value
 * @return {!proto.entities.EffectDTO} returns this
 */
proto.entities.EffectDTO.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 9, value);
};


/**
 * optional EffectTargetEnumDTO target = 10;
 * @return {!proto.entities.EffectTargetEnumDTO}
 */
proto.entities.EffectDTO.prototype.getTarget = function() {
  return /** @type {!proto.entities.EffectTargetEnumDTO} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {!proto.entities.EffectTargetEnumDTO} value
 * @return {!proto.entities.EffectDTO} returns this
 */
proto.entities.EffectDTO.prototype.setTarget = function(value) {
  return jspb.Message.setProto3EnumField(this, 10, value);
};


/**
 * optional EffectModeEnumDTO mode = 11;
 * @return {!proto.entities.EffectModeEnumDTO}
 */
proto.entities.EffectDTO.prototype.getMode = function() {
  return /** @type {!proto.entities.EffectModeEnumDTO} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {!proto.entities.EffectModeEnumDTO} value
 * @return {!proto.entities.EffectDTO} returns this
 */
proto.entities.EffectDTO.prototype.setMode = function(value) {
  return jspb.Message.setProto3EnumField(this, 11, value);
};


/**
 * optional EffectElementEnumDTO element = 12;
 * @return {!proto.entities.EffectElementEnumDTO}
 */
proto.entities.EffectDTO.prototype.getElement = function() {
  return /** @type {!proto.entities.EffectElementEnumDTO} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {!proto.entities.EffectElementEnumDTO} value
 * @return {!proto.entities.EffectDTO} returns this
 */
proto.entities.EffectDTO.prototype.setElement = function(value) {
  return jspb.Message.setProto3EnumField(this, 12, value);
};


/**
 * optional string targetEntity = 13;
 * @return {string}
 */
proto.entities.EffectDTO.prototype.getTargetentity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.EffectDTO} returns this
 */
proto.entities.EffectDTO.prototype.setTargetentity = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional int32 createdAt = 14;
 * @return {number}
 */
proto.entities.EffectDTO.prototype.getCreatedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/**
 * @param {number} value
 * @return {!proto.entities.EffectDTO} returns this
 */
proto.entities.EffectDTO.prototype.setCreatedat = function(value) {
  return jspb.Message.setProto3IntField(this, 14, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.entities.EffectsDTO.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entities.EffectsDTO.prototype.toObject = function(opt_includeInstance) {
  return proto.entities.EffectsDTO.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entities.EffectsDTO} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.EffectsDTO.toObject = function(includeInstance, msg) {
  var f, obj = {
    arrList: jspb.Message.toObjectList(msg.getArrList(),
    proto.entities.EffectDTO.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entities.EffectsDTO}
 */
proto.entities.EffectsDTO.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entities.EffectsDTO;
  return proto.entities.EffectsDTO.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entities.EffectsDTO} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entities.EffectsDTO}
 */
proto.entities.EffectsDTO.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.entities.EffectDTO;
      reader.readMessage(value,proto.entities.EffectDTO.deserializeBinaryFromReader);
      msg.addArr(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entities.EffectsDTO.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entities.EffectsDTO.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entities.EffectsDTO} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.EffectsDTO.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getArrList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.entities.EffectDTO.serializeBinaryToWriter
    );
  }
};


/**
 * repeated EffectDTO arr = 1;
 * @return {!Array<!proto.entities.EffectDTO>}
 */
proto.entities.EffectsDTO.prototype.getArrList = function() {
  return /** @type{!Array<!proto.entities.EffectDTO>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.entities.EffectDTO, 1));
};


/**
 * @param {!Array<!proto.entities.EffectDTO>} value
 * @return {!proto.entities.EffectsDTO} returns this
*/
proto.entities.EffectsDTO.prototype.setArrList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.entities.EffectDTO=} opt_value
 * @param {number=} opt_index
 * @return {!proto.entities.EffectDTO}
 */
proto.entities.EffectsDTO.prototype.addArr = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.entities.EffectDTO, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.entities.EffectsDTO} returns this
 */
proto.entities.EffectsDTO.prototype.clearArrList = function() {
  return this.setArrList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entities.ResistanceDTO.prototype.toObject = function(opt_includeInstance) {
  return proto.entities.ResistanceDTO.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entities.ResistanceDTO} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.ResistanceDTO.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    blueprintid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    name: jspb.Message.getFieldWithDefault(msg, 3, ""),
    metadata: (f = msg.getMetadata()) && proto.entities.Metadata.toObject(includeInstance, f),
    user: jspb.Message.getFieldWithDefault(msg, 5, ""),
    campaign: jspb.Message.getFieldWithDefault(msg, 6, ""),
    world: jspb.Message.getFieldWithDefault(msg, 7, ""),
    effecttype: jspb.Message.getFieldWithDefault(msg, 8, 0),
    targeteffect: jspb.Message.getFieldWithDefault(msg, 9, ""),
    targetentity: jspb.Message.getFieldWithDefault(msg, 10, ""),
    createdat: jspb.Message.getFieldWithDefault(msg, 11, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entities.ResistanceDTO}
 */
proto.entities.ResistanceDTO.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entities.ResistanceDTO;
  return proto.entities.ResistanceDTO.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entities.ResistanceDTO} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entities.ResistanceDTO}
 */
proto.entities.ResistanceDTO.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBlueprintid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = new proto.entities.Metadata;
      reader.readMessage(value,proto.entities.Metadata.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setUser(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setCampaign(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setWorld(value);
      break;
    case 8:
      var value = /** @type {!proto.entities.EffectTypeEnumDTO} */ (reader.readEnum());
      msg.setEffecttype(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setTargeteffect(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setTargetentity(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCreatedat(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entities.ResistanceDTO.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entities.ResistanceDTO.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entities.ResistanceDTO} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.ResistanceDTO.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBlueprintid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.entities.Metadata.serializeBinaryToWriter
    );
  }
  f = message.getUser();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getCampaign();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getWorld();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getEffecttype();
  if (f !== 0.0) {
    writer.writeEnum(
      8,
      f
    );
  }
  f = message.getTargeteffect();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getTargetentity();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getCreatedat();
  if (f !== 0) {
    writer.writeInt32(
      11,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.entities.ResistanceDTO.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.ResistanceDTO} returns this
 */
proto.entities.ResistanceDTO.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string blueprintId = 2;
 * @return {string}
 */
proto.entities.ResistanceDTO.prototype.getBlueprintid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.ResistanceDTO} returns this
 */
proto.entities.ResistanceDTO.prototype.setBlueprintid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.entities.ResistanceDTO.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.ResistanceDTO} returns this
 */
proto.entities.ResistanceDTO.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional Metadata metadata = 4;
 * @return {?proto.entities.Metadata}
 */
proto.entities.ResistanceDTO.prototype.getMetadata = function() {
  return /** @type{?proto.entities.Metadata} */ (
    jspb.Message.getWrapperField(this, proto.entities.Metadata, 4));
};


/**
 * @param {?proto.entities.Metadata|undefined} value
 * @return {!proto.entities.ResistanceDTO} returns this
*/
proto.entities.ResistanceDTO.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.entities.ResistanceDTO} returns this
 */
proto.entities.ResistanceDTO.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.entities.ResistanceDTO.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string user = 5;
 * @return {string}
 */
proto.entities.ResistanceDTO.prototype.getUser = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.ResistanceDTO} returns this
 */
proto.entities.ResistanceDTO.prototype.setUser = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string campaign = 6;
 * @return {string}
 */
proto.entities.ResistanceDTO.prototype.getCampaign = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.ResistanceDTO} returns this
 */
proto.entities.ResistanceDTO.prototype.setCampaign = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string world = 7;
 * @return {string}
 */
proto.entities.ResistanceDTO.prototype.getWorld = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.ResistanceDTO} returns this
 */
proto.entities.ResistanceDTO.prototype.setWorld = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional EffectTypeEnumDTO effectType = 8;
 * @return {!proto.entities.EffectTypeEnumDTO}
 */
proto.entities.ResistanceDTO.prototype.getEffecttype = function() {
  return /** @type {!proto.entities.EffectTypeEnumDTO} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {!proto.entities.EffectTypeEnumDTO} value
 * @return {!proto.entities.ResistanceDTO} returns this
 */
proto.entities.ResistanceDTO.prototype.setEffecttype = function(value) {
  return jspb.Message.setProto3EnumField(this, 8, value);
};


/**
 * optional string targetEffect = 9;
 * @return {string}
 */
proto.entities.ResistanceDTO.prototype.getTargeteffect = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.ResistanceDTO} returns this
 */
proto.entities.ResistanceDTO.prototype.setTargeteffect = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string targetEntity = 10;
 * @return {string}
 */
proto.entities.ResistanceDTO.prototype.getTargetentity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.ResistanceDTO} returns this
 */
proto.entities.ResistanceDTO.prototype.setTargetentity = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional int32 createdAt = 11;
 * @return {number}
 */
proto.entities.ResistanceDTO.prototype.getCreatedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.entities.ResistanceDTO} returns this
 */
proto.entities.ResistanceDTO.prototype.setCreatedat = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.entities.ResistancesDTO.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entities.ResistancesDTO.prototype.toObject = function(opt_includeInstance) {
  return proto.entities.ResistancesDTO.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entities.ResistancesDTO} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.ResistancesDTO.toObject = function(includeInstance, msg) {
  var f, obj = {
    arrList: jspb.Message.toObjectList(msg.getArrList(),
    proto.entities.ResistanceDTO.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entities.ResistancesDTO}
 */
proto.entities.ResistancesDTO.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entities.ResistancesDTO;
  return proto.entities.ResistancesDTO.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entities.ResistancesDTO} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entities.ResistancesDTO}
 */
proto.entities.ResistancesDTO.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.entities.ResistanceDTO;
      reader.readMessage(value,proto.entities.ResistanceDTO.deserializeBinaryFromReader);
      msg.addArr(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entities.ResistancesDTO.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entities.ResistancesDTO.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entities.ResistancesDTO} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.ResistancesDTO.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getArrList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.entities.ResistanceDTO.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ResistanceDTO arr = 1;
 * @return {!Array<!proto.entities.ResistanceDTO>}
 */
proto.entities.ResistancesDTO.prototype.getArrList = function() {
  return /** @type{!Array<!proto.entities.ResistanceDTO>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.entities.ResistanceDTO, 1));
};


/**
 * @param {!Array<!proto.entities.ResistanceDTO>} value
 * @return {!proto.entities.ResistancesDTO} returns this
*/
proto.entities.ResistancesDTO.prototype.setArrList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.entities.ResistanceDTO=} opt_value
 * @param {number=} opt_index
 * @return {!proto.entities.ResistanceDTO}
 */
proto.entities.ResistancesDTO.prototype.addArr = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.entities.ResistanceDTO, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.entities.ResistancesDTO} returns this
 */
proto.entities.ResistancesDTO.prototype.clearArrList = function() {
  return this.setArrList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.entities.StatusDTO.repeatedFields_ = [9];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entities.StatusDTO.prototype.toObject = function(opt_includeInstance) {
  return proto.entities.StatusDTO.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entities.StatusDTO} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.StatusDTO.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    blueprintid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    name: jspb.Message.getFieldWithDefault(msg, 3, ""),
    metadata: (f = msg.getMetadata()) && proto.entities.Metadata.toObject(includeInstance, f),
    user: jspb.Message.getFieldWithDefault(msg, 5, ""),
    campaign: jspb.Message.getFieldWithDefault(msg, 6, ""),
    world: jspb.Message.getFieldWithDefault(msg, 7, ""),
    type: jspb.Message.getFieldWithDefault(msg, 8, 0),
    effectsList: (f = jspb.Message.getRepeatedField(msg, 9)) == null ? undefined : f,
    duration: jspb.Message.getFieldWithDefault(msg, 10, 0),
    description: jspb.Message.getFieldWithDefault(msg, 11, ""),
    targetentity: jspb.Message.getFieldWithDefault(msg, 12, ""),
    createdat: jspb.Message.getFieldWithDefault(msg, 13, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entities.StatusDTO}
 */
proto.entities.StatusDTO.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entities.StatusDTO;
  return proto.entities.StatusDTO.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entities.StatusDTO} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entities.StatusDTO}
 */
proto.entities.StatusDTO.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBlueprintid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = new proto.entities.Metadata;
      reader.readMessage(value,proto.entities.Metadata.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setUser(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setCampaign(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setWorld(value);
      break;
    case 8:
      var value = /** @type {!proto.entities.EffectTypeEnumDTO} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.addEffects(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDuration(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setTargetentity(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCreatedat(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entities.StatusDTO.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entities.StatusDTO.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entities.StatusDTO} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.StatusDTO.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBlueprintid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.entities.Metadata.serializeBinaryToWriter
    );
  }
  f = message.getUser();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getCampaign();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getWorld();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      8,
      f
    );
  }
  f = message.getEffectsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      9,
      f
    );
  }
  f = message.getDuration();
  if (f !== 0) {
    writer.writeInt32(
      10,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getTargetentity();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getCreatedat();
  if (f !== 0) {
    writer.writeInt32(
      13,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.entities.StatusDTO.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.StatusDTO} returns this
 */
proto.entities.StatusDTO.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string blueprintId = 2;
 * @return {string}
 */
proto.entities.StatusDTO.prototype.getBlueprintid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.StatusDTO} returns this
 */
proto.entities.StatusDTO.prototype.setBlueprintid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.entities.StatusDTO.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.StatusDTO} returns this
 */
proto.entities.StatusDTO.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional Metadata metadata = 4;
 * @return {?proto.entities.Metadata}
 */
proto.entities.StatusDTO.prototype.getMetadata = function() {
  return /** @type{?proto.entities.Metadata} */ (
    jspb.Message.getWrapperField(this, proto.entities.Metadata, 4));
};


/**
 * @param {?proto.entities.Metadata|undefined} value
 * @return {!proto.entities.StatusDTO} returns this
*/
proto.entities.StatusDTO.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.entities.StatusDTO} returns this
 */
proto.entities.StatusDTO.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.entities.StatusDTO.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string user = 5;
 * @return {string}
 */
proto.entities.StatusDTO.prototype.getUser = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.StatusDTO} returns this
 */
proto.entities.StatusDTO.prototype.setUser = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string campaign = 6;
 * @return {string}
 */
proto.entities.StatusDTO.prototype.getCampaign = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.StatusDTO} returns this
 */
proto.entities.StatusDTO.prototype.setCampaign = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string world = 7;
 * @return {string}
 */
proto.entities.StatusDTO.prototype.getWorld = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.StatusDTO} returns this
 */
proto.entities.StatusDTO.prototype.setWorld = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional EffectTypeEnumDTO type = 8;
 * @return {!proto.entities.EffectTypeEnumDTO}
 */
proto.entities.StatusDTO.prototype.getType = function() {
  return /** @type {!proto.entities.EffectTypeEnumDTO} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {!proto.entities.EffectTypeEnumDTO} value
 * @return {!proto.entities.StatusDTO} returns this
 */
proto.entities.StatusDTO.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 8, value);
};


/**
 * repeated string effects = 9;
 * @return {!Array<string>}
 */
proto.entities.StatusDTO.prototype.getEffectsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 9));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.entities.StatusDTO} returns this
 */
proto.entities.StatusDTO.prototype.setEffectsList = function(value) {
  return jspb.Message.setField(this, 9, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.entities.StatusDTO} returns this
 */
proto.entities.StatusDTO.prototype.addEffects = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 9, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.entities.StatusDTO} returns this
 */
proto.entities.StatusDTO.prototype.clearEffectsList = function() {
  return this.setEffectsList([]);
};


/**
 * optional int32 duration = 10;
 * @return {number}
 */
proto.entities.StatusDTO.prototype.getDuration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.entities.StatusDTO} returns this
 */
proto.entities.StatusDTO.prototype.setDuration = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional string description = 11;
 * @return {string}
 */
proto.entities.StatusDTO.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.StatusDTO} returns this
 */
proto.entities.StatusDTO.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string targetEntity = 12;
 * @return {string}
 */
proto.entities.StatusDTO.prototype.getTargetentity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.StatusDTO} returns this
 */
proto.entities.StatusDTO.prototype.setTargetentity = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional int32 createdAt = 13;
 * @return {number}
 */
proto.entities.StatusDTO.prototype.getCreatedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {number} value
 * @return {!proto.entities.StatusDTO} returns this
 */
proto.entities.StatusDTO.prototype.setCreatedat = function(value) {
  return jspb.Message.setProto3IntField(this, 13, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.entities.StatusesDTO.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entities.StatusesDTO.prototype.toObject = function(opt_includeInstance) {
  return proto.entities.StatusesDTO.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entities.StatusesDTO} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.StatusesDTO.toObject = function(includeInstance, msg) {
  var f, obj = {
    arrList: jspb.Message.toObjectList(msg.getArrList(),
    proto.entities.StatusDTO.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entities.StatusesDTO}
 */
proto.entities.StatusesDTO.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entities.StatusesDTO;
  return proto.entities.StatusesDTO.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entities.StatusesDTO} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entities.StatusesDTO}
 */
proto.entities.StatusesDTO.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.entities.StatusDTO;
      reader.readMessage(value,proto.entities.StatusDTO.deserializeBinaryFromReader);
      msg.addArr(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entities.StatusesDTO.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entities.StatusesDTO.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entities.StatusesDTO} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.StatusesDTO.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getArrList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.entities.StatusDTO.serializeBinaryToWriter
    );
  }
};


/**
 * repeated StatusDTO arr = 1;
 * @return {!Array<!proto.entities.StatusDTO>}
 */
proto.entities.StatusesDTO.prototype.getArrList = function() {
  return /** @type{!Array<!proto.entities.StatusDTO>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.entities.StatusDTO, 1));
};


/**
 * @param {!Array<!proto.entities.StatusDTO>} value
 * @return {!proto.entities.StatusesDTO} returns this
*/
proto.entities.StatusesDTO.prototype.setArrList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.entities.StatusDTO=} opt_value
 * @param {number=} opt_index
 * @return {!proto.entities.StatusDTO}
 */
proto.entities.StatusesDTO.prototype.addArr = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.entities.StatusDTO, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.entities.StatusesDTO} returns this
 */
proto.entities.StatusesDTO.prototype.clearArrList = function() {
  return this.setArrList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entities.ItemSetDTO.prototype.toObject = function(opt_includeInstance) {
  return proto.entities.ItemSetDTO.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entities.ItemSetDTO} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.ItemSetDTO.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    blueprintid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    metadata: (f = msg.getMetadata()) && proto.entities.Metadata.toObject(includeInstance, f),
    user: jspb.Message.getFieldWithDefault(msg, 4, ""),
    campaign: jspb.Message.getFieldWithDefault(msg, 5, ""),
    world: jspb.Message.getFieldWithDefault(msg, 6, ""),
    set: (f = msg.getSet()) && proto.entities.GenerationInstructionDTO.toObject(includeInstance, f),
    targetentity: jspb.Message.getFieldWithDefault(msg, 8, ""),
    createdat: jspb.Message.getFieldWithDefault(msg, 9, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entities.ItemSetDTO}
 */
proto.entities.ItemSetDTO.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entities.ItemSetDTO;
  return proto.entities.ItemSetDTO.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entities.ItemSetDTO} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entities.ItemSetDTO}
 */
proto.entities.ItemSetDTO.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBlueprintid(value);
      break;
    case 3:
      var value = new proto.entities.Metadata;
      reader.readMessage(value,proto.entities.Metadata.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setUser(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setCampaign(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setWorld(value);
      break;
    case 7:
      var value = new proto.entities.GenerationInstructionDTO;
      reader.readMessage(value,proto.entities.GenerationInstructionDTO.deserializeBinaryFromReader);
      msg.setSet(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setTargetentity(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCreatedat(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entities.ItemSetDTO.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entities.ItemSetDTO.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entities.ItemSetDTO} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.ItemSetDTO.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBlueprintid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.entities.Metadata.serializeBinaryToWriter
    );
  }
  f = message.getUser();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getCampaign();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getWorld();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getSet();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.entities.GenerationInstructionDTO.serializeBinaryToWriter
    );
  }
  f = message.getTargetentity();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getCreatedat();
  if (f !== 0) {
    writer.writeInt32(
      9,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.entities.ItemSetDTO.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.ItemSetDTO} returns this
 */
proto.entities.ItemSetDTO.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string blueprintId = 2;
 * @return {string}
 */
proto.entities.ItemSetDTO.prototype.getBlueprintid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.ItemSetDTO} returns this
 */
proto.entities.ItemSetDTO.prototype.setBlueprintid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Metadata metadata = 3;
 * @return {?proto.entities.Metadata}
 */
proto.entities.ItemSetDTO.prototype.getMetadata = function() {
  return /** @type{?proto.entities.Metadata} */ (
    jspb.Message.getWrapperField(this, proto.entities.Metadata, 3));
};


/**
 * @param {?proto.entities.Metadata|undefined} value
 * @return {!proto.entities.ItemSetDTO} returns this
*/
proto.entities.ItemSetDTO.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.entities.ItemSetDTO} returns this
 */
proto.entities.ItemSetDTO.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.entities.ItemSetDTO.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string user = 4;
 * @return {string}
 */
proto.entities.ItemSetDTO.prototype.getUser = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.ItemSetDTO} returns this
 */
proto.entities.ItemSetDTO.prototype.setUser = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string campaign = 5;
 * @return {string}
 */
proto.entities.ItemSetDTO.prototype.getCampaign = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.ItemSetDTO} returns this
 */
proto.entities.ItemSetDTO.prototype.setCampaign = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string world = 6;
 * @return {string}
 */
proto.entities.ItemSetDTO.prototype.getWorld = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.ItemSetDTO} returns this
 */
proto.entities.ItemSetDTO.prototype.setWorld = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional GenerationInstructionDTO set = 7;
 * @return {?proto.entities.GenerationInstructionDTO}
 */
proto.entities.ItemSetDTO.prototype.getSet = function() {
  return /** @type{?proto.entities.GenerationInstructionDTO} */ (
    jspb.Message.getWrapperField(this, proto.entities.GenerationInstructionDTO, 7));
};


/**
 * @param {?proto.entities.GenerationInstructionDTO|undefined} value
 * @return {!proto.entities.ItemSetDTO} returns this
*/
proto.entities.ItemSetDTO.prototype.setSet = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.entities.ItemSetDTO} returns this
 */
proto.entities.ItemSetDTO.prototype.clearSet = function() {
  return this.setSet(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.entities.ItemSetDTO.prototype.hasSet = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional string targetEntity = 8;
 * @return {string}
 */
proto.entities.ItemSetDTO.prototype.getTargetentity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.ItemSetDTO} returns this
 */
proto.entities.ItemSetDTO.prototype.setTargetentity = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional int32 createdAt = 9;
 * @return {number}
 */
proto.entities.ItemSetDTO.prototype.getCreatedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.entities.ItemSetDTO} returns this
 */
proto.entities.ItemSetDTO.prototype.setCreatedat = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.entities.ItemSetsDTO.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entities.ItemSetsDTO.prototype.toObject = function(opt_includeInstance) {
  return proto.entities.ItemSetsDTO.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entities.ItemSetsDTO} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.ItemSetsDTO.toObject = function(includeInstance, msg) {
  var f, obj = {
    arrList: jspb.Message.toObjectList(msg.getArrList(),
    proto.entities.ItemSetDTO.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entities.ItemSetsDTO}
 */
proto.entities.ItemSetsDTO.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entities.ItemSetsDTO;
  return proto.entities.ItemSetsDTO.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entities.ItemSetsDTO} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entities.ItemSetsDTO}
 */
proto.entities.ItemSetsDTO.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.entities.ItemSetDTO;
      reader.readMessage(value,proto.entities.ItemSetDTO.deserializeBinaryFromReader);
      msg.addArr(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entities.ItemSetsDTO.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entities.ItemSetsDTO.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entities.ItemSetsDTO} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.ItemSetsDTO.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getArrList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.entities.ItemSetDTO.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ItemSetDTO arr = 1;
 * @return {!Array<!proto.entities.ItemSetDTO>}
 */
proto.entities.ItemSetsDTO.prototype.getArrList = function() {
  return /** @type{!Array<!proto.entities.ItemSetDTO>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.entities.ItemSetDTO, 1));
};


/**
 * @param {!Array<!proto.entities.ItemSetDTO>} value
 * @return {!proto.entities.ItemSetsDTO} returns this
*/
proto.entities.ItemSetsDTO.prototype.setArrList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.entities.ItemSetDTO=} opt_value
 * @param {number=} opt_index
 * @return {!proto.entities.ItemSetDTO}
 */
proto.entities.ItemSetsDTO.prototype.addArr = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.entities.ItemSetDTO, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.entities.ItemSetsDTO} returns this
 */
proto.entities.ItemSetsDTO.prototype.clearArrList = function() {
  return this.setArrList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.entities.ItemDTO.repeatedFields_ = [31,33,41];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entities.ItemDTO.prototype.toObject = function(opt_includeInstance) {
  return proto.entities.ItemDTO.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entities.ItemDTO} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.ItemDTO.toObject = function(includeInstance, msg) {
  var f, obj = {
    blueprintid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    metadata: (f = msg.getMetadata()) && proto.entities.Metadata.toObject(includeInstance, f),
    targetentity: jspb.Message.getFieldWithDefault(msg, 3, ""),
    id: jspb.Message.getFieldWithDefault(msg, 4, ""),
    name: jspb.Message.getFieldWithDefault(msg, 5, ""),
    description: jspb.Message.getFieldWithDefault(msg, 6, ""),
    size: (f = msg.getSize()) && proto.entities.GridSizeDTO.toObject(includeInstance, f),
    quantity: jspb.Message.getFieldWithDefault(msg, 8, 0),
    maxquantity: jspb.Message.getFieldWithDefault(msg, 9, 0),
    basevalue: jspb.Message.getFieldWithDefault(msg, 10, 0),
    actions: (f = msg.getActions()) && proto.entities.ItemActionsDTO.toObject(includeInstance, f),
    requirements: (f = msg.getRequirements()) && proto.entities.ItemRequirementsDTO.toObject(includeInstance, f),
    stackable: jspb.Message.getBooleanFieldWithDefault(msg, 13, false),
    repairable: jspb.Message.getBooleanFieldWithDefault(msg, 14, false),
    drinkable: jspb.Message.getBooleanFieldWithDefault(msg, 15, false),
    edible: jspb.Message.getBooleanFieldWithDefault(msg, 16, false),
    gridposition: (f = msg.getGridposition()) && proto.entities.GridPositionDTO.toObject(includeInstance, f),
    durability: jspb.Message.getFieldWithDefault(msg, 18, 0),
    maxdurability: jspb.Message.getFieldWithDefault(msg, 19, 0),
    damagepierce: jspb.Message.getFieldWithDefault(msg, 20, ""),
    armorclass: jspb.Message.getFieldWithDefault(msg, 21, 0),
    stealthdisadvantage: jspb.Message.getBooleanFieldWithDefault(msg, 22, false),
    damageslash: jspb.Message.getFieldWithDefault(msg, 23, ""),
    damageblunt: jspb.Message.getFieldWithDefault(msg, 24, ""),
    range: jspb.Message.getFieldWithDefault(msg, 25, 0),
    twohanded: jspb.Message.getBooleanFieldWithDefault(msg, 26, false),
    nutrition: jspb.Message.getFieldWithDefault(msg, 27, 0),
    spoilage: jspb.Message.getFieldWithDefault(msg, 28, 0),
    thirstquenched: jspb.Message.getFieldWithDefault(msg, 29, 0),
    type: jspb.Message.getFieldWithDefault(msg, 30, ""),
    storageslotList: (f = jspb.Message.getRepeatedField(msg, 31)) == null ? undefined : f,
    storageslots: (f = msg.getStorageslots()) && proto.entities.StorageSlotsDTO.toObject(includeInstance, f),
    equipmentslotList: (f = jspb.Message.getRepeatedField(msg, 33)) == null ? undefined : f,
    user: jspb.Message.getFieldWithDefault(msg, 34, ""),
    campaign: jspb.Message.getFieldWithDefault(msg, 35, ""),
    world: jspb.Message.getFieldWithDefault(msg, 36, ""),
    trainedskill: jspb.Message.getFieldWithDefault(msg, 37, ""),
    storageslotdefinition: (f = msg.getStorageslotdefinition()) && proto.entities.StorageSlotDefinitionsDTO.toObject(includeInstance, f),
    weight: jspb.Message.getFloatingPointFieldWithDefault(msg, 39, 0.0),
    createdat: jspb.Message.getFieldWithDefault(msg, 40, 0),
    tagsList: (f = jspb.Message.getRepeatedField(msg, 41)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entities.ItemDTO}
 */
proto.entities.ItemDTO.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entities.ItemDTO;
  return proto.entities.ItemDTO.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entities.ItemDTO} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entities.ItemDTO}
 */
proto.entities.ItemDTO.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBlueprintid(value);
      break;
    case 2:
      var value = new proto.entities.Metadata;
      reader.readMessage(value,proto.entities.Metadata.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTargetentity(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 7:
      var value = new proto.entities.GridSizeDTO;
      reader.readMessage(value,proto.entities.GridSizeDTO.deserializeBinaryFromReader);
      msg.setSize(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setQuantity(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMaxquantity(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setBasevalue(value);
      break;
    case 11:
      var value = new proto.entities.ItemActionsDTO;
      reader.readMessage(value,proto.entities.ItemActionsDTO.deserializeBinaryFromReader);
      msg.setActions(value);
      break;
    case 12:
      var value = new proto.entities.ItemRequirementsDTO;
      reader.readMessage(value,proto.entities.ItemRequirementsDTO.deserializeBinaryFromReader);
      msg.setRequirements(value);
      break;
    case 13:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setStackable(value);
      break;
    case 14:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRepairable(value);
      break;
    case 15:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDrinkable(value);
      break;
    case 16:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEdible(value);
      break;
    case 17:
      var value = new proto.entities.GridPositionDTO;
      reader.readMessage(value,proto.entities.GridPositionDTO.deserializeBinaryFromReader);
      msg.setGridposition(value);
      break;
    case 18:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDurability(value);
      break;
    case 19:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMaxdurability(value);
      break;
    case 20:
      var value = /** @type {string} */ (reader.readString());
      msg.setDamagepierce(value);
      break;
    case 21:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setArmorclass(value);
      break;
    case 22:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setStealthdisadvantage(value);
      break;
    case 23:
      var value = /** @type {string} */ (reader.readString());
      msg.setDamageslash(value);
      break;
    case 24:
      var value = /** @type {string} */ (reader.readString());
      msg.setDamageblunt(value);
      break;
    case 25:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRange(value);
      break;
    case 26:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setTwohanded(value);
      break;
    case 27:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNutrition(value);
      break;
    case 28:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSpoilage(value);
      break;
    case 29:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setThirstquenched(value);
      break;
    case 30:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 31:
      var value = /** @type {string} */ (reader.readString());
      msg.addStorageslot(value);
      break;
    case 32:
      var value = new proto.entities.StorageSlotsDTO;
      reader.readMessage(value,proto.entities.StorageSlotsDTO.deserializeBinaryFromReader);
      msg.setStorageslots(value);
      break;
    case 33:
      var value = /** @type {string} */ (reader.readString());
      msg.addEquipmentslot(value);
      break;
    case 34:
      var value = /** @type {string} */ (reader.readString());
      msg.setUser(value);
      break;
    case 35:
      var value = /** @type {string} */ (reader.readString());
      msg.setCampaign(value);
      break;
    case 36:
      var value = /** @type {string} */ (reader.readString());
      msg.setWorld(value);
      break;
    case 37:
      var value = /** @type {string} */ (reader.readString());
      msg.setTrainedskill(value);
      break;
    case 38:
      var value = new proto.entities.StorageSlotDefinitionsDTO;
      reader.readMessage(value,proto.entities.StorageSlotDefinitionsDTO.deserializeBinaryFromReader);
      msg.setStorageslotdefinition(value);
      break;
    case 39:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setWeight(value);
      break;
    case 40:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCreatedat(value);
      break;
    case 41:
      var value = /** @type {string} */ (reader.readString());
      msg.addTags(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entities.ItemDTO.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entities.ItemDTO.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entities.ItemDTO} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.ItemDTO.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBlueprintid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.entities.Metadata.serializeBinaryToWriter
    );
  }
  f = message.getTargetentity();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getSize();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.entities.GridSizeDTO.serializeBinaryToWriter
    );
  }
  f = message.getQuantity();
  if (f !== 0) {
    writer.writeInt32(
      8,
      f
    );
  }
  f = message.getMaxquantity();
  if (f !== 0) {
    writer.writeInt32(
      9,
      f
    );
  }
  f = message.getBasevalue();
  if (f !== 0) {
    writer.writeInt32(
      10,
      f
    );
  }
  f = message.getActions();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.entities.ItemActionsDTO.serializeBinaryToWriter
    );
  }
  f = message.getRequirements();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.entities.ItemRequirementsDTO.serializeBinaryToWriter
    );
  }
  f = message.getStackable();
  if (f) {
    writer.writeBool(
      13,
      f
    );
  }
  f = message.getRepairable();
  if (f) {
    writer.writeBool(
      14,
      f
    );
  }
  f = message.getDrinkable();
  if (f) {
    writer.writeBool(
      15,
      f
    );
  }
  f = message.getEdible();
  if (f) {
    writer.writeBool(
      16,
      f
    );
  }
  f = message.getGridposition();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      proto.entities.GridPositionDTO.serializeBinaryToWriter
    );
  }
  f = message.getDurability();
  if (f !== 0) {
    writer.writeInt32(
      18,
      f
    );
  }
  f = message.getMaxdurability();
  if (f !== 0) {
    writer.writeInt32(
      19,
      f
    );
  }
  f = message.getDamagepierce();
  if (f.length > 0) {
    writer.writeString(
      20,
      f
    );
  }
  f = message.getArmorclass();
  if (f !== 0) {
    writer.writeInt32(
      21,
      f
    );
  }
  f = message.getStealthdisadvantage();
  if (f) {
    writer.writeBool(
      22,
      f
    );
  }
  f = message.getDamageslash();
  if (f.length > 0) {
    writer.writeString(
      23,
      f
    );
  }
  f = message.getDamageblunt();
  if (f.length > 0) {
    writer.writeString(
      24,
      f
    );
  }
  f = message.getRange();
  if (f !== 0) {
    writer.writeInt32(
      25,
      f
    );
  }
  f = message.getTwohanded();
  if (f) {
    writer.writeBool(
      26,
      f
    );
  }
  f = message.getNutrition();
  if (f !== 0) {
    writer.writeInt32(
      27,
      f
    );
  }
  f = message.getSpoilage();
  if (f !== 0) {
    writer.writeInt32(
      28,
      f
    );
  }
  f = message.getThirstquenched();
  if (f !== 0) {
    writer.writeInt32(
      29,
      f
    );
  }
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      30,
      f
    );
  }
  f = message.getStorageslotList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      31,
      f
    );
  }
  f = message.getStorageslots();
  if (f != null) {
    writer.writeMessage(
      32,
      f,
      proto.entities.StorageSlotsDTO.serializeBinaryToWriter
    );
  }
  f = message.getEquipmentslotList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      33,
      f
    );
  }
  f = message.getUser();
  if (f.length > 0) {
    writer.writeString(
      34,
      f
    );
  }
  f = message.getCampaign();
  if (f.length > 0) {
    writer.writeString(
      35,
      f
    );
  }
  f = message.getWorld();
  if (f.length > 0) {
    writer.writeString(
      36,
      f
    );
  }
  f = message.getTrainedskill();
  if (f.length > 0) {
    writer.writeString(
      37,
      f
    );
  }
  f = message.getStorageslotdefinition();
  if (f != null) {
    writer.writeMessage(
      38,
      f,
      proto.entities.StorageSlotDefinitionsDTO.serializeBinaryToWriter
    );
  }
  f = message.getWeight();
  if (f !== 0.0) {
    writer.writeFloat(
      39,
      f
    );
  }
  f = message.getCreatedat();
  if (f !== 0) {
    writer.writeInt32(
      40,
      f
    );
  }
  f = message.getTagsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      41,
      f
    );
  }
};


/**
 * optional string blueprintId = 1;
 * @return {string}
 */
proto.entities.ItemDTO.prototype.getBlueprintid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.ItemDTO} returns this
 */
proto.entities.ItemDTO.prototype.setBlueprintid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Metadata metadata = 2;
 * @return {?proto.entities.Metadata}
 */
proto.entities.ItemDTO.prototype.getMetadata = function() {
  return /** @type{?proto.entities.Metadata} */ (
    jspb.Message.getWrapperField(this, proto.entities.Metadata, 2));
};


/**
 * @param {?proto.entities.Metadata|undefined} value
 * @return {!proto.entities.ItemDTO} returns this
*/
proto.entities.ItemDTO.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.entities.ItemDTO} returns this
 */
proto.entities.ItemDTO.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.entities.ItemDTO.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string targetEntity = 3;
 * @return {string}
 */
proto.entities.ItemDTO.prototype.getTargetentity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.ItemDTO} returns this
 */
proto.entities.ItemDTO.prototype.setTargetentity = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string id = 4;
 * @return {string}
 */
proto.entities.ItemDTO.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.ItemDTO} returns this
 */
proto.entities.ItemDTO.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string name = 5;
 * @return {string}
 */
proto.entities.ItemDTO.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.ItemDTO} returns this
 */
proto.entities.ItemDTO.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string description = 6;
 * @return {string}
 */
proto.entities.ItemDTO.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.ItemDTO} returns this
 */
proto.entities.ItemDTO.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional GridSizeDTO size = 7;
 * @return {?proto.entities.GridSizeDTO}
 */
proto.entities.ItemDTO.prototype.getSize = function() {
  return /** @type{?proto.entities.GridSizeDTO} */ (
    jspb.Message.getWrapperField(this, proto.entities.GridSizeDTO, 7));
};


/**
 * @param {?proto.entities.GridSizeDTO|undefined} value
 * @return {!proto.entities.ItemDTO} returns this
*/
proto.entities.ItemDTO.prototype.setSize = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.entities.ItemDTO} returns this
 */
proto.entities.ItemDTO.prototype.clearSize = function() {
  return this.setSize(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.entities.ItemDTO.prototype.hasSize = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional int32 quantity = 8;
 * @return {number}
 */
proto.entities.ItemDTO.prototype.getQuantity = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.entities.ItemDTO} returns this
 */
proto.entities.ItemDTO.prototype.setQuantity = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional int32 maxQuantity = 9;
 * @return {number}
 */
proto.entities.ItemDTO.prototype.getMaxquantity = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.entities.ItemDTO} returns this
 */
proto.entities.ItemDTO.prototype.setMaxquantity = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional int32 baseValue = 10;
 * @return {number}
 */
proto.entities.ItemDTO.prototype.getBasevalue = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.entities.ItemDTO} returns this
 */
proto.entities.ItemDTO.prototype.setBasevalue = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional ItemActionsDTO actions = 11;
 * @return {?proto.entities.ItemActionsDTO}
 */
proto.entities.ItemDTO.prototype.getActions = function() {
  return /** @type{?proto.entities.ItemActionsDTO} */ (
    jspb.Message.getWrapperField(this, proto.entities.ItemActionsDTO, 11));
};


/**
 * @param {?proto.entities.ItemActionsDTO|undefined} value
 * @return {!proto.entities.ItemDTO} returns this
*/
proto.entities.ItemDTO.prototype.setActions = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.entities.ItemDTO} returns this
 */
proto.entities.ItemDTO.prototype.clearActions = function() {
  return this.setActions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.entities.ItemDTO.prototype.hasActions = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional ItemRequirementsDTO requirements = 12;
 * @return {?proto.entities.ItemRequirementsDTO}
 */
proto.entities.ItemDTO.prototype.getRequirements = function() {
  return /** @type{?proto.entities.ItemRequirementsDTO} */ (
    jspb.Message.getWrapperField(this, proto.entities.ItemRequirementsDTO, 12));
};


/**
 * @param {?proto.entities.ItemRequirementsDTO|undefined} value
 * @return {!proto.entities.ItemDTO} returns this
*/
proto.entities.ItemDTO.prototype.setRequirements = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.entities.ItemDTO} returns this
 */
proto.entities.ItemDTO.prototype.clearRequirements = function() {
  return this.setRequirements(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.entities.ItemDTO.prototype.hasRequirements = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional bool stackable = 13;
 * @return {boolean}
 */
proto.entities.ItemDTO.prototype.getStackable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 13, false));
};


/**
 * @param {boolean} value
 * @return {!proto.entities.ItemDTO} returns this
 */
proto.entities.ItemDTO.prototype.setStackable = function(value) {
  return jspb.Message.setProto3BooleanField(this, 13, value);
};


/**
 * optional bool repairable = 14;
 * @return {boolean}
 */
proto.entities.ItemDTO.prototype.getRepairable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 14, false));
};


/**
 * @param {boolean} value
 * @return {!proto.entities.ItemDTO} returns this
 */
proto.entities.ItemDTO.prototype.setRepairable = function(value) {
  return jspb.Message.setProto3BooleanField(this, 14, value);
};


/**
 * optional bool drinkable = 15;
 * @return {boolean}
 */
proto.entities.ItemDTO.prototype.getDrinkable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 15, false));
};


/**
 * @param {boolean} value
 * @return {!proto.entities.ItemDTO} returns this
 */
proto.entities.ItemDTO.prototype.setDrinkable = function(value) {
  return jspb.Message.setProto3BooleanField(this, 15, value);
};


/**
 * optional bool edible = 16;
 * @return {boolean}
 */
proto.entities.ItemDTO.prototype.getEdible = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 16, false));
};


/**
 * @param {boolean} value
 * @return {!proto.entities.ItemDTO} returns this
 */
proto.entities.ItemDTO.prototype.setEdible = function(value) {
  return jspb.Message.setProto3BooleanField(this, 16, value);
};


/**
 * optional GridPositionDTO gridPosition = 17;
 * @return {?proto.entities.GridPositionDTO}
 */
proto.entities.ItemDTO.prototype.getGridposition = function() {
  return /** @type{?proto.entities.GridPositionDTO} */ (
    jspb.Message.getWrapperField(this, proto.entities.GridPositionDTO, 17));
};


/**
 * @param {?proto.entities.GridPositionDTO|undefined} value
 * @return {!proto.entities.ItemDTO} returns this
*/
proto.entities.ItemDTO.prototype.setGridposition = function(value) {
  return jspb.Message.setWrapperField(this, 17, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.entities.ItemDTO} returns this
 */
proto.entities.ItemDTO.prototype.clearGridposition = function() {
  return this.setGridposition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.entities.ItemDTO.prototype.hasGridposition = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional int32 durability = 18;
 * @return {number}
 */
proto.entities.ItemDTO.prototype.getDurability = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 18, 0));
};


/**
 * @param {number} value
 * @return {!proto.entities.ItemDTO} returns this
 */
proto.entities.ItemDTO.prototype.setDurability = function(value) {
  return jspb.Message.setProto3IntField(this, 18, value);
};


/**
 * optional int32 maxDurability = 19;
 * @return {number}
 */
proto.entities.ItemDTO.prototype.getMaxdurability = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 19, 0));
};


/**
 * @param {number} value
 * @return {!proto.entities.ItemDTO} returns this
 */
proto.entities.ItemDTO.prototype.setMaxdurability = function(value) {
  return jspb.Message.setProto3IntField(this, 19, value);
};


/**
 * optional string damagePierce = 20;
 * @return {string}
 */
proto.entities.ItemDTO.prototype.getDamagepierce = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 20, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.ItemDTO} returns this
 */
proto.entities.ItemDTO.prototype.setDamagepierce = function(value) {
  return jspb.Message.setProto3StringField(this, 20, value);
};


/**
 * optional int32 armorClass = 21;
 * @return {number}
 */
proto.entities.ItemDTO.prototype.getArmorclass = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 21, 0));
};


/**
 * @param {number} value
 * @return {!proto.entities.ItemDTO} returns this
 */
proto.entities.ItemDTO.prototype.setArmorclass = function(value) {
  return jspb.Message.setProto3IntField(this, 21, value);
};


/**
 * optional bool stealthDisadvantage = 22;
 * @return {boolean}
 */
proto.entities.ItemDTO.prototype.getStealthdisadvantage = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 22, false));
};


/**
 * @param {boolean} value
 * @return {!proto.entities.ItemDTO} returns this
 */
proto.entities.ItemDTO.prototype.setStealthdisadvantage = function(value) {
  return jspb.Message.setProto3BooleanField(this, 22, value);
};


/**
 * optional string damageSlash = 23;
 * @return {string}
 */
proto.entities.ItemDTO.prototype.getDamageslash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 23, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.ItemDTO} returns this
 */
proto.entities.ItemDTO.prototype.setDamageslash = function(value) {
  return jspb.Message.setProto3StringField(this, 23, value);
};


/**
 * optional string damageBlunt = 24;
 * @return {string}
 */
proto.entities.ItemDTO.prototype.getDamageblunt = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 24, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.ItemDTO} returns this
 */
proto.entities.ItemDTO.prototype.setDamageblunt = function(value) {
  return jspb.Message.setProto3StringField(this, 24, value);
};


/**
 * optional int32 range = 25;
 * @return {number}
 */
proto.entities.ItemDTO.prototype.getRange = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 25, 0));
};


/**
 * @param {number} value
 * @return {!proto.entities.ItemDTO} returns this
 */
proto.entities.ItemDTO.prototype.setRange = function(value) {
  return jspb.Message.setProto3IntField(this, 25, value);
};


/**
 * optional bool twoHanded = 26;
 * @return {boolean}
 */
proto.entities.ItemDTO.prototype.getTwohanded = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 26, false));
};


/**
 * @param {boolean} value
 * @return {!proto.entities.ItemDTO} returns this
 */
proto.entities.ItemDTO.prototype.setTwohanded = function(value) {
  return jspb.Message.setProto3BooleanField(this, 26, value);
};


/**
 * optional int32 nutrition = 27;
 * @return {number}
 */
proto.entities.ItemDTO.prototype.getNutrition = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 27, 0));
};


/**
 * @param {number} value
 * @return {!proto.entities.ItemDTO} returns this
 */
proto.entities.ItemDTO.prototype.setNutrition = function(value) {
  return jspb.Message.setProto3IntField(this, 27, value);
};


/**
 * optional int32 spoilage = 28;
 * @return {number}
 */
proto.entities.ItemDTO.prototype.getSpoilage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 28, 0));
};


/**
 * @param {number} value
 * @return {!proto.entities.ItemDTO} returns this
 */
proto.entities.ItemDTO.prototype.setSpoilage = function(value) {
  return jspb.Message.setProto3IntField(this, 28, value);
};


/**
 * optional int32 thirstQuenched = 29;
 * @return {number}
 */
proto.entities.ItemDTO.prototype.getThirstquenched = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 29, 0));
};


/**
 * @param {number} value
 * @return {!proto.entities.ItemDTO} returns this
 */
proto.entities.ItemDTO.prototype.setThirstquenched = function(value) {
  return jspb.Message.setProto3IntField(this, 29, value);
};


/**
 * optional string type = 30;
 * @return {string}
 */
proto.entities.ItemDTO.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 30, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.ItemDTO} returns this
 */
proto.entities.ItemDTO.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 30, value);
};


/**
 * repeated string storageSlot = 31;
 * @return {!Array<string>}
 */
proto.entities.ItemDTO.prototype.getStorageslotList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 31));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.entities.ItemDTO} returns this
 */
proto.entities.ItemDTO.prototype.setStorageslotList = function(value) {
  return jspb.Message.setField(this, 31, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.entities.ItemDTO} returns this
 */
proto.entities.ItemDTO.prototype.addStorageslot = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 31, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.entities.ItemDTO} returns this
 */
proto.entities.ItemDTO.prototype.clearStorageslotList = function() {
  return this.setStorageslotList([]);
};


/**
 * optional StorageSlotsDTO storageSlots = 32;
 * @return {?proto.entities.StorageSlotsDTO}
 */
proto.entities.ItemDTO.prototype.getStorageslots = function() {
  return /** @type{?proto.entities.StorageSlotsDTO} */ (
    jspb.Message.getWrapperField(this, proto.entities.StorageSlotsDTO, 32));
};


/**
 * @param {?proto.entities.StorageSlotsDTO|undefined} value
 * @return {!proto.entities.ItemDTO} returns this
*/
proto.entities.ItemDTO.prototype.setStorageslots = function(value) {
  return jspb.Message.setWrapperField(this, 32, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.entities.ItemDTO} returns this
 */
proto.entities.ItemDTO.prototype.clearStorageslots = function() {
  return this.setStorageslots(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.entities.ItemDTO.prototype.hasStorageslots = function() {
  return jspb.Message.getField(this, 32) != null;
};


/**
 * repeated string equipmentSlot = 33;
 * @return {!Array<string>}
 */
proto.entities.ItemDTO.prototype.getEquipmentslotList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 33));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.entities.ItemDTO} returns this
 */
proto.entities.ItemDTO.prototype.setEquipmentslotList = function(value) {
  return jspb.Message.setField(this, 33, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.entities.ItemDTO} returns this
 */
proto.entities.ItemDTO.prototype.addEquipmentslot = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 33, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.entities.ItemDTO} returns this
 */
proto.entities.ItemDTO.prototype.clearEquipmentslotList = function() {
  return this.setEquipmentslotList([]);
};


/**
 * optional string user = 34;
 * @return {string}
 */
proto.entities.ItemDTO.prototype.getUser = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 34, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.ItemDTO} returns this
 */
proto.entities.ItemDTO.prototype.setUser = function(value) {
  return jspb.Message.setProto3StringField(this, 34, value);
};


/**
 * optional string campaign = 35;
 * @return {string}
 */
proto.entities.ItemDTO.prototype.getCampaign = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 35, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.ItemDTO} returns this
 */
proto.entities.ItemDTO.prototype.setCampaign = function(value) {
  return jspb.Message.setProto3StringField(this, 35, value);
};


/**
 * optional string world = 36;
 * @return {string}
 */
proto.entities.ItemDTO.prototype.getWorld = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 36, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.ItemDTO} returns this
 */
proto.entities.ItemDTO.prototype.setWorld = function(value) {
  return jspb.Message.setProto3StringField(this, 36, value);
};


/**
 * optional string trainedSkill = 37;
 * @return {string}
 */
proto.entities.ItemDTO.prototype.getTrainedskill = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 37, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.ItemDTO} returns this
 */
proto.entities.ItemDTO.prototype.setTrainedskill = function(value) {
  return jspb.Message.setProto3StringField(this, 37, value);
};


/**
 * optional StorageSlotDefinitionsDTO storageSlotDefinition = 38;
 * @return {?proto.entities.StorageSlotDefinitionsDTO}
 */
proto.entities.ItemDTO.prototype.getStorageslotdefinition = function() {
  return /** @type{?proto.entities.StorageSlotDefinitionsDTO} */ (
    jspb.Message.getWrapperField(this, proto.entities.StorageSlotDefinitionsDTO, 38));
};


/**
 * @param {?proto.entities.StorageSlotDefinitionsDTO|undefined} value
 * @return {!proto.entities.ItemDTO} returns this
*/
proto.entities.ItemDTO.prototype.setStorageslotdefinition = function(value) {
  return jspb.Message.setWrapperField(this, 38, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.entities.ItemDTO} returns this
 */
proto.entities.ItemDTO.prototype.clearStorageslotdefinition = function() {
  return this.setStorageslotdefinition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.entities.ItemDTO.prototype.hasStorageslotdefinition = function() {
  return jspb.Message.getField(this, 38) != null;
};


/**
 * optional float weight = 39;
 * @return {number}
 */
proto.entities.ItemDTO.prototype.getWeight = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 39, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.entities.ItemDTO} returns this
 */
proto.entities.ItemDTO.prototype.setWeight = function(value) {
  return jspb.Message.setProto3FloatField(this, 39, value);
};


/**
 * optional int32 createdAt = 40;
 * @return {number}
 */
proto.entities.ItemDTO.prototype.getCreatedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 40, 0));
};


/**
 * @param {number} value
 * @return {!proto.entities.ItemDTO} returns this
 */
proto.entities.ItemDTO.prototype.setCreatedat = function(value) {
  return jspb.Message.setProto3IntField(this, 40, value);
};


/**
 * repeated string tags = 41;
 * @return {!Array<string>}
 */
proto.entities.ItemDTO.prototype.getTagsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 41));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.entities.ItemDTO} returns this
 */
proto.entities.ItemDTO.prototype.setTagsList = function(value) {
  return jspb.Message.setField(this, 41, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.entities.ItemDTO} returns this
 */
proto.entities.ItemDTO.prototype.addTags = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 41, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.entities.ItemDTO} returns this
 */
proto.entities.ItemDTO.prototype.clearTagsList = function() {
  return this.setTagsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.entities.ItemsDTO.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entities.ItemsDTO.prototype.toObject = function(opt_includeInstance) {
  return proto.entities.ItemsDTO.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entities.ItemsDTO} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.ItemsDTO.toObject = function(includeInstance, msg) {
  var f, obj = {
    arrList: jspb.Message.toObjectList(msg.getArrList(),
    proto.entities.ItemDTO.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entities.ItemsDTO}
 */
proto.entities.ItemsDTO.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entities.ItemsDTO;
  return proto.entities.ItemsDTO.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entities.ItemsDTO} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entities.ItemsDTO}
 */
proto.entities.ItemsDTO.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.entities.ItemDTO;
      reader.readMessage(value,proto.entities.ItemDTO.deserializeBinaryFromReader);
      msg.addArr(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entities.ItemsDTO.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entities.ItemsDTO.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entities.ItemsDTO} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.ItemsDTO.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getArrList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.entities.ItemDTO.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ItemDTO arr = 1;
 * @return {!Array<!proto.entities.ItemDTO>}
 */
proto.entities.ItemsDTO.prototype.getArrList = function() {
  return /** @type{!Array<!proto.entities.ItemDTO>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.entities.ItemDTO, 1));
};


/**
 * @param {!Array<!proto.entities.ItemDTO>} value
 * @return {!proto.entities.ItemsDTO} returns this
*/
proto.entities.ItemsDTO.prototype.setArrList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.entities.ItemDTO=} opt_value
 * @param {number=} opt_index
 * @return {!proto.entities.ItemDTO}
 */
proto.entities.ItemsDTO.prototype.addArr = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.entities.ItemDTO, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.entities.ItemsDTO} returns this
 */
proto.entities.ItemsDTO.prototype.clearArrList = function() {
  return this.setArrList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entities.GridSizeDTO.prototype.toObject = function(opt_includeInstance) {
  return proto.entities.GridSizeDTO.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entities.GridSizeDTO} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.GridSizeDTO.toObject = function(includeInstance, msg) {
  var f, obj = {
    width: jspb.Message.getFieldWithDefault(msg, 1, 0),
    height: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entities.GridSizeDTO}
 */
proto.entities.GridSizeDTO.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entities.GridSizeDTO;
  return proto.entities.GridSizeDTO.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entities.GridSizeDTO} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entities.GridSizeDTO}
 */
proto.entities.GridSizeDTO.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setWidth(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setHeight(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entities.GridSizeDTO.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entities.GridSizeDTO.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entities.GridSizeDTO} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.GridSizeDTO.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWidth();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getHeight();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional int32 width = 1;
 * @return {number}
 */
proto.entities.GridSizeDTO.prototype.getWidth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.entities.GridSizeDTO} returns this
 */
proto.entities.GridSizeDTO.prototype.setWidth = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 height = 2;
 * @return {number}
 */
proto.entities.GridSizeDTO.prototype.getHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.entities.GridSizeDTO} returns this
 */
proto.entities.GridSizeDTO.prototype.setHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.entities.ItemActionsDTO.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entities.ItemActionsDTO.prototype.toObject = function(opt_includeInstance) {
  return proto.entities.ItemActionsDTO.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entities.ItemActionsDTO} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.ItemActionsDTO.toObject = function(includeInstance, msg) {
  var f, obj = {
    actionsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entities.ItemActionsDTO}
 */
proto.entities.ItemActionsDTO.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entities.ItemActionsDTO;
  return proto.entities.ItemActionsDTO.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entities.ItemActionsDTO} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entities.ItemActionsDTO}
 */
proto.entities.ItemActionsDTO.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var values = /** @type {!Array<!proto.entities.ItemActionEnumDTO>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addActions(values[i]);
      }
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entities.ItemActionsDTO.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entities.ItemActionsDTO.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entities.ItemActionsDTO} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.ItemActionsDTO.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getActionsList();
  if (f.length > 0) {
    writer.writePackedEnum(
      1,
      f
    );
  }
};


/**
 * repeated ItemActionEnumDTO actions = 1;
 * @return {!Array<!proto.entities.ItemActionEnumDTO>}
 */
proto.entities.ItemActionsDTO.prototype.getActionsList = function() {
  return /** @type {!Array<!proto.entities.ItemActionEnumDTO>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<!proto.entities.ItemActionEnumDTO>} value
 * @return {!proto.entities.ItemActionsDTO} returns this
 */
proto.entities.ItemActionsDTO.prototype.setActionsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {!proto.entities.ItemActionEnumDTO} value
 * @param {number=} opt_index
 * @return {!proto.entities.ItemActionsDTO} returns this
 */
proto.entities.ItemActionsDTO.prototype.addActions = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.entities.ItemActionsDTO} returns this
 */
proto.entities.ItemActionsDTO.prototype.clearActionsList = function() {
  return this.setActionsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.entities.StorageSlotDTO.repeatedFields_ = [8];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entities.StorageSlotDTO.prototype.toObject = function(opt_includeInstance) {
  return proto.entities.StorageSlotDTO.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entities.StorageSlotDTO} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.StorageSlotDTO.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    blueprintid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    name: jspb.Message.getFieldWithDefault(msg, 3, ""),
    metadata: (f = msg.getMetadata()) && proto.entities.Metadata.toObject(includeInstance, f),
    user: jspb.Message.getFieldWithDefault(msg, 5, ""),
    campaign: jspb.Message.getFieldWithDefault(msg, 6, ""),
    world: jspb.Message.getFieldWithDefault(msg, 7, ""),
    gridList: (f = jspb.Message.getRepeatedField(msg, 8)) == null ? undefined : f,
    gridstate: (f = msg.getGridstate()) && proto.entities.StorageGridDTO.toObject(includeInstance, f),
    maxweight: jspb.Message.getFieldWithDefault(msg, 10, 0),
    parentitem: jspb.Message.getFieldWithDefault(msg, 11, ""),
    storeditems: (f = msg.getStoreditems()) && proto.entities.ItemsDTO.toObject(includeInstance, f),
    targetentity: jspb.Message.getFieldWithDefault(msg, 13, ""),
    createdat: jspb.Message.getFieldWithDefault(msg, 14, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entities.StorageSlotDTO}
 */
proto.entities.StorageSlotDTO.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entities.StorageSlotDTO;
  return proto.entities.StorageSlotDTO.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entities.StorageSlotDTO} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entities.StorageSlotDTO}
 */
proto.entities.StorageSlotDTO.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBlueprintid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = new proto.entities.Metadata;
      reader.readMessage(value,proto.entities.Metadata.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setUser(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setCampaign(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setWorld(value);
      break;
    case 8:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt32() : [reader.readInt32()]);
      for (var i = 0; i < values.length; i++) {
        msg.addGrid(values[i]);
      }
      break;
    case 9:
      var value = new proto.entities.StorageGridDTO;
      reader.readMessage(value,proto.entities.StorageGridDTO.deserializeBinaryFromReader);
      msg.setGridstate(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMaxweight(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setParentitem(value);
      break;
    case 12:
      var value = new proto.entities.ItemsDTO;
      reader.readMessage(value,proto.entities.ItemsDTO.deserializeBinaryFromReader);
      msg.setStoreditems(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setTargetentity(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCreatedat(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entities.StorageSlotDTO.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entities.StorageSlotDTO.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entities.StorageSlotDTO} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.StorageSlotDTO.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBlueprintid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.entities.Metadata.serializeBinaryToWriter
    );
  }
  f = message.getUser();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getCampaign();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getWorld();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getGridList();
  if (f.length > 0) {
    writer.writePackedInt32(
      8,
      f
    );
  }
  f = message.getGridstate();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.entities.StorageGridDTO.serializeBinaryToWriter
    );
  }
  f = message.getMaxweight();
  if (f !== 0) {
    writer.writeInt32(
      10,
      f
    );
  }
  f = message.getParentitem();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getStoreditems();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.entities.ItemsDTO.serializeBinaryToWriter
    );
  }
  f = message.getTargetentity();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getCreatedat();
  if (f !== 0) {
    writer.writeInt32(
      14,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.entities.StorageSlotDTO.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.StorageSlotDTO} returns this
 */
proto.entities.StorageSlotDTO.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string blueprintId = 2;
 * @return {string}
 */
proto.entities.StorageSlotDTO.prototype.getBlueprintid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.StorageSlotDTO} returns this
 */
proto.entities.StorageSlotDTO.prototype.setBlueprintid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.entities.StorageSlotDTO.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.StorageSlotDTO} returns this
 */
proto.entities.StorageSlotDTO.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional Metadata metadata = 4;
 * @return {?proto.entities.Metadata}
 */
proto.entities.StorageSlotDTO.prototype.getMetadata = function() {
  return /** @type{?proto.entities.Metadata} */ (
    jspb.Message.getWrapperField(this, proto.entities.Metadata, 4));
};


/**
 * @param {?proto.entities.Metadata|undefined} value
 * @return {!proto.entities.StorageSlotDTO} returns this
*/
proto.entities.StorageSlotDTO.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.entities.StorageSlotDTO} returns this
 */
proto.entities.StorageSlotDTO.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.entities.StorageSlotDTO.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string user = 5;
 * @return {string}
 */
proto.entities.StorageSlotDTO.prototype.getUser = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.StorageSlotDTO} returns this
 */
proto.entities.StorageSlotDTO.prototype.setUser = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string campaign = 6;
 * @return {string}
 */
proto.entities.StorageSlotDTO.prototype.getCampaign = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.StorageSlotDTO} returns this
 */
proto.entities.StorageSlotDTO.prototype.setCampaign = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string world = 7;
 * @return {string}
 */
proto.entities.StorageSlotDTO.prototype.getWorld = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.StorageSlotDTO} returns this
 */
proto.entities.StorageSlotDTO.prototype.setWorld = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * repeated int32 grid = 8;
 * @return {!Array<number>}
 */
proto.entities.StorageSlotDTO.prototype.getGridList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 8));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.entities.StorageSlotDTO} returns this
 */
proto.entities.StorageSlotDTO.prototype.setGridList = function(value) {
  return jspb.Message.setField(this, 8, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.entities.StorageSlotDTO} returns this
 */
proto.entities.StorageSlotDTO.prototype.addGrid = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 8, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.entities.StorageSlotDTO} returns this
 */
proto.entities.StorageSlotDTO.prototype.clearGridList = function() {
  return this.setGridList([]);
};


/**
 * optional StorageGridDTO gridState = 9;
 * @return {?proto.entities.StorageGridDTO}
 */
proto.entities.StorageSlotDTO.prototype.getGridstate = function() {
  return /** @type{?proto.entities.StorageGridDTO} */ (
    jspb.Message.getWrapperField(this, proto.entities.StorageGridDTO, 9));
};


/**
 * @param {?proto.entities.StorageGridDTO|undefined} value
 * @return {!proto.entities.StorageSlotDTO} returns this
*/
proto.entities.StorageSlotDTO.prototype.setGridstate = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.entities.StorageSlotDTO} returns this
 */
proto.entities.StorageSlotDTO.prototype.clearGridstate = function() {
  return this.setGridstate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.entities.StorageSlotDTO.prototype.hasGridstate = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional int32 maxWeight = 10;
 * @return {number}
 */
proto.entities.StorageSlotDTO.prototype.getMaxweight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.entities.StorageSlotDTO} returns this
 */
proto.entities.StorageSlotDTO.prototype.setMaxweight = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional string parentItem = 11;
 * @return {string}
 */
proto.entities.StorageSlotDTO.prototype.getParentitem = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.StorageSlotDTO} returns this
 */
proto.entities.StorageSlotDTO.prototype.setParentitem = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional ItemsDTO storedItems = 12;
 * @return {?proto.entities.ItemsDTO}
 */
proto.entities.StorageSlotDTO.prototype.getStoreditems = function() {
  return /** @type{?proto.entities.ItemsDTO} */ (
    jspb.Message.getWrapperField(this, proto.entities.ItemsDTO, 12));
};


/**
 * @param {?proto.entities.ItemsDTO|undefined} value
 * @return {!proto.entities.StorageSlotDTO} returns this
*/
proto.entities.StorageSlotDTO.prototype.setStoreditems = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.entities.StorageSlotDTO} returns this
 */
proto.entities.StorageSlotDTO.prototype.clearStoreditems = function() {
  return this.setStoreditems(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.entities.StorageSlotDTO.prototype.hasStoreditems = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional string targetEntity = 13;
 * @return {string}
 */
proto.entities.StorageSlotDTO.prototype.getTargetentity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.StorageSlotDTO} returns this
 */
proto.entities.StorageSlotDTO.prototype.setTargetentity = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional int32 createdAt = 14;
 * @return {number}
 */
proto.entities.StorageSlotDTO.prototype.getCreatedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/**
 * @param {number} value
 * @return {!proto.entities.StorageSlotDTO} returns this
 */
proto.entities.StorageSlotDTO.prototype.setCreatedat = function(value) {
  return jspb.Message.setProto3IntField(this, 14, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.entities.StorageSlotsDTO.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entities.StorageSlotsDTO.prototype.toObject = function(opt_includeInstance) {
  return proto.entities.StorageSlotsDTO.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entities.StorageSlotsDTO} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.StorageSlotsDTO.toObject = function(includeInstance, msg) {
  var f, obj = {
    arrList: jspb.Message.toObjectList(msg.getArrList(),
    proto.entities.StorageSlotDTO.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entities.StorageSlotsDTO}
 */
proto.entities.StorageSlotsDTO.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entities.StorageSlotsDTO;
  return proto.entities.StorageSlotsDTO.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entities.StorageSlotsDTO} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entities.StorageSlotsDTO}
 */
proto.entities.StorageSlotsDTO.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.entities.StorageSlotDTO;
      reader.readMessage(value,proto.entities.StorageSlotDTO.deserializeBinaryFromReader);
      msg.addArr(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entities.StorageSlotsDTO.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entities.StorageSlotsDTO.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entities.StorageSlotsDTO} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.StorageSlotsDTO.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getArrList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.entities.StorageSlotDTO.serializeBinaryToWriter
    );
  }
};


/**
 * repeated StorageSlotDTO arr = 1;
 * @return {!Array<!proto.entities.StorageSlotDTO>}
 */
proto.entities.StorageSlotsDTO.prototype.getArrList = function() {
  return /** @type{!Array<!proto.entities.StorageSlotDTO>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.entities.StorageSlotDTO, 1));
};


/**
 * @param {!Array<!proto.entities.StorageSlotDTO>} value
 * @return {!proto.entities.StorageSlotsDTO} returns this
*/
proto.entities.StorageSlotsDTO.prototype.setArrList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.entities.StorageSlotDTO=} opt_value
 * @param {number=} opt_index
 * @return {!proto.entities.StorageSlotDTO}
 */
proto.entities.StorageSlotsDTO.prototype.addArr = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.entities.StorageSlotDTO, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.entities.StorageSlotsDTO} returns this
 */
proto.entities.StorageSlotsDTO.prototype.clearArrList = function() {
  return this.setArrList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.entities.StorageGridDTO.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entities.StorageGridDTO.prototype.toObject = function(opt_includeInstance) {
  return proto.entities.StorageGridDTO.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entities.StorageGridDTO} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.StorageGridDTO.toObject = function(includeInstance, msg) {
  var f, obj = {
    cellsList: jspb.Message.toObjectList(msg.getCellsList(),
    proto.entities.StorageGridCellDTO.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entities.StorageGridDTO}
 */
proto.entities.StorageGridDTO.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entities.StorageGridDTO;
  return proto.entities.StorageGridDTO.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entities.StorageGridDTO} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entities.StorageGridDTO}
 */
proto.entities.StorageGridDTO.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.entities.StorageGridCellDTO;
      reader.readMessage(value,proto.entities.StorageGridCellDTO.deserializeBinaryFromReader);
      msg.addCells(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entities.StorageGridDTO.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entities.StorageGridDTO.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entities.StorageGridDTO} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.StorageGridDTO.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCellsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.entities.StorageGridCellDTO.serializeBinaryToWriter
    );
  }
};


/**
 * repeated StorageGridCellDTO cells = 1;
 * @return {!Array<!proto.entities.StorageGridCellDTO>}
 */
proto.entities.StorageGridDTO.prototype.getCellsList = function() {
  return /** @type{!Array<!proto.entities.StorageGridCellDTO>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.entities.StorageGridCellDTO, 1));
};


/**
 * @param {!Array<!proto.entities.StorageGridCellDTO>} value
 * @return {!proto.entities.StorageGridDTO} returns this
*/
proto.entities.StorageGridDTO.prototype.setCellsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.entities.StorageGridCellDTO=} opt_value
 * @param {number=} opt_index
 * @return {!proto.entities.StorageGridCellDTO}
 */
proto.entities.StorageGridDTO.prototype.addCells = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.entities.StorageGridCellDTO, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.entities.StorageGridDTO} returns this
 */
proto.entities.StorageGridDTO.prototype.clearCellsList = function() {
  return this.setCellsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entities.StorageGridCellDTO.prototype.toObject = function(opt_includeInstance) {
  return proto.entities.StorageGridCellDTO.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entities.StorageGridCellDTO} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.StorageGridCellDTO.toObject = function(includeInstance, msg) {
  var f, obj = {
    row: jspb.Message.getFieldWithDefault(msg, 1, 0),
    column: jspb.Message.getFieldWithDefault(msg, 2, 0),
    value: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entities.StorageGridCellDTO}
 */
proto.entities.StorageGridCellDTO.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entities.StorageGridCellDTO;
  return proto.entities.StorageGridCellDTO.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entities.StorageGridCellDTO} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entities.StorageGridCellDTO}
 */
proto.entities.StorageGridCellDTO.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRow(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setColumn(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entities.StorageGridCellDTO.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entities.StorageGridCellDTO.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entities.StorageGridCellDTO} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.StorageGridCellDTO.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRow();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getColumn();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getValue();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int32 row = 1;
 * @return {number}
 */
proto.entities.StorageGridCellDTO.prototype.getRow = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.entities.StorageGridCellDTO} returns this
 */
proto.entities.StorageGridCellDTO.prototype.setRow = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 column = 2;
 * @return {number}
 */
proto.entities.StorageGridCellDTO.prototype.getColumn = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.entities.StorageGridCellDTO} returns this
 */
proto.entities.StorageGridCellDTO.prototype.setColumn = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string value = 3;
 * @return {string}
 */
proto.entities.StorageGridCellDTO.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.StorageGridCellDTO} returns this
 */
proto.entities.StorageGridCellDTO.prototype.setValue = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.entities.ItemRequirementDTO.oneofGroups_ = [[3,4]];

/**
 * @enum {number}
 */
proto.entities.ItemRequirementDTO.ValueCase = {
  VALUE_NOT_SET: 0,
  NUMBER: 3,
  FLAG: 4
};

/**
 * @return {proto.entities.ItemRequirementDTO.ValueCase}
 */
proto.entities.ItemRequirementDTO.prototype.getValueCase = function() {
  return /** @type {proto.entities.ItemRequirementDTO.ValueCase} */(jspb.Message.computeOneofCase(this, proto.entities.ItemRequirementDTO.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entities.ItemRequirementDTO.prototype.toObject = function(opt_includeInstance) {
  return proto.entities.ItemRequirementDTO.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entities.ItemRequirementDTO} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.ItemRequirementDTO.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    number: jspb.Message.getFieldWithDefault(msg, 3, 0),
    flag: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    clazz: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entities.ItemRequirementDTO}
 */
proto.entities.ItemRequirementDTO.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entities.ItemRequirementDTO;
  return proto.entities.ItemRequirementDTO.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entities.ItemRequirementDTO} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entities.ItemRequirementDTO}
 */
proto.entities.ItemRequirementDTO.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.entities.ItemRequirementTypeEnumDTO} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNumber(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setFlag(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setClazz(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entities.ItemRequirementDTO.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entities.ItemRequirementDTO.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entities.ItemRequirementDTO} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.ItemRequirementDTO.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getClazz();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional ItemRequirementTypeEnumDTO type = 1;
 * @return {!proto.entities.ItemRequirementTypeEnumDTO}
 */
proto.entities.ItemRequirementDTO.prototype.getType = function() {
  return /** @type {!proto.entities.ItemRequirementTypeEnumDTO} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.entities.ItemRequirementTypeEnumDTO} value
 * @return {!proto.entities.ItemRequirementDTO} returns this
 */
proto.entities.ItemRequirementDTO.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.entities.ItemRequirementDTO.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.ItemRequirementDTO} returns this
 */
proto.entities.ItemRequirementDTO.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 number = 3;
 * @return {number}
 */
proto.entities.ItemRequirementDTO.prototype.getNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.entities.ItemRequirementDTO} returns this
 */
proto.entities.ItemRequirementDTO.prototype.setNumber = function(value) {
  return jspb.Message.setOneofField(this, 3, proto.entities.ItemRequirementDTO.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.entities.ItemRequirementDTO} returns this
 */
proto.entities.ItemRequirementDTO.prototype.clearNumber = function() {
  return jspb.Message.setOneofField(this, 3, proto.entities.ItemRequirementDTO.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.entities.ItemRequirementDTO.prototype.hasNumber = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool flag = 4;
 * @return {boolean}
 */
proto.entities.ItemRequirementDTO.prototype.getFlag = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.entities.ItemRequirementDTO} returns this
 */
proto.entities.ItemRequirementDTO.prototype.setFlag = function(value) {
  return jspb.Message.setOneofField(this, 4, proto.entities.ItemRequirementDTO.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.entities.ItemRequirementDTO} returns this
 */
proto.entities.ItemRequirementDTO.prototype.clearFlag = function() {
  return jspb.Message.setOneofField(this, 4, proto.entities.ItemRequirementDTO.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.entities.ItemRequirementDTO.prototype.hasFlag = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string clazz = 5;
 * @return {string}
 */
proto.entities.ItemRequirementDTO.prototype.getClazz = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.ItemRequirementDTO} returns this
 */
proto.entities.ItemRequirementDTO.prototype.setClazz = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.entities.ItemRequirementsDTO.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entities.ItemRequirementsDTO.prototype.toObject = function(opt_includeInstance) {
  return proto.entities.ItemRequirementsDTO.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entities.ItemRequirementsDTO} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.ItemRequirementsDTO.toObject = function(includeInstance, msg) {
  var f, obj = {
    arrList: jspb.Message.toObjectList(msg.getArrList(),
    proto.entities.ItemRequirementDTO.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entities.ItemRequirementsDTO}
 */
proto.entities.ItemRequirementsDTO.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entities.ItemRequirementsDTO;
  return proto.entities.ItemRequirementsDTO.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entities.ItemRequirementsDTO} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entities.ItemRequirementsDTO}
 */
proto.entities.ItemRequirementsDTO.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.entities.ItemRequirementDTO;
      reader.readMessage(value,proto.entities.ItemRequirementDTO.deserializeBinaryFromReader);
      msg.addArr(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entities.ItemRequirementsDTO.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entities.ItemRequirementsDTO.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entities.ItemRequirementsDTO} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.ItemRequirementsDTO.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getArrList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.entities.ItemRequirementDTO.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ItemRequirementDTO arr = 1;
 * @return {!Array<!proto.entities.ItemRequirementDTO>}
 */
proto.entities.ItemRequirementsDTO.prototype.getArrList = function() {
  return /** @type{!Array<!proto.entities.ItemRequirementDTO>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.entities.ItemRequirementDTO, 1));
};


/**
 * @param {!Array<!proto.entities.ItemRequirementDTO>} value
 * @return {!proto.entities.ItemRequirementsDTO} returns this
*/
proto.entities.ItemRequirementsDTO.prototype.setArrList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.entities.ItemRequirementDTO=} opt_value
 * @param {number=} opt_index
 * @return {!proto.entities.ItemRequirementDTO}
 */
proto.entities.ItemRequirementsDTO.prototype.addArr = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.entities.ItemRequirementDTO, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.entities.ItemRequirementsDTO} returns this
 */
proto.entities.ItemRequirementsDTO.prototype.clearArrList = function() {
  return this.setArrList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.entities.CharacterDTO.repeatedFields_ = [17,18,19,21,22,23,24,25,28];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entities.CharacterDTO.prototype.toObject = function(opt_includeInstance) {
  return proto.entities.CharacterDTO.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entities.CharacterDTO} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.CharacterDTO.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    blueprintid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    metadata: (f = msg.getMetadata()) && proto.entities.Metadata.toObject(includeInstance, f),
    user: jspb.Message.getFieldWithDefault(msg, 4, ""),
    campaign: jspb.Message.getFieldWithDefault(msg, 5, ""),
    world: jspb.Message.getFieldWithDefault(msg, 6, ""),
    firstname: jspb.Message.getFieldWithDefault(msg, 7, ""),
    lastname: jspb.Message.getFieldWithDefault(msg, 8, ""),
    race: jspb.Message.getFieldWithDefault(msg, 9, ""),
    gender: jspb.Message.getFieldWithDefault(msg, 10, 0),
    birthsign: jspb.Message.getFieldWithDefault(msg, 11, ""),
    birthyear: jspb.Message.getFieldWithDefault(msg, 12, 0),
    birthmonth: jspb.Message.getFieldWithDefault(msg, 13, ""),
    birthday: jspb.Message.getFieldWithDefault(msg, 14, 0),
    skillsMap: (f = msg.getSkillsMap()) ? f.toObject(includeInstance, undefined) : [],
    equipmentslots: (f = msg.getEquipmentslots()) && proto.entities.EquipmentSlotsDTO.toObject(includeInstance, f),
    professionsList: (f = jspb.Message.getRepeatedField(msg, 17)) == null ? undefined : f,
    memorypoolsList: (f = jspb.Message.getRepeatedField(msg, 18)) == null ? undefined : f,
    charactermemoriesList: (f = jspb.Message.getRepeatedField(msg, 19)) == null ? undefined : f,
    enneagramtype: jspb.Message.getFieldWithDefault(msg, 20, ""),
    traitsList: (f = jspb.Message.getRepeatedField(msg, 21)) == null ? undefined : f,
    diseasesList: (f = jspb.Message.getRepeatedField(msg, 22)) == null ? undefined : f,
    addictionsList: (f = jspb.Message.getRepeatedField(msg, 23)) == null ? undefined : f,
    factionsList: (f = jspb.Message.getRepeatedField(msg, 24)) == null ? undefined : f,
    tagsList: (f = jspb.Message.getRepeatedField(msg, 25)) == null ? undefined : f,
    targetentity: jspb.Message.getFieldWithDefault(msg, 26, ""),
    birthera: jspb.Message.getFieldWithDefault(msg, 27, ""),
    pastexperiencesList: (f = jspb.Message.getRepeatedField(msg, 28)) == null ? undefined : f,
    createdat: jspb.Message.getFieldWithDefault(msg, 29, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entities.CharacterDTO}
 */
proto.entities.CharacterDTO.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entities.CharacterDTO;
  return proto.entities.CharacterDTO.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entities.CharacterDTO} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entities.CharacterDTO}
 */
proto.entities.CharacterDTO.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBlueprintid(value);
      break;
    case 3:
      var value = new proto.entities.Metadata;
      reader.readMessage(value,proto.entities.Metadata.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setUser(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setCampaign(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setWorld(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setFirstname(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setLastname(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setRace(value);
      break;
    case 10:
      var value = /** @type {!proto.entities.GenderEnumDTO} */ (reader.readEnum());
      msg.setGender(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setBirthsign(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setBirthyear(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setBirthmonth(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setBirthday(value);
      break;
    case 15:
      var value = msg.getSkillsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readInt32, null, "", 0);
         });
      break;
    case 16:
      var value = new proto.entities.EquipmentSlotsDTO;
      reader.readMessage(value,proto.entities.EquipmentSlotsDTO.deserializeBinaryFromReader);
      msg.setEquipmentslots(value);
      break;
    case 17:
      var value = /** @type {string} */ (reader.readString());
      msg.addProfessions(value);
      break;
    case 18:
      var value = /** @type {string} */ (reader.readString());
      msg.addMemorypools(value);
      break;
    case 19:
      var value = /** @type {string} */ (reader.readString());
      msg.addCharactermemories(value);
      break;
    case 20:
      var value = /** @type {string} */ (reader.readString());
      msg.setEnneagramtype(value);
      break;
    case 21:
      var value = /** @type {string} */ (reader.readString());
      msg.addTraits(value);
      break;
    case 22:
      var value = /** @type {string} */ (reader.readString());
      msg.addDiseases(value);
      break;
    case 23:
      var value = /** @type {string} */ (reader.readString());
      msg.addAddictions(value);
      break;
    case 24:
      var value = /** @type {string} */ (reader.readString());
      msg.addFactions(value);
      break;
    case 25:
      var value = /** @type {string} */ (reader.readString());
      msg.addTags(value);
      break;
    case 26:
      var value = /** @type {string} */ (reader.readString());
      msg.setTargetentity(value);
      break;
    case 27:
      var value = /** @type {string} */ (reader.readString());
      msg.setBirthera(value);
      break;
    case 28:
      var value = /** @type {string} */ (reader.readString());
      msg.addPastexperiences(value);
      break;
    case 29:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCreatedat(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entities.CharacterDTO.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entities.CharacterDTO.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entities.CharacterDTO} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.CharacterDTO.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBlueprintid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.entities.Metadata.serializeBinaryToWriter
    );
  }
  f = message.getUser();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getCampaign();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getWorld();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getFirstname();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getLastname();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getRace();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getGender();
  if (f !== 0.0) {
    writer.writeEnum(
      10,
      f
    );
  }
  f = message.getBirthsign();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getBirthyear();
  if (f !== 0) {
    writer.writeInt32(
      12,
      f
    );
  }
  f = message.getBirthmonth();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getBirthday();
  if (f !== 0) {
    writer.writeInt32(
      14,
      f
    );
  }
  f = message.getSkillsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(15, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeInt32);
  }
  f = message.getEquipmentslots();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      proto.entities.EquipmentSlotsDTO.serializeBinaryToWriter
    );
  }
  f = message.getProfessionsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      17,
      f
    );
  }
  f = message.getMemorypoolsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      18,
      f
    );
  }
  f = message.getCharactermemoriesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      19,
      f
    );
  }
  f = message.getEnneagramtype();
  if (f.length > 0) {
    writer.writeString(
      20,
      f
    );
  }
  f = message.getTraitsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      21,
      f
    );
  }
  f = message.getDiseasesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      22,
      f
    );
  }
  f = message.getAddictionsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      23,
      f
    );
  }
  f = message.getFactionsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      24,
      f
    );
  }
  f = message.getTagsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      25,
      f
    );
  }
  f = message.getTargetentity();
  if (f.length > 0) {
    writer.writeString(
      26,
      f
    );
  }
  f = message.getBirthera();
  if (f.length > 0) {
    writer.writeString(
      27,
      f
    );
  }
  f = message.getPastexperiencesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      28,
      f
    );
  }
  f = message.getCreatedat();
  if (f !== 0) {
    writer.writeInt32(
      29,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.entities.CharacterDTO.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.CharacterDTO} returns this
 */
proto.entities.CharacterDTO.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string blueprintId = 2;
 * @return {string}
 */
proto.entities.CharacterDTO.prototype.getBlueprintid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.CharacterDTO} returns this
 */
proto.entities.CharacterDTO.prototype.setBlueprintid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Metadata metadata = 3;
 * @return {?proto.entities.Metadata}
 */
proto.entities.CharacterDTO.prototype.getMetadata = function() {
  return /** @type{?proto.entities.Metadata} */ (
    jspb.Message.getWrapperField(this, proto.entities.Metadata, 3));
};


/**
 * @param {?proto.entities.Metadata|undefined} value
 * @return {!proto.entities.CharacterDTO} returns this
*/
proto.entities.CharacterDTO.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.entities.CharacterDTO} returns this
 */
proto.entities.CharacterDTO.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.entities.CharacterDTO.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string user = 4;
 * @return {string}
 */
proto.entities.CharacterDTO.prototype.getUser = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.CharacterDTO} returns this
 */
proto.entities.CharacterDTO.prototype.setUser = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string campaign = 5;
 * @return {string}
 */
proto.entities.CharacterDTO.prototype.getCampaign = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.CharacterDTO} returns this
 */
proto.entities.CharacterDTO.prototype.setCampaign = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string world = 6;
 * @return {string}
 */
proto.entities.CharacterDTO.prototype.getWorld = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.CharacterDTO} returns this
 */
proto.entities.CharacterDTO.prototype.setWorld = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string firstName = 7;
 * @return {string}
 */
proto.entities.CharacterDTO.prototype.getFirstname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.CharacterDTO} returns this
 */
proto.entities.CharacterDTO.prototype.setFirstname = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string lastName = 8;
 * @return {string}
 */
proto.entities.CharacterDTO.prototype.getLastname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.CharacterDTO} returns this
 */
proto.entities.CharacterDTO.prototype.setLastname = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string race = 9;
 * @return {string}
 */
proto.entities.CharacterDTO.prototype.getRace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.CharacterDTO} returns this
 */
proto.entities.CharacterDTO.prototype.setRace = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional GenderEnumDTO gender = 10;
 * @return {!proto.entities.GenderEnumDTO}
 */
proto.entities.CharacterDTO.prototype.getGender = function() {
  return /** @type {!proto.entities.GenderEnumDTO} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {!proto.entities.GenderEnumDTO} value
 * @return {!proto.entities.CharacterDTO} returns this
 */
proto.entities.CharacterDTO.prototype.setGender = function(value) {
  return jspb.Message.setProto3EnumField(this, 10, value);
};


/**
 * optional string birthsign = 11;
 * @return {string}
 */
proto.entities.CharacterDTO.prototype.getBirthsign = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.CharacterDTO} returns this
 */
proto.entities.CharacterDTO.prototype.setBirthsign = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional int32 birthYear = 12;
 * @return {number}
 */
proto.entities.CharacterDTO.prototype.getBirthyear = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.entities.CharacterDTO} returns this
 */
proto.entities.CharacterDTO.prototype.setBirthyear = function(value) {
  return jspb.Message.setProto3IntField(this, 12, value);
};


/**
 * optional string birthMonth = 13;
 * @return {string}
 */
proto.entities.CharacterDTO.prototype.getBirthmonth = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.CharacterDTO} returns this
 */
proto.entities.CharacterDTO.prototype.setBirthmonth = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional int32 birthDay = 14;
 * @return {number}
 */
proto.entities.CharacterDTO.prototype.getBirthday = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/**
 * @param {number} value
 * @return {!proto.entities.CharacterDTO} returns this
 */
proto.entities.CharacterDTO.prototype.setBirthday = function(value) {
  return jspb.Message.setProto3IntField(this, 14, value);
};


/**
 * map<string, int32> skills = 15;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,number>}
 */
proto.entities.CharacterDTO.prototype.getSkillsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,number>} */ (
      jspb.Message.getMapField(this, 15, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.entities.CharacterDTO} returns this
 */
proto.entities.CharacterDTO.prototype.clearSkillsMap = function() {
  this.getSkillsMap().clear();
  return this;};


/**
 * optional EquipmentSlotsDTO equipmentSlots = 16;
 * @return {?proto.entities.EquipmentSlotsDTO}
 */
proto.entities.CharacterDTO.prototype.getEquipmentslots = function() {
  return /** @type{?proto.entities.EquipmentSlotsDTO} */ (
    jspb.Message.getWrapperField(this, proto.entities.EquipmentSlotsDTO, 16));
};


/**
 * @param {?proto.entities.EquipmentSlotsDTO|undefined} value
 * @return {!proto.entities.CharacterDTO} returns this
*/
proto.entities.CharacterDTO.prototype.setEquipmentslots = function(value) {
  return jspb.Message.setWrapperField(this, 16, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.entities.CharacterDTO} returns this
 */
proto.entities.CharacterDTO.prototype.clearEquipmentslots = function() {
  return this.setEquipmentslots(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.entities.CharacterDTO.prototype.hasEquipmentslots = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * repeated string professions = 17;
 * @return {!Array<string>}
 */
proto.entities.CharacterDTO.prototype.getProfessionsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 17));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.entities.CharacterDTO} returns this
 */
proto.entities.CharacterDTO.prototype.setProfessionsList = function(value) {
  return jspb.Message.setField(this, 17, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.entities.CharacterDTO} returns this
 */
proto.entities.CharacterDTO.prototype.addProfessions = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 17, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.entities.CharacterDTO} returns this
 */
proto.entities.CharacterDTO.prototype.clearProfessionsList = function() {
  return this.setProfessionsList([]);
};


/**
 * repeated string memoryPools = 18;
 * @return {!Array<string>}
 */
proto.entities.CharacterDTO.prototype.getMemorypoolsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 18));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.entities.CharacterDTO} returns this
 */
proto.entities.CharacterDTO.prototype.setMemorypoolsList = function(value) {
  return jspb.Message.setField(this, 18, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.entities.CharacterDTO} returns this
 */
proto.entities.CharacterDTO.prototype.addMemorypools = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 18, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.entities.CharacterDTO} returns this
 */
proto.entities.CharacterDTO.prototype.clearMemorypoolsList = function() {
  return this.setMemorypoolsList([]);
};


/**
 * repeated string characterMemories = 19;
 * @return {!Array<string>}
 */
proto.entities.CharacterDTO.prototype.getCharactermemoriesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 19));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.entities.CharacterDTO} returns this
 */
proto.entities.CharacterDTO.prototype.setCharactermemoriesList = function(value) {
  return jspb.Message.setField(this, 19, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.entities.CharacterDTO} returns this
 */
proto.entities.CharacterDTO.prototype.addCharactermemories = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 19, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.entities.CharacterDTO} returns this
 */
proto.entities.CharacterDTO.prototype.clearCharactermemoriesList = function() {
  return this.setCharactermemoriesList([]);
};


/**
 * optional string enneagramType = 20;
 * @return {string}
 */
proto.entities.CharacterDTO.prototype.getEnneagramtype = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 20, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.CharacterDTO} returns this
 */
proto.entities.CharacterDTO.prototype.setEnneagramtype = function(value) {
  return jspb.Message.setProto3StringField(this, 20, value);
};


/**
 * repeated string traits = 21;
 * @return {!Array<string>}
 */
proto.entities.CharacterDTO.prototype.getTraitsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 21));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.entities.CharacterDTO} returns this
 */
proto.entities.CharacterDTO.prototype.setTraitsList = function(value) {
  return jspb.Message.setField(this, 21, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.entities.CharacterDTO} returns this
 */
proto.entities.CharacterDTO.prototype.addTraits = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 21, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.entities.CharacterDTO} returns this
 */
proto.entities.CharacterDTO.prototype.clearTraitsList = function() {
  return this.setTraitsList([]);
};


/**
 * repeated string diseases = 22;
 * @return {!Array<string>}
 */
proto.entities.CharacterDTO.prototype.getDiseasesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 22));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.entities.CharacterDTO} returns this
 */
proto.entities.CharacterDTO.prototype.setDiseasesList = function(value) {
  return jspb.Message.setField(this, 22, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.entities.CharacterDTO} returns this
 */
proto.entities.CharacterDTO.prototype.addDiseases = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 22, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.entities.CharacterDTO} returns this
 */
proto.entities.CharacterDTO.prototype.clearDiseasesList = function() {
  return this.setDiseasesList([]);
};


/**
 * repeated string addictions = 23;
 * @return {!Array<string>}
 */
proto.entities.CharacterDTO.prototype.getAddictionsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 23));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.entities.CharacterDTO} returns this
 */
proto.entities.CharacterDTO.prototype.setAddictionsList = function(value) {
  return jspb.Message.setField(this, 23, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.entities.CharacterDTO} returns this
 */
proto.entities.CharacterDTO.prototype.addAddictions = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 23, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.entities.CharacterDTO} returns this
 */
proto.entities.CharacterDTO.prototype.clearAddictionsList = function() {
  return this.setAddictionsList([]);
};


/**
 * repeated string factions = 24;
 * @return {!Array<string>}
 */
proto.entities.CharacterDTO.prototype.getFactionsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 24));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.entities.CharacterDTO} returns this
 */
proto.entities.CharacterDTO.prototype.setFactionsList = function(value) {
  return jspb.Message.setField(this, 24, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.entities.CharacterDTO} returns this
 */
proto.entities.CharacterDTO.prototype.addFactions = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 24, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.entities.CharacterDTO} returns this
 */
proto.entities.CharacterDTO.prototype.clearFactionsList = function() {
  return this.setFactionsList([]);
};


/**
 * repeated string tags = 25;
 * @return {!Array<string>}
 */
proto.entities.CharacterDTO.prototype.getTagsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 25));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.entities.CharacterDTO} returns this
 */
proto.entities.CharacterDTO.prototype.setTagsList = function(value) {
  return jspb.Message.setField(this, 25, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.entities.CharacterDTO} returns this
 */
proto.entities.CharacterDTO.prototype.addTags = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 25, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.entities.CharacterDTO} returns this
 */
proto.entities.CharacterDTO.prototype.clearTagsList = function() {
  return this.setTagsList([]);
};


/**
 * optional string targetEntity = 26;
 * @return {string}
 */
proto.entities.CharacterDTO.prototype.getTargetentity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 26, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.CharacterDTO} returns this
 */
proto.entities.CharacterDTO.prototype.setTargetentity = function(value) {
  return jspb.Message.setProto3StringField(this, 26, value);
};


/**
 * optional string birthEra = 27;
 * @return {string}
 */
proto.entities.CharacterDTO.prototype.getBirthera = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 27, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.CharacterDTO} returns this
 */
proto.entities.CharacterDTO.prototype.setBirthera = function(value) {
  return jspb.Message.setProto3StringField(this, 27, value);
};


/**
 * repeated string pastExperiences = 28;
 * @return {!Array<string>}
 */
proto.entities.CharacterDTO.prototype.getPastexperiencesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 28));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.entities.CharacterDTO} returns this
 */
proto.entities.CharacterDTO.prototype.setPastexperiencesList = function(value) {
  return jspb.Message.setField(this, 28, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.entities.CharacterDTO} returns this
 */
proto.entities.CharacterDTO.prototype.addPastexperiences = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 28, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.entities.CharacterDTO} returns this
 */
proto.entities.CharacterDTO.prototype.clearPastexperiencesList = function() {
  return this.setPastexperiencesList([]);
};


/**
 * optional int32 createdAt = 29;
 * @return {number}
 */
proto.entities.CharacterDTO.prototype.getCreatedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 29, 0));
};


/**
 * @param {number} value
 * @return {!proto.entities.CharacterDTO} returns this
 */
proto.entities.CharacterDTO.prototype.setCreatedat = function(value) {
  return jspb.Message.setProto3IntField(this, 29, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.entities.CharactersDTO.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entities.CharactersDTO.prototype.toObject = function(opt_includeInstance) {
  return proto.entities.CharactersDTO.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entities.CharactersDTO} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.CharactersDTO.toObject = function(includeInstance, msg) {
  var f, obj = {
    arrList: jspb.Message.toObjectList(msg.getArrList(),
    proto.entities.CharacterDTO.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entities.CharactersDTO}
 */
proto.entities.CharactersDTO.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entities.CharactersDTO;
  return proto.entities.CharactersDTO.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entities.CharactersDTO} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entities.CharactersDTO}
 */
proto.entities.CharactersDTO.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.entities.CharacterDTO;
      reader.readMessage(value,proto.entities.CharacterDTO.deserializeBinaryFromReader);
      msg.addArr(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entities.CharactersDTO.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entities.CharactersDTO.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entities.CharactersDTO} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.CharactersDTO.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getArrList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.entities.CharacterDTO.serializeBinaryToWriter
    );
  }
};


/**
 * repeated CharacterDTO arr = 1;
 * @return {!Array<!proto.entities.CharacterDTO>}
 */
proto.entities.CharactersDTO.prototype.getArrList = function() {
  return /** @type{!Array<!proto.entities.CharacterDTO>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.entities.CharacterDTO, 1));
};


/**
 * @param {!Array<!proto.entities.CharacterDTO>} value
 * @return {!proto.entities.CharactersDTO} returns this
*/
proto.entities.CharactersDTO.prototype.setArrList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.entities.CharacterDTO=} opt_value
 * @param {number=} opt_index
 * @return {!proto.entities.CharacterDTO}
 */
proto.entities.CharactersDTO.prototype.addArr = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.entities.CharacterDTO, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.entities.CharactersDTO} returns this
 */
proto.entities.CharactersDTO.prototype.clearArrList = function() {
  return this.setArrList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.entities.AddictionDTO.repeatedFields_ = [8];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entities.AddictionDTO.prototype.toObject = function(opt_includeInstance) {
  return proto.entities.AddictionDTO.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entities.AddictionDTO} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.AddictionDTO.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    blueprintid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    name: jspb.Message.getFieldWithDefault(msg, 3, ""),
    metadata: (f = msg.getMetadata()) && proto.entities.Metadata.toObject(includeInstance, f),
    user: jspb.Message.getFieldWithDefault(msg, 5, ""),
    campaign: jspb.Message.getFieldWithDefault(msg, 6, ""),
    world: jspb.Message.getFieldWithDefault(msg, 7, ""),
    charactersList: (f = jspb.Message.getRepeatedField(msg, 8)) == null ? undefined : f,
    targetentity: jspb.Message.getFieldWithDefault(msg, 9, ""),
    createdat: jspb.Message.getFieldWithDefault(msg, 10, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entities.AddictionDTO}
 */
proto.entities.AddictionDTO.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entities.AddictionDTO;
  return proto.entities.AddictionDTO.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entities.AddictionDTO} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entities.AddictionDTO}
 */
proto.entities.AddictionDTO.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBlueprintid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = new proto.entities.Metadata;
      reader.readMessage(value,proto.entities.Metadata.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setUser(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setCampaign(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setWorld(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.addCharacters(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setTargetentity(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCreatedat(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entities.AddictionDTO.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entities.AddictionDTO.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entities.AddictionDTO} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.AddictionDTO.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBlueprintid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.entities.Metadata.serializeBinaryToWriter
    );
  }
  f = message.getUser();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getCampaign();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getWorld();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getCharactersList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      8,
      f
    );
  }
  f = message.getTargetentity();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getCreatedat();
  if (f !== 0) {
    writer.writeInt32(
      10,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.entities.AddictionDTO.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.AddictionDTO} returns this
 */
proto.entities.AddictionDTO.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string blueprintId = 2;
 * @return {string}
 */
proto.entities.AddictionDTO.prototype.getBlueprintid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.AddictionDTO} returns this
 */
proto.entities.AddictionDTO.prototype.setBlueprintid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.entities.AddictionDTO.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.AddictionDTO} returns this
 */
proto.entities.AddictionDTO.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional Metadata metadata = 4;
 * @return {?proto.entities.Metadata}
 */
proto.entities.AddictionDTO.prototype.getMetadata = function() {
  return /** @type{?proto.entities.Metadata} */ (
    jspb.Message.getWrapperField(this, proto.entities.Metadata, 4));
};


/**
 * @param {?proto.entities.Metadata|undefined} value
 * @return {!proto.entities.AddictionDTO} returns this
*/
proto.entities.AddictionDTO.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.entities.AddictionDTO} returns this
 */
proto.entities.AddictionDTO.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.entities.AddictionDTO.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string user = 5;
 * @return {string}
 */
proto.entities.AddictionDTO.prototype.getUser = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.AddictionDTO} returns this
 */
proto.entities.AddictionDTO.prototype.setUser = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string campaign = 6;
 * @return {string}
 */
proto.entities.AddictionDTO.prototype.getCampaign = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.AddictionDTO} returns this
 */
proto.entities.AddictionDTO.prototype.setCampaign = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string world = 7;
 * @return {string}
 */
proto.entities.AddictionDTO.prototype.getWorld = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.AddictionDTO} returns this
 */
proto.entities.AddictionDTO.prototype.setWorld = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * repeated string characters = 8;
 * @return {!Array<string>}
 */
proto.entities.AddictionDTO.prototype.getCharactersList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 8));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.entities.AddictionDTO} returns this
 */
proto.entities.AddictionDTO.prototype.setCharactersList = function(value) {
  return jspb.Message.setField(this, 8, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.entities.AddictionDTO} returns this
 */
proto.entities.AddictionDTO.prototype.addCharacters = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 8, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.entities.AddictionDTO} returns this
 */
proto.entities.AddictionDTO.prototype.clearCharactersList = function() {
  return this.setCharactersList([]);
};


/**
 * optional string targetEntity = 9;
 * @return {string}
 */
proto.entities.AddictionDTO.prototype.getTargetentity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.AddictionDTO} returns this
 */
proto.entities.AddictionDTO.prototype.setTargetentity = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional int32 createdAt = 10;
 * @return {number}
 */
proto.entities.AddictionDTO.prototype.getCreatedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.entities.AddictionDTO} returns this
 */
proto.entities.AddictionDTO.prototype.setCreatedat = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.entities.AddictionsDTO.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entities.AddictionsDTO.prototype.toObject = function(opt_includeInstance) {
  return proto.entities.AddictionsDTO.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entities.AddictionsDTO} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.AddictionsDTO.toObject = function(includeInstance, msg) {
  var f, obj = {
    arrList: jspb.Message.toObjectList(msg.getArrList(),
    proto.entities.AddictionDTO.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entities.AddictionsDTO}
 */
proto.entities.AddictionsDTO.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entities.AddictionsDTO;
  return proto.entities.AddictionsDTO.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entities.AddictionsDTO} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entities.AddictionsDTO}
 */
proto.entities.AddictionsDTO.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.entities.AddictionDTO;
      reader.readMessage(value,proto.entities.AddictionDTO.deserializeBinaryFromReader);
      msg.addArr(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entities.AddictionsDTO.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entities.AddictionsDTO.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entities.AddictionsDTO} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.AddictionsDTO.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getArrList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.entities.AddictionDTO.serializeBinaryToWriter
    );
  }
};


/**
 * repeated AddictionDTO arr = 1;
 * @return {!Array<!proto.entities.AddictionDTO>}
 */
proto.entities.AddictionsDTO.prototype.getArrList = function() {
  return /** @type{!Array<!proto.entities.AddictionDTO>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.entities.AddictionDTO, 1));
};


/**
 * @param {!Array<!proto.entities.AddictionDTO>} value
 * @return {!proto.entities.AddictionsDTO} returns this
*/
proto.entities.AddictionsDTO.prototype.setArrList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.entities.AddictionDTO=} opt_value
 * @param {number=} opt_index
 * @return {!proto.entities.AddictionDTO}
 */
proto.entities.AddictionsDTO.prototype.addArr = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.entities.AddictionDTO, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.entities.AddictionsDTO} returns this
 */
proto.entities.AddictionsDTO.prototype.clearArrList = function() {
  return this.setArrList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.entities.CharacterMemoryDTO.repeatedFields_ = [9,15];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entities.CharacterMemoryDTO.prototype.toObject = function(opt_includeInstance) {
  return proto.entities.CharacterMemoryDTO.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entities.CharacterMemoryDTO} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.CharacterMemoryDTO.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    blueprintid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    name: jspb.Message.getFieldWithDefault(msg, 3, ""),
    metadata: (f = msg.getMetadata()) && proto.entities.Metadata.toObject(includeInstance, f),
    user: jspb.Message.getFieldWithDefault(msg, 5, ""),
    campaign: jspb.Message.getFieldWithDefault(msg, 6, ""),
    world: jspb.Message.getFieldWithDefault(msg, 7, ""),
    character: jspb.Message.getFieldWithDefault(msg, 8, ""),
    factstatusList: jspb.Message.toObjectList(msg.getFactstatusList(),
    proto.entities.FactStatusDTO.toObject, includeInstance),
    importance: jspb.Message.getFieldWithDefault(msg, 10, 0),
    resistance: jspb.Message.getFieldWithDefault(msg, 11, 0),
    accumulator: jspb.Message.getFieldWithDefault(msg, 12, 0),
    acquiredat: jspb.Message.getFieldWithDefault(msg, 13, 0),
    lastupdatedat: jspb.Message.getFieldWithDefault(msg, 14, 0),
    tagsList: (f = jspb.Message.getRepeatedField(msg, 15)) == null ? undefined : f,
    memory: jspb.Message.getFieldWithDefault(msg, 16, ""),
    targetentity: jspb.Message.getFieldWithDefault(msg, 17, ""),
    createdat: jspb.Message.getFieldWithDefault(msg, 18, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entities.CharacterMemoryDTO}
 */
proto.entities.CharacterMemoryDTO.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entities.CharacterMemoryDTO;
  return proto.entities.CharacterMemoryDTO.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entities.CharacterMemoryDTO} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entities.CharacterMemoryDTO}
 */
proto.entities.CharacterMemoryDTO.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBlueprintid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = new proto.entities.Metadata;
      reader.readMessage(value,proto.entities.Metadata.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setUser(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setCampaign(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setWorld(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setCharacter(value);
      break;
    case 9:
      var value = new proto.entities.FactStatusDTO;
      reader.readMessage(value,proto.entities.FactStatusDTO.deserializeBinaryFromReader);
      msg.addFactstatus(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setImportance(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setResistance(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setAccumulator(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setAcquiredat(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLastupdatedat(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.addTags(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.setMemory(value);
      break;
    case 17:
      var value = /** @type {string} */ (reader.readString());
      msg.setTargetentity(value);
      break;
    case 18:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCreatedat(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entities.CharacterMemoryDTO.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entities.CharacterMemoryDTO.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entities.CharacterMemoryDTO} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.CharacterMemoryDTO.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBlueprintid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.entities.Metadata.serializeBinaryToWriter
    );
  }
  f = message.getUser();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getCampaign();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getWorld();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getCharacter();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getFactstatusList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      9,
      f,
      proto.entities.FactStatusDTO.serializeBinaryToWriter
    );
  }
  f = message.getImportance();
  if (f !== 0) {
    writer.writeInt32(
      10,
      f
    );
  }
  f = message.getResistance();
  if (f !== 0) {
    writer.writeInt32(
      11,
      f
    );
  }
  f = message.getAccumulator();
  if (f !== 0) {
    writer.writeInt32(
      12,
      f
    );
  }
  f = message.getAcquiredat();
  if (f !== 0) {
    writer.writeInt32(
      13,
      f
    );
  }
  f = message.getLastupdatedat();
  if (f !== 0) {
    writer.writeInt32(
      14,
      f
    );
  }
  f = message.getTagsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      15,
      f
    );
  }
  f = message.getMemory();
  if (f.length > 0) {
    writer.writeString(
      16,
      f
    );
  }
  f = message.getTargetentity();
  if (f.length > 0) {
    writer.writeString(
      17,
      f
    );
  }
  f = message.getCreatedat();
  if (f !== 0) {
    writer.writeInt32(
      18,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.entities.CharacterMemoryDTO.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.CharacterMemoryDTO} returns this
 */
proto.entities.CharacterMemoryDTO.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string blueprintId = 2;
 * @return {string}
 */
proto.entities.CharacterMemoryDTO.prototype.getBlueprintid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.CharacterMemoryDTO} returns this
 */
proto.entities.CharacterMemoryDTO.prototype.setBlueprintid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.entities.CharacterMemoryDTO.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.CharacterMemoryDTO} returns this
 */
proto.entities.CharacterMemoryDTO.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional Metadata metadata = 4;
 * @return {?proto.entities.Metadata}
 */
proto.entities.CharacterMemoryDTO.prototype.getMetadata = function() {
  return /** @type{?proto.entities.Metadata} */ (
    jspb.Message.getWrapperField(this, proto.entities.Metadata, 4));
};


/**
 * @param {?proto.entities.Metadata|undefined} value
 * @return {!proto.entities.CharacterMemoryDTO} returns this
*/
proto.entities.CharacterMemoryDTO.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.entities.CharacterMemoryDTO} returns this
 */
proto.entities.CharacterMemoryDTO.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.entities.CharacterMemoryDTO.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string user = 5;
 * @return {string}
 */
proto.entities.CharacterMemoryDTO.prototype.getUser = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.CharacterMemoryDTO} returns this
 */
proto.entities.CharacterMemoryDTO.prototype.setUser = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string campaign = 6;
 * @return {string}
 */
proto.entities.CharacterMemoryDTO.prototype.getCampaign = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.CharacterMemoryDTO} returns this
 */
proto.entities.CharacterMemoryDTO.prototype.setCampaign = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string world = 7;
 * @return {string}
 */
proto.entities.CharacterMemoryDTO.prototype.getWorld = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.CharacterMemoryDTO} returns this
 */
proto.entities.CharacterMemoryDTO.prototype.setWorld = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string character = 8;
 * @return {string}
 */
proto.entities.CharacterMemoryDTO.prototype.getCharacter = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.CharacterMemoryDTO} returns this
 */
proto.entities.CharacterMemoryDTO.prototype.setCharacter = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * repeated FactStatusDTO factStatus = 9;
 * @return {!Array<!proto.entities.FactStatusDTO>}
 */
proto.entities.CharacterMemoryDTO.prototype.getFactstatusList = function() {
  return /** @type{!Array<!proto.entities.FactStatusDTO>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.entities.FactStatusDTO, 9));
};


/**
 * @param {!Array<!proto.entities.FactStatusDTO>} value
 * @return {!proto.entities.CharacterMemoryDTO} returns this
*/
proto.entities.CharacterMemoryDTO.prototype.setFactstatusList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 9, value);
};


/**
 * @param {!proto.entities.FactStatusDTO=} opt_value
 * @param {number=} opt_index
 * @return {!proto.entities.FactStatusDTO}
 */
proto.entities.CharacterMemoryDTO.prototype.addFactstatus = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 9, opt_value, proto.entities.FactStatusDTO, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.entities.CharacterMemoryDTO} returns this
 */
proto.entities.CharacterMemoryDTO.prototype.clearFactstatusList = function() {
  return this.setFactstatusList([]);
};


/**
 * optional int32 importance = 10;
 * @return {number}
 */
proto.entities.CharacterMemoryDTO.prototype.getImportance = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.entities.CharacterMemoryDTO} returns this
 */
proto.entities.CharacterMemoryDTO.prototype.setImportance = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional int32 resistance = 11;
 * @return {number}
 */
proto.entities.CharacterMemoryDTO.prototype.getResistance = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.entities.CharacterMemoryDTO} returns this
 */
proto.entities.CharacterMemoryDTO.prototype.setResistance = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional int32 accumulator = 12;
 * @return {number}
 */
proto.entities.CharacterMemoryDTO.prototype.getAccumulator = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.entities.CharacterMemoryDTO} returns this
 */
proto.entities.CharacterMemoryDTO.prototype.setAccumulator = function(value) {
  return jspb.Message.setProto3IntField(this, 12, value);
};


/**
 * optional int32 acquiredAt = 13;
 * @return {number}
 */
proto.entities.CharacterMemoryDTO.prototype.getAcquiredat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {number} value
 * @return {!proto.entities.CharacterMemoryDTO} returns this
 */
proto.entities.CharacterMemoryDTO.prototype.setAcquiredat = function(value) {
  return jspb.Message.setProto3IntField(this, 13, value);
};


/**
 * optional int32 lastUpdatedAt = 14;
 * @return {number}
 */
proto.entities.CharacterMemoryDTO.prototype.getLastupdatedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/**
 * @param {number} value
 * @return {!proto.entities.CharacterMemoryDTO} returns this
 */
proto.entities.CharacterMemoryDTO.prototype.setLastupdatedat = function(value) {
  return jspb.Message.setProto3IntField(this, 14, value);
};


/**
 * repeated string tags = 15;
 * @return {!Array<string>}
 */
proto.entities.CharacterMemoryDTO.prototype.getTagsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 15));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.entities.CharacterMemoryDTO} returns this
 */
proto.entities.CharacterMemoryDTO.prototype.setTagsList = function(value) {
  return jspb.Message.setField(this, 15, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.entities.CharacterMemoryDTO} returns this
 */
proto.entities.CharacterMemoryDTO.prototype.addTags = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 15, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.entities.CharacterMemoryDTO} returns this
 */
proto.entities.CharacterMemoryDTO.prototype.clearTagsList = function() {
  return this.setTagsList([]);
};


/**
 * optional string memory = 16;
 * @return {string}
 */
proto.entities.CharacterMemoryDTO.prototype.getMemory = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.CharacterMemoryDTO} returns this
 */
proto.entities.CharacterMemoryDTO.prototype.setMemory = function(value) {
  return jspb.Message.setProto3StringField(this, 16, value);
};


/**
 * optional string targetEntity = 17;
 * @return {string}
 */
proto.entities.CharacterMemoryDTO.prototype.getTargetentity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 17, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.CharacterMemoryDTO} returns this
 */
proto.entities.CharacterMemoryDTO.prototype.setTargetentity = function(value) {
  return jspb.Message.setProto3StringField(this, 17, value);
};


/**
 * optional int32 createdAt = 18;
 * @return {number}
 */
proto.entities.CharacterMemoryDTO.prototype.getCreatedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 18, 0));
};


/**
 * @param {number} value
 * @return {!proto.entities.CharacterMemoryDTO} returns this
 */
proto.entities.CharacterMemoryDTO.prototype.setCreatedat = function(value) {
  return jspb.Message.setProto3IntField(this, 18, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.entities.CharacterMemoriesDTO.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entities.CharacterMemoriesDTO.prototype.toObject = function(opt_includeInstance) {
  return proto.entities.CharacterMemoriesDTO.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entities.CharacterMemoriesDTO} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.CharacterMemoriesDTO.toObject = function(includeInstance, msg) {
  var f, obj = {
    arrList: jspb.Message.toObjectList(msg.getArrList(),
    proto.entities.CharacterMemoryDTO.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entities.CharacterMemoriesDTO}
 */
proto.entities.CharacterMemoriesDTO.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entities.CharacterMemoriesDTO;
  return proto.entities.CharacterMemoriesDTO.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entities.CharacterMemoriesDTO} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entities.CharacterMemoriesDTO}
 */
proto.entities.CharacterMemoriesDTO.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.entities.CharacterMemoryDTO;
      reader.readMessage(value,proto.entities.CharacterMemoryDTO.deserializeBinaryFromReader);
      msg.addArr(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entities.CharacterMemoriesDTO.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entities.CharacterMemoriesDTO.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entities.CharacterMemoriesDTO} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.CharacterMemoriesDTO.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getArrList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.entities.CharacterMemoryDTO.serializeBinaryToWriter
    );
  }
};


/**
 * repeated CharacterMemoryDTO arr = 1;
 * @return {!Array<!proto.entities.CharacterMemoryDTO>}
 */
proto.entities.CharacterMemoriesDTO.prototype.getArrList = function() {
  return /** @type{!Array<!proto.entities.CharacterMemoryDTO>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.entities.CharacterMemoryDTO, 1));
};


/**
 * @param {!Array<!proto.entities.CharacterMemoryDTO>} value
 * @return {!proto.entities.CharacterMemoriesDTO} returns this
*/
proto.entities.CharacterMemoriesDTO.prototype.setArrList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.entities.CharacterMemoryDTO=} opt_value
 * @param {number=} opt_index
 * @return {!proto.entities.CharacterMemoryDTO}
 */
proto.entities.CharacterMemoriesDTO.prototype.addArr = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.entities.CharacterMemoryDTO, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.entities.CharacterMemoriesDTO} returns this
 */
proto.entities.CharacterMemoriesDTO.prototype.clearArrList = function() {
  return this.setArrList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entities.FactStatusDTO.prototype.toObject = function(opt_includeInstance) {
  return proto.entities.FactStatusDTO.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entities.FactStatusDTO} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.FactStatusDTO.toObject = function(includeInstance, msg) {
  var f, obj = {
    factid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    status: jspb.Message.getFieldWithDefault(msg, 2, 0),
    clazz: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entities.FactStatusDTO}
 */
proto.entities.FactStatusDTO.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entities.FactStatusDTO;
  return proto.entities.FactStatusDTO.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entities.FactStatusDTO} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entities.FactStatusDTO}
 */
proto.entities.FactStatusDTO.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFactid(value);
      break;
    case 2:
      var value = /** @type {!proto.entities.FactStatusEnumDTO} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setClazz(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entities.FactStatusDTO.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entities.FactStatusDTO.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entities.FactStatusDTO} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.FactStatusDTO.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFactid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getClazz();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string factId = 1;
 * @return {string}
 */
proto.entities.FactStatusDTO.prototype.getFactid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.FactStatusDTO} returns this
 */
proto.entities.FactStatusDTO.prototype.setFactid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional FactStatusEnumDTO status = 2;
 * @return {!proto.entities.FactStatusEnumDTO}
 */
proto.entities.FactStatusDTO.prototype.getStatus = function() {
  return /** @type {!proto.entities.FactStatusEnumDTO} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.entities.FactStatusEnumDTO} value
 * @return {!proto.entities.FactStatusDTO} returns this
 */
proto.entities.FactStatusDTO.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string clazz = 3;
 * @return {string}
 */
proto.entities.FactStatusDTO.prototype.getClazz = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.FactStatusDTO} returns this
 */
proto.entities.FactStatusDTO.prototype.setClazz = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.entities.FactStatusesDTO.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entities.FactStatusesDTO.prototype.toObject = function(opt_includeInstance) {
  return proto.entities.FactStatusesDTO.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entities.FactStatusesDTO} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.FactStatusesDTO.toObject = function(includeInstance, msg) {
  var f, obj = {
    arrList: jspb.Message.toObjectList(msg.getArrList(),
    proto.entities.FactStatusDTO.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entities.FactStatusesDTO}
 */
proto.entities.FactStatusesDTO.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entities.FactStatusesDTO;
  return proto.entities.FactStatusesDTO.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entities.FactStatusesDTO} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entities.FactStatusesDTO}
 */
proto.entities.FactStatusesDTO.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.entities.FactStatusDTO;
      reader.readMessage(value,proto.entities.FactStatusDTO.deserializeBinaryFromReader);
      msg.addArr(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entities.FactStatusesDTO.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entities.FactStatusesDTO.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entities.FactStatusesDTO} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.FactStatusesDTO.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getArrList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.entities.FactStatusDTO.serializeBinaryToWriter
    );
  }
};


/**
 * repeated FactStatusDTO arr = 1;
 * @return {!Array<!proto.entities.FactStatusDTO>}
 */
proto.entities.FactStatusesDTO.prototype.getArrList = function() {
  return /** @type{!Array<!proto.entities.FactStatusDTO>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.entities.FactStatusDTO, 1));
};


/**
 * @param {!Array<!proto.entities.FactStatusDTO>} value
 * @return {!proto.entities.FactStatusesDTO} returns this
*/
proto.entities.FactStatusesDTO.prototype.setArrList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.entities.FactStatusDTO=} opt_value
 * @param {number=} opt_index
 * @return {!proto.entities.FactStatusDTO}
 */
proto.entities.FactStatusesDTO.prototype.addArr = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.entities.FactStatusDTO, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.entities.FactStatusesDTO} returns this
 */
proto.entities.FactStatusesDTO.prototype.clearArrList = function() {
  return this.setArrList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entities.TagDTO.prototype.toObject = function(opt_includeInstance) {
  return proto.entities.TagDTO.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entities.TagDTO} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.TagDTO.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    blueprintid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    metadata: (f = msg.getMetadata()) && proto.entities.Metadata.toObject(includeInstance, f),
    label: jspb.Message.getFieldWithDefault(msg, 4, ""),
    subtype: jspb.Message.getFieldWithDefault(msg, 5, 0),
    user: jspb.Message.getFieldWithDefault(msg, 6, ""),
    campaign: jspb.Message.getFieldWithDefault(msg, 7, ""),
    world: jspb.Message.getFieldWithDefault(msg, 8, ""),
    targetentity: jspb.Message.getFieldWithDefault(msg, 9, ""),
    createdat: jspb.Message.getFieldWithDefault(msg, 10, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entities.TagDTO}
 */
proto.entities.TagDTO.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entities.TagDTO;
  return proto.entities.TagDTO.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entities.TagDTO} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entities.TagDTO}
 */
proto.entities.TagDTO.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBlueprintid(value);
      break;
    case 3:
      var value = new proto.entities.Metadata;
      reader.readMessage(value,proto.entities.Metadata.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setLabel(value);
      break;
    case 5:
      var value = /** @type {!proto.entities.TagSubtypeEnumDTO} */ (reader.readEnum());
      msg.setSubtype(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setUser(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setCampaign(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setWorld(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setTargetentity(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCreatedat(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entities.TagDTO.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entities.TagDTO.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entities.TagDTO} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.TagDTO.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBlueprintid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.entities.Metadata.serializeBinaryToWriter
    );
  }
  f = message.getLabel();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getSubtype();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = message.getUser();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getCampaign();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getWorld();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getTargetentity();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getCreatedat();
  if (f !== 0) {
    writer.writeInt32(
      10,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.entities.TagDTO.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.TagDTO} returns this
 */
proto.entities.TagDTO.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string blueprintId = 2;
 * @return {string}
 */
proto.entities.TagDTO.prototype.getBlueprintid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.TagDTO} returns this
 */
proto.entities.TagDTO.prototype.setBlueprintid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Metadata metadata = 3;
 * @return {?proto.entities.Metadata}
 */
proto.entities.TagDTO.prototype.getMetadata = function() {
  return /** @type{?proto.entities.Metadata} */ (
    jspb.Message.getWrapperField(this, proto.entities.Metadata, 3));
};


/**
 * @param {?proto.entities.Metadata|undefined} value
 * @return {!proto.entities.TagDTO} returns this
*/
proto.entities.TagDTO.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.entities.TagDTO} returns this
 */
proto.entities.TagDTO.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.entities.TagDTO.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string label = 4;
 * @return {string}
 */
proto.entities.TagDTO.prototype.getLabel = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.TagDTO} returns this
 */
proto.entities.TagDTO.prototype.setLabel = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional TagSubtypeEnumDTO subtype = 5;
 * @return {!proto.entities.TagSubtypeEnumDTO}
 */
proto.entities.TagDTO.prototype.getSubtype = function() {
  return /** @type {!proto.entities.TagSubtypeEnumDTO} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.entities.TagSubtypeEnumDTO} value
 * @return {!proto.entities.TagDTO} returns this
 */
proto.entities.TagDTO.prototype.setSubtype = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * optional string user = 6;
 * @return {string}
 */
proto.entities.TagDTO.prototype.getUser = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.TagDTO} returns this
 */
proto.entities.TagDTO.prototype.setUser = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string campaign = 7;
 * @return {string}
 */
proto.entities.TagDTO.prototype.getCampaign = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.TagDTO} returns this
 */
proto.entities.TagDTO.prototype.setCampaign = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string world = 8;
 * @return {string}
 */
proto.entities.TagDTO.prototype.getWorld = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.TagDTO} returns this
 */
proto.entities.TagDTO.prototype.setWorld = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string targetEntity = 9;
 * @return {string}
 */
proto.entities.TagDTO.prototype.getTargetentity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.TagDTO} returns this
 */
proto.entities.TagDTO.prototype.setTargetentity = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional int32 createdAt = 10;
 * @return {number}
 */
proto.entities.TagDTO.prototype.getCreatedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.entities.TagDTO} returns this
 */
proto.entities.TagDTO.prototype.setCreatedat = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.entities.TagsDTO.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entities.TagsDTO.prototype.toObject = function(opt_includeInstance) {
  return proto.entities.TagsDTO.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entities.TagsDTO} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.TagsDTO.toObject = function(includeInstance, msg) {
  var f, obj = {
    arrList: jspb.Message.toObjectList(msg.getArrList(),
    proto.entities.TagDTO.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entities.TagsDTO}
 */
proto.entities.TagsDTO.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entities.TagsDTO;
  return proto.entities.TagsDTO.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entities.TagsDTO} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entities.TagsDTO}
 */
proto.entities.TagsDTO.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.entities.TagDTO;
      reader.readMessage(value,proto.entities.TagDTO.deserializeBinaryFromReader);
      msg.addArr(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entities.TagsDTO.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entities.TagsDTO.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entities.TagsDTO} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.TagsDTO.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getArrList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.entities.TagDTO.serializeBinaryToWriter
    );
  }
};


/**
 * repeated TagDTO arr = 1;
 * @return {!Array<!proto.entities.TagDTO>}
 */
proto.entities.TagsDTO.prototype.getArrList = function() {
  return /** @type{!Array<!proto.entities.TagDTO>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.entities.TagDTO, 1));
};


/**
 * @param {!Array<!proto.entities.TagDTO>} value
 * @return {!proto.entities.TagsDTO} returns this
*/
proto.entities.TagsDTO.prototype.setArrList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.entities.TagDTO=} opt_value
 * @param {number=} opt_index
 * @return {!proto.entities.TagDTO}
 */
proto.entities.TagsDTO.prototype.addArr = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.entities.TagDTO, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.entities.TagsDTO} returns this
 */
proto.entities.TagsDTO.prototype.clearArrList = function() {
  return this.setArrList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.entities.SkillDTO.repeatedFields_ = [8];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entities.SkillDTO.prototype.toObject = function(opt_includeInstance) {
  return proto.entities.SkillDTO.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entities.SkillDTO} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.SkillDTO.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    blueprintid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    name: jspb.Message.getFieldWithDefault(msg, 3, ""),
    metadata: (f = msg.getMetadata()) && proto.entities.Metadata.toObject(includeInstance, f),
    user: jspb.Message.getFieldWithDefault(msg, 5, ""),
    campaign: jspb.Message.getFieldWithDefault(msg, 6, ""),
    world: jspb.Message.getFieldWithDefault(msg, 7, ""),
    tagsList: (f = jspb.Message.getRepeatedField(msg, 8)) == null ? undefined : f,
    description: jspb.Message.getFieldWithDefault(msg, 9, ""),
    category: jspb.Message.getFieldWithDefault(msg, 10, 0),
    targetentity: jspb.Message.getFieldWithDefault(msg, 11, ""),
    createdat: jspb.Message.getFieldWithDefault(msg, 12, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entities.SkillDTO}
 */
proto.entities.SkillDTO.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entities.SkillDTO;
  return proto.entities.SkillDTO.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entities.SkillDTO} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entities.SkillDTO}
 */
proto.entities.SkillDTO.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBlueprintid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = new proto.entities.Metadata;
      reader.readMessage(value,proto.entities.Metadata.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setUser(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setCampaign(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setWorld(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.addTags(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 10:
      var value = /** @type {!proto.entities.SkillCategoryEnumDTO} */ (reader.readEnum());
      msg.setCategory(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setTargetentity(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCreatedat(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entities.SkillDTO.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entities.SkillDTO.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entities.SkillDTO} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.SkillDTO.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBlueprintid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.entities.Metadata.serializeBinaryToWriter
    );
  }
  f = message.getUser();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getCampaign();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getWorld();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getTagsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      8,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getCategory();
  if (f !== 0.0) {
    writer.writeEnum(
      10,
      f
    );
  }
  f = message.getTargetentity();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getCreatedat();
  if (f !== 0) {
    writer.writeInt32(
      12,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.entities.SkillDTO.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.SkillDTO} returns this
 */
proto.entities.SkillDTO.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string blueprintId = 2;
 * @return {string}
 */
proto.entities.SkillDTO.prototype.getBlueprintid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.SkillDTO} returns this
 */
proto.entities.SkillDTO.prototype.setBlueprintid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.entities.SkillDTO.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.SkillDTO} returns this
 */
proto.entities.SkillDTO.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional Metadata metadata = 4;
 * @return {?proto.entities.Metadata}
 */
proto.entities.SkillDTO.prototype.getMetadata = function() {
  return /** @type{?proto.entities.Metadata} */ (
    jspb.Message.getWrapperField(this, proto.entities.Metadata, 4));
};


/**
 * @param {?proto.entities.Metadata|undefined} value
 * @return {!proto.entities.SkillDTO} returns this
*/
proto.entities.SkillDTO.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.entities.SkillDTO} returns this
 */
proto.entities.SkillDTO.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.entities.SkillDTO.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string user = 5;
 * @return {string}
 */
proto.entities.SkillDTO.prototype.getUser = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.SkillDTO} returns this
 */
proto.entities.SkillDTO.prototype.setUser = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string campaign = 6;
 * @return {string}
 */
proto.entities.SkillDTO.prototype.getCampaign = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.SkillDTO} returns this
 */
proto.entities.SkillDTO.prototype.setCampaign = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string world = 7;
 * @return {string}
 */
proto.entities.SkillDTO.prototype.getWorld = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.SkillDTO} returns this
 */
proto.entities.SkillDTO.prototype.setWorld = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * repeated string tags = 8;
 * @return {!Array<string>}
 */
proto.entities.SkillDTO.prototype.getTagsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 8));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.entities.SkillDTO} returns this
 */
proto.entities.SkillDTO.prototype.setTagsList = function(value) {
  return jspb.Message.setField(this, 8, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.entities.SkillDTO} returns this
 */
proto.entities.SkillDTO.prototype.addTags = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 8, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.entities.SkillDTO} returns this
 */
proto.entities.SkillDTO.prototype.clearTagsList = function() {
  return this.setTagsList([]);
};


/**
 * optional string description = 9;
 * @return {string}
 */
proto.entities.SkillDTO.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.SkillDTO} returns this
 */
proto.entities.SkillDTO.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional SkillCategoryEnumDTO category = 10;
 * @return {!proto.entities.SkillCategoryEnumDTO}
 */
proto.entities.SkillDTO.prototype.getCategory = function() {
  return /** @type {!proto.entities.SkillCategoryEnumDTO} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {!proto.entities.SkillCategoryEnumDTO} value
 * @return {!proto.entities.SkillDTO} returns this
 */
proto.entities.SkillDTO.prototype.setCategory = function(value) {
  return jspb.Message.setProto3EnumField(this, 10, value);
};


/**
 * optional string targetEntity = 11;
 * @return {string}
 */
proto.entities.SkillDTO.prototype.getTargetentity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.SkillDTO} returns this
 */
proto.entities.SkillDTO.prototype.setTargetentity = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional int32 createdAt = 12;
 * @return {number}
 */
proto.entities.SkillDTO.prototype.getCreatedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.entities.SkillDTO} returns this
 */
proto.entities.SkillDTO.prototype.setCreatedat = function(value) {
  return jspb.Message.setProto3IntField(this, 12, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.entities.SkillsDTO.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entities.SkillsDTO.prototype.toObject = function(opt_includeInstance) {
  return proto.entities.SkillsDTO.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entities.SkillsDTO} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.SkillsDTO.toObject = function(includeInstance, msg) {
  var f, obj = {
    arrList: jspb.Message.toObjectList(msg.getArrList(),
    proto.entities.SkillDTO.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entities.SkillsDTO}
 */
proto.entities.SkillsDTO.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entities.SkillsDTO;
  return proto.entities.SkillsDTO.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entities.SkillsDTO} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entities.SkillsDTO}
 */
proto.entities.SkillsDTO.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.entities.SkillDTO;
      reader.readMessage(value,proto.entities.SkillDTO.deserializeBinaryFromReader);
      msg.addArr(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entities.SkillsDTO.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entities.SkillsDTO.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entities.SkillsDTO} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.SkillsDTO.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getArrList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.entities.SkillDTO.serializeBinaryToWriter
    );
  }
};


/**
 * repeated SkillDTO arr = 1;
 * @return {!Array<!proto.entities.SkillDTO>}
 */
proto.entities.SkillsDTO.prototype.getArrList = function() {
  return /** @type{!Array<!proto.entities.SkillDTO>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.entities.SkillDTO, 1));
};


/**
 * @param {!Array<!proto.entities.SkillDTO>} value
 * @return {!proto.entities.SkillsDTO} returns this
*/
proto.entities.SkillsDTO.prototype.setArrList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.entities.SkillDTO=} opt_value
 * @param {number=} opt_index
 * @return {!proto.entities.SkillDTO}
 */
proto.entities.SkillsDTO.prototype.addArr = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.entities.SkillDTO, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.entities.SkillsDTO} returns this
 */
proto.entities.SkillsDTO.prototype.clearArrList = function() {
  return this.setArrList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.entities.TraitDTO.repeatedFields_ = [8];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entities.TraitDTO.prototype.toObject = function(opt_includeInstance) {
  return proto.entities.TraitDTO.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entities.TraitDTO} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.TraitDTO.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    blueprintid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    name: jspb.Message.getFieldWithDefault(msg, 3, ""),
    metadata: (f = msg.getMetadata()) && proto.entities.Metadata.toObject(includeInstance, f),
    user: jspb.Message.getFieldWithDefault(msg, 5, ""),
    campaign: jspb.Message.getFieldWithDefault(msg, 6, ""),
    world: jspb.Message.getFieldWithDefault(msg, 7, ""),
    tagsList: (f = jspb.Message.getRepeatedField(msg, 8)) == null ? undefined : f,
    targetentity: jspb.Message.getFieldWithDefault(msg, 9, ""),
    traittype: jspb.Message.getFieldWithDefault(msg, 10, 0),
    createdat: jspb.Message.getFieldWithDefault(msg, 11, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entities.TraitDTO}
 */
proto.entities.TraitDTO.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entities.TraitDTO;
  return proto.entities.TraitDTO.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entities.TraitDTO} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entities.TraitDTO}
 */
proto.entities.TraitDTO.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBlueprintid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = new proto.entities.Metadata;
      reader.readMessage(value,proto.entities.Metadata.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setUser(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setCampaign(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setWorld(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.addTags(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setTargetentity(value);
      break;
    case 10:
      var value = /** @type {!proto.entities.TraitTypeEnumDTO} */ (reader.readEnum());
      msg.setTraittype(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCreatedat(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entities.TraitDTO.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entities.TraitDTO.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entities.TraitDTO} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.TraitDTO.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBlueprintid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.entities.Metadata.serializeBinaryToWriter
    );
  }
  f = message.getUser();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getCampaign();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getWorld();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getTagsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      8,
      f
    );
  }
  f = message.getTargetentity();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getTraittype();
  if (f !== 0.0) {
    writer.writeEnum(
      10,
      f
    );
  }
  f = message.getCreatedat();
  if (f !== 0) {
    writer.writeInt32(
      11,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.entities.TraitDTO.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.TraitDTO} returns this
 */
proto.entities.TraitDTO.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string blueprintId = 2;
 * @return {string}
 */
proto.entities.TraitDTO.prototype.getBlueprintid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.TraitDTO} returns this
 */
proto.entities.TraitDTO.prototype.setBlueprintid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.entities.TraitDTO.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.TraitDTO} returns this
 */
proto.entities.TraitDTO.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional Metadata metadata = 4;
 * @return {?proto.entities.Metadata}
 */
proto.entities.TraitDTO.prototype.getMetadata = function() {
  return /** @type{?proto.entities.Metadata} */ (
    jspb.Message.getWrapperField(this, proto.entities.Metadata, 4));
};


/**
 * @param {?proto.entities.Metadata|undefined} value
 * @return {!proto.entities.TraitDTO} returns this
*/
proto.entities.TraitDTO.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.entities.TraitDTO} returns this
 */
proto.entities.TraitDTO.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.entities.TraitDTO.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string user = 5;
 * @return {string}
 */
proto.entities.TraitDTO.prototype.getUser = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.TraitDTO} returns this
 */
proto.entities.TraitDTO.prototype.setUser = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string campaign = 6;
 * @return {string}
 */
proto.entities.TraitDTO.prototype.getCampaign = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.TraitDTO} returns this
 */
proto.entities.TraitDTO.prototype.setCampaign = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string world = 7;
 * @return {string}
 */
proto.entities.TraitDTO.prototype.getWorld = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.TraitDTO} returns this
 */
proto.entities.TraitDTO.prototype.setWorld = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * repeated string tags = 8;
 * @return {!Array<string>}
 */
proto.entities.TraitDTO.prototype.getTagsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 8));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.entities.TraitDTO} returns this
 */
proto.entities.TraitDTO.prototype.setTagsList = function(value) {
  return jspb.Message.setField(this, 8, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.entities.TraitDTO} returns this
 */
proto.entities.TraitDTO.prototype.addTags = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 8, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.entities.TraitDTO} returns this
 */
proto.entities.TraitDTO.prototype.clearTagsList = function() {
  return this.setTagsList([]);
};


/**
 * optional string targetEntity = 9;
 * @return {string}
 */
proto.entities.TraitDTO.prototype.getTargetentity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.TraitDTO} returns this
 */
proto.entities.TraitDTO.prototype.setTargetentity = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional TraitTypeEnumDTO traitType = 10;
 * @return {!proto.entities.TraitTypeEnumDTO}
 */
proto.entities.TraitDTO.prototype.getTraittype = function() {
  return /** @type {!proto.entities.TraitTypeEnumDTO} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {!proto.entities.TraitTypeEnumDTO} value
 * @return {!proto.entities.TraitDTO} returns this
 */
proto.entities.TraitDTO.prototype.setTraittype = function(value) {
  return jspb.Message.setProto3EnumField(this, 10, value);
};


/**
 * optional int32 createdAt = 11;
 * @return {number}
 */
proto.entities.TraitDTO.prototype.getCreatedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.entities.TraitDTO} returns this
 */
proto.entities.TraitDTO.prototype.setCreatedat = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.entities.TraitsDTO.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entities.TraitsDTO.prototype.toObject = function(opt_includeInstance) {
  return proto.entities.TraitsDTO.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entities.TraitsDTO} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.TraitsDTO.toObject = function(includeInstance, msg) {
  var f, obj = {
    arrList: jspb.Message.toObjectList(msg.getArrList(),
    proto.entities.TraitDTO.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entities.TraitsDTO}
 */
proto.entities.TraitsDTO.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entities.TraitsDTO;
  return proto.entities.TraitsDTO.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entities.TraitsDTO} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entities.TraitsDTO}
 */
proto.entities.TraitsDTO.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.entities.TraitDTO;
      reader.readMessage(value,proto.entities.TraitDTO.deserializeBinaryFromReader);
      msg.addArr(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entities.TraitsDTO.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entities.TraitsDTO.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entities.TraitsDTO} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.TraitsDTO.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getArrList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.entities.TraitDTO.serializeBinaryToWriter
    );
  }
};


/**
 * repeated TraitDTO arr = 1;
 * @return {!Array<!proto.entities.TraitDTO>}
 */
proto.entities.TraitsDTO.prototype.getArrList = function() {
  return /** @type{!Array<!proto.entities.TraitDTO>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.entities.TraitDTO, 1));
};


/**
 * @param {!Array<!proto.entities.TraitDTO>} value
 * @return {!proto.entities.TraitsDTO} returns this
*/
proto.entities.TraitsDTO.prototype.setArrList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.entities.TraitDTO=} opt_value
 * @param {number=} opt_index
 * @return {!proto.entities.TraitDTO}
 */
proto.entities.TraitsDTO.prototype.addArr = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.entities.TraitDTO, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.entities.TraitsDTO} returns this
 */
proto.entities.TraitsDTO.prototype.clearArrList = function() {
  return this.setArrList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.entities.DiseaseDTO.repeatedFields_ = [8,11];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entities.DiseaseDTO.prototype.toObject = function(opt_includeInstance) {
  return proto.entities.DiseaseDTO.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entities.DiseaseDTO} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.DiseaseDTO.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    blueprintid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    name: jspb.Message.getFieldWithDefault(msg, 3, ""),
    metadata: (f = msg.getMetadata()) && proto.entities.Metadata.toObject(includeInstance, f),
    user: jspb.Message.getFieldWithDefault(msg, 5, ""),
    campaign: jspb.Message.getFieldWithDefault(msg, 6, ""),
    world: jspb.Message.getFieldWithDefault(msg, 7, ""),
    tagsList: (f = jspb.Message.getRepeatedField(msg, 8)) == null ? undefined : f,
    description: jspb.Message.getFieldWithDefault(msg, 9, ""),
    severity: jspb.Message.getFieldWithDefault(msg, 10, 0),
    charactersList: (f = jspb.Message.getRepeatedField(msg, 11)) == null ? undefined : f,
    targetentity: jspb.Message.getFieldWithDefault(msg, 12, ""),
    createdat: jspb.Message.getFieldWithDefault(msg, 13, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entities.DiseaseDTO}
 */
proto.entities.DiseaseDTO.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entities.DiseaseDTO;
  return proto.entities.DiseaseDTO.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entities.DiseaseDTO} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entities.DiseaseDTO}
 */
proto.entities.DiseaseDTO.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBlueprintid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = new proto.entities.Metadata;
      reader.readMessage(value,proto.entities.Metadata.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setUser(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setCampaign(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setWorld(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.addTags(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 10:
      var value = /** @type {!proto.entities.DiseaseSeverityEnumDTO} */ (reader.readEnum());
      msg.setSeverity(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.addCharacters(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setTargetentity(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCreatedat(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entities.DiseaseDTO.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entities.DiseaseDTO.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entities.DiseaseDTO} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.DiseaseDTO.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBlueprintid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.entities.Metadata.serializeBinaryToWriter
    );
  }
  f = message.getUser();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getCampaign();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getWorld();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getTagsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      8,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getSeverity();
  if (f !== 0.0) {
    writer.writeEnum(
      10,
      f
    );
  }
  f = message.getCharactersList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      11,
      f
    );
  }
  f = message.getTargetentity();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getCreatedat();
  if (f !== 0) {
    writer.writeInt32(
      13,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.entities.DiseaseDTO.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.DiseaseDTO} returns this
 */
proto.entities.DiseaseDTO.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string blueprintId = 2;
 * @return {string}
 */
proto.entities.DiseaseDTO.prototype.getBlueprintid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.DiseaseDTO} returns this
 */
proto.entities.DiseaseDTO.prototype.setBlueprintid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.entities.DiseaseDTO.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.DiseaseDTO} returns this
 */
proto.entities.DiseaseDTO.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional Metadata metadata = 4;
 * @return {?proto.entities.Metadata}
 */
proto.entities.DiseaseDTO.prototype.getMetadata = function() {
  return /** @type{?proto.entities.Metadata} */ (
    jspb.Message.getWrapperField(this, proto.entities.Metadata, 4));
};


/**
 * @param {?proto.entities.Metadata|undefined} value
 * @return {!proto.entities.DiseaseDTO} returns this
*/
proto.entities.DiseaseDTO.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.entities.DiseaseDTO} returns this
 */
proto.entities.DiseaseDTO.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.entities.DiseaseDTO.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string user = 5;
 * @return {string}
 */
proto.entities.DiseaseDTO.prototype.getUser = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.DiseaseDTO} returns this
 */
proto.entities.DiseaseDTO.prototype.setUser = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string campaign = 6;
 * @return {string}
 */
proto.entities.DiseaseDTO.prototype.getCampaign = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.DiseaseDTO} returns this
 */
proto.entities.DiseaseDTO.prototype.setCampaign = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string world = 7;
 * @return {string}
 */
proto.entities.DiseaseDTO.prototype.getWorld = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.DiseaseDTO} returns this
 */
proto.entities.DiseaseDTO.prototype.setWorld = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * repeated string tags = 8;
 * @return {!Array<string>}
 */
proto.entities.DiseaseDTO.prototype.getTagsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 8));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.entities.DiseaseDTO} returns this
 */
proto.entities.DiseaseDTO.prototype.setTagsList = function(value) {
  return jspb.Message.setField(this, 8, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.entities.DiseaseDTO} returns this
 */
proto.entities.DiseaseDTO.prototype.addTags = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 8, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.entities.DiseaseDTO} returns this
 */
proto.entities.DiseaseDTO.prototype.clearTagsList = function() {
  return this.setTagsList([]);
};


/**
 * optional string description = 9;
 * @return {string}
 */
proto.entities.DiseaseDTO.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.DiseaseDTO} returns this
 */
proto.entities.DiseaseDTO.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional DiseaseSeverityEnumDTO severity = 10;
 * @return {!proto.entities.DiseaseSeverityEnumDTO}
 */
proto.entities.DiseaseDTO.prototype.getSeverity = function() {
  return /** @type {!proto.entities.DiseaseSeverityEnumDTO} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {!proto.entities.DiseaseSeverityEnumDTO} value
 * @return {!proto.entities.DiseaseDTO} returns this
 */
proto.entities.DiseaseDTO.prototype.setSeverity = function(value) {
  return jspb.Message.setProto3EnumField(this, 10, value);
};


/**
 * repeated string characters = 11;
 * @return {!Array<string>}
 */
proto.entities.DiseaseDTO.prototype.getCharactersList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 11));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.entities.DiseaseDTO} returns this
 */
proto.entities.DiseaseDTO.prototype.setCharactersList = function(value) {
  return jspb.Message.setField(this, 11, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.entities.DiseaseDTO} returns this
 */
proto.entities.DiseaseDTO.prototype.addCharacters = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 11, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.entities.DiseaseDTO} returns this
 */
proto.entities.DiseaseDTO.prototype.clearCharactersList = function() {
  return this.setCharactersList([]);
};


/**
 * optional string targetEntity = 12;
 * @return {string}
 */
proto.entities.DiseaseDTO.prototype.getTargetentity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.DiseaseDTO} returns this
 */
proto.entities.DiseaseDTO.prototype.setTargetentity = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional int32 createdAt = 13;
 * @return {number}
 */
proto.entities.DiseaseDTO.prototype.getCreatedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {number} value
 * @return {!proto.entities.DiseaseDTO} returns this
 */
proto.entities.DiseaseDTO.prototype.setCreatedat = function(value) {
  return jspb.Message.setProto3IntField(this, 13, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.entities.DiseasesDTO.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entities.DiseasesDTO.prototype.toObject = function(opt_includeInstance) {
  return proto.entities.DiseasesDTO.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entities.DiseasesDTO} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.DiseasesDTO.toObject = function(includeInstance, msg) {
  var f, obj = {
    arrList: jspb.Message.toObjectList(msg.getArrList(),
    proto.entities.DiseaseDTO.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entities.DiseasesDTO}
 */
proto.entities.DiseasesDTO.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entities.DiseasesDTO;
  return proto.entities.DiseasesDTO.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entities.DiseasesDTO} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entities.DiseasesDTO}
 */
proto.entities.DiseasesDTO.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.entities.DiseaseDTO;
      reader.readMessage(value,proto.entities.DiseaseDTO.deserializeBinaryFromReader);
      msg.addArr(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entities.DiseasesDTO.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entities.DiseasesDTO.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entities.DiseasesDTO} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.DiseasesDTO.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getArrList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.entities.DiseaseDTO.serializeBinaryToWriter
    );
  }
};


/**
 * repeated DiseaseDTO arr = 1;
 * @return {!Array<!proto.entities.DiseaseDTO>}
 */
proto.entities.DiseasesDTO.prototype.getArrList = function() {
  return /** @type{!Array<!proto.entities.DiseaseDTO>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.entities.DiseaseDTO, 1));
};


/**
 * @param {!Array<!proto.entities.DiseaseDTO>} value
 * @return {!proto.entities.DiseasesDTO} returns this
*/
proto.entities.DiseasesDTO.prototype.setArrList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.entities.DiseaseDTO=} opt_value
 * @param {number=} opt_index
 * @return {!proto.entities.DiseaseDTO}
 */
proto.entities.DiseasesDTO.prototype.addArr = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.entities.DiseaseDTO, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.entities.DiseasesDTO} returns this
 */
proto.entities.DiseasesDTO.prototype.clearArrList = function() {
  return this.setArrList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.entities.FactDTO.repeatedFields_ = [8];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entities.FactDTO.prototype.toObject = function(opt_includeInstance) {
  return proto.entities.FactDTO.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entities.FactDTO} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.FactDTO.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    blueprintid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    name: jspb.Message.getFieldWithDefault(msg, 3, ""),
    metadata: (f = msg.getMetadata()) && proto.entities.Metadata.toObject(includeInstance, f),
    user: jspb.Message.getFieldWithDefault(msg, 5, ""),
    campaign: jspb.Message.getFieldWithDefault(msg, 6, ""),
    world: jspb.Message.getFieldWithDefault(msg, 7, ""),
    tagsList: (f = jspb.Message.getRepeatedField(msg, 8)) == null ? undefined : f,
    description: jspb.Message.getFieldWithDefault(msg, 9, ""),
    weight: jspb.Message.getFieldWithDefault(msg, 10, 0),
    targetentity: jspb.Message.getFieldWithDefault(msg, 11, ""),
    createdat: jspb.Message.getFieldWithDefault(msg, 12, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entities.FactDTO}
 */
proto.entities.FactDTO.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entities.FactDTO;
  return proto.entities.FactDTO.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entities.FactDTO} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entities.FactDTO}
 */
proto.entities.FactDTO.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBlueprintid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = new proto.entities.Metadata;
      reader.readMessage(value,proto.entities.Metadata.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setUser(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setCampaign(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setWorld(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.addTags(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setWeight(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setTargetentity(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCreatedat(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entities.FactDTO.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entities.FactDTO.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entities.FactDTO} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.FactDTO.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBlueprintid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.entities.Metadata.serializeBinaryToWriter
    );
  }
  f = message.getUser();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getCampaign();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getWorld();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getTagsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      8,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getWeight();
  if (f !== 0) {
    writer.writeInt32(
      10,
      f
    );
  }
  f = message.getTargetentity();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getCreatedat();
  if (f !== 0) {
    writer.writeInt32(
      12,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.entities.FactDTO.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.FactDTO} returns this
 */
proto.entities.FactDTO.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string blueprintId = 2;
 * @return {string}
 */
proto.entities.FactDTO.prototype.getBlueprintid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.FactDTO} returns this
 */
proto.entities.FactDTO.prototype.setBlueprintid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.entities.FactDTO.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.FactDTO} returns this
 */
proto.entities.FactDTO.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional Metadata metadata = 4;
 * @return {?proto.entities.Metadata}
 */
proto.entities.FactDTO.prototype.getMetadata = function() {
  return /** @type{?proto.entities.Metadata} */ (
    jspb.Message.getWrapperField(this, proto.entities.Metadata, 4));
};


/**
 * @param {?proto.entities.Metadata|undefined} value
 * @return {!proto.entities.FactDTO} returns this
*/
proto.entities.FactDTO.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.entities.FactDTO} returns this
 */
proto.entities.FactDTO.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.entities.FactDTO.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string user = 5;
 * @return {string}
 */
proto.entities.FactDTO.prototype.getUser = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.FactDTO} returns this
 */
proto.entities.FactDTO.prototype.setUser = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string campaign = 6;
 * @return {string}
 */
proto.entities.FactDTO.prototype.getCampaign = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.FactDTO} returns this
 */
proto.entities.FactDTO.prototype.setCampaign = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string world = 7;
 * @return {string}
 */
proto.entities.FactDTO.prototype.getWorld = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.FactDTO} returns this
 */
proto.entities.FactDTO.prototype.setWorld = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * repeated string tags = 8;
 * @return {!Array<string>}
 */
proto.entities.FactDTO.prototype.getTagsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 8));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.entities.FactDTO} returns this
 */
proto.entities.FactDTO.prototype.setTagsList = function(value) {
  return jspb.Message.setField(this, 8, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.entities.FactDTO} returns this
 */
proto.entities.FactDTO.prototype.addTags = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 8, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.entities.FactDTO} returns this
 */
proto.entities.FactDTO.prototype.clearTagsList = function() {
  return this.setTagsList([]);
};


/**
 * optional string description = 9;
 * @return {string}
 */
proto.entities.FactDTO.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.FactDTO} returns this
 */
proto.entities.FactDTO.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional int32 weight = 10;
 * @return {number}
 */
proto.entities.FactDTO.prototype.getWeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.entities.FactDTO} returns this
 */
proto.entities.FactDTO.prototype.setWeight = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional string targetEntity = 11;
 * @return {string}
 */
proto.entities.FactDTO.prototype.getTargetentity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.FactDTO} returns this
 */
proto.entities.FactDTO.prototype.setTargetentity = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional int32 createdAt = 12;
 * @return {number}
 */
proto.entities.FactDTO.prototype.getCreatedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.entities.FactDTO} returns this
 */
proto.entities.FactDTO.prototype.setCreatedat = function(value) {
  return jspb.Message.setProto3IntField(this, 12, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.entities.FactsDTO.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entities.FactsDTO.prototype.toObject = function(opt_includeInstance) {
  return proto.entities.FactsDTO.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entities.FactsDTO} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.FactsDTO.toObject = function(includeInstance, msg) {
  var f, obj = {
    arrList: jspb.Message.toObjectList(msg.getArrList(),
    proto.entities.FactDTO.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entities.FactsDTO}
 */
proto.entities.FactsDTO.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entities.FactsDTO;
  return proto.entities.FactsDTO.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entities.FactsDTO} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entities.FactsDTO}
 */
proto.entities.FactsDTO.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.entities.FactDTO;
      reader.readMessage(value,proto.entities.FactDTO.deserializeBinaryFromReader);
      msg.addArr(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entities.FactsDTO.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entities.FactsDTO.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entities.FactsDTO} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.FactsDTO.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getArrList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.entities.FactDTO.serializeBinaryToWriter
    );
  }
};


/**
 * repeated FactDTO arr = 1;
 * @return {!Array<!proto.entities.FactDTO>}
 */
proto.entities.FactsDTO.prototype.getArrList = function() {
  return /** @type{!Array<!proto.entities.FactDTO>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.entities.FactDTO, 1));
};


/**
 * @param {!Array<!proto.entities.FactDTO>} value
 * @return {!proto.entities.FactsDTO} returns this
*/
proto.entities.FactsDTO.prototype.setArrList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.entities.FactDTO=} opt_value
 * @param {number=} opt_index
 * @return {!proto.entities.FactDTO}
 */
proto.entities.FactsDTO.prototype.addArr = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.entities.FactDTO, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.entities.FactsDTO} returns this
 */
proto.entities.FactsDTO.prototype.clearArrList = function() {
  return this.setArrList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.entities.FactionDTO.repeatedFields_ = [8];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entities.FactionDTO.prototype.toObject = function(opt_includeInstance) {
  return proto.entities.FactionDTO.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entities.FactionDTO} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.FactionDTO.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    blueprintid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    name: jspb.Message.getFieldWithDefault(msg, 3, ""),
    metadata: (f = msg.getMetadata()) && proto.entities.Metadata.toObject(includeInstance, f),
    user: jspb.Message.getFieldWithDefault(msg, 5, ""),
    campaign: jspb.Message.getFieldWithDefault(msg, 6, ""),
    world: jspb.Message.getFieldWithDefault(msg, 7, ""),
    tagsList: (f = jspb.Message.getRepeatedField(msg, 8)) == null ? undefined : f,
    targetentity: jspb.Message.getFieldWithDefault(msg, 9, ""),
    createdat: jspb.Message.getFieldWithDefault(msg, 10, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entities.FactionDTO}
 */
proto.entities.FactionDTO.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entities.FactionDTO;
  return proto.entities.FactionDTO.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entities.FactionDTO} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entities.FactionDTO}
 */
proto.entities.FactionDTO.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBlueprintid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = new proto.entities.Metadata;
      reader.readMessage(value,proto.entities.Metadata.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setUser(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setCampaign(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setWorld(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.addTags(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setTargetentity(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCreatedat(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entities.FactionDTO.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entities.FactionDTO.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entities.FactionDTO} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.FactionDTO.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBlueprintid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.entities.Metadata.serializeBinaryToWriter
    );
  }
  f = message.getUser();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getCampaign();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getWorld();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getTagsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      8,
      f
    );
  }
  f = message.getTargetentity();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getCreatedat();
  if (f !== 0) {
    writer.writeInt32(
      10,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.entities.FactionDTO.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.FactionDTO} returns this
 */
proto.entities.FactionDTO.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string blueprintId = 2;
 * @return {string}
 */
proto.entities.FactionDTO.prototype.getBlueprintid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.FactionDTO} returns this
 */
proto.entities.FactionDTO.prototype.setBlueprintid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.entities.FactionDTO.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.FactionDTO} returns this
 */
proto.entities.FactionDTO.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional Metadata metadata = 4;
 * @return {?proto.entities.Metadata}
 */
proto.entities.FactionDTO.prototype.getMetadata = function() {
  return /** @type{?proto.entities.Metadata} */ (
    jspb.Message.getWrapperField(this, proto.entities.Metadata, 4));
};


/**
 * @param {?proto.entities.Metadata|undefined} value
 * @return {!proto.entities.FactionDTO} returns this
*/
proto.entities.FactionDTO.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.entities.FactionDTO} returns this
 */
proto.entities.FactionDTO.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.entities.FactionDTO.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string user = 5;
 * @return {string}
 */
proto.entities.FactionDTO.prototype.getUser = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.FactionDTO} returns this
 */
proto.entities.FactionDTO.prototype.setUser = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string campaign = 6;
 * @return {string}
 */
proto.entities.FactionDTO.prototype.getCampaign = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.FactionDTO} returns this
 */
proto.entities.FactionDTO.prototype.setCampaign = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string world = 7;
 * @return {string}
 */
proto.entities.FactionDTO.prototype.getWorld = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.FactionDTO} returns this
 */
proto.entities.FactionDTO.prototype.setWorld = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * repeated string tags = 8;
 * @return {!Array<string>}
 */
proto.entities.FactionDTO.prototype.getTagsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 8));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.entities.FactionDTO} returns this
 */
proto.entities.FactionDTO.prototype.setTagsList = function(value) {
  return jspb.Message.setField(this, 8, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.entities.FactionDTO} returns this
 */
proto.entities.FactionDTO.prototype.addTags = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 8, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.entities.FactionDTO} returns this
 */
proto.entities.FactionDTO.prototype.clearTagsList = function() {
  return this.setTagsList([]);
};


/**
 * optional string targetEntity = 9;
 * @return {string}
 */
proto.entities.FactionDTO.prototype.getTargetentity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.FactionDTO} returns this
 */
proto.entities.FactionDTO.prototype.setTargetentity = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional int32 createdAt = 10;
 * @return {number}
 */
proto.entities.FactionDTO.prototype.getCreatedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.entities.FactionDTO} returns this
 */
proto.entities.FactionDTO.prototype.setCreatedat = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.entities.FactionsDTO.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entities.FactionsDTO.prototype.toObject = function(opt_includeInstance) {
  return proto.entities.FactionsDTO.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entities.FactionsDTO} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.FactionsDTO.toObject = function(includeInstance, msg) {
  var f, obj = {
    arrList: jspb.Message.toObjectList(msg.getArrList(),
    proto.entities.FactionDTO.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entities.FactionsDTO}
 */
proto.entities.FactionsDTO.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entities.FactionsDTO;
  return proto.entities.FactionsDTO.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entities.FactionsDTO} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entities.FactionsDTO}
 */
proto.entities.FactionsDTO.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.entities.FactionDTO;
      reader.readMessage(value,proto.entities.FactionDTO.deserializeBinaryFromReader);
      msg.addArr(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entities.FactionsDTO.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entities.FactionsDTO.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entities.FactionsDTO} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.FactionsDTO.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getArrList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.entities.FactionDTO.serializeBinaryToWriter
    );
  }
};


/**
 * repeated FactionDTO arr = 1;
 * @return {!Array<!proto.entities.FactionDTO>}
 */
proto.entities.FactionsDTO.prototype.getArrList = function() {
  return /** @type{!Array<!proto.entities.FactionDTO>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.entities.FactionDTO, 1));
};


/**
 * @param {!Array<!proto.entities.FactionDTO>} value
 * @return {!proto.entities.FactionsDTO} returns this
*/
proto.entities.FactionsDTO.prototype.setArrList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.entities.FactionDTO=} opt_value
 * @param {number=} opt_index
 * @return {!proto.entities.FactionDTO}
 */
proto.entities.FactionsDTO.prototype.addArr = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.entities.FactionDTO, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.entities.FactionsDTO} returns this
 */
proto.entities.FactionsDTO.prototype.clearArrList = function() {
  return this.setArrList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.entities.MemoryPoolDTO.repeatedFields_ = [9,10];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entities.MemoryPoolDTO.prototype.toObject = function(opt_includeInstance) {
  return proto.entities.MemoryPoolDTO.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entities.MemoryPoolDTO} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.MemoryPoolDTO.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    blueprintid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    name: jspb.Message.getFieldWithDefault(msg, 3, ""),
    metadata: (f = msg.getMetadata()) && proto.entities.Metadata.toObject(includeInstance, f),
    user: jspb.Message.getFieldWithDefault(msg, 5, ""),
    campaign: jspb.Message.getFieldWithDefault(msg, 6, ""),
    world: jspb.Message.getFieldWithDefault(msg, 7, ""),
    description: jspb.Message.getFieldWithDefault(msg, 8, ""),
    memorypoolentriesList: (f = jspb.Message.getRepeatedField(msg, 9)) == null ? undefined : f,
    tagsList: (f = jspb.Message.getRepeatedField(msg, 10)) == null ? undefined : f,
    targetentity: jspb.Message.getFieldWithDefault(msg, 11, ""),
    createdat: jspb.Message.getFieldWithDefault(msg, 12, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entities.MemoryPoolDTO}
 */
proto.entities.MemoryPoolDTO.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entities.MemoryPoolDTO;
  return proto.entities.MemoryPoolDTO.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entities.MemoryPoolDTO} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entities.MemoryPoolDTO}
 */
proto.entities.MemoryPoolDTO.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBlueprintid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = new proto.entities.Metadata;
      reader.readMessage(value,proto.entities.Metadata.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setUser(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setCampaign(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setWorld(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.addMemorypoolentries(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.addTags(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setTargetentity(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCreatedat(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entities.MemoryPoolDTO.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entities.MemoryPoolDTO.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entities.MemoryPoolDTO} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.MemoryPoolDTO.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBlueprintid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.entities.Metadata.serializeBinaryToWriter
    );
  }
  f = message.getUser();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getCampaign();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getWorld();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getMemorypoolentriesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      9,
      f
    );
  }
  f = message.getTagsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      10,
      f
    );
  }
  f = message.getTargetentity();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getCreatedat();
  if (f !== 0) {
    writer.writeInt32(
      12,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.entities.MemoryPoolDTO.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.MemoryPoolDTO} returns this
 */
proto.entities.MemoryPoolDTO.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string blueprintId = 2;
 * @return {string}
 */
proto.entities.MemoryPoolDTO.prototype.getBlueprintid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.MemoryPoolDTO} returns this
 */
proto.entities.MemoryPoolDTO.prototype.setBlueprintid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.entities.MemoryPoolDTO.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.MemoryPoolDTO} returns this
 */
proto.entities.MemoryPoolDTO.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional Metadata metadata = 4;
 * @return {?proto.entities.Metadata}
 */
proto.entities.MemoryPoolDTO.prototype.getMetadata = function() {
  return /** @type{?proto.entities.Metadata} */ (
    jspb.Message.getWrapperField(this, proto.entities.Metadata, 4));
};


/**
 * @param {?proto.entities.Metadata|undefined} value
 * @return {!proto.entities.MemoryPoolDTO} returns this
*/
proto.entities.MemoryPoolDTO.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.entities.MemoryPoolDTO} returns this
 */
proto.entities.MemoryPoolDTO.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.entities.MemoryPoolDTO.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string user = 5;
 * @return {string}
 */
proto.entities.MemoryPoolDTO.prototype.getUser = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.MemoryPoolDTO} returns this
 */
proto.entities.MemoryPoolDTO.prototype.setUser = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string campaign = 6;
 * @return {string}
 */
proto.entities.MemoryPoolDTO.prototype.getCampaign = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.MemoryPoolDTO} returns this
 */
proto.entities.MemoryPoolDTO.prototype.setCampaign = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string world = 7;
 * @return {string}
 */
proto.entities.MemoryPoolDTO.prototype.getWorld = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.MemoryPoolDTO} returns this
 */
proto.entities.MemoryPoolDTO.prototype.setWorld = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string description = 8;
 * @return {string}
 */
proto.entities.MemoryPoolDTO.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.MemoryPoolDTO} returns this
 */
proto.entities.MemoryPoolDTO.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * repeated string memoryPoolEntries = 9;
 * @return {!Array<string>}
 */
proto.entities.MemoryPoolDTO.prototype.getMemorypoolentriesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 9));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.entities.MemoryPoolDTO} returns this
 */
proto.entities.MemoryPoolDTO.prototype.setMemorypoolentriesList = function(value) {
  return jspb.Message.setField(this, 9, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.entities.MemoryPoolDTO} returns this
 */
proto.entities.MemoryPoolDTO.prototype.addMemorypoolentries = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 9, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.entities.MemoryPoolDTO} returns this
 */
proto.entities.MemoryPoolDTO.prototype.clearMemorypoolentriesList = function() {
  return this.setMemorypoolentriesList([]);
};


/**
 * repeated string tags = 10;
 * @return {!Array<string>}
 */
proto.entities.MemoryPoolDTO.prototype.getTagsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 10));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.entities.MemoryPoolDTO} returns this
 */
proto.entities.MemoryPoolDTO.prototype.setTagsList = function(value) {
  return jspb.Message.setField(this, 10, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.entities.MemoryPoolDTO} returns this
 */
proto.entities.MemoryPoolDTO.prototype.addTags = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 10, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.entities.MemoryPoolDTO} returns this
 */
proto.entities.MemoryPoolDTO.prototype.clearTagsList = function() {
  return this.setTagsList([]);
};


/**
 * optional string targetEntity = 11;
 * @return {string}
 */
proto.entities.MemoryPoolDTO.prototype.getTargetentity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.MemoryPoolDTO} returns this
 */
proto.entities.MemoryPoolDTO.prototype.setTargetentity = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional int32 createdAt = 12;
 * @return {number}
 */
proto.entities.MemoryPoolDTO.prototype.getCreatedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.entities.MemoryPoolDTO} returns this
 */
proto.entities.MemoryPoolDTO.prototype.setCreatedat = function(value) {
  return jspb.Message.setProto3IntField(this, 12, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.entities.MemoryPoolsDTO.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entities.MemoryPoolsDTO.prototype.toObject = function(opt_includeInstance) {
  return proto.entities.MemoryPoolsDTO.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entities.MemoryPoolsDTO} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.MemoryPoolsDTO.toObject = function(includeInstance, msg) {
  var f, obj = {
    arrList: jspb.Message.toObjectList(msg.getArrList(),
    proto.entities.MemoryPoolDTO.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entities.MemoryPoolsDTO}
 */
proto.entities.MemoryPoolsDTO.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entities.MemoryPoolsDTO;
  return proto.entities.MemoryPoolsDTO.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entities.MemoryPoolsDTO} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entities.MemoryPoolsDTO}
 */
proto.entities.MemoryPoolsDTO.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.entities.MemoryPoolDTO;
      reader.readMessage(value,proto.entities.MemoryPoolDTO.deserializeBinaryFromReader);
      msg.addArr(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entities.MemoryPoolsDTO.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entities.MemoryPoolsDTO.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entities.MemoryPoolsDTO} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.MemoryPoolsDTO.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getArrList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.entities.MemoryPoolDTO.serializeBinaryToWriter
    );
  }
};


/**
 * repeated MemoryPoolDTO arr = 1;
 * @return {!Array<!proto.entities.MemoryPoolDTO>}
 */
proto.entities.MemoryPoolsDTO.prototype.getArrList = function() {
  return /** @type{!Array<!proto.entities.MemoryPoolDTO>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.entities.MemoryPoolDTO, 1));
};


/**
 * @param {!Array<!proto.entities.MemoryPoolDTO>} value
 * @return {!proto.entities.MemoryPoolsDTO} returns this
*/
proto.entities.MemoryPoolsDTO.prototype.setArrList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.entities.MemoryPoolDTO=} opt_value
 * @param {number=} opt_index
 * @return {!proto.entities.MemoryPoolDTO}
 */
proto.entities.MemoryPoolsDTO.prototype.addArr = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.entities.MemoryPoolDTO, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.entities.MemoryPoolsDTO} returns this
 */
proto.entities.MemoryPoolsDTO.prototype.clearArrList = function() {
  return this.setArrList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entities.MemoryPoolEntryDTO.prototype.toObject = function(opt_includeInstance) {
  return proto.entities.MemoryPoolEntryDTO.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entities.MemoryPoolEntryDTO} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.MemoryPoolEntryDTO.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    blueprintid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    name: jspb.Message.getFieldWithDefault(msg, 3, ""),
    metadata: (f = msg.getMetadata()) && proto.entities.Metadata.toObject(includeInstance, f),
    user: jspb.Message.getFieldWithDefault(msg, 5, ""),
    campaign: jspb.Message.getFieldWithDefault(msg, 6, ""),
    world: jspb.Message.getFieldWithDefault(msg, 7, ""),
    memorypool: jspb.Message.getFieldWithDefault(msg, 8, ""),
    memory: jspb.Message.getFieldWithDefault(msg, 9, ""),
    probability: jspb.Message.getFieldWithDefault(msg, 10, 0),
    defaultclarity: jspb.Message.getFieldWithDefault(msg, 11, 0),
    defaultimportance: jspb.Message.getFieldWithDefault(msg, 12, 0),
    targetentity: jspb.Message.getFieldWithDefault(msg, 13, ""),
    createdat: jspb.Message.getFieldWithDefault(msg, 14, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entities.MemoryPoolEntryDTO}
 */
proto.entities.MemoryPoolEntryDTO.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entities.MemoryPoolEntryDTO;
  return proto.entities.MemoryPoolEntryDTO.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entities.MemoryPoolEntryDTO} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entities.MemoryPoolEntryDTO}
 */
proto.entities.MemoryPoolEntryDTO.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBlueprintid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = new proto.entities.Metadata;
      reader.readMessage(value,proto.entities.Metadata.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setUser(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setCampaign(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setWorld(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setMemorypool(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setMemory(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setProbability(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDefaultclarity(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDefaultimportance(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setTargetentity(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCreatedat(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entities.MemoryPoolEntryDTO.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entities.MemoryPoolEntryDTO.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entities.MemoryPoolEntryDTO} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.MemoryPoolEntryDTO.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBlueprintid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.entities.Metadata.serializeBinaryToWriter
    );
  }
  f = message.getUser();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getCampaign();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getWorld();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getMemorypool();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getMemory();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getProbability();
  if (f !== 0) {
    writer.writeInt32(
      10,
      f
    );
  }
  f = message.getDefaultclarity();
  if (f !== 0) {
    writer.writeInt32(
      11,
      f
    );
  }
  f = message.getDefaultimportance();
  if (f !== 0) {
    writer.writeInt32(
      12,
      f
    );
  }
  f = message.getTargetentity();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getCreatedat();
  if (f !== 0) {
    writer.writeInt32(
      14,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.entities.MemoryPoolEntryDTO.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.MemoryPoolEntryDTO} returns this
 */
proto.entities.MemoryPoolEntryDTO.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string blueprintId = 2;
 * @return {string}
 */
proto.entities.MemoryPoolEntryDTO.prototype.getBlueprintid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.MemoryPoolEntryDTO} returns this
 */
proto.entities.MemoryPoolEntryDTO.prototype.setBlueprintid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.entities.MemoryPoolEntryDTO.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.MemoryPoolEntryDTO} returns this
 */
proto.entities.MemoryPoolEntryDTO.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional Metadata metadata = 4;
 * @return {?proto.entities.Metadata}
 */
proto.entities.MemoryPoolEntryDTO.prototype.getMetadata = function() {
  return /** @type{?proto.entities.Metadata} */ (
    jspb.Message.getWrapperField(this, proto.entities.Metadata, 4));
};


/**
 * @param {?proto.entities.Metadata|undefined} value
 * @return {!proto.entities.MemoryPoolEntryDTO} returns this
*/
proto.entities.MemoryPoolEntryDTO.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.entities.MemoryPoolEntryDTO} returns this
 */
proto.entities.MemoryPoolEntryDTO.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.entities.MemoryPoolEntryDTO.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string user = 5;
 * @return {string}
 */
proto.entities.MemoryPoolEntryDTO.prototype.getUser = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.MemoryPoolEntryDTO} returns this
 */
proto.entities.MemoryPoolEntryDTO.prototype.setUser = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string campaign = 6;
 * @return {string}
 */
proto.entities.MemoryPoolEntryDTO.prototype.getCampaign = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.MemoryPoolEntryDTO} returns this
 */
proto.entities.MemoryPoolEntryDTO.prototype.setCampaign = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string world = 7;
 * @return {string}
 */
proto.entities.MemoryPoolEntryDTO.prototype.getWorld = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.MemoryPoolEntryDTO} returns this
 */
proto.entities.MemoryPoolEntryDTO.prototype.setWorld = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string memoryPool = 8;
 * @return {string}
 */
proto.entities.MemoryPoolEntryDTO.prototype.getMemorypool = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.MemoryPoolEntryDTO} returns this
 */
proto.entities.MemoryPoolEntryDTO.prototype.setMemorypool = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string memory = 9;
 * @return {string}
 */
proto.entities.MemoryPoolEntryDTO.prototype.getMemory = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.MemoryPoolEntryDTO} returns this
 */
proto.entities.MemoryPoolEntryDTO.prototype.setMemory = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional int32 probability = 10;
 * @return {number}
 */
proto.entities.MemoryPoolEntryDTO.prototype.getProbability = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.entities.MemoryPoolEntryDTO} returns this
 */
proto.entities.MemoryPoolEntryDTO.prototype.setProbability = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional int32 defaultClarity = 11;
 * @return {number}
 */
proto.entities.MemoryPoolEntryDTO.prototype.getDefaultclarity = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.entities.MemoryPoolEntryDTO} returns this
 */
proto.entities.MemoryPoolEntryDTO.prototype.setDefaultclarity = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional int32 defaultImportance = 12;
 * @return {number}
 */
proto.entities.MemoryPoolEntryDTO.prototype.getDefaultimportance = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.entities.MemoryPoolEntryDTO} returns this
 */
proto.entities.MemoryPoolEntryDTO.prototype.setDefaultimportance = function(value) {
  return jspb.Message.setProto3IntField(this, 12, value);
};


/**
 * optional string targetEntity = 13;
 * @return {string}
 */
proto.entities.MemoryPoolEntryDTO.prototype.getTargetentity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.MemoryPoolEntryDTO} returns this
 */
proto.entities.MemoryPoolEntryDTO.prototype.setTargetentity = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional int32 createdAt = 14;
 * @return {number}
 */
proto.entities.MemoryPoolEntryDTO.prototype.getCreatedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/**
 * @param {number} value
 * @return {!proto.entities.MemoryPoolEntryDTO} returns this
 */
proto.entities.MemoryPoolEntryDTO.prototype.setCreatedat = function(value) {
  return jspb.Message.setProto3IntField(this, 14, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.entities.MemoryPoolEntriesDTO.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entities.MemoryPoolEntriesDTO.prototype.toObject = function(opt_includeInstance) {
  return proto.entities.MemoryPoolEntriesDTO.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entities.MemoryPoolEntriesDTO} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.MemoryPoolEntriesDTO.toObject = function(includeInstance, msg) {
  var f, obj = {
    arrList: jspb.Message.toObjectList(msg.getArrList(),
    proto.entities.MemoryPoolEntryDTO.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entities.MemoryPoolEntriesDTO}
 */
proto.entities.MemoryPoolEntriesDTO.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entities.MemoryPoolEntriesDTO;
  return proto.entities.MemoryPoolEntriesDTO.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entities.MemoryPoolEntriesDTO} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entities.MemoryPoolEntriesDTO}
 */
proto.entities.MemoryPoolEntriesDTO.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.entities.MemoryPoolEntryDTO;
      reader.readMessage(value,proto.entities.MemoryPoolEntryDTO.deserializeBinaryFromReader);
      msg.addArr(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entities.MemoryPoolEntriesDTO.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entities.MemoryPoolEntriesDTO.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entities.MemoryPoolEntriesDTO} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.MemoryPoolEntriesDTO.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getArrList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.entities.MemoryPoolEntryDTO.serializeBinaryToWriter
    );
  }
};


/**
 * repeated MemoryPoolEntryDTO arr = 1;
 * @return {!Array<!proto.entities.MemoryPoolEntryDTO>}
 */
proto.entities.MemoryPoolEntriesDTO.prototype.getArrList = function() {
  return /** @type{!Array<!proto.entities.MemoryPoolEntryDTO>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.entities.MemoryPoolEntryDTO, 1));
};


/**
 * @param {!Array<!proto.entities.MemoryPoolEntryDTO>} value
 * @return {!proto.entities.MemoryPoolEntriesDTO} returns this
*/
proto.entities.MemoryPoolEntriesDTO.prototype.setArrList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.entities.MemoryPoolEntryDTO=} opt_value
 * @param {number=} opt_index
 * @return {!proto.entities.MemoryPoolEntryDTO}
 */
proto.entities.MemoryPoolEntriesDTO.prototype.addArr = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.entities.MemoryPoolEntryDTO, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.entities.MemoryPoolEntriesDTO} returns this
 */
proto.entities.MemoryPoolEntriesDTO.prototype.clearArrList = function() {
  return this.setArrList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.entities.CharacterProfessionDTO.repeatedFields_ = [8,9];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entities.CharacterProfessionDTO.prototype.toObject = function(opt_includeInstance) {
  return proto.entities.CharacterProfessionDTO.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entities.CharacterProfessionDTO} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.CharacterProfessionDTO.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    blueprintid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    name: jspb.Message.getFieldWithDefault(msg, 3, ""),
    metadata: (f = msg.getMetadata()) && proto.entities.Metadata.toObject(includeInstance, f),
    user: jspb.Message.getFieldWithDefault(msg, 5, ""),
    campaign: jspb.Message.getFieldWithDefault(msg, 6, ""),
    world: jspb.Message.getFieldWithDefault(msg, 7, ""),
    tagsList: (f = jspb.Message.getRepeatedField(msg, 8)) == null ? undefined : f,
    memorypoolsList: (f = jspb.Message.getRepeatedField(msg, 9)) == null ? undefined : f,
    targetentity: jspb.Message.getFieldWithDefault(msg, 10, ""),
    createdat: jspb.Message.getFieldWithDefault(msg, 11, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entities.CharacterProfessionDTO}
 */
proto.entities.CharacterProfessionDTO.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entities.CharacterProfessionDTO;
  return proto.entities.CharacterProfessionDTO.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entities.CharacterProfessionDTO} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entities.CharacterProfessionDTO}
 */
proto.entities.CharacterProfessionDTO.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBlueprintid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = new proto.entities.Metadata;
      reader.readMessage(value,proto.entities.Metadata.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setUser(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setCampaign(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setWorld(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.addTags(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.addMemorypools(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setTargetentity(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCreatedat(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entities.CharacterProfessionDTO.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entities.CharacterProfessionDTO.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entities.CharacterProfessionDTO} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.CharacterProfessionDTO.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBlueprintid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.entities.Metadata.serializeBinaryToWriter
    );
  }
  f = message.getUser();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getCampaign();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getWorld();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getTagsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      8,
      f
    );
  }
  f = message.getMemorypoolsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      9,
      f
    );
  }
  f = message.getTargetentity();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getCreatedat();
  if (f !== 0) {
    writer.writeInt32(
      11,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.entities.CharacterProfessionDTO.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.CharacterProfessionDTO} returns this
 */
proto.entities.CharacterProfessionDTO.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string blueprintId = 2;
 * @return {string}
 */
proto.entities.CharacterProfessionDTO.prototype.getBlueprintid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.CharacterProfessionDTO} returns this
 */
proto.entities.CharacterProfessionDTO.prototype.setBlueprintid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.entities.CharacterProfessionDTO.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.CharacterProfessionDTO} returns this
 */
proto.entities.CharacterProfessionDTO.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional Metadata metadata = 4;
 * @return {?proto.entities.Metadata}
 */
proto.entities.CharacterProfessionDTO.prototype.getMetadata = function() {
  return /** @type{?proto.entities.Metadata} */ (
    jspb.Message.getWrapperField(this, proto.entities.Metadata, 4));
};


/**
 * @param {?proto.entities.Metadata|undefined} value
 * @return {!proto.entities.CharacterProfessionDTO} returns this
*/
proto.entities.CharacterProfessionDTO.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.entities.CharacterProfessionDTO} returns this
 */
proto.entities.CharacterProfessionDTO.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.entities.CharacterProfessionDTO.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string user = 5;
 * @return {string}
 */
proto.entities.CharacterProfessionDTO.prototype.getUser = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.CharacterProfessionDTO} returns this
 */
proto.entities.CharacterProfessionDTO.prototype.setUser = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string campaign = 6;
 * @return {string}
 */
proto.entities.CharacterProfessionDTO.prototype.getCampaign = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.CharacterProfessionDTO} returns this
 */
proto.entities.CharacterProfessionDTO.prototype.setCampaign = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string world = 7;
 * @return {string}
 */
proto.entities.CharacterProfessionDTO.prototype.getWorld = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.CharacterProfessionDTO} returns this
 */
proto.entities.CharacterProfessionDTO.prototype.setWorld = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * repeated string tags = 8;
 * @return {!Array<string>}
 */
proto.entities.CharacterProfessionDTO.prototype.getTagsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 8));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.entities.CharacterProfessionDTO} returns this
 */
proto.entities.CharacterProfessionDTO.prototype.setTagsList = function(value) {
  return jspb.Message.setField(this, 8, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.entities.CharacterProfessionDTO} returns this
 */
proto.entities.CharacterProfessionDTO.prototype.addTags = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 8, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.entities.CharacterProfessionDTO} returns this
 */
proto.entities.CharacterProfessionDTO.prototype.clearTagsList = function() {
  return this.setTagsList([]);
};


/**
 * repeated string memoryPools = 9;
 * @return {!Array<string>}
 */
proto.entities.CharacterProfessionDTO.prototype.getMemorypoolsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 9));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.entities.CharacterProfessionDTO} returns this
 */
proto.entities.CharacterProfessionDTO.prototype.setMemorypoolsList = function(value) {
  return jspb.Message.setField(this, 9, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.entities.CharacterProfessionDTO} returns this
 */
proto.entities.CharacterProfessionDTO.prototype.addMemorypools = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 9, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.entities.CharacterProfessionDTO} returns this
 */
proto.entities.CharacterProfessionDTO.prototype.clearMemorypoolsList = function() {
  return this.setMemorypoolsList([]);
};


/**
 * optional string targetEntity = 10;
 * @return {string}
 */
proto.entities.CharacterProfessionDTO.prototype.getTargetentity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.CharacterProfessionDTO} returns this
 */
proto.entities.CharacterProfessionDTO.prototype.setTargetentity = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional int32 createdAt = 11;
 * @return {number}
 */
proto.entities.CharacterProfessionDTO.prototype.getCreatedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.entities.CharacterProfessionDTO} returns this
 */
proto.entities.CharacterProfessionDTO.prototype.setCreatedat = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.entities.CharacterProfessionsDTO.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entities.CharacterProfessionsDTO.prototype.toObject = function(opt_includeInstance) {
  return proto.entities.CharacterProfessionsDTO.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entities.CharacterProfessionsDTO} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.CharacterProfessionsDTO.toObject = function(includeInstance, msg) {
  var f, obj = {
    arrList: jspb.Message.toObjectList(msg.getArrList(),
    proto.entities.CharacterProfessionDTO.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entities.CharacterProfessionsDTO}
 */
proto.entities.CharacterProfessionsDTO.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entities.CharacterProfessionsDTO;
  return proto.entities.CharacterProfessionsDTO.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entities.CharacterProfessionsDTO} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entities.CharacterProfessionsDTO}
 */
proto.entities.CharacterProfessionsDTO.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.entities.CharacterProfessionDTO;
      reader.readMessage(value,proto.entities.CharacterProfessionDTO.deserializeBinaryFromReader);
      msg.addArr(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entities.CharacterProfessionsDTO.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entities.CharacterProfessionsDTO.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entities.CharacterProfessionsDTO} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.CharacterProfessionsDTO.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getArrList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.entities.CharacterProfessionDTO.serializeBinaryToWriter
    );
  }
};


/**
 * repeated CharacterProfessionDTO arr = 1;
 * @return {!Array<!proto.entities.CharacterProfessionDTO>}
 */
proto.entities.CharacterProfessionsDTO.prototype.getArrList = function() {
  return /** @type{!Array<!proto.entities.CharacterProfessionDTO>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.entities.CharacterProfessionDTO, 1));
};


/**
 * @param {!Array<!proto.entities.CharacterProfessionDTO>} value
 * @return {!proto.entities.CharacterProfessionsDTO} returns this
*/
proto.entities.CharacterProfessionsDTO.prototype.setArrList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.entities.CharacterProfessionDTO=} opt_value
 * @param {number=} opt_index
 * @return {!proto.entities.CharacterProfessionDTO}
 */
proto.entities.CharacterProfessionsDTO.prototype.addArr = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.entities.CharacterProfessionDTO, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.entities.CharacterProfessionsDTO} returns this
 */
proto.entities.CharacterProfessionsDTO.prototype.clearArrList = function() {
  return this.setArrList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.entities.EquipmentSlotDTO.repeatedFields_ = [8];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entities.EquipmentSlotDTO.prototype.toObject = function(opt_includeInstance) {
  return proto.entities.EquipmentSlotDTO.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entities.EquipmentSlotDTO} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.EquipmentSlotDTO.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    blueprintid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    name: jspb.Message.getFieldWithDefault(msg, 3, ""),
    metadata: (f = msg.getMetadata()) && proto.entities.Metadata.toObject(includeInstance, f),
    user: jspb.Message.getFieldWithDefault(msg, 5, ""),
    campaign: jspb.Message.getFieldWithDefault(msg, 6, ""),
    world: jspb.Message.getFieldWithDefault(msg, 7, ""),
    allowedentitiesList: (f = jspb.Message.getRepeatedField(msg, 8)) == null ? undefined : f,
    equippeditem: (f = msg.getEquippeditem()) && proto.entities.ItemDTO.toObject(includeInstance, f),
    character: jspb.Message.getFieldWithDefault(msg, 10, ""),
    targetentity: jspb.Message.getFieldWithDefault(msg, 11, ""),
    createdat: jspb.Message.getFieldWithDefault(msg, 12, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entities.EquipmentSlotDTO}
 */
proto.entities.EquipmentSlotDTO.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entities.EquipmentSlotDTO;
  return proto.entities.EquipmentSlotDTO.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entities.EquipmentSlotDTO} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entities.EquipmentSlotDTO}
 */
proto.entities.EquipmentSlotDTO.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBlueprintid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = new proto.entities.Metadata;
      reader.readMessage(value,proto.entities.Metadata.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setUser(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setCampaign(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setWorld(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.addAllowedentities(value);
      break;
    case 9:
      var value = new proto.entities.ItemDTO;
      reader.readMessage(value,proto.entities.ItemDTO.deserializeBinaryFromReader);
      msg.setEquippeditem(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setCharacter(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setTargetentity(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCreatedat(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entities.EquipmentSlotDTO.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entities.EquipmentSlotDTO.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entities.EquipmentSlotDTO} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.EquipmentSlotDTO.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBlueprintid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.entities.Metadata.serializeBinaryToWriter
    );
  }
  f = message.getUser();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getCampaign();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getWorld();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getAllowedentitiesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      8,
      f
    );
  }
  f = message.getEquippeditem();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.entities.ItemDTO.serializeBinaryToWriter
    );
  }
  f = message.getCharacter();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getTargetentity();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getCreatedat();
  if (f !== 0) {
    writer.writeInt32(
      12,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.entities.EquipmentSlotDTO.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.EquipmentSlotDTO} returns this
 */
proto.entities.EquipmentSlotDTO.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string blueprintId = 2;
 * @return {string}
 */
proto.entities.EquipmentSlotDTO.prototype.getBlueprintid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.EquipmentSlotDTO} returns this
 */
proto.entities.EquipmentSlotDTO.prototype.setBlueprintid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.entities.EquipmentSlotDTO.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.EquipmentSlotDTO} returns this
 */
proto.entities.EquipmentSlotDTO.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional Metadata metadata = 4;
 * @return {?proto.entities.Metadata}
 */
proto.entities.EquipmentSlotDTO.prototype.getMetadata = function() {
  return /** @type{?proto.entities.Metadata} */ (
    jspb.Message.getWrapperField(this, proto.entities.Metadata, 4));
};


/**
 * @param {?proto.entities.Metadata|undefined} value
 * @return {!proto.entities.EquipmentSlotDTO} returns this
*/
proto.entities.EquipmentSlotDTO.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.entities.EquipmentSlotDTO} returns this
 */
proto.entities.EquipmentSlotDTO.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.entities.EquipmentSlotDTO.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string user = 5;
 * @return {string}
 */
proto.entities.EquipmentSlotDTO.prototype.getUser = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.EquipmentSlotDTO} returns this
 */
proto.entities.EquipmentSlotDTO.prototype.setUser = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string campaign = 6;
 * @return {string}
 */
proto.entities.EquipmentSlotDTO.prototype.getCampaign = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.EquipmentSlotDTO} returns this
 */
proto.entities.EquipmentSlotDTO.prototype.setCampaign = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string world = 7;
 * @return {string}
 */
proto.entities.EquipmentSlotDTO.prototype.getWorld = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.EquipmentSlotDTO} returns this
 */
proto.entities.EquipmentSlotDTO.prototype.setWorld = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * repeated string allowedEntities = 8;
 * @return {!Array<string>}
 */
proto.entities.EquipmentSlotDTO.prototype.getAllowedentitiesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 8));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.entities.EquipmentSlotDTO} returns this
 */
proto.entities.EquipmentSlotDTO.prototype.setAllowedentitiesList = function(value) {
  return jspb.Message.setField(this, 8, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.entities.EquipmentSlotDTO} returns this
 */
proto.entities.EquipmentSlotDTO.prototype.addAllowedentities = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 8, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.entities.EquipmentSlotDTO} returns this
 */
proto.entities.EquipmentSlotDTO.prototype.clearAllowedentitiesList = function() {
  return this.setAllowedentitiesList([]);
};


/**
 * optional ItemDTO equippedItem = 9;
 * @return {?proto.entities.ItemDTO}
 */
proto.entities.EquipmentSlotDTO.prototype.getEquippeditem = function() {
  return /** @type{?proto.entities.ItemDTO} */ (
    jspb.Message.getWrapperField(this, proto.entities.ItemDTO, 9));
};


/**
 * @param {?proto.entities.ItemDTO|undefined} value
 * @return {!proto.entities.EquipmentSlotDTO} returns this
*/
proto.entities.EquipmentSlotDTO.prototype.setEquippeditem = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.entities.EquipmentSlotDTO} returns this
 */
proto.entities.EquipmentSlotDTO.prototype.clearEquippeditem = function() {
  return this.setEquippeditem(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.entities.EquipmentSlotDTO.prototype.hasEquippeditem = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional string character = 10;
 * @return {string}
 */
proto.entities.EquipmentSlotDTO.prototype.getCharacter = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.EquipmentSlotDTO} returns this
 */
proto.entities.EquipmentSlotDTO.prototype.setCharacter = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string targetEntity = 11;
 * @return {string}
 */
proto.entities.EquipmentSlotDTO.prototype.getTargetentity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.EquipmentSlotDTO} returns this
 */
proto.entities.EquipmentSlotDTO.prototype.setTargetentity = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional int32 createdAt = 12;
 * @return {number}
 */
proto.entities.EquipmentSlotDTO.prototype.getCreatedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.entities.EquipmentSlotDTO} returns this
 */
proto.entities.EquipmentSlotDTO.prototype.setCreatedat = function(value) {
  return jspb.Message.setProto3IntField(this, 12, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.entities.EquipmentSlotsDTO.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entities.EquipmentSlotsDTO.prototype.toObject = function(opt_includeInstance) {
  return proto.entities.EquipmentSlotsDTO.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entities.EquipmentSlotsDTO} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.EquipmentSlotsDTO.toObject = function(includeInstance, msg) {
  var f, obj = {
    arrList: jspb.Message.toObjectList(msg.getArrList(),
    proto.entities.EquipmentSlotDTO.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entities.EquipmentSlotsDTO}
 */
proto.entities.EquipmentSlotsDTO.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entities.EquipmentSlotsDTO;
  return proto.entities.EquipmentSlotsDTO.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entities.EquipmentSlotsDTO} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entities.EquipmentSlotsDTO}
 */
proto.entities.EquipmentSlotsDTO.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.entities.EquipmentSlotDTO;
      reader.readMessage(value,proto.entities.EquipmentSlotDTO.deserializeBinaryFromReader);
      msg.addArr(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entities.EquipmentSlotsDTO.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entities.EquipmentSlotsDTO.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entities.EquipmentSlotsDTO} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.EquipmentSlotsDTO.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getArrList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.entities.EquipmentSlotDTO.serializeBinaryToWriter
    );
  }
};


/**
 * repeated EquipmentSlotDTO arr = 1;
 * @return {!Array<!proto.entities.EquipmentSlotDTO>}
 */
proto.entities.EquipmentSlotsDTO.prototype.getArrList = function() {
  return /** @type{!Array<!proto.entities.EquipmentSlotDTO>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.entities.EquipmentSlotDTO, 1));
};


/**
 * @param {!Array<!proto.entities.EquipmentSlotDTO>} value
 * @return {!proto.entities.EquipmentSlotsDTO} returns this
*/
proto.entities.EquipmentSlotsDTO.prototype.setArrList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.entities.EquipmentSlotDTO=} opt_value
 * @param {number=} opt_index
 * @return {!proto.entities.EquipmentSlotDTO}
 */
proto.entities.EquipmentSlotsDTO.prototype.addArr = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.entities.EquipmentSlotDTO, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.entities.EquipmentSlotsDTO} returns this
 */
proto.entities.EquipmentSlotsDTO.prototype.clearArrList = function() {
  return this.setArrList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entities.BirthsignDTO.prototype.toObject = function(opt_includeInstance) {
  return proto.entities.BirthsignDTO.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entities.BirthsignDTO} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.BirthsignDTO.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    blueprintid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    name: jspb.Message.getFieldWithDefault(msg, 3, ""),
    metadata: (f = msg.getMetadata()) && proto.entities.Metadata.toObject(includeInstance, f),
    user: jspb.Message.getFieldWithDefault(msg, 5, ""),
    campaign: jspb.Message.getFieldWithDefault(msg, 6, ""),
    world: jspb.Message.getFieldWithDefault(msg, 7, ""),
    targetentity: jspb.Message.getFieldWithDefault(msg, 8, ""),
    createdat: jspb.Message.getFieldWithDefault(msg, 9, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entities.BirthsignDTO}
 */
proto.entities.BirthsignDTO.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entities.BirthsignDTO;
  return proto.entities.BirthsignDTO.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entities.BirthsignDTO} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entities.BirthsignDTO}
 */
proto.entities.BirthsignDTO.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBlueprintid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = new proto.entities.Metadata;
      reader.readMessage(value,proto.entities.Metadata.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setUser(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setCampaign(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setWorld(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setTargetentity(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCreatedat(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entities.BirthsignDTO.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entities.BirthsignDTO.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entities.BirthsignDTO} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.BirthsignDTO.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBlueprintid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.entities.Metadata.serializeBinaryToWriter
    );
  }
  f = message.getUser();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getCampaign();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getWorld();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getTargetentity();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getCreatedat();
  if (f !== 0) {
    writer.writeInt32(
      9,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.entities.BirthsignDTO.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.BirthsignDTO} returns this
 */
proto.entities.BirthsignDTO.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string blueprintId = 2;
 * @return {string}
 */
proto.entities.BirthsignDTO.prototype.getBlueprintid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.BirthsignDTO} returns this
 */
proto.entities.BirthsignDTO.prototype.setBlueprintid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.entities.BirthsignDTO.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.BirthsignDTO} returns this
 */
proto.entities.BirthsignDTO.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional Metadata metadata = 4;
 * @return {?proto.entities.Metadata}
 */
proto.entities.BirthsignDTO.prototype.getMetadata = function() {
  return /** @type{?proto.entities.Metadata} */ (
    jspb.Message.getWrapperField(this, proto.entities.Metadata, 4));
};


/**
 * @param {?proto.entities.Metadata|undefined} value
 * @return {!proto.entities.BirthsignDTO} returns this
*/
proto.entities.BirthsignDTO.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.entities.BirthsignDTO} returns this
 */
proto.entities.BirthsignDTO.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.entities.BirthsignDTO.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string user = 5;
 * @return {string}
 */
proto.entities.BirthsignDTO.prototype.getUser = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.BirthsignDTO} returns this
 */
proto.entities.BirthsignDTO.prototype.setUser = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string campaign = 6;
 * @return {string}
 */
proto.entities.BirthsignDTO.prototype.getCampaign = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.BirthsignDTO} returns this
 */
proto.entities.BirthsignDTO.prototype.setCampaign = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string world = 7;
 * @return {string}
 */
proto.entities.BirthsignDTO.prototype.getWorld = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.BirthsignDTO} returns this
 */
proto.entities.BirthsignDTO.prototype.setWorld = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string targetEntity = 8;
 * @return {string}
 */
proto.entities.BirthsignDTO.prototype.getTargetentity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.BirthsignDTO} returns this
 */
proto.entities.BirthsignDTO.prototype.setTargetentity = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional int32 createdAt = 9;
 * @return {number}
 */
proto.entities.BirthsignDTO.prototype.getCreatedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.entities.BirthsignDTO} returns this
 */
proto.entities.BirthsignDTO.prototype.setCreatedat = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.entities.BirthsignsDTO.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entities.BirthsignsDTO.prototype.toObject = function(opt_includeInstance) {
  return proto.entities.BirthsignsDTO.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entities.BirthsignsDTO} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.BirthsignsDTO.toObject = function(includeInstance, msg) {
  var f, obj = {
    arrList: jspb.Message.toObjectList(msg.getArrList(),
    proto.entities.BirthsignDTO.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entities.BirthsignsDTO}
 */
proto.entities.BirthsignsDTO.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entities.BirthsignsDTO;
  return proto.entities.BirthsignsDTO.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entities.BirthsignsDTO} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entities.BirthsignsDTO}
 */
proto.entities.BirthsignsDTO.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.entities.BirthsignDTO;
      reader.readMessage(value,proto.entities.BirthsignDTO.deserializeBinaryFromReader);
      msg.addArr(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entities.BirthsignsDTO.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entities.BirthsignsDTO.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entities.BirthsignsDTO} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.BirthsignsDTO.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getArrList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.entities.BirthsignDTO.serializeBinaryToWriter
    );
  }
};


/**
 * repeated BirthsignDTO arr = 1;
 * @return {!Array<!proto.entities.BirthsignDTO>}
 */
proto.entities.BirthsignsDTO.prototype.getArrList = function() {
  return /** @type{!Array<!proto.entities.BirthsignDTO>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.entities.BirthsignDTO, 1));
};


/**
 * @param {!Array<!proto.entities.BirthsignDTO>} value
 * @return {!proto.entities.BirthsignsDTO} returns this
*/
proto.entities.BirthsignsDTO.prototype.setArrList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.entities.BirthsignDTO=} opt_value
 * @param {number=} opt_index
 * @return {!proto.entities.BirthsignDTO}
 */
proto.entities.BirthsignsDTO.prototype.addArr = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.entities.BirthsignDTO, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.entities.BirthsignsDTO} returns this
 */
proto.entities.BirthsignsDTO.prototype.clearArrList = function() {
  return this.setArrList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entities.RaceDTO.prototype.toObject = function(opt_includeInstance) {
  return proto.entities.RaceDTO.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entities.RaceDTO} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.RaceDTO.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    blueprintid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    name: jspb.Message.getFieldWithDefault(msg, 3, ""),
    equipmentslotdefinitions: (f = msg.getEquipmentslotdefinitions()) && proto.entities.EquipmentSlotDefinitionsDTO.toObject(includeInstance, f),
    user: jspb.Message.getFieldWithDefault(msg, 5, ""),
    campaign: jspb.Message.getFieldWithDefault(msg, 6, ""),
    world: jspb.Message.getFieldWithDefault(msg, 7, ""),
    metadata: (f = msg.getMetadata()) && proto.entities.Metadata.toObject(includeInstance, f),
    targetentity: jspb.Message.getFieldWithDefault(msg, 9, ""),
    createdat: jspb.Message.getFieldWithDefault(msg, 10, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entities.RaceDTO}
 */
proto.entities.RaceDTO.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entities.RaceDTO;
  return proto.entities.RaceDTO.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entities.RaceDTO} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entities.RaceDTO}
 */
proto.entities.RaceDTO.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBlueprintid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = new proto.entities.EquipmentSlotDefinitionsDTO;
      reader.readMessage(value,proto.entities.EquipmentSlotDefinitionsDTO.deserializeBinaryFromReader);
      msg.setEquipmentslotdefinitions(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setUser(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setCampaign(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setWorld(value);
      break;
    case 8:
      var value = new proto.entities.Metadata;
      reader.readMessage(value,proto.entities.Metadata.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setTargetentity(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCreatedat(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entities.RaceDTO.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entities.RaceDTO.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entities.RaceDTO} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.RaceDTO.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBlueprintid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getEquipmentslotdefinitions();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.entities.EquipmentSlotDefinitionsDTO.serializeBinaryToWriter
    );
  }
  f = message.getUser();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getCampaign();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getWorld();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.entities.Metadata.serializeBinaryToWriter
    );
  }
  f = message.getTargetentity();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getCreatedat();
  if (f !== 0) {
    writer.writeInt32(
      10,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.entities.RaceDTO.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.RaceDTO} returns this
 */
proto.entities.RaceDTO.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string blueprintId = 2;
 * @return {string}
 */
proto.entities.RaceDTO.prototype.getBlueprintid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.RaceDTO} returns this
 */
proto.entities.RaceDTO.prototype.setBlueprintid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.entities.RaceDTO.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.RaceDTO} returns this
 */
proto.entities.RaceDTO.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional EquipmentSlotDefinitionsDTO equipmentSlotDefinitions = 4;
 * @return {?proto.entities.EquipmentSlotDefinitionsDTO}
 */
proto.entities.RaceDTO.prototype.getEquipmentslotdefinitions = function() {
  return /** @type{?proto.entities.EquipmentSlotDefinitionsDTO} */ (
    jspb.Message.getWrapperField(this, proto.entities.EquipmentSlotDefinitionsDTO, 4));
};


/**
 * @param {?proto.entities.EquipmentSlotDefinitionsDTO|undefined} value
 * @return {!proto.entities.RaceDTO} returns this
*/
proto.entities.RaceDTO.prototype.setEquipmentslotdefinitions = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.entities.RaceDTO} returns this
 */
proto.entities.RaceDTO.prototype.clearEquipmentslotdefinitions = function() {
  return this.setEquipmentslotdefinitions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.entities.RaceDTO.prototype.hasEquipmentslotdefinitions = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string user = 5;
 * @return {string}
 */
proto.entities.RaceDTO.prototype.getUser = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.RaceDTO} returns this
 */
proto.entities.RaceDTO.prototype.setUser = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string campaign = 6;
 * @return {string}
 */
proto.entities.RaceDTO.prototype.getCampaign = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.RaceDTO} returns this
 */
proto.entities.RaceDTO.prototype.setCampaign = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string world = 7;
 * @return {string}
 */
proto.entities.RaceDTO.prototype.getWorld = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.RaceDTO} returns this
 */
proto.entities.RaceDTO.prototype.setWorld = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional Metadata metadata = 8;
 * @return {?proto.entities.Metadata}
 */
proto.entities.RaceDTO.prototype.getMetadata = function() {
  return /** @type{?proto.entities.Metadata} */ (
    jspb.Message.getWrapperField(this, proto.entities.Metadata, 8));
};


/**
 * @param {?proto.entities.Metadata|undefined} value
 * @return {!proto.entities.RaceDTO} returns this
*/
proto.entities.RaceDTO.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.entities.RaceDTO} returns this
 */
proto.entities.RaceDTO.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.entities.RaceDTO.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional string targetEntity = 9;
 * @return {string}
 */
proto.entities.RaceDTO.prototype.getTargetentity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.RaceDTO} returns this
 */
proto.entities.RaceDTO.prototype.setTargetentity = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional int32 createdAt = 10;
 * @return {number}
 */
proto.entities.RaceDTO.prototype.getCreatedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.entities.RaceDTO} returns this
 */
proto.entities.RaceDTO.prototype.setCreatedat = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.entities.RacesDTO.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entities.RacesDTO.prototype.toObject = function(opt_includeInstance) {
  return proto.entities.RacesDTO.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entities.RacesDTO} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.RacesDTO.toObject = function(includeInstance, msg) {
  var f, obj = {
    arrList: jspb.Message.toObjectList(msg.getArrList(),
    proto.entities.RaceDTO.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entities.RacesDTO}
 */
proto.entities.RacesDTO.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entities.RacesDTO;
  return proto.entities.RacesDTO.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entities.RacesDTO} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entities.RacesDTO}
 */
proto.entities.RacesDTO.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.entities.RaceDTO;
      reader.readMessage(value,proto.entities.RaceDTO.deserializeBinaryFromReader);
      msg.addArr(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entities.RacesDTO.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entities.RacesDTO.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entities.RacesDTO} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.RacesDTO.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getArrList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.entities.RaceDTO.serializeBinaryToWriter
    );
  }
};


/**
 * repeated RaceDTO arr = 1;
 * @return {!Array<!proto.entities.RaceDTO>}
 */
proto.entities.RacesDTO.prototype.getArrList = function() {
  return /** @type{!Array<!proto.entities.RaceDTO>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.entities.RaceDTO, 1));
};


/**
 * @param {!Array<!proto.entities.RaceDTO>} value
 * @return {!proto.entities.RacesDTO} returns this
*/
proto.entities.RacesDTO.prototype.setArrList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.entities.RaceDTO=} opt_value
 * @param {number=} opt_index
 * @return {!proto.entities.RaceDTO}
 */
proto.entities.RacesDTO.prototype.addArr = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.entities.RaceDTO, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.entities.RacesDTO} returns this
 */
proto.entities.RacesDTO.prototype.clearArrList = function() {
  return this.setArrList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.entities.EquipmentSlotDefinitionDTO.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entities.EquipmentSlotDefinitionDTO.prototype.toObject = function(opt_includeInstance) {
  return proto.entities.EquipmentSlotDefinitionDTO.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entities.EquipmentSlotDefinitionDTO} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.EquipmentSlotDefinitionDTO.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    allowedentitiesList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    clazz: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entities.EquipmentSlotDefinitionDTO}
 */
proto.entities.EquipmentSlotDefinitionDTO.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entities.EquipmentSlotDefinitionDTO;
  return proto.entities.EquipmentSlotDefinitionDTO.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entities.EquipmentSlotDefinitionDTO} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entities.EquipmentSlotDefinitionDTO}
 */
proto.entities.EquipmentSlotDefinitionDTO.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addAllowedentities(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setClazz(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entities.EquipmentSlotDefinitionDTO.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entities.EquipmentSlotDefinitionDTO.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entities.EquipmentSlotDefinitionDTO} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.EquipmentSlotDefinitionDTO.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAllowedentitiesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getClazz();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.entities.EquipmentSlotDefinitionDTO.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.EquipmentSlotDefinitionDTO} returns this
 */
proto.entities.EquipmentSlotDefinitionDTO.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string allowedEntities = 2;
 * @return {!Array<string>}
 */
proto.entities.EquipmentSlotDefinitionDTO.prototype.getAllowedentitiesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.entities.EquipmentSlotDefinitionDTO} returns this
 */
proto.entities.EquipmentSlotDefinitionDTO.prototype.setAllowedentitiesList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.entities.EquipmentSlotDefinitionDTO} returns this
 */
proto.entities.EquipmentSlotDefinitionDTO.prototype.addAllowedentities = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.entities.EquipmentSlotDefinitionDTO} returns this
 */
proto.entities.EquipmentSlotDefinitionDTO.prototype.clearAllowedentitiesList = function() {
  return this.setAllowedentitiesList([]);
};


/**
 * optional string clazz = 3;
 * @return {string}
 */
proto.entities.EquipmentSlotDefinitionDTO.prototype.getClazz = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.EquipmentSlotDefinitionDTO} returns this
 */
proto.entities.EquipmentSlotDefinitionDTO.prototype.setClazz = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.entities.EquipmentSlotDefinitionsDTO.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entities.EquipmentSlotDefinitionsDTO.prototype.toObject = function(opt_includeInstance) {
  return proto.entities.EquipmentSlotDefinitionsDTO.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entities.EquipmentSlotDefinitionsDTO} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.EquipmentSlotDefinitionsDTO.toObject = function(includeInstance, msg) {
  var f, obj = {
    arrList: jspb.Message.toObjectList(msg.getArrList(),
    proto.entities.EquipmentSlotDefinitionDTO.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entities.EquipmentSlotDefinitionsDTO}
 */
proto.entities.EquipmentSlotDefinitionsDTO.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entities.EquipmentSlotDefinitionsDTO;
  return proto.entities.EquipmentSlotDefinitionsDTO.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entities.EquipmentSlotDefinitionsDTO} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entities.EquipmentSlotDefinitionsDTO}
 */
proto.entities.EquipmentSlotDefinitionsDTO.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.entities.EquipmentSlotDefinitionDTO;
      reader.readMessage(value,proto.entities.EquipmentSlotDefinitionDTO.deserializeBinaryFromReader);
      msg.addArr(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entities.EquipmentSlotDefinitionsDTO.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entities.EquipmentSlotDefinitionsDTO.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entities.EquipmentSlotDefinitionsDTO} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.EquipmentSlotDefinitionsDTO.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getArrList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.entities.EquipmentSlotDefinitionDTO.serializeBinaryToWriter
    );
  }
};


/**
 * repeated EquipmentSlotDefinitionDTO arr = 1;
 * @return {!Array<!proto.entities.EquipmentSlotDefinitionDTO>}
 */
proto.entities.EquipmentSlotDefinitionsDTO.prototype.getArrList = function() {
  return /** @type{!Array<!proto.entities.EquipmentSlotDefinitionDTO>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.entities.EquipmentSlotDefinitionDTO, 1));
};


/**
 * @param {!Array<!proto.entities.EquipmentSlotDefinitionDTO>} value
 * @return {!proto.entities.EquipmentSlotDefinitionsDTO} returns this
*/
proto.entities.EquipmentSlotDefinitionsDTO.prototype.setArrList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.entities.EquipmentSlotDefinitionDTO=} opt_value
 * @param {number=} opt_index
 * @return {!proto.entities.EquipmentSlotDefinitionDTO}
 */
proto.entities.EquipmentSlotDefinitionsDTO.prototype.addArr = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.entities.EquipmentSlotDefinitionDTO, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.entities.EquipmentSlotDefinitionsDTO} returns this
 */
proto.entities.EquipmentSlotDefinitionsDTO.prototype.clearArrList = function() {
  return this.setArrList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.entities.StorageSlotDefinitionDTO.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entities.StorageSlotDefinitionDTO.prototype.toObject = function(opt_includeInstance) {
  return proto.entities.StorageSlotDefinitionDTO.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entities.StorageSlotDefinitionDTO} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.StorageSlotDefinitionDTO.toObject = function(includeInstance, msg) {
  var f, obj = {
    gridList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    maxweight: jspb.Message.getFieldWithDefault(msg, 3, 0),
    clazz: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entities.StorageSlotDefinitionDTO}
 */
proto.entities.StorageSlotDefinitionDTO.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entities.StorageSlotDefinitionDTO;
  return proto.entities.StorageSlotDefinitionDTO.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entities.StorageSlotDefinitionDTO} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entities.StorageSlotDefinitionDTO}
 */
proto.entities.StorageSlotDefinitionDTO.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt32() : [reader.readInt32()]);
      for (var i = 0; i < values.length; i++) {
        msg.addGrid(values[i]);
      }
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMaxweight(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setClazz(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entities.StorageSlotDefinitionDTO.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entities.StorageSlotDefinitionDTO.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entities.StorageSlotDefinitionDTO} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.StorageSlotDefinitionDTO.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGridList();
  if (f.length > 0) {
    writer.writePackedInt32(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getMaxweight();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getClazz();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * repeated int32 grid = 1;
 * @return {!Array<number>}
 */
proto.entities.StorageSlotDefinitionDTO.prototype.getGridList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.entities.StorageSlotDefinitionDTO} returns this
 */
proto.entities.StorageSlotDefinitionDTO.prototype.setGridList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.entities.StorageSlotDefinitionDTO} returns this
 */
proto.entities.StorageSlotDefinitionDTO.prototype.addGrid = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.entities.StorageSlotDefinitionDTO} returns this
 */
proto.entities.StorageSlotDefinitionDTO.prototype.clearGridList = function() {
  return this.setGridList([]);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.entities.StorageSlotDefinitionDTO.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.StorageSlotDefinitionDTO} returns this
 */
proto.entities.StorageSlotDefinitionDTO.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 maxWeight = 3;
 * @return {number}
 */
proto.entities.StorageSlotDefinitionDTO.prototype.getMaxweight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.entities.StorageSlotDefinitionDTO} returns this
 */
proto.entities.StorageSlotDefinitionDTO.prototype.setMaxweight = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string clazz = 4;
 * @return {string}
 */
proto.entities.StorageSlotDefinitionDTO.prototype.getClazz = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.StorageSlotDefinitionDTO} returns this
 */
proto.entities.StorageSlotDefinitionDTO.prototype.setClazz = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.entities.StorageSlotDefinitionsDTO.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entities.StorageSlotDefinitionsDTO.prototype.toObject = function(opt_includeInstance) {
  return proto.entities.StorageSlotDefinitionsDTO.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entities.StorageSlotDefinitionsDTO} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.StorageSlotDefinitionsDTO.toObject = function(includeInstance, msg) {
  var f, obj = {
    arrList: jspb.Message.toObjectList(msg.getArrList(),
    proto.entities.StorageSlotDefinitionDTO.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entities.StorageSlotDefinitionsDTO}
 */
proto.entities.StorageSlotDefinitionsDTO.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entities.StorageSlotDefinitionsDTO;
  return proto.entities.StorageSlotDefinitionsDTO.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entities.StorageSlotDefinitionsDTO} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entities.StorageSlotDefinitionsDTO}
 */
proto.entities.StorageSlotDefinitionsDTO.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.entities.StorageSlotDefinitionDTO;
      reader.readMessage(value,proto.entities.StorageSlotDefinitionDTO.deserializeBinaryFromReader);
      msg.addArr(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entities.StorageSlotDefinitionsDTO.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entities.StorageSlotDefinitionsDTO.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entities.StorageSlotDefinitionsDTO} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.StorageSlotDefinitionsDTO.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getArrList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.entities.StorageSlotDefinitionDTO.serializeBinaryToWriter
    );
  }
};


/**
 * repeated StorageSlotDefinitionDTO arr = 1;
 * @return {!Array<!proto.entities.StorageSlotDefinitionDTO>}
 */
proto.entities.StorageSlotDefinitionsDTO.prototype.getArrList = function() {
  return /** @type{!Array<!proto.entities.StorageSlotDefinitionDTO>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.entities.StorageSlotDefinitionDTO, 1));
};


/**
 * @param {!Array<!proto.entities.StorageSlotDefinitionDTO>} value
 * @return {!proto.entities.StorageSlotDefinitionsDTO} returns this
*/
proto.entities.StorageSlotDefinitionsDTO.prototype.setArrList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.entities.StorageSlotDefinitionDTO=} opt_value
 * @param {number=} opt_index
 * @return {!proto.entities.StorageSlotDefinitionDTO}
 */
proto.entities.StorageSlotDefinitionsDTO.prototype.addArr = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.entities.StorageSlotDefinitionDTO, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.entities.StorageSlotDefinitionsDTO} returns this
 */
proto.entities.StorageSlotDefinitionsDTO.prototype.clearArrList = function() {
  return this.setArrList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entities.MoodDTO.prototype.toObject = function(opt_includeInstance) {
  return proto.entities.MoodDTO.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entities.MoodDTO} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.MoodDTO.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    blueprintid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    name: jspb.Message.getFieldWithDefault(msg, 3, ""),
    metadata: (f = msg.getMetadata()) && proto.entities.Metadata.toObject(includeInstance, f),
    user: jspb.Message.getFieldWithDefault(msg, 5, ""),
    campaign: jspb.Message.getFieldWithDefault(msg, 6, ""),
    world: jspb.Message.getFieldWithDefault(msg, 7, ""),
    description: jspb.Message.getFieldWithDefault(msg, 8, ""),
    targetentity: jspb.Message.getFieldWithDefault(msg, 9, ""),
    createdat: jspb.Message.getFieldWithDefault(msg, 10, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entities.MoodDTO}
 */
proto.entities.MoodDTO.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entities.MoodDTO;
  return proto.entities.MoodDTO.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entities.MoodDTO} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entities.MoodDTO}
 */
proto.entities.MoodDTO.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBlueprintid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = new proto.entities.Metadata;
      reader.readMessage(value,proto.entities.Metadata.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setUser(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setCampaign(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setWorld(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setTargetentity(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCreatedat(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entities.MoodDTO.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entities.MoodDTO.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entities.MoodDTO} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.MoodDTO.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBlueprintid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.entities.Metadata.serializeBinaryToWriter
    );
  }
  f = message.getUser();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getCampaign();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getWorld();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getTargetentity();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getCreatedat();
  if (f !== 0) {
    writer.writeInt32(
      10,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.entities.MoodDTO.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.MoodDTO} returns this
 */
proto.entities.MoodDTO.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string blueprintId = 2;
 * @return {string}
 */
proto.entities.MoodDTO.prototype.getBlueprintid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.MoodDTO} returns this
 */
proto.entities.MoodDTO.prototype.setBlueprintid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.entities.MoodDTO.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.MoodDTO} returns this
 */
proto.entities.MoodDTO.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional Metadata metadata = 4;
 * @return {?proto.entities.Metadata}
 */
proto.entities.MoodDTO.prototype.getMetadata = function() {
  return /** @type{?proto.entities.Metadata} */ (
    jspb.Message.getWrapperField(this, proto.entities.Metadata, 4));
};


/**
 * @param {?proto.entities.Metadata|undefined} value
 * @return {!proto.entities.MoodDTO} returns this
*/
proto.entities.MoodDTO.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.entities.MoodDTO} returns this
 */
proto.entities.MoodDTO.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.entities.MoodDTO.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string user = 5;
 * @return {string}
 */
proto.entities.MoodDTO.prototype.getUser = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.MoodDTO} returns this
 */
proto.entities.MoodDTO.prototype.setUser = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string campaign = 6;
 * @return {string}
 */
proto.entities.MoodDTO.prototype.getCampaign = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.MoodDTO} returns this
 */
proto.entities.MoodDTO.prototype.setCampaign = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string world = 7;
 * @return {string}
 */
proto.entities.MoodDTO.prototype.getWorld = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.MoodDTO} returns this
 */
proto.entities.MoodDTO.prototype.setWorld = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string description = 8;
 * @return {string}
 */
proto.entities.MoodDTO.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.MoodDTO} returns this
 */
proto.entities.MoodDTO.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string targetEntity = 9;
 * @return {string}
 */
proto.entities.MoodDTO.prototype.getTargetentity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.MoodDTO} returns this
 */
proto.entities.MoodDTO.prototype.setTargetentity = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional int32 createdAt = 10;
 * @return {number}
 */
proto.entities.MoodDTO.prototype.getCreatedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.entities.MoodDTO} returns this
 */
proto.entities.MoodDTO.prototype.setCreatedat = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.entities.MoodsDTO.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entities.MoodsDTO.prototype.toObject = function(opt_includeInstance) {
  return proto.entities.MoodsDTO.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entities.MoodsDTO} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.MoodsDTO.toObject = function(includeInstance, msg) {
  var f, obj = {
    arrList: jspb.Message.toObjectList(msg.getArrList(),
    proto.entities.MoodDTO.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entities.MoodsDTO}
 */
proto.entities.MoodsDTO.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entities.MoodsDTO;
  return proto.entities.MoodsDTO.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entities.MoodsDTO} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entities.MoodsDTO}
 */
proto.entities.MoodsDTO.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.entities.MoodDTO;
      reader.readMessage(value,proto.entities.MoodDTO.deserializeBinaryFromReader);
      msg.addArr(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entities.MoodsDTO.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entities.MoodsDTO.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entities.MoodsDTO} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.MoodsDTO.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getArrList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.entities.MoodDTO.serializeBinaryToWriter
    );
  }
};


/**
 * repeated MoodDTO arr = 1;
 * @return {!Array<!proto.entities.MoodDTO>}
 */
proto.entities.MoodsDTO.prototype.getArrList = function() {
  return /** @type{!Array<!proto.entities.MoodDTO>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.entities.MoodDTO, 1));
};


/**
 * @param {!Array<!proto.entities.MoodDTO>} value
 * @return {!proto.entities.MoodsDTO} returns this
*/
proto.entities.MoodsDTO.prototype.setArrList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.entities.MoodDTO=} opt_value
 * @param {number=} opt_index
 * @return {!proto.entities.MoodDTO}
 */
proto.entities.MoodsDTO.prototype.addArr = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.entities.MoodDTO, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.entities.MoodsDTO} returns this
 */
proto.entities.MoodsDTO.prototype.clearArrList = function() {
  return this.setArrList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entities.ReligionDTO.prototype.toObject = function(opt_includeInstance) {
  return proto.entities.ReligionDTO.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entities.ReligionDTO} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.ReligionDTO.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    blueprintid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    name: jspb.Message.getFieldWithDefault(msg, 3, ""),
    metadata: (f = msg.getMetadata()) && proto.entities.Metadata.toObject(includeInstance, f),
    user: jspb.Message.getFieldWithDefault(msg, 5, ""),
    campaign: jspb.Message.getFieldWithDefault(msg, 6, ""),
    world: jspb.Message.getFieldWithDefault(msg, 7, ""),
    description: jspb.Message.getFieldWithDefault(msg, 8, ""),
    rituals: (f = msg.getRituals()) && proto.entities.ReligionRitualsDTO.toObject(includeInstance, f),
    tenets: (f = msg.getTenets()) && proto.entities.ReligionTenetsDTO.toObject(includeInstance, f),
    targetentity: jspb.Message.getFieldWithDefault(msg, 11, ""),
    createdat: jspb.Message.getFieldWithDefault(msg, 12, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entities.ReligionDTO}
 */
proto.entities.ReligionDTO.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entities.ReligionDTO;
  return proto.entities.ReligionDTO.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entities.ReligionDTO} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entities.ReligionDTO}
 */
proto.entities.ReligionDTO.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBlueprintid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = new proto.entities.Metadata;
      reader.readMessage(value,proto.entities.Metadata.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setUser(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setCampaign(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setWorld(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 9:
      var value = new proto.entities.ReligionRitualsDTO;
      reader.readMessage(value,proto.entities.ReligionRitualsDTO.deserializeBinaryFromReader);
      msg.setRituals(value);
      break;
    case 10:
      var value = new proto.entities.ReligionTenetsDTO;
      reader.readMessage(value,proto.entities.ReligionTenetsDTO.deserializeBinaryFromReader);
      msg.setTenets(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setTargetentity(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCreatedat(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entities.ReligionDTO.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entities.ReligionDTO.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entities.ReligionDTO} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.ReligionDTO.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBlueprintid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.entities.Metadata.serializeBinaryToWriter
    );
  }
  f = message.getUser();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getCampaign();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getWorld();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getRituals();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.entities.ReligionRitualsDTO.serializeBinaryToWriter
    );
  }
  f = message.getTenets();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.entities.ReligionTenetsDTO.serializeBinaryToWriter
    );
  }
  f = message.getTargetentity();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getCreatedat();
  if (f !== 0) {
    writer.writeInt32(
      12,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.entities.ReligionDTO.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.ReligionDTO} returns this
 */
proto.entities.ReligionDTO.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string blueprintId = 2;
 * @return {string}
 */
proto.entities.ReligionDTO.prototype.getBlueprintid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.ReligionDTO} returns this
 */
proto.entities.ReligionDTO.prototype.setBlueprintid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.entities.ReligionDTO.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.ReligionDTO} returns this
 */
proto.entities.ReligionDTO.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional Metadata metadata = 4;
 * @return {?proto.entities.Metadata}
 */
proto.entities.ReligionDTO.prototype.getMetadata = function() {
  return /** @type{?proto.entities.Metadata} */ (
    jspb.Message.getWrapperField(this, proto.entities.Metadata, 4));
};


/**
 * @param {?proto.entities.Metadata|undefined} value
 * @return {!proto.entities.ReligionDTO} returns this
*/
proto.entities.ReligionDTO.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.entities.ReligionDTO} returns this
 */
proto.entities.ReligionDTO.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.entities.ReligionDTO.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string user = 5;
 * @return {string}
 */
proto.entities.ReligionDTO.prototype.getUser = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.ReligionDTO} returns this
 */
proto.entities.ReligionDTO.prototype.setUser = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string campaign = 6;
 * @return {string}
 */
proto.entities.ReligionDTO.prototype.getCampaign = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.ReligionDTO} returns this
 */
proto.entities.ReligionDTO.prototype.setCampaign = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string world = 7;
 * @return {string}
 */
proto.entities.ReligionDTO.prototype.getWorld = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.ReligionDTO} returns this
 */
proto.entities.ReligionDTO.prototype.setWorld = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string description = 8;
 * @return {string}
 */
proto.entities.ReligionDTO.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.ReligionDTO} returns this
 */
proto.entities.ReligionDTO.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional ReligionRitualsDTO rituals = 9;
 * @return {?proto.entities.ReligionRitualsDTO}
 */
proto.entities.ReligionDTO.prototype.getRituals = function() {
  return /** @type{?proto.entities.ReligionRitualsDTO} */ (
    jspb.Message.getWrapperField(this, proto.entities.ReligionRitualsDTO, 9));
};


/**
 * @param {?proto.entities.ReligionRitualsDTO|undefined} value
 * @return {!proto.entities.ReligionDTO} returns this
*/
proto.entities.ReligionDTO.prototype.setRituals = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.entities.ReligionDTO} returns this
 */
proto.entities.ReligionDTO.prototype.clearRituals = function() {
  return this.setRituals(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.entities.ReligionDTO.prototype.hasRituals = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional ReligionTenetsDTO tenets = 10;
 * @return {?proto.entities.ReligionTenetsDTO}
 */
proto.entities.ReligionDTO.prototype.getTenets = function() {
  return /** @type{?proto.entities.ReligionTenetsDTO} */ (
    jspb.Message.getWrapperField(this, proto.entities.ReligionTenetsDTO, 10));
};


/**
 * @param {?proto.entities.ReligionTenetsDTO|undefined} value
 * @return {!proto.entities.ReligionDTO} returns this
*/
proto.entities.ReligionDTO.prototype.setTenets = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.entities.ReligionDTO} returns this
 */
proto.entities.ReligionDTO.prototype.clearTenets = function() {
  return this.setTenets(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.entities.ReligionDTO.prototype.hasTenets = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional string targetEntity = 11;
 * @return {string}
 */
proto.entities.ReligionDTO.prototype.getTargetentity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.ReligionDTO} returns this
 */
proto.entities.ReligionDTO.prototype.setTargetentity = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional int32 createdAt = 12;
 * @return {number}
 */
proto.entities.ReligionDTO.prototype.getCreatedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.entities.ReligionDTO} returns this
 */
proto.entities.ReligionDTO.prototype.setCreatedat = function(value) {
  return jspb.Message.setProto3IntField(this, 12, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.entities.ReligionsDTO.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entities.ReligionsDTO.prototype.toObject = function(opt_includeInstance) {
  return proto.entities.ReligionsDTO.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entities.ReligionsDTO} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.ReligionsDTO.toObject = function(includeInstance, msg) {
  var f, obj = {
    arrList: jspb.Message.toObjectList(msg.getArrList(),
    proto.entities.ReligionDTO.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entities.ReligionsDTO}
 */
proto.entities.ReligionsDTO.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entities.ReligionsDTO;
  return proto.entities.ReligionsDTO.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entities.ReligionsDTO} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entities.ReligionsDTO}
 */
proto.entities.ReligionsDTO.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.entities.ReligionDTO;
      reader.readMessage(value,proto.entities.ReligionDTO.deserializeBinaryFromReader);
      msg.addArr(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entities.ReligionsDTO.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entities.ReligionsDTO.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entities.ReligionsDTO} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.ReligionsDTO.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getArrList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.entities.ReligionDTO.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ReligionDTO arr = 1;
 * @return {!Array<!proto.entities.ReligionDTO>}
 */
proto.entities.ReligionsDTO.prototype.getArrList = function() {
  return /** @type{!Array<!proto.entities.ReligionDTO>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.entities.ReligionDTO, 1));
};


/**
 * @param {!Array<!proto.entities.ReligionDTO>} value
 * @return {!proto.entities.ReligionsDTO} returns this
*/
proto.entities.ReligionsDTO.prototype.setArrList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.entities.ReligionDTO=} opt_value
 * @param {number=} opt_index
 * @return {!proto.entities.ReligionDTO}
 */
proto.entities.ReligionsDTO.prototype.addArr = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.entities.ReligionDTO, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.entities.ReligionsDTO} returns this
 */
proto.entities.ReligionsDTO.prototype.clearArrList = function() {
  return this.setArrList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entities.ReligionRitualDTO.prototype.toObject = function(opt_includeInstance) {
  return proto.entities.ReligionRitualDTO.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entities.ReligionRitualDTO} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.ReligionRitualDTO.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    description: jspb.Message.getFieldWithDefault(msg, 2, ""),
    clazz: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entities.ReligionRitualDTO}
 */
proto.entities.ReligionRitualDTO.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entities.ReligionRitualDTO;
  return proto.entities.ReligionRitualDTO.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entities.ReligionRitualDTO} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entities.ReligionRitualDTO}
 */
proto.entities.ReligionRitualDTO.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setClazz(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entities.ReligionRitualDTO.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entities.ReligionRitualDTO.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entities.ReligionRitualDTO} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.ReligionRitualDTO.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getClazz();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.entities.ReligionRitualDTO.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.ReligionRitualDTO} returns this
 */
proto.entities.ReligionRitualDTO.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.entities.ReligionRitualDTO.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.ReligionRitualDTO} returns this
 */
proto.entities.ReligionRitualDTO.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string clazz = 3;
 * @return {string}
 */
proto.entities.ReligionRitualDTO.prototype.getClazz = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.ReligionRitualDTO} returns this
 */
proto.entities.ReligionRitualDTO.prototype.setClazz = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.entities.ReligionRitualsDTO.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entities.ReligionRitualsDTO.prototype.toObject = function(opt_includeInstance) {
  return proto.entities.ReligionRitualsDTO.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entities.ReligionRitualsDTO} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.ReligionRitualsDTO.toObject = function(includeInstance, msg) {
  var f, obj = {
    arrList: jspb.Message.toObjectList(msg.getArrList(),
    proto.entities.ReligionRitualDTO.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entities.ReligionRitualsDTO}
 */
proto.entities.ReligionRitualsDTO.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entities.ReligionRitualsDTO;
  return proto.entities.ReligionRitualsDTO.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entities.ReligionRitualsDTO} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entities.ReligionRitualsDTO}
 */
proto.entities.ReligionRitualsDTO.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.entities.ReligionRitualDTO;
      reader.readMessage(value,proto.entities.ReligionRitualDTO.deserializeBinaryFromReader);
      msg.addArr(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entities.ReligionRitualsDTO.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entities.ReligionRitualsDTO.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entities.ReligionRitualsDTO} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.ReligionRitualsDTO.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getArrList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.entities.ReligionRitualDTO.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ReligionRitualDTO arr = 1;
 * @return {!Array<!proto.entities.ReligionRitualDTO>}
 */
proto.entities.ReligionRitualsDTO.prototype.getArrList = function() {
  return /** @type{!Array<!proto.entities.ReligionRitualDTO>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.entities.ReligionRitualDTO, 1));
};


/**
 * @param {!Array<!proto.entities.ReligionRitualDTO>} value
 * @return {!proto.entities.ReligionRitualsDTO} returns this
*/
proto.entities.ReligionRitualsDTO.prototype.setArrList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.entities.ReligionRitualDTO=} opt_value
 * @param {number=} opt_index
 * @return {!proto.entities.ReligionRitualDTO}
 */
proto.entities.ReligionRitualsDTO.prototype.addArr = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.entities.ReligionRitualDTO, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.entities.ReligionRitualsDTO} returns this
 */
proto.entities.ReligionRitualsDTO.prototype.clearArrList = function() {
  return this.setArrList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entities.ReligionTenetDTO.prototype.toObject = function(opt_includeInstance) {
  return proto.entities.ReligionTenetDTO.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entities.ReligionTenetDTO} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.ReligionTenetDTO.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    description: jspb.Message.getFieldWithDefault(msg, 2, ""),
    clazz: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entities.ReligionTenetDTO}
 */
proto.entities.ReligionTenetDTO.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entities.ReligionTenetDTO;
  return proto.entities.ReligionTenetDTO.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entities.ReligionTenetDTO} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entities.ReligionTenetDTO}
 */
proto.entities.ReligionTenetDTO.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setClazz(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entities.ReligionTenetDTO.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entities.ReligionTenetDTO.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entities.ReligionTenetDTO} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.ReligionTenetDTO.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getClazz();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.entities.ReligionTenetDTO.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.ReligionTenetDTO} returns this
 */
proto.entities.ReligionTenetDTO.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.entities.ReligionTenetDTO.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.ReligionTenetDTO} returns this
 */
proto.entities.ReligionTenetDTO.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string clazz = 3;
 * @return {string}
 */
proto.entities.ReligionTenetDTO.prototype.getClazz = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.ReligionTenetDTO} returns this
 */
proto.entities.ReligionTenetDTO.prototype.setClazz = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.entities.ReligionTenetsDTO.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entities.ReligionTenetsDTO.prototype.toObject = function(opt_includeInstance) {
  return proto.entities.ReligionTenetsDTO.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entities.ReligionTenetsDTO} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.ReligionTenetsDTO.toObject = function(includeInstance, msg) {
  var f, obj = {
    arrList: jspb.Message.toObjectList(msg.getArrList(),
    proto.entities.ReligionTenetDTO.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entities.ReligionTenetsDTO}
 */
proto.entities.ReligionTenetsDTO.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entities.ReligionTenetsDTO;
  return proto.entities.ReligionTenetsDTO.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entities.ReligionTenetsDTO} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entities.ReligionTenetsDTO}
 */
proto.entities.ReligionTenetsDTO.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.entities.ReligionTenetDTO;
      reader.readMessage(value,proto.entities.ReligionTenetDTO.deserializeBinaryFromReader);
      msg.addArr(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entities.ReligionTenetsDTO.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entities.ReligionTenetsDTO.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entities.ReligionTenetsDTO} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.ReligionTenetsDTO.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getArrList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.entities.ReligionTenetDTO.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ReligionTenetDTO arr = 1;
 * @return {!Array<!proto.entities.ReligionTenetDTO>}
 */
proto.entities.ReligionTenetsDTO.prototype.getArrList = function() {
  return /** @type{!Array<!proto.entities.ReligionTenetDTO>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.entities.ReligionTenetDTO, 1));
};


/**
 * @param {!Array<!proto.entities.ReligionTenetDTO>} value
 * @return {!proto.entities.ReligionTenetsDTO} returns this
*/
proto.entities.ReligionTenetsDTO.prototype.setArrList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.entities.ReligionTenetDTO=} opt_value
 * @param {number=} opt_index
 * @return {!proto.entities.ReligionTenetDTO}
 */
proto.entities.ReligionTenetsDTO.prototype.addArr = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.entities.ReligionTenetDTO, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.entities.ReligionTenetsDTO} returns this
 */
proto.entities.ReligionTenetsDTO.prototype.clearArrList = function() {
  return this.setArrList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entities.GridPositionDTO.prototype.toObject = function(opt_includeInstance) {
  return proto.entities.GridPositionDTO.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entities.GridPositionDTO} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.GridPositionDTO.toObject = function(includeInstance, msg) {
  var f, obj = {
    x: jspb.Message.getFieldWithDefault(msg, 1, 0),
    y: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entities.GridPositionDTO}
 */
proto.entities.GridPositionDTO.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entities.GridPositionDTO;
  return proto.entities.GridPositionDTO.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entities.GridPositionDTO} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entities.GridPositionDTO}
 */
proto.entities.GridPositionDTO.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setX(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setY(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entities.GridPositionDTO.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entities.GridPositionDTO.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entities.GridPositionDTO} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.GridPositionDTO.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getX();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getY();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional int32 x = 1;
 * @return {number}
 */
proto.entities.GridPositionDTO.prototype.getX = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.entities.GridPositionDTO} returns this
 */
proto.entities.GridPositionDTO.prototype.setX = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 y = 2;
 * @return {number}
 */
proto.entities.GridPositionDTO.prototype.getY = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.entities.GridPositionDTO} returns this
 */
proto.entities.GridPositionDTO.prototype.setY = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.entities.GenerationInstructionDTO.oneofGroups_ = [[1,2,3,4,5]];

/**
 * @enum {number}
 */
proto.entities.GenerationInstructionDTO.InstructionCase = {
  INSTRUCTION_NOT_SET: 0,
  BLUEPRINTID: 1,
  IDANDQUANT: 2,
  SIMPLEPROB: 3,
  GAUSSIANPROB: 4,
  COMBINATOR: 5
};

/**
 * @return {proto.entities.GenerationInstructionDTO.InstructionCase}
 */
proto.entities.GenerationInstructionDTO.prototype.getInstructionCase = function() {
  return /** @type {proto.entities.GenerationInstructionDTO.InstructionCase} */(jspb.Message.computeOneofCase(this, proto.entities.GenerationInstructionDTO.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entities.GenerationInstructionDTO.prototype.toObject = function(opt_includeInstance) {
  return proto.entities.GenerationInstructionDTO.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entities.GenerationInstructionDTO} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.GenerationInstructionDTO.toObject = function(includeInstance, msg) {
  var f, obj = {
    blueprintid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    idandquant: (f = msg.getIdandquant()) && proto.entities.IdAndQuantDTO.toObject(includeInstance, f),
    simpleprob: (f = msg.getSimpleprob()) && proto.entities.SimpleProbDTO.toObject(includeInstance, f),
    gaussianprob: (f = msg.getGaussianprob()) && proto.entities.GaussianProbDTO.toObject(includeInstance, f),
    combinator: (f = msg.getCombinator()) && proto.entities.CombinatorDTO.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entities.GenerationInstructionDTO}
 */
proto.entities.GenerationInstructionDTO.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entities.GenerationInstructionDTO;
  return proto.entities.GenerationInstructionDTO.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entities.GenerationInstructionDTO} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entities.GenerationInstructionDTO}
 */
proto.entities.GenerationInstructionDTO.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBlueprintid(value);
      break;
    case 2:
      var value = new proto.entities.IdAndQuantDTO;
      reader.readMessage(value,proto.entities.IdAndQuantDTO.deserializeBinaryFromReader);
      msg.setIdandquant(value);
      break;
    case 3:
      var value = new proto.entities.SimpleProbDTO;
      reader.readMessage(value,proto.entities.SimpleProbDTO.deserializeBinaryFromReader);
      msg.setSimpleprob(value);
      break;
    case 4:
      var value = new proto.entities.GaussianProbDTO;
      reader.readMessage(value,proto.entities.GaussianProbDTO.deserializeBinaryFromReader);
      msg.setGaussianprob(value);
      break;
    case 5:
      var value = new proto.entities.CombinatorDTO;
      reader.readMessage(value,proto.entities.CombinatorDTO.deserializeBinaryFromReader);
      msg.setCombinator(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entities.GenerationInstructionDTO.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entities.GenerationInstructionDTO.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entities.GenerationInstructionDTO} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.GenerationInstructionDTO.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getIdandquant();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.entities.IdAndQuantDTO.serializeBinaryToWriter
    );
  }
  f = message.getSimpleprob();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.entities.SimpleProbDTO.serializeBinaryToWriter
    );
  }
  f = message.getGaussianprob();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.entities.GaussianProbDTO.serializeBinaryToWriter
    );
  }
  f = message.getCombinator();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.entities.CombinatorDTO.serializeBinaryToWriter
    );
  }
};


/**
 * optional string blueprintId = 1;
 * @return {string}
 */
proto.entities.GenerationInstructionDTO.prototype.getBlueprintid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.GenerationInstructionDTO} returns this
 */
proto.entities.GenerationInstructionDTO.prototype.setBlueprintid = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.entities.GenerationInstructionDTO.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.entities.GenerationInstructionDTO} returns this
 */
proto.entities.GenerationInstructionDTO.prototype.clearBlueprintid = function() {
  return jspb.Message.setOneofField(this, 1, proto.entities.GenerationInstructionDTO.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.entities.GenerationInstructionDTO.prototype.hasBlueprintid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional IdAndQuantDTO idAndQuant = 2;
 * @return {?proto.entities.IdAndQuantDTO}
 */
proto.entities.GenerationInstructionDTO.prototype.getIdandquant = function() {
  return /** @type{?proto.entities.IdAndQuantDTO} */ (
    jspb.Message.getWrapperField(this, proto.entities.IdAndQuantDTO, 2));
};


/**
 * @param {?proto.entities.IdAndQuantDTO|undefined} value
 * @return {!proto.entities.GenerationInstructionDTO} returns this
*/
proto.entities.GenerationInstructionDTO.prototype.setIdandquant = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.entities.GenerationInstructionDTO.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.entities.GenerationInstructionDTO} returns this
 */
proto.entities.GenerationInstructionDTO.prototype.clearIdandquant = function() {
  return this.setIdandquant(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.entities.GenerationInstructionDTO.prototype.hasIdandquant = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional SimpleProbDTO simpleProb = 3;
 * @return {?proto.entities.SimpleProbDTO}
 */
proto.entities.GenerationInstructionDTO.prototype.getSimpleprob = function() {
  return /** @type{?proto.entities.SimpleProbDTO} */ (
    jspb.Message.getWrapperField(this, proto.entities.SimpleProbDTO, 3));
};


/**
 * @param {?proto.entities.SimpleProbDTO|undefined} value
 * @return {!proto.entities.GenerationInstructionDTO} returns this
*/
proto.entities.GenerationInstructionDTO.prototype.setSimpleprob = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.entities.GenerationInstructionDTO.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.entities.GenerationInstructionDTO} returns this
 */
proto.entities.GenerationInstructionDTO.prototype.clearSimpleprob = function() {
  return this.setSimpleprob(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.entities.GenerationInstructionDTO.prototype.hasSimpleprob = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional GaussianProbDTO gaussianProb = 4;
 * @return {?proto.entities.GaussianProbDTO}
 */
proto.entities.GenerationInstructionDTO.prototype.getGaussianprob = function() {
  return /** @type{?proto.entities.GaussianProbDTO} */ (
    jspb.Message.getWrapperField(this, proto.entities.GaussianProbDTO, 4));
};


/**
 * @param {?proto.entities.GaussianProbDTO|undefined} value
 * @return {!proto.entities.GenerationInstructionDTO} returns this
*/
proto.entities.GenerationInstructionDTO.prototype.setGaussianprob = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.entities.GenerationInstructionDTO.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.entities.GenerationInstructionDTO} returns this
 */
proto.entities.GenerationInstructionDTO.prototype.clearGaussianprob = function() {
  return this.setGaussianprob(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.entities.GenerationInstructionDTO.prototype.hasGaussianprob = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional CombinatorDTO combinator = 5;
 * @return {?proto.entities.CombinatorDTO}
 */
proto.entities.GenerationInstructionDTO.prototype.getCombinator = function() {
  return /** @type{?proto.entities.CombinatorDTO} */ (
    jspb.Message.getWrapperField(this, proto.entities.CombinatorDTO, 5));
};


/**
 * @param {?proto.entities.CombinatorDTO|undefined} value
 * @return {!proto.entities.GenerationInstructionDTO} returns this
*/
proto.entities.GenerationInstructionDTO.prototype.setCombinator = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.entities.GenerationInstructionDTO.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.entities.GenerationInstructionDTO} returns this
 */
proto.entities.GenerationInstructionDTO.prototype.clearCombinator = function() {
  return this.setCombinator(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.entities.GenerationInstructionDTO.prototype.hasCombinator = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.entities.GenerationInstructionsDTO.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entities.GenerationInstructionsDTO.prototype.toObject = function(opt_includeInstance) {
  return proto.entities.GenerationInstructionsDTO.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entities.GenerationInstructionsDTO} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.GenerationInstructionsDTO.toObject = function(includeInstance, msg) {
  var f, obj = {
    arrList: jspb.Message.toObjectList(msg.getArrList(),
    proto.entities.GenerationInstructionDTO.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entities.GenerationInstructionsDTO}
 */
proto.entities.GenerationInstructionsDTO.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entities.GenerationInstructionsDTO;
  return proto.entities.GenerationInstructionsDTO.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entities.GenerationInstructionsDTO} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entities.GenerationInstructionsDTO}
 */
proto.entities.GenerationInstructionsDTO.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.entities.GenerationInstructionDTO;
      reader.readMessage(value,proto.entities.GenerationInstructionDTO.deserializeBinaryFromReader);
      msg.addArr(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entities.GenerationInstructionsDTO.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entities.GenerationInstructionsDTO.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entities.GenerationInstructionsDTO} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.GenerationInstructionsDTO.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getArrList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.entities.GenerationInstructionDTO.serializeBinaryToWriter
    );
  }
};


/**
 * repeated GenerationInstructionDTO arr = 1;
 * @return {!Array<!proto.entities.GenerationInstructionDTO>}
 */
proto.entities.GenerationInstructionsDTO.prototype.getArrList = function() {
  return /** @type{!Array<!proto.entities.GenerationInstructionDTO>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.entities.GenerationInstructionDTO, 1));
};


/**
 * @param {!Array<!proto.entities.GenerationInstructionDTO>} value
 * @return {!proto.entities.GenerationInstructionsDTO} returns this
*/
proto.entities.GenerationInstructionsDTO.prototype.setArrList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.entities.GenerationInstructionDTO=} opt_value
 * @param {number=} opt_index
 * @return {!proto.entities.GenerationInstructionDTO}
 */
proto.entities.GenerationInstructionsDTO.prototype.addArr = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.entities.GenerationInstructionDTO, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.entities.GenerationInstructionsDTO} returns this
 */
proto.entities.GenerationInstructionsDTO.prototype.clearArrList = function() {
  return this.setArrList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entities.IdAndQuantDTO.prototype.toObject = function(opt_includeInstance) {
  return proto.entities.IdAndQuantDTO.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entities.IdAndQuantDTO} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.IdAndQuantDTO.toObject = function(includeInstance, msg) {
  var f, obj = {
    blueprintid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    quantity: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entities.IdAndQuantDTO}
 */
proto.entities.IdAndQuantDTO.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entities.IdAndQuantDTO;
  return proto.entities.IdAndQuantDTO.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entities.IdAndQuantDTO} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entities.IdAndQuantDTO}
 */
proto.entities.IdAndQuantDTO.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBlueprintid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setQuantity(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entities.IdAndQuantDTO.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entities.IdAndQuantDTO.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entities.IdAndQuantDTO} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.IdAndQuantDTO.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBlueprintid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getQuantity();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional string blueprintId = 1;
 * @return {string}
 */
proto.entities.IdAndQuantDTO.prototype.getBlueprintid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.IdAndQuantDTO} returns this
 */
proto.entities.IdAndQuantDTO.prototype.setBlueprintid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 quantity = 2;
 * @return {number}
 */
proto.entities.IdAndQuantDTO.prototype.getQuantity = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.entities.IdAndQuantDTO} returns this
 */
proto.entities.IdAndQuantDTO.prototype.setQuantity = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.entities.IdsAndQuantsDTO.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entities.IdsAndQuantsDTO.prototype.toObject = function(opt_includeInstance) {
  return proto.entities.IdsAndQuantsDTO.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entities.IdsAndQuantsDTO} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.IdsAndQuantsDTO.toObject = function(includeInstance, msg) {
  var f, obj = {
    arrList: jspb.Message.toObjectList(msg.getArrList(),
    proto.entities.IdAndQuantDTO.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entities.IdsAndQuantsDTO}
 */
proto.entities.IdsAndQuantsDTO.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entities.IdsAndQuantsDTO;
  return proto.entities.IdsAndQuantsDTO.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entities.IdsAndQuantsDTO} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entities.IdsAndQuantsDTO}
 */
proto.entities.IdsAndQuantsDTO.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.entities.IdAndQuantDTO;
      reader.readMessage(value,proto.entities.IdAndQuantDTO.deserializeBinaryFromReader);
      msg.addArr(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entities.IdsAndQuantsDTO.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entities.IdsAndQuantsDTO.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entities.IdsAndQuantsDTO} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.IdsAndQuantsDTO.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getArrList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.entities.IdAndQuantDTO.serializeBinaryToWriter
    );
  }
};


/**
 * repeated IdAndQuantDTO arr = 1;
 * @return {!Array<!proto.entities.IdAndQuantDTO>}
 */
proto.entities.IdsAndQuantsDTO.prototype.getArrList = function() {
  return /** @type{!Array<!proto.entities.IdAndQuantDTO>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.entities.IdAndQuantDTO, 1));
};


/**
 * @param {!Array<!proto.entities.IdAndQuantDTO>} value
 * @return {!proto.entities.IdsAndQuantsDTO} returns this
*/
proto.entities.IdsAndQuantsDTO.prototype.setArrList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.entities.IdAndQuantDTO=} opt_value
 * @param {number=} opt_index
 * @return {!proto.entities.IdAndQuantDTO}
 */
proto.entities.IdsAndQuantsDTO.prototype.addArr = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.entities.IdAndQuantDTO, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.entities.IdsAndQuantsDTO} returns this
 */
proto.entities.IdsAndQuantsDTO.prototype.clearArrList = function() {
  return this.setArrList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entities.CharacterGenInstructionDTO.prototype.toObject = function(opt_includeInstance) {
  return proto.entities.CharacterGenInstructionDTO.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entities.CharacterGenInstructionDTO} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.CharacterGenInstructionDTO.toObject = function(includeInstance, msg) {
  var f, obj = {
    blueprintid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    backgroundblueprintid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    targetentity: jspb.Message.getFieldWithDefault(msg, 3, ""),
    firstname: jspb.Message.getFieldWithDefault(msg, 4, ""),
    lastname: jspb.Message.getFieldWithDefault(msg, 5, ""),
    gender: jspb.Message.getFieldWithDefault(msg, 6, 0),
    birthera: jspb.Message.getFieldWithDefault(msg, 7, ""),
    birthyear: jspb.Message.getFieldWithDefault(msg, 8, 0),
    birthmonth: jspb.Message.getFieldWithDefault(msg, 9, ""),
    birthday: jspb.Message.getFieldWithDefault(msg, 10, 0),
    backgroundcustomization: (f = msg.getBackgroundcustomization()) && proto.entities.BackgroundCustomizationDTO.toObject(includeInstance, f),
    birthsign: jspb.Message.getFieldWithDefault(msg, 12, ""),
    id: jspb.Message.getFieldWithDefault(msg, 13, ""),
    metadata: (f = msg.getMetadata()) && proto.entities.Metadata.toObject(includeInstance, f),
    user: jspb.Message.getFieldWithDefault(msg, 15, ""),
    campaign: jspb.Message.getFieldWithDefault(msg, 16, ""),
    world: jspb.Message.getFieldWithDefault(msg, 17, ""),
    createdat: jspb.Message.getFieldWithDefault(msg, 18, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entities.CharacterGenInstructionDTO}
 */
proto.entities.CharacterGenInstructionDTO.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entities.CharacterGenInstructionDTO;
  return proto.entities.CharacterGenInstructionDTO.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entities.CharacterGenInstructionDTO} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entities.CharacterGenInstructionDTO}
 */
proto.entities.CharacterGenInstructionDTO.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBlueprintid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBackgroundblueprintid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTargetentity(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setFirstname(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setLastname(value);
      break;
    case 6:
      var value = /** @type {!proto.entities.GenderEnumDTO} */ (reader.readEnum());
      msg.setGender(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setBirthera(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setBirthyear(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setBirthmonth(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setBirthday(value);
      break;
    case 11:
      var value = new proto.entities.BackgroundCustomizationDTO;
      reader.readMessage(value,proto.entities.BackgroundCustomizationDTO.deserializeBinaryFromReader);
      msg.setBackgroundcustomization(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setBirthsign(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 14:
      var value = new proto.entities.Metadata;
      reader.readMessage(value,proto.entities.Metadata.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.setUser(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.setCampaign(value);
      break;
    case 17:
      var value = /** @type {string} */ (reader.readString());
      msg.setWorld(value);
      break;
    case 18:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCreatedat(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entities.CharacterGenInstructionDTO.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entities.CharacterGenInstructionDTO.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entities.CharacterGenInstructionDTO} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.CharacterGenInstructionDTO.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBlueprintid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBackgroundblueprintid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTargetentity();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getFirstname();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getLastname();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getGender();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = message.getBirthera();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getBirthyear();
  if (f !== 0) {
    writer.writeInt32(
      8,
      f
    );
  }
  f = message.getBirthmonth();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getBirthday();
  if (f !== 0) {
    writer.writeInt32(
      10,
      f
    );
  }
  f = message.getBackgroundcustomization();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.entities.BackgroundCustomizationDTO.serializeBinaryToWriter
    );
  }
  f = message.getBirthsign();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      proto.entities.Metadata.serializeBinaryToWriter
    );
  }
  f = message.getUser();
  if (f.length > 0) {
    writer.writeString(
      15,
      f
    );
  }
  f = message.getCampaign();
  if (f.length > 0) {
    writer.writeString(
      16,
      f
    );
  }
  f = message.getWorld();
  if (f.length > 0) {
    writer.writeString(
      17,
      f
    );
  }
  f = message.getCreatedat();
  if (f !== 0) {
    writer.writeInt32(
      18,
      f
    );
  }
};


/**
 * optional string blueprintId = 1;
 * @return {string}
 */
proto.entities.CharacterGenInstructionDTO.prototype.getBlueprintid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.CharacterGenInstructionDTO} returns this
 */
proto.entities.CharacterGenInstructionDTO.prototype.setBlueprintid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string backgroundBlueprintId = 2;
 * @return {string}
 */
proto.entities.CharacterGenInstructionDTO.prototype.getBackgroundblueprintid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.CharacterGenInstructionDTO} returns this
 */
proto.entities.CharacterGenInstructionDTO.prototype.setBackgroundblueprintid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string targetEntity = 3;
 * @return {string}
 */
proto.entities.CharacterGenInstructionDTO.prototype.getTargetentity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.CharacterGenInstructionDTO} returns this
 */
proto.entities.CharacterGenInstructionDTO.prototype.setTargetentity = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string firstName = 4;
 * @return {string}
 */
proto.entities.CharacterGenInstructionDTO.prototype.getFirstname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.CharacterGenInstructionDTO} returns this
 */
proto.entities.CharacterGenInstructionDTO.prototype.setFirstname = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string lastName = 5;
 * @return {string}
 */
proto.entities.CharacterGenInstructionDTO.prototype.getLastname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.CharacterGenInstructionDTO} returns this
 */
proto.entities.CharacterGenInstructionDTO.prototype.setLastname = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional GenderEnumDTO gender = 6;
 * @return {!proto.entities.GenderEnumDTO}
 */
proto.entities.CharacterGenInstructionDTO.prototype.getGender = function() {
  return /** @type {!proto.entities.GenderEnumDTO} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.entities.GenderEnumDTO} value
 * @return {!proto.entities.CharacterGenInstructionDTO} returns this
 */
proto.entities.CharacterGenInstructionDTO.prototype.setGender = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};


/**
 * optional string birthEra = 7;
 * @return {string}
 */
proto.entities.CharacterGenInstructionDTO.prototype.getBirthera = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.CharacterGenInstructionDTO} returns this
 */
proto.entities.CharacterGenInstructionDTO.prototype.setBirthera = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional int32 birthYear = 8;
 * @return {number}
 */
proto.entities.CharacterGenInstructionDTO.prototype.getBirthyear = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.entities.CharacterGenInstructionDTO} returns this
 */
proto.entities.CharacterGenInstructionDTO.prototype.setBirthyear = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional string birthMonth = 9;
 * @return {string}
 */
proto.entities.CharacterGenInstructionDTO.prototype.getBirthmonth = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.CharacterGenInstructionDTO} returns this
 */
proto.entities.CharacterGenInstructionDTO.prototype.setBirthmonth = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional int32 birthDay = 10;
 * @return {number}
 */
proto.entities.CharacterGenInstructionDTO.prototype.getBirthday = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.entities.CharacterGenInstructionDTO} returns this
 */
proto.entities.CharacterGenInstructionDTO.prototype.setBirthday = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional BackgroundCustomizationDTO backgroundCustomization = 11;
 * @return {?proto.entities.BackgroundCustomizationDTO}
 */
proto.entities.CharacterGenInstructionDTO.prototype.getBackgroundcustomization = function() {
  return /** @type{?proto.entities.BackgroundCustomizationDTO} */ (
    jspb.Message.getWrapperField(this, proto.entities.BackgroundCustomizationDTO, 11));
};


/**
 * @param {?proto.entities.BackgroundCustomizationDTO|undefined} value
 * @return {!proto.entities.CharacterGenInstructionDTO} returns this
*/
proto.entities.CharacterGenInstructionDTO.prototype.setBackgroundcustomization = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.entities.CharacterGenInstructionDTO} returns this
 */
proto.entities.CharacterGenInstructionDTO.prototype.clearBackgroundcustomization = function() {
  return this.setBackgroundcustomization(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.entities.CharacterGenInstructionDTO.prototype.hasBackgroundcustomization = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional string birthSign = 12;
 * @return {string}
 */
proto.entities.CharacterGenInstructionDTO.prototype.getBirthsign = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.CharacterGenInstructionDTO} returns this
 */
proto.entities.CharacterGenInstructionDTO.prototype.setBirthsign = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional string id = 13;
 * @return {string}
 */
proto.entities.CharacterGenInstructionDTO.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.CharacterGenInstructionDTO} returns this
 */
proto.entities.CharacterGenInstructionDTO.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional Metadata metadata = 14;
 * @return {?proto.entities.Metadata}
 */
proto.entities.CharacterGenInstructionDTO.prototype.getMetadata = function() {
  return /** @type{?proto.entities.Metadata} */ (
    jspb.Message.getWrapperField(this, proto.entities.Metadata, 14));
};


/**
 * @param {?proto.entities.Metadata|undefined} value
 * @return {!proto.entities.CharacterGenInstructionDTO} returns this
*/
proto.entities.CharacterGenInstructionDTO.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 14, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.entities.CharacterGenInstructionDTO} returns this
 */
proto.entities.CharacterGenInstructionDTO.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.entities.CharacterGenInstructionDTO.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional string user = 15;
 * @return {string}
 */
proto.entities.CharacterGenInstructionDTO.prototype.getUser = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.CharacterGenInstructionDTO} returns this
 */
proto.entities.CharacterGenInstructionDTO.prototype.setUser = function(value) {
  return jspb.Message.setProto3StringField(this, 15, value);
};


/**
 * optional string campaign = 16;
 * @return {string}
 */
proto.entities.CharacterGenInstructionDTO.prototype.getCampaign = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.CharacterGenInstructionDTO} returns this
 */
proto.entities.CharacterGenInstructionDTO.prototype.setCampaign = function(value) {
  return jspb.Message.setProto3StringField(this, 16, value);
};


/**
 * optional string world = 17;
 * @return {string}
 */
proto.entities.CharacterGenInstructionDTO.prototype.getWorld = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 17, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.CharacterGenInstructionDTO} returns this
 */
proto.entities.CharacterGenInstructionDTO.prototype.setWorld = function(value) {
  return jspb.Message.setProto3StringField(this, 17, value);
};


/**
 * optional int32 createdAt = 18;
 * @return {number}
 */
proto.entities.CharacterGenInstructionDTO.prototype.getCreatedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 18, 0));
};


/**
 * @param {number} value
 * @return {!proto.entities.CharacterGenInstructionDTO} returns this
 */
proto.entities.CharacterGenInstructionDTO.prototype.setCreatedat = function(value) {
  return jspb.Message.setProto3IntField(this, 18, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.entities.CharacterGenInstructions.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entities.CharacterGenInstructions.prototype.toObject = function(opt_includeInstance) {
  return proto.entities.CharacterGenInstructions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entities.CharacterGenInstructions} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.CharacterGenInstructions.toObject = function(includeInstance, msg) {
  var f, obj = {
    arrList: jspb.Message.toObjectList(msg.getArrList(),
    proto.entities.CharacterGenInstructionDTO.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entities.CharacterGenInstructions}
 */
proto.entities.CharacterGenInstructions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entities.CharacterGenInstructions;
  return proto.entities.CharacterGenInstructions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entities.CharacterGenInstructions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entities.CharacterGenInstructions}
 */
proto.entities.CharacterGenInstructions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.entities.CharacterGenInstructionDTO;
      reader.readMessage(value,proto.entities.CharacterGenInstructionDTO.deserializeBinaryFromReader);
      msg.addArr(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entities.CharacterGenInstructions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entities.CharacterGenInstructions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entities.CharacterGenInstructions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.CharacterGenInstructions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getArrList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.entities.CharacterGenInstructionDTO.serializeBinaryToWriter
    );
  }
};


/**
 * repeated CharacterGenInstructionDTO arr = 1;
 * @return {!Array<!proto.entities.CharacterGenInstructionDTO>}
 */
proto.entities.CharacterGenInstructions.prototype.getArrList = function() {
  return /** @type{!Array<!proto.entities.CharacterGenInstructionDTO>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.entities.CharacterGenInstructionDTO, 1));
};


/**
 * @param {!Array<!proto.entities.CharacterGenInstructionDTO>} value
 * @return {!proto.entities.CharacterGenInstructions} returns this
*/
proto.entities.CharacterGenInstructions.prototype.setArrList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.entities.CharacterGenInstructionDTO=} opt_value
 * @param {number=} opt_index
 * @return {!proto.entities.CharacterGenInstructionDTO}
 */
proto.entities.CharacterGenInstructions.prototype.addArr = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.entities.CharacterGenInstructionDTO, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.entities.CharacterGenInstructions} returns this
 */
proto.entities.CharacterGenInstructions.prototype.clearArrList = function() {
  return this.setArrList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entities.CharacterGroupGenInstructionDTO.prototype.toObject = function(opt_includeInstance) {
  return proto.entities.CharacterGroupGenInstructionDTO.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entities.CharacterGroupGenInstructionDTO} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.CharacterGroupGenInstructionDTO.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    blueprintid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    name: jspb.Message.getFieldWithDefault(msg, 3, ""),
    metadata: (f = msg.getMetadata()) && proto.entities.Metadata.toObject(includeInstance, f),
    user: jspb.Message.getFieldWithDefault(msg, 5, ""),
    campaign: jspb.Message.getFieldWithDefault(msg, 6, ""),
    world: jspb.Message.getFieldWithDefault(msg, 7, ""),
    set: (f = msg.getSet()) && proto.entities.CombinatorDTO.toObject(includeInstance, f),
    targetentity: jspb.Message.getFieldWithDefault(msg, 9, ""),
    createdat: jspb.Message.getFieldWithDefault(msg, 10, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entities.CharacterGroupGenInstructionDTO}
 */
proto.entities.CharacterGroupGenInstructionDTO.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entities.CharacterGroupGenInstructionDTO;
  return proto.entities.CharacterGroupGenInstructionDTO.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entities.CharacterGroupGenInstructionDTO} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entities.CharacterGroupGenInstructionDTO}
 */
proto.entities.CharacterGroupGenInstructionDTO.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBlueprintid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = new proto.entities.Metadata;
      reader.readMessage(value,proto.entities.Metadata.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setUser(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setCampaign(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setWorld(value);
      break;
    case 8:
      var value = new proto.entities.CombinatorDTO;
      reader.readMessage(value,proto.entities.CombinatorDTO.deserializeBinaryFromReader);
      msg.setSet(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setTargetentity(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCreatedat(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entities.CharacterGroupGenInstructionDTO.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entities.CharacterGroupGenInstructionDTO.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entities.CharacterGroupGenInstructionDTO} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.CharacterGroupGenInstructionDTO.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBlueprintid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.entities.Metadata.serializeBinaryToWriter
    );
  }
  f = message.getUser();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getCampaign();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getWorld();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getSet();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.entities.CombinatorDTO.serializeBinaryToWriter
    );
  }
  f = message.getTargetentity();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getCreatedat();
  if (f !== 0) {
    writer.writeInt32(
      10,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.entities.CharacterGroupGenInstructionDTO.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.CharacterGroupGenInstructionDTO} returns this
 */
proto.entities.CharacterGroupGenInstructionDTO.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string blueprintId = 2;
 * @return {string}
 */
proto.entities.CharacterGroupGenInstructionDTO.prototype.getBlueprintid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.CharacterGroupGenInstructionDTO} returns this
 */
proto.entities.CharacterGroupGenInstructionDTO.prototype.setBlueprintid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.entities.CharacterGroupGenInstructionDTO.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.CharacterGroupGenInstructionDTO} returns this
 */
proto.entities.CharacterGroupGenInstructionDTO.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional Metadata metadata = 4;
 * @return {?proto.entities.Metadata}
 */
proto.entities.CharacterGroupGenInstructionDTO.prototype.getMetadata = function() {
  return /** @type{?proto.entities.Metadata} */ (
    jspb.Message.getWrapperField(this, proto.entities.Metadata, 4));
};


/**
 * @param {?proto.entities.Metadata|undefined} value
 * @return {!proto.entities.CharacterGroupGenInstructionDTO} returns this
*/
proto.entities.CharacterGroupGenInstructionDTO.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.entities.CharacterGroupGenInstructionDTO} returns this
 */
proto.entities.CharacterGroupGenInstructionDTO.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.entities.CharacterGroupGenInstructionDTO.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string user = 5;
 * @return {string}
 */
proto.entities.CharacterGroupGenInstructionDTO.prototype.getUser = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.CharacterGroupGenInstructionDTO} returns this
 */
proto.entities.CharacterGroupGenInstructionDTO.prototype.setUser = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string campaign = 6;
 * @return {string}
 */
proto.entities.CharacterGroupGenInstructionDTO.prototype.getCampaign = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.CharacterGroupGenInstructionDTO} returns this
 */
proto.entities.CharacterGroupGenInstructionDTO.prototype.setCampaign = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string world = 7;
 * @return {string}
 */
proto.entities.CharacterGroupGenInstructionDTO.prototype.getWorld = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.CharacterGroupGenInstructionDTO} returns this
 */
proto.entities.CharacterGroupGenInstructionDTO.prototype.setWorld = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional CombinatorDTO set = 8;
 * @return {?proto.entities.CombinatorDTO}
 */
proto.entities.CharacterGroupGenInstructionDTO.prototype.getSet = function() {
  return /** @type{?proto.entities.CombinatorDTO} */ (
    jspb.Message.getWrapperField(this, proto.entities.CombinatorDTO, 8));
};


/**
 * @param {?proto.entities.CombinatorDTO|undefined} value
 * @return {!proto.entities.CharacterGroupGenInstructionDTO} returns this
*/
proto.entities.CharacterGroupGenInstructionDTO.prototype.setSet = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.entities.CharacterGroupGenInstructionDTO} returns this
 */
proto.entities.CharacterGroupGenInstructionDTO.prototype.clearSet = function() {
  return this.setSet(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.entities.CharacterGroupGenInstructionDTO.prototype.hasSet = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional string targetEntity = 9;
 * @return {string}
 */
proto.entities.CharacterGroupGenInstructionDTO.prototype.getTargetentity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.CharacterGroupGenInstructionDTO} returns this
 */
proto.entities.CharacterGroupGenInstructionDTO.prototype.setTargetentity = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional int32 createdAt = 10;
 * @return {number}
 */
proto.entities.CharacterGroupGenInstructionDTO.prototype.getCreatedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.entities.CharacterGroupGenInstructionDTO} returns this
 */
proto.entities.CharacterGroupGenInstructionDTO.prototype.setCreatedat = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.entities.CharacterGroupGenInstructionsDTO.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entities.CharacterGroupGenInstructionsDTO.prototype.toObject = function(opt_includeInstance) {
  return proto.entities.CharacterGroupGenInstructionsDTO.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entities.CharacterGroupGenInstructionsDTO} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.CharacterGroupGenInstructionsDTO.toObject = function(includeInstance, msg) {
  var f, obj = {
    arrList: jspb.Message.toObjectList(msg.getArrList(),
    proto.entities.CharacterGroupGenInstructionDTO.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entities.CharacterGroupGenInstructionsDTO}
 */
proto.entities.CharacterGroupGenInstructionsDTO.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entities.CharacterGroupGenInstructionsDTO;
  return proto.entities.CharacterGroupGenInstructionsDTO.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entities.CharacterGroupGenInstructionsDTO} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entities.CharacterGroupGenInstructionsDTO}
 */
proto.entities.CharacterGroupGenInstructionsDTO.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.entities.CharacterGroupGenInstructionDTO;
      reader.readMessage(value,proto.entities.CharacterGroupGenInstructionDTO.deserializeBinaryFromReader);
      msg.addArr(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entities.CharacterGroupGenInstructionsDTO.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entities.CharacterGroupGenInstructionsDTO.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entities.CharacterGroupGenInstructionsDTO} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.CharacterGroupGenInstructionsDTO.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getArrList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.entities.CharacterGroupGenInstructionDTO.serializeBinaryToWriter
    );
  }
};


/**
 * repeated CharacterGroupGenInstructionDTO arr = 1;
 * @return {!Array<!proto.entities.CharacterGroupGenInstructionDTO>}
 */
proto.entities.CharacterGroupGenInstructionsDTO.prototype.getArrList = function() {
  return /** @type{!Array<!proto.entities.CharacterGroupGenInstructionDTO>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.entities.CharacterGroupGenInstructionDTO, 1));
};


/**
 * @param {!Array<!proto.entities.CharacterGroupGenInstructionDTO>} value
 * @return {!proto.entities.CharacterGroupGenInstructionsDTO} returns this
*/
proto.entities.CharacterGroupGenInstructionsDTO.prototype.setArrList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.entities.CharacterGroupGenInstructionDTO=} opt_value
 * @param {number=} opt_index
 * @return {!proto.entities.CharacterGroupGenInstructionDTO}
 */
proto.entities.CharacterGroupGenInstructionsDTO.prototype.addArr = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.entities.CharacterGroupGenInstructionDTO, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.entities.CharacterGroupGenInstructionsDTO} returns this
 */
proto.entities.CharacterGroupGenInstructionsDTO.prototype.clearArrList = function() {
  return this.setArrList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entities.BackgroundCustomizationDTO.prototype.toObject = function(opt_includeInstance) {
  return proto.entities.BackgroundCustomizationDTO.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entities.BackgroundCustomizationDTO} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.BackgroundCustomizationDTO.toObject = function(includeInstance, msg) {
  var f, obj = {
    race: (f = msg.getRace()) && proto.entities.GenerationInstructionsDTO.toObject(includeInstance, f),
    faction: (f = msg.getFaction()) && proto.entities.GenerationInstructionsDTO.toObject(includeInstance, f),
    disease: (f = msg.getDisease()) && proto.entities.GenerationInstructionsDTO.toObject(includeInstance, f),
    addiction: (f = msg.getAddiction()) && proto.entities.GenerationInstructionsDTO.toObject(includeInstance, f),
    profession: (f = msg.getProfession()) && proto.entities.GenerationInstructionsDTO.toObject(includeInstance, f),
    religion: (f = msg.getReligion()) && proto.entities.GenerationInstructionsDTO.toObject(includeInstance, f),
    itemsets: (f = msg.getItemsets()) && proto.entities.GenerationInstructionsDTO.toObject(includeInstance, f),
    items: (f = msg.getItems()) && proto.entities.GenerationInstructionsDTO.toObject(includeInstance, f),
    pastexpchild: (f = msg.getPastexpchild()) && proto.entities.GenerationInstructionsDTO.toObject(includeInstance, f),
    pastexpadult: (f = msg.getPastexpadult()) && proto.entities.GenerationInstructionsDTO.toObject(includeInstance, f),
    skillsets: (f = msg.getSkillsets()) && proto.entities.GenerationInstructionsDTO.toObject(includeInstance, f),
    skilladjustments: (f = msg.getSkilladjustments()) && proto.entities.SkillAdjustmentDTO.toObject(includeInstance, f),
    personality: (f = msg.getPersonality()) && proto.entities.GenerationInstructionsDTO.toObject(includeInstance, f),
    gender: (f = msg.getGender()) && proto.entities.GenerationInstructionDTO.toObject(includeInstance, f),
    clazz: jspb.Message.getFieldWithDefault(msg, 15, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entities.BackgroundCustomizationDTO}
 */
proto.entities.BackgroundCustomizationDTO.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entities.BackgroundCustomizationDTO;
  return proto.entities.BackgroundCustomizationDTO.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entities.BackgroundCustomizationDTO} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entities.BackgroundCustomizationDTO}
 */
proto.entities.BackgroundCustomizationDTO.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.entities.GenerationInstructionsDTO;
      reader.readMessage(value,proto.entities.GenerationInstructionsDTO.deserializeBinaryFromReader);
      msg.setRace(value);
      break;
    case 2:
      var value = new proto.entities.GenerationInstructionsDTO;
      reader.readMessage(value,proto.entities.GenerationInstructionsDTO.deserializeBinaryFromReader);
      msg.setFaction(value);
      break;
    case 3:
      var value = new proto.entities.GenerationInstructionsDTO;
      reader.readMessage(value,proto.entities.GenerationInstructionsDTO.deserializeBinaryFromReader);
      msg.setDisease(value);
      break;
    case 4:
      var value = new proto.entities.GenerationInstructionsDTO;
      reader.readMessage(value,proto.entities.GenerationInstructionsDTO.deserializeBinaryFromReader);
      msg.setAddiction(value);
      break;
    case 5:
      var value = new proto.entities.GenerationInstructionsDTO;
      reader.readMessage(value,proto.entities.GenerationInstructionsDTO.deserializeBinaryFromReader);
      msg.setProfession(value);
      break;
    case 6:
      var value = new proto.entities.GenerationInstructionsDTO;
      reader.readMessage(value,proto.entities.GenerationInstructionsDTO.deserializeBinaryFromReader);
      msg.setReligion(value);
      break;
    case 7:
      var value = new proto.entities.GenerationInstructionsDTO;
      reader.readMessage(value,proto.entities.GenerationInstructionsDTO.deserializeBinaryFromReader);
      msg.setItemsets(value);
      break;
    case 8:
      var value = new proto.entities.GenerationInstructionsDTO;
      reader.readMessage(value,proto.entities.GenerationInstructionsDTO.deserializeBinaryFromReader);
      msg.setItems(value);
      break;
    case 9:
      var value = new proto.entities.GenerationInstructionsDTO;
      reader.readMessage(value,proto.entities.GenerationInstructionsDTO.deserializeBinaryFromReader);
      msg.setPastexpchild(value);
      break;
    case 10:
      var value = new proto.entities.GenerationInstructionsDTO;
      reader.readMessage(value,proto.entities.GenerationInstructionsDTO.deserializeBinaryFromReader);
      msg.setPastexpadult(value);
      break;
    case 11:
      var value = new proto.entities.GenerationInstructionsDTO;
      reader.readMessage(value,proto.entities.GenerationInstructionsDTO.deserializeBinaryFromReader);
      msg.setSkillsets(value);
      break;
    case 12:
      var value = new proto.entities.SkillAdjustmentDTO;
      reader.readMessage(value,proto.entities.SkillAdjustmentDTO.deserializeBinaryFromReader);
      msg.setSkilladjustments(value);
      break;
    case 13:
      var value = new proto.entities.GenerationInstructionsDTO;
      reader.readMessage(value,proto.entities.GenerationInstructionsDTO.deserializeBinaryFromReader);
      msg.setPersonality(value);
      break;
    case 14:
      var value = new proto.entities.GenerationInstructionDTO;
      reader.readMessage(value,proto.entities.GenerationInstructionDTO.deserializeBinaryFromReader);
      msg.setGender(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.setClazz(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entities.BackgroundCustomizationDTO.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entities.BackgroundCustomizationDTO.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entities.BackgroundCustomizationDTO} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.BackgroundCustomizationDTO.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRace();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.entities.GenerationInstructionsDTO.serializeBinaryToWriter
    );
  }
  f = message.getFaction();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.entities.GenerationInstructionsDTO.serializeBinaryToWriter
    );
  }
  f = message.getDisease();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.entities.GenerationInstructionsDTO.serializeBinaryToWriter
    );
  }
  f = message.getAddiction();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.entities.GenerationInstructionsDTO.serializeBinaryToWriter
    );
  }
  f = message.getProfession();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.entities.GenerationInstructionsDTO.serializeBinaryToWriter
    );
  }
  f = message.getReligion();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.entities.GenerationInstructionsDTO.serializeBinaryToWriter
    );
  }
  f = message.getItemsets();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.entities.GenerationInstructionsDTO.serializeBinaryToWriter
    );
  }
  f = message.getItems();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.entities.GenerationInstructionsDTO.serializeBinaryToWriter
    );
  }
  f = message.getPastexpchild();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.entities.GenerationInstructionsDTO.serializeBinaryToWriter
    );
  }
  f = message.getPastexpadult();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.entities.GenerationInstructionsDTO.serializeBinaryToWriter
    );
  }
  f = message.getSkillsets();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.entities.GenerationInstructionsDTO.serializeBinaryToWriter
    );
  }
  f = message.getSkilladjustments();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.entities.SkillAdjustmentDTO.serializeBinaryToWriter
    );
  }
  f = message.getPersonality();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto.entities.GenerationInstructionsDTO.serializeBinaryToWriter
    );
  }
  f = message.getGender();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      proto.entities.GenerationInstructionDTO.serializeBinaryToWriter
    );
  }
  f = message.getClazz();
  if (f.length > 0) {
    writer.writeString(
      15,
      f
    );
  }
};


/**
 * optional GenerationInstructionsDTO race = 1;
 * @return {?proto.entities.GenerationInstructionsDTO}
 */
proto.entities.BackgroundCustomizationDTO.prototype.getRace = function() {
  return /** @type{?proto.entities.GenerationInstructionsDTO} */ (
    jspb.Message.getWrapperField(this, proto.entities.GenerationInstructionsDTO, 1));
};


/**
 * @param {?proto.entities.GenerationInstructionsDTO|undefined} value
 * @return {!proto.entities.BackgroundCustomizationDTO} returns this
*/
proto.entities.BackgroundCustomizationDTO.prototype.setRace = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.entities.BackgroundCustomizationDTO} returns this
 */
proto.entities.BackgroundCustomizationDTO.prototype.clearRace = function() {
  return this.setRace(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.entities.BackgroundCustomizationDTO.prototype.hasRace = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional GenerationInstructionsDTO faction = 2;
 * @return {?proto.entities.GenerationInstructionsDTO}
 */
proto.entities.BackgroundCustomizationDTO.prototype.getFaction = function() {
  return /** @type{?proto.entities.GenerationInstructionsDTO} */ (
    jspb.Message.getWrapperField(this, proto.entities.GenerationInstructionsDTO, 2));
};


/**
 * @param {?proto.entities.GenerationInstructionsDTO|undefined} value
 * @return {!proto.entities.BackgroundCustomizationDTO} returns this
*/
proto.entities.BackgroundCustomizationDTO.prototype.setFaction = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.entities.BackgroundCustomizationDTO} returns this
 */
proto.entities.BackgroundCustomizationDTO.prototype.clearFaction = function() {
  return this.setFaction(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.entities.BackgroundCustomizationDTO.prototype.hasFaction = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional GenerationInstructionsDTO disease = 3;
 * @return {?proto.entities.GenerationInstructionsDTO}
 */
proto.entities.BackgroundCustomizationDTO.prototype.getDisease = function() {
  return /** @type{?proto.entities.GenerationInstructionsDTO} */ (
    jspb.Message.getWrapperField(this, proto.entities.GenerationInstructionsDTO, 3));
};


/**
 * @param {?proto.entities.GenerationInstructionsDTO|undefined} value
 * @return {!proto.entities.BackgroundCustomizationDTO} returns this
*/
proto.entities.BackgroundCustomizationDTO.prototype.setDisease = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.entities.BackgroundCustomizationDTO} returns this
 */
proto.entities.BackgroundCustomizationDTO.prototype.clearDisease = function() {
  return this.setDisease(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.entities.BackgroundCustomizationDTO.prototype.hasDisease = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional GenerationInstructionsDTO addiction = 4;
 * @return {?proto.entities.GenerationInstructionsDTO}
 */
proto.entities.BackgroundCustomizationDTO.prototype.getAddiction = function() {
  return /** @type{?proto.entities.GenerationInstructionsDTO} */ (
    jspb.Message.getWrapperField(this, proto.entities.GenerationInstructionsDTO, 4));
};


/**
 * @param {?proto.entities.GenerationInstructionsDTO|undefined} value
 * @return {!proto.entities.BackgroundCustomizationDTO} returns this
*/
proto.entities.BackgroundCustomizationDTO.prototype.setAddiction = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.entities.BackgroundCustomizationDTO} returns this
 */
proto.entities.BackgroundCustomizationDTO.prototype.clearAddiction = function() {
  return this.setAddiction(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.entities.BackgroundCustomizationDTO.prototype.hasAddiction = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional GenerationInstructionsDTO profession = 5;
 * @return {?proto.entities.GenerationInstructionsDTO}
 */
proto.entities.BackgroundCustomizationDTO.prototype.getProfession = function() {
  return /** @type{?proto.entities.GenerationInstructionsDTO} */ (
    jspb.Message.getWrapperField(this, proto.entities.GenerationInstructionsDTO, 5));
};


/**
 * @param {?proto.entities.GenerationInstructionsDTO|undefined} value
 * @return {!proto.entities.BackgroundCustomizationDTO} returns this
*/
proto.entities.BackgroundCustomizationDTO.prototype.setProfession = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.entities.BackgroundCustomizationDTO} returns this
 */
proto.entities.BackgroundCustomizationDTO.prototype.clearProfession = function() {
  return this.setProfession(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.entities.BackgroundCustomizationDTO.prototype.hasProfession = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional GenerationInstructionsDTO religion = 6;
 * @return {?proto.entities.GenerationInstructionsDTO}
 */
proto.entities.BackgroundCustomizationDTO.prototype.getReligion = function() {
  return /** @type{?proto.entities.GenerationInstructionsDTO} */ (
    jspb.Message.getWrapperField(this, proto.entities.GenerationInstructionsDTO, 6));
};


/**
 * @param {?proto.entities.GenerationInstructionsDTO|undefined} value
 * @return {!proto.entities.BackgroundCustomizationDTO} returns this
*/
proto.entities.BackgroundCustomizationDTO.prototype.setReligion = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.entities.BackgroundCustomizationDTO} returns this
 */
proto.entities.BackgroundCustomizationDTO.prototype.clearReligion = function() {
  return this.setReligion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.entities.BackgroundCustomizationDTO.prototype.hasReligion = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional GenerationInstructionsDTO itemSets = 7;
 * @return {?proto.entities.GenerationInstructionsDTO}
 */
proto.entities.BackgroundCustomizationDTO.prototype.getItemsets = function() {
  return /** @type{?proto.entities.GenerationInstructionsDTO} */ (
    jspb.Message.getWrapperField(this, proto.entities.GenerationInstructionsDTO, 7));
};


/**
 * @param {?proto.entities.GenerationInstructionsDTO|undefined} value
 * @return {!proto.entities.BackgroundCustomizationDTO} returns this
*/
proto.entities.BackgroundCustomizationDTO.prototype.setItemsets = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.entities.BackgroundCustomizationDTO} returns this
 */
proto.entities.BackgroundCustomizationDTO.prototype.clearItemsets = function() {
  return this.setItemsets(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.entities.BackgroundCustomizationDTO.prototype.hasItemsets = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional GenerationInstructionsDTO items = 8;
 * @return {?proto.entities.GenerationInstructionsDTO}
 */
proto.entities.BackgroundCustomizationDTO.prototype.getItems = function() {
  return /** @type{?proto.entities.GenerationInstructionsDTO} */ (
    jspb.Message.getWrapperField(this, proto.entities.GenerationInstructionsDTO, 8));
};


/**
 * @param {?proto.entities.GenerationInstructionsDTO|undefined} value
 * @return {!proto.entities.BackgroundCustomizationDTO} returns this
*/
proto.entities.BackgroundCustomizationDTO.prototype.setItems = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.entities.BackgroundCustomizationDTO} returns this
 */
proto.entities.BackgroundCustomizationDTO.prototype.clearItems = function() {
  return this.setItems(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.entities.BackgroundCustomizationDTO.prototype.hasItems = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional GenerationInstructionsDTO pastExpChild = 9;
 * @return {?proto.entities.GenerationInstructionsDTO}
 */
proto.entities.BackgroundCustomizationDTO.prototype.getPastexpchild = function() {
  return /** @type{?proto.entities.GenerationInstructionsDTO} */ (
    jspb.Message.getWrapperField(this, proto.entities.GenerationInstructionsDTO, 9));
};


/**
 * @param {?proto.entities.GenerationInstructionsDTO|undefined} value
 * @return {!proto.entities.BackgroundCustomizationDTO} returns this
*/
proto.entities.BackgroundCustomizationDTO.prototype.setPastexpchild = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.entities.BackgroundCustomizationDTO} returns this
 */
proto.entities.BackgroundCustomizationDTO.prototype.clearPastexpchild = function() {
  return this.setPastexpchild(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.entities.BackgroundCustomizationDTO.prototype.hasPastexpchild = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional GenerationInstructionsDTO pastExpAdult = 10;
 * @return {?proto.entities.GenerationInstructionsDTO}
 */
proto.entities.BackgroundCustomizationDTO.prototype.getPastexpadult = function() {
  return /** @type{?proto.entities.GenerationInstructionsDTO} */ (
    jspb.Message.getWrapperField(this, proto.entities.GenerationInstructionsDTO, 10));
};


/**
 * @param {?proto.entities.GenerationInstructionsDTO|undefined} value
 * @return {!proto.entities.BackgroundCustomizationDTO} returns this
*/
proto.entities.BackgroundCustomizationDTO.prototype.setPastexpadult = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.entities.BackgroundCustomizationDTO} returns this
 */
proto.entities.BackgroundCustomizationDTO.prototype.clearPastexpadult = function() {
  return this.setPastexpadult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.entities.BackgroundCustomizationDTO.prototype.hasPastexpadult = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional GenerationInstructionsDTO skillSets = 11;
 * @return {?proto.entities.GenerationInstructionsDTO}
 */
proto.entities.BackgroundCustomizationDTO.prototype.getSkillsets = function() {
  return /** @type{?proto.entities.GenerationInstructionsDTO} */ (
    jspb.Message.getWrapperField(this, proto.entities.GenerationInstructionsDTO, 11));
};


/**
 * @param {?proto.entities.GenerationInstructionsDTO|undefined} value
 * @return {!proto.entities.BackgroundCustomizationDTO} returns this
*/
proto.entities.BackgroundCustomizationDTO.prototype.setSkillsets = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.entities.BackgroundCustomizationDTO} returns this
 */
proto.entities.BackgroundCustomizationDTO.prototype.clearSkillsets = function() {
  return this.setSkillsets(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.entities.BackgroundCustomizationDTO.prototype.hasSkillsets = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional SkillAdjustmentDTO skillAdjustments = 12;
 * @return {?proto.entities.SkillAdjustmentDTO}
 */
proto.entities.BackgroundCustomizationDTO.prototype.getSkilladjustments = function() {
  return /** @type{?proto.entities.SkillAdjustmentDTO} */ (
    jspb.Message.getWrapperField(this, proto.entities.SkillAdjustmentDTO, 12));
};


/**
 * @param {?proto.entities.SkillAdjustmentDTO|undefined} value
 * @return {!proto.entities.BackgroundCustomizationDTO} returns this
*/
proto.entities.BackgroundCustomizationDTO.prototype.setSkilladjustments = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.entities.BackgroundCustomizationDTO} returns this
 */
proto.entities.BackgroundCustomizationDTO.prototype.clearSkilladjustments = function() {
  return this.setSkilladjustments(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.entities.BackgroundCustomizationDTO.prototype.hasSkilladjustments = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional GenerationInstructionsDTO personality = 13;
 * @return {?proto.entities.GenerationInstructionsDTO}
 */
proto.entities.BackgroundCustomizationDTO.prototype.getPersonality = function() {
  return /** @type{?proto.entities.GenerationInstructionsDTO} */ (
    jspb.Message.getWrapperField(this, proto.entities.GenerationInstructionsDTO, 13));
};


/**
 * @param {?proto.entities.GenerationInstructionsDTO|undefined} value
 * @return {!proto.entities.BackgroundCustomizationDTO} returns this
*/
proto.entities.BackgroundCustomizationDTO.prototype.setPersonality = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.entities.BackgroundCustomizationDTO} returns this
 */
proto.entities.BackgroundCustomizationDTO.prototype.clearPersonality = function() {
  return this.setPersonality(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.entities.BackgroundCustomizationDTO.prototype.hasPersonality = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional GenerationInstructionDTO gender = 14;
 * @return {?proto.entities.GenerationInstructionDTO}
 */
proto.entities.BackgroundCustomizationDTO.prototype.getGender = function() {
  return /** @type{?proto.entities.GenerationInstructionDTO} */ (
    jspb.Message.getWrapperField(this, proto.entities.GenerationInstructionDTO, 14));
};


/**
 * @param {?proto.entities.GenerationInstructionDTO|undefined} value
 * @return {!proto.entities.BackgroundCustomizationDTO} returns this
*/
proto.entities.BackgroundCustomizationDTO.prototype.setGender = function(value) {
  return jspb.Message.setWrapperField(this, 14, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.entities.BackgroundCustomizationDTO} returns this
 */
proto.entities.BackgroundCustomizationDTO.prototype.clearGender = function() {
  return this.setGender(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.entities.BackgroundCustomizationDTO.prototype.hasGender = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional string clazz = 15;
 * @return {string}
 */
proto.entities.BackgroundCustomizationDTO.prototype.getClazz = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.BackgroundCustomizationDTO} returns this
 */
proto.entities.BackgroundCustomizationDTO.prototype.setClazz = function(value) {
  return jspb.Message.setProto3StringField(this, 15, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entities.SkillAdjustmentDTO.prototype.toObject = function(opt_includeInstance) {
  return proto.entities.SkillAdjustmentDTO.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entities.SkillAdjustmentDTO} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.SkillAdjustmentDTO.toObject = function(includeInstance, msg) {
  var f, obj = {
    skilladjustmentsMap: (f = msg.getSkilladjustmentsMap()) ? f.toObject(includeInstance, undefined) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entities.SkillAdjustmentDTO}
 */
proto.entities.SkillAdjustmentDTO.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entities.SkillAdjustmentDTO;
  return proto.entities.SkillAdjustmentDTO.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entities.SkillAdjustmentDTO} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entities.SkillAdjustmentDTO}
 */
proto.entities.SkillAdjustmentDTO.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = msg.getSkilladjustmentsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readInt32, null, "", 0);
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entities.SkillAdjustmentDTO.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entities.SkillAdjustmentDTO.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entities.SkillAdjustmentDTO} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.SkillAdjustmentDTO.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSkilladjustmentsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeInt32);
  }
};


/**
 * map<string, int32> skillAdjustments = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,number>}
 */
proto.entities.SkillAdjustmentDTO.prototype.getSkilladjustmentsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,number>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.entities.SkillAdjustmentDTO} returns this
 */
proto.entities.SkillAdjustmentDTO.prototype.clearSkilladjustmentsMap = function() {
  this.getSkilladjustmentsMap().clear();
  return this;};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.entities.SkillAdjustmentsDTO.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entities.SkillAdjustmentsDTO.prototype.toObject = function(opt_includeInstance) {
  return proto.entities.SkillAdjustmentsDTO.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entities.SkillAdjustmentsDTO} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.SkillAdjustmentsDTO.toObject = function(includeInstance, msg) {
  var f, obj = {
    arrList: jspb.Message.toObjectList(msg.getArrList(),
    proto.entities.SkillAdjustmentDTO.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entities.SkillAdjustmentsDTO}
 */
proto.entities.SkillAdjustmentsDTO.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entities.SkillAdjustmentsDTO;
  return proto.entities.SkillAdjustmentsDTO.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entities.SkillAdjustmentsDTO} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entities.SkillAdjustmentsDTO}
 */
proto.entities.SkillAdjustmentsDTO.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.entities.SkillAdjustmentDTO;
      reader.readMessage(value,proto.entities.SkillAdjustmentDTO.deserializeBinaryFromReader);
      msg.addArr(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entities.SkillAdjustmentsDTO.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entities.SkillAdjustmentsDTO.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entities.SkillAdjustmentsDTO} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.SkillAdjustmentsDTO.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getArrList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.entities.SkillAdjustmentDTO.serializeBinaryToWriter
    );
  }
};


/**
 * repeated SkillAdjustmentDTO arr = 1;
 * @return {!Array<!proto.entities.SkillAdjustmentDTO>}
 */
proto.entities.SkillAdjustmentsDTO.prototype.getArrList = function() {
  return /** @type{!Array<!proto.entities.SkillAdjustmentDTO>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.entities.SkillAdjustmentDTO, 1));
};


/**
 * @param {!Array<!proto.entities.SkillAdjustmentDTO>} value
 * @return {!proto.entities.SkillAdjustmentsDTO} returns this
*/
proto.entities.SkillAdjustmentsDTO.prototype.setArrList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.entities.SkillAdjustmentDTO=} opt_value
 * @param {number=} opt_index
 * @return {!proto.entities.SkillAdjustmentDTO}
 */
proto.entities.SkillAdjustmentsDTO.prototype.addArr = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.entities.SkillAdjustmentDTO, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.entities.SkillAdjustmentsDTO} returns this
 */
proto.entities.SkillAdjustmentsDTO.prototype.clearArrList = function() {
  return this.setArrList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entities.SimpleProbDTO.prototype.toObject = function(opt_includeInstance) {
  return proto.entities.SimpleProbDTO.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entities.SimpleProbDTO} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.SimpleProbDTO.toObject = function(includeInstance, msg) {
  var f, obj = {
    cond: jspb.Message.getFieldWithDefault(msg, 1, 0),
    probMap: (f = msg.getProbMap()) ? f.toObject(includeInstance, undefined) : [],
    clazz: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entities.SimpleProbDTO}
 */
proto.entities.SimpleProbDTO.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entities.SimpleProbDTO;
  return proto.entities.SimpleProbDTO.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entities.SimpleProbDTO} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entities.SimpleProbDTO}
 */
proto.entities.SimpleProbDTO.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.entities.ConditionEnumDTO} */ (reader.readEnum());
      msg.setCond(value);
      break;
    case 2:
      var value = msg.getProbMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readFloat, null, "", 0.0);
         });
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setClazz(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entities.SimpleProbDTO.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entities.SimpleProbDTO.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entities.SimpleProbDTO} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.SimpleProbDTO.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCond();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getProbMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(2, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeFloat);
  }
  f = message.getClazz();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional ConditionEnumDTO cond = 1;
 * @return {!proto.entities.ConditionEnumDTO}
 */
proto.entities.SimpleProbDTO.prototype.getCond = function() {
  return /** @type {!proto.entities.ConditionEnumDTO} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.entities.ConditionEnumDTO} value
 * @return {!proto.entities.SimpleProbDTO} returns this
 */
proto.entities.SimpleProbDTO.prototype.setCond = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * map<string, float> prob = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,number>}
 */
proto.entities.SimpleProbDTO.prototype.getProbMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,number>} */ (
      jspb.Message.getMapField(this, 2, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.entities.SimpleProbDTO} returns this
 */
proto.entities.SimpleProbDTO.prototype.clearProbMap = function() {
  this.getProbMap().clear();
  return this;};


/**
 * optional string clazz = 3;
 * @return {string}
 */
proto.entities.SimpleProbDTO.prototype.getClazz = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.SimpleProbDTO} returns this
 */
proto.entities.SimpleProbDTO.prototype.setClazz = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entities.GaussianProbDTO.prototype.toObject = function(opt_includeInstance) {
  return proto.entities.GaussianProbDTO.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entities.GaussianProbDTO} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.GaussianProbDTO.toObject = function(includeInstance, msg) {
  var f, obj = {
    blueprintid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    prob: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    avgquan: jspb.Message.getFieldWithDefault(msg, 3, 0),
    stdev: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    skew: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
    clazz: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entities.GaussianProbDTO}
 */
proto.entities.GaussianProbDTO.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entities.GaussianProbDTO;
  return proto.entities.GaussianProbDTO.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entities.GaussianProbDTO} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entities.GaussianProbDTO}
 */
proto.entities.GaussianProbDTO.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBlueprintid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setProb(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setAvgquan(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setStdev(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setSkew(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setClazz(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entities.GaussianProbDTO.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entities.GaussianProbDTO.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entities.GaussianProbDTO} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.GaussianProbDTO.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBlueprintid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getProb();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
  f = message.getAvgquan();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getStdev();
  if (f !== 0.0) {
    writer.writeFloat(
      4,
      f
    );
  }
  f = message.getSkew();
  if (f !== 0.0) {
    writer.writeFloat(
      5,
      f
    );
  }
  f = message.getClazz();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string blueprintId = 1;
 * @return {string}
 */
proto.entities.GaussianProbDTO.prototype.getBlueprintid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.GaussianProbDTO} returns this
 */
proto.entities.GaussianProbDTO.prototype.setBlueprintid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional float prob = 2;
 * @return {number}
 */
proto.entities.GaussianProbDTO.prototype.getProb = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.entities.GaussianProbDTO} returns this
 */
proto.entities.GaussianProbDTO.prototype.setProb = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional int32 avgQuan = 3;
 * @return {number}
 */
proto.entities.GaussianProbDTO.prototype.getAvgquan = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.entities.GaussianProbDTO} returns this
 */
proto.entities.GaussianProbDTO.prototype.setAvgquan = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional float stDev = 4;
 * @return {number}
 */
proto.entities.GaussianProbDTO.prototype.getStdev = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.entities.GaussianProbDTO} returns this
 */
proto.entities.GaussianProbDTO.prototype.setStdev = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional float skew = 5;
 * @return {number}
 */
proto.entities.GaussianProbDTO.prototype.getSkew = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.entities.GaussianProbDTO} returns this
 */
proto.entities.GaussianProbDTO.prototype.setSkew = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional string clazz = 6;
 * @return {string}
 */
proto.entities.GaussianProbDTO.prototype.getClazz = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.GaussianProbDTO} returns this
 */
proto.entities.GaussianProbDTO.prototype.setClazz = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.entities.CombinatorDTO.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entities.CombinatorDTO.prototype.toObject = function(opt_includeInstance) {
  return proto.entities.CombinatorDTO.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entities.CombinatorDTO} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.CombinatorDTO.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    cond: jspb.Message.getFieldWithDefault(msg, 2, 0),
    prob: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    instructionsList: jspb.Message.toObjectList(msg.getInstructionsList(),
    proto.entities.GenerationInstructionDTO.toObject, includeInstance),
    clazz: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entities.CombinatorDTO}
 */
proto.entities.CombinatorDTO.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entities.CombinatorDTO;
  return proto.entities.CombinatorDTO.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entities.CombinatorDTO} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entities.CombinatorDTO}
 */
proto.entities.CombinatorDTO.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {!proto.entities.ConditionEnumDTO} */ (reader.readEnum());
      msg.setCond(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setProb(value);
      break;
    case 4:
      var value = new proto.entities.GenerationInstructionDTO;
      reader.readMessage(value,proto.entities.GenerationInstructionDTO.deserializeBinaryFromReader);
      msg.addInstructions(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setClazz(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entities.CombinatorDTO.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entities.CombinatorDTO.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entities.CombinatorDTO} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.CombinatorDTO.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCond();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getProb();
  if (f !== 0.0) {
    writer.writeFloat(
      3,
      f
    );
  }
  f = message.getInstructionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.entities.GenerationInstructionDTO.serializeBinaryToWriter
    );
  }
  f = message.getClazz();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.entities.CombinatorDTO.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.CombinatorDTO} returns this
 */
proto.entities.CombinatorDTO.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional ConditionEnumDTO cond = 2;
 * @return {!proto.entities.ConditionEnumDTO}
 */
proto.entities.CombinatorDTO.prototype.getCond = function() {
  return /** @type {!proto.entities.ConditionEnumDTO} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.entities.ConditionEnumDTO} value
 * @return {!proto.entities.CombinatorDTO} returns this
 */
proto.entities.CombinatorDTO.prototype.setCond = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional float prob = 3;
 * @return {number}
 */
proto.entities.CombinatorDTO.prototype.getProb = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.entities.CombinatorDTO} returns this
 */
proto.entities.CombinatorDTO.prototype.setProb = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * repeated GenerationInstructionDTO instructions = 4;
 * @return {!Array<!proto.entities.GenerationInstructionDTO>}
 */
proto.entities.CombinatorDTO.prototype.getInstructionsList = function() {
  return /** @type{!Array<!proto.entities.GenerationInstructionDTO>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.entities.GenerationInstructionDTO, 4));
};


/**
 * @param {!Array<!proto.entities.GenerationInstructionDTO>} value
 * @return {!proto.entities.CombinatorDTO} returns this
*/
proto.entities.CombinatorDTO.prototype.setInstructionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.entities.GenerationInstructionDTO=} opt_value
 * @param {number=} opt_index
 * @return {!proto.entities.GenerationInstructionDTO}
 */
proto.entities.CombinatorDTO.prototype.addInstructions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.entities.GenerationInstructionDTO, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.entities.CombinatorDTO} returns this
 */
proto.entities.CombinatorDTO.prototype.clearInstructionsList = function() {
  return this.setInstructionsList([]);
};


/**
 * optional string clazz = 5;
 * @return {string}
 */
proto.entities.CombinatorDTO.prototype.getClazz = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.CombinatorDTO} returns this
 */
proto.entities.CombinatorDTO.prototype.setClazz = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.entities.PastExperienceDTO.repeatedFields_ = [8];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entities.PastExperienceDTO.prototype.toObject = function(opt_includeInstance) {
  return proto.entities.PastExperienceDTO.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entities.PastExperienceDTO} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.PastExperienceDTO.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    blueprintid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    name: jspb.Message.getFieldWithDefault(msg, 3, ""),
    metadata: (f = msg.getMetadata()) && proto.entities.Metadata.toObject(includeInstance, f),
    user: jspb.Message.getFieldWithDefault(msg, 5, ""),
    campaign: jspb.Message.getFieldWithDefault(msg, 6, ""),
    world: jspb.Message.getFieldWithDefault(msg, 7, ""),
    tagsList: (f = jspb.Message.getRepeatedField(msg, 8)) == null ? undefined : f,
    type: jspb.Message.getFieldWithDefault(msg, 9, 0),
    targetentity: jspb.Message.getFieldWithDefault(msg, 10, ""),
    createdat: jspb.Message.getFieldWithDefault(msg, 11, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entities.PastExperienceDTO}
 */
proto.entities.PastExperienceDTO.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entities.PastExperienceDTO;
  return proto.entities.PastExperienceDTO.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entities.PastExperienceDTO} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entities.PastExperienceDTO}
 */
proto.entities.PastExperienceDTO.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBlueprintid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = new proto.entities.Metadata;
      reader.readMessage(value,proto.entities.Metadata.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setUser(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setCampaign(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setWorld(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.addTags(value);
      break;
    case 9:
      var value = /** @type {!proto.entities.PastExperienceTypeEnumDTO} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setTargetentity(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCreatedat(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entities.PastExperienceDTO.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entities.PastExperienceDTO.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entities.PastExperienceDTO} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.PastExperienceDTO.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBlueprintid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.entities.Metadata.serializeBinaryToWriter
    );
  }
  f = message.getUser();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getCampaign();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getWorld();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getTagsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      8,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      9,
      f
    );
  }
  f = message.getTargetentity();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getCreatedat();
  if (f !== 0) {
    writer.writeInt32(
      11,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.entities.PastExperienceDTO.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.PastExperienceDTO} returns this
 */
proto.entities.PastExperienceDTO.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string blueprintId = 2;
 * @return {string}
 */
proto.entities.PastExperienceDTO.prototype.getBlueprintid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.PastExperienceDTO} returns this
 */
proto.entities.PastExperienceDTO.prototype.setBlueprintid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.entities.PastExperienceDTO.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.PastExperienceDTO} returns this
 */
proto.entities.PastExperienceDTO.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional Metadata metadata = 4;
 * @return {?proto.entities.Metadata}
 */
proto.entities.PastExperienceDTO.prototype.getMetadata = function() {
  return /** @type{?proto.entities.Metadata} */ (
    jspb.Message.getWrapperField(this, proto.entities.Metadata, 4));
};


/**
 * @param {?proto.entities.Metadata|undefined} value
 * @return {!proto.entities.PastExperienceDTO} returns this
*/
proto.entities.PastExperienceDTO.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.entities.PastExperienceDTO} returns this
 */
proto.entities.PastExperienceDTO.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.entities.PastExperienceDTO.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string user = 5;
 * @return {string}
 */
proto.entities.PastExperienceDTO.prototype.getUser = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.PastExperienceDTO} returns this
 */
proto.entities.PastExperienceDTO.prototype.setUser = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string campaign = 6;
 * @return {string}
 */
proto.entities.PastExperienceDTO.prototype.getCampaign = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.PastExperienceDTO} returns this
 */
proto.entities.PastExperienceDTO.prototype.setCampaign = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string world = 7;
 * @return {string}
 */
proto.entities.PastExperienceDTO.prototype.getWorld = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.PastExperienceDTO} returns this
 */
proto.entities.PastExperienceDTO.prototype.setWorld = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * repeated string tags = 8;
 * @return {!Array<string>}
 */
proto.entities.PastExperienceDTO.prototype.getTagsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 8));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.entities.PastExperienceDTO} returns this
 */
proto.entities.PastExperienceDTO.prototype.setTagsList = function(value) {
  return jspb.Message.setField(this, 8, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.entities.PastExperienceDTO} returns this
 */
proto.entities.PastExperienceDTO.prototype.addTags = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 8, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.entities.PastExperienceDTO} returns this
 */
proto.entities.PastExperienceDTO.prototype.clearTagsList = function() {
  return this.setTagsList([]);
};


/**
 * optional PastExperienceTypeEnumDTO type = 9;
 * @return {!proto.entities.PastExperienceTypeEnumDTO}
 */
proto.entities.PastExperienceDTO.prototype.getType = function() {
  return /** @type {!proto.entities.PastExperienceTypeEnumDTO} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {!proto.entities.PastExperienceTypeEnumDTO} value
 * @return {!proto.entities.PastExperienceDTO} returns this
 */
proto.entities.PastExperienceDTO.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 9, value);
};


/**
 * optional string targetEntity = 10;
 * @return {string}
 */
proto.entities.PastExperienceDTO.prototype.getTargetentity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.PastExperienceDTO} returns this
 */
proto.entities.PastExperienceDTO.prototype.setTargetentity = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional int32 createdAt = 11;
 * @return {number}
 */
proto.entities.PastExperienceDTO.prototype.getCreatedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.entities.PastExperienceDTO} returns this
 */
proto.entities.PastExperienceDTO.prototype.setCreatedat = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.entities.PastExperiencesDTO.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entities.PastExperiencesDTO.prototype.toObject = function(opt_includeInstance) {
  return proto.entities.PastExperiencesDTO.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entities.PastExperiencesDTO} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.PastExperiencesDTO.toObject = function(includeInstance, msg) {
  var f, obj = {
    arrList: jspb.Message.toObjectList(msg.getArrList(),
    proto.entities.PastExperienceDTO.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entities.PastExperiencesDTO}
 */
proto.entities.PastExperiencesDTO.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entities.PastExperiencesDTO;
  return proto.entities.PastExperiencesDTO.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entities.PastExperiencesDTO} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entities.PastExperiencesDTO}
 */
proto.entities.PastExperiencesDTO.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.entities.PastExperienceDTO;
      reader.readMessage(value,proto.entities.PastExperienceDTO.deserializeBinaryFromReader);
      msg.addArr(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entities.PastExperiencesDTO.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entities.PastExperiencesDTO.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entities.PastExperiencesDTO} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.PastExperiencesDTO.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getArrList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.entities.PastExperienceDTO.serializeBinaryToWriter
    );
  }
};


/**
 * repeated PastExperienceDTO arr = 1;
 * @return {!Array<!proto.entities.PastExperienceDTO>}
 */
proto.entities.PastExperiencesDTO.prototype.getArrList = function() {
  return /** @type{!Array<!proto.entities.PastExperienceDTO>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.entities.PastExperienceDTO, 1));
};


/**
 * @param {!Array<!proto.entities.PastExperienceDTO>} value
 * @return {!proto.entities.PastExperiencesDTO} returns this
*/
proto.entities.PastExperiencesDTO.prototype.setArrList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.entities.PastExperienceDTO=} opt_value
 * @param {number=} opt_index
 * @return {!proto.entities.PastExperienceDTO}
 */
proto.entities.PastExperiencesDTO.prototype.addArr = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.entities.PastExperienceDTO, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.entities.PastExperiencesDTO} returns this
 */
proto.entities.PastExperiencesDTO.prototype.clearArrList = function() {
  return this.setArrList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.entities.MemoryDTO.repeatedFields_ = [8];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entities.MemoryDTO.prototype.toObject = function(opt_includeInstance) {
  return proto.entities.MemoryDTO.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entities.MemoryDTO} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.MemoryDTO.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    blueprintid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    name: jspb.Message.getFieldWithDefault(msg, 3, ""),
    metadata: (f = msg.getMetadata()) && proto.entities.Metadata.toObject(includeInstance, f),
    user: jspb.Message.getFieldWithDefault(msg, 5, ""),
    campaign: jspb.Message.getFieldWithDefault(msg, 6, ""),
    world: jspb.Message.getFieldWithDefault(msg, 7, ""),
    tagsList: (f = jspb.Message.getRepeatedField(msg, 8)) == null ? undefined : f,
    facts: (f = msg.getFacts()) && proto.entities.FactsDTO.toObject(includeInstance, f),
    type: jspb.Message.getFieldWithDefault(msg, 10, 0),
    description: jspb.Message.getFieldWithDefault(msg, 11, ""),
    targetentity: jspb.Message.getFieldWithDefault(msg, 12, ""),
    createdat: jspb.Message.getFieldWithDefault(msg, 13, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entities.MemoryDTO}
 */
proto.entities.MemoryDTO.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entities.MemoryDTO;
  return proto.entities.MemoryDTO.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entities.MemoryDTO} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entities.MemoryDTO}
 */
proto.entities.MemoryDTO.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBlueprintid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = new proto.entities.Metadata;
      reader.readMessage(value,proto.entities.Metadata.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setUser(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setCampaign(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setWorld(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.addTags(value);
      break;
    case 9:
      var value = new proto.entities.FactsDTO;
      reader.readMessage(value,proto.entities.FactsDTO.deserializeBinaryFromReader);
      msg.setFacts(value);
      break;
    case 10:
      var value = /** @type {!proto.entities.MemoryTypeEnumDTO} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setTargetentity(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCreatedat(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entities.MemoryDTO.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entities.MemoryDTO.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entities.MemoryDTO} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.MemoryDTO.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBlueprintid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.entities.Metadata.serializeBinaryToWriter
    );
  }
  f = message.getUser();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getCampaign();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getWorld();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getTagsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      8,
      f
    );
  }
  f = message.getFacts();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.entities.FactsDTO.serializeBinaryToWriter
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      10,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getTargetentity();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getCreatedat();
  if (f !== 0) {
    writer.writeInt32(
      13,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.entities.MemoryDTO.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.MemoryDTO} returns this
 */
proto.entities.MemoryDTO.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string blueprintId = 2;
 * @return {string}
 */
proto.entities.MemoryDTO.prototype.getBlueprintid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.MemoryDTO} returns this
 */
proto.entities.MemoryDTO.prototype.setBlueprintid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.entities.MemoryDTO.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.MemoryDTO} returns this
 */
proto.entities.MemoryDTO.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional Metadata metadata = 4;
 * @return {?proto.entities.Metadata}
 */
proto.entities.MemoryDTO.prototype.getMetadata = function() {
  return /** @type{?proto.entities.Metadata} */ (
    jspb.Message.getWrapperField(this, proto.entities.Metadata, 4));
};


/**
 * @param {?proto.entities.Metadata|undefined} value
 * @return {!proto.entities.MemoryDTO} returns this
*/
proto.entities.MemoryDTO.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.entities.MemoryDTO} returns this
 */
proto.entities.MemoryDTO.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.entities.MemoryDTO.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string user = 5;
 * @return {string}
 */
proto.entities.MemoryDTO.prototype.getUser = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.MemoryDTO} returns this
 */
proto.entities.MemoryDTO.prototype.setUser = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string campaign = 6;
 * @return {string}
 */
proto.entities.MemoryDTO.prototype.getCampaign = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.MemoryDTO} returns this
 */
proto.entities.MemoryDTO.prototype.setCampaign = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string world = 7;
 * @return {string}
 */
proto.entities.MemoryDTO.prototype.getWorld = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.MemoryDTO} returns this
 */
proto.entities.MemoryDTO.prototype.setWorld = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * repeated string tags = 8;
 * @return {!Array<string>}
 */
proto.entities.MemoryDTO.prototype.getTagsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 8));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.entities.MemoryDTO} returns this
 */
proto.entities.MemoryDTO.prototype.setTagsList = function(value) {
  return jspb.Message.setField(this, 8, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.entities.MemoryDTO} returns this
 */
proto.entities.MemoryDTO.prototype.addTags = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 8, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.entities.MemoryDTO} returns this
 */
proto.entities.MemoryDTO.prototype.clearTagsList = function() {
  return this.setTagsList([]);
};


/**
 * optional FactsDTO facts = 9;
 * @return {?proto.entities.FactsDTO}
 */
proto.entities.MemoryDTO.prototype.getFacts = function() {
  return /** @type{?proto.entities.FactsDTO} */ (
    jspb.Message.getWrapperField(this, proto.entities.FactsDTO, 9));
};


/**
 * @param {?proto.entities.FactsDTO|undefined} value
 * @return {!proto.entities.MemoryDTO} returns this
*/
proto.entities.MemoryDTO.prototype.setFacts = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.entities.MemoryDTO} returns this
 */
proto.entities.MemoryDTO.prototype.clearFacts = function() {
  return this.setFacts(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.entities.MemoryDTO.prototype.hasFacts = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional MemoryTypeEnumDTO type = 10;
 * @return {!proto.entities.MemoryTypeEnumDTO}
 */
proto.entities.MemoryDTO.prototype.getType = function() {
  return /** @type {!proto.entities.MemoryTypeEnumDTO} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {!proto.entities.MemoryTypeEnumDTO} value
 * @return {!proto.entities.MemoryDTO} returns this
 */
proto.entities.MemoryDTO.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 10, value);
};


/**
 * optional string description = 11;
 * @return {string}
 */
proto.entities.MemoryDTO.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.MemoryDTO} returns this
 */
proto.entities.MemoryDTO.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string targetEntity = 12;
 * @return {string}
 */
proto.entities.MemoryDTO.prototype.getTargetentity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.MemoryDTO} returns this
 */
proto.entities.MemoryDTO.prototype.setTargetentity = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional int32 createdAt = 13;
 * @return {number}
 */
proto.entities.MemoryDTO.prototype.getCreatedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {number} value
 * @return {!proto.entities.MemoryDTO} returns this
 */
proto.entities.MemoryDTO.prototype.setCreatedat = function(value) {
  return jspb.Message.setProto3IntField(this, 13, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.entities.MemoriesDTO.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entities.MemoriesDTO.prototype.toObject = function(opt_includeInstance) {
  return proto.entities.MemoriesDTO.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entities.MemoriesDTO} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.MemoriesDTO.toObject = function(includeInstance, msg) {
  var f, obj = {
    arrList: jspb.Message.toObjectList(msg.getArrList(),
    proto.entities.MemoryDTO.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entities.MemoriesDTO}
 */
proto.entities.MemoriesDTO.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entities.MemoriesDTO;
  return proto.entities.MemoriesDTO.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entities.MemoriesDTO} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entities.MemoriesDTO}
 */
proto.entities.MemoriesDTO.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.entities.MemoryDTO;
      reader.readMessage(value,proto.entities.MemoryDTO.deserializeBinaryFromReader);
      msg.addArr(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entities.MemoriesDTO.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entities.MemoriesDTO.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entities.MemoriesDTO} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.MemoriesDTO.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getArrList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.entities.MemoryDTO.serializeBinaryToWriter
    );
  }
};


/**
 * repeated MemoryDTO arr = 1;
 * @return {!Array<!proto.entities.MemoryDTO>}
 */
proto.entities.MemoriesDTO.prototype.getArrList = function() {
  return /** @type{!Array<!proto.entities.MemoryDTO>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.entities.MemoryDTO, 1));
};


/**
 * @param {!Array<!proto.entities.MemoryDTO>} value
 * @return {!proto.entities.MemoriesDTO} returns this
*/
proto.entities.MemoriesDTO.prototype.setArrList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.entities.MemoryDTO=} opt_value
 * @param {number=} opt_index
 * @return {!proto.entities.MemoryDTO}
 */
proto.entities.MemoriesDTO.prototype.addArr = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.entities.MemoryDTO, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.entities.MemoriesDTO} returns this
 */
proto.entities.MemoriesDTO.prototype.clearArrList = function() {
  return this.setArrList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.entities.SkillSetDTO.repeatedFields_ = [8];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entities.SkillSetDTO.prototype.toObject = function(opt_includeInstance) {
  return proto.entities.SkillSetDTO.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entities.SkillSetDTO} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.SkillSetDTO.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    blueprintid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    name: jspb.Message.getFieldWithDefault(msg, 3, ""),
    metadata: (f = msg.getMetadata()) && proto.entities.Metadata.toObject(includeInstance, f),
    user: jspb.Message.getFieldWithDefault(msg, 5, ""),
    campaign: jspb.Message.getFieldWithDefault(msg, 6, ""),
    world: jspb.Message.getFieldWithDefault(msg, 7, ""),
    tagsList: (f = jspb.Message.getRepeatedField(msg, 8)) == null ? undefined : f,
    skillimprovement: (f = msg.getSkillimprovement()) && proto.entities.SkillImprovementDTO.toObject(includeInstance, f),
    targetentity: jspb.Message.getFieldWithDefault(msg, 10, ""),
    createdat: jspb.Message.getFieldWithDefault(msg, 11, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entities.SkillSetDTO}
 */
proto.entities.SkillSetDTO.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entities.SkillSetDTO;
  return proto.entities.SkillSetDTO.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entities.SkillSetDTO} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entities.SkillSetDTO}
 */
proto.entities.SkillSetDTO.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBlueprintid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = new proto.entities.Metadata;
      reader.readMessage(value,proto.entities.Metadata.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setUser(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setCampaign(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setWorld(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.addTags(value);
      break;
    case 9:
      var value = new proto.entities.SkillImprovementDTO;
      reader.readMessage(value,proto.entities.SkillImprovementDTO.deserializeBinaryFromReader);
      msg.setSkillimprovement(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setTargetentity(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCreatedat(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entities.SkillSetDTO.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entities.SkillSetDTO.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entities.SkillSetDTO} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.SkillSetDTO.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBlueprintid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.entities.Metadata.serializeBinaryToWriter
    );
  }
  f = message.getUser();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getCampaign();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getWorld();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getTagsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      8,
      f
    );
  }
  f = message.getSkillimprovement();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.entities.SkillImprovementDTO.serializeBinaryToWriter
    );
  }
  f = message.getTargetentity();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getCreatedat();
  if (f !== 0) {
    writer.writeInt32(
      11,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.entities.SkillSetDTO.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.SkillSetDTO} returns this
 */
proto.entities.SkillSetDTO.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string blueprintId = 2;
 * @return {string}
 */
proto.entities.SkillSetDTO.prototype.getBlueprintid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.SkillSetDTO} returns this
 */
proto.entities.SkillSetDTO.prototype.setBlueprintid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.entities.SkillSetDTO.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.SkillSetDTO} returns this
 */
proto.entities.SkillSetDTO.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional Metadata metadata = 4;
 * @return {?proto.entities.Metadata}
 */
proto.entities.SkillSetDTO.prototype.getMetadata = function() {
  return /** @type{?proto.entities.Metadata} */ (
    jspb.Message.getWrapperField(this, proto.entities.Metadata, 4));
};


/**
 * @param {?proto.entities.Metadata|undefined} value
 * @return {!proto.entities.SkillSetDTO} returns this
*/
proto.entities.SkillSetDTO.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.entities.SkillSetDTO} returns this
 */
proto.entities.SkillSetDTO.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.entities.SkillSetDTO.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string user = 5;
 * @return {string}
 */
proto.entities.SkillSetDTO.prototype.getUser = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.SkillSetDTO} returns this
 */
proto.entities.SkillSetDTO.prototype.setUser = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string campaign = 6;
 * @return {string}
 */
proto.entities.SkillSetDTO.prototype.getCampaign = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.SkillSetDTO} returns this
 */
proto.entities.SkillSetDTO.prototype.setCampaign = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string world = 7;
 * @return {string}
 */
proto.entities.SkillSetDTO.prototype.getWorld = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.SkillSetDTO} returns this
 */
proto.entities.SkillSetDTO.prototype.setWorld = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * repeated string tags = 8;
 * @return {!Array<string>}
 */
proto.entities.SkillSetDTO.prototype.getTagsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 8));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.entities.SkillSetDTO} returns this
 */
proto.entities.SkillSetDTO.prototype.setTagsList = function(value) {
  return jspb.Message.setField(this, 8, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.entities.SkillSetDTO} returns this
 */
proto.entities.SkillSetDTO.prototype.addTags = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 8, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.entities.SkillSetDTO} returns this
 */
proto.entities.SkillSetDTO.prototype.clearTagsList = function() {
  return this.setTagsList([]);
};


/**
 * optional SkillImprovementDTO skillImprovement = 9;
 * @return {?proto.entities.SkillImprovementDTO}
 */
proto.entities.SkillSetDTO.prototype.getSkillimprovement = function() {
  return /** @type{?proto.entities.SkillImprovementDTO} */ (
    jspb.Message.getWrapperField(this, proto.entities.SkillImprovementDTO, 9));
};


/**
 * @param {?proto.entities.SkillImprovementDTO|undefined} value
 * @return {!proto.entities.SkillSetDTO} returns this
*/
proto.entities.SkillSetDTO.prototype.setSkillimprovement = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.entities.SkillSetDTO} returns this
 */
proto.entities.SkillSetDTO.prototype.clearSkillimprovement = function() {
  return this.setSkillimprovement(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.entities.SkillSetDTO.prototype.hasSkillimprovement = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional string targetEntity = 10;
 * @return {string}
 */
proto.entities.SkillSetDTO.prototype.getTargetentity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.SkillSetDTO} returns this
 */
proto.entities.SkillSetDTO.prototype.setTargetentity = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional int32 createdAt = 11;
 * @return {number}
 */
proto.entities.SkillSetDTO.prototype.getCreatedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.entities.SkillSetDTO} returns this
 */
proto.entities.SkillSetDTO.prototype.setCreatedat = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.entities.SkillSetsDTO.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entities.SkillSetsDTO.prototype.toObject = function(opt_includeInstance) {
  return proto.entities.SkillSetsDTO.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entities.SkillSetsDTO} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.SkillSetsDTO.toObject = function(includeInstance, msg) {
  var f, obj = {
    arrList: jspb.Message.toObjectList(msg.getArrList(),
    proto.entities.SkillSetDTO.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entities.SkillSetsDTO}
 */
proto.entities.SkillSetsDTO.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entities.SkillSetsDTO;
  return proto.entities.SkillSetsDTO.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entities.SkillSetsDTO} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entities.SkillSetsDTO}
 */
proto.entities.SkillSetsDTO.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.entities.SkillSetDTO;
      reader.readMessage(value,proto.entities.SkillSetDTO.deserializeBinaryFromReader);
      msg.addArr(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entities.SkillSetsDTO.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entities.SkillSetsDTO.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entities.SkillSetsDTO} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.SkillSetsDTO.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getArrList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.entities.SkillSetDTO.serializeBinaryToWriter
    );
  }
};


/**
 * repeated SkillSetDTO arr = 1;
 * @return {!Array<!proto.entities.SkillSetDTO>}
 */
proto.entities.SkillSetsDTO.prototype.getArrList = function() {
  return /** @type{!Array<!proto.entities.SkillSetDTO>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.entities.SkillSetDTO, 1));
};


/**
 * @param {!Array<!proto.entities.SkillSetDTO>} value
 * @return {!proto.entities.SkillSetsDTO} returns this
*/
proto.entities.SkillSetsDTO.prototype.setArrList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.entities.SkillSetDTO=} opt_value
 * @param {number=} opt_index
 * @return {!proto.entities.SkillSetDTO}
 */
proto.entities.SkillSetsDTO.prototype.addArr = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.entities.SkillSetDTO, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.entities.SkillSetsDTO} returns this
 */
proto.entities.SkillSetsDTO.prototype.clearArrList = function() {
  return this.setArrList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entities.SkillImprovementDTO.prototype.toObject = function(opt_includeInstance) {
  return proto.entities.SkillImprovementDTO.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entities.SkillImprovementDTO} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.SkillImprovementDTO.toObject = function(includeInstance, msg) {
  var f, obj = {
    skillimprovementMap: (f = msg.getSkillimprovementMap()) ? f.toObject(includeInstance, undefined) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entities.SkillImprovementDTO}
 */
proto.entities.SkillImprovementDTO.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entities.SkillImprovementDTO;
  return proto.entities.SkillImprovementDTO.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entities.SkillImprovementDTO} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entities.SkillImprovementDTO}
 */
proto.entities.SkillImprovementDTO.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = msg.getSkillimprovementMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readInt32, null, "", 0);
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entities.SkillImprovementDTO.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entities.SkillImprovementDTO.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entities.SkillImprovementDTO} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.SkillImprovementDTO.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSkillimprovementMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeInt32);
  }
};


/**
 * map<string, int32> skillImprovement = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,number>}
 */
proto.entities.SkillImprovementDTO.prototype.getSkillimprovementMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,number>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.entities.SkillImprovementDTO} returns this
 */
proto.entities.SkillImprovementDTO.prototype.clearSkillimprovementMap = function() {
  this.getSkillimprovementMap().clear();
  return this;};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.entities.PersonalityProfileDTO.repeatedFields_ = [9];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entities.PersonalityProfileDTO.prototype.toObject = function(opt_includeInstance) {
  return proto.entities.PersonalityProfileDTO.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entities.PersonalityProfileDTO} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.PersonalityProfileDTO.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    blueprintid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    name: jspb.Message.getFieldWithDefault(msg, 3, ""),
    metadata: (f = msg.getMetadata()) && proto.entities.Metadata.toObject(includeInstance, f),
    user: jspb.Message.getFieldWithDefault(msg, 5, ""),
    campaign: jspb.Message.getFieldWithDefault(msg, 6, ""),
    world: jspb.Message.getFieldWithDefault(msg, 7, ""),
    enneagramtype: jspb.Message.getFieldWithDefault(msg, 8, ""),
    traitsList: jspb.Message.toObjectList(msg.getTraitsList(),
    proto.entities.GenerationInstructionDTO.toObject, includeInstance),
    targetentity: jspb.Message.getFieldWithDefault(msg, 10, ""),
    createdat: jspb.Message.getFieldWithDefault(msg, 11, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entities.PersonalityProfileDTO}
 */
proto.entities.PersonalityProfileDTO.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entities.PersonalityProfileDTO;
  return proto.entities.PersonalityProfileDTO.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entities.PersonalityProfileDTO} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entities.PersonalityProfileDTO}
 */
proto.entities.PersonalityProfileDTO.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBlueprintid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = new proto.entities.Metadata;
      reader.readMessage(value,proto.entities.Metadata.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setUser(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setCampaign(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setWorld(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setEnneagramtype(value);
      break;
    case 9:
      var value = new proto.entities.GenerationInstructionDTO;
      reader.readMessage(value,proto.entities.GenerationInstructionDTO.deserializeBinaryFromReader);
      msg.addTraits(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setTargetentity(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCreatedat(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entities.PersonalityProfileDTO.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entities.PersonalityProfileDTO.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entities.PersonalityProfileDTO} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.PersonalityProfileDTO.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBlueprintid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.entities.Metadata.serializeBinaryToWriter
    );
  }
  f = message.getUser();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getCampaign();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getWorld();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getEnneagramtype();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getTraitsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      9,
      f,
      proto.entities.GenerationInstructionDTO.serializeBinaryToWriter
    );
  }
  f = message.getTargetentity();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getCreatedat();
  if (f !== 0) {
    writer.writeInt32(
      11,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.entities.PersonalityProfileDTO.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.PersonalityProfileDTO} returns this
 */
proto.entities.PersonalityProfileDTO.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string blueprintId = 2;
 * @return {string}
 */
proto.entities.PersonalityProfileDTO.prototype.getBlueprintid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.PersonalityProfileDTO} returns this
 */
proto.entities.PersonalityProfileDTO.prototype.setBlueprintid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.entities.PersonalityProfileDTO.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.PersonalityProfileDTO} returns this
 */
proto.entities.PersonalityProfileDTO.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional Metadata metadata = 4;
 * @return {?proto.entities.Metadata}
 */
proto.entities.PersonalityProfileDTO.prototype.getMetadata = function() {
  return /** @type{?proto.entities.Metadata} */ (
    jspb.Message.getWrapperField(this, proto.entities.Metadata, 4));
};


/**
 * @param {?proto.entities.Metadata|undefined} value
 * @return {!proto.entities.PersonalityProfileDTO} returns this
*/
proto.entities.PersonalityProfileDTO.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.entities.PersonalityProfileDTO} returns this
 */
proto.entities.PersonalityProfileDTO.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.entities.PersonalityProfileDTO.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string user = 5;
 * @return {string}
 */
proto.entities.PersonalityProfileDTO.prototype.getUser = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.PersonalityProfileDTO} returns this
 */
proto.entities.PersonalityProfileDTO.prototype.setUser = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string campaign = 6;
 * @return {string}
 */
proto.entities.PersonalityProfileDTO.prototype.getCampaign = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.PersonalityProfileDTO} returns this
 */
proto.entities.PersonalityProfileDTO.prototype.setCampaign = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string world = 7;
 * @return {string}
 */
proto.entities.PersonalityProfileDTO.prototype.getWorld = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.PersonalityProfileDTO} returns this
 */
proto.entities.PersonalityProfileDTO.prototype.setWorld = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string enneagramType = 8;
 * @return {string}
 */
proto.entities.PersonalityProfileDTO.prototype.getEnneagramtype = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.PersonalityProfileDTO} returns this
 */
proto.entities.PersonalityProfileDTO.prototype.setEnneagramtype = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * repeated GenerationInstructionDTO traits = 9;
 * @return {!Array<!proto.entities.GenerationInstructionDTO>}
 */
proto.entities.PersonalityProfileDTO.prototype.getTraitsList = function() {
  return /** @type{!Array<!proto.entities.GenerationInstructionDTO>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.entities.GenerationInstructionDTO, 9));
};


/**
 * @param {!Array<!proto.entities.GenerationInstructionDTO>} value
 * @return {!proto.entities.PersonalityProfileDTO} returns this
*/
proto.entities.PersonalityProfileDTO.prototype.setTraitsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 9, value);
};


/**
 * @param {!proto.entities.GenerationInstructionDTO=} opt_value
 * @param {number=} opt_index
 * @return {!proto.entities.GenerationInstructionDTO}
 */
proto.entities.PersonalityProfileDTO.prototype.addTraits = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 9, opt_value, proto.entities.GenerationInstructionDTO, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.entities.PersonalityProfileDTO} returns this
 */
proto.entities.PersonalityProfileDTO.prototype.clearTraitsList = function() {
  return this.setTraitsList([]);
};


/**
 * optional string targetEntity = 10;
 * @return {string}
 */
proto.entities.PersonalityProfileDTO.prototype.getTargetentity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.PersonalityProfileDTO} returns this
 */
proto.entities.PersonalityProfileDTO.prototype.setTargetentity = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional int32 createdAt = 11;
 * @return {number}
 */
proto.entities.PersonalityProfileDTO.prototype.getCreatedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.entities.PersonalityProfileDTO} returns this
 */
proto.entities.PersonalityProfileDTO.prototype.setCreatedat = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.entities.PersonalityProfilesDTO.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entities.PersonalityProfilesDTO.prototype.toObject = function(opt_includeInstance) {
  return proto.entities.PersonalityProfilesDTO.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entities.PersonalityProfilesDTO} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.PersonalityProfilesDTO.toObject = function(includeInstance, msg) {
  var f, obj = {
    arrList: jspb.Message.toObjectList(msg.getArrList(),
    proto.entities.PersonalityProfileDTO.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entities.PersonalityProfilesDTO}
 */
proto.entities.PersonalityProfilesDTO.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entities.PersonalityProfilesDTO;
  return proto.entities.PersonalityProfilesDTO.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entities.PersonalityProfilesDTO} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entities.PersonalityProfilesDTO}
 */
proto.entities.PersonalityProfilesDTO.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.entities.PersonalityProfileDTO;
      reader.readMessage(value,proto.entities.PersonalityProfileDTO.deserializeBinaryFromReader);
      msg.addArr(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entities.PersonalityProfilesDTO.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entities.PersonalityProfilesDTO.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entities.PersonalityProfilesDTO} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.PersonalityProfilesDTO.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getArrList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.entities.PersonalityProfileDTO.serializeBinaryToWriter
    );
  }
};


/**
 * repeated PersonalityProfileDTO arr = 1;
 * @return {!Array<!proto.entities.PersonalityProfileDTO>}
 */
proto.entities.PersonalityProfilesDTO.prototype.getArrList = function() {
  return /** @type{!Array<!proto.entities.PersonalityProfileDTO>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.entities.PersonalityProfileDTO, 1));
};


/**
 * @param {!Array<!proto.entities.PersonalityProfileDTO>} value
 * @return {!proto.entities.PersonalityProfilesDTO} returns this
*/
proto.entities.PersonalityProfilesDTO.prototype.setArrList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.entities.PersonalityProfileDTO=} opt_value
 * @param {number=} opt_index
 * @return {!proto.entities.PersonalityProfileDTO}
 */
proto.entities.PersonalityProfilesDTO.prototype.addArr = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.entities.PersonalityProfileDTO, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.entities.PersonalityProfilesDTO} returns this
 */
proto.entities.PersonalityProfilesDTO.prototype.clearArrList = function() {
  return this.setArrList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entities.NeedDTO.prototype.toObject = function(opt_includeInstance) {
  return proto.entities.NeedDTO.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entities.NeedDTO} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.NeedDTO.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    blueprintid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    name: jspb.Message.getFieldWithDefault(msg, 3, ""),
    metadata: (f = msg.getMetadata()) && proto.entities.Metadata.toObject(includeInstance, f),
    user: jspb.Message.getFieldWithDefault(msg, 5, ""),
    campaign: jspb.Message.getFieldWithDefault(msg, 6, ""),
    world: jspb.Message.getFieldWithDefault(msg, 7, ""),
    description: jspb.Message.getFieldWithDefault(msg, 8, ""),
    type: jspb.Message.getFieldWithDefault(msg, 9, 0),
    layer: jspb.Message.getFieldWithDefault(msg, 10, 0),
    targetentity: jspb.Message.getFieldWithDefault(msg, 11, ""),
    createdat: jspb.Message.getFieldWithDefault(msg, 12, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entities.NeedDTO}
 */
proto.entities.NeedDTO.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entities.NeedDTO;
  return proto.entities.NeedDTO.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entities.NeedDTO} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entities.NeedDTO}
 */
proto.entities.NeedDTO.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBlueprintid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = new proto.entities.Metadata;
      reader.readMessage(value,proto.entities.Metadata.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setUser(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setCampaign(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setWorld(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 9:
      var value = /** @type {!proto.entities.NeedTypeEnumDTO} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 10:
      var value = /** @type {!proto.entities.NeedLayerEnumDTO} */ (reader.readEnum());
      msg.setLayer(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setTargetentity(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCreatedat(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entities.NeedDTO.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entities.NeedDTO.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entities.NeedDTO} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.NeedDTO.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBlueprintid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.entities.Metadata.serializeBinaryToWriter
    );
  }
  f = message.getUser();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getCampaign();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getWorld();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      9,
      f
    );
  }
  f = message.getLayer();
  if (f !== 0.0) {
    writer.writeEnum(
      10,
      f
    );
  }
  f = message.getTargetentity();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getCreatedat();
  if (f !== 0) {
    writer.writeInt32(
      12,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.entities.NeedDTO.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.NeedDTO} returns this
 */
proto.entities.NeedDTO.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string blueprintId = 2;
 * @return {string}
 */
proto.entities.NeedDTO.prototype.getBlueprintid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.NeedDTO} returns this
 */
proto.entities.NeedDTO.prototype.setBlueprintid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.entities.NeedDTO.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.NeedDTO} returns this
 */
proto.entities.NeedDTO.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional Metadata metadata = 4;
 * @return {?proto.entities.Metadata}
 */
proto.entities.NeedDTO.prototype.getMetadata = function() {
  return /** @type{?proto.entities.Metadata} */ (
    jspb.Message.getWrapperField(this, proto.entities.Metadata, 4));
};


/**
 * @param {?proto.entities.Metadata|undefined} value
 * @return {!proto.entities.NeedDTO} returns this
*/
proto.entities.NeedDTO.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.entities.NeedDTO} returns this
 */
proto.entities.NeedDTO.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.entities.NeedDTO.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string user = 5;
 * @return {string}
 */
proto.entities.NeedDTO.prototype.getUser = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.NeedDTO} returns this
 */
proto.entities.NeedDTO.prototype.setUser = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string campaign = 6;
 * @return {string}
 */
proto.entities.NeedDTO.prototype.getCampaign = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.NeedDTO} returns this
 */
proto.entities.NeedDTO.prototype.setCampaign = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string world = 7;
 * @return {string}
 */
proto.entities.NeedDTO.prototype.getWorld = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.NeedDTO} returns this
 */
proto.entities.NeedDTO.prototype.setWorld = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string description = 8;
 * @return {string}
 */
proto.entities.NeedDTO.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.NeedDTO} returns this
 */
proto.entities.NeedDTO.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional NeedTypeEnumDTO type = 9;
 * @return {!proto.entities.NeedTypeEnumDTO}
 */
proto.entities.NeedDTO.prototype.getType = function() {
  return /** @type {!proto.entities.NeedTypeEnumDTO} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {!proto.entities.NeedTypeEnumDTO} value
 * @return {!proto.entities.NeedDTO} returns this
 */
proto.entities.NeedDTO.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 9, value);
};


/**
 * optional NeedLayerEnumDTO layer = 10;
 * @return {!proto.entities.NeedLayerEnumDTO}
 */
proto.entities.NeedDTO.prototype.getLayer = function() {
  return /** @type {!proto.entities.NeedLayerEnumDTO} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {!proto.entities.NeedLayerEnumDTO} value
 * @return {!proto.entities.NeedDTO} returns this
 */
proto.entities.NeedDTO.prototype.setLayer = function(value) {
  return jspb.Message.setProto3EnumField(this, 10, value);
};


/**
 * optional string targetEntity = 11;
 * @return {string}
 */
proto.entities.NeedDTO.prototype.getTargetentity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.NeedDTO} returns this
 */
proto.entities.NeedDTO.prototype.setTargetentity = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional int32 createdAt = 12;
 * @return {number}
 */
proto.entities.NeedDTO.prototype.getCreatedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.entities.NeedDTO} returns this
 */
proto.entities.NeedDTO.prototype.setCreatedat = function(value) {
  return jspb.Message.setProto3IntField(this, 12, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.entities.NeedsDTO.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entities.NeedsDTO.prototype.toObject = function(opt_includeInstance) {
  return proto.entities.NeedsDTO.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entities.NeedsDTO} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.NeedsDTO.toObject = function(includeInstance, msg) {
  var f, obj = {
    arrList: jspb.Message.toObjectList(msg.getArrList(),
    proto.entities.NeedDTO.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entities.NeedsDTO}
 */
proto.entities.NeedsDTO.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entities.NeedsDTO;
  return proto.entities.NeedsDTO.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entities.NeedsDTO} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entities.NeedsDTO}
 */
proto.entities.NeedsDTO.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.entities.NeedDTO;
      reader.readMessage(value,proto.entities.NeedDTO.deserializeBinaryFromReader);
      msg.addArr(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entities.NeedsDTO.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entities.NeedsDTO.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entities.NeedsDTO} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.NeedsDTO.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getArrList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.entities.NeedDTO.serializeBinaryToWriter
    );
  }
};


/**
 * repeated NeedDTO arr = 1;
 * @return {!Array<!proto.entities.NeedDTO>}
 */
proto.entities.NeedsDTO.prototype.getArrList = function() {
  return /** @type{!Array<!proto.entities.NeedDTO>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.entities.NeedDTO, 1));
};


/**
 * @param {!Array<!proto.entities.NeedDTO>} value
 * @return {!proto.entities.NeedsDTO} returns this
*/
proto.entities.NeedsDTO.prototype.setArrList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.entities.NeedDTO=} opt_value
 * @param {number=} opt_index
 * @return {!proto.entities.NeedDTO}
 */
proto.entities.NeedsDTO.prototype.addArr = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.entities.NeedDTO, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.entities.NeedsDTO} returns this
 */
proto.entities.NeedsDTO.prototype.clearArrList = function() {
  return this.setArrList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.entities.UserDTO.repeatedFields_ = [2,3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entities.UserDTO.prototype.toObject = function(opt_includeInstance) {
  return proto.entities.UserDTO.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entities.UserDTO} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.UserDTO.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    worldsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    campaignsList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    account: jspb.Message.getFieldWithDefault(msg, 4, ""),
    createdat: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entities.UserDTO}
 */
proto.entities.UserDTO.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entities.UserDTO;
  return proto.entities.UserDTO.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entities.UserDTO} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entities.UserDTO}
 */
proto.entities.UserDTO.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addWorlds(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addCampaigns(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccount(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCreatedat(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entities.UserDTO.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entities.UserDTO.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entities.UserDTO} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.UserDTO.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getWorldsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getCampaignsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = message.getAccount();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getCreatedat();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.entities.UserDTO.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.UserDTO} returns this
 */
proto.entities.UserDTO.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string worlds = 2;
 * @return {!Array<string>}
 */
proto.entities.UserDTO.prototype.getWorldsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.entities.UserDTO} returns this
 */
proto.entities.UserDTO.prototype.setWorldsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.entities.UserDTO} returns this
 */
proto.entities.UserDTO.prototype.addWorlds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.entities.UserDTO} returns this
 */
proto.entities.UserDTO.prototype.clearWorldsList = function() {
  return this.setWorldsList([]);
};


/**
 * repeated string campaigns = 3;
 * @return {!Array<string>}
 */
proto.entities.UserDTO.prototype.getCampaignsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.entities.UserDTO} returns this
 */
proto.entities.UserDTO.prototype.setCampaignsList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.entities.UserDTO} returns this
 */
proto.entities.UserDTO.prototype.addCampaigns = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.entities.UserDTO} returns this
 */
proto.entities.UserDTO.prototype.clearCampaignsList = function() {
  return this.setCampaignsList([]);
};


/**
 * optional string account = 4;
 * @return {string}
 */
proto.entities.UserDTO.prototype.getAccount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.UserDTO} returns this
 */
proto.entities.UserDTO.prototype.setAccount = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int32 createdAt = 5;
 * @return {number}
 */
proto.entities.UserDTO.prototype.getCreatedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.entities.UserDTO} returns this
 */
proto.entities.UserDTO.prototype.setCreatedat = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.entities.UsersDTO.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entities.UsersDTO.prototype.toObject = function(opt_includeInstance) {
  return proto.entities.UsersDTO.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entities.UsersDTO} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.UsersDTO.toObject = function(includeInstance, msg) {
  var f, obj = {
    arrList: jspb.Message.toObjectList(msg.getArrList(),
    proto.entities.UserDTO.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entities.UsersDTO}
 */
proto.entities.UsersDTO.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entities.UsersDTO;
  return proto.entities.UsersDTO.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entities.UsersDTO} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entities.UsersDTO}
 */
proto.entities.UsersDTO.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.entities.UserDTO;
      reader.readMessage(value,proto.entities.UserDTO.deserializeBinaryFromReader);
      msg.addArr(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entities.UsersDTO.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entities.UsersDTO.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entities.UsersDTO} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.UsersDTO.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getArrList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.entities.UserDTO.serializeBinaryToWriter
    );
  }
};


/**
 * repeated UserDTO arr = 1;
 * @return {!Array<!proto.entities.UserDTO>}
 */
proto.entities.UsersDTO.prototype.getArrList = function() {
  return /** @type{!Array<!proto.entities.UserDTO>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.entities.UserDTO, 1));
};


/**
 * @param {!Array<!proto.entities.UserDTO>} value
 * @return {!proto.entities.UsersDTO} returns this
*/
proto.entities.UsersDTO.prototype.setArrList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.entities.UserDTO=} opt_value
 * @param {number=} opt_index
 * @return {!proto.entities.UserDTO}
 */
proto.entities.UsersDTO.prototype.addArr = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.entities.UserDTO, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.entities.UsersDTO} returns this
 */
proto.entities.UsersDTO.prototype.clearArrList = function() {
  return this.setArrList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entities.AccountDTO.prototype.toObject = function(opt_includeInstance) {
  return proto.entities.AccountDTO.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entities.AccountDTO} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.AccountDTO.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    username: jspb.Message.getFieldWithDefault(msg, 2, ""),
    email: jspb.Message.getFieldWithDefault(msg, 3, ""),
    role: jspb.Message.getFieldWithDefault(msg, 4, ""),
    user: jspb.Message.getFieldWithDefault(msg, 5, ""),
    preferences: (f = msg.getPreferences()) && proto.entities.PreferencesDTO.toObject(includeInstance, f),
    createdat: jspb.Message.getFieldWithDefault(msg, 7, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entities.AccountDTO}
 */
proto.entities.AccountDTO.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entities.AccountDTO;
  return proto.entities.AccountDTO.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entities.AccountDTO} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entities.AccountDTO}
 */
proto.entities.AccountDTO.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsername(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setRole(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setUser(value);
      break;
    case 6:
      var value = new proto.entities.PreferencesDTO;
      reader.readMessage(value,proto.entities.PreferencesDTO.deserializeBinaryFromReader);
      msg.setPreferences(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCreatedat(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entities.AccountDTO.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entities.AccountDTO.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entities.AccountDTO} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.AccountDTO.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUsername();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getRole();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getUser();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getPreferences();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.entities.PreferencesDTO.serializeBinaryToWriter
    );
  }
  f = message.getCreatedat();
  if (f !== 0) {
    writer.writeInt32(
      7,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.entities.AccountDTO.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.AccountDTO} returns this
 */
proto.entities.AccountDTO.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string username = 2;
 * @return {string}
 */
proto.entities.AccountDTO.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.AccountDTO} returns this
 */
proto.entities.AccountDTO.prototype.setUsername = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string email = 3;
 * @return {string}
 */
proto.entities.AccountDTO.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.AccountDTO} returns this
 */
proto.entities.AccountDTO.prototype.setEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string role = 4;
 * @return {string}
 */
proto.entities.AccountDTO.prototype.getRole = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.AccountDTO} returns this
 */
proto.entities.AccountDTO.prototype.setRole = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string user = 5;
 * @return {string}
 */
proto.entities.AccountDTO.prototype.getUser = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.AccountDTO} returns this
 */
proto.entities.AccountDTO.prototype.setUser = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional PreferencesDTO preferences = 6;
 * @return {?proto.entities.PreferencesDTO}
 */
proto.entities.AccountDTO.prototype.getPreferences = function() {
  return /** @type{?proto.entities.PreferencesDTO} */ (
    jspb.Message.getWrapperField(this, proto.entities.PreferencesDTO, 6));
};


/**
 * @param {?proto.entities.PreferencesDTO|undefined} value
 * @return {!proto.entities.AccountDTO} returns this
*/
proto.entities.AccountDTO.prototype.setPreferences = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.entities.AccountDTO} returns this
 */
proto.entities.AccountDTO.prototype.clearPreferences = function() {
  return this.setPreferences(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.entities.AccountDTO.prototype.hasPreferences = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional int32 createdAt = 7;
 * @return {number}
 */
proto.entities.AccountDTO.prototype.getCreatedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.entities.AccountDTO} returns this
 */
proto.entities.AccountDTO.prototype.setCreatedat = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entities.PreferencesDTO.prototype.toObject = function(opt_includeInstance) {
  return proto.entities.PreferencesDTO.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entities.PreferencesDTO} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.PreferencesDTO.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entities.PreferencesDTO}
 */
proto.entities.PreferencesDTO.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entities.PreferencesDTO;
  return proto.entities.PreferencesDTO.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entities.PreferencesDTO} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entities.PreferencesDTO}
 */
proto.entities.PreferencesDTO.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entities.PreferencesDTO.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entities.PreferencesDTO.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entities.PreferencesDTO} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.PreferencesDTO.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entities.WorldSettings.prototype.toObject = function(opt_includeInstance) {
  return proto.entities.WorldSettings.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entities.WorldSettings} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.WorldSettings.toObject = function(includeInstance, msg) {
  var f, obj = {
    settingsMap: (f = msg.getSettingsMap()) ? f.toObject(includeInstance, undefined) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entities.WorldSettings}
 */
proto.entities.WorldSettings.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entities.WorldSettings;
  return proto.entities.WorldSettings.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entities.WorldSettings} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entities.WorldSettings}
 */
proto.entities.WorldSettings.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = msg.getSettingsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entities.WorldSettings.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entities.WorldSettings.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entities.WorldSettings} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.WorldSettings.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSettingsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
};


/**
 * map<string, string> settings = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.entities.WorldSettings.prototype.getSettingsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.entities.WorldSettings} returns this
 */
proto.entities.WorldSettings.prototype.clearSettingsMap = function() {
  this.getSettingsMap().clear();
  return this;};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.entities.WorldDTO.repeatedFields_ = [8];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entities.WorldDTO.prototype.toObject = function(opt_includeInstance) {
  return proto.entities.WorldDTO.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entities.WorldDTO} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.WorldDTO.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    description: jspb.Message.getFieldWithDefault(msg, 3, ""),
    settings: (f = msg.getSettings()) && proto.entities.WorldSettings.toObject(includeInstance, f),
    frozen: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    createdat: jspb.Message.getFieldWithDefault(msg, 6, 0),
    user: jspb.Message.getFieldWithDefault(msg, 7, ""),
    campaignsList: (f = jspb.Message.getRepeatedField(msg, 8)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entities.WorldDTO}
 */
proto.entities.WorldDTO.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entities.WorldDTO;
  return proto.entities.WorldDTO.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entities.WorldDTO} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entities.WorldDTO}
 */
proto.entities.WorldDTO.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 4:
      var value = new proto.entities.WorldSettings;
      reader.readMessage(value,proto.entities.WorldSettings.deserializeBinaryFromReader);
      msg.setSettings(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setFrozen(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCreatedat(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setUser(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.addCampaigns(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entities.WorldDTO.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entities.WorldDTO.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entities.WorldDTO} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.WorldDTO.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getSettings();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.entities.WorldSettings.serializeBinaryToWriter
    );
  }
  f = message.getFrozen();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getCreatedat();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getUser();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getCampaignsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      8,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.entities.WorldDTO.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.WorldDTO} returns this
 */
proto.entities.WorldDTO.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.entities.WorldDTO.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.WorldDTO} returns this
 */
proto.entities.WorldDTO.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string description = 3;
 * @return {string}
 */
proto.entities.WorldDTO.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.WorldDTO} returns this
 */
proto.entities.WorldDTO.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional WorldSettings settings = 4;
 * @return {?proto.entities.WorldSettings}
 */
proto.entities.WorldDTO.prototype.getSettings = function() {
  return /** @type{?proto.entities.WorldSettings} */ (
    jspb.Message.getWrapperField(this, proto.entities.WorldSettings, 4));
};


/**
 * @param {?proto.entities.WorldSettings|undefined} value
 * @return {!proto.entities.WorldDTO} returns this
*/
proto.entities.WorldDTO.prototype.setSettings = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.entities.WorldDTO} returns this
 */
proto.entities.WorldDTO.prototype.clearSettings = function() {
  return this.setSettings(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.entities.WorldDTO.prototype.hasSettings = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bool frozen = 5;
 * @return {boolean}
 */
proto.entities.WorldDTO.prototype.getFrozen = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.entities.WorldDTO} returns this
 */
proto.entities.WorldDTO.prototype.setFrozen = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional int32 createdAt = 6;
 * @return {number}
 */
proto.entities.WorldDTO.prototype.getCreatedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.entities.WorldDTO} returns this
 */
proto.entities.WorldDTO.prototype.setCreatedat = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional string user = 7;
 * @return {string}
 */
proto.entities.WorldDTO.prototype.getUser = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.WorldDTO} returns this
 */
proto.entities.WorldDTO.prototype.setUser = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * repeated string campaigns = 8;
 * @return {!Array<string>}
 */
proto.entities.WorldDTO.prototype.getCampaignsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 8));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.entities.WorldDTO} returns this
 */
proto.entities.WorldDTO.prototype.setCampaignsList = function(value) {
  return jspb.Message.setField(this, 8, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.entities.WorldDTO} returns this
 */
proto.entities.WorldDTO.prototype.addCampaigns = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 8, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.entities.WorldDTO} returns this
 */
proto.entities.WorldDTO.prototype.clearCampaignsList = function() {
  return this.setCampaignsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.entities.WorldsDTO.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entities.WorldsDTO.prototype.toObject = function(opt_includeInstance) {
  return proto.entities.WorldsDTO.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entities.WorldsDTO} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.WorldsDTO.toObject = function(includeInstance, msg) {
  var f, obj = {
    arrList: jspb.Message.toObjectList(msg.getArrList(),
    proto.entities.WorldDTO.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entities.WorldsDTO}
 */
proto.entities.WorldsDTO.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entities.WorldsDTO;
  return proto.entities.WorldsDTO.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entities.WorldsDTO} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entities.WorldsDTO}
 */
proto.entities.WorldsDTO.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.entities.WorldDTO;
      reader.readMessage(value,proto.entities.WorldDTO.deserializeBinaryFromReader);
      msg.addArr(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entities.WorldsDTO.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entities.WorldsDTO.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entities.WorldsDTO} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.WorldsDTO.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getArrList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.entities.WorldDTO.serializeBinaryToWriter
    );
  }
};


/**
 * repeated WorldDTO arr = 1;
 * @return {!Array<!proto.entities.WorldDTO>}
 */
proto.entities.WorldsDTO.prototype.getArrList = function() {
  return /** @type{!Array<!proto.entities.WorldDTO>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.entities.WorldDTO, 1));
};


/**
 * @param {!Array<!proto.entities.WorldDTO>} value
 * @return {!proto.entities.WorldsDTO} returns this
*/
proto.entities.WorldsDTO.prototype.setArrList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.entities.WorldDTO=} opt_value
 * @param {number=} opt_index
 * @return {!proto.entities.WorldDTO}
 */
proto.entities.WorldsDTO.prototype.addArr = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.entities.WorldDTO, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.entities.WorldsDTO} returns this
 */
proto.entities.WorldsDTO.prototype.clearArrList = function() {
  return this.setArrList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entities.CampaignDTO.prototype.toObject = function(opt_includeInstance) {
  return proto.entities.CampaignDTO.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entities.CampaignDTO} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.CampaignDTO.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    description: jspb.Message.getFieldWithDefault(msg, 3, ""),
    dynamicstateMap: (f = msg.getDynamicstateMap()) ? f.toObject(includeInstance, undefined) : [],
    createdat: jspb.Message.getFieldWithDefault(msg, 5, ""),
    world: jspb.Message.getFieldWithDefault(msg, 6, ""),
    user: jspb.Message.getFieldWithDefault(msg, 7, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entities.CampaignDTO}
 */
proto.entities.CampaignDTO.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entities.CampaignDTO;
  return proto.entities.CampaignDTO.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entities.CampaignDTO} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entities.CampaignDTO}
 */
proto.entities.CampaignDTO.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 4:
      var value = msg.getDynamicstateMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreatedat(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setWorld(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setUser(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entities.CampaignDTO.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entities.CampaignDTO.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entities.CampaignDTO} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.CampaignDTO.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDynamicstateMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(4, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getCreatedat();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getWorld();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getUser();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.entities.CampaignDTO.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.CampaignDTO} returns this
 */
proto.entities.CampaignDTO.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.entities.CampaignDTO.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.CampaignDTO} returns this
 */
proto.entities.CampaignDTO.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string description = 3;
 * @return {string}
 */
proto.entities.CampaignDTO.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.CampaignDTO} returns this
 */
proto.entities.CampaignDTO.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * map<string, string> dynamicState = 4;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.entities.CampaignDTO.prototype.getDynamicstateMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 4, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.entities.CampaignDTO} returns this
 */
proto.entities.CampaignDTO.prototype.clearDynamicstateMap = function() {
  this.getDynamicstateMap().clear();
  return this;};


/**
 * optional string createdAt = 5;
 * @return {string}
 */
proto.entities.CampaignDTO.prototype.getCreatedat = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.CampaignDTO} returns this
 */
proto.entities.CampaignDTO.prototype.setCreatedat = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string world = 6;
 * @return {string}
 */
proto.entities.CampaignDTO.prototype.getWorld = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.CampaignDTO} returns this
 */
proto.entities.CampaignDTO.prototype.setWorld = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string user = 7;
 * @return {string}
 */
proto.entities.CampaignDTO.prototype.getUser = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.CampaignDTO} returns this
 */
proto.entities.CampaignDTO.prototype.setUser = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.entities.CampaignsDTO.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entities.CampaignsDTO.prototype.toObject = function(opt_includeInstance) {
  return proto.entities.CampaignsDTO.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entities.CampaignsDTO} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.CampaignsDTO.toObject = function(includeInstance, msg) {
  var f, obj = {
    arrList: jspb.Message.toObjectList(msg.getArrList(),
    proto.entities.CampaignDTO.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entities.CampaignsDTO}
 */
proto.entities.CampaignsDTO.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entities.CampaignsDTO;
  return proto.entities.CampaignsDTO.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entities.CampaignsDTO} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entities.CampaignsDTO}
 */
proto.entities.CampaignsDTO.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.entities.CampaignDTO;
      reader.readMessage(value,proto.entities.CampaignDTO.deserializeBinaryFromReader);
      msg.addArr(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entities.CampaignsDTO.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entities.CampaignsDTO.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entities.CampaignsDTO} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.CampaignsDTO.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getArrList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.entities.CampaignDTO.serializeBinaryToWriter
    );
  }
};


/**
 * repeated CampaignDTO arr = 1;
 * @return {!Array<!proto.entities.CampaignDTO>}
 */
proto.entities.CampaignsDTO.prototype.getArrList = function() {
  return /** @type{!Array<!proto.entities.CampaignDTO>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.entities.CampaignDTO, 1));
};


/**
 * @param {!Array<!proto.entities.CampaignDTO>} value
 * @return {!proto.entities.CampaignsDTO} returns this
*/
proto.entities.CampaignsDTO.prototype.setArrList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.entities.CampaignDTO=} opt_value
 * @param {number=} opt_index
 * @return {!proto.entities.CampaignDTO}
 */
proto.entities.CampaignsDTO.prototype.addArr = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.entities.CampaignDTO, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.entities.CampaignsDTO} returns this
 */
proto.entities.CampaignsDTO.prototype.clearArrList = function() {
  return this.setArrList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entities.SearchQueryDTO.prototype.toObject = function(opt_includeInstance) {
  return proto.entities.SearchQueryDTO.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entities.SearchQueryDTO} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.SearchQueryDTO.toObject = function(includeInstance, msg) {
  var f, obj = {
    filters: (f = msg.getFilters()) && proto.entities.QueryFiltersDTO.toObject(includeInstance, f),
    sortby: (f = msg.getSortby()) && proto.entities.SortByDTO.toObject(includeInstance, f),
    page: jspb.Message.getFieldWithDefault(msg, 3, 0),
    pagesize: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entities.SearchQueryDTO}
 */
proto.entities.SearchQueryDTO.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entities.SearchQueryDTO;
  return proto.entities.SearchQueryDTO.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entities.SearchQueryDTO} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entities.SearchQueryDTO}
 */
proto.entities.SearchQueryDTO.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.entities.QueryFiltersDTO;
      reader.readMessage(value,proto.entities.QueryFiltersDTO.deserializeBinaryFromReader);
      msg.setFilters(value);
      break;
    case 2:
      var value = new proto.entities.SortByDTO;
      reader.readMessage(value,proto.entities.SortByDTO.deserializeBinaryFromReader);
      msg.setSortby(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPage(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPagesize(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entities.SearchQueryDTO.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entities.SearchQueryDTO.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entities.SearchQueryDTO} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.SearchQueryDTO.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFilters();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.entities.QueryFiltersDTO.serializeBinaryToWriter
    );
  }
  f = message.getSortby();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.entities.SortByDTO.serializeBinaryToWriter
    );
  }
  f = message.getPage();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getPagesize();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * optional QueryFiltersDTO filters = 1;
 * @return {?proto.entities.QueryFiltersDTO}
 */
proto.entities.SearchQueryDTO.prototype.getFilters = function() {
  return /** @type{?proto.entities.QueryFiltersDTO} */ (
    jspb.Message.getWrapperField(this, proto.entities.QueryFiltersDTO, 1));
};


/**
 * @param {?proto.entities.QueryFiltersDTO|undefined} value
 * @return {!proto.entities.SearchQueryDTO} returns this
*/
proto.entities.SearchQueryDTO.prototype.setFilters = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.entities.SearchQueryDTO} returns this
 */
proto.entities.SearchQueryDTO.prototype.clearFilters = function() {
  return this.setFilters(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.entities.SearchQueryDTO.prototype.hasFilters = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional SortByDTO sortBy = 2;
 * @return {?proto.entities.SortByDTO}
 */
proto.entities.SearchQueryDTO.prototype.getSortby = function() {
  return /** @type{?proto.entities.SortByDTO} */ (
    jspb.Message.getWrapperField(this, proto.entities.SortByDTO, 2));
};


/**
 * @param {?proto.entities.SortByDTO|undefined} value
 * @return {!proto.entities.SearchQueryDTO} returns this
*/
proto.entities.SearchQueryDTO.prototype.setSortby = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.entities.SearchQueryDTO} returns this
 */
proto.entities.SearchQueryDTO.prototype.clearSortby = function() {
  return this.setSortby(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.entities.SearchQueryDTO.prototype.hasSortby = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 page = 3;
 * @return {number}
 */
proto.entities.SearchQueryDTO.prototype.getPage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.entities.SearchQueryDTO} returns this
 */
proto.entities.SearchQueryDTO.prototype.setPage = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 pageSize = 4;
 * @return {number}
 */
proto.entities.SearchQueryDTO.prototype.getPagesize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.entities.SearchQueryDTO} returns this
 */
proto.entities.SearchQueryDTO.prototype.setPagesize = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entities.QueryFilterDTO.prototype.toObject = function(opt_includeInstance) {
  return proto.entities.QueryFilterDTO.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entities.QueryFilterDTO} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.QueryFilterDTO.toObject = function(includeInstance, msg) {
  var f, obj = {
    field: jspb.Message.getFieldWithDefault(msg, 1, ""),
    operator: jspb.Message.getFieldWithDefault(msg, 2, 0),
    value: (f = msg.getValue()) && proto.entities.QueryFilterValueDTO.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entities.QueryFilterDTO}
 */
proto.entities.QueryFilterDTO.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entities.QueryFilterDTO;
  return proto.entities.QueryFilterDTO.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entities.QueryFilterDTO} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entities.QueryFilterDTO}
 */
proto.entities.QueryFilterDTO.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setField(value);
      break;
    case 2:
      var value = /** @type {!proto.entities.QueryFilterOperatorEnumDTO} */ (reader.readEnum());
      msg.setOperator(value);
      break;
    case 3:
      var value = new proto.entities.QueryFilterValueDTO;
      reader.readMessage(value,proto.entities.QueryFilterValueDTO.deserializeBinaryFromReader);
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entities.QueryFilterDTO.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entities.QueryFilterDTO.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entities.QueryFilterDTO} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.QueryFilterDTO.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getField();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOperator();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getValue();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.entities.QueryFilterValueDTO.serializeBinaryToWriter
    );
  }
};


/**
 * optional string field = 1;
 * @return {string}
 */
proto.entities.QueryFilterDTO.prototype.getField = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.QueryFilterDTO} returns this
 */
proto.entities.QueryFilterDTO.prototype.setField = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional QueryFilterOperatorEnumDTO operator = 2;
 * @return {!proto.entities.QueryFilterOperatorEnumDTO}
 */
proto.entities.QueryFilterDTO.prototype.getOperator = function() {
  return /** @type {!proto.entities.QueryFilterOperatorEnumDTO} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.entities.QueryFilterOperatorEnumDTO} value
 * @return {!proto.entities.QueryFilterDTO} returns this
 */
proto.entities.QueryFilterDTO.prototype.setOperator = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional QueryFilterValueDTO value = 3;
 * @return {?proto.entities.QueryFilterValueDTO}
 */
proto.entities.QueryFilterDTO.prototype.getValue = function() {
  return /** @type{?proto.entities.QueryFilterValueDTO} */ (
    jspb.Message.getWrapperField(this, proto.entities.QueryFilterValueDTO, 3));
};


/**
 * @param {?proto.entities.QueryFilterValueDTO|undefined} value
 * @return {!proto.entities.QueryFilterDTO} returns this
*/
proto.entities.QueryFilterDTO.prototype.setValue = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.entities.QueryFilterDTO} returns this
 */
proto.entities.QueryFilterDTO.prototype.clearValue = function() {
  return this.setValue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.entities.QueryFilterDTO.prototype.hasValue = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.entities.QueryFiltersDTO.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entities.QueryFiltersDTO.prototype.toObject = function(opt_includeInstance) {
  return proto.entities.QueryFiltersDTO.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entities.QueryFiltersDTO} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.QueryFiltersDTO.toObject = function(includeInstance, msg) {
  var f, obj = {
    arrList: jspb.Message.toObjectList(msg.getArrList(),
    proto.entities.QueryFilterDTO.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entities.QueryFiltersDTO}
 */
proto.entities.QueryFiltersDTO.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entities.QueryFiltersDTO;
  return proto.entities.QueryFiltersDTO.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entities.QueryFiltersDTO} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entities.QueryFiltersDTO}
 */
proto.entities.QueryFiltersDTO.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.entities.QueryFilterDTO;
      reader.readMessage(value,proto.entities.QueryFilterDTO.deserializeBinaryFromReader);
      msg.addArr(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entities.QueryFiltersDTO.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entities.QueryFiltersDTO.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entities.QueryFiltersDTO} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.QueryFiltersDTO.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getArrList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.entities.QueryFilterDTO.serializeBinaryToWriter
    );
  }
};


/**
 * repeated QueryFilterDTO arr = 1;
 * @return {!Array<!proto.entities.QueryFilterDTO>}
 */
proto.entities.QueryFiltersDTO.prototype.getArrList = function() {
  return /** @type{!Array<!proto.entities.QueryFilterDTO>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.entities.QueryFilterDTO, 1));
};


/**
 * @param {!Array<!proto.entities.QueryFilterDTO>} value
 * @return {!proto.entities.QueryFiltersDTO} returns this
*/
proto.entities.QueryFiltersDTO.prototype.setArrList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.entities.QueryFilterDTO=} opt_value
 * @param {number=} opt_index
 * @return {!proto.entities.QueryFilterDTO}
 */
proto.entities.QueryFiltersDTO.prototype.addArr = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.entities.QueryFilterDTO, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.entities.QueryFiltersDTO} returns this
 */
proto.entities.QueryFiltersDTO.prototype.clearArrList = function() {
  return this.setArrList([]);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.entities.QueryFilterValueDTO.oneofGroups_ = [[1,2,3]];

/**
 * @enum {number}
 */
proto.entities.QueryFilterValueDTO.ValueCase = {
  VALUE_NOT_SET: 0,
  STRINGVALUE: 1,
  NUMBERVALUE: 2,
  BOOLVALUE: 3
};

/**
 * @return {proto.entities.QueryFilterValueDTO.ValueCase}
 */
proto.entities.QueryFilterValueDTO.prototype.getValueCase = function() {
  return /** @type {proto.entities.QueryFilterValueDTO.ValueCase} */(jspb.Message.computeOneofCase(this, proto.entities.QueryFilterValueDTO.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entities.QueryFilterValueDTO.prototype.toObject = function(opt_includeInstance) {
  return proto.entities.QueryFilterValueDTO.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entities.QueryFilterValueDTO} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.QueryFilterValueDTO.toObject = function(includeInstance, msg) {
  var f, obj = {
    stringvalue: jspb.Message.getFieldWithDefault(msg, 1, ""),
    numbervalue: jspb.Message.getFieldWithDefault(msg, 2, 0),
    boolvalue: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entities.QueryFilterValueDTO}
 */
proto.entities.QueryFilterValueDTO.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entities.QueryFilterValueDTO;
  return proto.entities.QueryFilterValueDTO.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entities.QueryFilterValueDTO} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entities.QueryFilterValueDTO}
 */
proto.entities.QueryFilterValueDTO.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setStringvalue(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNumbervalue(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setBoolvalue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entities.QueryFilterValueDTO.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entities.QueryFilterValueDTO.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entities.QueryFilterValueDTO} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.QueryFilterValueDTO.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional string stringValue = 1;
 * @return {string}
 */
proto.entities.QueryFilterValueDTO.prototype.getStringvalue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.QueryFilterValueDTO} returns this
 */
proto.entities.QueryFilterValueDTO.prototype.setStringvalue = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.entities.QueryFilterValueDTO.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.entities.QueryFilterValueDTO} returns this
 */
proto.entities.QueryFilterValueDTO.prototype.clearStringvalue = function() {
  return jspb.Message.setOneofField(this, 1, proto.entities.QueryFilterValueDTO.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.entities.QueryFilterValueDTO.prototype.hasStringvalue = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 numberValue = 2;
 * @return {number}
 */
proto.entities.QueryFilterValueDTO.prototype.getNumbervalue = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.entities.QueryFilterValueDTO} returns this
 */
proto.entities.QueryFilterValueDTO.prototype.setNumbervalue = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.entities.QueryFilterValueDTO.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.entities.QueryFilterValueDTO} returns this
 */
proto.entities.QueryFilterValueDTO.prototype.clearNumbervalue = function() {
  return jspb.Message.setOneofField(this, 2, proto.entities.QueryFilterValueDTO.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.entities.QueryFilterValueDTO.prototype.hasNumbervalue = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool boolValue = 3;
 * @return {boolean}
 */
proto.entities.QueryFilterValueDTO.prototype.getBoolvalue = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.entities.QueryFilterValueDTO} returns this
 */
proto.entities.QueryFilterValueDTO.prototype.setBoolvalue = function(value) {
  return jspb.Message.setOneofField(this, 3, proto.entities.QueryFilterValueDTO.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.entities.QueryFilterValueDTO} returns this
 */
proto.entities.QueryFilterValueDTO.prototype.clearBoolvalue = function() {
  return jspb.Message.setOneofField(this, 3, proto.entities.QueryFilterValueDTO.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.entities.QueryFilterValueDTO.prototype.hasBoolvalue = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entities.SortByDTO.prototype.toObject = function(opt_includeInstance) {
  return proto.entities.SortByDTO.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entities.SortByDTO} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.SortByDTO.toObject = function(includeInstance, msg) {
  var f, obj = {
    field: jspb.Message.getFieldWithDefault(msg, 1, ""),
    direction: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entities.SortByDTO}
 */
proto.entities.SortByDTO.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entities.SortByDTO;
  return proto.entities.SortByDTO.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entities.SortByDTO} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entities.SortByDTO}
 */
proto.entities.SortByDTO.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setField(value);
      break;
    case 2:
      var value = /** @type {!proto.entities.SortByDirectionEnumDTO} */ (reader.readEnum());
      msg.setDirection(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entities.SortByDTO.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entities.SortByDTO.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entities.SortByDTO} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.SortByDTO.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getField();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDirection();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * optional string field = 1;
 * @return {string}
 */
proto.entities.SortByDTO.prototype.getField = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.entities.SortByDTO} returns this
 */
proto.entities.SortByDTO.prototype.setField = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional SortByDirectionEnumDTO direction = 2;
 * @return {!proto.entities.SortByDirectionEnumDTO}
 */
proto.entities.SortByDTO.prototype.getDirection = function() {
  return /** @type {!proto.entities.SortByDirectionEnumDTO} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.entities.SortByDirectionEnumDTO} value
 * @return {!proto.entities.SortByDTO} returns this
 */
proto.entities.SortByDTO.prototype.setDirection = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * @enum {number}
 */
proto.entities.QueryFilterOperatorEnumDTO = {
  EQUAL: 0,
  NOT_EQUAL: 1,
  GREATER_THAN: 2,
  GREATER_THAN_OR_EQUAL: 3,
  LESS_THAN: 4,
  LESS_THAN_OR_EQUAL: 5,
  CONTAINS: 6,
  REGEX: 7
};

/**
 * @enum {number}
 */
proto.entities.SortByDirectionEnumDTO = {
  ASC: 0,
  DESC: 1
};

/**
 * @enum {number}
 */
proto.entities.EffectTypeEnumDTO = {
  EFFECT_TYPE_DAMAGE: 0,
  EFFECT_TYPE_HEALING: 1,
  EFFECT_TYPE_BUFF: 2,
  EFFECT_TYPE_DEBUFF: 3,
  EFFECT_TYPE_RESISTANCE: 4,
  EFFECT_TYPE_STEALING: 5,
  EFFECT_TYPE_NEUTRAL: 6
};

/**
 * @enum {number}
 */
proto.entities.EffectTargetEnumDTO = {
  EFFECT_TARGET_HEALTH: 0,
  EFFECT_TARGET_STAMINA: 1,
  EFFECT_TARGET_MANA: 2
};

/**
 * @enum {number}
 */
proto.entities.EffectModeEnumDTO = {
  EFFECT_MODE_INSTANT: 0,
  EFFECT_MODE_GRADUAL: 1,
  EFFECT_MODE_PERSISTENT: 2
};

/**
 * @enum {number}
 */
proto.entities.EffectElementEnumDTO = {
  EFFECT_ELEMENT_FIRE: 0,
  EFFECT_ELEMENT_FROST: 1,
  EFFECT_ELEMENT_POISON: 2,
  EFFECT_ELEMENT_SHOCK: 3
};

/**
 * @enum {number}
 */
proto.entities.NeedTypeEnumDTO = {
  NEED_TYPE_DYNAMIC: 0,
  NEED_TYPE_THRESHOLD: 1,
  NEED_TYPE_EXTERNAL: 2
};

/**
 * @enum {number}
 */
proto.entities.NeedLayerEnumDTO = {
  NEED_LAYER_PHYSIOLOGICAL: 0,
  NEED_LAYER_SAFETY: 1,
  NEED_LAYER_BELONGING_AND_LOVE: 2,
  NEED_LAYER_ESTEEM: 3,
  NEED_LAYER_COGNITIVE: 4,
  NEED_LAYER_AESTHETIC: 5,
  NEED_LAYER_SELF_ACTUALIZATION: 6,
  NEED_LAYER_TRANSCENDENCE: 7
};

/**
 * @enum {number}
 */
proto.entities.MemoryTypeEnumDTO = {
  MEMORY_TYPE_GLOBAL: 0,
  MEMORY_TYPE_REGIONAL: 1,
  MEMORY_TYPE_EVENT_RELATED: 2,
  MEMORY_TYPE_HISTORIC: 3,
  MEMORY_TYPE_PERSONAL: 4
};

/**
 * @enum {number}
 */
proto.entities.ConditionEnumDTO = {
  CONDITION_OR: 0,
  CONDITION_ANY: 1,
  CONDITION_AND: 2
};

/**
 * @enum {number}
 */
proto.entities.PresetEnumDTO = {
  PRESET_DEFAULT: 0,
  PRESET_MORROWIND: 1
};

/**
 * @enum {number}
 */
proto.entities.TagSubtypeEnumDTO = {
  TAG_SUBTYPE_MATERIAL: 0,
  TAG_SUBTYPE_CULTURE: 1,
  TAG_SUBTYPE_RELATION: 2,
  TAG_SUBTYPE_FACTION: 3,
  TAG_SUBTYPE_RELIGION: 4,
  TAG_SUBTYPE_WEAPON_QUALITY: 5,
  TAG_SUBTYPE_ARMOR_QUALITY: 6,
  TAG_SUBTYPE_WEAPON_TYPE: 7,
  TAG_SUBTYPE_STATUS: 8,
  TAG_SUBTYPE_QUEST: 9
};

/**
 * @enum {number}
 */
proto.entities.FactStatusEnumDTO = {
  FACT_STATUS_ACCESSIBLE: 0,
  FACT_STATUS_INACCESSIBLE: 1
};

/**
 * @enum {number}
 */
proto.entities.SkillCategoryEnumDTO = {
  SKILL_CATEGORY_CRAFTING: 0,
  SKILL_CATEGORY_MAGIC: 1,
  SKILL_CATEGORY_COMBAT: 2,
  SKILL_CATEGORY_STEALTH: 3,
  SKILL_CATEGORY_SOCIAL: 4
};

/**
 * @enum {number}
 */
proto.entities.DataSourceEnumDTO = {
  DATA_SOURCE_WORLD: 0,
  DATA_SOURCE_CAMPAIGN: 1
};

/**
 * @enum {number}
 */
proto.entities.GenderEnumDTO = {
  GENDER_MALE: 0,
  GENDER_FEMALE: 1
};

/**
 * @enum {number}
 */
proto.entities.ItemActionEnumDTO = {
  ITEM_ACTION_ATTACK: 0,
  ITEM_ACTION_BLOCK: 1,
  ITEM_ACTION_USE: 2
};

/**
 * @enum {number}
 */
proto.entities.TraitTypeEnumDTO = {
  TRAIT_CONGENITAL: 0,
  TRAIT_COPING: 1,
  TRAIT_EDUCATION: 2,
  TRAIT_FAITH: 3,
  TRAIT_HEALTH: 4,
  TRAIT_INFAMY: 5,
  TRAIT_LEVELED: 6,
  TRAIT_LIFESTYLE: 7,
  TRAIT_PERSONALITY: 8,
  TRAIT_PHYSICAL: 9
};

/**
 * @enum {number}
 */
proto.entities.PastExperienceTypeEnumDTO = {
  PAST_EXPERIENCE_CHILD: 0,
  PAST_EXPERIENCE_ADULT: 1
};

/**
 * @enum {number}
 */
proto.entities.DiseaseSeverityEnumDTO = {
  DISEASE_SEVERITY_MILD: 0,
  DISEASE_SEVERITY_MODERATE: 1,
  DISEASE_SEVERITY_SEVERE: 2
};

/**
 * @enum {number}
 */
proto.entities.ItemRequirementTypeEnumDTO = {
  ITEM_REQUIREMENT_SKILL: 0,
  ITEM_REQUIREMENT_ATTRIBUTE: 1
};

goog.object.extend(exports, proto.entities);
