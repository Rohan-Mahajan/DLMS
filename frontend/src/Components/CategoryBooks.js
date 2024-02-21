import React from 'react';
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';


function CategoryBooks() {
    const [books, setBooks] = useState([]);
    const { category } = useParams()
    console.log("these are params ", category)

    // const getBooks = () => {
    //     category.map(async (item) => {
    //         let bookData = await fetch(`http://localhost:4000/api/books/getbooksbycategory/${item}`)
    //         bookData = await bookData.json()
    //         console.log(bookData)
    //         // setBooks(bookData)
    //     })
    // }

    const getBooks = async () => {
        let categoryId = await fetch(`http://localhost:4000/api/books/getbooksbycategory/${category}`)
        categoryId = await categoryId.json()
        console.log(categoryId)
        setBooks(categoryId)
    }

    useEffect(() => {
        getBooks();
    }, []);

    return (
        <Container className="bookList">
            <Row xs={1} md={2} lg={3} xl={4} xxl={5} style={{ width: '100%' }} className="p-2">
                {books.map((item, index) => (
                    <Col key={index + 1} className="mb-4">
                        <Card style={{ width: '18rem', backgroundColor: '#8D99AE' }}>
                            <Card.Body>
                                <Card.Title className="p-4" style={{ color: '#2B2D42' }}>{item.bookName}</Card.Title>
                                <Card.Subtitle className="p-3"> Author : {item.author}</Card.Subtitle>
                                {/* <Card.Subtitle className="p-3"> Subject : {item.categories}</Card.Subtitle> */}
                                <Card.Subtitle className="p-3"> Publisher : {item.publisher}</Card.Subtitle>
                                <Card.Subtitle className="p-3"> Book Status : {item.bookStatus}</Card.Subtitle>
                                <Card.Subtitle className="p-3"> No. Of Copies : {item.bookCountAvailable}</Card.Subtitle>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default CategoryBooks;
