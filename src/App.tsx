import { useState, useEffect } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import { type Repo, getUserRepos } from "./services/GithubApiService";


function App() {
  const [userData, setUserData] = useState<Repo[]>([]);

  useEffect(() => {
    getUserRepos("swietyon")
      .then((data) => setUserData(data))
      .catch((err) => console.error(err));
  }, []);

  const navigateToRepo = (link: string) => {
    window.open(link, "_blank");
  };

  return (
    <>
      <SearchBar />
      <h2>Repozytoria użytkownika:</h2>
      <ul>
        {userData.map((repo) => (
          <li
            onClick={() => navigateToRepo(repo.html_url)}
            style={{ cursor: "pointer", color: "blue" }}
            key={repo.name}
          >
            {repo.name}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
