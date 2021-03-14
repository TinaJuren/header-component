import BackgroundColor from 'BackgroundColor'
import React from 'react'
import Navigation from './Navigation'
import CircleColor from './CircleColor'
import Title from './Title'


export const App = () => {
  return (
    <header className="header-container" >
    <BackgroundColor color='#111' />
      <ul className="menu">
        <Navigation item="about"/>
        <Navigation item="trips"/>
        <Navigation item="pricing"/>
        <Navigation item="contact"/>
      </ul>
      <div className="circle"></div>
      <CircleColor color='#ac5d00' />
      <Title headline='Welcome to my site!'/>
    </header>  
  )
}
