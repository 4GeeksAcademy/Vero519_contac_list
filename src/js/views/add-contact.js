import React, { useContext } from "react";
import { Context } from "../store/appContext"
import "../../styles/home.css";
import { Form } from "../component/form";

export const AddContact = () => {
	const { store } = useContext(Context)

	return (
		<div className="text-center mt-5">
			{/* {store.contacts && store.contacts.length > 0 && store.contacts.map(item => { */}
				return (
					<Form/>
				)
			{/* })} */}

		</div>
	)
};
