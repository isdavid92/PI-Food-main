import axios from 'axios';
import { ADD_NAME, GET_RECIPES, ADD_RECIPE, REMOVE_RECIPE, FILTER, ORDER } from "./actions_types";

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
}

export const getRecipes = () => {
    try {
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
}

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
}

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
}

export const filterRecipes = (gender) => {
    return {
        type: FILTER,
        payload: gender
    }
}

export const orderRecipes = (orden) => {
    return {
        type: ORDER,
        payload: orden
    }
}