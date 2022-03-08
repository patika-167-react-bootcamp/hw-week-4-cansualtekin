import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button } from '@mui/material';

const RegisterForm = () => {
    return (
        <div>
            <Formik
                initialValues={{
                    username: '',
                    password: '',
                    passwordConfirm: '',
                }}
                validationSchema={Yup.object().shape({
                    username: Yup.string()
                        .required('First Name is required'),
                    password: Yup.string()
                        .required('Last Name is required'),
                    passwordConfirm: Yup.string()
                        .required('Last Name is required'),
                })}
                onSubmit={() => console.log("test")}>
                {({ handleSubmit, handleChange, errors, status, touched, }) => (
                    <Form className='text-black	'>
                        <div className="form-group mb-3">
                            <Field placeholder="Username" name="username" type="text" className={'form-control p-3 rounded-lg w-full' + (errors.username && touched.username ? ' bg-red-200' : '')} />
                            <ErrorMessage name="username" component="div" className="bg-red-500	text-white rounded-lg p-2 my-3 text-center" />
                        </div>
                        <div className="form-group mb-3">
                            <Field placeholder="Password" name="password" type="text" className={'form-control p-3 rounded-lg w-full' + (errors.password && touched.password ? ' bg-red-200' : '')} />
                            <ErrorMessage name="password" component="div" className="bg-red-500 text-white rounded-lg p-2 my-3 text-center" />
                        </div>
                        <div className="form-group mb-3">
                            <Field placeholder="Password Confirm" name="passwordConfirm" type="text" className={'form-control p-3 rounded-lg w-full' + (errors.passwordConfirm && touched.passwordConfirm ? ' bg-red-200' : '')} />
                            <ErrorMessage name="passwordConfirm" component="div" className="bg-red-500 text-white rounded-lg p-2 my-3 text-center" />
                        </div>
                        <Button onClick={handleSubmit} type='submit' className='w-full' variant="contained" color="primary">
                            Register
                        </Button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default RegisterForm