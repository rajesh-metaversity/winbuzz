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
    currentPassword: Yup.string().required('Current Password is required'),
    newPassword: Yup.string().required('New Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
      .required('Confirm Password is required'),
  });

  const handleSubmit = (values, actions) => {
    // Handle form submission here (e.g., send data to a server).
    console.log(values);
    actions.setSubmitting(false);
  };

  return (
    <div className='change_password_cont'>
      <p>Change Password</p>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            <div>

              <Field type="password" name="currentPassword" placeholder="Old Password" />
              <ErrorMessage name="currentPassword" component="div" />
            </div>

            <div>

              <Field type="password" name="newPassword" placeholder="New Password"/>
              <ErrorMessage name="newPassword" component="div" />
            </div>

            <div>

              <Field type="password" name="confirmPassword" placeholder="Confirm Password" />
              <ErrorMessage name="confirmPassword" component="div" />
            </div>

            <div>
              <button type="submit">Save</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ChangePassword;
