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
import CustomerAdd from './CustomerAdd';

const Login2 = () => {
    const [check, setcheck] = useState(false);
    const [open, setOpen] = useState(false);
    const [id, setId] = useState("")
    const [kId, setKId] = useState("")
    const navigate = useNavigate();

    const handleOK = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
        console.log(setOpen)
    }

    const handleLogin = async () => {
        try{
            const response = await axios.get("/api/customers")
            console.log(response.data)
            response.data.map((obj)=>{
                if(id === obj.name && kId === obj.ktalk){
                    navigate("/legister")
                    check(true);
                }
            })
            if(check !== true){
                alert("아이디 또는 비밀번호가 잘못됐습니다")
            }
        }
        catch(e){
            console.error(e.message)
        }
    }

    return(
        <div>
                    <div style={{
                        display: "flex",
                        justifyContent:"center"
                    }}>
                        <Button  variant="contained" color="primary" onClick={handleOK}>
                        로그인
                        </Button>
                    </div>
                <Dialog open={open} onClose={handleClose} >
                    <DialogTitle>로그인</DialogTitle>
                        <DialogContent>
                            <div style={{
                                padding:"10px"
                            }}>
                            <TextField label = "이름" type="text" name="inputname" value={id} onChange={(e)=>{setId(e.target.value)}}/><br/>
                            </div>
                            <div style={{
                                padding:"10px"
                            }}>
                            <TextField label = "카카오톡ID" type="text" name="inputktalk" value={kId} onChange={(e)=>{setKId(e.target.value)}}/><br/>
                            </div>
                        </DialogContent>
                        <DialogActions>
                            <Button styles = "align-items: center" variant = "contained" color="primary" onClick={handleLogin}>로그인</Button>
                            <CustomerAdd></CustomerAdd>
                            <Button variant = "outlined" color="primary" onClick={handleClose}>
                                닫기
                            </Button>
                        </DialogActions>
                </Dialog>
        </div>
    )
}

export default Login2