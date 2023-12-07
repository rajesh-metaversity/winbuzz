import React from 'react'
// import ChangePassword from '../ChangePassword/ChangePassword'
import { useChangePasswordCPMutation } from '../../Services/ChangePassword/ChangePassword';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useEffect, useState } from 'react';
import Loader from '../../component/Loader/Loader';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
// import LoginForm from '../../component/loginForm/LoginForm';
import { useDispatch } from 'react-redux';
import { setIslogin } from '../../App/LoginSlice';

const PassChange = () => {
    const token = localStorage.getItem("token")
    const userid = localStorage.getItem("userId")
    let initialValues = {
                userid,
				oldPassword: "",
				newPassword: "",
				currentPassword: "",
				token
    };
    
	const nav = useNavigate()
    const [trigger, { data, isLoading, isError, status }] = useChangePasswordCPMutation();

    const dispatch = useDispatch()

	const validationSchema = Yup.object().shape({
		oldPassword: Yup.string().required('The Old Password Field is required'),
		newPassword: Yup.string().required('The New Password Field is required'),
		currentPassword: Yup.string()
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
			dispatch(setIslogin(false));
			localStorage.clear();
			nav('/');
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
	}, [data ]);
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
								<Field type="password" name="oldPassword" placeholder="Old Password" values={initialValues?.currentPassword} />
								<ErrorMessage name="oldPassword" component="div" className="error_message" />

								<Field type="password" name="newPassword" placeholder="New Password" values={initialValues?.newPassword} />
								<ErrorMessage name="newPassword" component="div" className="error_message" />

								<Field type="password" name="currentPassword" placeholder="Repeat Password" values={initialValues?.confirmPassword} />
								<ErrorMessage name="currentPassword" component="div" className="error_message" />

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
  
}

export default PassChange