import React, { useState, useRef } from 'react';
import { Form, Col, Row, InputGroup, Button } from 'react-bootstrap';
// import "../Components/";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useReactToPrint } from "react-to-print";
// import { CSVLink } from "react-csv";

const PrintBooks = () => {
    const [filterType, setFilterType] = useState('');
    const [filterValue, setFilterValue] = useState('');
    const [books, setBooks] = useState([]);

    const componentPDF = useRef();

    const handleFilterTypeChange = (type) => {
        setFilterType(type);
        setFilterValue(''); // Reset filter value when changing filter type
    };

    const handleFilterValueChange = (event) => {
        setFilterValue(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        // console.log('Filter Type:', filterType);
        console.log('Filter Value:', filterValue);
        let result = await fetch(`http://localhost:4000/api/books/searchBook/${filterValue}`)
        result = await result.json()
        console.log(result);
        if (result) {
            setBooks(result);
        }
    };

    const printAllBooks = async () => {
        let allBooks = await fetch(`http://localhost:4000/api/books/getAllBooks`)
        allBooks = await allBooks.json()
        if (allBooks) {
            setBooks(allBooks);
        }
    }

    const printData = useReactToPrint({
        content: () => componentPDF.current,
        documentTitle: "Book Data",
        onAfterPrint: () => alert("Book List saved as pdf")
    })

    return (
        <div>
            {/* <ReactToPrint
                trigger={() => <button>Print</button>}
                content={() => componentRef.current} // Use the ref to get the component
                documentTitle="Book Data"
                pageStyle="print"
            /> */}
            <Form onSubmit={handleSubmit}>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label as="legend" column sm={2}>
                        Filter By:
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Check
                            type="radio"
                            label="Author"
                            name="filterType"
                            id="authorRadio"
                            checked={filterType === 'author'}
                            onChange={() => handleFilterTypeChange('author')}
                        />
                        <Form.Check
                            type="radio"
                            label="Publisher"
                            name="filterType"
                            id="publisherRadio"
                            checked={filterType === 'publisher'}
                            onChange={() => handleFilterTypeChange('publisher')}
                        />
                    </Col>
                </Form.Group>

                {filterType && (
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm={2}>
                            {filterType === 'author' ? 'Author Name' : 'Publisher Name'}
                        </Form.Label>
                        <Col sm={10}>
                            <InputGroup>
                                <Form.Control
                                    type="text"
                                    placeholder={`Enter ${filterType === 'author' ? 'Author' : 'Publisher'} Name`}
                                    value={filterValue}
                                    onChange={handleFilterValueChange}
                                />
                                <Button type="submit" variant="primary">
                                    Apply Filter
                                </Button>
                            </InputGroup>
                        </Col>
                    </Form.Group>
                )}
            </Form>
            {/* getAllbooks */}
            <Button style={{ marginLeft: '30px' }} onClick={printAllBooks} type="submit" variant="primary">
                Print All Books
            </Button>
            <div className='text-center'>
                <button className='justify-co m-4 btn btn-success' onClick={printData}>Print</button>
            </div>
            {/* <div ref={componentRef} className="table-responsive bookCase"> */}
            <div className="table-responsive bookCase">
                <div ref={componentPDF} style={{ width: '100%' }}>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>S.No.</th>
                                <th>Book Name</th>
                                <th>Author</th>
                                <th>Publisher</th>
                                <th>Book Status</th>
                                <th>No. of Books</th>
                            </tr>
                        </thead>
                        <tbody>
                            {books.map((item, index) => (
                                <tr key={index + 1}>
                                    <td>{index + 1}</td>
                                    <td>{item.bookName}</td>
                                    <td>{item.author}</td>
                                    <td>{item.publisher}</td>
                                    <td>{item.bookCountAvailable > 0 ? "Available" : "All Issued"}</td>
                                    <td>{item.initialCount}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>



                {/* <CSVLink data={books} onClick={() => { }} style={{ marginLeft: "257px" }} ><Button type="submit" variant="primary">
                    Export to Excel
                </Button></CSVLink> */}
            </div>
        </div>
    );
};

export default PrintBooks;



// import React from 'react';
// import { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// import { FormGroup,
// Input,
// Label } from 'reactstrap';



// function PrintBooks() {
//     const [author, setAuthor] = useState("");
//     const formHandler = ()=>{
//         console.log("Form Submited")
//     }
//     return (
//         <div>
//             <form onSubmit={formHandler}>
//                 <FormGroup tag="fieldset">
//                     <legend>
//                         Radio Buttons
//                     </legend>
//                     <FormGroup check>
//                         <Input
//                             name="author"
//                             type="radio"
//                         />
//                         {' '}
//                         <Label check>
//                             Authors Name
//                         </Label>
//                     </FormGroup>
//                     <FormGroup check>
//                         <Input
//                             name="radio1"
//                             type="radio"
//                         />
//                         {' '}
//                         <Label check>
//                             Option two can be something else and selecting it will deselect option one
//                         </Label>
//                     </FormGroup>
//                     <FormGroup
//                         check
//                         disabled
//                     >
//                         <Input
//                             disabled
//                             name="radio1"
//                             type="radio"
//                         />
//                         {' '}
//                         <Label check>
//                             Option three is disabled
//                         </Label>
//                     </FormGroup>
//                 </FormGroup>
//                 <button>Submit</button>
//             </form>
//         </div>
//     );
// }

// export default PrintBooks;
