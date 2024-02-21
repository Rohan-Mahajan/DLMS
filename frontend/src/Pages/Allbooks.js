import React from "react";
import { useState, useEffect } from "react";
import "./Allbooks.css";
import 'bootstrap/dist/css/bootstrap.min.css';


function Allbooks() {
  const [books, setBooks] = useState([]);

  const getBooks = async () => {
    let result = await fetch('http://localhost:4000/api/books/getAllBooks');
    result = await result.json()
    setBooks(result)
  }

  // console.log("books", books);

  useEffect(() => {
    getBooks();
  }, []);

  const searchHandler = async (e)=>{
    // console.log(e.target.value)
    let key = e.target.value;
    if(!key){
      getBooks()
    }
    let result = await fetch(`http://localhost:4000/api/books/searchBook/${key}`)
    result = await result.json()
    if(result){
      setBooks(result)
    }
  }

  return (
    <div className="container bookList">
      <input type="text" placeholder="Search Books, by Book Titles, Authors, and Publishers" className="form-control searchBar" onChange={searchHandler} />
      <div className="table-responsive bookCase">
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
              <tr key={index+1}>
                <td>{index+1}</td>
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
    </div>
  );
}

export default Allbooks;
