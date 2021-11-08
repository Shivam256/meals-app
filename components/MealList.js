import React from "react";
import { View, FlatList, StyleSheet } from "react-native";

// import { useSelector } from "react-redux";

import MealItem from '../components/MealItem';

const MealList = props => {
  // const favoriteMeals = useSelector(state => state.meals.favoriteMeals);

    const renderMealItem = (itemData) => {
      // const currentMealIsFav = favoriteMeals.some(meal => meal.id === itemData.item.id);
        return (
          <MealItem
            title={itemData.item.title}
            duration={itemData.item.duration}
            complexity={itemData.item.complexity}
            affordibility={itemData.item.affordibility}
            image={itemData.item.imageUrl}
            onSelectMeal={() => {
                props.navigation.navigate({
                    routeName:'MealDetail',
                    params:{
                        mealId:itemData.item.id,
                        mealTitle:itemData.item.title,
                        // isFav:currentMealIsFav
                    }
                })
            }}
          />
        );
      };
  return (
    <View style={styles.list}>
      <FlatList
        data={props.listData}
        renderItem={renderMealItem}
        style={{ width: "100%", padding: 10 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MealList;
