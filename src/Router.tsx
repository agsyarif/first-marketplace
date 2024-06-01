import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Nav from './components/Nav'
import { ModeToggle } from './components/mode-toggle'

const Router = () => {
  return (
    <>
    <BrowserRouter>
    <div className='flex justify-between bg-slate-700'>
      <Nav />
      <ModeToggle />
    </div>

    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}

      </Routes>
    </div>
    </BrowserRouter>
    </>
    )
}

export default Router