import React from 'react';



function LeHeader() {
    const head = {
        title: "aléjandra",
        subhead: "Aléjandra. A digital space for my creative endeavors.",
      };


    const navi = [
        { title: "home", route: "/" },
        { title: "works", route: "/works" },
        { title: "about", route: "/about" },
      ];

    return (
        <section>
            <div className='ale-title'>{head.title}</div>
               <div className='subhead'> {head.subhead}</div>
               <div className='ale-links'>
                {navi.map(x => <a href={x.route}>{x.title}</a>)}
                </div>
        </section>
    )
};

export default LeHeader;
