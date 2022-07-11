import React, { useState, useEffect } from "react";
import debounce from "lodash.debounce";
import "./App.css";
import Header from "./components/layout/Header";
import { fetchWrapper } from "./helpers/fetch-wrapper";
import Hero from "./components/layout/Hero";

const BASE_API_URL = "https://rest.bandsintown.com";
const fetchData = async (query, cb) => {
  const res = await fetchWrapper.get(
    `${BASE_API_URL}/artists/${query}?app_id=test`
  );
  cb(res);
};

const debouncedFetchData = debounce((query, cb) => {
  fetchData(query, cb);
}, 500);

function App() {
  const [searchInput, setSearchInput] = useState("test");
  const [artist, setArtist] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (searchInput.trim() === "") return;

    setLoading(true);
    debouncedFetchData(searchInput, (res) => {
      setArtist(res);
      setLoading(false);
    });
  }, [searchInput]);

  return (
    <div className="App">
      <Header
        searchInput={searchInput}
        onSearch={(val) => setSearchInput(val)}
      />
      <Hero loading={loading} artist={artist} />
    </div>
  );
}

export default App;
