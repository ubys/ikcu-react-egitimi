import React, { useState, useContext, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import { useFormik, Form, Field } from 'formik'
// import yup from 'yup'
 import UserContext from "../contexts/UserContext";

import userValidations from '../validations/userValidations'

function NewUserFormFormik() {

	const formik = useFormik({
		initialValues: {
			adnan: ""
		},
		onSubmit: async (values, bag) => {
			console.log(users)
			setUsers([...users, { id: uuidv4(), name:values.adnan }]);
			// alert(values.adnan);
			console.log(bag);
			await new Promise((r) => setTimeout(r, 2000));
			bag.resetForm();
			console.log(values);
		},
		validationSchema: userValidations,
	});

	const {
		values,
		errors,
		onChange,
		onClick,
		isSubmitting,
		handleChange
	} = formik;

	const { users, setUsers } = useContext(UserContext);
	// const [name, setName] = useState("");
	//  const handleClick = () => {
	//   	setUsers([...users, { id: uuidv4(), name }]);
	//  };
	//   useEffect(() => {
	//   	setName("");
	//   }, [users]);

	return (
		<>
		{<div style={{ fontSize: 11 }}>{JSON.stringify(errors)}</div>}
		{/* <Form>
			<Field id="name" name="name" placeholder="adı" />
			<button type="submit">Submit</button>
		</Form> */}
		<form onSubmit={formik.handleSubmit}>
			<input
				name="adnan"
				value={formik.values.adnan}
				// onChange={(e) => setName(e.target.value)}
				 onChange={handleChange}
			/>
			{/* <input type="submit" value="add user" onSubmit={handleClick} /> */}
			<input
						type="submit"
						value="submit"
						// onClick={handleSubmit}
						disabled={isSubmitting}
					/>
		</form>
		</>
	);
}
export default NewUserFormFormik;
