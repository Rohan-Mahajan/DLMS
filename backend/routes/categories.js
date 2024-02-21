import express from "express";
import BookCategory from "../models/BookCategory.js";

const router = express.Router();

router.get("/allcategories", async (req, res) => {
  try {
    const categories = await BookCategory.find({});
    res.status(200).json(categories);
  } catch (err) {
    return res.status(504).json(err);
  }
});

//get categories to display subject page
router.get("/allsubjects", async(req, resp)=>{
  try {
    const result = await BookCategory.find({});
    resp.send(result)
  } catch (error) {
    console.log(error)
        resp.status(400).send({
            success:false,
            message:'Error in Search Book API',
            error
        })
  }
})

//get one category
router.get("/getonecategory/:id", async(req, resp)=>{
  try {
    const _id = req.params.id
    const result = await BookCategory.findOne({_id})
    resp.send(result)
  } catch (error) {
    console.log(error)
        resp.status(400).send({
            success:false,
            message:'Error in Search Book API',
            error
        })
  }
})

router.post("/addcategory", async (req, res) => {
  try {
    const newcategory = await new BookCategory({
      categoryName: req.body.categoryName,
    });
    const category = await newcategory.save();
    res.status(200).json(category);
  } catch (err) {
    return res.status(504).json(err);
  }
});

export default router;
