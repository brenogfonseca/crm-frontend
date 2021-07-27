import React from 'react'
import Footer from './partials/FooterComp'
import Header from './partials/HeaderComp'

export default function DefaultLayout({ children }) {
  return (
    <div className="default-layout" >
      <header className="header mb-2" >
        <Header />
      </header>
      <main className="main" >
        {children}
      </main>
      <footer className="footer" >
        <Footer />
      </footer>
    </div>
  )
}
