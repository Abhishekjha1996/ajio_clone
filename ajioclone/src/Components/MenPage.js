import React, { useState } from 'react'
import axios from "axios"
import { Container, Grid, GridItem, Image, Text, Button, Select } from '@chakra-ui/react'
import {NavLink} from "react-router-dom"


const MenPage = () => {
const [data, setdata] = React.useState([])
const [val, setval] = useState("asc");

const getdata = () => {
  return axios.get(`http://localhost:3001/productsmen?_sort=price&_order=${val}`)
  .then((res) => setdata(res.data));

};

// ?_sort=views&_order=asc/desc
console.log(data)

  React.useEffect(() => {
    getdata()
   
  },[val])

  return (

    <div>

      <div style={{display: "flex", alignContent: "space-between"}}>
        <div>
      <Select placeholder='Sort by Price' onChange={(e) => setval(e.target.value)}>
      <option value='asc'>High To Low</option>
      <option value='desc'>Low to High</option>
      </Select>
      </div>
      <div>

      
      <Select placeholder='Sort by Rating'>
      <option value='asc'>High Rate to Low</option>
      <option value='desc'> Low Rate to High</option>
      
      </Select>
      
      </div>       
        
       </div>


      <div style={{ margin: "auto"  }}>

      <Grid 
      // templateColumns='repeat(4, 1fr)' gap={6} 
       templateColumns={{
        base: "repeat(1, 1fr)",
        md: "repeat(2, 1fr)",
        lg: "repeat(4, 1fr)"
      }}
      gap={2}

      w="100%" h="100%">

        { data.map((item) => (
            <Container>
            <GridItem w='90%' h="500px" border="2px solid black" > 
            
            <Image w="90%" h="300px" src={item.image} alt="logo" />  
            <Text w="90%" h="30px" > Category: ${item.category}</Text>
            <Text w="90%" h="30px" > Price: ${item.price} </Text>
            <Text w="90%" h="30px" > Rating: ${item.rating.rate} </Text>
            <NavLink to={`/men/${item.id}`}> <Button colorScheme='blue'> View Products </Button>   </NavLink>
          
            </GridItem>
            </Container>


          /* // < key={item.id} style={{display: "grid", gridTemplateColumns :repeat("4", "1fr") }}>
          //   <img src={item.image} /> */


        )) }

         </Grid>
     
      </div>



    </div>
  )
}

export default MenPage