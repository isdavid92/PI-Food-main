import { ADD_NAME, ADD_PAGE, SET_LAST_ROUTE, ADD_DIET, SET_DIETS, GET_RECIPESDB, GET_RECIPES_TITLE, SET_RECIPES_FOUND, ADD_RECIPES, ADD_RECIPE, REMOVE_RECIPE, FILTER_DIETS, FILTER_ORIGIN, ORDER_AZ, ORDER_LM } from "./actions_types";

const inicialState = {
    recipes: [],
    allRecipes: [],
    recipesFound: [],
    recipesDB: [],
    lastRoute: '',
    name: '',
    page: 1,
    diets: []
}

const reducer = (state = inicialState, { type, payload }) => {
    switch (type) {

        case GET_RECIPES_TITLE:
            return {
                ...state,
                recipesFound: payload
            }

        case SET_RECIPES_FOUND:
            return {
                ...state,
                recipesFound: []
            }

        case ADD_NAME:
            return {
                ...state,
                name: payload,
            }

        case SET_LAST_ROUTE:
            return {
                ...state,
                lastRoute: payload,
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
        case GET_RECIPESDB:
            return {
                ...state,
                recipesDB: payload,
                recipes: [...payload, ...state.recipes],
                allRecipes: [...payload, ...state.allRecipes]
            }

        case ADD_RECIPES:
            return {
                ...state,
                recipes: payload,
                allRecipes: payload
            }

        case ADD_RECIPE:
            return {
                ...state,
                recipes: payload,
                allRecipes: [payload, ...state.allRecipes]
            }

        // case REMOVE_RECIPE:
        //     return {
        //         ...state,
        //         recipes: payload,
        //         allRecipes: payload
        //     }

        case FILTER_DIETS:
            return {
                ...state,
                recipes: payload
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
                allRecipes: [...state.allRecipes],
                recipes: state.recipes.sort((a, b) => payload === 'A' ? a.id - b.id : b.id - a.id)
            }

        case ORDER_AZ:
            return {
                ...state,
                allRecipes: [...state.allRecipes],
                recipes: state.recipes.sort((a, b) => payload === 'A' ? a.id - b.id : b.id - a.id)
            }

        default:
            return state
    }
}

export default reducer;