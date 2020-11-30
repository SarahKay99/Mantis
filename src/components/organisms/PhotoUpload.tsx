import axios from 'axios'
import * as React from 'react'
import { ReactElement, useState } from 'react'

import styles from './PhotoUpload.module.css'

// TODO
// [1] Check if user is logged into Metamask. If no, give them a login prompt. If yes, proceed.
// [2] Metadata.

export default function PhotoUpload(): ReactElement {
  const [image, setImage] = useState('')
  const [loading, setLoading] = useState(false)

  const uploadImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("e = ", e)
    const files = e.target.files
    console.log("e.target = ", e.target)
    console.log("e.target.files = ", e.target.files)
    const data = new FormData()
    data.append('file', files[0])
    data.append('upload_preset', 'darwin')
    setLoading(true)
    const res = await fetch(
      'https://api.cloudinary.com/v1_1/dybvzyhnz/image/upload',
      {
        method: 'POST',
        body: data
      }
    )
    const file = await res.json()

    setImage(file.secure_url)
    setLoading(false)
  } 

  return (
    <div className={styles.PhotoUpload}>
      <h1>Upload Image</h1>
      <input
        type="file"
        name="file"
        placeholder="Upload an image"
        onChange={uploadImage}
      />
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <img src={image} style={{ width: '300px' }} />
      )}
    </div>
  )
}