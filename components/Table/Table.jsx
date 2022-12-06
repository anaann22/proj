import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Table.css";

function createDataDeath(name, codPerso, date, natural) {
  return { name, codPerso, date, natural };
}

const rows = [
  createDataDeath("Ana Parja", 18908424, "5 decembrie 2022", "DA"),
  createDataDeath("Inna Potanga", 18908424, "5 decembrie 2022", "DA"),
  createDataDeath("Ion Marin", 18908424, "5 decembrie 2022", "NU"),
  createDataDeath("Samira Sarada", 18908421, "5 decembrie 2022", "DA"),
];
const makeStyle=(natural)=>{
  if(natural === "DA")
  {
    return {
      background: "rgba(182, 137, 212, 0.329)",
      color: 'gray',
    }
  }
  else{
    return{
      background: 'rgb(187, 91, 151)',
      color: 'pink',
  }
}
}
  

export default function BasicTable() {
  return (
      <div className="Table">
      <h3>Cazuri letale recente</h3>
        <TableContainer
          component={Paper}
          style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Nume Prenume</TableCell>
                <TableCell align="left">Cod Personal</TableCell>
                <TableCell align="left">Data decesului</TableCell>
                <TableCell align="left">Natural</TableCell>
                <TableCell align="left"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody style={{ color: "white" }}>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="left">{row.codPerso}</TableCell>
                  <TableCell align="left">{row.date}</TableCell>
                  <TableCell align="left">
                    <span className="natural" style={makeStyle(row.natural)}>{row.natural}</span>
                  </TableCell>
                  <TableCell align="left" className="Details">Details</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
  );
}