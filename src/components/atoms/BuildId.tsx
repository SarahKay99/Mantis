import React, { ReactElement } from 'react'
import repoMetadata from '../../../repo-metadata.json'
import styles from './BuildId.module.css'

export default function BuildId(): ReactElement {
  const commitBranch = repoMetadata.branch
  const commitId = repoMetadata.commit
  const isMainBranch = commitBranch === 'main'

  return (
    <a
      className={styles.buildId}
     >
    </a>
  )
}
