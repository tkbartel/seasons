import logo from './logo.svg';
import './App.css';
import ColorPalette from './ColorPallete';

function App() {
  return (
    <>
      <div className="flex flex-wrap">
        <ColorPalette />
        <ColorPalette />
        <ColorPalette />
        <ColorPalette />
      </div>
    </>
  );
}

export default App;
