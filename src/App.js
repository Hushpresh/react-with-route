import Navbar from "./components/Navbar";
import { BrowserRouter } from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";

function App  ()  {
    return (
        <div className="App">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/about" element={<About />}/>
                <Route path="/services" element={<Services />}/>
                <Route path="/testimonials" element={<Testimonials />}/>
                <Route path="/contact" element={<Contact />}/>
                
            </Routes>
        </div>
    );
}

export default App
