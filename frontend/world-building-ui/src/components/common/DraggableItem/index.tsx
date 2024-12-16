import React, { useRef, useCallback } from 'react';
import { useDrag } from 'react-dnd';
import { Paper, Typography } from '@mui/material';

interface DraggableItemProps {
    item: any;
    listType: string;
    onRemove: () => void;
}

const DraggableItem: React.FC<DraggableItemProps> = ({ item, listType, onRemove }) => {
    const localRef = useRef<HTMLDivElement | null>(null);

    const [{ isDragging }, dragRef] = useDrag({
        type: 'item',
        item: () => ({
            ...item,
            sourceList: listType
        }),
        end: (item, monitor) => {
            const dropResult: any = monitor.getDropResult();
            if (dropResult && dropResult.listType !== listType) {
                onRemove();
            }
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    });

    const setRefs = useCallback(
        (node: HTMLDivElement | null) => {
            // Update local ref
            localRef.current = node;
            // Update drag ref
            dragRef(node);
        },
        [dragRef]
    );

    return (
        <Paper
            component="div"
            ref={setRefs}
            elevation={1}
            sx={{
                opacity: isDragging ? 0.5 : 1,
                cursor: 'move',
                p: 1,
                m: 0.5,
                backgroundColor: 'background.paper',
                '&:hover': {
                    backgroundColor: 'action.hover'
                }
            }}
        >
            <Typography>{item.name}</Typography>
        </Paper>
    );
};

export default DraggableItem;