import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import { store } from 'store'

export const customRender = (Component: React.ReactNode) => render(
  <BrowserRouter>
    <Provider store={store}>
      {Component}
    </Provider>
  </BrowserRouter>
)
