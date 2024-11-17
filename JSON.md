Archetype
``` json
{
    "id": "archetype_id_123123123",
    "name": {
        "en": "Mage",
        "he": "מַג"
    },
    "description": {
        "en": "A wielder of arcane arts specializing in magic.",
        "he": "שׁוֹלֵט בְּאוֹמָנוּיוֹת הַכְּשָׁפִים"
    },
    "playstyle": ["magic-focused", "fragile", "ranged"],
    "default_skills": {
        "alchemy": 10,
        "destruction": 15,
        "enchant": 12
    }
}
```

Education
```json
{
    "id": "education_id_23142564564512341254324",
    "name": {
        "en": "Necromancer",
        "he": "נֶקְרוֹמָנְסֶר"
    },
    "score": 12, // 0-7 *, 8-12 **, 13-17 ***, 18+ ****
    "description": {
        "en": "A master of the dark arts who raises the dead and manipulates life energy.",
        "he": "מַאֲסְטֶר בְּאוֹמָנוּיוֹת הָאַפְלָה, מֵקִים מֵתִים וּמְנַצֵּל חַיִּים"
    },
    "archetype": "archetype_id_123123123",
    "effects": {
        "bonus_skills": {
            "necromancy": 5,
            "alchemy": 2
        },
        "combat_modifiers": {
            "mana_regeneration": 0.1,
            "health_regeneration": -0.05
        }
    }
}
```

Race
```json
{
    "id": "race_id_132143123123",
    "name": {
        "en": "Dunmer",
        "he": "דוּנְמֵר"
    },
    "traits": [
        "Bluish Skin",
        "Red Eyes",
        "Pointy Ears",
        "Rough Voice",
        "Average Height",
        "Slender",
        "Dark Hair"
    ],
    "bonuses": {
        "resist_fire": 0.5,
        "starting_skills": {
            "destruction": 10,
            "sneak": 5
        }
    },
    "relations": {
        "house_affiliation": "house_id_hlaalu"
    }
}
```

items like Common Shirt, Common Pants, travelling Cloak, Iron Sword, Wooden Shield, Iron Helmet, etc. And each one of these have to have some way to show granularity, for example, when applicable: the quality (whether the sword is well made or garbage, etc), some appearance facts as a list of tags, etc. Something that would make one Iron sword different from another Iron Sword. I know that going for the granularity of Borderlands, where there can be millions of unique items, is waaaay overkill, but I would like to have some way to add variability into just Iron Swords and so on. You feel me bruv?
Item
``` json
{
    "id": "item_id_123123123",
    "name": {
        "en": "Iron Sword",
        "he": "חֶרֶב בַּרְזֶל"
    },
    "type": "weapon",
    "subtypes": ["melee", "one-handed"],
    "quality": "well-made", // Options: "poor", "average", "well-made", "masterwork"
    "condition": 80, // Percentage: 0% (broken) to 100% (new)
    "weight": 4.5,
    "volume": 3.0,
    "tags": ["sturdy", "simple", "affordable"],
    "effects": {
        "damage": {
            "base": 10,
            "scaling": "strength"
        },
        "durability_loss_per_use": 0.1
    }
}
```
Item
```json
{
    "id": "item_id_123123123",
    "name": {
        "en": "Minor Healing Potion"
    },
    "type": "potion",
    "weight": 0.5,
    "volume": 0.3,
    "effects": [
        "effect_id_341243214" // Heal Minor Injury
    ]
}
```
Item
``` json
{
    "id": "item_id_2730875298364",
    "name": {
        "en": "Soul Gem"
    },
    "type": "soul_gem",
    "subtypes": ["petty_soul_gem"],
    "weight": 0.2,
    "volume": 0.1,
    "soul": null
}
```
Item
``` json
{
    "id": "item_id_0372465297",
    "name": {
        "en": "Imperial Drake",
    },
    "type": "currency",
    "weight": 0.01,
    "volume": 0.005,
}
```
Item
``` json
{
    "id": "item_id_999888777",
    "name": {
        "en": "Scroll of Healing" // i think the name should be dynamic, based on the linked spell... Or effect if its a spell tone, arrow of fire or poison... Names shouldnt realy be hardcoded like that.
    },
    "type": "scroll",
    "weight": 0.1,
    "volume": 0.05,
    "linked_spell": "spell_id_678678678"
}
```
Item
``` json
{
    "id": "item_id_345345345",
    "name": {
        "en": "Poisoned Arrow"
    },
    "type": "arrow",
    "effects": [
        {
            "effect_id": "effect_id_111222333", // Apply Poison
            "trigger": "on_hit" // Contextual trigger
        }
    ],
    "weight": 0.1,
    "volume": 0.02
}
```
Item
``` json
{ // yeah thats cool to add a strength boost, thats ok, but mainly it should restore hunger. Characters need to eat, drink and sleep, you know?
    "id": "item_id_444555666",
    "name": {
        "en": "Stew of Vitality"
    },
    "type": "food",
    "effects": [
        "effect_id_22334455" // Temporary Strength Boost
    ],
    "duration": 1800 // Lasts for 30 minutes
}
```

