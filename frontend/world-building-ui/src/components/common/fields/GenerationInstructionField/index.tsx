import React from 'react';
import { GenerationInstruction, IdAndQuant, ProbObject_Simple, BlueprintGenInstruction_Gaussian, BlueprintSetCombinator } from '../../../../class/GenerationInstruction';
import { ConditionEnum } from '../../../../enum/ConditionEnum';
import { Box, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { BlueprintGenInstruction_Simple } from '../../../../types';
import { DynamicFormFieldProps } from '../../DynamicForm';
import { FormFieldDefinition } from '../../../../decorator/form-field.decorator';

interface GenerationInstructionFieldProps extends DynamicFormFieldProps {
    formFieldDefinition: FormFieldDefinition;
    value: GenerationInstruction;
    onChange: (newValue: GenerationInstruction) => void;
}

const GenerationInstructionField: React.FC<GenerationInstructionFieldProps> = ({
    value,
    onChange,
    formFieldDefinition
}) => {
    const handleStringChange = (value: string) => {
        onChange(value);
    };

    const handleIdAndQuantChange = (instruction: IdAndQuant, field: 'blueprintId' | 'quantity', value: string | number) => {
        const newQuantity = field === 'quantity' ? Number(value) : instruction.quantity;
        const newBlueprintId = field === 'blueprintId' ? String(value) : instruction.blueprintId;
        onChange(new IdAndQuant(newBlueprintId, newQuantity));
    };

    const handleProbObjectChange = (instruction: ProbObject_Simple, field: 'cond' | 'prob', value: string | ConditionEnum | BlueprintGenInstruction_Simple) => {
        const newCond = field === 'cond' ? value as ConditionEnum : instruction.cond;
        const newProb = field === 'prob' ? value as BlueprintGenInstruction_Simple : instruction.prob;
        onChange(new ProbObject_Simple(newCond, newProb));
    };

    const handleGaussianChange = (
        instruction: BlueprintGenInstruction_Gaussian,
        field: 'blueprintId' | 'prob' | 'avg_quan',
        value: string | number
    ) => {
        onChange(new BlueprintGenInstruction_Gaussian(
            field === 'blueprintId' ? String(value) : instruction.blueprintId,
            field === 'prob' ? Number(value) : instruction.prob,
            field === 'avg_quan' ? Number(value) : instruction.avg_quan,
            instruction.st_dev,
            instruction.skew
        ));
    };

    const handleCombinatorChange = (
        instruction: BlueprintSetCombinator,
        field: 'name' | 'cond',
        value: string | ConditionEnum
    ) => {
        onChange(new BlueprintSetCombinator(
            field === 'name' ? String(value) : instruction.name,
            instruction.prob,
            field === 'cond' ? value as ConditionEnum : instruction.cond,
            instruction.items
        ));
    };

    const renderInstructionEditor = (instruction: GenerationInstruction) => {
        if (typeof instruction === 'string') {
            return (
                <Box>
                    <TextField
                        fullWidth
                        value={instruction}
                        onChange={(e) => handleStringChange(e.target.value)}
                    />
                </Box>
            );
        }

        if (instruction instanceof IdAndQuant) {
            return (
                <Box sx={{ display: 'flex', gap: 2 }}>
                    <TextField
                        fullWidth
                        value={instruction.blueprintId}
                        onChange={(e) => handleIdAndQuantChange(instruction, 'blueprintId', e.target.value)}
                    />
                    <TextField
                        type="number"
                        value={instruction.quantity || 1}
                        onChange={(e) => handleIdAndQuantChange(instruction, 'quantity', e.target.value)}
                    />
                </Box>
            );
        }

        if (instruction instanceof ProbObject_Simple) {
            return (
                <Box sx={{ display: 'flex', gap: 2 }}>
                    <FormControl fullWidth>
                        <Select
                            value={instruction.cond}
                            onChange={(e) => handleProbObjectChange(instruction, 'cond', e.target.value as ConditionEnum)}
                        >
                            {Object.values(ConditionEnum).map(cond => (
                                <MenuItem key={cond} value={cond}>{cond}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <TextField
                        fullWidth
                        value={instruction.prob}
                        onChange={(e) => handleProbObjectChange(instruction, 'prob', e.target.value)}
                    />
                </Box>
            );
        }

        if (instruction instanceof BlueprintGenInstruction_Gaussian) {
            return (
                <Box sx={{ display: 'flex', gap: 2 }}>
                    <TextField
                        fullWidth
                        value={instruction.blueprintId}
                        onChange={(e) => handleGaussianChange(instruction, 'blueprintId', e.target.value)}
                    />
                    <TextField
                        type="number"
                        inputProps={{ min: 0, max: 1, step: 0.1 }}
                        value={instruction.prob || 1}
                        onChange={(e) => handleGaussianChange(instruction, 'prob', e.target.value)}
                    />
                    <TextField
                        type="number"
                        value={instruction.avg_quan || 1}
                        onChange={(e) => handleGaussianChange(instruction, 'avg_quan', e.target.value)}
                    />
                </Box>
            );
        }

        if (instruction instanceof BlueprintSetCombinator) {
            return (
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <TextField
                        fullWidth
                        placeholder="Name"
                        value={instruction.name || ''}
                        onChange={(e) => handleCombinatorChange(instruction, 'name', e.target.value)}
                    />
                    <FormControl fullWidth>
                        <Select
                            value={instruction.cond}
                            onChange={(e) => handleCombinatorChange(instruction, 'cond', e.target.value as ConditionEnum)}
                        >
                            {Object.values(ConditionEnum).map(cond => (
                                <MenuItem key={cond} value={cond}>{cond}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    {instruction.items.map((item, index) => (
                        <Box key={index}>
                            {renderInstructionEditor(item)}
                        </Box>
                    ))}
                </Box>
            );
        }

        return null;
    };

    return (
        <FormControl fullWidth>
            <InputLabel>{formFieldDefinition.label}</InputLabel>
            {renderInstructionEditor(value)}
        </FormControl>
    );
};

export default GenerationInstructionField;
