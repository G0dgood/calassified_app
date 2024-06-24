import React from 'react'

const Product = ({ counter, setCounter, loading }: any) => {

	// Function to handle button click and add 10 to the current state
	const handleClick = () => {
		setCounter(counter + 10);
	};
	return (
		<div className='load_more_btn_container'>
			<button className='load_more_btn' onClick={handleClick}>
				{loading ? "Loading..." : "		View All Products"}
			</button>
		</div>
	)
}

export default Product
