import React, { useState, useRef } from 'react';
import { Form, Col, Row, InputGroup, Button } from 'react-bootstrap';
// import "../Components/";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useReactToPrint } from "react-to-print";
// import { CSVLink } from "react-csv";

const PrintBooks = () => {
  // const [filterType, setFilterType] = useState('');
  const [filterValue, setFilterValue] = useState('');
  const [members, setMembers] = useState([]);

  const componentPDF = useRef();



  const handleFilterValueChange = (event) => {
    setFilterValue(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log('Filter Type:', filterType);
    console.log('Filter Value:', filterValue);
    let result = await fetch(`http://localhost:4000/api/users/searchuser/${filterValue}`)
    result = await result.json()
    console.log(result);
    if (result) {
      setMembers(result);
    }
  };

  const printAllStudents = async ()=>{
    let printAll = await fetch(`http://localhost:4000/api/users/allStudentsOnly/Student`)
    printAll = await printAll.json()
    if(printAll){
      setMembers(printAll)
    }
  }

  const printData = useReactToPrint({
    content: () => componentPDF.current,
    documentTitle: "Book Data"
    // onAfterPrint: () => alert("Book List saved as pdf")
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
          <Form.Label column sm={4} className="text-sm-right">
            Enter Semester:
          </Form.Label>
          <Col sm={4}>
            <InputGroup>
              <Form.Control
                type="text"
                placeholder="Enter Semester"
                value={filterValue}
                onChange={handleFilterValueChange}
              />
            </InputGroup>
          </Col>

          <Col sm={4} className="text-sm-left">
            <Button className='ml-2' type="submit" variant="primary">
              Get List
            </Button>
          </Col>
        </Form.Group>
      </Form>
      {/* getAllStudents */}
      <div style={{textAlign:'center'}}>
      <Button  className='ml-2' type="submit" variant="primary" onClick={printAllStudents}>
        Get All Students
      </Button>
      </div>
      {/* <div ref={componentRef} className="table-responsive bookCase"> */}
      <div className="table-responsive bookCase">
        <div ref={componentPDF} style={{ width: '100%' }}>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>S.No.</th>
                <th>Student Name</th>
                <th>Enrollment Number</th>
                <th>Mobile Number</th>
                <th>Email</th>
                <th>Previous Transactions</th>
              </tr>
            </thead>
            <tbody>
              {members.map((item, index) => (
                <tr key={index + 1}>
                  <td>{index + 1}</td>
                  <td>{item.userFullName}</td>
                  <td>{item.admissionId}</td>
                  <td>{item.mobileNumber}</td>
                  {/* <td>{item.bookCountAvailable > 0 ? "Available" : "All Issued"}</td> */}
                  <td>{item.email}</td>
                  <td>{item.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className='text-center'>
          <button className='justify-co m-4 btn btn-success' onClick={printData}>Print</button>
        </div>

        {/* <CSVLink data={books} onClick={() => { }} style={{ marginLeft: "257px" }} ><Button type="submit" variant="primary">
                    Export to Excel
                </Button></CSVLink> */}
      </div>
    </div>
  );
};

export default PrintBooks;

