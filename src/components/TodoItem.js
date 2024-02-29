import React from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { BsCheckLg } from 'react-icons/bs';
function TodoItem({item,index,handleToDoDelete,handleComplete,handleCompletedTodoDelete}) {
    return ( 
        <div className="todo-list-item" key={index}>
            <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                {item.completedOn && <p><i>Completed at:{item.completedOn}</i></p>}
            </div>
            <div>
            {!item.completedOn&&(
                <AiOutlineDelete
                title="Delete?"
                className="icon"
                onClick={()=>handleToDoDelete(index)}
            
                />
                )}
                {!item.completedOn&&(
                    <BsCheckLg
                    title="Completed?"
                    className="check-icon"
                    onClick={()=>handleComplete(index)}
                    />
                    
                )}
                {item.completedOn && (
          <AiOutlineDelete
            title="Delete?"
            className="icon"
            onClick={() => handleCompletedTodoDelete(index)} // Call handleCompletedTodoDelete
          />
        )}
                
            </div>
        </div>
     );
}

export default TodoItem;