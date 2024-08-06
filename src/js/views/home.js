import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext"
import "../../styles/home.css";
import { Card } from "../component/card";

export const Home = () => {
	const { store,actions } = useContext(Context)
	// useEffect(()=>{
		// actions.contacts()},[])
	

	return (
		<div className="text-center mt-5">
			{store.contacts && store.contacts.length > 0 && store.contacts.map(item => {
				return (
					<Card key={index}
					id={contacts.id}
					name={contacts.name}
					address={contacts.address}
					phone={contacts.phone}
					email={contacts.email}
					
					/>
				)
			})}

		</div>
	)
};
export default Home