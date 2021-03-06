import React from 'react';
import './Title.css';

const Title = ({text}) => {
    return (
        <div className='title'>
            <label className='titleLabel'>{text}</label>
        </div>
    )
};

export default Title;