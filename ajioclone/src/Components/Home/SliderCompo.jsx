import React from 'react';
import axios from "axios";



const SliderCompo = () => {
    const[data, setdata]= React.useState([])
    const[sImage, setImage]= React.useState(0)
    const[PImage, setPImage]= React.useState(["https://assets.ajio.com/cms/AJIO/WEB/19012023-UHP-D-MainBanner-P7-Winterwear-LeeWrnagler-Min50.jpg", "https://assets.ajio.com/cms/AJIO/WEB/Top-D-Fashionation-5090-1440x470.gif", "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-trendscarousel-womensethnic-edited.jpg", "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-trendscarousel-winterwear-edited.jpg", "	https://assets.ajio.com/cms/AJIO/WEB/20012023-UHP-D-MainBanner-P2-WarmWinter-BelleFilleCampusSutra-Upto75.jpg"])
    const[LImage, setPLImage]= React.useState(["https://assets.ajio.com/cms/AJIO/WEB/1440x128--p.jpg","https://assets.ajio.com/cms/AJIO/WEB/1440x128--FB.jpg", "https://assets.ajio.com/cms/AJIO/WEB/08032022-D-unisex-ajiocares-strip%20new%20d.jpg", "https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-offers-payupto3AJIOpoints.jpg", "	https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-offers-relianceone.jpg"])

    const getdata = () => {
        axios.get("http://localhost:3001/posts")
        .then((res) => setdata(res.data))        
    }
    React.useEffect(() => {
        getdata()
        setInterval(() => {
            setImage(sImage => sImage <= 3 ? sImage + 1 : 0)
            
         },2000)

    },[])


  return (
    <div>
        {/* {data.map((i) => (
                <img src={i.image} alt="name" />
             
        ))} */}

        <div>
            <img src="https://assets.ajio.com/cms/AJIO/WEB/UHP-D-Urgency74Hrs-LiveNow-1440x128.jpg" alt="first" />
        </div>
    <div>
        <img src={PImage[sImage]} alt="logo" />
    </div>
    <div>
        <img src={LImage[sImage]} alt="logo" />
    </div>
    
    </div>
  )
}

export default SliderCompo