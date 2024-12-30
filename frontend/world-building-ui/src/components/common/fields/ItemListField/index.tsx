import React, { useCallback } from 'react';
import { useDrop } from 'react-dnd';
import { Box, FormHelperText, Paper } from '@mui/material';
import { DynamicFormFieldProps } from '../../DynamicForm';
import { Item } from '../../../../class/entities/content/Item/Item';
import DraggableItem from '../../DraggableItem';
import { FormFieldDefinition } from '../../../../decorator/form-field.decorator';
import { ErrorComp } from '../../DynamicForm/ErrorComp';

interface ItemListFieldProps extends DynamicFormFieldProps {
    formFieldDefinition: FormFieldDefinition;
    value: Item[];
    onChange: (newValue: Item[]) => void;
}

const ItemListField: React.FC<ItemListFieldProps> = ({
    formFieldDefinition,
    value: items,
    onChange,
    error,
    readOnly
}) => {
    if (error && typeof error === 'object') throw new Error('Received error as object. ItemListField does not support nested errors.');
    const maxItems = formFieldDefinition.maxItems;
    const acceptTypes = formFieldDefinition.acceptTypes || ['item'];
    const listType: string | undefined = formFieldDefinition.listType;
    if (!acceptTypes) throw new Error('acceptTypes is required in ItemListField');
    if (!listType) throw new Error('listType is required in ItemListField');

    const [{ isOver }, dropRef] = useDrop({
        accept: acceptTypes,
        drop: (droppedItem: Item) => {
            if (!readOnly && (!maxItems || items.length < maxItems)) {
                const newItems = [...items, droppedItem];
                onChange(newItems);
            }
        },
        collect: (monitor) => ({
            isOver: monitor.isOver()
        }),
        canDrop: () => !readOnly
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
                        bgcolor: isOver && !readOnly ? 'action.hover' : 'background.paper',
                        border: '1px dashed',
                        borderColor: readOnly ? 'action.disabled' : 'divider',
                        transition: 'background-color 0.2s ease',
                        borderRadius: 1,
                        overflow: 'hidden',
                        opacity: readOnly ? 0.7 : 1
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
                                    if (!readOnly) {
                                        const newItems = items.filter((_, i) => i !== index);
                                        onChange(newItems);
                                    }
                                }}
                                readOnly={readOnly}
                            />
                        ))}
                    </Box>
                </Paper>
            </div>
            <ErrorComp text={error} />
        </>
    );
};

export default ItemListField;
