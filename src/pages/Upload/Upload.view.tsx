import React, { ChangeEvent, useState } from 'react'
import { UploadStyled, FileStyled } from './Upload.style'

export const UploadView = () => {
    const [image, setImage] = useState('hidden');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setImage('visible')
    }

    return (
        <UploadStyled>
            <FileStyled onChange={handleChange} />
        </UploadStyled>
    )
}
