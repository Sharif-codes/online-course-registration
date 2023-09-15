


const Cart = ({item, count}) => {
    const {course_name}=item
    console.log(course_name)
    
    return (

        <div>
            {
                
                <p className="text-gray-500 p-2">{count+1} {course_name}</p>
                
            }
            
        </div>

    );
};

export default Cart;