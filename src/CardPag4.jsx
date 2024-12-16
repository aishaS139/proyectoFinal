import "./Estilos.css"
import React, { useState } from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';
export default function CardPag4() {
    const [currentImage, setCurrentImage] = useState("public/imgC3.jpg");
    const images = [
        "public/imgC3.jpg",
        "public/imgC4.jpg",
        "public/imgC1.jpg",
        "public/imgC10.jpg",
        "public/imgC7.jpg",
        "public/image21.jpg"
    ];
    const changeImage = () => {
        const currentIndex = images.indexOf(currentImage);
        const nextIndex = (currentIndex + 1) % images.length;
        setCurrentImage(images[nextIndex]);
    };
    return (
        <div className="card2Pag4">
            <Card
                style={{
                    width: '18rem'
                }}
                className="icard1Pag4">
                <img
                    alt="Sample"
                    src={currentImage}
                    style={{ width: '100%', height: 'auto' }}
                />
                <CardBody>
                    <CardTitle tag="h5">
                        Noticias
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
