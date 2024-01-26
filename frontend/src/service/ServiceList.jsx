import React from 'react'
import ServiceCard from './ServiceCard'
import { Col } from 'reactstrap'

import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const servicesData = [
    {
      imgUrl: weatherImg,
      title: "Calculate Weather",
      desc: "Here i'm showing some example of our services. I hope oyu enjoy it."
    },
    {
      imgUrl: guideImg,
      title: "Best Tour Guider",
      desc: "Here i'm showing some example of our services. I hope oyu enjoy it."
    },
    {
      imgUrl: customizationImg,
      title: "Customization",
      desc: "Here i'm showing some example of our services. I hope oyu enjoy it."
    },
  ];

const ServiceList = () => {
    return (
        <>
          {servicesData.map((item, index) => (
            <Col lg='3' key={index}>
              <ServiceCard item={item}/>
            </Col>
          ))}
        </>
    )
}

export default ServiceList