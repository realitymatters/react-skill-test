import { useSelector } from "react-redux"
import { timeSelectors } from "../store/time";

const TimeSpend = ({className}) => {

	const timePassed = useSelector(timeSelectors.getTimePassed);
	
	return <div className={className}>
		<span className="text-xl">Time spend on site: {timePassed}</span>
		</div>
}

export default TimeSpend;