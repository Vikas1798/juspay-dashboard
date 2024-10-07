import './App.css'
import Dashboard from './Components/Dashboard';
import LeftDrawer from './Components/LeftDrawer';
import RightDrawer from './Components/RightDrawer';

function App() {
    return (
        <section className='scroll-smooth grid grid-cols-12 items-start dark:bg-[#1C1C1C]'>
            <LeftDrawer />
            <Dashboard />
            <RightDrawer />
        </section>
    )
}

export default App;
