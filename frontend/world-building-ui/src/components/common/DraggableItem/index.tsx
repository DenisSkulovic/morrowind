import { Item } from "../../../dto/content/Item/Item";
import React from 'react';
import { useDrag } from 'react-dnd';


interface DraggableItemProps {
    item: Item;
    listType: string;
    onRemove: () => void;
}

const DraggableItem: React.FC<DraggableItemProps> = ({ item, listType, onRemove }) => {
    const [{ isDragging }, dragRef] = useDrag({
        type: 'item',
        item: () => ({
            ...item,
            sourceList: listType
        }),
        end: (item, monitor) => {
            const dropResult = monitor.getDropResult();
            if (dropResult && dropResult.listType !== listType) {
                onRemove();
            }
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    });

    return (
        <div
            ref={dragRef}
            style={{
                opacity: isDragging ? 0.5 : 1,
                cursor: 'move',
                padding: '4px',
                margin: '4px',
                backgroundColor: '#fff',
                border: '1px solid #ddd',
                borderRadius: '4px'
            }}
        >
            {item.name}
        </div>
    );
};

export default DraggableItem