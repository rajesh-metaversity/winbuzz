import './ChangePassword.scss'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ChangePassword = () => {
  const initialValues = {
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  };

  const validationSchema = Yup.object().shape({
    currentPassword: Yup.string().required('The Old Password Field is required'),
    newPassword: Yup.string().required('The New Password Field is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
      .required('The Confirm Password Field is required'),
  });

  const handleSubmit = (values, actions) => {
    // Handle form submission here (e.g., send data to a server).
    console.log(values);
    actions.setSubmitting(false);
  };

  return (
		<div className="change_password_cont">
			<p>Change Password</p>
			<Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
				{() => (
					<Form>
						<div className="change-password-div">

							<Field type="password" name="currentPassword" placeholder="Old Password" />
							<ErrorMessage name="currentPassword" component="div" className="error_message" />

							<Field type="password" name="newPassword" placeholder="New Password" />
							<ErrorMessage name="newPassword" component="div" className="error_message" />

							<Field type="password" name="confirmPassword" placeholder="Repeat Password" />
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
