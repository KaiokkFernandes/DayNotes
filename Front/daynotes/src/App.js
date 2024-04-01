import React, { useState } from 'react';  

import React from 'react';  
import './globalcss.css';
import './sidebar.css';
import './App.css';
import './main.css'; 

import Notes from './components/Notes/index.js ';

function App() {
  const  [title, setTitles] = useState('');
  const  [notas, setNatas] = useState('');  
  return (
    <div>
      <aside>
        <strong>Caderno de Notas</strong>
        <form>
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
