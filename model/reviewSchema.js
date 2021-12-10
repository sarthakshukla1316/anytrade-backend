import mongoose from 'mongoose';

const reviewSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    productId: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    review: {
        type: String,
        required: true
    }
})


const review = mongoose.model('review', reviewSchema);

export default review;