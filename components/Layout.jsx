import React from 'react'
import Head from 'next/head' 
import { NavBar } from '../components'
import {Footer} from '../components'

const Layout = ({children}) => {
  return (
    <div className='layout'>
      <Head>
        <title>OCIN Electro Store</title>
      </Head>
      <header>
        <NavBar />
      </header>
      <main className='main-container'>
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout