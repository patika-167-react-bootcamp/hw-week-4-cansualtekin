import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button, Icon } from '@mui/material';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';


const LoginForm = () => {

    const [passwordVisible, setPasswordVisible] = useState(false)

    return (
        <div>
            <Formik
                initialValues={{
                    username: '',
                    password: '',
                }}
                validationSchema={Yup.object().shape({
                    username: Yup.string()
                        .required('First Name is required'),
                    password: Yup.string()
                        .required('Last Name is required'),
                })}
                onSubmit={(field) => console.log(field)}>
                {({ handleSubmit, errors, touched, }) => (
                    <Form className='text-black	relative'>
                        <div className="form-group mb-3">

                            <Field placeholder="Username" name="username" type="text" className={'form-control p-3 rounded-lg w-full' + (errors.username && touched.username ? ' bg-red-200' : '')} />
                            <ErrorMessage name="username" component="div" className="bg-red-500	text-white rounded-lg p-2 my-3 text-center" />
                        </div>
                        <div className="form-group mb-3">
                            <button
                                onClick={() => setPasswordVisible(!passwordVisible)}
                                className='absolute right-2 bottom-0 top-0' >
                                {passwordVisible ? <VisibilityIcon /> : <VisibilityOffIcon />}
                            </button>
                            <Field placeholder="Password" name="password" type={passwordVisible ? 'text' : 'password'} className={'form-control p-3 rounded-lg w-full' + (errors.password && touched.password ? ' bg-red-200' : '')} />
                            <ErrorMessage name="password" component="div" className="bg-red-500 text-white rounded-lg p-2 my-3 text-center" />
                        </div>
                        <Button onClick={handleSubmit} type='submit' className='w-full' variant="contained" color="primary">
                            Login
                        </Button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default LoginForm