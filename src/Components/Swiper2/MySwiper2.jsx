// import React from 'react'
// import Slider from "react-slick";
// import './index2.scss'
// import { useState,useEffect } from 'react';
// import axios from 'axios';

// export default function MySwiper2() {

//     const [images, setImage] = useState([]);
    

//     useEffect(() => {
//         axios
//           .get(`https://shipping.somee.com/api/Website/GetImages`, {
//             params: {
//               populate: "*",
//             },
//           })
//           .then((res) => {
//             console.log(res.data);
//             setImage(res.data);
//           });
//       }, []);
       

//       var settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//       };


//     return (
//       <div>

//       <link
//         rel="stylesheet"
//         type="text/css"
//         charset="UTF-8"
//         href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
//         />
//       <link
//         rel="stylesheet"
//         type="text/css"
//         href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
//         />


//       <Slider {...settings}>
//           {
//             images.map((image,index) => (
//               <div className='main5'>
//               <div>
//                 <img src={image.photoPath} className='img55' alt='best shipping company amazon marin'  /> 
//               </div>
//               </div>
//             ))
//           }
//       </Slider>
      
//         </div>
//     );
//     }


// import React, { useState, useEffect } from 'react';
// import Slider from "react-slick";
// import './index2.scss';
// import axios from 'axios';

// export default function MySwiper2() {
//   const [images, setImages] = useState([]);

//   useEffect(() => {
//     axios.get(`https://fakestoreapi.com/products`)
//       .then((res) => setImages(res.data))
//       .catch((err) => console.error("Error fetching products:", err));
//   }, []);


//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };

//   return (
//     <div>
//       <link
//         rel="stylesheet"
//         type="text/css"
//         charset="UTF-8"
//         href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
//       />
//       <link
//         rel="stylesheet"
//         type="text/css"
//         href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
//       />

//       <Slider {...settings}>
//         {images.map((productimg) => (
//           <div className='main5' key={productimg.id}>
//             <div>
//               <img src={productimg.image} className='img55' alt='slider image'/> 
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// }

import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import './index2.scss';
import axios from 'axios';

export default function MySwiper2() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products`)
      .then((res) => setImages(res.data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <link
        rel="stylesheet"
        type="text/css"
        charset="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />

      {!images.length ? (
        <p>Loading images...</p>
      ) : (
        <Slider {...settings}>
          {images.map((productimg) => (
            <div className='main5' key={productimg.id}>
              <div>
                <img src={productimg.image} className='img55' alt={productimg.title} /> 
              </div>
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
}
