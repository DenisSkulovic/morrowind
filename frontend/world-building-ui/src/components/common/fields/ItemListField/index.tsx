import React, { useCallback } from 'react';
import { useDrop } from 'react-dnd';
import { Box, FormHelperText, Paper } from '@mui/material';
import { DynamicFormFieldProps } from '../../DynamicForm';
import { Item } from '../../../../class/entities/content/Item/Item';
import DraggableItem from '../../DraggableItem';
import { FormFieldDefinition } from '../../../../decorator/form-field.decorator';

interface ItemListFieldProps extends DynamicFormFieldProps {
    formFieldDefinition: FormFieldDefinition;
    value: Item[];
    onChange: (newValue: Item[]) => void;
    error?: string;
}

const ItemListField: React.FC<ItemListFieldProps> = ({
    formFieldDefinition,
    value: items,
    onChange,
    error
}) => {
    const maxItems = formFieldDefinition.maxItems;
    const acceptTypes = formFieldDefinition.acceptTypes || ['item'];
    const listType: string | undefined = formFieldDefinition.listType;
    if (!acceptTypes) throw new Error('acceptTypes is required in ItemListField');
    if (!listType) throw new Error('listType is required in ItemListField');

    const [{ isOver }, dropRef] = useDrop({
        accept: acceptTypes,
        drop: (droppedItem: Item) => {
            if (!maxItems || items.length < maxItems) {
                const newItems = [...items, droppedItem];
                onChange(newItems);
            }
        },
        collect: (monitor) => ({
            isOver: monitor.isOver()
        })
    });

    const setDropRef = useCallback(
        (node: HTMLDivElement | null) => {
            dropRef(node);
        },
        [dropRef]
    );

    return (
        <>
            <div ref={setDropRef} style={{ padding: '8px' }}>
                <Paper
                    component="div"
                    variant="outlined"
                    elevation={0}
                    square={false}
                    sx={{
                        minHeight: '100px',
                        p: 2,
                        bgcolor: isOver ? 'action.hover' : 'background.paper',
                        border: '1px dashed',
                        borderColor: 'divider',
                        transition: 'background-color 0.2s ease',
                        borderRadius: 1,
                        overflow: 'hidden'
                    }}
                >
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,
                        width: '100%'
                    }}>
                        {items.map((item, index) => (
                            <DraggableItem
                                key={item.id}
                                item={item}
                                listType={listType}
                                onRemove={() => {
                                    const newItems = items.filter((_, i) => i !== index);
                                    onChange(newItems);
                                }}
                            />
                        ))}
                    </Box>
                </Paper>
            </div>
            {error && <FormHelperText>{error}</FormHelperText>}
        </>
    );
};

export default ItemListField;
