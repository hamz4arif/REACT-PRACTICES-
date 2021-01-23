import {categories} from '../data/categories'
let getAllCategories=()=>categories;
let getAllCategoriesByName=(name)=>{
    return categories.filter(c=>c.name===name)
}
export default {getAllCategories,getAllCategoriesByName}