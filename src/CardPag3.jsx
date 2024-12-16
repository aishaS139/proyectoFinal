import "./Estilos.css"
import React, { useState } from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';

export default function CardPag3() {
    const [currentImage, setCurrentImage] = useState("public/image7.jpeg");
    const images = [
        "public/image6.jpeg",
        "public/image7.jpeg",
        "public/image8.jpeg",
        "public/image9.jpeg",
        "public/imgC11.jpg",
        "public/image20.jpg"
    ];
    const changeImage = () => {
        const currentIndex = images.indexOf(currentImage);
        const nextIndex = (currentIndex + 1) % images.length;
        setCurrentImage(images[nextIndex]);
    };
    return (
        <div className="card1Pag4">
            <Card
                style={{
                    width: '18rem'
                }}
                className="icard1Pag4">
                <img
                    alt="Sample"
                    src={currentImage} // Fuente dinámica de la imagen
                    style={{ width: '100%', height: 'auto' }}
                />
                <CardBody>
                    <CardTitle tag="h5">
                        PHOTOS
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                    </CardSubtitle>
                    <CardText>
                    </CardText>
                    <Button id="showTextButton" onClick={changeImage}>
                        Haz Click aquí
                    </Button>
                </CardBody>
            </Card>
        </div>
    );
}
