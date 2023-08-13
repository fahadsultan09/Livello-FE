import React from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    IconButton,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import './DataRow.css'

function CustomTable({ columns, data = [], onDelete }) {
    return (
        <TableContainer component={Paper} className="table-container">
            <Table>
                <TableHead >
                    <TableRow>
                        {columns.map((column, index) => (
                            <TableCell key={index}>{column.label}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {!data.length ? (
                        <TableRow>
                            <TableCell colSpan={columns.length} align="center">
                                No data found
                            </TableCell>
                        </TableRow>
                    ) : data.map((row, rowIndex) => (

                        <TableRow key={rowIndex}>
                            {columns.map((column, columnIndex) => (
                                column.id == 'action' ? (< TableCell >
                                    <IconButton aria-label="delete" size="large">
                                        <DeleteIcon onClick={() => onDelete(row)} />
                                    </IconButton>
                                </TableCell>) : (< TableCell key={columnIndex} > {row[column.id]}</TableCell>)
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer >
    );
}

export default CustomTable;