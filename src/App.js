
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
function App() {
  return (
    <>
<Routes>
						<Route path="/" element={<HomePage />} />
						{/* <Route path="/cart" element={<CartPage />} /> */}
					</Routes>
          </>
  );
}

export default App;
