import React from 'react';


function LeHeader(props) {
    return (
        <section>
            <div className='ale-title'>{ props.title }</div>
               <div className='subhead'> {props.subhead}</div>
               <div className='ale-links'>
                {props.links.map(x => <a href={x.route}>{x.title}</a>)}
                </div>
        </section>
    )
};

export default LeHeader;
