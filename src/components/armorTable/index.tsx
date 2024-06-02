import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Armor } from '../../types/armor';

interface ArmorTableProps {
  tableData: Armor[];
}

export default function ArmorTable({ tableData }: ArmorTableProps) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Armor Name</TableCell>
            <TableCell align="right">Cost</TableCell>
            <TableCell align="right">Armor Class (AC)</TableCell>
            <TableCell align="right">Strength</TableCell>
            <TableCell align="right">Stealth</TableCell>
            <TableCell align="right">Type</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((td) => (
            <TableRow
              key={td.Name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {td.Name}
              </TableCell>
              <TableCell align="right">{td.Cost}</TableCell>
              <TableCell align="right">{td.ArmorClass}</TableCell>
              <TableCell align="right">{td.Strength}</TableCell>
              <TableCell align="right">{td.Stealth}</TableCell>
              <TableCell align="right">{td.Type}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
