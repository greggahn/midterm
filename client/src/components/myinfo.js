import react, {useState} from 'react';
import axios from "axios";
import {useNavigate} from 'react-router-dom';
import React from "react";
import Customer from "./Customer";
import { Dialog } from "@mui/material";
import {DialogActions} from "@mui/material";
import {DialogTitle} from "@mui/material";
import {DialogContent} from "@mui/material";
import {TextField} from "@mui/material";
import {Button} from "@mui/material";
import CustomerDelete from './CustomerDelete';
import { Paper } from "@mui/material";
import { TableHead } from "@mui/material";
import { TableBody } from "@mui/material";
import { Table, TableCell, TableRow } from "@mui/material";

const Myinfo = () => {
    const [open, setOpen] = useState(false);
    const [id, name, schdule, age, gender, mbti, ktalk] = ""

    const handleOK = () => {
        setOpen(true);

    }

    const handleClose = () => {
        setOpen(false);
        console.log(setOpen)
    }
    return(
        <div>
                    <div style={{
                        display: "flex",
                        justifyContent:"center"
                    }}>
                        <Button  variant="contained" color="primary" onClick={handleOK}>
                        내 정보 보기
                        </Button>
                    </div>
                <Dialog open={open} onClose={handleClose} >
                    <DialogTitle>내 정보</DialogTitle>
                        <DialogContent>
                        <Paper>
                                <Table>
                                <TableHead>
                                    <TableRow>
                                    <TableCell>이름</TableCell>
                                    <TableCell>시간표</TableCell>
                                    <TableCell>나이</TableCell>
                                    <TableCell>성별</TableCell>
                                    <TableCell>mbti</TableCell>
                                    <TableCell>카카오톡ID</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    
            <TableRow>
              <TableCell colSpan="6" align="center">
              </TableCell>
            </TableRow>
            </TableBody>
                                </Table>
                            </Paper>
                        </DialogContent>
                        <DialogActions>
                            <CustomerDelete></CustomerDelete>
                            <Button variant = "outlined" color="primary" onClick={handleClose}>
                                닫기
                            </Button>
                        </DialogActions>
                </Dialog>
        </div>
    )
}

export default Myinfo