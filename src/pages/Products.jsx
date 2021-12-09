import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Col, Button, Card, CardBody, CardGroup, CardImg, CardSubtitle, CardText, CardTitle, Row } from 'reactstrap';
import axios from '../components/axios';

export const Products = () => {
    const params = useParams();
    const [products, setCproducts] = useState([]);
    const [categoryTitle, setCategoryTitle] = useState('')

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(`/categories/${params.id}/products/`);
            console.log('products', request.data.categories[0].title)
            setCproducts(request.data.results)
            setCategoryTitle(request.data.categories[0].title)
            return request
        }
        fetchData();
    }, [params])

    return (
        <>
            <h1>{categoryTitle}</h1>
            <Row xs="5">
                {products.map(prod =>
                    <Col key={prod.ean} className="p-0">
                        <Card body className="justify-content-around" style={{height:'100%'}}>
                            <CardImg width="100%" src={prod.img.s150x150} alt="Card image cap" />
                            {/* <CardBody> */}
                            <CardTitle>{prod.title}</CardTitle>
                            <CardSubtitle className="mb-2 text-muted">{prod.price} грн.</CardSubtitle>
                            {/* <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText> */}
                            <Button>Подробнее</Button>
                            {/* </CardBody> */}

                        </Card>
                    </Col>
                )}
            </Row>
        </>
    )
}
