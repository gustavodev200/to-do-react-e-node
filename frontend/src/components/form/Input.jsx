const Input = ({type, name, placeholder, register}) => {
    return (
        <input type={type} name={name} placeholder={placeholder} onChange={register}/>
     );
}
 
export default Input;