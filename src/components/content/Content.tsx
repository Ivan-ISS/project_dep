import { Routes, Route } from 'react-router-dom';
import Shop from '../../pages/shop/Shop';
import About from '../../pages/about/About';

export default function Content() {

    return (
        <Routes>
            <Route path={ '/about' } element={<About/>}></Route>
            <Route path={ '/shop' } element={<Shop/>}></Route>
        </Routes>
    );
}