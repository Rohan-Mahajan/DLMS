import express from "express"
import Book from "../models/Book.js"
import BookCategory from "../models/BookCategory.js"

const router = express.Router()

/* Get all books in the db */
router.get("/allbooks", async (req, res) => {
    try {
        const books = await Book.find({}).populate("transactions").sort({ _id: -1 })
        res.status(200).json(books)
    }
    catch (err) {
        return res.status(504).json(err);
    }
})

/* Get Book by book Id */
router.get("/getbook/:id", async (req, res) => {
    try {
        const book = await Book.findById(req.params.id).populate("transactions")
        res.status(200).json(book)
    }
    catch {
        return res.status(500).json(err)
    }
})

/* Get books by category name*/
router.get("/category/:key", async (req, res) => {
    const category = req.params.key
    try {
        const books = await BookCategory.findOne({ categoryName: category }).populate("books")
        res.status(200).json(books)
    }
    catch (err) {
        return res.status(504).json(err)
    }
})

/* Adding book */
router.post("/addbook", async (req, res) => {
    if (req.body.isAdmin) {
        try {
            const newbook = await new Book({
                bookName: req.body.bookName,
                alternateTitle: req.body.alternateTitle,
                author: req.body.author,
                initialCount:req.body.bookCountAvailable,
                bookCountAvailable: req.body.bookCountAvailable,
                language: req.body.language,
                publisher: req.body.publisher,
                bookStatus: req.body.bookSatus,
                categories: req.body.categories
            })
            const book = await newbook.save()
            await BookCategory.updateMany({ '_id': book.categories }, { $push: { books: book._id } });
            res.status(200).json(book)
        }
        catch (err) {
            res.status(504).json(err)
        }
    }
    else {
        return res.status(403).json("You dont have permission to delete a book!");
    }
})


/* Addding book */
router.put("/updatebook/:id", async (req, res) => {
    if (req.body.isAdmin) {
        try {
            await Book.findByIdAndUpdate(req.params.id, {
                $set: req.body,
            });
            res.status(200).json("Book details updated successfully");
        }
        catch (err) {
            res.status(504).json(err);
        }
    }
    else {
        return res.status(403).json("You dont have permission to delete a book!");
    }
})

/* Remove book  */
router.delete("/removebook/:id", async (req, res) => {
    if (req.body.isAdmin) {
        try {
            const _id = req.params.id
            const book = await Book.findOne({ _id })
            await book.remove()
            await BookCategory.updateMany({ '_id': book.categories }, { $pull: { books: book._id } });
            res.status(200).json("Book has been deleted");
        } catch (err) {
            return res.status(504).json(err);
        }
    } else {
        return res.status(403).json("You dont have permission to delete a book!");
    }
})

//getAllbooks
router.get("/getAllBooks", async (req, resp) => {
    try {
        const books = await Book.find()
        if (books.length > 0) {
            resp.send(books)
        }
        else {
            resp.send("no books found")
        }
    } catch (error) {
        return resp.status(504).json(error);
    }
})

// Search a book also used to print books
router.get("/searchBook/:keyword", async (req, resp) => {
    try {
        const keyword = req.params.keyword
        // console.log(keyword)
        const result = await Book.find({
            "$or": [
                { bookName: { $regex: keyword, $options: "i" } },
                { author: {$regex:keyword, $options:"i"} },
                {publisher:{$regex:keyword, $options:"i"}}
            ]
        })
        resp.send(result)
    } catch (error) {
        console.log(error)
        resp.status(400).send({
            success: false,
            message: 'Error in Search Book API',
            error
        })
    }
})

// get books by category name
router.get("/getbooksbycategory/:categoryId", async (req, resp) => {
    try {
        const categoryId = req.params.categoryId
        console.log(categoryId)
        let result = await Book.find({categories:categoryId})
        console.log(result)
        resp.send(result);
    } catch (error) {
        console.log(error)
        resp.status(400).send({
            success: false,
            message: 'Incorrect Book Name',
            error
        })
    }
})

export default router