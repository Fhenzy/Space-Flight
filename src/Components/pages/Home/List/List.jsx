import * as React from 'react';
import { useEffect, useState } from "react";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';
import "../../../../Global.css"
import ViewItem from '../../ViewItem/Item'
import TextField from '@mui/material/TextField';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'



const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


export default function CustomizedTables() {

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [search, setSearch] = useState('')
  const [newsList, setNewsList] = useState([]);
    console.log(search)

   
//Paginação
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

//requisição api
    useEffect(() => {
      fetch("https://api.spaceflightnewsapi.net/v3/articles")
        .then((response) => response.json())
        .then((data) => {
          setNewsList(data); console.log(data)
        });
    },[]); 

// filtro de campo de busca
    const listFilter = newsList.filter((newsList) => newsList.title.toLowerCase().includes(search.toLowerCase()))

    return (   
    <TableContainer component={Paper}>
      <TextField  id="outlined-search" 
                  label="Digite ..." 
                  type="search"
                  size="small"
                  margin="normal"
                  fullWidth
                  value={search}
                  onChange={(e)=> setSearch(e.target.value)}
      > 
      </TextField>
     <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Title</StyledTableCell>
            <StyledTableCell align="center">Articles</StyledTableCell>
            <StyledTableCell align="right">publishedAt</StyledTableCell>       
          </TableRow>     
        </TableHead>     
        <TableBody>     
          {listFilter
          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          .map((info) => (
            <StyledTableRow key ={info.id} id="hover" component={Link} to={`ViewItem/${info.id}`}>
              <StyledTableCell component="th" scope="row" size="medium">
              <h3>{info.title}</h3>
              </StyledTableCell>
              <StyledTableCell align="left">{info.summary}</StyledTableCell>
              <StyledTableCell align="right">{info.publishedAt}</StyledTableCell>
            </StyledTableRow> 
          ))}            
        </TableBody>
     </Table>
     <TablePagination
        rowsPerPageOptions={[5, 10, 25, 100]}
        component="div"
        count={newsList.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
  </TableContainer>
     
  );

}