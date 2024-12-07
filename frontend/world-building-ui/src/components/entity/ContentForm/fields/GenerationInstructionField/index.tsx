import React from 'react';
import { GenerationInstruction, IdAndQuant, ProbObject_Simple, BlueprintGenInstruction_Gaussian, BlueprintSetCombinator } from '../../../../../class/GenerationInstruction';
import { ConditionEnum } from '../../../../../enum/ConditionEnum';

interface GenerationInstructionFieldProps {
    value: GenerationInstruction;
    onChange: (value: GenerationInstruction) => void;
    label: string;
}

const GenerationInstructionField: React.FC<GenerationInstructionFieldProps> = ({
    value,
    onChange,
    label
}) => {
    const handleChange = (newValue: GenerationInstruction) => {
        onChange(newValue);
    };

    const renderInstructionEditor = (instruction: GenerationInstruction) => {
        if (typeof instruction === 'string') {
            return (
                <div>
                    <input
                        type="text"
                        value={instruction}
                        onChange={(e) => handleChange(e.target.value)}
                    />
                </div>
            );
        }

        if (instruction instanceof IdAndQuant) {
            return (
                <div>
                    <input
                        type="text"
                        value={instruction.blueprintId}
                        onChange={(e) => handleChange(new IdAndQuant(e.target.value, instruction.quantity))}
                    />
                    <input
                        type="number"
                        value={instruction.quantity || 1}
                        onChange={(e) => handleChange(new IdAndQuant(instruction.blueprintId, parseInt(e.target.value)))}
                    />
                </div>
            );
        }

        if (instruction instanceof ProbObject_Simple) {
            return (
                <div>
                    <select
                        value={instruction.cond}
                        onChange={(e) => handleChange(new ProbObject_Simple(e.target.value as ConditionEnum, instruction.prob))}
                    >
                        {Object.values(ConditionEnum).map(cond => (
                            <option key={cond} value={cond}>{cond}</option>
                        ))}
                    </select>
                    <input
                        type="text"
                        value={instruction.prob}
                        onChange={(e) => handleChange(new ProbObject_Simple(instruction.cond, e.target.value))}
                    />
                </div>
            );
        }

        if (instruction instanceof BlueprintGenInstruction_Gaussian) {
            return (
                <div>
                    <input
                        type="text"
                        value={instruction.blueprintId}
                        onChange={(e) => handleChange(new BlueprintGenInstruction_Gaussian(
                            e.target.value,
                            instruction.prob,
                            instruction.avg_quan,
                            instruction.st_dev,
                            instruction.skew
                        ))}
                    />
                    <input
                        type="number"
                        min="0"
                        max="1"
                        step="0.1"
                        value={instruction.prob || 1}
                        onChange={(e) => handleChange(new BlueprintGenInstruction_Gaussian(
                            instruction.blueprintId,
                            parseFloat(e.target.value),
                            instruction.avg_quan,
                            instruction.st_dev,
                            instruction.skew
                        ))}
                    />
                    <input
                        type="number"
                        value={instruction.avg_quan || 1}
                        onChange={(e) => handleChange(new BlueprintGenInstruction_Gaussian(
                            instruction.blueprintId,
                            instruction.prob,
                            parseInt(e.target.value),
                            instruction.st_dev,
                            instruction.skew
                        ))}
                    />
                </div>
            );
        }

        if (instruction instanceof BlueprintSetCombinator) {
            return (
                <div>
                    <input
                        type="text"
                        placeholder="Name"
                        value={instruction.name || ''}
                        onChange={(e) => handleChange(new BlueprintSetCombinator(
                            e.target.value,
                            instruction.prob,
                            instruction.cond,
                            instruction.items
                        ))}
                    />
                    <select
                        value={instruction.cond}
                        onChange={(e) => handleChange(new BlueprintSetCombinator(
                            instruction.name,
                            instruction.prob,
                            e.target.value as ConditionEnum,
                            instruction.items
                        ))}
                    >
                        {Object.values(ConditionEnum).map(cond => (
                            <option key={cond} value={cond}>{cond}</option>
                        ))}
                    </select>
                    {instruction.items.map((item, index) => (
                        <div key={index}>
                            {renderInstructionEditor(item)}
                        </div>
                    ))}
                </div>
            );
        }

        return null;
    };

    return (
        <div>
            <label>{label}</label>
            {renderInstructionEditor(value)}
        </div>
    );
};

export default GenerationInstructionField;
