import React from "react";

function Notes({data}){
    return (
        <>
           <li  className="notepad-infos">
              <div>
                <strong>{data.title}</strong>
                  <div>
                    x
                  </div>
                  
              </div>
              <textarea defaultValue={data.notas}></textarea>
              <span>Editar</span>
           </li>
        </>
    )
}


export default Notes;