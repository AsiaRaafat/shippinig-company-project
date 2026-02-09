// import React from 'react'
// import Slider from "react-slick";
// import"./index5.scss"
// import { useState,useEffect } from 'react';
// import axios from 'axios';


// export default function MySwiper5() {

//    const [data,setData]=useState([]);
//    const language = localStorage.getItem("lang");  

//    useEffect(() => {
//     axios
//       .get(`https://shipping.somee.com/api/Website/GetAdvisories?lang=${language}`, {
//         params: {
//           populate: "*",
//         },
//       })
//       .then((res) => {
//         console.log(res.data);
//         setData(res.data);
//       });
//   }, []);

//     var settings = {
//         dots: true,
//         infinite: false,
//         speed: 500,
//         slidesToShow: 5,
//         slidesToScroll: 1,
//         initialSlide: 0,
//         responsive: [
//           {
//             breakpoint: 1024,
//             settings: {
//               slidesToShow: 3,
//               slidesToScroll: 3,
//               infinite: true,
//               dots: true
//             }
//           },
//           {
//             breakpoint: 600,
//             settings: {
//               slidesToShow: 2,
//               slidesToScroll: 2,
//               initialSlide: 0
//             }
//           },
//           {
//             breakpoint: 480,
//             settings: {
//               slidesToShow: 1,
//               slidesToScroll: 1
//             }
//           }
//         ]
//       };
//   return (
//     <div>
//         <link
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
//       <div className="slider-container">
//       <Slider {...settings}>
//         {
//                data.map((element) => (
//                 <div key={element.id}>
//                 <div className="slide11">
//                  <span className='span22'>{element.date}</span>
//                  <h6>{element.title}</h6>
//                  <p className='h7'>
//                    {element.description}
//                  </p>
//                 </div>
//                  </div>
//                ))
//         }
//       </Slider>
//       </div>
//     </div>
//   )
// }


import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import "./index5.scss";
import axios from 'axios';

export default function MySwiper5() {

  const [datash, setData] = useState([]);


   useEffect(() => {
    axios.get(`https://mocki.io/v1/17a65bb3-43d9-4b35-ba22-014f86fce2a0`)
      .then((res) => setData(res.data.shipments))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  // useEffect(() => {
  //   axios.get('https://fakestoreapi.com/products')
  //     .then((res) => {
  //       // تحويل البيانات لتتناسب مع الـ Slider
  //       const formattedData = res.data.map(product => ({
  //         id: product.id,
  //         title: product.title,
  //         description: product.description,
  //         date: "Jan 1, 2026", // تاريخ وهمي لأن API لا يوجد بها تاريخ
  //       }));
  //       setData(formattedData);
  //     })
  //     .catch((err) => console.error("Error fetching products:", err));
  // }, []);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 3, infinite: true, dots: true } },
      { breakpoint: 600, settings: { slidesToShow: 2, slidesToScroll: 2, initialSlide: 0 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ]
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
      <div className="slider-container">
        <Slider {...settings}>
          {datash.map((element) => (
            // <div key={element.id}>
            //   <div className="slide11">
            //     <span className='span22'>{element.date}</span>
            //     <h6>{element.title}</h6>
            //     <p className='h7'>{element.description}</p>
            //   </div>
            // </div>
            <div key={element.id}>
              <div className="slide11">
                <span className='span22'>{element.expectedDelivery}</span>
                <h6>{element.sender}</h6>
                <h6>{element.receiver}</h6>
                <p className='h7'>{element.status}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}
