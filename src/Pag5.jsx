import "./Estilos.css"
import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button,CardImg,CardImgOverlay } from 'reactstrap';
export default function Pag5(props)
{
    return(
        <div className="card3Pag2">
            <Card inverse>
                <CardImg
                alt="Card image cap"
                src="public/image11.jpeg"
                style={{
                    height: 270
                }}
                width="100%"
                />
                <CardImgOverlay>
                <CardTitle tag="h5" className="subPag2">
                    Conciertos
                </CardTitle>
                <CardText>
                </CardText>
                <CardText>
                    <small className="text-muted">
                    </small>
                </CardText>
                </CardImgOverlay>
            </Card>
        </div>
    );
}