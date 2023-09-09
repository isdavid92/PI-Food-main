import { ADD_RECIPE, REMOVE_RECIPE, FILTER, ORDER } from "./actions_types";

const inicialState = {
    recipes: [],
    allRecipes: [],
    name:''
}

const reducer = (state = inicialState, { type, payload }) => {
    switch (type) {
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