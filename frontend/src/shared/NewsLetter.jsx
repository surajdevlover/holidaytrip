import React from 'react'
import './newsletter.css'

import { Container, Row, Col } from 'reactstrap'
import maleTourist from '../assets/images/male-tourist.png'

const NewsLetter = () => {
  return (
    <section className='newsletter'>
        <Container data-aos="fade-right">
            <Row>
                <Col lg='6'>
                    <div className="newsletter__content">
                        <h2>Subscribe now to get more useful travling information.</h2>

                        <div className="newsletter__input">
                            <input type="email" placeholder='Enter your email'/>
                            <button className='btn newsletter__btn'>Subscribe</button>
                        </div>

                        <p>
                            We are happy to see you on our website and please check again for your happiness.
                        </p>
                    </div>
                </Col>
                <Col lg='6'>
                    <div className="newsletter__img">
                        <img src={maleTourist} alt="" />
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default NewsLetter