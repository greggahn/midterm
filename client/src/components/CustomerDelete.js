import React from "react";
import { Dialog, Typography } from "@mui/material";
import {DialogActions} from "@mui/material";
import {DialogTitle} from "@mui/material";
import {DialogContent} from "@mui/material";
import {Button} from "@mui/material";
class CustomerDelete extends React.Component {

    constructor(props){
        super(props);
        this.state= {
            open: false
        }
    }
    handleClickOpen = () =>{
        this.setState({
            open: true
        })
    }
    handleClose= () =>{
        this.setState({
            name: '',
            file: null,
            age: '',
            gender: '',
            mbti: '',
            ktalk: '',
            fileName: '',
            open: false
        })
    }
    deleteCustomer(id){
        const url = '/api/customers/' + id;
        fetch(url, {
            method: 'DELETE'
        });
        this.props.stateRefresh();
    }
    render(){
        return (
            <diV>
            <Button variant="contained" color="secondary" onClick={this.handleClickOpen}>회원탈퇴</Button>
            <Dialog open={this.state.open} onClose={this.handleClose}>
                <DialogTitle onClose={this.handleClose}>
                    탈퇴 경고
                </DialogTitle>
                <DialogContent>
                    <Typography gutterBottom>
                        회원탈퇴 됩니다.
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button variant="contained" color="primary" onClick={(e) => this.deleteCustomer(this.props.id)}>탈퇴</Button>
                    <Button variant="outlined" color="primary" onClick={this.handleClose}>닫기</Button>
                </DialogActions>
            </Dialog>
            </diV>

        )
    }
}

export default CustomerDelete;