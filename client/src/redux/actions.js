import axios from "axios";
import { ADD_RECIPE, FILTER, ORDER } from "./actions_types";

const URL = 'http://localhost:3001/recipes';

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
                type: REMOVE_FAV,
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