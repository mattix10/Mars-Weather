import React from 'react';

const Button = (props) => {

return (
        <div className="button">
          <button className="button-check" onClick={props.click}>Zobacz</button>
        </div>
  );
}

export default Button;