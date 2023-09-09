import axios from "axios";
import { GET_RECIPE, ADD_RECIPE, REMOVE_RECIPE, FILTER, ORDER } from "./actions_types";

const URL = 'http://localhost:3001/recipes';

export const getRecipes = () => {
    try {
        return async (dispatch) => {
            let id = 1;
            const recipesApi = [];
            while (data.length<=100) {
                const { data } = await axios.get(`${URL}/${id}`);
                if (data) recipesApi.push(data);
                id++
            }
            return dispatch({
                type: GET_RECIPE,
                payload: recipesApi
            })
        }
    } catch (error) {
        console.log(error);
    } 
}

export const addRecipe = (recipe) => {
    try {
        return async (dispatch) => {
            const { data } = await axios.post(URL, recipe);
            return dispatch({
                        type: ADD_RECIPE,
                        payload: data
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