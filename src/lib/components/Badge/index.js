import React from 'react';

const Badge = (props) => {
  const { value = 0, styles = {} } = props;
  return (
    <div
      style={{
        background: '#ff5e45',
        borderRadius: '50%',
        height: 40,
        width: 40,
        color: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        ...styles,
      }}
    >
      <h4 className="heavy">{value}</h4>
    </div>
  );
};
export default Badge;
