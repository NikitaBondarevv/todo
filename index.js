import { Component, createContext } from 'react';
import { createRoot } from 'react-dom/client';

import { Header } from './src/header';
import { Main } from './src/main';
import './styles.css';

export const ContextTheme = createContext(true);

const root = createRoot(document.getElementById('app'));

class App extends Component {
  render() {
    return (
      <ContextTheme.Provider value>
        <Header />
        <Main />
      </ContextTheme.Provider>
    )
  }
}

root.render(<App />);
