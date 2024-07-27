import React from 'react'
import styled from 'styled-components'

const TableContainer = styled.div`
  margin: 20px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

const TableHeading = styled.h2`
  margin-bottom: 20px;
  text-align: center;
`

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;
`

const TableHeader = styled.th`
  background-color: #f2f2f2;
  padding: 10px;
  border: 1px solid #ddd;
`

const TableCell = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
`

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`

const Table = () => (
  <TableContainer>
    <TableHeading>Table</TableHeading>
    <StyledTable>
      <thead>
        <TableRow>
          <TableHeader>Name</TableHeader>
          <TableHeader>Age</TableHeader>
          <TableHeader>Address</TableHeader>
        </TableRow>
      </thead>
      <tbody>
        <TableRow>
          <TableCell>RITIKA RATH</TableCell>
          <TableCell>22</TableCell>
          <TableCell>A-4567, ROURKELA-ODISHA</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>SDG DFTGH</TableCell>
          <TableCell>25</TableCell>
          <TableCell>BHUBNESWAR, PATIA</TableCell>
        </TableRow>
      </tbody>
    </StyledTable>
  </TableContainer>
)

export default Table
