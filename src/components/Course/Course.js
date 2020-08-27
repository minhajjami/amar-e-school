import React from 'react';
import './Course.css';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Course = (props) => {
    const { title, price, picture, category, level, createdBy } = props.course;
    return (
        <Col md={4}>
            <Card>
                <Card.Img variant="top" src={picture} />
                <Card.Body>
                    <Card.Title>{title}<Badge variant="warning">Highest Rated</Badge></Card.Title>
                    <Card.Text>
                        <p>Created By: {createdBy}</p>
                        <p><small>Category: {category}</small></p>
                        <p><small>Level: {level}</small></p>
                        <p className="price">Price: ${price}</p>
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Button className="btn btn-success main-btn"
                        onClick={() => props.addCourse(props.course)}
                        
                    ><FontAwesomeIcon icon={faShoppingCart}/> Enroll Now</Button>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default Course;