import React, {useState} from 'react';
import './index.css';
import LeHeader from './header';
import Post from './post';
import PostList from './PostList';


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

// const post = [
//     {
//         image:"https://cdn.discordapp.com/attachments/953379251955040297/1070114736705904691/7E85DB64-2D27-4903-AA8F-31401B696E8C.jpg",
//         title:"Azula and the flouride stare", 
//         description:"Princess Azula photographed by iPhone 12 mini"
//     },
//     {
//         image:"/",
//         title:"Azula and the flouride stare", 
//         description:"Princess Azula photographed by iPhone 12 mini"

//     }

// ]

const [posts, setPosts] = useState([
    {
      image: 'https://cdn.discordapp.com/attachments/795146886558122007/1072116287033053304/image.png',
      title: 'Post 1',
      description: 'Description for post 1'
    },
    {
      image: 'https://via.placeholder.com/400x300',
      title: 'Post 2',
      description: 'Description for post 2'
    },
    {
      image: 'https://via.placeholder.com/400x300',
      title: 'Post 3',
      description: 'Description for post 3'
    },
  ]);



    return (
        <div id="page">
            
        <div className="header">
            <LeHeader title={head.title} subhead={head.subhead} links={navi} />
        </div>
        <div className="container">

        
        <Post title={posts.title} image={posts.image} description={posts.description} />
        
        {/* <div className="post"> */}
        <PostList posts={posts} />
        {/* </div> */}
         
         </div>
         
        </div>

    )
}

export default App;