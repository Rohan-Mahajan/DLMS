import React from 'react';
import Wiley from '../Components/Data/test.wiley';
import Pearson from '../Components/Data/test.pearson';
import Ej from '../Components/Data/test.eJournals';

function EJournals() {
    // const pearsonData = PearsonData;
    // console.log(pearsonData)
    const pearson = Pearson
    const wiley = Wiley
    const ejournal = Ej
    console.log("Pearson Data",pearson)
    console.log(pearson[0].ISBN.$numberLong)
    console.log(pearson[0].Title)
    // let isbn = "ISBN.$numberLong"

    return (
        <div>
            <div className="container bookList">
                {/* <input type="text" placeholder="Search Books, by Book Titles, Authors, and Publishers" className="form-control searchBar" onChange={searchHandler} /> */}
                <h3>Pearson Publications e-Books</h3>
                <div className="table-responsive bookCase">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>S.No.</th>
                                <th>ISBN</th>
                                <th>Author</th>
                                <th>Title</th> 
                                {/* <th>Publisher</th>
                                <th>Book Status</th>
                                <th>No. of Books</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {pearson.map((item, index) => (
                                <tr key={index + 1}>
                                    <td>{index + 1}</td>
                                    <td>{item.ISBN.$numberLong}</td>
                                    <td>{item.Author}</td>
                                    <td>{item.Title}</td>
                                    {/* <td>{item.bookCountAvailable > 0 ? "Available" : "All Issued"}</td>
                                    <td>{item.initialCount}</td> */}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <br />
                <h3>Wiley Publications e-Books</h3>
                <div className="table-responsive bookCase">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>S.No.</th>
                                <th>ISBN</th>
                                <th>Author</th>
                                <th>Title</th> 
                                {/* <th>Publisher</th>
                                <th>Book Status</th>
                                <th>No. of Books</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {wiley.map((item, index) => (
                                <tr key={index + 1}>
                                    <td>{index + 1}</td>
                                    <td>{item.EISBN.$numberLong}</td>
                                    <td>{item.Author}</td>
                                    <td>{item.Title}</td>
                                    {/* <td>{item.bookCountAvailable > 0 ? "Available" : "All Issued"}</td>
                                    <td>{item.initialCount}</td> */}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <br />
                <h3>e-Journals</h3>
                <div className="table-responsive bookCase">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>S.No.</th>
                                <th>Publication Title</th>
                                <th>Coverage Depth</th>
                                <th>Publisher Name</th> 
                                <th>Publisher Type</th> 
                                <th>Publisher Type</th> 
                                <th>Subjects</th> 
                                {/* <th>Publisher</th>
                                <th>Book Status</th>
                                <th>No. of Books</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {ejournal.map((item, index) => (
                                <tr key={index + 1}>
                                    <td>{index + 1}</td>
                                    <td><a href={`${item.title_url}`}>{item.publication_title}</a></td>
                                    <td>{item.coverage_depth}</td>
                                    <td>{item.publisher_name}</td>
                                    <td>{item.publication_type}</td>
                                    <td>{item.Subject}</td>
                                    {/* <td>{item.bookCountAvailable > 0 ? "Available" : "All Issued"}</td>
                                    <td>{item.initialCount}</td> */}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default EJournals;
