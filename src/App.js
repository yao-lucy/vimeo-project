import './App.css';
import ImageSlider from './components/ImageSlider';
import { SliderData } from './components/SliderData';
import Features from './components/Features';

function App() {
    return (
    <>
    <ImageSlider slides = {SliderData}/>
    <Features />
    </>
    );
}

export default App;