import React,{useState,useEffect} from 'react'
import axios from'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row,Card,Col} from 'react-bootstrap'

function Userlist() {
   const [user, setUser] = useState([]) 
  useEffect(()=>{
   const fetchData=()=>{
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(res=>setUser(res.data))
    .catch(err=>console.log(err))
   }
   fetchData()
  },[])

  return(
   <div>
   <Container>
    <Row>

   {user.map(user => (
    <Col sm="14" md="4" >
      
  <Card  border="success" style={{ width: '23em',height:'19rem', justifyContent:'space-between'}}>
    <Card.Header style={{  backgroundColor: 'rgb(106, 177, 106)' }} >{user.username}</Card.Header>
    <Card.Body>
      <Card.Title style={{fontStyle:'bold'}}> {user.name} </Card.Title>
      <Card.Text style={{display:'flex',flexDirection:'column '}} >
        
        <h1 style={{fontSize:'17px'}}>Email: {user.email}</h1>
        <h1 style={{fontSize:'17px'}}>Adress: {user.address.street},{user.address.suite},{user.address.geo.lat}</h1>
        <h1 style={{fontSize:'17px'}}>Contact: {user.phone}</h1>
        <h1 style={{fontSize:'17px'}}>Website: {user.website}</h1>
        <h1 style={{fontSize:'17px'}}>Company:{user.company.name},{user.company.catchPhrase}</h1>
      </Card.Text>
    </Card.Body>
  </Card>
  <br />
  <br />
  </Col>   
))}
   </Row>
   </Container>
 </div>
 
  )
  }
export default Userlist;





