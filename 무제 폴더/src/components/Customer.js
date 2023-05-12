import React from "react";
import { Table, TableCell, TableRow } from "@mui/material";
import { TableBody } from "@mui/material";


class Customer extends React.Component{
    render() {
        return (
            <TableRow>
                <TableCell>{this.props.name}</TableCell>
                <TableCell><img src = {this.props.schedule} alt = "profile"/></TableCell>
                <TableCell>{this.props.age}</TableCell>
                <TableCell>{this.props.gender}</TableCell>
                <TableCell>{this.props.mbti}</TableCell>
                <TableCell>{this.props.ktalk}</TableCell>
            </TableRow>
        )
    }
}


export default Customer;