import { categories } from "../data/categories";

const getAllCategories = () => categories;

const getCategoryByName = name => {
    return categories.filter(c => c.name === name )
}

export default {getCategoryByName, getAllCategories};