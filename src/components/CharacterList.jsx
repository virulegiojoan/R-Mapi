import React, { useEffect, useState } from 'react';
import Character from './Character';

function NavPage(props) {
    return (
        <header className='d-flex justify-content-between align-items-center'>
            <button
                className='btn btn-light btn-sm'
                onClick={() => props.setPage(props.page - 1)}
                disabled={props.page === 1} // Deshabilitar el botón en la primera página
            >
                Previous
            </button>
            <p>
                Page: {props.page}
            </p>
            <button
                className='btn btn-light btn-sm'
                onClick={() => props.setPage(props.page + 1)}
            >
                Next
            </button>
        </header>
    );
}

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      setLoading(true); // Set loading to true when fetching new data
      const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
      const data = await response.json();
      setCharacters(data.results);
      setLoading(false);  // Set loading to false once the data has been fetched
    }
    fetchData();
  }, [page]);

  return (
    <div className='container'>
      <NavPage page={page} setPage={setPage} />
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className='row'>
          {characters.map(character => (
            <div className='col-md-4' key={character.id}>
              <Character character={character} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CharacterList;
