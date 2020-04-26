
import PropTypes from "prop-types"
import React from "react"
import {Container,Row,Col} from 'react-bootstrap'
import "./css/completions.scss"
import Iframe from 'react-iframe'
import 'animate.css/animate.css'
import WOW from "wow.js"
import ReactFancyBox from 'react-fancybox'
import 'react-fancybox/lib/fancybox.css'


class CompletionsList  extends React.Component{
//    if (typeof window !== `undefined`) {
//   componentDidMount(){
//     new WOW().init();
//   }
// }
  render(){
return(
    <section>
    <Container>
      <Row>
        <Col>
         <h1>Nasze realizacje</h1>
        </Col>
      </Row>
      <Row className="wow fadeInUp">
        <Col  >
        <ReactFancyBox
           thumbnail="https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/93246203_232209211462938_6218331776603914240_n.jpg?_nc_cat=101&_nc_sid=8bfeb9&_nc_oc=AQkY5S_BfL3VGMra5c5QJl2mYo7FZgVHQC8jt4n_yEZUKV8DDKPGRJyMnk3BZ--Ul8Q&_nc_ht=scontent-waw1-1.xx&oh=f16246b50376fd6a50803ad59c1b7324&oe=5EC9E306"
           image="https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/93246203_232209211462938_6218331776603914240_n.jpg?_nc_cat=101&_nc_sid=8bfeb9&_nc_oc=AQkY5S_BfL3VGMra5c5QJl2mYo7FZgVHQC8jt4n_yEZUKV8DDKPGRJyMnk3BZ--Ul8Q&_nc_ht=scontent-waw1-1.xx&oh=f16246b50376fd6a50803ad59c1b7324&oe=5EC9E306"/>
        </Col>
        <Col >
        <ReactFancyBox
           thumbnail="https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/93246203_232209211462938_6218331776603914240_n.jpg?_nc_cat=101&_nc_sid=8bfeb9&_nc_oc=AQkY5S_BfL3VGMra5c5QJl2mYo7FZgVHQC8jt4n_yEZUKV8DDKPGRJyMnk3BZ--Ul8Q&_nc_ht=scontent-waw1-1.xx&oh=f16246b50376fd6a50803ad59c1b7324&oe=5EC9E306"
           image="https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/93246203_232209211462938_6218331776603914240_n.jpg?_nc_cat=101&_nc_sid=8bfeb9&_nc_oc=AQkY5S_BfL3VGMra5c5QJl2mYo7FZgVHQC8jt4n_yEZUKV8DDKPGRJyMnk3BZ--Ul8Q&_nc_ht=scontent-waw1-1.xx&oh=f16246b50376fd6a50803ad59c1b7324&oe=5EC9E306"/>
        </Col>
        <Col >
        <ReactFancyBox
           thumbnail="https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/93832640_232209268129599_2287069900436406272_n.jpg?_nc_cat=110&_nc_sid=8bfeb9&_nc_oc=AQnp4NCMjytiUkjA4lABjqvyrJchwGhby-xDAvqyQ-KzkfHq3RvVyNnsfsYPx7Ounfo&_nc_ht=scontent-waw1-1.xx&oh=6d750b2fa9d7018f3462212c9304f246&oe=5ECAD29F"
           image="https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/93832640_232209268129599_2287069900436406272_n.jpg?_nc_cat=110&_nc_sid=8bfeb9&_nc_oc=AQnp4NCMjytiUkjA4lABjqvyrJchwGhby-xDAvqyQ-KzkfHq3RvVyNnsfsYPx7Ounfo&_nc_ht=scontent-waw1-1.xx&oh=6d750b2fa9d7018f3462212c9304f246&oe=5ECAD29F"/>
        </Col>
      </Row>
      <Row className="wow fadeInUp">
        <Col  >
        <ReactFancyBox
           thumbnail="https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/93246203_232209211462938_6218331776603914240_n.jpg?_nc_cat=101&_nc_sid=8bfeb9&_nc_oc=AQkY5S_BfL3VGMra5c5QJl2mYo7FZgVHQC8jt4n_yEZUKV8DDKPGRJyMnk3BZ--Ul8Q&_nc_ht=scontent-waw1-1.xx&oh=f16246b50376fd6a50803ad59c1b7324&oe=5EC9E306"
           image="https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/93246203_232209211462938_6218331776603914240_n.jpg?_nc_cat=101&_nc_sid=8bfeb9&_nc_oc=AQkY5S_BfL3VGMra5c5QJl2mYo7FZgVHQC8jt4n_yEZUKV8DDKPGRJyMnk3BZ--Ul8Q&_nc_ht=scontent-waw1-1.xx&oh=f16246b50376fd6a50803ad59c1b7324&oe=5EC9E306"/>
        </Col>
        <Col >
        <ReactFancyBox
           thumbnail="https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/93246203_232209211462938_6218331776603914240_n.jpg?_nc_cat=101&_nc_sid=8bfeb9&_nc_oc=AQkY5S_BfL3VGMra5c5QJl2mYo7FZgVHQC8jt4n_yEZUKV8DDKPGRJyMnk3BZ--Ul8Q&_nc_ht=scontent-waw1-1.xx&oh=f16246b50376fd6a50803ad59c1b7324&oe=5EC9E306"
           image="https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/93246203_232209211462938_6218331776603914240_n.jpg?_nc_cat=101&_nc_sid=8bfeb9&_nc_oc=AQkY5S_BfL3VGMra5c5QJl2mYo7FZgVHQC8jt4n_yEZUKV8DDKPGRJyMnk3BZ--Ul8Q&_nc_ht=scontent-waw1-1.xx&oh=f16246b50376fd6a50803ad59c1b7324&oe=5EC9E306"/>
        </Col>
        <Col >
        <ReactFancyBox
           thumbnail="https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/93832640_232209268129599_2287069900436406272_n.jpg?_nc_cat=110&_nc_sid=8bfeb9&_nc_oc=AQnp4NCMjytiUkjA4lABjqvyrJchwGhby-xDAvqyQ-KzkfHq3RvVyNnsfsYPx7Ounfo&_nc_ht=scontent-waw1-1.xx&oh=6d750b2fa9d7018f3462212c9304f246&oe=5ECAD29F"
           image="https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/93832640_232209268129599_2287069900436406272_n.jpg?_nc_cat=110&_nc_sid=8bfeb9&_nc_oc=AQnp4NCMjytiUkjA4lABjqvyrJchwGhby-xDAvqyQ-KzkfHq3RvVyNnsfsYPx7Ounfo&_nc_ht=scontent-waw1-1.xx&oh=6d750b2fa9d7018f3462212c9304f246&oe=5ECAD29F"/>
        </Col>
      </Row>
      <Row className="wow fadeInUp">
        <Col  >
        <ReactFancyBox
           thumbnail="https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/93246203_232209211462938_6218331776603914240_n.jpg?_nc_cat=101&_nc_sid=8bfeb9&_nc_oc=AQkY5S_BfL3VGMra5c5QJl2mYo7FZgVHQC8jt4n_yEZUKV8DDKPGRJyMnk3BZ--Ul8Q&_nc_ht=scontent-waw1-1.xx&oh=f16246b50376fd6a50803ad59c1b7324&oe=5EC9E306"
           image="https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/93246203_232209211462938_6218331776603914240_n.jpg?_nc_cat=101&_nc_sid=8bfeb9&_nc_oc=AQkY5S_BfL3VGMra5c5QJl2mYo7FZgVHQC8jt4n_yEZUKV8DDKPGRJyMnk3BZ--Ul8Q&_nc_ht=scontent-waw1-1.xx&oh=f16246b50376fd6a50803ad59c1b7324&oe=5EC9E306"/>
        </Col>
        <Col >
        <ReactFancyBox
           thumbnail="https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/93246203_232209211462938_6218331776603914240_n.jpg?_nc_cat=101&_nc_sid=8bfeb9&_nc_oc=AQkY5S_BfL3VGMra5c5QJl2mYo7FZgVHQC8jt4n_yEZUKV8DDKPGRJyMnk3BZ--Ul8Q&_nc_ht=scontent-waw1-1.xx&oh=f16246b50376fd6a50803ad59c1b7324&oe=5EC9E306"
           image="https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/93246203_232209211462938_6218331776603914240_n.jpg?_nc_cat=101&_nc_sid=8bfeb9&_nc_oc=AQkY5S_BfL3VGMra5c5QJl2mYo7FZgVHQC8jt4n_yEZUKV8DDKPGRJyMnk3BZ--Ul8Q&_nc_ht=scontent-waw1-1.xx&oh=f16246b50376fd6a50803ad59c1b7324&oe=5EC9E306"/>
        </Col>
        <Col >
        <ReactFancyBox
           thumbnail="https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/93832640_232209268129599_2287069900436406272_n.jpg?_nc_cat=110&_nc_sid=8bfeb9&_nc_oc=AQnp4NCMjytiUkjA4lABjqvyrJchwGhby-xDAvqyQ-KzkfHq3RvVyNnsfsYPx7Ounfo&_nc_ht=scontent-waw1-1.xx&oh=6d750b2fa9d7018f3462212c9304f246&oe=5ECAD29F"
           image="https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/93832640_232209268129599_2287069900436406272_n.jpg?_nc_cat=110&_nc_sid=8bfeb9&_nc_oc=AQnp4NCMjytiUkjA4lABjqvyrJchwGhby-xDAvqyQ-KzkfHq3RvVyNnsfsYPx7Ounfo&_nc_ht=scontent-waw1-1.xx&oh=6d750b2fa9d7018f3462212c9304f246&oe=5ECAD29F"/>
        </Col>
      </Row>
      <Row className="wow fadeInUp">
        <Col  >
        <ReactFancyBox
           thumbnail="https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/93246203_232209211462938_6218331776603914240_n.jpg?_nc_cat=101&_nc_sid=8bfeb9&_nc_oc=AQkY5S_BfL3VGMra5c5QJl2mYo7FZgVHQC8jt4n_yEZUKV8DDKPGRJyMnk3BZ--Ul8Q&_nc_ht=scontent-waw1-1.xx&oh=f16246b50376fd6a50803ad59c1b7324&oe=5EC9E306"
           image="https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/93246203_232209211462938_6218331776603914240_n.jpg?_nc_cat=101&_nc_sid=8bfeb9&_nc_oc=AQkY5S_BfL3VGMra5c5QJl2mYo7FZgVHQC8jt4n_yEZUKV8DDKPGRJyMnk3BZ--Ul8Q&_nc_ht=scontent-waw1-1.xx&oh=f16246b50376fd6a50803ad59c1b7324&oe=5EC9E306"/>
        </Col>
        <Col >
        <ReactFancyBox
           thumbnail="https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/93246203_232209211462938_6218331776603914240_n.jpg?_nc_cat=101&_nc_sid=8bfeb9&_nc_oc=AQkY5S_BfL3VGMra5c5QJl2mYo7FZgVHQC8jt4n_yEZUKV8DDKPGRJyMnk3BZ--Ul8Q&_nc_ht=scontent-waw1-1.xx&oh=f16246b50376fd6a50803ad59c1b7324&oe=5EC9E306"
           image="https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/93246203_232209211462938_6218331776603914240_n.jpg?_nc_cat=101&_nc_sid=8bfeb9&_nc_oc=AQkY5S_BfL3VGMra5c5QJl2mYo7FZgVHQC8jt4n_yEZUKV8DDKPGRJyMnk3BZ--Ul8Q&_nc_ht=scontent-waw1-1.xx&oh=f16246b50376fd6a50803ad59c1b7324&oe=5EC9E306"/>
        </Col>
        <Col >
        <ReactFancyBox
           thumbnail="https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/93832640_232209268129599_2287069900436406272_n.jpg?_nc_cat=110&_nc_sid=8bfeb9&_nc_oc=AQnp4NCMjytiUkjA4lABjqvyrJchwGhby-xDAvqyQ-KzkfHq3RvVyNnsfsYPx7Ounfo&_nc_ht=scontent-waw1-1.xx&oh=6d750b2fa9d7018f3462212c9304f246&oe=5ECAD29F"
           image="https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/93832640_232209268129599_2287069900436406272_n.jpg?_nc_cat=110&_nc_sid=8bfeb9&_nc_oc=AQnp4NCMjytiUkjA4lABjqvyrJchwGhby-xDAvqyQ-KzkfHq3RvVyNnsfsYPx7Ounfo&_nc_ht=scontent-waw1-1.xx&oh=6d750b2fa9d7018f3462212c9304f246&oe=5ECAD29F"/>
        </Col>
      </Row>
      <Row className="wow fadeInUp">
        <Col  >
        <ReactFancyBox
           thumbnail="https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/93246203_232209211462938_6218331776603914240_n.jpg?_nc_cat=101&_nc_sid=8bfeb9&_nc_oc=AQkY5S_BfL3VGMra5c5QJl2mYo7FZgVHQC8jt4n_yEZUKV8DDKPGRJyMnk3BZ--Ul8Q&_nc_ht=scontent-waw1-1.xx&oh=f16246b50376fd6a50803ad59c1b7324&oe=5EC9E306"
           image="https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/93246203_232209211462938_6218331776603914240_n.jpg?_nc_cat=101&_nc_sid=8bfeb9&_nc_oc=AQkY5S_BfL3VGMra5c5QJl2mYo7FZgVHQC8jt4n_yEZUKV8DDKPGRJyMnk3BZ--Ul8Q&_nc_ht=scontent-waw1-1.xx&oh=f16246b50376fd6a50803ad59c1b7324&oe=5EC9E306"/>
        </Col>
        <Col >
        <ReactFancyBox
           thumbnail="https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/93246203_232209211462938_6218331776603914240_n.jpg?_nc_cat=101&_nc_sid=8bfeb9&_nc_oc=AQkY5S_BfL3VGMra5c5QJl2mYo7FZgVHQC8jt4n_yEZUKV8DDKPGRJyMnk3BZ--Ul8Q&_nc_ht=scontent-waw1-1.xx&oh=f16246b50376fd6a50803ad59c1b7324&oe=5EC9E306"
           image="https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/93246203_232209211462938_6218331776603914240_n.jpg?_nc_cat=101&_nc_sid=8bfeb9&_nc_oc=AQkY5S_BfL3VGMra5c5QJl2mYo7FZgVHQC8jt4n_yEZUKV8DDKPGRJyMnk3BZ--Ul8Q&_nc_ht=scontent-waw1-1.xx&oh=f16246b50376fd6a50803ad59c1b7324&oe=5EC9E306"/>
        </Col>
        <Col >
        <ReactFancyBox
           thumbnail="https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/93832640_232209268129599_2287069900436406272_n.jpg?_nc_cat=110&_nc_sid=8bfeb9&_nc_oc=AQnp4NCMjytiUkjA4lABjqvyrJchwGhby-xDAvqyQ-KzkfHq3RvVyNnsfsYPx7Ounfo&_nc_ht=scontent-waw1-1.xx&oh=6d750b2fa9d7018f3462212c9304f246&oe=5ECAD29F"
           image="https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/93832640_232209268129599_2287069900436406272_n.jpg?_nc_cat=110&_nc_sid=8bfeb9&_nc_oc=AQnp4NCMjytiUkjA4lABjqvyrJchwGhby-xDAvqyQ-KzkfHq3RvVyNnsfsYPx7Ounfo&_nc_ht=scontent-waw1-1.xx&oh=6d750b2fa9d7018f3462212c9304f246&oe=5ECAD29F"/>
        </Col>
      </Row>
      <Row className="wow fadeInUp">
        <Col  >
        <ReactFancyBox
           thumbnail="https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/93246203_232209211462938_6218331776603914240_n.jpg?_nc_cat=101&_nc_sid=8bfeb9&_nc_oc=AQkY5S_BfL3VGMra5c5QJl2mYo7FZgVHQC8jt4n_yEZUKV8DDKPGRJyMnk3BZ--Ul8Q&_nc_ht=scontent-waw1-1.xx&oh=f16246b50376fd6a50803ad59c1b7324&oe=5EC9E306"
           image="https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/93246203_232209211462938_6218331776603914240_n.jpg?_nc_cat=101&_nc_sid=8bfeb9&_nc_oc=AQkY5S_BfL3VGMra5c5QJl2mYo7FZgVHQC8jt4n_yEZUKV8DDKPGRJyMnk3BZ--Ul8Q&_nc_ht=scontent-waw1-1.xx&oh=f16246b50376fd6a50803ad59c1b7324&oe=5EC9E306"/>
        </Col>
        <Col >
        <ReactFancyBox
           thumbnail="https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/93246203_232209211462938_6218331776603914240_n.jpg?_nc_cat=101&_nc_sid=8bfeb9&_nc_oc=AQkY5S_BfL3VGMra5c5QJl2mYo7FZgVHQC8jt4n_yEZUKV8DDKPGRJyMnk3BZ--Ul8Q&_nc_ht=scontent-waw1-1.xx&oh=f16246b50376fd6a50803ad59c1b7324&oe=5EC9E306"
           image="https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/93246203_232209211462938_6218331776603914240_n.jpg?_nc_cat=101&_nc_sid=8bfeb9&_nc_oc=AQkY5S_BfL3VGMra5c5QJl2mYo7FZgVHQC8jt4n_yEZUKV8DDKPGRJyMnk3BZ--Ul8Q&_nc_ht=scontent-waw1-1.xx&oh=f16246b50376fd6a50803ad59c1b7324&oe=5EC9E306"/>
        </Col>
        <Col >
        <ReactFancyBox
           thumbnail="https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/93832640_232209268129599_2287069900436406272_n.jpg?_nc_cat=110&_nc_sid=8bfeb9&_nc_oc=AQnp4NCMjytiUkjA4lABjqvyrJchwGhby-xDAvqyQ-KzkfHq3RvVyNnsfsYPx7Ounfo&_nc_ht=scontent-waw1-1.xx&oh=6d750b2fa9d7018f3462212c9304f246&oe=5ECAD29F"
           image="https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/93832640_232209268129599_2287069900436406272_n.jpg?_nc_cat=110&_nc_sid=8bfeb9&_nc_oc=AQnp4NCMjytiUkjA4lABjqvyrJchwGhby-xDAvqyQ-KzkfHq3RvVyNnsfsYPx7Ounfo&_nc_ht=scontent-waw1-1.xx&oh=6d750b2fa9d7018f3462212c9304f246&oe=5ECAD29F"/>
        </Col>
      </Row>
      <Row className="wow fadeInUp">
        <Col  >
        <ReactFancyBox
           thumbnail="https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/93246203_232209211462938_6218331776603914240_n.jpg?_nc_cat=101&_nc_sid=8bfeb9&_nc_oc=AQkY5S_BfL3VGMra5c5QJl2mYo7FZgVHQC8jt4n_yEZUKV8DDKPGRJyMnk3BZ--Ul8Q&_nc_ht=scontent-waw1-1.xx&oh=f16246b50376fd6a50803ad59c1b7324&oe=5EC9E306"
           image="https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/93246203_232209211462938_6218331776603914240_n.jpg?_nc_cat=101&_nc_sid=8bfeb9&_nc_oc=AQkY5S_BfL3VGMra5c5QJl2mYo7FZgVHQC8jt4n_yEZUKV8DDKPGRJyMnk3BZ--Ul8Q&_nc_ht=scontent-waw1-1.xx&oh=f16246b50376fd6a50803ad59c1b7324&oe=5EC9E306"/>
        </Col>
        <Col >
        <ReactFancyBox
           thumbnail="https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/93246203_232209211462938_6218331776603914240_n.jpg?_nc_cat=101&_nc_sid=8bfeb9&_nc_oc=AQkY5S_BfL3VGMra5c5QJl2mYo7FZgVHQC8jt4n_yEZUKV8DDKPGRJyMnk3BZ--Ul8Q&_nc_ht=scontent-waw1-1.xx&oh=f16246b50376fd6a50803ad59c1b7324&oe=5EC9E306"
           image="https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/93246203_232209211462938_6218331776603914240_n.jpg?_nc_cat=101&_nc_sid=8bfeb9&_nc_oc=AQkY5S_BfL3VGMra5c5QJl2mYo7FZgVHQC8jt4n_yEZUKV8DDKPGRJyMnk3BZ--Ul8Q&_nc_ht=scontent-waw1-1.xx&oh=f16246b50376fd6a50803ad59c1b7324&oe=5EC9E306"/>
        </Col>
        <Col >
        <ReactFancyBox
           thumbnail="https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/93832640_232209268129599_2287069900436406272_n.jpg?_nc_cat=110&_nc_sid=8bfeb9&_nc_oc=AQnp4NCMjytiUkjA4lABjqvyrJchwGhby-xDAvqyQ-KzkfHq3RvVyNnsfsYPx7Ounfo&_nc_ht=scontent-waw1-1.xx&oh=6d750b2fa9d7018f3462212c9304f246&oe=5ECAD29F"
           image="https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/93832640_232209268129599_2287069900436406272_n.jpg?_nc_cat=110&_nc_sid=8bfeb9&_nc_oc=AQnp4NCMjytiUkjA4lABjqvyrJchwGhby-xDAvqyQ-KzkfHq3RvVyNnsfsYPx7Ounfo&_nc_ht=scontent-waw1-1.xx&oh=6d750b2fa9d7018f3462212c9304f246&oe=5ECAD29F"/>
        </Col>
      </Row>
      <Row className="wow fadeInUp">
        <Col  >
        <ReactFancyBox
           thumbnail="https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/93246203_232209211462938_6218331776603914240_n.jpg?_nc_cat=101&_nc_sid=8bfeb9&_nc_oc=AQkY5S_BfL3VGMra5c5QJl2mYo7FZgVHQC8jt4n_yEZUKV8DDKPGRJyMnk3BZ--Ul8Q&_nc_ht=scontent-waw1-1.xx&oh=f16246b50376fd6a50803ad59c1b7324&oe=5EC9E306"
           image="https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/93246203_232209211462938_6218331776603914240_n.jpg?_nc_cat=101&_nc_sid=8bfeb9&_nc_oc=AQkY5S_BfL3VGMra5c5QJl2mYo7FZgVHQC8jt4n_yEZUKV8DDKPGRJyMnk3BZ--Ul8Q&_nc_ht=scontent-waw1-1.xx&oh=f16246b50376fd6a50803ad59c1b7324&oe=5EC9E306"/>
        </Col>
        <Col >
        <ReactFancyBox
           thumbnail="https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/93246203_232209211462938_6218331776603914240_n.jpg?_nc_cat=101&_nc_sid=8bfeb9&_nc_oc=AQkY5S_BfL3VGMra5c5QJl2mYo7FZgVHQC8jt4n_yEZUKV8DDKPGRJyMnk3BZ--Ul8Q&_nc_ht=scontent-waw1-1.xx&oh=f16246b50376fd6a50803ad59c1b7324&oe=5EC9E306"
           image="https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/93246203_232209211462938_6218331776603914240_n.jpg?_nc_cat=101&_nc_sid=8bfeb9&_nc_oc=AQkY5S_BfL3VGMra5c5QJl2mYo7FZgVHQC8jt4n_yEZUKV8DDKPGRJyMnk3BZ--Ul8Q&_nc_ht=scontent-waw1-1.xx&oh=f16246b50376fd6a50803ad59c1b7324&oe=5EC9E306"/>
        </Col>
        <Col >
        <ReactFancyBox
           thumbnail="https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/93832640_232209268129599_2287069900436406272_n.jpg?_nc_cat=110&_nc_sid=8bfeb9&_nc_oc=AQnp4NCMjytiUkjA4lABjqvyrJchwGhby-xDAvqyQ-KzkfHq3RvVyNnsfsYPx7Ounfo&_nc_ht=scontent-waw1-1.xx&oh=6d750b2fa9d7018f3462212c9304f246&oe=5ECAD29F"
           image="https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/93832640_232209268129599_2287069900436406272_n.jpg?_nc_cat=110&_nc_sid=8bfeb9&_nc_oc=AQnp4NCMjytiUkjA4lABjqvyrJchwGhby-xDAvqyQ-KzkfHq3RvVyNnsfsYPx7Ounfo&_nc_ht=scontent-waw1-1.xx&oh=6d750b2fa9d7018f3462212c9304f246&oe=5ECAD29F"/>
        </Col>
      </Row>
      <Row className="wow fadeInUp">
        <Col  >
        <ReactFancyBox
           thumbnail="https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/93246203_232209211462938_6218331776603914240_n.jpg?_nc_cat=101&_nc_sid=8bfeb9&_nc_oc=AQkY5S_BfL3VGMra5c5QJl2mYo7FZgVHQC8jt4n_yEZUKV8DDKPGRJyMnk3BZ--Ul8Q&_nc_ht=scontent-waw1-1.xx&oh=f16246b50376fd6a50803ad59c1b7324&oe=5EC9E306"
           image="https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/93246203_232209211462938_6218331776603914240_n.jpg?_nc_cat=101&_nc_sid=8bfeb9&_nc_oc=AQkY5S_BfL3VGMra5c5QJl2mYo7FZgVHQC8jt4n_yEZUKV8DDKPGRJyMnk3BZ--Ul8Q&_nc_ht=scontent-waw1-1.xx&oh=f16246b50376fd6a50803ad59c1b7324&oe=5EC9E306"/>
        </Col>
        <Col >
        <ReactFancyBox
           thumbnail="https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/93246203_232209211462938_6218331776603914240_n.jpg?_nc_cat=101&_nc_sid=8bfeb9&_nc_oc=AQkY5S_BfL3VGMra5c5QJl2mYo7FZgVHQC8jt4n_yEZUKV8DDKPGRJyMnk3BZ--Ul8Q&_nc_ht=scontent-waw1-1.xx&oh=f16246b50376fd6a50803ad59c1b7324&oe=5EC9E306"
           image="https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/93246203_232209211462938_6218331776603914240_n.jpg?_nc_cat=101&_nc_sid=8bfeb9&_nc_oc=AQkY5S_BfL3VGMra5c5QJl2mYo7FZgVHQC8jt4n_yEZUKV8DDKPGRJyMnk3BZ--Ul8Q&_nc_ht=scontent-waw1-1.xx&oh=f16246b50376fd6a50803ad59c1b7324&oe=5EC9E306"/>
        </Col>
        <Col >
        <ReactFancyBox
           thumbnail="https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/93832640_232209268129599_2287069900436406272_n.jpg?_nc_cat=110&_nc_sid=8bfeb9&_nc_oc=AQnp4NCMjytiUkjA4lABjqvyrJchwGhby-xDAvqyQ-KzkfHq3RvVyNnsfsYPx7Ounfo&_nc_ht=scontent-waw1-1.xx&oh=6d750b2fa9d7018f3462212c9304f246&oe=5ECAD29F"
           image="https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/93832640_232209268129599_2287069900436406272_n.jpg?_nc_cat=110&_nc_sid=8bfeb9&_nc_oc=AQnp4NCMjytiUkjA4lABjqvyrJchwGhby-xDAvqyQ-KzkfHq3RvVyNnsfsYPx7Ounfo&_nc_ht=scontent-waw1-1.xx&oh=6d750b2fa9d7018f3462212c9304f246&oe=5ECAD29F"/>
        </Col>
      </Row>
      
      
     
      
     
    </Container>
    </section>
);
  }
}
export default CompletionsList
