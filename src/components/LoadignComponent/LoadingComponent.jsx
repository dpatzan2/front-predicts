import React from 'react'
import stylesLoading from './LoadingComponent.module.scss'

export const LoadingComponent = () => {
  return (
    <>
        <div class={stylesLoading.spinner}></div>
    </>
  )
}
