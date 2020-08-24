import React from 'react';
import {Box} from '../../Box';
import { withKnobs, boolean} from "@storybook/addon-knobs";
import Container from '../Container/Container';
import Row from '../Row/Row';
import Col from '../Col/Col';


const Panel = (props) => {
    return (
        <Box display="flex" justifyContent={{xs: "center", md: "end"}} fontFamily="monospace"  padding="small" border="gray" bg="gray100">{props.children}</Box>
    );
}


export const EqualWidth = () => {

    return (
        <Container fluid={false}>
            <Row>
                <Col><Panel>1</Panel></Col>
            </Row>
            <Row>
                <Col><Panel>1</Panel></Col>
                <Col><Panel>2</Panel></Col>
            </Row>
            <Row>
                <Col><Panel>1</Panel></Col>
                <Col><Panel>2</Panel></Col>
                <Col><Panel>3</Panel></Col>
            </Row>

            <Row>
                <Col><Panel>1</Panel></Col>
                <Col><Panel>2</Panel></Col>
                <Col><Panel>3</Panel></Col>
                <Col><Panel>4</Panel></Col>
            </Row>

            <Row>
                <Col><Panel>1</Panel></Col>
                <Col><Panel>2</Panel></Col>
                <Col><Panel>3</Panel></Col>
                <Col><Panel>4</Panel></Col>
                <Col><Panel>5</Panel></Col>
            </Row>
            <Row>
                <Col><Panel>1</Panel></Col>
                <Col><Panel>2</Panel></Col>
                <Col><Panel>3</Panel></Col>
                <Col><Panel>4</Panel></Col>
                <Col><Panel>5</Panel></Col>
                <Col><Panel>6</Panel></Col>
            </Row>
        </Container>
    );
}


export const EqualWidthMultiLine = () => {

    return (
        <Container fluid={boolean('fluid', true, 'props')}>
            <Row>
                <Col><Panel>1</Panel></Col>
                <Col><Panel>2</Panel></Col>
                <Box width="100%"></Box>
                <Col><Panel>1</Panel></Col>
                <Col><Panel>2</Panel></Col>
            </Row>
        </Container>
    );
}

export const OneColumnWidth = () => {

    return (
        <Container fluid={boolean('fluid', true, 'props')}>
            <Row>
                <Col><Panel>1</Panel></Col>
                <Col xs={6}><Panel>2</Panel></Col>
                <Col><Panel>3</Panel></Col>
            </Row>
            <Row>
                <Col><Panel>1</Panel></Col>
                <Col xs={5}><Panel>2</Panel></Col>
                <Col><Panel>3</Panel></Col>
            </Row>
        </Container>
    );
}


export const Responsive = () => {

    return (
        <Container fluid={boolean('fluid', true, 'props')}>
            <Row>
                <Col xs={12} md={4}><Panel>{`xs={12} md={4}`}</Panel></Col>
                <Col xs={12} md={4}><Panel>{`xs={12} md={4}`}</Panel></Col>
                <Col xs={12} md={4}><Panel>{`xs={12} md={4}`}</Panel></Col>
            </Row>
            <Row>
                <Col xs={6}><Panel>{`xs={6}`}</Panel></Col>
                <Col xs={6}><Panel>{`xs={6}`}</Panel></Col>
            </Row>
        </Container>
    );
}





export default {
    title: 'Primitives/Grid',
    decorators: [withKnobs],
    parameters: {
        actions: { disabled: true }
    }
};
  