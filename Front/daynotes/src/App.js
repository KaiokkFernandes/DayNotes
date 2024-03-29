import React from 'react';  
import './globalcss.css';
import './sidebar.css';
import './App.css';
import './main.css'; 

function App() {
  return (
    <div>
      <aside>
        <strong>Caderno de Notas</strong>
        <form>
          <div className='int-block'>
            <label htmlFor='title'>Título de Anotação</label>
            <input type='text' id='title' name='title' />
          </div>
          <div className='input-block'>
            <label htmlFor='note'>Anotação</label>
            <textarea id='note' name='note'></textarea>             
          </div>
          <button type='submit'>Salvar</button> 
        </form>
      </aside>
      <main>
        <ul>
          <li className='notepads-infos'>
            <div>
              <strong>Fazer Compras</strong>
              <div>
                x
              </div>
              <div>
                <textarea></textarea>
              </div>
            </div>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
