import React from "react";
import '../App.css';
import Customer from "./Customer";
import { Paper } from "@mui/material";
import { TableHead } from "@mui/material";
import { TableBody } from "@mui/material";
import { Table, TableCell, TableRow } from "@mui/material";
import { CircularProgress } from '@mui/material';
import {Button} from '@mui/material'
import Myinfo from "./myinfo";
class Legister extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      customers: '',
      completed: 0
    }
  }

  stateRefresh = () => {
    this.setState({
      customers: '',
      completed: 0
    });
    this.callApi()
      .then(res => this.setState({customers : res}))
      .catch(err => console.log(err));
  }

  componentDidMount(){
    this.tumer = setInterval(this.progress, 20);
    this.callApi()
      .then(res => this.setState({customers : res}))
      .catch(err => console.log(err));
  }

  callApi = async () =>{
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;
  }

  progress = () => {
    const {completed} = this.state;
    this.setState({ completed: completed >= 100 ? 0 : completed + 1});
  }

  render(){
    return (
      <div>
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
            {this.state.customers ? this.state.customers.map(c=>{ 
              return ( <Customer stateRefresh={this.stateRefresh} key = {c.id} id={c.id} name={c.name} schedule={c.schedule} age={c.age} gender={c.gender} mbti={c.mbti} ktalk={c.ktalk} />); 
            }) : 
            <TableRow>
              <TableCell colSpan="6" align="center">
                <CircularProgress variant="determinate" value={this.state.completed}/>
              </TableCell>
            </TableRow>}
          </TableBody>
        </Table>
      </Paper>
      <div style={{
                        display: "flex",
                        justifyContent:"center"
                    }}>
                        <Myinfo></Myinfo>
                    </div>
      </div>
    );
  }
}
export default Legister;
