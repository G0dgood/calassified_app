'use client';
import React, { useEffect } from 'react'
import { store } from '../store/store'
import { Provider } from 'react-redux'
import AOS from "aos";
import "aos/dist/aos.css";

const ReduxProvider = ({ children }: React.PropsWithChildren) => {

	useEffect(() => {
		AOS.init({
			once: false,
			duration: 1000,
			easing: "ease",
		});
	}, []);


	return (

		<div>
			<Provider store={store}>
				{children}
			</Provider>
		</div>
	)
}

export default ReduxProvider




