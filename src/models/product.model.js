import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    id : {
        type: String
    },
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    image_url: {
        type: String,
        required: true
    },
    image_id: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
})

export default mongoose.model('Product', productSchema);