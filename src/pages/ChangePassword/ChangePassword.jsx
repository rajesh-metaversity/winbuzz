import './ChangePassword.scss'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useChangePasswordMutation } from '../../Services/ChangePassword/ChangePassword';
import { useEffect, useState } from 'react';
import Loader from '../../component/Loader/Loader';
import { toast } from 'react-toastify';

const ChangePassword = () => {
	let initialValues = {
		currentPassword: '',
		newPassword: '',
		confirmPassword: '',
		appUrl: window.location.hostname
	};
	const [trigger, { data, isLoading, isError, status }] = useChangePasswordMutation();

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
	};
	useEffect(() => {
		if (data?.status) {
			toast.success(data?.message);
			// initialValues(prev => {
			// 	return {
			// 		...prev,
			// 		currentPassword: '',
			// 		newPassword: '',
			// 		confirmPassword: ''
			// 	};
			// });
			if (reset) {
				reset();
			}
		} else {
			toast.error(data?.message);
		}
	}, [data]);
	let reset;

	return (
		<div className="change_password_cont">
			{isLoading && <Loader />}
			<p>Change Password</p>
			<Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
				{({ resetForm }) => {
					reset = resetForm;
					return (
						<Form>
							<div className="change-password-div">
								<Field type="password" name="currentPassword" placeholder="Old Password" values={initialValues?.currentPassword} />
								<ErrorMessage name="currentPassword" component="div" className="error_message" />

								<Field type="password" name="newPassword" placeholder="New Password" values={initialValues?.newPassword} />
								<ErrorMessage name="newPassword" component="div" className="error_message" />

								<Field type="password" name="confirmPassword" placeholder="Repeat Password" values={initialValues?.confirmPassword} />
								<ErrorMessage name="confirmPassword" component="div" className="error_message" />

								<div className="save_button">
									<button type="submit">Save</button>
								</div>
							</div>
						</Form>
					);
				}}
			</Formik>
		</div>
	);
};

export default ChangePassword;
