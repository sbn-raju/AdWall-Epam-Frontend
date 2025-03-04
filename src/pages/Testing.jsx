import React from 'react'
import { IKUpload } from 'imagekitio-react'

const Testing = () => {

    const onError = (err) =>{
        console.log(err)
      }
    
      const onSuccess = (err) =>{
        console.log("Success", er);
      }
  return (
   <>
    <p>Upload an image</p>
        <IKUpload
          fileName="test-upload.png"
          onError={onError}
          onSuccess={onSuccess}
        />
   </>  )
}

export 
      default Testing