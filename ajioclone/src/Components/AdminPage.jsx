import { useState } from "react";
import axios from "axios";

import {Button, Input, FormControl, FormLabel} from "@chakra-ui/react"

export default function AdminPage() {

  const [details, setdetails] = useState({
    title: "",
    description : "",
    category : "",
    price : "",
    image: "",
  })





  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      method: 'post',
      url: 'http://localhost:3001/productsmen',
      data: { title : details.title , description : details.description, category: details.category, price: +details.price, image: details.image}
    });
    
  }

  return (
      <div style={{ width: "50%", margin: "auto" , marginTop: "20px", marginBottom: "20px" }}>
        <form  >
          <FormControl>
              <Input  placeholder = "title" onChange={ (e) => setdetails({ ...details,  title : e.target.value}) } />
              <Input  placeholder = "description" onChange={ (e) => setdetails({ ...details, description : e.target.value}) } />
              <Input  placeholder = "category" onChange={ (e) => setdetails({ ...details, category : e.target.value}) } />
              <Input  placeholder = "price" onChange={ (e) => setdetails({ ...details, price : +e.target.value}) } />
              <Input  placeholder = "image_url" onChange={ (e) => setdetails({ ...details, image : e.target.value}) } />

              <br />
              <Button  onClick={handleSubmit}> Submit</Button>
          </FormControl>
        </form>
      </div>
  )
}