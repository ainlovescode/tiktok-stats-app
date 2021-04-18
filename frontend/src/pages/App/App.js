import React from 'react'
import './App.css';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import UserForm from "../../components/UserForm/UserForm";
import MetricsDisplay from "../../components/MetricsDisplay/MetricsDisplay";

import axios from "axios";

function App() {
    const [username, setUsername] = React.useState("");
    const [apiResponse, setApiResponse] = React.useState()

    async function onSubmit(formUsername) {

        try{
            axios.get('http://localhost:5000/analytics/' + formUsername ).then(response => {
                setUsername(formUsername)
                setApiResponse(response)
            }).catch(error => {
                console.log(error)
            })
        } catch(err) {
            console.log(err.toString())
        }
    }
    return (
    <div className="App">
      <Header />

      <div className="content">
          < UserForm onSubmit={onSubmit}/>
          { apiResponse && (
              < MetricsDisplay userInfo={apiResponse["user_info"]} analytics={apiResponse["analytics"]}/>
              )}
      </div>

      <Footer />
    </div>
  );
}

export default App;
