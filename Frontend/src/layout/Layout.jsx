import React from 'react'
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const Layout = ({children}) => {
  return (
    <div>
      <header>
        <Navbar/>
      </header>
      <main className='min-h-screen pt-20'>{children}</main>
      <footer>
        <footer className="footer footer-center p-4 bg-base-300 text-base-content">
          <Footer/>
        </footer>
      </footer>
    </div>
  );
}

export default Layout
