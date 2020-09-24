import googleMapReact from 'google-map-react';
import React from 'react';
import { Container } from 'react-bootstrap';
import { key } from '../../../key';
const AnyReactComponent = ({ text }) => (
    <div style={{
        color: 'white',
        background: 'grey',
        padding: '15px 10px',
        display: 'inline-flex',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '100%',
        transform: 'translate(-50%, -50%)'
    }}>
        {text}
    </div>
);
const Map = () => {
    let defaultProps = {
        center: { lat: 59.95, lng: 30.33 },
        zoom: 11
    };
    return (
        <Container>
            <googleMapReact
                bootstrapURLKeys={key}

                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                <AnyReactComponent
                    lat={59.955413}
                    lng={30.337844}
                    text={'Kreyser Avrora'}
                />
            </googleMapReact>
        </Container>
    );
};

export default Map;