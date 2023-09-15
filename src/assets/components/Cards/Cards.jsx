import { useState } from 'react';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import Card from '../card/Card';

const Cards = ({handleAddCourse}) => {
    const [card, setCard]= useState([])
    useEffect(()=>{
        fetch('Course.json')
        .then(res=> res.json())
        .then(data=>setCard(data))
    },[])
    return (
        <div className="lg:w-3/4 mx-7 lg:mx-0">
            <div className='grid mx-auto lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-5 gap-3'>
            {
                card.map((card,idx)=><Card key={idx} card={card} handleAddCourse={handleAddCourse}></Card>)
            }
            </div>   
            
        </div>
    );
};
Cards.propTypes={
    handleAddCourse: PropTypes.func
}
export default Cards;