
import Modal from './coponent/Ui/Modal'
import './App.css'
import ProductCard from './coponent/Product'
import {productList} from "./data"
import { useState } from 'react'
import Button from './coponent/Ui/Button'

function App() {
    const [isOpen, setIsOpen] = useState(false)

  function open() {
    setIsOpen(true)
  }

  function close() {
    setIsOpen(false)
  }
  const renderList = productList.map(product => <ProductCard key={product.id} product={product} />)
  return (
    <>
    <main className='container'>
    <Button className=" bg-indigo-600 hover:bg-indigo-800" onClick={open}>ADD</Button>
    <div className='m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 p-2 rounded-md'>
    {renderList}
    <Modal  isOpen={isOpen} close={close} title='ADD A NEW PRODUCT'>
<div className='flex items-center space-x-3'>
<Button className=" bg-indigo-600 hover:bg-indigo-800">SUPMIT</Button>
    <Button className=" bg-red-600 hover:bg-red-800">CANSEL</Button>
</div>

    </Modal>
    
  
    
    </div>
    </main>
    </>
  )
}

export default App
