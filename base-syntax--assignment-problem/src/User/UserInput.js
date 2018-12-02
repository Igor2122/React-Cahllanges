import React from 'react';

const userInput = (props) => {
	return(
		<div>
			<input 
				onChange={props.changed} 
				className="UserInput" type="text">
			</input>		
		</div>
		);
}

export default userInput;