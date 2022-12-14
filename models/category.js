const mongoose = require("mongoose");
const {model, Schema} = mongoose;

const categorySchema = new Schema({
    name: {type:String, required: true}
}, {
    timestamps: {createdAt: new Date(), updatedAt: new Date()}
}
);

module.exports = model("category", categorySchema);