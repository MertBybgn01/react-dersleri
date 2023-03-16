import React from 'react'

export const ImageItem = ({image}) => {
   const imagesUrl =image.urls.small
  return (
    <div>
        <img  className=' mt-3' src={imagesUrl} alt={imagesUrl} />
    </div>
  )
}
