import React, { useState } from 'react'
import api from './services/api.js';

import './globalcss.css';
import './sidebar.css';
import './App.css';
import './main.css'; 

import Notes from './componentes/Notes/index.js';

function App() {
  const  [title, setTitles] = useState('');
  const  [notas, setNatas] = useState('');  

  function handleSubmit(e){
    e.preventDefault();
     
  } 



  return (
    <div>
      <aside>
        <strong>Caderno de Notas</strong>
        <form  onSubmit={handleSubmit}>
          <div className='int-block'>
            <label htmlFor='title'>Título de Anotação</label>
            <input 
              required 
              value={title}
          
             />
          </div>
          <div className='input-block'>
            <label htmlFor='note'>Anotação</label>
            <textarea 
              required 
              value={notas}
              onChange={e => setNatas(e.target.value)}  
            ></textarea>             
          </div>
          <button type='submit'>Salvar</button> 
        </form>
      </aside>
      <main>
        <ul>
           <Notes></Notes>
           <Notes></Notes>

        </ul>
      </main>
    </div>
  );
}

export default App;
