import Home from "./pages/home.jsx"
import WeatherProvider from "./context/WeatherContext.jsx";


function App() {
  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300..700&display=swap" rel="stylesheet"></link>
      
      <WeatherProvider><Home/></WeatherProvider>
      
    </>
    
  );
}

export default App;
