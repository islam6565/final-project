import React from 'react'
import "./home.css"
import Footerr from './Footerr'





const Home = () => {
  return (
    <>
    <div className='slider'>

  <div className='desc'>
    <h3>Big Sale Up to 30% off</h3>
    <h1>Shop For Great Selection Of T-Shirts</h1>
  <button>Shop now</button>

  </div>

 
    </div>
    <div className='headerr'>
      
       
      {/* section3 */}
      <section className="section3">
          <h1>Top destinations</h1>
          <div className="images">
            <div className="oneimg">
              <img src="https://rukminim2.flixcart.com/image/832/832/xif0q/shirt/w/q/c/xl-isuel-105-varun-clothes-original-imagxat7ffqwtcy6.jpeg?q=70&crop=false" />
              <h3>San Francisco</h3>
              <p>16 Rentals</p>
            </div>
            <div className="oneimg">
              <img src="https://www.ernest.ca/cdn/shop/files/ernest-vestons-sport_ad399828-a47d-4cd8-bc29-1c5d089a0c33.jpg?v=1724679024&width=600" />
              <h3>New jersey</h3>
              <p>16 Rentals</p>
            </div>
            <div className="oneimg">
              <img src="https://isartiluxurymenswear.com/wp-content/uploads/2022/04/casual-shirts-4-1.jpg" />
              <h3>California</h3>
              <p>16 Rentals</p>
            </div>
            <div className="oneimg">
              <img src="https://i1.adis.ws/i/lucky/127075_001_2/PRINT-SANTE-FE-WESTERN-001?sm=aspect&aspect=2:3&w=437&qlt=100" />
              <h3>Los Angeles</h3>
              <p>16 Rentals</p>
            </div>
          </div>
        </section>
   
        {/* section5 */}
        <section className="section5">
          <img src="https://images.ctfassets.net/egcy6g1mdqw1/79OoKfrwn3hkg3OZZZp5lS/502a88aaa037577a535e64592fc4f945/MensPLP-3.jpg" />
          <div className="description">
          <h1>Exclusive Deals for the Modern Gentleman</h1>
          <p>Subscribe to our newsletter and unlock access to secret deals and limited-time offers!</p>
          </div>
        </section>

      <section className='secgallery'>
        <img src="https://www.mrporter.com/content/images/cms/ycm/resource/blob/25114924/121a0106f646de17af47194d45462bd7/image-desktop-data.png/w1500_q80.jpg"/>
    
      </section>

      <Footerr/>
    </div>
    
    </>
  )
}

export default Home




