import { h } from "preact";

const TextField = ({ label, id, placeholder, inputProps }) => {
  return (
    <div className="textFieldItem">
      <label for={id} className="textFieldLabel">
        {label}
      </label>
      <div>
        <input
          type="text"
          name={id}
          placeholder={placeholder}
          className="textField"
          id={id}
          {...inputProps}
        />
      </div>
    </div>
  );
};

TextField.defaultProps = {
  label: "label",
  id: "",
  placeholder: "",
  inputProps: {},
};

export default TextField;
