import React, { ReactElement, useEffect, FormEvent } from 'react'
import styles from './FormPublish.module.css'
import { useOcean } from '@oceanprotocol/react'
import { useFormikContext, Field, Form } from 'formik'
import Input from '../../atoms/Input'
import Button from '../../atoms/Button'
import { FormContent, FormFieldProps } from '../../../@types/Form'

export default function FormPublish({
  content
}: {
  content: FormContent
}): ReactElement {
  const { ocean, account } = useOcean()
  const {
    status,
    setStatus,
    isValid,
    setErrors,
    setTouched,
    resetForm,
    initialValues
  } = useFormikContext()

  // reset form validation on every mount
  useEffect(() => {
    setErrors({})
    setTouched({})

    // setSubmitting(false)
  }, [setErrors, setTouched])

  const resetFormAndClearStorage = (e: FormEvent<Element>) => {
    e.preventDefault()
    resetForm({ values: initialValues, status: 'empty' })
    setStatus('empty')
  }

  return (
     <h1> Hello!</h1>
  )
}
