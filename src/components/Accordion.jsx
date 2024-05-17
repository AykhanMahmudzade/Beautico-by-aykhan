import React from 'react'
import './Accordion.css'



const Accordion = () => {
  return (



    <>

      <div className="Accordionn">
        <div class="container">
          <div class="row">


            <div class="accord-left-side col-12 col-md-6">


              <h1 className='text-start faceskin'>Frequently asked <br /> questions</h1>
              <p className='text-start sitamet'>Frequently asked questions ordered by popularity. <br /> Remember that if the visitor has not committed to the call <br /> to action, they may still have questions (doubts) that can be <br /> answered.</p>


              <button className='shop text-white pt-2 text-center contactuss'>Contact us</button>




            </div>



              <div class="accord-right-side  col-12 col-md-6 ">
              <div className="accrd">


                <div className="accord ">


                  <div class="accordion" id="accordionExample">


                    <div class="accordion-item">
                      <h2 class="accordion-header">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                          Are the fragrances in your products natural and safe?
                        </button>
                      </h2>
                      <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                          <p></p>
                        </div>
                      </div>
                    </div>



<div className="acrd pt-4">
                    <div class="accordion-item">
                      <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                          Are Beautico products vegan?
                        </button>
                      </h2>
                      <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                          <p></p>
                        </div>
                      </div>
                    </div>
                    </div>


                    <div className="acrd pt-4">

                    <div class="accordion-item">
                      <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                          What are the expiry dates for Beautico products?
                        </button>
                      </h2>
                      <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                          <p></p>
                        </div>
                      </div>
                    </div>
                    </div>



                    <div className="acrd pt-4">

                    <div class="accordion-item">
                      <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                          Is your packaging environmentally friendly?
                        </button>
                      </h2>
                      <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                          <p></p>
                        </div>
                      </div>
                    </div>
                    </div>



                    <div className="acrd pt-4">

                    <div class="accordion-item">
                      <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                          Does Beautico products give me an allergic reaction?
                        </button>
                      </h2>
                      <div id="collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                          <p></p>
                        </div>
                      </div>
                    </div>
                    </div>





                  </div>

                </div>

              </div>

            </div>

          </div>
        </div>

      </div>

    </>

  )
}

export default Accordion