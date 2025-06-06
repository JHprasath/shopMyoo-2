import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo3 from './images/shp--i-keep-my-arms-and-thighs-bump-free-with-this-20-skin-smoothing-body-scrub-tout--060287a07b4d4ca5ba6d5fd5aad47d1f.webp'
import './carsoul.css'
import Mydata from '../data/index.json'
import Carousel from 'react-bootstrap/Carousel';
const carsoul = () => {
    const slid = Mydata.slids;
  return (
    <div >
        {/* front side logo change */}
        <section>
            <Carousel>
                {slid.map((items) => (
                    <Carousel.Item key={items.id} className='Carousel-Item'>
                        <img src={items.image} alt={items.text} className='img-fluid carousel-image'/>
                    </Carousel.Item>
                    ))}
            </Carousel>
        </section>
        

  {/* explain the sylish in collection */}
 {/* <div className='overall10'>
    <div className='img1'>
        <img src={Logo3} alt='stylish'/>
    </div>
    <div className='content'>
        <h2 className='head'>Style Of <span className='nation'>Nation</span></h2>
        <p className='paragrpah'>Add .carousel-dark to the .carousel for darker controls, indicators, and captions. Controls have been inverted from their default white fill with the filter CSS property. Captions and controls have additional Sass variables that customize the color and background-color.</p>
    </div>
 </div> */}
  

    </div>
  )
}

export default carsoul
