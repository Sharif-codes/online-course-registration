import Cart from "../Cart/Cart";
import PropTypes from 'prop-types';


const Carts = ({ course, addCredit, remaining, price }) => {
    return (
      
            <div className="lg:w-1/4 mx-auto w-cover mb-3 lg:mb-0 shadow-xl rounded-xl p-2 h-fit lg:ml-5">
                <div className=" text-[#2F80ED] font-semibold">
                    <p className="p-2 text-[18px]">Credit Hour Remaining {remaining} </p>
                    <hr />
                </div>
                <p className="text-[20px] font-semibold p-2">Course Name</p>
                
                    {
                        course.map((item,idx) => <Cart key={item.id} item={item} count={idx}></Cart>)
                    }
                    <hr />
                <div>
                    <p className="text-gray-700 font-semibold p-2 text-[16px]">Total Credit:{addCredit}</p>
                    <hr />
                </div>
                <div>
                    <p className="text-gray-700 font-semibold p-2 text-[15px]">Total Price: {price} USD</p>
                </div>

            </div>


    );
};
Carts.propTypes = {
    course: PropTypes.object.isRequired,
    addCredit: PropTypes.number,
    remaining: PropTypes.number,
    price: PropTypes.number,
    count: PropTypes.number
}
export default Carts;