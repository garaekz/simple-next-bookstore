import { Inter } from '@next/font/google'
import { NextPageWithLayout } from './_app'
import { MainLayout } from '../layouts/MainLayout'
import { ReactElement } from 'react'

const Shop: NextPageWithLayout = () => {
  return <p>Index Page!</p>
}

Shop.getLayout = function getLayout(page: ReactElement) {
  return (
    <MainLayout>
      {page}
    </MainLayout>
  )
}

export default Shop