import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import Carousel from 'react-bootstrap/Carousel';

import img1 from '../assets/1.jpg'
import img2 from '../assets/2.jpg'
import img3 from '../assets/3.jpg'

const About = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <div className="container my-4 p-4">
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Who we are?</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo obcaecati voluptas incidunt optio, eum labore aut magnam quam laborum laboriosam reiciendis vero adipisci iste, eos expedita quibusdam quos porro minima officia doloribus. Quae provident alias est non ad nihil praesentium, voluptatem quas accusamus quam labore harum veritatis temporibus incidunt! Qui voluptates tempore excepturi quis numquam illum accusamus deserunt sequi. Dolore repellat fugit illo numquam! Repellendus fugit similique ab nulla repudiandae quibusdam. Odit, impedit recusandae modi earum tempora quis adipisci itaque. Odio dolores accusamus perspiciatis eveniet quod in saepe architecto doloribus aspernatur nam hic, animi voluptatibus velit non minima quasi sint.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>What is our motive?</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic id quidem aspernatur eligendi tempore dolorum laboriosam optio ipsum quis libero placeat sit doloribus in obcaecati nesciunt, fugit adipisci aperiam cum cupiditate neque dolores harum exercitationem? Ad officiis voluptates molestiae eaque expedita id sequi, temporibus asperiores ratione laboriosam! Fugiat animi deserunt dolor dicta necessitatibus alias debitis voluptas exercitationem ab eos illo id rem optio reiciendis dolorum aliquid est et voluptates, corporis non quae tempora omnis? At sequi corrupti expedita voluptatem maxime, error odit aut architecto totam obcaecati nobis odio, deleniti facilis, cupiditate ipsum ullam est reprehenderit laborum praesentium laboriosam! Cupiditate, fugit.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </>
    )
}

export default About
