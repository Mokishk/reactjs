import { IProduct } from "../interfaces"
import Image from "./Image"
import Button from "./Ui/Button"
interface Iprops {
    product: IProduct
}
const ProductCard = ({ product }: Iprops) => {
    return (
        <div className="max-w-sm md:max-w-lg mx-auto md:mx-0 border rounded-md p-2 flex flex-col">

            <Image imageUrl={product.imageURL} alt="productName" className="rounded-md" />
            <h3>{product.title}</h3>
            <p className="line-clamp-2">{product.description}</p>
            <div className="flex items-center my-4 space-x-2">
                <span className="w-5 h-5 bg-indigo-700 rounded-full cursor-pointer" />
                <span className="w-5 h-5 bg-green-700 rounded-full cursor-pointer" />
                <span className="w-5 h-5 bg-red-700 rounded-full cursor-pointer" />
            </div>
            <div className="flex items-center justify-between">
                <span>${product.price}</span>

                <Image imageUrl={product.category.imageURL} alt={product.category.name} className="rounded-full w-10 h-10 object-center" />
            </div>
            <div className="flex items-center justify-between space-x-2 mt-5">
                <Button className=" bg-indigo-700">EDIT</Button>
                <Button className=" bg-red-700">DELETE</Button>
            </div>
        </div>
    )
}
export default ProductCard