import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import './App.css'

function App() {

  useEffect(() => {
    Personagens()
  }, [])

  const [personagem, setPersonagem] = useState('')
  const [nomePerso, setNomePerso] = useState([])
  const [status, setStatus] = useState('Alive')

  const Personagens = async () => {
    console.log('Sucesso buscar personagens');
    const response = await axios.get('https://rickandmortyapi.com/api/character');
    setNomePerso(response.data.results)
  }

  const buscarPersonagem = async () => {
    console.log(status)
    console.log('Sucesso buscar personagem');
    const response = await axios.get(`https://rickandmortyapi.com/api/character/?name=${personagem}&status=${status}`);

    console.log(response.data.results)
    setNomePerso(response.data.results)
  }

  return (
    <>
      <div>
        <input
          type='text' value={personagem}
          onChange={(evento) => setPersonagem(evento.target.value)}
        />
        <select name="select"
          onChange={(evento) => setStatus(evento.target.value)}>
          <option value="alive">Vivo</option>
          <option value="dead" selected>Morto</option>
          <option value="unknown">Desconhecido</option>
        </select>
        <input type="button" value='Pesquisar' onClick={buscarPersonagem}></input>
      </div>

      {nomePerso.map((personagi) =>
        <dev>
          <Link to={`/Personagem/${personagi.id}`}>
            <img src={personagi.image}></img>
          </Link>
          <h5> {personagi.name}</h5>
          <h5> {personagi.status}</h5>
        </dev>

      )
      }
    </>
  )
}

export default App
