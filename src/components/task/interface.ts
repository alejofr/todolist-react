export interface IFormTask{
    onSubmit:       (value: string) => void;
    value:         string;
    isEdit?:        boolean; 
}

export interface IItemTask{
    content:            string;
    type?:              'success' | 'light';

    onDelete:            () => void;
    onEdit?:             () => void;
    onCompleted?:        () => void;
}