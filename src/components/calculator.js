import React from 'react'
import {Container,Row,Col,ProgressBar,Form,Button} from 'react-bootstrap'
import "./css/calculator.scss"



export default class Calc extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            auction:0,
            commission:0,
            embark:0,
            custom:0,
            sum:0
    };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {    
          this.setState({value: event.target.value});  
        }

      handleSubmit(event) {
        let n1= Number(this.state.value);
        let n2= Number(this.state.value);
        let n4= (Number(this.state.value)/4*0.29*4.5)+2000;
        let n5= Number(this.state.value);
        
        if(Number(this.state.value)<1000){
            n1=185;
        }
        else if(Number(this.state.value)>=1000 && Number(this.state.value)>1200 ){
            n1=200;
        }
        else if(Number(this.state.value)>=1200 && Number(this.state.value)>1300 ){
            n1=225;
        }
        else if(Number(this.state.value)>=1300 && Number(this.state.value)>1400 ){
            n1=240;
        }
        else if(Number(this.state.value)>=1400 && Number(this.state.value)>1500 ){
            n1=250;
        }
        else if(Number(this.state.value)>=1500 && Number(this.state.value)>1600 ){
            n1=260;
        }
        else if(Number(this.state.value)>=1600 && Number(this.state.value)>1700 ){
            n1=275;
        }
        else if(Number(this.state.value)>=1700 && Number(this.state.value)>1800 ){
            n1=285;
        }
        
       


        this.setState({auction: n1});
        this.setState({commission: n2});
        this.setState({embark: 59});
        this.setState({custom: n4});
        this.setState({sum: n5});
        event.preventDefault();
      }

    render(){
    return (
        <section className="calculator">
            <Form>
                <h1>Kalkulator prowizji</h1>
  <Form.Group as={Row} controlId="formHorizontal">
    <Form.Label column sm={2}>
      <p>Kwota ($)</p>
    </Form.Label>
    <Col sm={10}>
      <Form.Control className="kwota" name="kwota" type="number"  placeholder="Wprowadz kwote" value={this.state.value} onChange={this.handleChange} />
            
    </Col>
  </Form.Group>
  <Button onClick={this.handleSubmit}>Potwierdz</Button>
  <Form.Group as={Row} controlId="formHorizontal">
    <Form.Label column sm={2}>
    <p>Prowizja domu aukcyjnego</p>
    </Form.Label>
    <Col sm={10}>
    <h1 className="test2">{this.state.auction}</h1>
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formHorizontal">
    <Form.Label column sm={2}>
    <p>Oplata za aukcje</p>
    </Form.Label>
    <Col sm={10}>
    <h1 className="test2">{this.state.commission}</h1>
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formHorizontal">
    <Form.Label column sm={2}>
    <p>Oplata za zaladunek</p>
    </Form.Label>
    <Col sm={10}>
    <h1 className="test2">{this.state.embark}</h1>
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formHorizontal">
    <Form.Label column sm={2}>
    <p>Oplata celna</p>
    </Form.Label>
    <Col sm={10}>
    <h1 className="test2">{this.state.custom}</h1>
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formHorizontal">
    <Form.Label column sm={2}>
    <p>Koszt calkowity</p>
    </Form.Label>
    <Col sm={10}>
    <h1 className="test2">{this.state.sum}</h1>
    </Col>
  </Form.Group>

  

  
</Form>




            
            
        </section>

    )}
    
}
