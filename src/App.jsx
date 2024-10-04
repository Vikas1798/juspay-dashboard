import './App.css'
import Dashboard from './Components/Dashboard';
import LeftDrawer from './Components/LeftDrawer';
import RightDrawer from './Components/RightDrawer';

function App() {
    return (
        <section className='grid grid-cols-12'>
            <LeftDrawer />
            <Dashboard />
            <RightDrawer />
        </section>
    )
}

export default App;
