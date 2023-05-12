// import React from "react";
// import Customer from "./Customer";
// import { Dialog } from "@mui/material";
// import {DialogActions} from "@mui/material";
// import {DialogTitle} from "@mui/material";
// import {DialogContent} from "@mui/material";
// import {TextField} from "@mui/material";
// import {Button} from "@mui/material";
// import CustomerAdd from './CustomerAdd'
// import axios from 'axios';


// class Login extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             namearr: [],
//             name: '',
//             inputname: '',
//             ktalkarr: [],
//             ktalk: '',
//             inputktalk:'',
//             open: false,
//             login: false
//         }
        
//     }

//     handleClickOpen = () =>{
//         this.setState({
//             open: true
//         })
//     }

//     handleClose= () =>{
//         this.setState({
//             name: '',
//             inputname: '',
//             ktalk: '',
//             inputktalk:'',
//             open: false,
//             login: false
//         })
//     }

//     handleValueChange =(e) => {
//         let nextstate ={};
//         nextstate[e.target.name] = e.target.value;
//         this.setState(nextstate);
//     }

//     // componentDidMount(){
//     //     this.callApi()
//     //       .then(res => this.setState({customers : res}))
//     //       .catch(err => console.log(err));
//     // }
  
//     callApi = async () =>{
//       const response = await fetch('/api/customers');
//       const body = await response.json();
//       return body;
//     }

    

//     handleFormLogin = () =>{
//       this.callApi()
//       .then(res => {
//         for(let k = 0; k<res.length; k++){
//             this.state.namearr.push(<p key={k}>{res[k].name}</p>);
//             this.state.ktalkarr.push(<p key={k}>{res[k].ktalk}</p>);
//         }
//         // res.map((c) => <this.state name = {c.name}/>)
//         // this.setState({name : res.data})
//         // this.setState({ktalk : this.state.ktalk})
//         console.log('!!!!!!!',this.state);
//         for(let k = 0; k<res.length; k++){
//             if(this.state.namearr[k].props !== this.state.inputname){
//                 // id 일치하지 않는 경우 userId = undefined, msg = '입력하신 id 가 일치하지 않습니다.'
//                 console.log('======================',this.state.name[k])
//                 alert('입력하신 id 가 일치하지 않습니다.')
//               } 
//             else if(this.state.namearr[k] === this.state.inputname){
//                   // id는 있지만, pw 는 다른 경우 userId = null , msg = undefined
//                   if(this.state.ktalkarr[k] !== this.state.inputktalk){
//                   console.log('======================','입력하신 비밀번호 가 일치하지 않습니다.')
//                   alert('입력하신 비밀번호 가 일치하지 않습니다.')
//                   }
//                   else{
//                       console.log('======================','로그인 성공')
//                        this.setState({login:true})
//                   }
//             }
//         }
//       })
//       .catch(err => console.log(err))
//     }
    
//     render() {

//         return (
//             <div>
//                 <Button variant="contained" color="primary" onClick={this.handleClickOpen}>
//                     로그인
//                 </Button>
//                 <Dialog open={this.state.open} onClose={this.handleClose}>
//                     <DialogTitle>로그인</DialogTitle>
//                     <DialogContent>
//                         <TextField label = "이름" type="text" name="inputname" value={this.state.inputname} onChange={this.handleValueChange}/><br/>
//                         <TextField label = "카카오톡ID" type="text" name="inputktalk" value={this.state.inputktalk} onChange={this.handleValueChange}/><br/>
//                     </DialogContent>
//                     <DialogActions>
//                         <Button styles = "align-items: center" variant = "contained" color="primary" onClick={this.handleFormLogin}>로그인</Button>
//                         <CustomerAdd></CustomerAdd>
//                         <Button variant = "outlined" color="primary" onClick={this.handleClose}>닫기</Button>
//                     </DialogActions>
//                 </Dialog>
//             </div>
//         )
//     }
// }

// export default Login;
// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
 
// // function Login() {
// //     const [inputname, setInputname] = useState('')
// //     const [inputktalk, setInputktalk] = useState('')
 
// //     const handleInputId = (e) => {
// //         setInputname(e.target.value)
// //     }
 
// //     const handleInputPw = (e) => {
// //         setInputktalk(e.target.value)
// //     }
 
// //     const onClickLogin = () => {
// //         console.log('click login')
// //         console.log('ID : ', inputname)
// //         console.log('PW : ', inputktalk)
// //         axios.post('/user_inform/onLogin', null, {
// //             params: {
// //             'user_id': inputname,
// //             'user_pw': inputktalk
// //             }
// //         })
// //         .then(res => {
// //             console.log(res)
// //             console.log('res.data.userId :: ', res.data.name)
// //             if(res.data.name === undefined){
// //                 // id 일치하지 않는 경우 userId = undefined, msg = '입력하신 id 가 일치하지 않습니다.'
// //                 alert('입력하신 id 가 일치하지 않습니다.')
// //             } else if(res.data.name === null){
// //                 // id는 있지만, pw 는 다른 경우 userId = null , msg = undefined
// //                 console.log('======================','입력하신 비밀번호 가 일치하지 않습니다.')
// //                 alert('입력하신 비밀번호 가 일치하지 않습니다.')
// //             } else if(res.data.name === inputname) {
// //                 // id, pw 모두 일치 userId = userId1, msg = undefined
// //                 console.log('======================','로그인 성공')
// //                 sessionStorage.setItem('user_id', inputname)
// //             }
// //             // 작업 완료 되면 페이지 이동(새로고침)
// //             document.location.href = '/'
// //         })
// //         .catch()
// //     }
 
// //      useEffect(() => {
// //          axios.get('/user_inform/login')
// //          .then(res => console.log(res))
// //          .catch()
// //      },[])
// //      return(
//         <div>
//             <Button variant="contained" color="primary" onClick={onClickLogin}>
//                 로그인
//             </Button>
//                          <Dialog open={this.state.open} onClose={this.handleClose}>
//                              <DialogTitle>로그인</DialogTitle>
//                              <DialogContent>
//                                  <TextField label = "이름" type="text" name="inputname" value={inputname} onChange={handleInputId}/><br/>
//                                  <TextField label = "카카오톡ID" type="text" name="inputktalk" value={inputktalk} onChange={handleInputPw}/><br/>
//                        </DialogContent>
//                              <DialogActions>
//                                  <Button styles = "align-items: center" variant = "contained" color="primary" onClick={onClickLogin}>로그인</Button>
//                                  <CustomerAdd></CustomerAdd>
//                                  {/* <Button variant = "outlined" color="primary" onClick={this.handleClose}>닫기</Button> */}
//                              </DialogActions>
//                          </Dialog>
//                      </div>
//     )
// }
 
// // export default Login;

