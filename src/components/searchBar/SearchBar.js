import React,{useState} from 'react';
import './SearchBar.css';

function SearchBar({setLocationHandler}) {

    const [query, setQuery] = useState("");
    
    function handleClick() {
        setLocationHandler(query);
    }

    function keyPressCheck(e) {
        if(e.keyCode === 14){
            setLocationHandler(query);
        }
    }

  return (
    <span className="searchbar">
      <input
        type="text"
        name="search"
        placeholder="Zoek een stad in Nederland"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        onKeyUp={keyPressCheck}

      />

      <button type="button"
      onClick={handleClick}
      >
        Zoek
      </button>
    </span>
  );
};

export default SearchBar;
