import axios, { AxiosResponse } from 'axios'
import { toast } from 'react-toastify'
import { File as FileMetadata } from '@oceanprotocol/lib'

export function updateQueryStringParameter(
  uri: string,
  key: string,
  newValue: string
): string {
  const regex = new RegExp('([?&])' + key + '=.*?(&|$)', 'i')
  const separator = uri.indexOf('?') !== -1 ? '&' : '?'

  if (uri.match(regex)) {
    return uri.replace(regex, '$1' + key + '=' + newValue + '$2')
  } else {
    return uri + separator + key + '=' + newValue
  }
}

export function prettySize(
  bytes: number,
  separator = ' ',
  postFix = ''
): string {
  if (bytes) {
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
    const i = Math.min(
      Math.floor(Math.log(bytes) / Math.log(1024)),
      sizes.length - 1
    )
    return `${(bytes / 1024 ** i).toFixed(i ? 1 : 0)}${separator}${
      sizes[i]
    }${postFix}`
  }
  return 'n/a'
}

// Boolean value that will be true if we are inside a browser, false otherwise
export const isBrowser = typeof window !== 'undefined'

export function toStringNoMS(date: Date): string {
  return date.toISOString().replace(/\.[0-9]{3}Z/, 'Z')
}

export async function getFileInfo(url: string): Promise<FileMetadata> {
  const response: AxiosResponse = await axios({
    method: 'POST',
    url: 'https://fileinfo.oceanprotocol.com',
    data: { url }
  })

  if (response.status > 299 || !response.data) {
    toast.error('Could not connect to File API')
    return
  }

  const { contentLength, contentType } = response.data.result

  return {
    contentLength,
    contentType: contentType || '', // need to do that cause lib-js File interface requires contentType
    url
  }
}

export async function fetchData(url: string): Promise<AxiosResponse['data']> {
  try {
    const response = await axios(url)

    if (response.status !== 200) {
      return console.error('Non-200 response: ' + response.status)
    }

    return response.data
  } catch (error) {
    console.error('Error parsing json: ' + error.message)
  }
}

export function isDid(did: string | undefined): boolean {
  const didMatch = (did as string).match(/^did:op:([a-f0-9]{64})$/i)
  return !!didMatch
}

export function formatBytes(a: number, b: number): string {
  if (a === 0) return '0 Bytes'
  const c = 1024
  const d = b || 2
  const e = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
  const f = Math.floor(Math.log(a) / Math.log(c))
  return parseFloat((a / Math.pow(c, f)).toFixed(d)) + ' ' + e[f]
}
