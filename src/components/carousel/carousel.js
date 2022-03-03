import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'

import { image1 } from '../../../static/assets/images/prueba1.jpg'
import { image2 } from '../../../static/assets/images/prueba2.jpg'
import { image3 } from '../../../static/assets/images/prueba3.jpg'
import { image4 } from '../../../static/assets/images/prueba4.jpg'
import { image5 } from '../../../static/assets/images/prueba5.jpg'



export default class CarouselPage extends Component {

    render() {
        const { className } = this.props;
        return (
            <div className='carousel'>
                <Carousel className='carousel-container' infiniteLoop={true} autoPlay={true} interval={4000} showThumbs={false} >
                    <div className='carousel-container__item'>
                        <img src='../../../static/assets/images/prueba1.jpg' />

                    </div>

                    <div className='carousel-container__item'>
                        <img src='../../../static/assets/images/prueba2.jpg' />
                        {/* <p className="carousel-container__text legend" style={customs}>Samsung</p> */}
                    </div>

                    <div>
                        <img src='../../../static/assets/images/prueba3.jpg' />
                    </div>
                    <div>
                        <img src='../../../static/assets/images/prueba4.jpg' />
                    </div>
                    <div>
                        <img src='../../../static/assets/images/prueba5.jpg' />
                    </div>

                </Carousel >
            </div>
        );
    }
}








// import React from 'react';
// import { Carousel } from 'react-bootstrap';
// import Button from 'react-bootstrap/Button';

// const CarouselPage = () => {
//     return (
//         <Carousel>
//             <Carousel.Item>
//                 <img
//                     className="d-block w-100"
//                     src="https://via.placeholder.com/1440x500"
//                     alt="First slide"
//                 />
//                 <Carousel.Caption>
//                     <h3>First slide label</h3>
//                     <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//                 </Carousel.Caption>
//             </Carousel.Item>
//             <Carousel.Item>
//                 <img
//                     className="d-block w-100"
//                     src="https://via.placeholder.com/1440x500"
//                     alt="Second slide"
//                 />

//                 <Carousel.Caption>
//                     <h3>Second slide label</h3>
//                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//                 </Carousel.Caption>
//             </Carousel.Item>
//             <Carousel.Item>
//                 <img
//                     className="d-block w-100"
//                     src="https://via.placeholder.com/1440x500"
//                     alt="Third slide"
//                 />

//                 <Carousel.Caption>
//                     <h3>Third slide label</h3>
//                     <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
//                 </Carousel.Caption>
//             </Carousel.Item>
//         </Carousel>
//     )
// }

// export default CarouselPage;









// import React, { Component } from 'react';

// class Carousel extends Component {
//     render() {
//         const carouselSlide = document.querySelector('.carousel-slide')
//         const carouselImages = document.querySelectorAll('.carousel-slide img')

//         const prevBtn = document.querySelector('#prevBtn')
//         const nextBtn = document.querySelector('#nextBtn')

//         let counter = 1;
//         const size = carouselImages[0];

//         // carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

//         // nextBtn.addEventListener('click', () => {
//         //     
//         //     counter++;
//         //     
//         // })
//         const prevImage = () => {

//             counter--;
//             carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
//             console.log(counter)
//         }
//         const nextImage = () => {
//             counter++;
//             console.log(counter)
//         }
//         // prevBtn.addEventListener('click', () => {
//         //     carouselSlide.style.transition = 'transform 0.4s ease-in.out';
//         //     counter--;
//         //     carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
//         // })

//         // carouselSlide.addEventListener('transitioned', () => {
//         //     if (carouselImages[counter].id === 'lastClone') {
//         //         carouselSlide.style.transition = 'none';
//         //         counter = carouselImages.length - 2;
//         //         carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
//         //     }
//         //     if (carouselImages[counter].id === 'firstClone') {
//         //         carouselSlide.style.transition = 'none';
//         //         counter = carouselImages.length - counter;
//         //         carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
//         //     }
//         // })
//         return (
//             <div className='carousel-container'>
//                 <div className='carousel-slide'>
//                     <img src='https://via.placeholder.com/1440x451' id='lastClone' />
//                     <img src='https://via.placeholder.com/1440x450' />
//                     <img src='https://via.placeholder.com/1440x450' />
//                     <img src='https://via.placeholder.com/1440x450' />
//                     <img src='https://via.placeholder.com/1440x450' />
//                     <img src='https://via.placeholder.com/1440x451' id='firstClone' />
//                 </div>
//                 <button onClick={prevImage} className='prevBtn'>Prev</button>
//                 <button onClick={nextImage} className='nextBtn'>Next</button>
//             </div>
//         )
//     }
// }

// export default Carousel;