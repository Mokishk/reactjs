
import Modal from './coponent/Ui/Modal'
import './App.css'
import ProductCard from './coponent/Product'
import {productList} from "./data"
import { useState } from 'react'
import Button from './coponent/Ui/Button'
import { formInputsList } from './data'
import Input from './coponent/Ui/Input'
import { ChangeEvent } from 'react'
import { IProduct } from './interfaces'

function App() {
    const [isOpen, setIsOpen] = useState(false)
    const [product, setProduct] = useState<IProduct>({
      title: "",
      description: "",
      imageURL: "",
      price: "",
      colors: [],
      category: {
        name: "",
        imageURL: ""}
    })

  function open() {
    setIsOpen(true)
  }

  function close() {
    setIsOpen(false)
  }
  const onChange =(event: ChangeEvent<HTMLInputElement>) =>{
const {value, name} = event.target;
setProduct({
  ...product,
  [name]:value
})
  }
  const renderList = productList.map(product => <ProductCard key={product.id} product={product} />)
  const renderFormList = formInputsList.map(input => (
    <div className='flex flex-col'>
      <label className='mb-[1px] text-sm font-medium text-gray-700' htmlFor={input.id}>{input.label}</label>
      <Input type="text" id={input.id} name={input.name} value={product[input.name]} onChange={onChange} />
    </div>
  ))
  return (
    <>
    <main className='container'>
    <Button className=" bg-indigo-600 hover:bg-indigo-800" onClick={open}>ADD</Button>
    <div className='m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 p-2 rounded-md'>
    {renderList}
    <Modal  isOpen={isOpen} close={close} title='ADD A NEW PRODUCT'>
      <form className='space-y-2'>
      {renderFormList}
      <div className='flex items-center space-x-3'>
<Button className=" bg-indigo-600 hover:bg-indigo-800">SUPMIT</Button>
    <Button className=" bg-red-600 hover:bg-red-800">CANSEL</Button>
</div>

      </form>
      

    </Modal>
    
  
    
    </div>
    </main>
    </>
  )
}

export default App
