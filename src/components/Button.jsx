/* eslint-disable react/prop-types */
const Button = (props) => {
  return (
    <div>
      <button className="btn">{props.label}</button>
    </div>
  );
};
export default Button;
