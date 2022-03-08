import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Icon } from '@mui/material';
import CustomButton from '../Elements/CustomButton';
import CustomIconButton from '../Elements/CustomIconButton';

const TodoList = ({ add }) => {

    const [editStatus, setEditStatus] = useState(false);

    return (
        <div>
            <Formik
                initialValues={{
                    todo: '',
                    category: '',
                    status: '',
                }}
                validationSchema={Yup.object().shape({
                    todo: Yup.string()
                        .required('First Name is required'),
                    // category: Yup.string()
                    // .required('Last Name is required'),
                })}
                onSubmit={(field) => console.log(field)}>
                {({ handleSubmit, handleChange, errors, touched, }) => (
                    <Form className='text-black'>
                        <div className='flex justify-evenly	py-3 rounded-lg'>
                            <div className="form-group mr-2">
                                <Field disabled={!editStatus && !add && 'disabled'} placeholder="Todo" name="todo" type="text" className={'form-control p-3 rounded-lg w-full h-12' + (errors.todo && touched.todo ? ' bg-red-200' : '')} />
                                <ErrorMessage name="todo" component="div" className="bg-red-500	text-white rounded-lg p-2 my-3 text-center" />
                            </div>
                            <div className="form-group mr-2">
                                <select
                                    disabled={!editStatus && !add && 'disabled'}
                                    className='p-2 rounded-lg h-12'
                                    name="category"
                                    onChange={handleChange}
                                    style={{ display: 'block' }}
                                >
                                    <option value="" label="Select a color" />
                                    <option value="red" label="red" />
                                    <option value="blue" label="blue" />
                                    <option value="green" label="green" />
                                </select>
                            </div>
                            <div className="form-group mr-2">
                                <select
                                    disabled={!editStatus && !add && 'disabled'}
                                    className='p-2 rounded-lg h-12'
                                    name="status"
                                    onChange={handleChange}
                                    style={{ display: 'block' }}
                                >
                                    <option value="" label="Select a color" />
                                    <option value="red" label="red" />
                                    <option value="blue" label="blue" />
                                    <option value="green" label="green" />
                                </select>
                            </div>
                            {add ?
                                <CustomButton backgroundColor='green' title="Add" />
                                :
                                <>
                                    {editStatus ?
                                        <CustomIconButton onClick={() => setEditStatus(false)} icon="save" />
                                        :
                                        <>
                                            <CustomIconButton onClick={() => setEditStatus(true)} icon="edit" />
                                            <CustomIconButton icon="delete" />
                                        </>
                                    }
                                </>
                            }


                        </div>

                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default TodoList