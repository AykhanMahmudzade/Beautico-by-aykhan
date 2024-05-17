import React from 'react'
import './HowItWorks.css'

import Card3 from './Card3';


const HowItWorks = () => {
  return (
<>
    <div className="hiws">

        <p className='text-center'> <button className='works'>How it works</button> </p>
        <h1 className='easy text-center pt-3'>It’s easy as 1, 2, 3</h1>
        <p className='amet pt-5 text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, suspendisse varius enim in <br /> eros. Elementum tristique duis cursus, mi quis viverra ornare eros dolor.</p>
    </div>


    <div className="row hiwcard">

<div className="col-12 col-md-6 col-lg-4">
  <div className="card border-0 ">
  <Card3
    kartinShekli3="/icons/soap.svg"
    kartinBasligi3="Apply the product"
    kartinParaqrafi3="Lorem ipsum dolor sit amet ,  consectetur  adipiscing elit. Suspendisse varius enim in eros elementum tristique."
  />
  </div>

   </div>

   <div className="col-12 col-md-6 col-lg-4   ">
   <div className="card border-0">

  <Card3
    kartinShekli3="/icons/absorb.svg"
    kartinBasligi3="Wait for the skin to absorb"
    kartinParaqrafi3="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
  />
  </div>

   </div>


  <div className="col-12 col-md-6 col-lg-4 ">
  <div className="card  border-0">

  <Card3
    kartinShekli3="/icons/accept.svg"
    kartinBasligi3="And that’s it"
    kartinParaqrafi3="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
    />
   </div>

   </div>

   </div>



<div className="collection">
<section className='container introduction'>


<div className='row container'>



<div class="intro-left-side pt-5 col-12 col-md-6 ">

<img className='face1' src="/images/face1.svg" alt="" />





</div>


<div class="intro-right-side fskin col-12 col-md-6 ">



<p className='text-start'> <button className='collect'>Smooth skin collection</button> </p>
<h1 className='text-start faceskin'>For oily face skin</h1>
<p className='text-start sitamet'>Lorem ipsum dolor sit amet, consectetur adipiscing elit <br /> suspendisse Varius enim in eros elementum tristique, duis cursus <br /> mi quis viverra ornare, eros dolor interdum nulla ut commodo.</p>


<div className='d-flex'>

<button className='bg-white text-center shopnow'>Shop now</button>
            <button className='contactus mx-3 pt-2'>Explore more <img src="/icons/arror.svg" alt="" /></button>
            </div>
</div>




<div class="intro-left-side2  col-12 col-md-6 ">


<p className='text-start'> <button className='collect'>Healthy tanning collection</button> </p>
<h1 className='text-start faceskin'>For body skin</h1>
<p className='text-start sitamet'>Lorem ipsum dolor sit amet, consectetur adipiscing elit <br /> suspendisse Varius enim in eros elementum tristique, duis cursus <br /> mi quis viverra ornare, eros dolor interdum nulla ut commodo.</p>


<button className='ourstory pt-2 text-center shopnow'>Shop now</button>
            <button className='contactus mx-3 pt-2'>Explore more <img src="/icons/arror.svg" alt="" /></button>




</div>


<div class="intro-right-side fskin col-12 col-md-6 ">


<img className='face2' src="/images/face2.svg" alt="" />

</div>




</div>


</section>


</div>


    </>

  )
}

export default HowItWorks