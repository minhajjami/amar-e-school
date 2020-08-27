import React from 'react';
import fakeData from '../../fakeData/topics';
import { useState } from 'react';
import Course from '../Course/Course';
import './School.css';
import Cart from '../Cart/Cart';
import { Row } from 'react-bootstrap';

const School = () => {


    let first15 = fakeData.slice(0, 12);
    console.log(first15);
    const [courses, setCourses] = useState(first15);
    const [cart, setCarts] = useState([]);

    const handleAddCourse = (course) => {
        const newCart = [...cart, course];
        setCarts(newCart);
    }

    return (

        <div className="school-container">
            <div className="course-container">
                <Row class="row-course">
                    {
                        courses.map(crs => <Course addCourse={handleAddCourse} course={crs}>{crs.title}</Course>)
                    }
                </Row>
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default School;