import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function TableHeading({ title, headers, rows, onEdit = {} }) {
    const isScrollable = rows.length > 4;

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden', height: '100%' }}>
            <TableContainer sx={{ maxHeight: isScrollable ? 250 : '100%' }}>
                <Table stickyHeader aria-label="sticky table" sx={{ minWidth: 150 }}>
                    <TableHead>
                        <TableRow>
                            <TableCell colSpan={headers.length + 1} style={{ textAlign: 'center' }}>
                                <p style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{title}</p>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            {headers.map((header, index) => (
                                <TableCell key={index}><p style={{ fontSize: '1rem', fontWeight: 'bold' }}>{header}</p></TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row, index) => (
                            <TableRow key={index}>
                                {row.map((cell, cellIndex) => (
                                    <TableCell key={cellIndex}>
                                        <p style={{ fontSize: '1rem' }}>{cell}</p>
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
}
