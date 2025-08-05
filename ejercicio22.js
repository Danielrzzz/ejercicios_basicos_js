const fruits = ["Strawberry", "Banana", "Orange", "Apple"];

const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];

for(let food of foodSchedule) {
    if(food.isVegan < fruits.length){
        food.name = fruits;
        food.isVegan === true;
        i++;
    }
}

console.log(foodSchedule);