import { AuthProvide } from './auth/context/AuthProvide';
import { AppRouter } from './router/AppRouter';

function App() {
  return (
    <AuthProvide>
      <AppRouter />
    </AuthProvide>
  )
}

export default App
