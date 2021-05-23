import { Component } from "react";
import Card from 'react-bootstrap/Card'
import Table from 'react-bootstrap/Table'
import CardGroup from 'react-bootstrap/CardGroup'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import Navbar from 'react-bootstrap/Navbar'


class Comanyassignment extends Component{
    constructor(){
        super()
    }
    shoot() {
        window.location.href = "/view.html";
    }

    render(){
        return(
            <div>
                <div>
                <Navbar expand="lg" variant="light" bg="light">
  
</Navbar>
                </div>
                <div>
                <CardGroup> 
  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="./images1/google.png" /> 
   
     <Card.Body>
      <Card.Title>Card title</Card.Title>
       
     </Card.Body> 
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer> 
   </Card>
  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="./images1/facebook.jpg" />
    <Card.Body>
      <Card.Title>Card title</Card.Title> 
       
     </Card.Body> 
     <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer> 
   </Card>
  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="./images1/amazon.png" />
    <Card.Body>
      <Card.Title>Card title</Card.Title> 
       
     </Card.Body> 
     <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer> 
   </Card>
</CardGroup> 
</div> 
            
             <div>
                <th>Stock Details Table <Button variant="outline-success">Search</Button></th>
            <Table striped bordered hover>
            
  <thead>
    <tr>
       
       <th>COMPANY NAME</th>
      <th>SYMBOL</th>
      <th>MARKET CAP</th>
      <th></th>
      <th>CURRENT PRICE</th>
    </tr>
  </thead>
  <tbody>
    <tr> 

       <td>141 Capital Inc</td>
      <td>. ONCP</td>
      <td>$145.4k</td>
      <td><Button as="input" type="button" value="View"  onClick={this.shoot}/>{' '}</td>
      <td>$0.001USD</td>
    </tr>
    <tr> 

       <td>Cardlytics Inc</td>
      <td>. CDLX</td>
      <td>$1.88</td>
      <td><Button as="input" type="button" value="Save Data" />{' '}</td>
      <td>$66USD</td>
    </tr>
    <tr> 

       <td>Brightcove Inc</td>
      <td>. BCOV</td>
      <td>$394M</td>
      <td><Button as="input" type="button" value="Save Data" />{' '}</td>
      <td>$10USD</td>
    </tr>
    <tr>
        <td>BigString Corp</td>
        <td>. BSGC</td>
        <td>$543k</td>
        <td><Button as="input" type="button" value="View" />{' '}</td>
        <td>$0.003USD</td>
    </tr>
    <tr> 
         <td>Akamai Technologies Inc</td>
        <td>. AKAM</td>
        <td>$145.4k</td>
        <td><Button as="input" type="button" value="Save Data" />{' '}</td>
        <td>$106USD</td>
    </tr>
    <tr>
    <td>141 Capital Inc</td>
      <td>. ONCP</td>
      <td>$145.4k</td>
      <td><Button as="input" type="button" value="DELETE" />{' '}</td>
      <td>$0.001USD</td>
    </tr>
    <tr>
    <td>BigString Corp</td>
        <td>. BSGC</td>
        <td>$543k</td>
        <td><Button as="input" type="button" value="DELETE" />{' '}</td>
        <td>$0.003USD</td> 
    </tr>
  </tbody>
</Table> 
             </div>
            <div><Button as="input" type="button" value="BACK" />{' '}</div>  
             
            
            </div>
        )
    }
}
export default Comanyassignment