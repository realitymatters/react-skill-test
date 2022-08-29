const TimeSpend = ({ className, time }) => {
	return (
		<div className={className}>
			<span className='text-xl'>Time spend on site: {time.timePassed}</span>
		</div>
	);
};

export default TimeSpend;
