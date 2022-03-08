import React, { useState } from 'react';
import AddCategory from './AddCategory';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Icon } from '@mui/material';
import CustomButton from '../Elements/CustomButton';
import CustomIconButton from '../Elements/CustomIconButton';
import { Tabs, Tab, Box, Typography, Modal } from '@mui/material'

const Todos = () => {

    const [open, setOpen] = useState(false);
    const [editStatus, setEditStatus] = useState(false);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };
    return (
        <div>
            <AddCategory />
            <CustomButton onClick={() => setOpen(true)} backgroundColor='blue' title="Add new categories" />
                <Modal
                    open={open}
                    onClose={() => setOpen(!open)}
                >
                    <Formik
                        initialValues={{
                            todo: '',
                            category: '',
                            status: '',
                        }}
                        validationSchema={Yup.object().shape({
                            todo: Yup.string()
                                .required('Category name is required'),
                            // category: Yup.string()
                            // .required('Last Name is required'),
                        })}
                        onSubmit={(field) => console.log(field)}>
                        {({ handleSubmit, handleChange, errors, touched, }) => (
                            <div className='p-3 w-fit rounded-lg relative bg-slate-300 m-auto'>
                                <Box className='' sx={{ width: 200 }}>
                                    <Form className='text-black'>
                                        <div className='py-3 rounded-lg flex flex-col justify-center items-center'>
                                            <div className="form-group">
                                                <Field placeholder="New Category" name="todo" type="text" className={' form-control p-3 rounded-lg w-full h-12' + (errors.todo && touched.todo ? ' bg-red-200' : '')} />
                                                <ErrorMessage name="todo" component="div" className="bg-red-500	text-white rounded-lg p-2 my-3 text-center" />
                                            </div>
                                            <div className="form-group my-2">
                                                <input className='bg-transparent' name="todo" type="color" />
                                            </div>
                                            <CustomButton title="Create" />
                                        </div>
                                    </Form>
                                </Box>
                                <div className='absolute right-0 top-0'>
                                    <CustomIconButton onClick={() => setOpen(!open)} icon="cancel" />
                                </div>
                            </div>
                        )}
                    </Formik>
                </Modal>
        </div>
    )
}

export default Todos