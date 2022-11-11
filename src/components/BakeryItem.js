// TODO: create a component that displays a single bakery item
import "./BakeryItem.css"; 

function BakeryItem(props) {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const itemName = props.details.name
  const description = props.details.description
  const price = props.details.price
  const imageURL = props.details.image

  return (
    <div className="BakeryItem">
      <h1>{itemName}</h1> 
      <b>{description}</b>
      <b>{"$" + price}</b>
      &nbsp; 
      <img src={imageURL}/>
      &nbsp; 
      &nbsp; 
      <button onClick={() => {
        props.addToCart(props.details)
      }}>Add to Cart!</button>

      &nbsp; 
      &nbsp; 
      &nbsp; 
      &nbsp; 

    </div>
  );
}

export default BakeryItem;