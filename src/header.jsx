import React from 'react';


function LeHeader(props) {
    return (
        <section>
            <div className='ale-title'>{ props.title }</div>
               <div className='subhead'> {props.subhead}</div>
        </section>
    )
};

export default LeHeader;