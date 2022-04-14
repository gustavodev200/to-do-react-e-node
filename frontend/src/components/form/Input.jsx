const Input = ({ type, name, placeholder, register, required }) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      {...register(name, { required })}
    />
  );
};

export default Input;
