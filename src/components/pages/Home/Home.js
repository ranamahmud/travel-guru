import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import "./Home.css"
const Home = () => {
    return (
        <Container>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={require('../../../images/image/Rectangle 1.png')}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Cox's bazar</h3>
                        <p>Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={require('../../../images/image/Rectangle 26.png')}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Sreemongol</h3>
                        <p>It is said the name Sreemangal (or Srimangal) is named after Sri Das and Mangal Das; two brothers who settled on the banks of the Hail Haor.[2] A copper plate of Raja Marundanath from the 11th century was found in Kalapur</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={require('../../../images/image/Rectangle 27.png')}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Sundorbon</h3>
                        <p>The Sundarbans is a mangrove area in the delta formed by the confluence of the Ganges, Brahmaputra and Meghna Rivers in the Bay of Bengal. It spans from the Hooghly River in India's state of West Bengal to the Baleswar River in Bangladesh. Wikipedia</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>
    );
};

export default Home;