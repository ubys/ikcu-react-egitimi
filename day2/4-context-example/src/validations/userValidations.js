// import { yup } from 'yup'
import * as yup from 'yup';

const userValidations = yup.object().shape({
	adnan : yup.string().min(3, `En az 3 karakter girilmelidir`).required()
});

export default userValidations;

