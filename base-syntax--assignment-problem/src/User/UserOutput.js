import React from 'react';

const Useroutput = (props) => {
   return (
      <div>
         <p> <strong>{props.name} </strong> is the author of the: Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
         <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC</p>
      </div>
   );
}

export default Useroutput;