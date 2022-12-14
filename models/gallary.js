const mongoose = require("mongoose");
const { model, Schema } = mongoose;

const gallerySchema = new Schema({
    name: { type: String , required: true },
    category: {type: Array, required: true},
    likes: {type: Number, default: 0},
    imageLink: {type:String, required: true}
}, {
    timestamps : {createdAt: new Date(), updatedAt: new Date()}
});

module.exports = model("gallery",gallerySchema);