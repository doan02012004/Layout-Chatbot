
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/(home)/Page'
import SettingPage from './pages/(settings)/Page'


function App() {
 

  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='setting' element={<SettingPage />} />
    </Routes>
  )
}

export default App