Spell
``` json
{
    "id": "spell_id_678678678",
    "name": {
        "en": "Cure Wounds"
    },
    "type": "spell",
    "mana_cost": 25,
    "cast_time": 2, // Seconds to cast
    "effects": [
        "effect_id_341243214", // Heal Minor Injury
        "effect_id_55667788" // Heal Fatigue
    ]
}
```

Effect
``` json
{
    "id": "effect_id_341243214",
    "name": {
        "en": "Heal Minor Injury"
    },
    "type": "status_modifier", // What this effect modifies
    "target_tags": {
        "remove": ["minor_injury"], // Tags to remove
        "add": ["refreshed"] // Tags to add (optional)
    },
    "target_attributes": {}, // Empty here since it only targets tags
    "duration": 0, // 0 = Instant; for buffs, use a duration in seconds
    "stackable": false
}
```
Effect
``` json
{
    "id": "effect_id_987654321",
    "name": {
        "en": "Restore Mana"
    },
    "type": "attribute_modifier",
    "target_tags": {}, // Empty here since it doesn’t modify tags
    "target_attributes": {
        "mana": {
            "add": 30,
            "max": 120 // Optional for context
        }
    },
    "duration": 0, // Instant
    "stackable": true
}
```
Effect
``` json
{
    "id": "effect_id_987654321",
    "name": {
        "en": "Stamina Restoration"
    },
    "type": "attribute_modifier",
    "target_attributes": {
        "stamina": {
            "add": 30,
        }
    },
    "duration": 10, // takes 10 seconds to take full effect
    "stackable": false
}
```

Birthsign
```json
{
    "id": "birthsign_id_123123123123",
    "name": {
        "en": "The Mage"
    }
}
```

Tag
```json

```

Memory
``` json
{
    "id": "memory_id_312413123",
    "type": ["observation", "event"], // Categories for filtering
    "description": {
        "en": "The character observed several guards discussing the night shift. They mentioned nothing significant happened tonight."
    },
    "related_characters": ["npc_id_234234234", "npc_id_4534234234"], // Characters involved in the memory
    "related_events": ["quest_id_25434652342341"], // Quests or world events tied to this memory
    "term": "short", // Can be "short", "medium", or "long"
    "importance": "low", // Can be "low", "medium", or "high"
    "created_date": 1731693561, // Timestamp
    "last_referenced": 1731695561, // Timestamp for pruning purposes
    "tags": ["guards", "conversation"] // Metadata for context
}

```

Mode
``` json
{
    "id": "mode_id_123124123",
    "name": {
        "en": "Ironman" // "Ironman", "Freeform"
    }
}
```

Skill
``` json
{
    "id": "skill_id_123456789",
    "name": {
        "en": "Alchemy"
    },
    "description": {
        "en": "The art of brewing potions, tinctures, and poisons using ingredients found in the wild."
    },
    "effects_per_point": {
        "potion_potency": 0.01, // Each point increases potion potency by 1%
        "poison_duration": 0.5  // Each point increases poison duration by 0.5 seconds
    },
    "max_level": 100
}
```
Skill
``` json
{
    "id": "skill_id_987654321",
    "name": {
        "en": "Marksman"
    },
    "description": {
        "en": "Proficiency with bows, crossbows, and throwing weapons, emphasizing precision and damage."
    },
    "effects_per_point": {
        "ranged_accuracy": 0.005, // Each point increases accuracy by 0.5%
        "critical_hit_chance": 0.002 // Each point increases critical hit chance by 0.2%
    },
    "max_level": 100
}
```
Skill
``` json
{
    "id": "skill_id_112233445",
    "name": {
        "en": "Sneak"
    },
    "description": {
        "en": "The ability to move silently and remain undetected."
    },
    "effects_per_point": {
        "detection_radius_reduction": 0.01, // Each point reduces detection radius by 1%
        "backstab_damage_bonus": 0.005 // Each point increases backstab damage by 0.5%
    },
    "max_level": 100
}
```

Quest
``` json
{
        "id": "quest_id_342341312312",
        "name": {
            "en": "Find the Lost Heirloom"
        },
        "status": "in_progress", // "not_started", "in_progress", "completed", "failed"
        "progress": [
            {
                "step": 1,
                "description": {
                    "en": "Spoke to the quest giver."
                },
                "related_memories": ["memory_id_12345"], // Links to memories
                "completed": true
            },
            {
                "step": 2,
                "description": {
                    "en": "Traveled to the bandit cave."
                },
                "completed": false
            }
        ],
        "conditions": {
            "success": ["item_id_12345 must be in inventory", "npc_id_54321 disposition > 50"],
            "failure": ["time_limit_exceeded", "npc_id_54321 dies"]
        },
        "deadline": 1732693561, // Optional timestamp for deadlines
        "rewards": {
            "gold": 500,
            "reputation": 20
        }
    }
```

## FINAL

