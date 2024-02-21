import React, { useContext, useEffect, useState } from 'react'
import "../AdminDashboard.css"
import axios from "axios"
import { AuthContext } from '../../../../Context/AuthContext'
// import { Dropdown } from 'semantic-ui-react'

function AddBook() {

    const API_URL = process.env.REACT_APP_API_URL
    const [isLoading, setIsLoading] = useState(false)
    const { user } = useContext(AuthContext)

    // const [bookName, setBookName] = useState("")
    // const [alternateTitle, setAlternateTitle] = useState("")
    // const [author, setAuthor] = useState("")
    // const [bookCountAvailable, setBookCountAvailable] = useState(null)
    // const [language, setLanguage] = useState("")
    // const [publisher, setPublisher] = useState("")
    // const [allCategories, setAllCategories] = useState([])
    // const [selectedCategories, setSelectedCategories] = useState([])
    const [category, setCategory] = useState("");
    const [recentAddedCategories, setRecentAddedCategories] = useState([])


    // /* Fetch all the Categories */
    // useEffect(() => {
    //     const getAllCategories = async () => {
    //         try {
    //             const response = await axios.get(API_URL + "api/categories/allcategories")
    //             const all_categories = await response.data.map(category => (
    //                 { value: `${category._id}`, text: `${category.categoryName}` }
    //             ))
    //             setAllCategories(all_categories)
    //         }
    //         catch (err) {
    //             console.log(err)
    //         }
    //     }
    //     getAllCategories()
    // }, [API_URL])


    //add category of book
    const addCategory = async (e) => {
        e.preventDefault();

        const categoryData = {
            categoryName: category
        };

        try {
            const response = await axios.post(
                'http://localhost:4000/api/categories/addcategory',
                categoryData
            );

            alert(`Category Added`);

            let result = await fetch("http://localhost:4000/api/categories/allcategories")
            result = await result.json()
            setRecentAddedCategories(result)

        } catch (err) {
            console.log(err);
        }
    }

    // useEffect(() => {
    //     const getallCategories = async () => {
    //         const response = await axios.get("http://localhost:4000/api/categories/allcategories")
    //         setRecentAddedCategories(response.data.slice(0, 5))
    //     }
    //     getallCategories()
    // }, [])


    return (
        <div>
            <p className="dashboard-option-title">Add a Book</p>
            <div className="dashboard-title-line"></div>
            <form className='addbook-form' onSubmit={addCategory}>

                <label className="addbook-form-label" htmlFor="author">Category Name<span className="required-field">*</span></label><br />
                <input className="addbook-form-input" type="text" name="author" value={category} onChange={(e) => { setCategory(e.target.value) }} required></input><br />

                <input className="addbook-submit" type="submit" value="SUBMIT" disabled={isLoading}></input>
            </form>
            <div>
                <p className="dashboard-option-title">Recently Added Categories</p>
                <div className="dashboard-title-line"></div>
                <table className='admindashboard-table'>
                    <tr>
                        <th>S.No</th>
                        <th>Category Name</th>
                        <th>No. of Books</th>
                        <th>Date</th>
                    </tr>
                    {
                        recentAddedCategories.map((category, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{category.categoryName}</td>
                                    <td>{category.books.length}</td>
                                    <td>{category._id}</td>
                                    {/* <td>{category.createdAt.substring(0, 10)}</td> */}
                                </tr>
                            )
                        })
                    }
                </table>
            </div>
        </div>
    )
}

export default AddBook