import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem.js";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [shopCartItems, setShopCartItems] = useState([])

  function addToCart(item) {
    setShopCartItems([...shopCartItems, item])
    console.log(shopCartItems)
  }

  function getSum(array) {
    const priceArray = array.map(item => item.price)
    const sum = priceArray.reduce((price, a) => price + a, 0)
    // console.log('SUM')
    // console.log(sum)
    return sum
  }

  return (
    <div className="App">
      <div className="left">
      <h1>Pandora Bakery</h1> {/* TODO: personalize your bakery (if you want) */}

      {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
        <BakeryItem details={item} key={index} addToCart={addToCart}/> // replace with BakeryItem component
      ))}

      </div>
      <div className="right">
        <h2>Cart</h2>
        {shopCartItems.map((item, index) => (
          <p>{item.name}</p>
          ))} 
        
        <b>Grand total:{"$"+getSum(shopCartItems)}</b>

      </div>
    </div>
  );
}

export default App;
