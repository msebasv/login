import React from 'react';
import './label.css';
import Swal from 'sweetalert2';

const Label = () => {

    const onClick = () => {
        Swal.fire({
            title: 'New Account PUTITO👋',
            position: 'top',
            showClass: {
                popup: `
            animate__animated
            animate__fadeInDown
            animate__faster
          `
            },
            hideClass: {
                popup: `
            animate__animated
            animate__fadeOutUp
            animate__faster
          `
            },
            grow: 'row',
            showConfirmButton: false,
            showCloseButton: true
        })
    }
    return (
        <div className="label-container">
            <label className="label" onClick={onClick}>NEW ACCOUNT</label>
        </div >
    )
};
export default Label;
