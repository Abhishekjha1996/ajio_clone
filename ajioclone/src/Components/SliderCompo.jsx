import React from 'react';
import axios from "axios";



const SliderCompo = () => {
    const[data, setdata]= React.useState([])
    const[sImage, setImage]= React.useState([])

    const getdata = () => {
        axios.get("http://localhost:3001/posts")
        .then((res) => setdata(res.data))        
    }
    React.useEffect(() => {
        getdata()
    },[])
     console.log(data)

  return (
    <div>
        {data.map((e, i) => (
            setTimeout(() => {
                <img src={e.image} alt="name" />
            }, 100)
             
        ))}
       
        
    </div>
  )
}

export default SliderCompo