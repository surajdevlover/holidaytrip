import React, {useEffect} from 'react'
import '../styles/home.css'

import { Container, Row, Col } from 'reactstrap'
// import heroImg from '../assets/images/hero-img01.jpg'
// import heroImg02 from '../assets/images/hero-img02.jpg'
// import heroVedio from '../assets/images/hero-video.mp4'
import worldImg from '../assets/images/world.png'
import Subtitle from './../shared/Subtitle'
import experienceImg from '../assets/images/experience.png'
import video from '../../src/assets/images/taj_mahal.mp4'
import SearchBar from '../shared/SearchBar'
import ServiceList from '../service/ServiceList'
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList'
import MasonryImagesGallery from '../components/Image-gallery/MasonryImagesGallery'
import Testimonials from '../components/Testimonial/Testimonials'

import Aos from 'aos'
import 'aos/dist/aos.css'
import NewsLetter from '../shared/NewsLetter'


const Home = () => {

  // create a reacte hook for scroll animation
  useEffect(()=>{
    Aos.init({duration: 2000})
}, [])


  return <>

  {/* ============== hero section start =========== */}
  <section>
    <div className="overlay">
      <video muted autoPlay loop>
        <source src={video} type="video/mp4"/>
      </video>
    </div>
    <Container>
      
      <Row>
        <Col lg='6'>
          <div className='hero__content'>
            <div className="hero__subtitle d-flex align-items-center">
              <Subtitle Subtitle={"Know Before You Go"}/>
              <img data-aos="fade-right" src={worldImg} alt="" />
            </div>
            <h1 data-aos="fade-up">Traveling opens the door to creating
              <span data-aos="fade-up" className='highlight'>&nbsp;memories</span>
            </h1>
            <p data-aos="fade-up">
            At <span data-aos="fade-up" className='highlight'>#holiday</span> Travel, our hearts beat with a passion for opening up the world to everyone. 
            We live and breathe the belief that travel should be a universal joy, not a privilege. 
            Our mission is crystal clear: to weave a tapestry of accessibility and enjoyment, 
            ensuring that the wonders of the world are within reach for every soul seeking adventure.
            </p>
          </div>
        </Col>

        {/* <Col lg='2'>
          <div className='hero__img-box'>
            <img src={heroImg} alt="" />
          </div>
        </Col> */}
        {/* <Col lg='2'>
          <div className='hero__img-box mt-4'>
            <video muted autoPlay loop src={heroVedio} alt="" controls/>
          </div>
        </Col> */}
        {/* <Col lg='2'>
          <div className='hero__img-box mt-5'>
            <img src={heroImg02} alt="" />
          </div>
        </Col> */}

        <SearchBar />
      </Row>
    </Container>
  </section>
  {/* ============== hero section end =========== */}

  <section>
    <Container>
      <Row>
        <Col lg='3'>
          <h5 data-aos="fade-up" className='services__subtitle'> What we serve </h5>
          <h2 data-aos="fade-up" className='services__title'>We offer our best services</h2>
        </Col>
        <ServiceList/>
      </Row>
    </Container>
  </section>


  {/* =================== tour section start ================== */}
  <section>
    <Container>
      <Row>
        <Col lg='12' className='mb-5'>
          <Subtitle data-aos="fade-up" Subtitle={'Explore'}/>
          <h2 data-aos="fade-up" className='featured__tour-title'>Our featured tours</h2>
        </Col>
        <FeaturedTourList/>
      </Row>
    </Container>
  </section>
  {/* =================== tour section end ================== */}

  {/* =================== experience section start ================== */}
  <section>
    <Container>
      <Row>
        <Col lg='6'>
          <div className="experience__content">
            <Subtitle data-aos="fade-up" Subtitle={'Experience'} />

            <h2 data-aos="fade-up">
              With our all experience <br /> we will serve you
            </h2>
            <p data-aos="fade-up">
              We thought your experience was so good with us.
              <br />
              Hope you will come again in future. 
            </p>
          </div>

          <div className="counter__wrapper d-flex align-items-center gap-5">
            <div className="counter__box">
              <span data-aos="fade-up">12k+</span>
              <h6 data-aos="fade-up">Successfull trip</h6>
            </div>
            <div className="counter__box">
              <span data-aos="fade-up">5k+</span>
              <h6 data-aos="fade-up">Regular clients</h6>
            </div>
            <div className="counter__box">
              <span data-aos="fade-up">5</span>
              <h6 data-aos="fade-up">Years experience</h6>
            </div>
          </div>
        </Col>
        <Col lg='6'>
          <div className="experience__img">
            <img data-aos="fade-up" src={experienceImg} alt="" />
          </div>
        </Col>
      </Row>
    </Container>
  </section>
  {/* =================== experience section end ================== */}

  {/* =================== gallery section start ================== */}
  <section>
    <Container>
      <Row>
        <Col lg='12'>
          <Subtitle data-aos="fade-up" Subtitle={'Gallery'}/>
          <h2 data-aos="fade-up" className='gallery__title'>
            Visit our customers tour gallery
          </h2>
        </Col>
        <Col lg='12'>
          <MasonryImagesGallery/>
        </Col>
      </Row>
    </Container>
  </section>
  {/* =================== gallery section end ================== */}

  {/* =================== testimonial section start ================== */}
  <section>
    <Container>
      <Row>
        <Col lg='12'>
          <Subtitle data-aos="fade-up" Subtitle={'Fans Love'} />
          <h2 data-aos="fade-up" className="testimonial__title">What our fans says about us</h2>
        </Col>
        <Col lg='12'>
          <Testimonials/>
        </Col>
      </Row>
    </Container>
  </section>
  {/* =================== testimonial section end ================== */}
  
  <NewsLetter/>
  </>
}

export default Home