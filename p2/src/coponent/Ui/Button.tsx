import { ButtonHTMLAttributes, ReactNode } from "react"
interface Iprops extends ButtonHTMLAttributes<HTMLButtonElement>{
children: ReactNode;
className?: string;

}
const Button = ({children, className, ...rest} : Iprops) =>{
    return (
        <button  className={`${className} p-2 w-full rounded-md text-white` } {...rest}>
{children} 
        </button>
      )
}
export default Button