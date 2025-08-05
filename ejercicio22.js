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
    if(food.isVegan === false){
        for(let i = 0;i < fruits.length; i++){
        food.name = fruits[i];
        }
    }
}

console.log(foodSchedule);