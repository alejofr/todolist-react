import React from "react";
import { IButton } from "./interface";

export interface ButtonProps extends IButton{
    style?:     React.CSSProperties;
    children?:  React.ReactNode;
}


export const Button = ({
    type = 'button',
    outline = false,
    size,
    variant,
    style,
    onClick,
    children,
    styleName,
}: ButtonProps) => {

    const stylesName = () : string => {
        let className = ['btn'];

        if( size ){
            className.push(size);
        }

        if( variant ){
            className.push(outline ? `btn-outline-${variant}` : `btn-${variant}`);
        }

        if( styleName ){
            className.push(styleName);
        }


        return className.join(" ");
    } 

    return (
        <button
            className={stylesName()}
            type={type}
            style={style}
            onClick={onClick}
        >
            { children }
        </button>
    )
}