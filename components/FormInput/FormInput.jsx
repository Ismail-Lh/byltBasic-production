const FormInput = ({
  type = 'text',
  name,
  id,
  placeholder,
  handleChange,
  value,
  error,
  label,
}) => {
  if (type === 'textarea')
    return (
      <textarea
        className='textarea'
        name={name}
        id={id}
        placeholder={placeholder}
        cols='30'
        rows='10'
      />
    );

  return (
    <div>
      {label && <label htmlFor={id}>{label}</label>}
      <input
        className={`${!error ? 'formIpt' : 'formIpt formIpt__error'}`}
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        onChange={handleChange}
        value={value}
      />
      <p className={`${error && 'formIpt__errorMsg'}`}>{error}</p>
    </div>
  );
};

export default FormInput;
