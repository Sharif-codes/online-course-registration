import { useState } from 'react'
import './App.css'
import Cards from './assets/components/Cards/Cards'
import Carts from './assets/components/Carts/Carts'
import Header from './assets/components/header/Header'
import { ToastContainer, toast } from 'react-toastify';

  import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [course, setCourse] = useState([])
  const [addCredit, setCredit] = useState(0)
  const [remaining, setRemaining] = useState(20)
  const [price, setPrice]= useState(0)

  
 


  const handleAddCourse = (card, credit) => {

    const isExist = course.find(item => item.id === card.id)
    let countCredit = credit
    let countPrice= card.price
    
    

    
      if (isExist) {
        toast.success('Already taken this course !', {
          position: 'top-right',
          autoClose: 3000, 
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
      else {
        course.forEach(element => {
          countCredit+= element.credit;
          countPrice+=element.price
        });
        
        const totalRemaining = 20 - countCredit
        if (countCredit > 20) {
          toast.error('Cannot take more than 20 credit!', {
            position: 'top-right',
            autoClose: 3000, 
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        }
        else {
          
          setCredit(countCredit)
          setRemaining(totalRemaining)
          setCourse([...course, card])
          setPrice(countPrice)
       
        }
      }

  }
  return (
    <div className='container mx-auto'>
      <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          closeOnClick
          pauseOnHover
          draggable
        />
      <Header></Header>
      <div className='flex mx-auto flex-col-reverse lg:flex-row md:flex-col-reverse'>
        <Cards handleAddCourse={handleAddCourse}></Cards>
        <Carts course={course} addCredit={addCredit} remaining={remaining} price={price}></Carts>
      </div>
    </div>
  )
}
export default App
