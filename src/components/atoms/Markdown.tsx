import React, { ReactElement } from 'react'
import ReactMarkdown from 'react-markdown'
import styles from './Markdown.module.css'

const Markdown = ({
  text,
  className
}: {
  text: string
  className?: string
}): ReactElement => {
  // fix react-markdown \n transformation
  // https://github.com/rexxars/react-markdown/issues/105#issuecomment-351585313
  const textCleaned = text.replace(/\\n/g, '\n ')

  return (
      <h3></h3>
 )
}

export default Markdown
