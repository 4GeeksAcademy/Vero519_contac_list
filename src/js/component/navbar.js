import React from "react";
import { Link } from "react-router-dom";
import {Form  } from "../component/form";
// import { AddContact } from "./views/add-contact";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<div className="ml-auto">
				<Link to="/add-contact">
					<button className="btn btn-success">Add new contact</button>
				</Link>
			</div>
		</nav>
	);
};
