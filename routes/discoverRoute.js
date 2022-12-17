const { Router } = require("express")
const route = Router();
const CategoryModel = require("../models/category");
const GalleryModel = require("../models/gallary");

route.get("/like/:imageId", async (req, res, next) => {

    try {
        const imageId = req.params.imageId;

        if(!imageId) {
            res.status(400).send("Bad Request");
        };

        let likeValue;

        const imageDetails = await GalleryModel.findOne({ _id: imageId});

        if(imageDetails) {
            if(imageDetails.likes){
                likeValue = 0;
            } else {
                likeValue = 1;
            };
        };

        await GalleryModel.updateOne(
            { _id : imageId},
            { $set : {likes : likeValue}}
        )

        res.send("Favorite updated successfully");

    } catch (error) {
        console.log(error);
        next(error);
    }
});



module.exports = route;