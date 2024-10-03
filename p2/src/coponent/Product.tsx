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
    openDeleteModal: () => void;
}
const ProductCard = ({ product, setproductEdit, openEditMdal, setproductEditIdx, idx, openDeleteModal }: Iprops) => {
    const renderColor = product.colors.map(color => <CircleColor key={color} color={color} />)
    
    const onEdit = () => {
        setproductEdit(product);
        openEditMdal();
        setproductEditIdx(idx);
    }

    const onRemove = () => {
        setproductEdit(product);
        openDeleteModal();
    }

    return (
        <div className="w-full max-w-sm md:max-w-lg mx-auto md:mx-0 border rounded-md p-4 flex flex-col justify-between h-full">

            {/* جعل ارتفاع الصورة ثابتًا لضمان تناسق الشكل */}
            <div className="flex justify-center items-center mb-4">
                <Image 
                    imageUrl={product.imageURL} 
                    alt={product.title} 
                    className="rounded-md object-cover w-full h-48" 
                />
            </div>

            {/* نص المنتج مع تحديد ارتفاع ثابت ليكون بنفس الطول دائمًا */}
            <h3 className="text-lg font-semibold mb-2 line-clamp-1 min-h-[24px]">
                {product.title}
            </h3>

            <p className="text-gray-600 line-clamp-2 min-h-[40px] mb-4">
                {product.description}
            </p>

            <div className="flex items-center my-4 space-x-1">
                {renderColor}
            </div>

            <div className="flex items-center justify-between mt-auto">
                <span className="font-bold text-xl">${product.price}</span>

                <Image 
                    imageUrl={product.category.imageURL} 
                    alt={product.category.name} 
                    className="rounded-full w-10 h-10 object-center"
                />
            </div>

            <div className="flex items-center justify-between space-x-2 mt-5">
                <Button className="bg-indigo-700" onClick={onEdit}>EDIT</Button>
                <Button className="bg-red-700" onClick={onRemove}>DELETE</Button>
            </div>
        </div>
    );
}

export default ProductCard