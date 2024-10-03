import { IProduct } from "../interfaces"
import CircleColor from "./CircleColor"
import Image from "./Image"
import Button from "./Ui/Button"
interface Iprops {
    product: IProduct;
    setproductEdit: (product: IProduct) => void;
    openEditMdal: () => void;
    idx: number
    setproductEditIdx: (value: number) => void;
}
const ProductCard = ({ product, setproductEdit, openEditMdal, setproductEditIdx, idx }: Iprops) => {
    const renderColor = product.colors.map(color => <CircleColor key={color} color={color} 
         />)
         const onEdit = () =>{
            setproductEdit(product);
            openEditMdal()
            setproductEditIdx(idx)
         }
    return (
        
        <div className="max-w-sm md:max-w-lg mx-auto md:mx-0 border rounded-md p-2 flex flex-col">

            <Image imageUrl={product.imageURL} alt="productName" className="rounded-md" />
            <h3>{product.title}</h3>
            <p className="line-clamp-2">{product.description}</p>
            <div className="flex items-center my-4 space-x-1 ">
              {renderColor}
              </div>
            
            <div className="flex items-center justify-between">
                <span>${product.price}</span>

                <Image imageUrl={product.category.imageURL} alt={product.category.name} className="rounded-full w-10 h-10 object-center" />
            </div>
            <div className="flex items-center justify-between space-x-2 mt-5">
                <Button className=" bg-indigo-700" onClick={onEdit}>EDIT</Button>
                <Button className=" bg-red-700">DELETE</Button>
            </div>
        </div>
    )
}
export default ProductCard