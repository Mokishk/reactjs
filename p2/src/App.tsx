
import Modal from './coponent/Ui/Modal'
import './App.css'
import ProductCard from './coponent/Product'
import { colors, productList } from "./data"
import { FormEvent, useState } from 'react'
import Button from './coponent/Ui/Button'
import { formInputsList } from './data'
import Input from './coponent/Ui/Input'
import { ChangeEvent } from 'react'
import { IProduct } from './interfaces'
import { validation } from './coponent/validation'
import Errormsg from './coponent/Errormsg'
import CircleColor from './coponent/CircleColor'
import { v4 as uuid } from "uuid";

function App() {
  const [isOpen, setIsOpen] = useState(false)
  const [errors, setErorrs] = useState ({ title: "",description: "",imageURL: "", price: ""});
  const [tempColor, settempColor] = useState<string[]>([])
    
   const [products, setProducts] = useState<IProduct[]>(productList)
  const [product, setProduct] = useState<IProduct>({
    title: "",
    description: "",
    imageURL: "",
    price: "",
    colors: [],
    category: {
      name: "",
      imageURL: ""
    }
  })

  function open() {
    setIsOpen(true)
  }

  function close() {
    setIsOpen(false)
  }
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setProduct({
      ...product,
      [name]: value
    }),
    setErorrs({
      ...errors,
[name]: ""
    })
  };
  const SubmitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const errors = validation({
      title: product.title,
      description: product.description,
      imageURL: product.imageURL,
      price: product.price
    })
    const hasErrMsg = Object.values(errors).some(value => value == "") && Object.values(errors).every(value => value == "")
    if(!hasErrMsg){
      setErorrs(errors);
      return;
    }
    setProducts(prev => [{...product, id: uuid(), colors: tempColor}, ...prev])
    setProduct({
      title: "",
      description: "",
      imageURL: "",
      price: "",
      colors: [],
      category: {
        name: "",
        imageURL: ""
      }
    });
    settempColor([]);
  };
  const oncancel = () => {
    setProduct({
      title: "",
      description: "",
      imageURL: "",
      price: "",
      colors: [],
      category: {
        name: "",
        imageURL: ""
      }
    })
    close()
  }
  const renderList = products.map(product => <ProductCard key={product.id} product={product} />)
  const renderFormList = formInputsList.map(input => (
    <div className='flex flex-col' key={input.id}>
      <label className='mb-[1px] text-sm font-medium text-gray-700' htmlFor={input.id}>{input.label}</label>
      <Input type="text" id={input.id} name={input.name} value={product[input.name]} onChange={onChange} />
      <Errormsg msg={errors[input.name]} />
    </div>
  ))
const renderColor = colors.map(color => <CircleColor key={color} color={color} onClick={() => {
  if(tempColor.includes(color)){
    settempColor(prev => prev.filter(item => item !== color))
    return
  }
  settempColor(prev => [...prev, color])}} />)
  return (
    <>
      <main className='container'>
        <Button className=" bg-indigo-600 hover:bg-indigo-800" onClick={open}>ADD</Button>
        <div className='m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 p-2 rounded-md'>
          {renderList}
          <Modal isOpen={isOpen} close={close} title='ADD A NEW PRODUCT'>
            <form className='space-y-2' onSubmit={SubmitHandler}>
              {renderFormList}
              <div className="flex items-center my-4 space-x-1 ">
              {renderColor}
              </div>
              <div className="flex items-center my-4 space-x-1 flex-wrap gap-y-1">
              {tempColor.map(color => (<span style={{backgroundColor: color}} className='p-1 mr-1 text-xs rounded-md text-white' key={color}>
                {color}
              </span>))}
              </div>
              
              <div className='flex items-center space-x-3'>
                <Button className=" bg-indigo-600 hover:bg-indigo-800">SUPMIT</Button>
                <Button className=" bg-red-600 hover:bg-red-800" onClick={oncancel}>CANSEL</Button>
              </div>

            </form>


          </Modal>



        </div>
      </main>
    </>
  )
}

export default App
