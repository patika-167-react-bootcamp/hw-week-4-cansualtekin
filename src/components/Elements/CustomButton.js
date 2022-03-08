import React from 'react'

const CustomButton = ({ backgroundColor = 'blue', textColor = 'white', title, onClick }) => {

    const color = {
        blue: 'bg-sky-500',
        green: 'bg-emerald-500',
        red: 'bg-red-500'
    }

    const tColor = {
        white: 'text-white',
        black: 'text-black'
    }

    return (
        <div className={`${color[backgroundColor]} p-3 rounded-lg text-center`}>
            <button className={`${tColor[textColor]} `} onClick={onClick}>{title}</button>
        </div>
    )
}


export default CustomButton;