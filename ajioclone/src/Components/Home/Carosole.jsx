import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Carosole = () => {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5,
          slidesToSlide: 3
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4,
          slidesToSlide: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
     
  return (
    <div>
        <div>
         <Carousel responsive={responsive}
         >
        <div> <img src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-footwear-accessories-sportsshoes.jpg" alt="fr" />        </div>
        <div> <img src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-footwear-accessories-watches.jpg" alt="f" /> </div>
        <div> <img src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-footwear-accessories-sandals.jpg" alt="s" /> </div>
        <div> <img src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-footwear-accessories-home.jpg" alt="s" /> </div>
        <div><img src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-footwear-accessories-sneakers.jpg" alt="d" /></div>
        <div><img src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-footwear-accessories-sunglasses.jpg" alt="s" /></div>
        <div><img src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-footwear-accessories-formalshoes.jpg" alt="s" /></div>
      </Carousel>;
      </div>
      <div>
        <img src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-hiddengems-header.jpg" alt="dfds" />
      </div>
      <div>
      <Carousel responsive={responsive}
         >
        <div> <img src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-footwear-accessories-sportsshoes.jpg" alt="fr" />        </div>
        <div> <img src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-footwear-accessories-watches.jpg" alt="f" /> </div>
        <div> <img src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-footwear-accessories-sandals.jpg" alt="s" /> </div>
        <div> <img src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-footwear-accessories-home.jpg" alt="s" /> </div>
        <div><img src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-footwear-accessories-sneakers.jpg" alt="d" /></div>
        <div><img src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-footwear-accessories-sunglasses.jpg" alt="s" /></div>
        <div><img src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-footwear-accessories-formalshoes.jpg" alt="s" /></div>
      </Carousel>;

      </div>

    </div>
  )
}

export default Carosole