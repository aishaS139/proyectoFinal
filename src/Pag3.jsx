import "./Estilos.css"
import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button,CardImg,CardImgOverlay } from 'reactstrap';
export default function Pag3(props)
{
    return(
        <div className="card2Pag2">
            <Card inverse>
                <CardImg
                alt="Card image cap"
                src="public/image23.jpg"
                style={{
                    height: 270
                }}
                width="100%"
                />
                <CardImgOverlay>
                <CardTitle tag="h5" className="subPag2">
                    for King + Country
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