import React from 'react'
import { Card, CardBody } from 'reactstrap'
import { Link } from 'react-router-dom'
import calcutaleAvgRating from '../utils/avgRating';

import './tour-card.css';

const TourCard = ({tour}) => {

    const {id, title, city, photo, price, featured, reviews} = tour;

    const {totalRating, avgRating} = calcutaleAvgRating(reviews);

  return (
    <div className='tour__card'>
        <Card  data-aos="fade-up">
            <div className="tour__img">
                <Link to={id}><img src={photo} alt="tour-img" /></Link>
                {featured && <span>Featured</span>}
            </div>
            <CardBody>
                <div className="card__top d-felx align-itmes-center justify-content-between">
                    <span className="tour__location d-felx align-itmes-center gap-1">
                        <i class="ri-map-pin-line"></i> {city}
                    </span>
                    <span className="tour__rating d-felx align-itmes-center gap-10">
                        <i class="ri-star-fill"></i> {avgRating === 0 ? null : avgRating}
                        {totalRating === 0 ? (
                            "Not Rated"
                            ) : (
                            <span>({reviews.length})</span>
                            )}
                        
                    </span>
                </div>

                <h5 className="tour__title">
                    <Link to={id}>{title}</Link>
                </h5>

                <div className="card__bottom d-felx align-itmes-center justify-content-between mt-3">
                    <h5>${price} <span>/per person</span></h5>

                    <button className="btn booking__btn d-felx align-itmes-center justify-content-between">
                        <Link to={id}>Book Now</Link>
                    </button>
                </div>
            </CardBody>
        </Card>
        
    </div>
  )
}

export default TourCard