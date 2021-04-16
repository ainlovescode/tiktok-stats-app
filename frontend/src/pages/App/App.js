import './App.css';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import UserForm from "../../components/UserForm/UserForm";

function App() {
  return (
    <div className="App">
      <Header />

      <div className="content">
          < UserForm />
      </div>

      <Footer />
    </div>
  );
}

export default App;
