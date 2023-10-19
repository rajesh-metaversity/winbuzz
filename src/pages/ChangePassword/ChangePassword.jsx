import './ChangePassword.scss'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useChangePasswordMutation } from '../../Services/ChangePassword/ChangePassword';
import { useEffect, useState } from 'react';

const ChangePassword = () => {
	const initialValues = {
		currentPassword: '',
		newPassword: '',
		confirmPassword: '',
		appUrl: window.location.hostname
	};
	const [trigger, { data, isLoading, isError }] = useChangePasswordMutation();

	const validationSchema = Yup.object().shape({
		currentPassword: Yup.string().required('The Old Password Field is required'),
		newPassword: Yup.string().required('The New Password Field is required'),
		confirmPassword: Yup.string()
			.oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
			.required('The Confirm Password Field is required')
	});

	const handleSubmit = (values, actions) => {
		actions.setSubmitting(false);
		trigger(values);

		if (data.status) {
			initialValues((prev) => {
				return {
					...prev,
					currentPassword: "",
					newPassword: "",
					confirmPassword: ""
				}
			})
		}
	};



	

	return (
		<div className="change_password_cont">
			<p>Change Password</p>
			<Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
				{() => (
					<Form>
						<div className="change-password-div">
							<Field type="password" name="currentPassword" placeholder="Old Password" values={initialValues.currentPassword } />
							<ErrorMessage name="currentPassword" component="div" className="error_message" />

							<Field type="password" name="newPassword" placeholder="New Password" values={initialValues.newPassword }/>
							<ErrorMessage name="newPassword" component="div" className="error_message" />

							<Field type="password" name="confirmPassword" placeholder="Repeat Password" values={initialValues.confirmPassword }/>
							<ErrorMessage name="confirmPassword" component="div" className="error_message" />

							<div className="save_button">
								<button type="submit">Save</button>
							</div>
						</div>
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default ChangePassword;
