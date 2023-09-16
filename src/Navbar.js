import React, { useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "./useFetch"; // Import the custom useFetch hook

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState(null); // State to track errors
  const apiKey = "f8d7328efe66061666afa56ddd0ddcbd"; // Replace with your actual TMDb API key
  const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchTerm}`;
  const { data: searchResults, isPending } = useFetch(
    searchTerm ? apiUrl : null
  );

  // Function to check if the response is JSON
  const isJSONResponse = (response) => {
    if (response && response.headers) {
      const contentType = response.headers.get("content-type");
      return contentType && contentType.includes("application/json");
    }
    return false;
  };

  // Function to handle errors and set the error state
  const handleError = (error) => {
    setError(error.message);
  };

  return (
    <nav className="navbar">
      <Link to="/">
        <h1>Menu</h1>
      </Link>

      <div className="search-container">
        <input
          className="search"
          type="text"
          placeholder="What do you want to watch?"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {error && <p className="error-message">{error}</p>}
        {isPending && <p>Loading...</p>}
        {searchResults && (
          <ul className="search-results">
            {searchResults.results.map((result) => (
              <li key={result.id}>
                <Link to={`/movies/${result.id}`}>{result.title}</Link>
              </li>
            ))}
          </ul>
        )}
      </div>

      <Link to="/signin">Sign In</Link>
    </nav>
  );
};

export default Navbar;
