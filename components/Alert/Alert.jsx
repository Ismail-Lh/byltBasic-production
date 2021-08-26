const Alert = ({ error, children }) => {
  return (
    <div className={`${error ? 'alert alert__error' : 'alert alert__success'}`}>
      <p>{children}</p>
    </div>
  );
};

export default Alert;
