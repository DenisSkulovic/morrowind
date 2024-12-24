import React, { useState } from 'react';
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
import { SearchQuery } from '../../../class/search/SearchQuery';
import { SortBy, SortByDirectionEnum } from '../../../class/search/SortBy';
import { ContentSearchResult } from '../../../store/slices/contentSlice';

interface EntityListTableProps<T extends ContentBase> {
    query: SearchQuery;
    result: ContentSearchResult<T>;
    resultsPerPageOptions: number[];
    onEdit: (entity: T) => void;
    onDelete: (entity: T) => void;
    onSelectionChange?: (selectedIds: Set<string>) => void;
    onSetPage: (page: number) => void;
    onSetRowsPerPage: (rowsPerPage: number) => void;
    onSort: (sortBy: SortBy) => void;
    columns: {
        field: string;
        headerName: string;
        sortable?: boolean;
        width?: number;
    }[];
}

export const EntityListTable = <T extends ContentBase>({
    query,
    result,
    resultsPerPageOptions,
    onEdit,
    onDelete,
    onSelectionChange,
    columns,
    onSetPage,
    onSetRowsPerPage,
    onSort,
}: EntityListTableProps<T>) => {
    const [selected, setSelected] = useState<Set<string>>(new Set());
    const [orderBy, setOrderBy] = useState<string>('');
    const [order, setOrder] = useState<SortByDirectionEnum>(SortByDirectionEnum.ASC);

    const handleCheckAllChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let newSelected: Set<string> = new Set();

        if (event.target.checked) {
            newSelected = new Set(result.array.map((n) => n.id));
        } else {
            newSelected = new Set();
        }

        setSelected(newSelected);
        if (onSelectionChange) {
            onSelectionChange(newSelected);
        }
    };

    const handleMarkAsSelected = (id: string) => {
        const newSelected = new Set(selected);

        if (newSelected.has(id)) {
            newSelected.delete(id);
        } else {
            newSelected.add(id);
        }

        setSelected(newSelected);
        if (onSelectionChange) {
            onSelectionChange(newSelected);
        }
    };


    const isSelected = (id: string) => selected.has(id);

    const emptyRows = Math.max(0, query.pageSize - (result.array.length - (query.page - 1) * query.pageSize));

    const isSomeSelected: boolean = selected.size > 0 && selected.size < result.array.length;
    const isAllSelected: boolean = result.array.length > 0 && selected.size === result.array.length;

    const handleSort = (field: string, order: SortByDirectionEnum) => {
        onSort(SortBy.build({ field, direction: order }));
    };

    return (
        <Paper>
            <TableContainer>
                <Table>
                    <TableHead>
                        {/* Table row for the table header */}
                        <TableRow>
                            {/* Checkbox for selecting all rows */}
                            <TableCell padding="checkbox">
                                <Checkbox
                                    indeterminate={isSomeSelected}
                                    checked={isAllSelected}
                                    onChange={handleCheckAllChange}
                                />
                            </TableCell>
                            {/* Columns for the table */}
                            {columns.map((column) => (
                                <TableCell
                                    key={column.field}
                                    style={{ width: column.width }}
                                >
                                    {column.sortable ? (
                                        <TableSortLabel
                                            active={orderBy === column.field}
                                            direction={orderBy === column.field ? order : SortByDirectionEnum.ASC}
                                            onClick={() => handleSort(column.field, order)}
                                        >
                                            {column.headerName}
                                        </TableSortLabel>
                                    ) : (
                                        column.headerName
                                    )}
                                </TableCell>
                            ))}
                            {/* Actions column */}
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {result.array.map((entity: T) => {
                            const isItemSelected: boolean = isSelected(entity.id);
                            return (
                                <TableRow
                                    hover
                                    key={entity.id}
                                    selected={isItemSelected}
                                >
                                    {/* Checkbox for selecting the row */}
                                    <TableCell padding="checkbox">
                                        <Checkbox
                                            checked={isItemSelected}
                                            onClick={() => handleMarkAsSelected(entity.id)}
                                        />
                                    </TableCell>
                                    {/* Cells for the table */}
                                    {columns.map((column) => (
                                        <TableCell key={column.field}>
                                            {entity[column.field as keyof ContentBase]}
                                        </TableCell>
                                    ))}
                                    {/* Actions cell */}
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
                rowsPerPageOptions={resultsPerPageOptions}
                component="div"
                count={result.totalResults}
                rowsPerPage={query.pageSize}
                page={query.page}
                onPageChange={(_, page) => onSetPage(page)}
                onRowsPerPageChange={(event) => onSetRowsPerPage(parseInt(event.target.value, 10))}
            />
        </Paper>
    );
};