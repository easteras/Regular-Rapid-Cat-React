import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Regular Rapid Cat</title>
        <meta property="og:title" content="Regular Rapid Cat" />
      </Helmet>
      <a href="https://mx1.mafet.sa.com/" className="home-link">
        <img alt="image" src="/mx_flags-300w.jpg" className="home-image" />
      </a>
    </div>
  )
}

export default Home
