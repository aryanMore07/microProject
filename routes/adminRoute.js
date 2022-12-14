const {Router} = require("express");
const route = Router();
const CategoryModel = require("../models/category");
const GalleryModel = require("../models/gallary");

route.get("/add-category/:categoryName", async (req, res, next) => {
    
    try {
        const categoryName = req.params.categoryName;

        if(!categoryName) {
            res.status(400).send("Bad Request");
        }
        
        const newCategoryData = {name : categoryName};
        await CategoryModel.create(newCategoryData);
        res.send("Category Added Successfully");
    } catch (error) {
        console.log(error);
        next(error);
    }
}); 



module.exports = route;