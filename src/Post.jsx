// import React from 'react';




// function PostBox(props) {
//     return (
//         <section>
//             <div className='postTitle'> {props.leTitle}</div>
//             {props.img}
//             {props.desc}

            
//             {/* <div className='ale-title'>{ props.title }</div>
//                <div className='subhead'> {props.subhead}</div>
//                <div className='ale-links'>
//                 {props.links.map(x => <a href={x.route}>{x.title}</a>)} */}
//                 {/* </div> */}
//         </section>
//     )
// };

// export default PostBox;

import React from 'react';

export function Post() {
  const post = {
    image:"https://cdn.discordapp.com/attachments/953379251955040297/1070114736705904691/7E85DB64-2D27-4903-AA8F-31401B696E8C.jpg",
    title:"Azula and the flouride stare", 
    description:"Princess Azula photographed by iPhone 12 mini"
}


  return (
    <div className="post">
      <img src={post.image} alt={post.title} />
      <h3>{post.title}</h3>
      <p>{post.description}</p>
    </div>
  );
}

export default Post;


