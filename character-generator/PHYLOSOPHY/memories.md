---

# **Morrowind-Themed Memory and Character System Design**

## **Core Concepts**
This system models a dynamic, immersive memory framework for characters, incorporating the following:
1. **Memory Pools**: Organized categories of knowledge relevant to archetypes, professions, and regions.
2. **Memory Generation**: Probabilistic and deterministic assignment of memories based on background.
3. **Memory Decay and Retention**: Mechanisms for clarity loss, reinforcement, and ingraining.
4. **Dynamic Character Knowledge**: Evolution of memories as characters interact with the world.
5. **Memory Personalization**: Individualized clarity, importance, and retention for shared memories.

---

## **Entities**

### **1. MemoryPool**
A domain of knowledge tied to a specific category (e.g., "Seida Neen Knowledge - Extensive"). 
- **Purpose**: Provides structured memory generation during character creation.

#### **Attributes**:
- **`id`**: Unique identifier.
- **`name`**: Name of the memory pool (e.g., "Vivec City Knowledge - Poor").
- **`description`**: Optional explanation of the pool’s purpose.
- **`memories`**: A collection of associated `MemoryPoolEntry` records defining individual memories, probabilities, and default clarity/importance.

---

### **2. MemoryPoolEntry**
Links individual memories to a pool with probability and default values.

#### **Attributes**:
- **`id`**: Unique identifier.
- **`pool`**: Reference to the parent `MemoryPool`.
- **`memory`**: The associated `Memory` object.
- **`probability`**: Likelihood of inclusion during character generation.
- **`defaultClarity`**: Initial clarity level for the memory.
- **`defaultImportance`**: Initial importance level for the memory.

---

### **3. Memory**
Represents a reusable, core memory that multiple characters can reference.

#### **Attributes**:
- **`id`**: Unique identifier.
- **`description`**: Localized text describing the memory (e.g., "The Census Office in Seida Neen").
- **`tags`**: Metadata for filtering (e.g., "location", "religion").
- **`type`**: Classification of the memory (e.g., "Observation", "Knowledge").
- **`defaultClarity`**: Base clarity if no override is applied.
- **`resistance`**: Base resistance, determining how ingrained the memory is.

---

### **4. CharacterMemory**
Links a `Character` to a `Memory`, providing personalized attributes.

#### **Attributes**:
- **`id`**: Unique identifier.
- **`character`**: Reference to the `Character` holding this memory.
- **`memory`**: The associated `Memory`.
- **`clarity`**: Current clarity of the memory, ranging from 0 to 100.
- **`importance`**: Importance of the memory, influencing reinforcement.
- **`resistance`**: How deeply ingrained the memory is. Higher resistance slows decay.
- **`accumulator`**: Tracks reinforcement progress. Resets upon resistance increase.
- **`acquiredAt`**: Timestamp when the memory was gained.
- **`lastReferencedAt`**: Timestamp of the most recent access.

---

### **5. CharacterProfession**
Tracks the professions of a character across their lifetime.

#### **Attributes**:
- **`id`**: Unique identifier.
- **`character`**: Reference to the parent `Character`.
- **`name`**: Name of the profession (e.g., "Fisherman", "Imperial Soldier").
- **`startYear`**: Year the profession began.
- **`endYear`**: Year the profession ended (nullable for active professions).

---

## **Memory Lifecycle**

### **1. Reinforcement**
When a memory is accessed:
1. Add to the **accumulator**:
   - `accumulator += baseValue * importance`
2. Check if the **accumulator** reaches a threshold (e.g., 100):
   - If exceeded:
     - Increase resistance (e.g., `resistance += 30`).
     - Reset the accumulator to 0.
3. Refresh clarity to its maximum value.

#### **Reinforcement Example**:
- Memory: "Teachings of Vivec."
- Resistance: 10.
- Importance: 3.
- Access event:
  - `accumulator += 50 * 3 = 150`.
  - Threshold reached:
    - Resistance increases: `resistance += 30 → resistance = 40`.
    - Accumulator resets: `accumulator = 0`.
  - Clarity resets to 100.

---

### **2. Decay**
Memories lose clarity and reinforcement when not accessed:
1. **Clarity Decay**:
   - Based on elapsed time since the last access and resistance.
   - Formula: `clarity -= decayRate * (1 - resistance / 100)`.
2. **Accumulator Decay**:
   - Decreases progressively over time when unused.

#### **Decay Example**:
- Memory: "Mudcrabs are common along the Bitter Coast."
- Resistance: 10.
- Clarity: 80.
- After time passes:
  - `clarity -= 5` (based on resistance and elapsed time).
  - Clarity drops to 75.

---

### **3. Pruning**
Memories with clarity reduced to 0 can be:
1. Marked as forgotten.
2. Transitioned into a broader knowledge state (e.g., "Vivec Ordinators dislike illegal fishing").

---

## **Character Generation**

### **Memory Pool Assignment**
During character creation, assign memory pools based on:
1. **Archetype**: (e.g., "Dunmer Fisherman").
2. **Region**: (e.g., "Seida Neen Knowledge - Extensive").
3. **Professions**: (e.g., "Fisherman", "Imperial Soldier").
4. **Beliefs**: (e.g., "Almsivi Worshiper - Devout").

#### **Example Pool Assignment for Dunmer Fisherman**:
- **"Seida Neen Knowledge - Extensive"**:
  - Fixed: "Census Office details" (100% inclusion).
  - Random: "Local rumors" (50% chance).
- **"Vivec City Knowledge - Poor"**:
  - Random: "Foreign Quarter layout" (30% chance).
- **"Almsivi Worshiper - Devout"**:
  - Fixed: "Teachings of Vivec" (100%).

---

### **Dynamic Knowledge Growth**
1. **Observation**: Gain memories by witnessing events.
2. **Rumors**: Gain secondhand knowledge (lower clarity).
3. **Exploration**: Discover locations, adding related memories.

---

## **Memory Decay and Resistance Mechanics**

### **Clarity Decay**
- Determines how vivid the memory remains.
- Decays progressively unless reinforced.

### **Resistance**
- Governs how deeply ingrained a memory is.
- Increases through reinforcement.
- Higher resistance slows clarity decay.

---

### **Summary of Processes**
1. **Reinforcement**:
   - Access memory → Increase accumulator → Boost resistance.
2. **Decay**:
   - Time passes → Clarity and accumulator decrease.
3. **Retention**:
   - High resistance → Slower decay → Long-term retention.
4. **Pruning**:
   - Clarity reaches 0 → Forget memory or generalize into broader knowledge.

---

This system ensures immersive, dynamic character knowledge that evolves realistically based on interactions, memory pools, and time.

--- 