```json
{
  "character_id": "character_id_412314132123",
  "metadata": {
    "mode": "mode_id_123124123",
    "createdBy": "user_id_24124513452345",
    "creationDate": "2024-11-15T12:00:00Z"
  },
  "basicInfo": {
    "name": "Nerevarine",
    "race": "race_id_132143123123",
    "gender": "Male",
    "birthsign": "birthsign_id_123123123123",
    "education": "education_id_23142564564512341254324",
    "birth_year": "3E 401",
    "birth_month": "second_seed",
    "birth_day": 14,
  },
  "attributes": [ // attributes heavily inspired by CK3
    "Brave",
    "Zealot",
    "Sickly",
    "Greedy",
    "Severely Injured",
    "Maimed",
  ],
  "skills": {
    "skill_id_123456789": 25, // Alchemy
    "skill_id_987654321": 40, // Marksman
    "skill_id_112233445": 15  // Sneak
}
  "inventory": {
    "equipment": {
        "body": {
            "head": "item_id_412134123", // e.g. "Iron Helm"
            "chest": "item_id_452235234", // e.g. "Chitin Cuirass"
            "left_shoulder": null,
            "right_shoulder": null,
            "left_glove": null,
            "right_glove": null,
            "greaves": "item_id_45636234", // e.g. "Netch Leather Pants"
            "footwear": "item_id_354623413", // e.g. "Common Shoes"
            "shirt": "item_id_63452342462", // e.g. "Common Shirt"
            "pants": "item_id_3642534", // e.g. "Common Pants"
            "cloak": "item_id_235245234" // e.g. "Traveling Cloak"
        },
        "weapons": {
            "mainHand": "item_id_1423513423413", // e.g. "Steel Longsword"
            "offHand": null,
            "ranged": "item_id_23546345234" // e.g. "Bonemold Bow"
        },
        "accessories": ["item_id_35746735636"] // e.g. "Silver Ring of Healing"
    },
    "backpack": {
        "maxWeight": 50,
        "sections": [
            {
                "type": "main_section",
                "name": {
                    "en": "Main Section"
                },
                "maxVolume": 60,
                "items": [
                    {
                        "id": "item_id_123123123",
                        "quantity": 1,
                    },
                    {
                        "id": "item_id_312134123124",
                        "quantity": 1,
                    },
                    
                ]
            },
            {
                "type": "side_pocket",
                "name": {
                    "en": {
                        "Left Pocket"
                    }
                },
                "maxVolume": 20,
                "items": []
            },
            {
                "type": "side_pocket",
                "name": {
                    "en": {
                        "Right Pocket"
                    }
                },
                "maxVolume": 20,
                "items": []
            },
        ]
    }
  },
  "personalityTraits": {
    "bravery": 70,
    "intelligence": 80,
    "temperament": "Calm",
    "honesty": 60,
    "greed": 20,
    "loyalty": 50
  },
  "memories": [ // so I am thinking this. If memories have a term and importance, then periodically I would launch a pruning of memories. Something like that. What do you think? Like, once every 1 hour it would prune very short term memories, once a day memories that were slightly more important, and so on. Of course memories can suddenly become more important, and move from short term memory to long term memory, etc. Lets take human memory as inspiration for the mechanics here, ok? Something simple but also realistic. Keep in mind that I will be simulating dialogue in the future projects and have quests, so this i simportant. Also it would be nice to have a mechanic to record any memory into a journal, you know? A journal that is an item in the backpack that could be ruined, lost, thrown away, etc. I know Chat GPT stores memories, so maybe we could also take inspiration from how they do it?
    "memory_id_143235245234"
  ],
  "relationships": { // this is clearly just data returned from backend to frontend, computed based on traits, affiliation, memories, etc. This is clearly not something to be stored on the back.
    "character_id_6456734523423": {
        "modifiers": [
            {
                "type": "trait",
                "description": "Brave vs. Craven",
                "value": -10
            },
            {
                "type": "affiliation",
                "description": "Same House Hlaalu",
                "value": 15
            },
            {
                "type": "memory",
                "description": "Helped stand up after falling into mud",
                "value": 10,
                "duration_days": 30
            }
        ],
    }
  },
  "quests": [
    "active": ["quest_id_342341312312"],
    "completed": [],
    "failed": []
  ],
  "combat": { // this object is something I will probably not keep, this should be very computed based on skills, traits and attributes, injured or not, etc. Prefered style for example could change during combat as you get injured or the situation changes.
    "preferred_styles": ["stealth", "defensive", "aggressive"], // In order of priority. Options: "stealth", "aggressive", "defensive"
    "modifiers": {
        "bravery": 10, // Affects willingness to engage
        "intelligence": 15, // Determines strategic planning
        "aggression": -5 // Reduces recklessness
    },
    "calculated_stats": {
        "attack": 50, // Based on skills + gear
        "defense": 45, // Based on skills + gear
        "evasion": 10, // Based on agility
        "critical_chance": 5 // Based on weapon and skill synergy
    }
}
}
```