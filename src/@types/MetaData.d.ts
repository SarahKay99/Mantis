import { AdditionalInformation, File, Metadata, ServiceMetadata } from '@oceanprotocol/lib'
import { DataTokenOptions, PriceOptions } from '@oceanprotocol/react'

// TODO
// [1] Look into @oceanprotocol/lib and @oceanprotocol/react on oceanprotocol site.

export interface PhotoData {
  photo: Uint8Array
  uploaded_by: string
  timestamp: Date
  tags: string[]
  other: any
}
export interface Photo extends Metadata {
  photo: PhotoData
}

export interface AdditionalInformationMarket extends AdditionalInformation {
  links?: File[]
  termsAndConditions: boolean
}

export interface MetadataMarket extends Metadata {
  // While required for this market, Aquarius/Plecos will keep this as optional
  // allowing external pushes of assets without `additionalInformation`.
  // Making it optional here helps safeguarding against those assets.
  additionalInformation?: AdditionalInformationMarket
}

export interface PriceOptionsMarket extends PriceOptions {
  weightOnOcean: string
  // easier to keep this as number for Yup input validation
  swapFee: number
}

export interface MetadataPublishForm {
  // ---- required fields ----
  name: string
  description: string
  files: string | File[]
  author: string
  dataTokenOptions: DataTokenOptions
  access: 'Download' | 'Compute' | string
  termsAndConditions: boolean
  // ---- optional fields ----
  tags?: string
  links?: string | File[]
}

export interface ServiceMetadataMarket extends ServiceMetadata {
  attributes: MetadataMarket
}
