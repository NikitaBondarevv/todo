import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import 'react-notifications/lib/notifications.css'
import { NotificationContainer } from 'react-notifications'

import { store } from './store'
import { App } from 'app'

const root = createRoot(document.getElementById('app')!)

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
      <NotificationContainer leaveTimeout={100000} />
    </Provider>
  </BrowserRouter>
)
export { App }

