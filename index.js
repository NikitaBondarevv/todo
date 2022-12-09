import { Component, createContext } from 'react';
import { createRoot } from 'react-dom/client';

import { checkUser } from './src/contracts/checkUser';
import { Header } from './src/header';
import { Main } from './src/main';
import './styles.css';

export const ContextUser = createContext(true);

const root = createRoot(document.getElementById('app'));

class App extends Component {
  state = {
    isAuthenticated: false
  }

  async componentDidMount() {
    const user = await checkUser()

    this.setState({ isAuthenticated: !user.error })
  }

  setUser = (user) => {
    this.setState({ isAuthenticated: Boolean(user) })
  }

  render() {
    const contextValue = {
      isAuthenticated: this.state.isAuthenticated,
      setUser: this.setUser
    }

    return (
      <ContextUser.Provider value={contextValue}>
        <Header />
        <Main />
      </ContextUser.Provider>
    )
  }
}

root.render(<App />);
