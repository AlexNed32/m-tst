import React, { useState, useEffect } from 'react'
import axios from "./axios";
import {
    Container,
    Row,
    Col,
    Spinner,
    ListGroup,
    ListGroupItem,
    Badge
} from 'reactstrap'
import { Link, Outlet } from 'react-router-dom'

export const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get('categories/');
            // console.log(request)
            setCategories(request.data)

            return request
        }
        fetchData();
    }, [])
    return (
        <Container fluid="md">

            <Row>
                <Col xs="3">
                    <ListGroup>
                        {!categories.length
                            ? <Spinner style={{ width: '3rem', height: '3rem' }} color="warning" />
                            : categories.map(category =>
                                <Link to={`/${category.id}/products/`} key={category.id}>
                                    <ListGroupItem  >
                                        <picture >
                                            <source srcSet={category.image_url} type="image/svg+xml" />
                                            <img style={{ width: '2rem', height: '2rem' }} src={category.image_url} className="img-fluid img-thumbnail" alt="..." />
                                        </picture>
                                        <span>{category.title}</span> <Badge pill>{category.count}</Badge>
                                    </ListGroupItem>
                                </Link>
                            )}
                    </ListGroup>
                </Col>
                <Col xs="9">
                    <Outlet />
                </Col>
            </Row>
        </Container>
    )
}
