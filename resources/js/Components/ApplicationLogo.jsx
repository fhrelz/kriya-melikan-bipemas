import React from 'react';

export default function ApplicationLogo(props) {
    return (
        <img
            src="/images/logo-melikan.png"
            alt="Sentra Melikan Logo"
            {...props}
            className={`object-contain ${props.className || 'h-12 w-auto'}`}
        />
    );
}
