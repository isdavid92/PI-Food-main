import axios from 'axios';
import { ADD_NAME, ADD_PAGE, ADD_DIET, SET_DIETS, GET_RECIPESDB, GET_RECIPES_TITLE, SET_RECIPES_FOUND, ADD_RECIPE, REMOVE_RECIPE, FILTER, ORDER } from "./actions_types";

const URL = 'http://localhost:3001/';

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

export const setDiets = () => {
    try {
        return async (dispatch) => {
            return dispatch({
                type: SET_DIETS
            })
        }
    } catch (error) {
        console.log(error);
    } 
};

export const getRecipesDB = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`${URL}database`);
            return dispatch({
                type: GET_RECIPESDB,
                payload: data
            });
        } catch (error) {
            console.log(error);
        }
    };
};

export const getRecipesTitle = (title) => {
    try {
        return async (dispatch) => {
            const num = Number(title)
            if (!isNaN(num)) {
                const response = await axios.get(`${URL}recipes/${num}`);
                const data = [response.data]
                return dispatch({
                    type: GET_RECIPES_TITLE,
                    payload: data
                })
            } else {
                const { data } = await axios.get(`${URL}recipes/title/${title}`);
                const ids = data.map(recipe => recipe.id).join(',');
                if (data.length>0) {
                    const recipes = await axios.get(`${URL}recipes/bulk/${ids}`);
                    const dataFound = recipes.data;
                    return dispatch({
                        type: GET_RECIPES_TITLE,
                        payload: dataFound
                    })
                } else {
                    const recipeNoFound = ['There are no matches with the name and the recipe'];
                    return dispatch({
                        type: GET_RECIPES_TITLE,
                        payload: recipeNoFound
                    })
                }
            } 
        }
    } catch (error) {
        console.log(error);
    } 
};

export const setRecipesFound = () => {
    try {
        return async (dispatch) => {
            return dispatch({
                type: SET_RECIPES_FOUND,
            }) 
        }
    } catch (error) {
        console.log(error);
    } 
};

export const addRecipe = (recipe, origin) => {
    try {
        return async (dispatch) => {
            if (origin==='form') await axios.post(`${URL}recipes`, recipe);
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
            const { data } = await axios.delete(`${URL}recipes/${id}`);
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