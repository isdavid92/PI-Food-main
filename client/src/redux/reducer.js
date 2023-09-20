import { ADD_NAME, ADD_PAGE, ADD_DIET, SET_DIETS, SET_LASTROUTE, GET_RECIPESDB, GET_RECIPES_TITLE, ADD_RECIPES, ADD_RECIPE, SET_RECIPES, REMOVE_RECIPE, FILTER_ORIGIN, ORDER_AZ, ORDER_LS } from "./actions_types";

const inicialState = {
    recipes: [],
    allRecipes: [],
    render: 0,
    lastRoute:'',
    name: '',
    page: 1,
    diets: []
}

const reducer = (state = inicialState, { type, payload }) => {
    switch (type) {

        case GET_RECIPES_TITLE:
            return {
                ...state,
                recipes: payload
            }

        case ADD_NAME:
            return {
                ...state,
                name: payload,
            }

        case ADD_PAGE:
            return {
                ...state,
                page: payload,
            }

        case ADD_DIET:
            return {
                ...state,
                diets: [...state.diets, payload]
            }

        case SET_DIETS:
            return {
                ...state,
                diets: []
            }

        case SET_LASTROUTE:
            return {
                ...state,
                lastRoute: payload
            }

        case GET_RECIPESDB:
            return {
                ...state,
                recipes: [...payload, ...state.recipes],
                allRecipes: [...payload, ...state.allRecipes]
            }

        case ADD_RECIPES:
            return {
                ...state,
                recipes: payload,
                allRecipes: payload
            }

        case SET_RECIPES:
            return {
                ...state,
                render: Math.random(),
                recipes: payload
            }

        case ADD_RECIPE:
            return {
                ...state,
                recipes: payload,
                allRecipes: [payload, ...state.allRecipes]
            }

        case REMOVE_RECIPE:
            return {
                ...state,
                recipes: payload,
            }

        case FILTER_ORIGIN:
            if (payload === "todos") {
                return {
                    ...state,
                    allRecipes: [...state.allRecipes],
                    recipes: [...state.allRecipes]
                }
            } else {
                return {
                    ...state,
                    allRecipes: [...state.allRecipes],
                    recipes: state.allRecipes.filter(per => per.gender === payload)
                }
            }

        case ORDER_AZ:
            return {
                ...state,
                render: Math.random(),
                recipes: payload
            }

        case ORDER_LS:
            return {
                ...state,
                render: Math.random(),
                recipes: payload
            }

        default:
            return state
    }
}

export default reducer;