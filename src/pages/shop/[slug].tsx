import { Inter } from '@next/font/google'
import { NextPageWithLayout } from '../_app'
import { MainLayout } from '../../layouts/MainLayout'
import { ReactElement } from 'react'
import { useRouter } from 'next/router'

const Shop: NextPageWithLayout = () => {
  const router = useRouter()
  const { slug } = router.query
  return (
    <>
      <div className="flex flex-col pt-20">
      <p>Book Page! {slug}</p>
      </div>
    </>
  )
}

Shop.getLayout = function getLayout(page: ReactElement) {
  return (
    <MainLayout>
      {page}
    </MainLayout>
  )
}

export default Shop