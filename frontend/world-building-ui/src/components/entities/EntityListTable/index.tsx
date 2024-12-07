import React, { useState, useEffect } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    IconButton,
    Checkbox,
    TablePagination,
    TableSortLabel
} from '@mui/material';
import { Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';
import { ContentBase } from '../../../class/ContentBase';
import { useAppDispatch } from '../../../store/hooks';
import { RequestStatus } from '../../../store/slices/contentSlice';

interface EntityListTableProps {
    entities: ContentBase[];
    onEdit: (entity: ContentBase) => void;
    onDelete: (entity: ContentBase) => void;
    onSelectionChange?: (selectedIds: string[]) => void;
    columns: {
        field: string;
        headerName: string;
        sortable?: boolean;
        width?: number;
    }[];
}

const EntityListTable: React.FC<EntityListTableProps> = ({
    entities,
    onEdit,
    onDelete,
    onSelectionChange,
    columns
}) => {
    const [selected, setSelected] = useState<string[]>([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [orderBy, setOrderBy] = useState<string>('');
    const [order, setOrder] = useState<'asc' | 'desc'>('asc');

    const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) {
            const newSelected = entities.map((n) => n.id);
            setSelected(newSelected);
            if (onSelectionChange) {
                onSelectionChange(newSelected);
            }
            return;
        }
        setSelected([]);
        if (onSelectionChange) {
            onSelectionChange([]);
        }
    };

    const handleClick = (id: string) => {
        const selectedIndex = selected.indexOf(id);
        let newSelected: string[] = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, id);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }

        setSelected(newSelected);
        if (onSelectionChange) {
            onSelectionChange(newSelected);
        }
    };

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleSort = (property: string) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const isSelected = (id: string) => selected.indexOf(id) !== -1;

    const sortedEntities = React.useMemo(() => {
        if (!orderBy) return entities;

        return [...entities].sort((a, b) => {
            const aValue = a[orderBy as keyof ContentBase];
            const bValue = b[orderBy as keyof ContentBase];

            if (order === 'asc') {
                return aValue < bValue ? -1 : 1;
            } else {
                return bValue < aValue ? -1 : 1;
            }
        });
    }, [entities, order, orderBy]);

    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - entities.length) : 0;

    return (
        <Paper>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell padding="checkbox">
                                <Checkbox
                                    indeterminate={selected.length > 0 && selected.length < entities.length}
                                    checked={entities.length > 0 && selected.length === entities.length}
                                    onChange={handleSelectAllClick}
                                />
                            </TableCell>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.field}
                                    style={{ width: column.width }}
                                >
                                    {column.sortable ? (
                                        <TableSortLabel
                                            active={orderBy === column.field}
                                            direction={orderBy === column.field ? order : 'asc'}
                                            onClick={() => handleSort(column.field)}
                                        >
                                            {column.headerName}
                                        </TableSortLabel>
                                    ) : (
                                        column.headerName
                                    )}
                                </TableCell>
                            ))}
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {sortedEntities
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((entity) => {
                                const isItemSelected = isSelected(entity.id);

                                return (
                                    <TableRow
                                        hover
                                        key={entity.id}
                                        selected={isItemSelected}
                                    >
                                        <TableCell padding="checkbox">
                                            <Checkbox
                                                checked={isItemSelected}
                                                onClick={() => handleClick(entity.id)}
                                            />
                                        </TableCell>
                                        {columns.map((column) => (
                                            <TableCell key={column.field}>
                                                {entity[column.field as keyof ContentBase]}
                                            </TableCell>
                                        ))}
                                        <TableCell>
                                            <IconButton onClick={() => onEdit(entity)}>
                                                <EditIcon />
                                            </IconButton>
                                            <IconButton onClick={() => onDelete(entity)}>
                                                <DeleteIcon />
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                        {emptyRows > 0 && (
                            <TableRow style={{ height: 53 * emptyRows }}>
                                <TableCell colSpan={columns.length + 2} />
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={entities.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
};

export default EntityListTable;
