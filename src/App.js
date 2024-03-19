// import Register from './pages/auth/signup'
import Login from './pages/auth/login'
import Dashboard from './pages/patient/dashboard';
import { QueryClientProvider, QueryClient } from 'react-query';

const queryClient = new QueryClient()
function App() {
  return (
    <QueryClientProvider client ={queryClient}>
      {/* <div><Register /></div> */}
      <div><Login /></div>
      {/* <div><Dashboard /></div> */}
    </QueryClientProvider>


  );
}

export default App;
