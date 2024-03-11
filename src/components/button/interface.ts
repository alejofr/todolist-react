export interface IButton {
    type?:                      'button' | 'submit' | 'reset',
    size?:                      'btn-sm' | 'btn-lg';
    variant?:                   TButtonVariant;
    outline?:                   boolean;
    onClick?:                   () => void;
    styleName?:                 string;
}

export type TButtonVariant =  'primary' 
                            | 'secondary' 
                            | 'success' 
                            | 'danger' 
                            | 'warning' 
                            | 'info' 
                            | 'light'
                            | 'dark'
                            | 'link';