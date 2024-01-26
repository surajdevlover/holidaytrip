import React from 'react'
import './footer.css'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom'
import logo from  "../../assets/images/logo.png"
import video2 from '../../assets/images/152203.mp4'

const quick_links=[
  {
    path:'./home',
    display:'Home'
  },
  {
    path:'/about',
    display:'About'
  },
  {
    path:'./tours',
    display:'Tours'
  }
]

const quick_links2=[
  {
    path:'./gallery',
    display:'Gallery'
  },
  {
    path:'/login',
    display:'Login'
  },
  {
    path:'./register',
    display:'Register'
  }
]

const Footer = () => {

  const year = new Date().getFullYear()

  return (
    <footer className='footer'>
      <div className="videoDiv">
        <video src={video2} loop autoPlay muted type="video/mp4"></video>
      </div>
      <Container>
        <Row>
          <Col lg='3'>
            <div className="logo">
              <img data-aos="fade-up" src={logo} alt="" />
              <p data-aos="fade-up">thanks to visit this website or portal</p>

              <div data-aos="fade-up" className="social__links d-flex align-items-center gap-4">
                <span>
                  <Link to='#'><i class="ri-youtube-line"></i></Link>
                </span>
                <span>
                  <Link to='#'><i class="ri-facebook-circle-line"></i></Link>
                </span>
                <span>
                  <Link to='#'><i class="ri-instagram-line"></i></Link>
                </span>
                <span>
                  <Link to='#'><i class="ri-twitter-line"></i></Link>
                </span>
              </div>
            </div>
          </Col>
          <Col data-aos="fade-up" lg='3'>
            <h5 className='footer__link-title'>Discover</h5>

            <ListGroup className='footer__quick-links d-flex gap-4'>
              {
                quick_links.map((item,index)=>(
                  <ListGroupItem key={index} className='ps-0 border-0'>
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))
              }
            </ListGroup>
          </Col>
          <Col data-aos="fade-up" lg='3'>
          <h5 className='footer__link-title'>Quick Links</h5>

          <ListGroup className='footer__quick-links d-flex gap-4'>
            {
              quick_links2.map((item,index)=>(
                <ListGroupItem key={index} className='ps-0 border-0'>
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))
            }
          </ListGroup>
          </Col>
          <Col data-aos="fade-up" lg='3'>
          <h5 className='footer__link-title'>Contact</h5>

          <ListGroup className='footer__quick-links d-flex gap-4'>
            <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
              <h6 className='mb-0 d-flex align-items-center gap-2'>
                <span><i class="ri-map-pin-line"></i></span>
                Address:
              </h6>

              <p className='mb-0'>Sanjay Palace, Agra</p>
            </ListGroupItem>
            <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
              <h6 className='mb-0 d-flex align-items-center gap-2'>
                <span><i class="ri-mail-open-line"></i></span>
                Email:
              </h6>

              <p className='mb-0 d-flex gap-2'>xyz.123@gmail.com</p>
            </ListGroupItem>
            <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
              <h6 className='mb-0 d-flex align-items-center gap-2'>
                <span><i class="ri-phone-line"></i></span>
                Phone:
              </h6>

              <p className='mb-0'>+91 9999999999</p>
            </ListGroupItem>
          </ListGroup>
          </Col>

          <Col lg='12' className='text-center pt-5'>
            <p className="copyright">
              Copyright {year}, design and develop by Suraj Srivastav. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer