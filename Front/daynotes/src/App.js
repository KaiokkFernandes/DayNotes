import React, { useState, useEffect } from 'react'
import api from './services/api.js';


import './globalcss.css';
import './sidebar.css';
import './App.css';
import './main.css'; 

import Notes from './componentes/Notes/index.js';

function App() {

  const  [title, setTitles] = useState('');
  const  [notas, setNatas] = useState(''); 
  const [AllNotes, setAllNotas] = useState([]);

  useEffect(()=> {       // Função para carregar as anotações do beckend
     async function getAllNotes(){
        const response = await api.get('/annotations');

       setAllNotas(response.data);  
     }

       getAllNotes();
  }, [ ] )   

  async function handleSubmit(e){   // função para enviar os dados para o beckend
    e.preventDefault();

    const response = await api.post('/annotations', {
      title,
      notas, 
      priority: false
    })
     setTitles('');
     setNatas(''); 
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
              onChange={e => setTitles(e.target.value)}
          
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
          {AllNotes.map(data => (
            <Notes data={data} />
          
          ))}

        </ul>
      </main>
    </div>
  );
}

export default App;
