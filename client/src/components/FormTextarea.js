const FormTextarea = ({
  name,
  labelText,
  value,
  handleChange,
  placeholder,
}) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <textarea
        value={value}
        name={name}
        onChange={handleChange}
        className="form-textarea"
        placeholder={placeholder}
      />
    </div>
  );
};
export default FormTextarea;
