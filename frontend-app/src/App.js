import logo from './logo.svg';
import './App.css';
import ProductList from "./components/ProductList";
import RecipeAssistant from "./components/RecipeAssistant";

function App() {
  return (
    <div className="App">
      <h2>AI Organic Marketplace</h2>
      <ProductList />
      <RecipeAssistant />
    </div>
  );
}

export default App;
