import { UPDATE_TIME } from "../types";

export const updateTime = (seconds) => ({
	type: UPDATE_TIME,
	payload: seconds,
});
