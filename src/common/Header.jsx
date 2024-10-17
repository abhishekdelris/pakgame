import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation
import logo from '../assets/image/logo.png';

const Header = () => {
  const [searchVisible, setSearchVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredGames, setFilteredGames] = useState([]);
  const [games, setGames] = useState([]); // Load all games
  const searchRef = useRef(null);
  const navigate = useNavigate();

  const toggleSearch = () => {
    setSearchVisible(!searchVisible);
  };

  const handleClickOutside = (event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setSearchVisible(false);
    }
  };

  useEffect(() => {
    if (searchVisible) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [searchVisible]);

  useEffect(() => {
    // Fetch the list of games when the component mounts
    fetch(import.meta.env.VITE_BASE_URL_API + 'users/get_all_games')
      .then(response => response.json())
      .then(data => {
        setGames(data.data || []);
      })
      .catch(error => console.error('Error fetching games:', error));
  }, []);

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    if (query) {
      const filtered = games.filter(game =>
        game.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredGames(filtered);
    } else {
      setFilteredGames([]);
    }
  };

  const handleGameSelect = (game) => {
    setSearchVisible(false);
    setSearchQuery('');
    setFilteredGames([]);
    navigate(`/GameListing/${game.id}`); // Navigate to the selected game's page
  };

  return (
    <>
      <div className="header-top">
        <div className="container header">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12 mx-auto bg-white">
              <nav className="navbar navbar-expand-sm p-0">
                <a className="navbar-brand" href="/">
                  <img src={logo} alt="Logo" />
                </a>
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <button className="btn btn-link nav-link" onClick={toggleSearch}>
                      <svg width={20} height={20} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 6C13.7614 6 16 8.23858 16 11M16.6588 16.6549L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="#f95c5c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                    </button>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <svg width={21} height={20} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 18L9 12M20 18L15 12M3 8L10.225 12.8166C10.8665 13.2443 11.1872 13.4582 11.5339 13.5412C11.8403 13.6147 12.1597 13.6147 12.4661 13.5412C12.8128 13.4582 13.1335 13.2443 13.775 12.8166L21 8M6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V8.2C21 7.0799 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.07989 19 6.2 19Z" stroke="#f95c5c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link download-icon" href="/Login">
                      <svg width={21} height={20} viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.4167 7.13344H14.5833V0.217255H5.83333V7.13344H0L10.2083 15.2023L20.4167 7.13344ZM0 17.5077V19.8131H20.4167V17.5077H0Z" fill="#FFFEFE" />
                      </svg>
                    </a>
                  </li>
                </ul>
              </nav>
              {searchVisible && (
                <div className="search-bar my-2" ref={searchRef}>
                  <form className="form-inline">
                    <input
                      className="form-control"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                      value={searchQuery}
                      onChange={handleSearchChange}
                    />
                    <button className="btn btn-outline-secondary" type="submit">
                      <svg width={20} height={20} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 6C13.7614 6 16 8.23858 16 11M16.6588 16.6549L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="#f95c5c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                    </button>
                  </form>
                  {filteredGames.length > 0 && (
                    <ul className="list-group mt-2">
                      {filteredGames.map(game => (
                        <li
                          key={game.id}
                          className="list-group-item d-flex align-items-center"
                          onClick={() => handleGameSelect(game)}
                          style={{ cursor: 'pointer' }}
                        >
                          <img
                            src={game.image || 'path_to_default_image'} // Provide a default image if needed
                            alt={game.title}
                            style={{ width: '50px', height: '50px', objectFit: 'cover', marginRight: '10px' }}
                          />
                          {game.title}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
