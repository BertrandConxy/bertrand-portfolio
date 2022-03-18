import React from 'react';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import client1 from '../../assets/aggy.jpg';
import client2 from '../../assets/odillo.jpg';
import client3 from '../../assets/sauve.webp';
import './testimonials.css';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    id: 1,
    avatar: client1,
    name: 'Agnes',
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat.',
  },

  {
    id: 2,
    avatar: client2,
    name: 'Odillo',
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat.',
  },

  {
    id: 3,
    avatar: client3,
    name: 'Sauve',
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat.',
  },

  {
    id: 4,
    avatar: client1,
    name: 'Agnes',
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat.',
  },
];

const Testimonials = () => (
  <section id="testimonials">
    <h5>Reviews from clients and felllow developers</h5>
    <h2>Testimonials</h2>
    <Swiper
      className="container testimonials__container"
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
    >
      {testimonials.map((reviewer) => (
        <SwiperSlide className="testimonial" key={reviewer.id}>
          <div className="client__avatar">
            <img src={reviewer.avatar} alt="client profile" />
          </div>
          <h5 className="client__name">{reviewer.name}</h5>
          <small className="client__review">{reviewer.review}</small>
        </SwiperSlide>
      ))}
    </Swiper>
  </section>
);

export default Testimonials;
