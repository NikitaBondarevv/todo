import { Component, createContext } from 'react';
import { createRoot } from 'react-dom/client';

import { Main } from './src/main';

export const ContextTheme = createContext(true);

const root = createRoot(document.getElementById('app'));

class App extends Component {
  render() {
    return (
      <ContextTheme.Provider value>
        <Main />
      </ContextTheme.Provider>
    )
  }
}

root.render(<App />);
