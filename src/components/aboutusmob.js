import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserTie,faChartLine} from '@fortawesome/free-solid-svg-icons'
import "./css/header.scss"



class AboutusMob  extends React.Component{
    
    
    render(){
    return (
        <section className="aboutusmob">
            <h1>Cechuje nas:</h1>
            <div className="wrappermob">
                <div className="bgmob">
                    <h1>PROFESJONALIZM</h1>
                </div>
                <div className="bgmob">
                <h1>SZYBKOŚĆ</h1>
                </div>
                <div className="bgmob">
                <h1>SUMIENNOŚĆ</h1>
                </div>
                <div className="bgmob">
                <h1>100% SATYSFAKCJI</h1>
                </div>

            </div>

        </section>

    );
}
}
export default AboutusMob
