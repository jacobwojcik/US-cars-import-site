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
        let n4=Math.ceil((Number(this.state.value)/4*0.29*4.5)+2000);
        
        
        if(Number(this.state.value)<1000){
            n1=150;
        }
        else if(Number(this.state.value)>=1000 && Number(this.state.value)<1200 ){
            n1=200;
        }
        else if(Number(this.state.value)>=1200 && Number(this.state.value)<1300 ){
            n1=225;
        }
        else if(Number(this.state.value)>=1300 && Number(this.state.value)<1400 ){
            n1=240;
        }
        else if(Number(this.state.value)>=1400 && Number(this.state.value)<1500 ){
            n1=250;
        }
        else if(Number(this.state.value)>=1500 && Number(this.state.value)<1600 ){
            n1=260;
        }
        else if(Number(this.state.value)>=1600 && Number(this.state.value)<1700 ){
            n1=275;
        }
        else if(Number(this.state.value)>=1700 && Number(this.state.value)<2000 ){
            n1=285;
        }
        else if(Number(this.state.value)>=1800 && Number(this.state.value)<2000 ){
          n1=300;
        }
        else if(Number(this.state.value)>=2000 && Number(this.state.value)<2400 ){
          n1=325;
        }
        else if(Number(this.state.value)>=2400 && Number(this.state.value)<2500 ){
            n1=335;
        }
        else if(Number(this.state.value)>=2500 && Number(this.state.value)<3000 ){
          n1=350;
        }
        else if(Number(this.state.value)>=3000 && Number(this.state.value)<3500 ){
          n1=400;
        }
        else if(Number(this.state.value)>=3500 && Number(this.state.value)<4000 ){
          n1=450;
        } 
        else if(Number(this.state.value)>=4000 && Number(this.state.value)<4500 ){
          n1=475;
        }
        else if(Number(this.state.value)>=4500 && Number(this.state.value)<5000 ){
          n1=500;
        }
          
        else if(Number(this.state.value)>=5000 && Number(this.state.value)<6000 ){
            n1=525;
        }
        else if(Number(this.state.value)>=6000 && Number(this.state.value)<7500 ){
            n1=550;
        }
        else if(Number(this.state.value)>=7500 && Number(this.state.value)<10000 ){
            n1=575;
        }
        else if(Number(this.state.value)>=10000 && Number(this.state.value)<15000 ){
          n1=600;
        }
        else {
            n1=Math.ceil((Number(this.state.value)*0.04));
        }



        if(Number(this.state.value)<5000 ){
            n2=50;
        }
        else if(Number(this.state.value)>=500 && Number(this.state.value)<20000 ){
            n2=100;
        }
        else {
            n2=250;
        }
       

        let n5= n1+n2+59;
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
    <Col sm={2}></Col>
    <Form.Label column sm={4}>
      <p>Kwota ($)</p>
    </Form.Label>
    <Col sm={3}>
      <Form.Control className="kwota" name="kwota" type="number"  placeholder="Wprowadz kwote" value={this.state.value} onChange={this.handleChange} />
            
    </Col>
    <Col sm={3}></Col>
  </Form.Group>
  <Row className="calcBut">
    <Col  >
    <Button variant="success" onClick={this.handleSubmit}>Potwierdź</Button>
    </Col>
  
  </Row>
  
  
  <Row>
  <Col sm={2} ></Col>
   <Col sm={4} className="calcCol">
    <p>Prowizja aukcyjna</p>
    </Col>
    <Col sm={4} className="calcCol">
    <h1 className="test2">{this.state.auction}$</h1>
    </Col>
    <Col sm={2}></Col>
    </Row>  

  <Row>
  <Col sm={2}></Col>
   <Col sm={4} className="calcCol">
    <p>Opłata za aukcje</p>
    </Col>
    <Col sm={4} className="calcCol">
    <h1 className="test2">{this.state.commission}$</h1>
    </Col>
    <Col sm={2}></Col>
    </Row>

  <Row>
  <Col sm={2}></Col>
   <Col sm={4} className="calcCol">
    <p>Załadunek</p>
    </Col>
    <Col sm={4} className="calcCol">
    <h1 className="test2">{this.state.embark}$</h1>
    </Col>
    <Col sm={2}></Col>
    </Row>

  <Row>
  <Col sm={2}></Col>
   <Col sm={4} className="calcCol">
    <p>Cło</p>
    </Col>
    <Col sm={4} className="calcCol">
    <h1 className="test2">{this.state.custom}PLN</h1>
    </Col>
    <Col sm={2}></Col>
    </Row>
<Row>
  <Col>
  </Col>
</Row>
  <Row >
  <Col sm={2} ></Col>
   <Col sm={4} className="calcCol2">
    <p>Koszt całkowity</p>
    </Col>
    <Col sm={4} className="calcCol2">
    <h1 className="test2">{this.state.sum}$ + {this.state.custom}PLN</h1>
    </Col>
    <Col sm={2}></Col>
    </Row>

  

  
</Form>




            
            
        </section>

    )}
    
}
