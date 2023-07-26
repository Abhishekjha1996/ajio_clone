import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const SingleMen = () => {
    const { id } = useParams();
  const [userDetails, setUserDetails] = useState({});

  useEffect(() => {
    axios.get(`https://ajioclonebackend.onrender.com/productsmen/${id}`)
      .then((res) => setUserDetails(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  console.log(userDetails)

  const { title, price, description, category, image, rating } = userDetails;

  return (
    <div style={{ display: "flex" }}>
        <div><img src={image} alt={title} /></div>
        <div>
    <div> <h1>  {title}   </h1> </div>
    <div> <p> {description}</p> </div>
    <div> <p>{category}</p>  </div>
    <div>  <p>{price}</p> </div>
    <div> <button style={{border: "1px solid black"}} >BUY</button>  </div>
    <div> <button style={{border: "1px solid black"}} >ADD TO CART</button>  </div>
    <div> <button style={{border: "1px solid black"}} >ADD TO WISHLIST</button>  </div>
     
      
      
      </div>  
      
      

    </div>
  )
}

export default SingleMen

