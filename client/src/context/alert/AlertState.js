import React, { useReducer } from "react";
import AlertContext from "./alertContext";
import alertReducer from "./alertReducer";
import { SET_ALERT, REMOVE_ALERT } from "../types";

const AlertState = props => {
	const initialState = [];

	const [state, dispatch] = useReducer(alertReducer, initialState);
};

export default AlertState;
