import { MEALS } from "../../data/dummy-data";
import { SET_FILTERS, TOGGLE_FAVORITE } from "../actions/meals.actions";

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
};

const mealsReducer = (state = initialState, action) => {
  switch(action.type){
    case TOGGLE_FAVORITE:{
      const existingIndex = state.favoriteMeals.findIndex(meal => meal.id === action.mealId );
      if(existingIndex >=0){
        const updatedFavMeals = [...state.favoriteMeals];
        updatedFavMeals.splice(existingIndex,1);
        return {
          ...state,
          favoriteMeals:updatedFavMeals
        }
      }else{
        const meal = state.meals.find(m => m.id === action.mealId)
        return {
          ...state,
          favoriteMeals:state.favoriteMeals.concat(meal)
        }
      }
    }
    case SET_FILTERS:{
      const appiliedFilters = action.filters;
      const updatedFilteredMeals = state.meals.filter(meal =>{
        if(appiliedFilters.glutenFree && !meal.isGlutenFree){
          return false;
        }
        if(appiliedFilters.lactoseFree && !meal.isLactoseFree){
          return false;
        }
        if(appiliedFilters.vegam && !meal.isVegan){
          return false;
        }
        if(appiliedFilters.vegetarian && !meal.isVegetarian){
          return false;
        }

        return true;
      })


      return {
        ...state,
        filteredMeals:updatedFilteredMeals
      }
    }
    default:{
      return state;
    }
  }
  return state;
};



export default mealsReducer;