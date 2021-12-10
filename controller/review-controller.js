import Review from '../model/reviewSchema.js';


export const newReview = async (request, response) => {
    try {
        let review = new Review(request.body);
        await review.save();
        response.status(200).json('Review saved successfully');
    } catch(error) {
        response.status(500).json(error);
    }
}


export const getReviews = async (request, response) => {
    try {
        const reviews = await Review.find({ productId: request.params.id});
        response.status(200).json(reviews);
    } catch(error) {
        response.status(500).json(error);
    }
}


export const deleteReview = async (request, response) => {
    try {
        const review = await Review.findById(request.params.id);
        await review.delete();
        response.status(200).json('Review deleted successfully');
    } catch(error) {
        response.status(500).json(error);
    }
}