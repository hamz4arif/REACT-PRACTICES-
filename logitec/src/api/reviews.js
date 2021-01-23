import {reviews} from '../data/reviews';

const getReviews = pid => {
  return reviews.filter(r => r.productId === pid && r.isApproved)
}



export default {getReviews};