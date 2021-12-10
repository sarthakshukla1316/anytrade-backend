import express from 'express';
import { addPaymentGateway, paymentResponse } from '../controller/payment-controller.js';
import { getProductByCategory, getProductById, getProducts } from '../controller/product-controller.js';
import { newReview, getReviews, deleteReview } from '../controller/review-controller.js';
import { userLogin, userSignup } from '../controller/user-controller.js';



const router = express.Router();


router.post('/signup', userSignup);

router.post('/login', userLogin);

router.get('/products', getProducts);

router.get('/product/:id', getProductById);

router.post('/review/new', newReview);

router.get('/reviews/:id', getReviews);

router.delete('/review/delete/:id', deleteReview);

router.get('/product/category/:category', getProductByCategory);


router.post('/payment', addPaymentGateway);

router.post('/callback', paymentResponse);

export default router;