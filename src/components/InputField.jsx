import PropTypes from 'prop-types';

const InputField = ({ label, type = "text", placeholder, icon: Icon, value, onChange, required = false }) => {
  return (
    <div className="mb-3">
      <div className="form-floating d-flex align-items-center">
        <input
          type={type}
          className="form-control rounded-3"
          id={`floating${label.replace(/\s/g, '')}`}
          placeholder={placeholder || label}
          value={value}
          onChange={onChange}
          required={required}
        />
        <label htmlFor={`floating${label.replace(/\s/g, '')}`} className="d-flex align-items-center">
          {Icon && <Icon size={18} className="me-2 text-muted" />}
          {label}
        </label>
      </div>
    </div>
  );
};

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  icon: PropTypes.elementType,
  value: PropTypes.string,
  onChange: PropTypes.func,
  required: PropTypes.bool
};

export default InputField;
