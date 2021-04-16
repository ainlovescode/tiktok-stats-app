import './App.css';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import UserForm from "../../components/UserForm/UserForm";
import MetricsDisplay from "../../components/MetricsDisplay/MetricsDisplay";

function App() {
  return (
    <div className="App">
      <Header />

      <div className="content">
          < UserForm />
          < MetricsDisplay />
      </div>

      <Footer />
    </div>
  );
}

export default App;
