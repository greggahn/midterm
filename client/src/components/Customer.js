import React from "react";
import { TableCell, TableRow } from "@mui/material";
import CustomerDelete from "./CustomerDelete";

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