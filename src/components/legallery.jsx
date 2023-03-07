import { useState } from 'react'
import React from 'react'
import { CaretRight,
CaretLeft, CloseOutline, Add } from '@carbon/icons-react'
import '../style/legallery.css'

const LeGallery = ({galleryImages}) => {

  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = (index) => {
    setSlideNumber(index)
    setOpenModal(true)
  };
  // Close Modals
  const handleCloseModal = () => {
    setOpenModal(false)
  };
  // Previous Image
  const prevSlide = () => {
    slideNumber === 0 
    ? setSlideNumber( galleryImages.length -1 ) 
    : setSlideNumber( slideNumber - 1 )
  };
  // Next Image  
  const nextSlide = () => {
    slideNumber + 1 === galleryImages.length 
    ? setSlideNumber(0) 
    : setSlideNumber(slideNumber + 1)
  };

  return (
    <div>

      {openModal && 
        <div className='sliderWrap'>
          <Add icon={CloseOutline} className='btnClose' onClick={handleCloseModal}  />
          <Add icon={CaretLeft} className='btnPrev' onClick={prevSlide} />
          <Add icon={CaretRight} className='btnNext' onClick={nextSlide} />
          <div className='fullScreenImage'>
            <img src={galleryImages[slideNumber].img} alt='' />
          </div>
        </div>
      }

      <div className='galleryWrap'>
        {
          galleryImages && galleryImages.map((slide, index) => {
            return(
              <div 
                className='single' 
                key={index}
                onClick={ () => handleOpenModal(index) }
              >
                <img src={slide.img} alt='' />
              </div>
            )
          })
        }
      </div>

    </div>
  )
}

export default LeGallery;