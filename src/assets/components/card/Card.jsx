import dollar from '../../../assets/img/dollar.png'
import frame from '../../../assets/img/frame.png'
import PropTypes from 'prop-types';

const Card = ({ card,handleAddCourse }) => {
    const {image, course_name, credit, price, details } = card
    return (
        <div>
            <div className="card w-full h-[390px] bg-base-100 shadow-xl space-y-0 ">
                <figure className="w-cover mt-2 ml-1">
                    <img src={image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body space-y-0 p-4">
                    <h2 className="card-title text-[16px]">{course_name}</h2>
                    <p className='text-[14px] text-gray-500'>{details}</p>
                    <div className='flex text-gray-500 justify-between'>
                        <div className='flex'>
                            <img src={dollar} alt="" />
                            <p>Price: {price}</p>
                        </div>
                        <div className='flex'>
                            <img src={frame} alt="" />
                            <p>Credit: {credit} hr</p>
                        </div>

                    </div>
                    <div className="card-actions">
                        <button onClick={()=>handleAddCourse(card,credit)} className="btn text-white w-full bg-[#2F80ED]">Select</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
Card.propTypes={
    card: PropTypes.object.isRequired,
    handleAddCourse: PropTypes.func
}
export default Card;