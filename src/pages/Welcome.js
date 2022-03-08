import React, { useState } from 'react'
import { Tabs, Tab, Box, Typography } from '@mui/material'
import PropTypes from 'prop-types';
import LoginForm from '../components/Welcome/LoginForm';
import RegisterForm from '../components/Welcome/RegisterForm';

export default function Welcome() {

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    function TabPanel(props) {
        const { children, value, index, ...other } = props;

        return (
            <div
                className='text-white'
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}
            >
                {value === index && (
                    <Box sx={{ p: 3 }}>
                        <Typography>{children}</Typography>
                    </Box>
                )}
            </div>
        );
    }

    TabPanel.propTypes = {
        children: PropTypes.node,
        index: PropTypes.number.isRequired,
        value: PropTypes.number.isRequired,
    };

    return (
        <div className=''>
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider', }}>
                    <Tabs centered value={value} onChange={handleChange}>
                        <Tab label="Login" value={0} />
                        <Tab label="Register" value={1} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    <div className='w-7/12 m-auto'>
                        <LoginForm />
                    </div>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <div className='w-7/12 m-auto'>
                        <RegisterForm />
                    </div>
                </TabPanel>
            </Box>
        </div>
    )
}
