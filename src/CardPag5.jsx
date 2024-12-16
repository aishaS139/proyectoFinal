import "./Estilos.css"
import React, { useState } from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';
export default function CardPag5() {
    const [currentImage, setCurrentImage] = useState("public/imgC9.jpg");
    const images = [
        "public/imgC8.jpg",
        "public/imgC2.jpg",
        "public/imgC5.jpg",
        "public/imgC6.jpg",
        "public/image22.jpg",
        "public/image19.jpg"
    ];
    const changeImage = () => {
        const currentIndex = images.indexOf(currentImage);
        const nextIndex = (currentIndex + 1) % images.length;
        setCurrentImage(images[nextIndex]);
    };
    return (
        <div className="card3Pag4">
            <Card
                style={{
                    width: '18rem'
                }}
                className="icard2Pag4">
                <img
                    alt="Sample"
                    src={currentImage}
                    style={{ width: '100%', height: 'auto' }}
                />
                <CardBody>
                    <CardTitle tag="h5">
                        mas fotos...
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