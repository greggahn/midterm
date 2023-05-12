import React from "react";
import axios from 'axios';
import { Dialog } from "@mui/material";
import {DialogActions} from "@mui/material";
import {DialogTitle} from "@mui/material";
import {DialogContent} from "@mui/material";
import {TextField} from "@mui/material";
import {Button} from "@mui/material";

class CustomerAdd extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            file: null,
            age: '',
            gender: '',
            mbti: '',
            ktalk: '',
            fileName: '',
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

    handleFileChange = (e) => {
        this.setState({
            file: e.target.files[0],
            fileName: e.target.value
        })
    }
    handleValueChange =(e) => {
        let nextstate ={};
        nextstate[e.target.name] = e.target.value;
        this.setState(nextstate);
    }
    addCustomer = () =>{
        const url = '/api/customers';
        const formData = new FormData();

        formData.append('name', this.state.name);
        formData.append('schedule', this.state.file);
        formData.append('age', this.state.age);
        formData.append('gender', this.state.gender);
        formData.append('mbti', this.state.mbti);
        formData.append('ktalk', this.state.ktalk);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        return axios.post(url, formData, config);
    }
    handleFormSubmit= (e) =>{
        e.preventDefault()
        this.addCustomer()
            .then((response) => {
                console.log(response.data);
                this.props.stateRefresh();
            })
        this.setState({
            name: '',
            file: null,
            age: '',
            gender: '',
            mbti: '',
            ktalk: '',
            fileName: ''
        })
        
    }
    
    render() {
        // const { classes } = this.props;

        return (
            <div>
                <Button variant="contained" color="primary" onClick={this.handleClickOpen}>
                    회원가입
                </Button>
                <Dialog open={this.state.open} onClose={this.handleClose}>
                    <DialogTitle>회원가입</DialogTitle>
                    <DialogContent>
                        <div style={{
                                padding:"10px"
                            }}>
                        <TextField label = "이름" type="text" name="name" value={this.state.name} onChange={this.handleValueChange}/><br/>
                        </div>
                        <div style={{
                                padding:"10px"
                            }}>
                        <input style={{display:"none"}} name="schedule" accept="image/*" type="file" file={this.state.file} value={this.state.fileName} onChange={this.handleFileChange} id="inputFile"/>
                        <label htmlFor="inputFile">
                            {/* <Button variant="contained" color="primary" Component="span" name="schdule">
                                {this.state.fileName==="" ? "시간표 선택": this.state.fileName}
                            </Button> */}
                            <div style={{
                                backgroundColor:'#1976D2',
                                color:'white',
                                padding:"4px 12px",
                                width:'80px',
                                borderRadius:"4px",
                                boxShadow:"1px 1px 1px 0 rgba(0,0,0,0.25)"
                            }}>
                                시간표선택
                            </div>
                        </label>
                        <br/>
                        </div>
                        <div style={{
                                padding:"10px"
                            }}>
                        <TextField label = "나이" type="text" name="age" value={this.state.age} onChange={this.handleValueChange}/><br/>
                        </div>
                        <div style={{
                                padding:"10px"
                            }}>
                        <TextField label = "성별" type="text" name="gender" value={this.state.gender} onChange={this.handleValueChange}/><br/>
                        </div>
                        <div style={{
                                padding:"10px"
                            }}>
                        <TextField label = "mbti" type="text" name="mbti" value={this.state.mbti} onChange={this.handleValueChange}/><br/>
                            </div>
                            <div style={{
                                padding:"10px"
                            }}>
                        <TextField label = "카카오톡ID" type="text" name="ktalk" value={this.state.ktalk} onChange={this.handleValueChange}/><br/>
                        </div>
                    </DialogContent>
                    <DialogActions>
                    <div style={{
                        display: "flex",
                        justifyContent:"center"
                    }}>
                        <Button variant = "contained" color="primary" onClick={this.handleFormSubmit}>회원가입</Button>
                        </div>
                        <Button variant = "outlined" color="primary" onClick={this.handleClose}>닫기</Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

// export default withStyles(styles)(CustomerAdd);
export default CustomerAdd;