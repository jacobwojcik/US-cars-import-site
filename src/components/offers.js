import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import {Container,Row,Col} from 'react-bootstrap'
import Iframe from 'react-iframe'
import "./css/marketing.scss"

const Offers = () => (
  <section className="sec3">
      <div>
  
                    
                       <h1> Nasze aktualne oferty </h1>
                    
                    
                        
                        <Iframe url="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FUSAUScars%2Fposts%2F240096900674169&show_text=false&width=552&height=805&appId"
                            width="100%"
                            height="100%"
                        />
                       
                       
                
                </div>
  </section>
)

export default Offers
