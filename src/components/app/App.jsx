
import { BrowserRouter as Router, Outlet, Route, Routes } from 'react-router-dom'
import Header from '../layouts/Header/Header'
import CreateTestPage from '../../pages/CreateQuestionPage/CreateQuestionPage'
import LoginPage from '../../pages/LoginPage/LoginPage'
import LogInBox from '../layouts/LogInBox/LogInBox'
import MainPage from '../../pages/MainPage/MainPage'
function App() {

  return (
    <Router>
        <div className="app">
			<main>
				{/* <Header></Header> */}
				<Routes>
					<Route path='/login' element={<LoginPage></LoginPage>}></Route>
					<Route path='/main' element={<MainPage></MainPage>}></Route>
				</Routes>
			</main>
		</div>
    </Router>
  )
}

export default App
