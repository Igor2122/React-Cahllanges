import React from 'react';

const output = (props) => {
   return(
      <div>
         <p 
            className={props.className}
            onClick={props.delete}> 
            {props.val}
         </p>
      </div>

   );
}

export default output;