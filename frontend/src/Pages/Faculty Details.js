import React from 'react';
import Card from 'react-bootstrap/Card';
// import FacultyData from './FacultyData';
import Faculty from '../Components/Data/test.facultyData';
import FacultyData from '../Components/Data/test.faculty';

function BasicExample() {
  // let data = Faculty;
  let data = FacultyData
  // console.log(data[0].image)

  return (
    // <div>
    //   <h2>IMages</h2>
    //   {/* <img src="FacultyImages/Kitir.png" alt="" /> */}
    // </div>
    <div className="card-container">
      <div className="row">
        {data.map((items, index) => (
          <div className="col-md-3 d-flex justify-content-center" key={index+1}>
            <Card style={{ width: '18rem', margin: '20px' }}>
              {/* <Card.Img variant="top" src={`../src/Pages/FacultyImages/${items.image}`} style={{ height: '18rem', backgroundColor: '#8D99AE' }} /> */}
              <Card.Body className="text-center">
                <Card.Title style={{ fontWeight:'bold' , color: '#EF233C' }}>Name: <span style={{ color: '#2B2D42' }}>{items.NAME}</span></Card.Title>
                <Card.Text style={{ fontWeight:'bold' , color: '#EF233C' }}>Designation: <span style={{ color: '#2B2D42' }}>{items.DESIGNATION}</span></Card.Text>
                {/* <Card.Text style={{ color: '#EF233C' }}>Specialization: <span style={{ color: '#2B2D42' }}>{items.author}</span></Card.Text> */}
                {/* <Card.Text style={{ color: '#EF233C' }}>Contact: <span style={{ color: '#2B2D42' }}>{items.publisher}</span></Card.Text> */}
                <Card.Text style={{ fontWeight:'bold' , color: '#EF233C' }}>Email id: <span style={{ color: '#2B2D42' }}>{items.EMAIL}</span></Card.Text>
                <Card.Text style={{ fontWeight:'bold' , color: '#EF233C' }}>Specialization: <span style={{ color: '#2B2D42' }}>{items.specialization}</span></Card.Text>
                <Card.Text style={{ fontWeight:'bold' , color: '#EF233C' }}>Contact: <span style={{ color: '#2B2D42' }}>{items.contact.$numberLong}</span></Card.Text>
                {/* <Card.Text style={{ fontWeight:'bold' , color: '#EF233C' }}>Year of Exp.: <span style={{ color: '#2B2D42' }}>{items['YEARS OF EXPERIENCE']}</span></Card.Text> */}
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BasicExample;
