import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';
import { Cancel } from '@mui/icons-material';
const CustomButton = ({ icon, onClick, color }) => {

    const icons = {
        edit: <EditIcon className='text-yellow-700'/>,
        save: <SaveIcon className='text-blue-700'/>,
        delete: <DeleteIcon className='text-red-700'/>,
        cancel: <Cancel className='text-red-700'/>
    }


    return (
        <div>
            <button onClick={onClick}>{icons[icon]}</button>
        </div>
    )
}


export default CustomButton;