import React from 'react';
import { Box, Button, IconButton, Tooltip } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import GetAppIcon from '@mui/icons-material/GetApp';
import AddIcon from '@mui/icons-material/Add';
import { useDispatch } from 'react-redux';
import { EntityEnum } from '../../../enum/EntityEnum';

interface EntityListActionsProps {
    entityName: EntityEnum | null;
    selectedIds: Set<string>;
    onCreateNew: () => void;
    onDelete: (ids: Set<string>) => void;
    onExport: (ids: Set<string>) => void;
}

export const EntityListActions: React.FC<EntityListActionsProps> = ({
    entityName,
    selectedIds,
    onCreateNew,
    onDelete,
    onExport,
}) => {
    const dispatch = useDispatch();
    const hasSelection = selectedIds.size > 0;

    return (
        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', p: 2 }}>
            <Button
                variant="contained"
                color="primary"
                startIcon={<AddIcon />}
                onClick={onCreateNew}
            >
                Create New {entityName}
            </Button>

            <Box sx={{ flexGrow: 1 }} />

            <Tooltip title={`Delete selected ${entityName}(s)`}>
                <span>
                    <IconButton
                        color="error"
                        disabled={!hasSelection}
                        onClick={() => onDelete(selectedIds)}
                    >
                        <DeleteIcon />
                    </IconButton>
                </span>
            </Tooltip>

            <Tooltip title={`Export selected ${entityName}(s)`}>
                <span>
                    <IconButton
                        color="primary"
                        disabled={!hasSelection}
                        onClick={() => onExport(selectedIds)}
                    >
                        <GetAppIcon />
                    </IconButton>
                </span>
            </Tooltip>

        </Box>
    );
};
