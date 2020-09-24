import React from 'react';
import { Card, CardGroup, Col, Container, Row } from 'react-bootstrap';
import Map from '../../common/Map/Map';
import "./Search.css"
const Search = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <p id="guests">252 stays Apr 13-17 3 guests</p>
                    <p id="cox-bazar">Stay in Cox’s Bazar</p>

                    <div className="card mb-3" style={{ maxwidth: "540px" }}>
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                <img src={require("../../../images/image/Rectangle 26.png")} className="card-img" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Light bright airy stylish apt & safe peaceful stay</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card mb-3" style={{ maxwidth: "540px" }}>
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                <img src={require("../../../images/image/Rectangle 27.png")} className="card-img" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Apartment in Lost Panorama </h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="card mb-3" style={{ maxwidth: "540px" }}>
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                <img src={require("../../../images/image/Rectangle 28.png")} className="card-img" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">AR Lounge & Pool (r&r + b&b)</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>




                </Col>
                <Col>

                    <Map />
                </Col>
            </Row>
        </Container>
    );
};

export default Search;