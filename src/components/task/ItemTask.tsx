import './item-task.style.css'
import { Button } from "../button/Button"
import { IItemTask } from "./interface";

export interface ItemTaskProps extends IItemTask{}

export const ItemTask = ({
    content,
    type = 'light',
    onCompleted,
    onEdit,
    onDelete
}: ItemTaskProps) => {
  return (
    <li className='list-group-item d-flex flex-row justify-content-between border-0 mb-2 rounded'
        style={{
            backgroundColor: type == 'light' ? '#f4f6f7' : '#d1e7dd'
        }}
    >
      <div className='pe-2' data-testid="test-content">
        { content }
      </div>
      <div className='d-flex align-items-center ps-2'>
        {
            onCompleted &&
            <Button
                variant='success'
                styleName="btn-xs"
                children="✓"
                onClick={onCompleted}
            />
        }
        <Button
            variant='danger'
            styleName="btn-xs ms-2"
            children="Ｘ"
            onClick={onDelete}
        />
        {
            onEdit &&
            <Button
                variant='primary'
                styleName="btn-xs ms-2"
                children="Edit"
                onClick={onEdit}
            />
        }
        
      </div>
    </li>
  )
}
