import React, { useState, useEffect } from 'react';

const ExperienceCountdownTimer = ({ targetDate }: any) => {
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
		<div className='experience_container'>
			<div className='p_top_h1_container_timer'>
				<p className='p_timer_text_one'>{String(timeLeft.hours).padStart(2, '0')}</p>
				<p className='p_timer_text_two'>Hours</p>
			</div>
			<div className='p_top_h1_container_timer'>
				<p className='p_timer_text_one'>{String(timeLeft.days).padStart(2, '0')}</p>
				<p className='p_timer_text_two'>Days</p>
			</div>
			<div className='p_top_h1_container_timer'>
				<p className='p_timer_text_one'>{String(timeLeft.minutes).padStart(2, '0')}</p>
				<p className='p_timer_text_two'>Minutes</p>
			</div>
			<div className='p_top_h1_container_timer'>
				<p className='p_timer_text_one'>{String(timeLeft.seconds).padStart(2, '0')}</p>
				<p className='p_timer_text_two'>Seconds</p>
			</div>
		</div>
	);
};

export default ExperienceCountdownTimer;
