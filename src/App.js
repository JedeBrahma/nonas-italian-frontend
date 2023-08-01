import { useEffect, useState } from "react";
import "./App.css";
import Container from "./components/Container/Container";
import Error from "./components/Error/Error";
import Loading from "./components/Loading/Loading";
import MenuList from "./components/MenuList/MenuList";

const API_URL = "http://localhost:8080";

function App() {
  const [menuData, setMenuData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        setError("");
        setLoading(true);
        const response = await fetch(`${API_URL}/items`);
        const json = await response.json();
        const { data, error } = json;
        if (response.ok) {
          setMenuData(data);
          setLoading(false);
        } else {
          setError(error);
          setLoading(false);
        }
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const renderContent = () => {
    if (loading) {
      return <Loading />;
    } else if (error) {
      return <Error error={error} />;
    } else {
      return <MenuList menuData={menuData} />;
    }
  };
  return (
    <div className="App">
      <Container center={Boolean(error || loading)}>
        {renderContent()}
      </Container>
    </div>
  );
}

export default App;
