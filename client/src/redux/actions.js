import axios from 'axios';
import { ADD_NAME, ADD_PAGE, ADD_DIET, GET_RECIPES, GET_RECIPES_TITLE, ADD_RECIPE, REMOVE_RECIPE, FILTER, ORDER } from "./actions_types";

const URL = 'http://localhost:3001/recipes';

export const addName = (name) => {
    try {
        return async (dispatch) => {
            return dispatch({
                type: ADD_NAME,
                payload: name
            })
        }
    } catch (error) {
        console.log(error);
    } 
};

export const addPage = (page) => {
    try {
        return async (dispatch) => {
            return dispatch({
                type: ADD_PAGE,
                payload: page
            })
        }
    } catch (error) {
        console.log(error);
    } 
};

export const addDiet = (diet) => {
    try {
        return async (dispatch) => {
            return dispatch({
                type: ADD_DIET,
                payload: diet
            })
        }
    } catch (error) {
        console.log(error);
    } 
};

export const getRecipes = () => {
    try {
        const idsApi = Array.from({length: 2}, (_, i) => i + 1).join(','); //! ESTA ESTA PENDIENTE
        return async (dispatch) => {
            const { data } = await axios.get(`${URL}`);
            return dispatch({
                type: GET_RECIPES,
                payload: data
            })
        }
    } catch (error) {
        console.log(error);
    } 
};

export const getRecipesTitle = (title) => {
    try {
        return async (dispatch) => {
            const { data } = await axios.get(`${URL}/title/${title}`);
            const ids = data.map(recipe => recipe.id).join(',');
            const recipes = await axios.get(`${URL}/bulk/${ids}`);
            const dataFound = recipes.data;
            console.log(dataFound); //! ENCONTRADOS
            return dispatch({
                type: GET_RECIPES_TITLE,
                payload: dataFound
            })
        }
    } catch (error) {
        console.log(error);
    } 
};

export const addRecipe = (recipe) => {
    try {
        return async (dispatch) => {
            // await axios.post(URL, recipe);
            return dispatch({
                        type: ADD_RECIPE,
                        payload: recipe
                    })
    
        };
    } catch (error) {
        console.log(error);
    }
};

export const removeRecipe = (id) => {
    try {
        return async (dispatch) => {
            const { data } = await axios.delete(`${URL}/${id}`);
            return dispatch({
                type: REMOVE_RECIPE,
                payload: data
            })
        };
    } catch (error) {
        console.log(error);
    }
};

export const filterRecipes = (gender) => {
    return {
        type: FILTER,
        payload: gender
    }
};

export const orderRecipes = (orden) => {
    return {
        type: ORDER,
        payload: orden
    }
};