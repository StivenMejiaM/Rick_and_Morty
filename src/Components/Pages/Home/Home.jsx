import React from 'react'
import {Main} from '../../../Components/Layouts/Main/Main'
import { Footer } from '../../Layouts/Footer/Footer'
import { Header } from '../../Layouts/Header/Header'

export const Home = () => {
  return (
    <div>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  )
}