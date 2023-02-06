import React from 'react';
import './index.css'
import LeHeader from './header'
import Post from './Post'


function App() {

const head = {
    title: 'aléjandra',
    subhead: 'Aléjandra. A digital space for my creative endeavors.'
}

const navi = [
    {title:'home', route:'/'},
    {title:'works', route:'/works'},
    {title:'about', route:'/about'}

]



    return (
        <div id="page">
            <div className="container">
        <header>
            <LeHeader title={head.title} subhead={head.subhead} links={navi} />
        </header>
        
            <Post></Post>
        
            
         </div>
         
        </div>

    )
}

export default App;