import React from 'react';
import './index.css'
import LeHeader from './header'

function App() {

 const head = {
    title: 'aléjandra',
    subhead: 'I am a person. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
 }


 
    return (
        <header>
            <LeHeader title={head.title} subhead={head.subhead} />
        </header>

    )
}

export default App;