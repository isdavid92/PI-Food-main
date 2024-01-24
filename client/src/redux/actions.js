import axios from 'axios';
import { ADD_NAME, ADD_PAGE, ADD_DIET, SET_LASTROUTE, SET_DIETS, GET_RECIPESDB, GET_RECIPES_TITLE, ADD_RECIPES, ADD_RECIPE, SET_RECIPES, REMOVE_RECIPE, FILTER_DIETS, FILTER_ORIGIN, ORDER_AZ, ORDER_LS } from "./actions_types";

const URL = 'http://localhost:3001/';

export const addName = (name) => {
    try {
        return (dispatch) => {
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
        return (dispatch) => {
            return dispatch({
                type: ADD_PAGE,
                payload: page
            })
        }
    } catch (error) {
        console.log(error);
    } 
};

export const addDiet = ({diet,origin}) => {
    try {
        return async (dispatch) => {
            if (origin=='nav') {
                const { data } = await axios.get(`${URL}diets`);
                return dispatch({
                    type: ADD_DIET,
                    payload: data
                })
            } else {
                return dispatch({
                    type: ADD_DIET,
                    payload: diet
                })
            }
        }
    } catch (error) {
        console.log(error);
    } 
};

export const setDiets = () => {
    try {
        return (dispatch) => {
            return dispatch({
                type: SET_DIETS
            })
        }
    } catch (error) {
        console.log(error);
    } 
};

export const setLastRoute = (route) => {
    try {
        return (dispatch) => {
            return dispatch({
                type: SET_LASTROUTE,
                payload: route
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
            const num = Number(title);
            if (!isNaN(num)) {
                const response = await axios.get(`${URL}recipes/${num}`);
                if (typeof response.data == 'string') {
                    const data = [`Sorry, there is no recipe with the ID: ${num}`];
                    return dispatch({
                        type: GET_RECIPES_TITLE,
                        payload: data
                    })
                } else {
                    const data = [response.data];
                    return dispatch({
                        type: GET_RECIPES_TITLE,
                        payload: data
                    })
                }
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

export const addRecipes = (recipes) => {
    try {
        return (dispatch) => {
            return dispatch({
                        type: ADD_RECIPES,
                        payload: recipes
                    })
        };
    } catch (error) {
        console.log(error);
    }
};

export const setRecipes = (recipes) => {
    try {
        return (dispatch) => {
            return dispatch({
                        type: SET_RECIPES,
                        payload: recipes
                    })
        };
    } catch (error) {
        console.log(error);
    }
};

export const addRecipe = (recipe) => {
    try {
        const dietToString = (dits) => {
            const ToStringdiets = dits.map(diet => {
                if (diet == 1) return "gluten free";
                if (diet == 2) return "dairy free";
                if (diet == 3) return "paleolithic";
                if (diet == 4) return "primal";
                if (diet == 5) return "fodmap friendly";
                if (diet == 6) return "whole 30";
                if (diet == 7) return "pescatarian";
                if (diet == 8) return "pescatarian";
                if (diet == 9) return "vegan";
                if (diet == 10) return "ketogenic";
            });
            return ToStringdiets 
        };
        return async (dispatch) => {
            const origin = 'data base'
            const steps = [{number:1, step:recipe.steps}];
            const diets = dietToString(recipe.diets)
            const recipeOrigin = {...recipe, origin, steps, diets };
            await axios.post(`${URL}recipes`, recipe);
            return dispatch({
                        type: ADD_RECIPE,
                        payload: recipeOrigin
                    })
        };
    } catch (error) {
        console.log(error);
    }
};

export const removeRecipe = ({id,recipesState}) => {
    try {
        const newRecipes = recipesState.filter(recipe=>recipe.id!==id)
        return (dispatch) => {
            return dispatch({
                type: REMOVE_RECIPE,
                payload: newRecipes
            })
        };
    } catch (error) {
        console.log(error);
    }
};

export const orderRecipesAZ = ({ order,recipesState }) => {
    if (order=='az') {
        const orderRecipesAZ = recipesState.sort((a, b) => {
            if (a.title < b.title) {
                return -1;
            }
            if (a.title > b.title) {
                return 1;
            }
            return 0;
        });
        return {
            type: ORDER_AZ,
            payload: orderRecipesAZ
        }
        
    } else if (order=='za') {
        const orderRecipesZA = recipesState.sort((a, b) => {
            if (a.title > b.title) {
                return -1;
            }
            if (a.title < b.title) {
                return 1;
            }
            return 0;
        });
        return {
            type: ORDER_AZ,
            payload: orderRecipesZA
        }
        
    }
};

export const orderRecipesLS = ({ order,recipesState }) => {
    if (order=='ls'){
        const orderRecipesLS = recipesState.sort((a, b) => b.healthScore - a.healthScore);
        return {
            type: ORDER_LS,
            payload: orderRecipesLS
        }
    } else {
        if (order=='sl'){
            const orderRecipesSL = recipesState.sort((a, b) => a.healthScore - b.healthScore);
            return {
                type: ORDER_LS,
                payload: orderRecipesSL
            }
        }
    }
};