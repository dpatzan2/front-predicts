import React from 'react'
import stylesLoadingMatches from './LoadingMatches.module.scss'

export const LoadingMatches = () => {
  return (
    <>
       <h2 className={`${stylesLoadingMatches.cardTitleLoadingComponent} ${stylesLoadingMatches.skeletonLoadingMarches}`}></h2>
       <h2 className={`${stylesLoadingMatches.cardTitleLoadingComponent} ${stylesLoadingMatches.skeletonLoadingMarches}`}></h2>
       <h2 className={`${stylesLoadingMatches.cardTitleLoadingComponent} ${stylesLoadingMatches.skeletonLoadingMarches}`}></h2>
       <h2 className={`${stylesLoadingMatches.cardTitleLoadingComponent} ${stylesLoadingMatches.skeletonLoadingMarches}`}></h2>
       <h2 className={`${stylesLoadingMatches.cardTitleLoadingComponent} ${stylesLoadingMatches.skeletonLoadingMarches}`}></h2>
       <h2 className={`${stylesLoadingMatches.cardTitleLoadingComponent} ${stylesLoadingMatches.skeletonLoadingMarches}`}></h2>
    </>
  )
}
