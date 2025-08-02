const productsSlice=createSlice({
  name: 'products',
    initialState: {
    Veg: [{name: 'Veg Pizza', price: 10, description: 'Delicious Veg Pizza',image: 'vegpizza.png'},
    {name: 'Veg Burger', price: 8, description: 'Crunchy Veg Burger',image: 'vegburger.png'},
    {name: 'Veg Soup', price: 6, description: 'Warm Veg Soup', image: 'vegsoup.png'},
    {name: 'Veg Salad', price: 5, description: 'Fresh Veg Salad',image: 'vegsalad.png'},
    {name: 'Veg Pasta', price: 7, description: 'Creamy Veg Pasta',image: 'vegpasta.png'},
    {name: 'Veg Sandwich', price: 4, description: 'Toasty Veg Sandwich',image: 'vegsandwitch.png'},
    {name: 'Veg Wrap', price: 9, description: 'Tasty Veg Wrap',image: 'vegwrap.png'},
    {name: 'Veg Tacos', price: 9, description: 'Zesty Veg Tacos',image: 'vegtacos.png'},
    ],
    NonVeg: [
{name: 'Non-Veg Biryani', price: 16, description: 'Aromatic Non-Veg Biryani',image: 'nonvegbiryani.png'},
{name:'Egg Biryani', price: 12, description: 'Flavorful Egg Biryani',image: 'eggbiryani.png'},
{name: 'Non-Veg Curry', price: 14, description: 'Spicy Non-Veg Curry',image: 'nonvegcurry.png'},
{name: 'Non-Veg Kebab', price: 13, description: 'Succulent Non-Veg Kebab',image: 'nonveggkebab.png'},
{name:'Non-Veg Prawns', price: 20, description: 'Juicy Non-Veg Prawns',image: 'nonvegprawns.png'},
{name: 'Non-Veg Mutton', price: 22, description: 'Tender Non-Veg Mutton',image: 'nonvegmutton.png'},
{name: 'Non-Veg Fish', price: 18, description: 'Grilled Non-Veg Fish',image: 'nonvegfish.png'},
{name: 'Non-Veg Chicken Wings', price: 15, description: 'Crispy Non-Veg Chicken Wings',image: 'nonvegchickenwings.png'},
],
    },
    
   

    reducers: {
},
});
const cartSlice=createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addToCart(state, action){
  const existingItem = state.items.find(item => item.name === action.payload.name);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    state.items.push({ ...action.payload, quantity: 1 });
  }
}

  },
});
export const { addToCart } = cartSlice.actions;

//configure the store
const store=configureStore({
        reducer:{products:productsSlice.reducer,
        cart:cartSlice.reducer}

})

export default store;
import { createSlice,configureStore } from '@reduxjs/toolkit';
