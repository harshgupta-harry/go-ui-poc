import React from 'react';
const Button = (props) => {
  const { styles = {}, label = 'Button' } = props;
  return (
    <button
      style={{
        background: '#34a1eb',
        outline: 'none',
        borderRadius: 5,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        border: '0px',
        paddingRight: 20,
        paddingLeft: 20,
        color: 'white',
        ...styles,
      }}
      disabled={props.disabled}
      onClick={props.handleClick}
    >
      <h4>{label}</h4>
    </button>
  );
};
export default Button;
