import React, { useContext } from "react";
import { Context } from "../store/appContext"
import "../../styles/home.css";
import { Card } from "../component/card";

export const Home = () => {
	const { store } = useContext(Context)

	return (
		<div className="text-center mt-5">
			{store.contacts && store.contacts.length > 0 && store.contacts.map(item => {
				return (
					<Card />
				)
			})}

		</div>
	)
};
