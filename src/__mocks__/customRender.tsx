import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import { store } from 'store'

export const customRender = (Cpmponent: React.ReactNode) => render(
  <BrowserRouter>
    <Provider store={store}>
      {Cpmponent}
    </Provider>
  </BrowserRouter>
)