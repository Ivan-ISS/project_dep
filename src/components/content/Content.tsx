import { Routes, Route } from 'react-router-dom';
import Shop from '@/Components/Pages/Shop/Shop';
import About from '@/Components/Pages/About/About';

export default function Content() {

    return (
        <Routes>
            <Route path={ '/about' } element={<About />}></Route>
            <Route path={ '/shop' } element={<Shop />}></Route>
        </Routes>
    );
}