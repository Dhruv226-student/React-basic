import React from 'react'

function Button({
    children,
    type = 'button',
    bgColor = 'bg-blue-600',
    textColor = 'text-white',
    classname = '',
    ...props
}) {
    return (
        <Button classname={`px-4 py-2 rounded-lg ${bgColor} ${textColor}  ${classname}`} {...props}>
            {children}
        </Button>
    )
}

export default Button
