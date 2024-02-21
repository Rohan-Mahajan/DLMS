import React from "react";
import { useState, useEffect } from "react";
import "./Allbooks.css";
import { Link } from 'react-router-dom'

//bootstrap components
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Container, Row, Col } from 'react-bootstrap';

function Allsubjects() {
    const [categories, setCategories] = useState([]);

    const getCategories = async () => {
        let result = await fetch('http://localhost:4000/api/categories/allsubjects');
        result = await result.json()
        setCategories(result)
    }

    // console.log("books", books);
    // console.log("Categories", categories)

    useEffect(() => {
        getCategories();
    }, []);

    //   const searchHandler = async (e)=>{
    //     // console.log(e.target.value)
    //     let key = e.target.value;
    //     if(!key){
    //         getCategories()
    //     }
    //     let result = await fetch(`http://localhost:4000/api/books/searchBook/${key}`)
    //     result = await result.json()
    //     if(result){
    //       setCategory(result)
    //     }
    //   }
    return (
        <div className="allBooksDiv">
            <Container className="bookList">
                <Row xs={1} md={2} lg={3} xl={4} xxl={5} style={{ width: '100%' }}>
                    {categories.map((item, index) => (
                        <Col key={index + 1} className="mb-4">
                            <Card style={{ border: '1px solid #000', backgroundColor: 'transparent' }}>
                                <Card.Body>
                                    <Card.Title className="p-4" style={{ color: '#2B2D42' }}>Subject: <span style={{color:"#EF233C"}}>{item.categoryName}</span></Card.Title>
                                    <Card.Subtitle className="p-3" style={{ color: '#2B2D42' }}>Number of Books: <span style={{color:"#EF233C"}}>{item.books.length}</span></Card.Subtitle>
                                    <Link to={`/book/${item._id}`} className="btn btn-primary" style={{ backgroundColor: '#D90429', border: 'none' }}>Related Books</Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );

    //   return (
    //     <div className="bookList">
    //       <input type="text" placeholder="Search Book" className="searchBar" onChange={searchHandler} />
    //       <div className="bookCase">
    //       <ul>
    //         <li>S.No.</li>
    //         <li>Book Name</li>
    //         <li>Author</li>
    //         <li>Publisher</li>
    //         <li>Book Status</li>
    //       </ul>
    //       {
    //         category.map((item, index) =>
    //           <ul>
    //             <li>{index+1}</li>
    //             <li>{item.bookName}</li>
    //             <li>{item.author}</li>
    //             <li>{item.publisher}</li>
    //             <li>{item.bookStatus}</li>
    //           </ul>
    //         )
    //       }
    //       </div>
    //     </div>
    //   );
}

export default Allsubjects;
