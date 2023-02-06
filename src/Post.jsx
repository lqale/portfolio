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

export function Post(props) {  
  return (
    <div>
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
}

export default Post;


