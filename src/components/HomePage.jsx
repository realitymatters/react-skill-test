import { useEffect, useState } from "react";
import TimeSpend from "./TimeSpend";

const HomePage = () => {
	const [time, setTime] = useState({
		timePassed: 0,
	});

	const updateTime = () => {
		setTime((state) => ({
			...state,
			timePassed: state.timePassed + 1,
		}));
	};

	useEffect(() => {
		setInterval(updateTime, 1000);
	}, []);

	return (
		<div className='w-full h-screen flex flex-col justify-center items-center'>
			<h1>Welcome to Ucan</h1>

			<TimeSpend time={time} className='my-4' />

			<button className='inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ripple-surface-light'>
				Toggle
			</button>
		</div>
	);
};

export default HomePage;
