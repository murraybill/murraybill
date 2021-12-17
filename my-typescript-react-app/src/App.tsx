import { Component } from 'react';
import "./App.css"
import ChipsArray from "./chips";
import DataGridDemo from './datagrid';
import MetMuseumRestClient from './MetMuseumRestClient';


export default class App extends Component<unknown, unknown> {
  private metMuseumRestClient: MetMuseumRestClient;

  constructor(props) {
    super(props);
    this.state = {

    };

    this.metMuseumRestClient = new MetMuseumRestClient(
    );

    this.metMuseumRestClient
      .getObjectIds()
      .then((response) => response.json())
      .then((metMuseumResponseJSON) => {
        console.log(metMuseumResponseJSON)
      })
      .catch((e) => {
        // eslint-disable-next-line no-console
        console.error(e);
      });
  }


  render() {

    return <div className="root">
      <header className="App-header">
        <a
          className="App-link"
          href="http://voscak.de"
          target="_blank"
          rel="noopener noreferrer"
        >
          voscak.de
        </a>

        <DataGridDemo></DataGridDemo>
      </header>
    </div>
  }




}



/*
function App() {
  return (
    <div className="root">
      <header className="App-header">
        <a
          className="App-link"
          href="http://voscak.de"
          target="_blank"
          rel="noopener noreferrer"
        >
          voscak.de
        </a>
        
        <DataGridDemo></DataGridDemo>       
      </header>
   
    </div>



  );
}

export default App;
*/