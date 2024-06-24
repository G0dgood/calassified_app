import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Semiclone from '../public/Semiclone.svg'; // Adjust the path based on your image location


interface CountdownTimerProps {
	targetDate: string;
}
const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
	const calculateTimeLeft = () => {
		const difference = +new Date(targetDate) - +new Date();
		let timeLeft = {};

		if (difference > 0) {
			timeLeft = {
				days: Math.floor(difference / (1000 * 60 * 60 * 24)),
				hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
				minutes: Math.floor((difference / 1000 / 60) % 60),
				seconds: Math.floor((difference / 1000) % 60),
			};
		}

		return timeLeft;
	};

	const [timeLeft, setTimeLeft] = useState<any>(calculateTimeLeft());
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
		const timer = setInterval(() => {
			setTimeLeft(calculateTimeLeft());
		}, 1000);

		return () => clearInterval(timer);
	}, [targetDate]);

	if (!isClient) {
		return null;
	}

	return (
		<div className='count_down_container_main_flex'>
			<h1>Flash Sales</h1>
			<div className='count_down_container'>
				<div className='days_container'>
					<p>Days</p>
					<h2>{String(timeLeft.days).padStart(2, '0')}</h2>
				</div>
				<Image src={Semiclone} alt="Semiclone" />
				<div>
					<p>Hours</p>
					<h2>{String(timeLeft.hours).padStart(2, '0')}</h2>
				</div>
				<Image src={Semiclone} alt="Semiclone" />
				<div>
					<p>Minutes</p>
					<h2>{String(timeLeft.minutes).padStart(2, '0')}</h2>
				</div>
				<Image src={Semiclone} alt="Semiclone" />
				<div>
					<p>Seconds</p>
					<h2>{String(timeLeft.seconds).padStart(2, '0')}</h2>
				</div>
			</div>
		</div>
	);
};

export default CountdownTimer;
