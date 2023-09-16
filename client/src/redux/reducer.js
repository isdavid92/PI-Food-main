import { ADD_NAME, ADD_PAGE, ADD_DIET, SET_DIETS, GET_RECIPESDB, GET_RECIPES_TITLE, ADD_RECIPE, REMOVE_RECIPE, FILTER, ORDER } from "./actions_types";

const inicialState = {
    recipes: [],
    allRecipes: [],
    recipesFound:[],
    name:'',
    page:1,
    diets:[]
}

const reducer = (state = inicialState, { type, payload }) => {
    switch (type) {

        case GET_RECIPES_TITLE:
            return {
                ...state,
                recipesFound: payload
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
        case GET_RECIPESDB:
            return {
                ...state,
                recipes: payload,
                allRecipes: payload
            }

        case ADD_RECIPE:
            return {
                ...state,
                recipes: payload,
                allRecipes: payload
            }

        case REMOVE_RECIPE:
            return {
                ...state,
                recipes: payload,
                allRecipes: payload
            }

        case FILTER:
            if ( payload==="todos" ) {
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

        case ORDER:
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