import React from 'react';
import { useDrop } from 'react-dnd';
import { Item } from '../../../../../entities/content/Item/Item';
import DraggableItem from '../../../../common/DraggableItem';

interface ItemListFieldProps {
    items: Item[];
    onItemsChange: (items: Item[]) => void;
    maxItems?: number;
    acceptTypes?: string[]; // Types of items this list accepts
    listType: string; // Unique identifier for this list type (e.g. 'backpack-slot', 'equipment-slot')
}

const ItemListField: React.FC<ItemListFieldProps> = ({
    items,
    onItemsChange,
    maxItems,
    acceptTypes = ['item'],
    listType
}) => {
    const [{ isOver }, dropRef] = useDrop({
        accept: acceptTypes,
        drop: (droppedItem: Item) => {
            if (!maxItems || items.length < maxItems) {
                const newItems = [...items, droppedItem];
                onItemsChange(newItems);
            }
        },
        collect: (monitor) => ({
            isOver: monitor.isOver()
        })
    });

    return (
        <div
            ref={dropRef}
            className={`item-list-field ${isOver ? 'drop-hover' : ''}`}
            style={{
                minHeight: '100px',
                border: '1px dashed #ccc',
                padding: '8px',
                backgroundColor: isOver ? '#f0f0f0' : 'transparent'
            }}
        >
            {items.map((item, index) => (
                <DraggableItem
                    key={item.id}
                    item={item}
                    listType={listType}
                    onRemove={() => {
                        const newItems = items.filter((_, i) => i !== index);
                        onItemsChange(newItems);
                    }}
                />
            ))}
        </div>
    );
};


export default ItemListField;
