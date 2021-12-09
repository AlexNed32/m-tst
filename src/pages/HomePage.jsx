import React from 'react'
import { Outlet } from 'react-router';
import { Col, Container, Row, Spinner } from "reactstrap";
import { Categories } from '../components/Categories';

export const HomePage = () => {
    return (
        <>
            <Container fluid="md">
                    <h1>Hello</h1>
            </Container>
            <Categories />
            {/* <Outlet /> */}
        </>
    )
}
