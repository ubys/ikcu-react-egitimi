import React from "react";

import List from "./List";
// import NewUserForm from "./NewUserForm";

import NewUserFormFormik from "./NewUserFormFormik";
import FilterForm from "./FilterForm";

function Users() {
	return (
		<div style={{ paddingTop: 20 }}>
			<FilterForm />
			<List />
			<NewUserFormFormik />
		</div>
	);
}

export default Users;
