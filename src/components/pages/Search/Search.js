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

                    <div class="card mb-3" style={{ maxwidth: "540px" }}>
                        <div class="row no-gutters">
                            <div class="col-md-4">
                                <img src={require("../../../images/image/Rectangle 26.png")} class="card-img" alt="..." />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">Light bright airy stylish apt & safe peaceful stay</h5>
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card mb-3" style={{ maxwidth: "540px" }}>
                        <div class="row no-gutters">
                            <div class="col-md-4">
                                <img src={require("../../../images/image/Rectangle 27.png")} class="card-img" alt="..." />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">Apartment in Lost Panorama </h5>
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="card mb-3" style={{ maxwidth: "540px" }}>
                        <div class="row no-gutters">
                            <div class="col-md-4">
                                <img src={require("../../../images/image/Rectangle 28.png")} class="card-img" alt="..." />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">AR Lounge & Pool (r&r + b&b)</h5>
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
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