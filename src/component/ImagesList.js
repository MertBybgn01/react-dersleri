import React from 'react'
import { ImageItem } from './ImageItem'

export const ImagesList = ({imagesplacholder}) => {
    console.log(imagesplacholder)
  return (
    <div className=' columns-5 gap-5  '>{imagesplacholder.map((image , index) =>{
         return <ImageItem key={index} image={image} />

    })}</div>
  )
}
