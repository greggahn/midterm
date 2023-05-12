import React from "react";
import './App.css';
import Customer from "./components/Customer";
import { Paper } from "@mui/material";
import { TableHead } from "@mui/material";
import { TableBody } from "@mui/material";
import { Table, TableCell, TableRow } from "@mui/material";
// import { makeStyles } from "@mui/styles";
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#3f51b5',
//     },
//     secondary: {
//       main: '#f50057',
//     },
//   },
// });

const styles = theme => ({
  root : {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto'
  },
  table: {
    minWidth: 1080
  }
})

const customers = [

  {
  'id': '1',
  'name': '안현종',
  'age': '23',
  'gender': '남자',
  'mbti': 'entp',
  'ktalk': 'greggahn',
  'schedule': 'https://placeimg.com/64/64/any'
},
{ 
  'id': '2',
  'name': '홍길동',
  'age': '22',
  'gender': '남자',
  'mbti': 'isfp',
  'ktalk': 'gwqwe',
  'schedule': 'https://placeimg.com/64/64/any/1'
},
{
  'id': '3',
  'name': '김김김',
  'age': '20',
  'gender': '여자',
  'mbti': 'entj',
  'ktalk': 'fafg',
  'schedule': 'https://placeimg.com/64/64/any/2'
}
]

class App extends React.Component {
  render(){
    const {classes} = this.props;
    return (
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>이름</TableCell>
              <TableCell>시간표</TableCell>
              <TableCell>나이</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>카카오톡ID</TableCell>
              <TableCell>mbti</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {customers.map(c=>{ return ( <Customer key = {c.id} id={c.id} name={c.name} schedule={c.schedule} age={c.age} gender={c.gender} mbti={c.mbti} ktalk={c.ktalk} />); })}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}
// export default makeStyles(styles)(App);
export default App;

// function App() {

//   return (
//     <div className="App">
//       <div className="logo">
//         <div>국밥</div>
//         <div>KooK-BoB</div>
//       </div>

//       <div className='login-section'>
//           <h2>로그인</h2>
          
//           <span className='login'>
//             <label form='id'>아이디</label>
//             <input type='text' id='id' placeholder='id 입력'></input>
//             <label form='pw'>비밀번호</label>
//             <input type='text' id='pw' placeholder='password'></input>
//           </span>

//           <span className='button'>
//             <input type="submit" value="로그인" class = 'btn'></input>
            
//             <button id="regi-button" class = 'btn'>회원가입</button>
//           </span>

//       </div>

//       <div className= "reg-section">
//         <span className='register'>
//             <label form='id'>아이디</label>
//             <input type='text' id='id' placeholder='id 입력'></input>
//             <label form='pw'>비밀번호</label>
//             <input type='password' id='pw' placeholder='password'></input>
//             <label form='pw'>비밀번호확인</label>
//             <input type='password' id='confirm-pw' placeholder='confirm-password'></input>
//             <label form='name'>이름</label>
//             <input type='text' id='name' placeholder='이름'></input>
//             <label form='age'>나이</label>
//             <input type='text' id='age' placeholder='나이'></input>
//             <label form='sex'>성별</label>
//             <input type='text' id='sex' placeholder='성별'></input>
//             <label form='ktalk'>mbi</label>
//             <input type='text' id='ktalk' placeholder='카카오톡ID'></input>
//             <label form='mbti'>카카오톡ID</label>
//             <input type='text' id='mbti' placeholder='mbti'></input>
            
//           </span>

//           <span className='button'>
//             <input type="submit" value="로그인" class = 'btn'></input>
//             <button id="regi-button" class = 'btn'>회원가입</button>
//           </span>
//       </div>



//       <footer>
//         <p>2023 Webclient Ahn Hyounjong 20202089</p>
//       </footer>
//     </div>
//   );
// }

