
import { BrowserRouter as Router, Outlet, Route, Routes } from 'react-router-dom'
import Header from '../layouts/Header/Header'
import CreateTestPage from '../../pages/CreateTestPage/CreateTestPage'
function App() {

  return (
    <Router>
        <div className="app">
			<Header></Header>
			<main>
				<Routes>
					<Route path='/create-test' element={<CreateTestPage></CreateTestPage>}></Route>
				</Routes>
			</main>
		</div>
    </Router>
  )
}

export default App
