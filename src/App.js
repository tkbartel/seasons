import logo from './logo.svg';
import './App.css';
import ColorPalette from './ColorPallete';
import {useState} from 'react';

function App() {
  const [selectedColorCodes, setSelectedColorCodes] = useState([]);

  const colors1 = {
    complementaryColors: [
      { code: '13-4403', name: 'Silver Birch', color: '#D3D3D3' },
      { code: '17-3934', name: 'Persian Jewel', color: '#7B88C7' },
      { code: '19-3952', name: 'Surf the Web', color: '#1B365D' }
    ],
    neutrals: [
      { code: '19-3933', name: 'Medieval Blue', color: '#253046' },
      { code: '11-4001', name: 'Brilliant White', color: '#F5F5FF' }
    ],
    accents: [
      { code: '11-0620', name: 'Elfin Yellow', color: '#F3E5AB' },
      { code: '13-6008', name: 'Misty Jade', color: '#B5D5C5' },
      { code: '16-3617', name: 'Sheer Lilac', color: '#E0B0FF' },
      { code: '19-3730', name: 'Gentian Violet', color: '#483248' }
    ],
  }
  
  const colors2 = {
      complementaryColors: [
      { code: '13-4403', name: 'Silver Birch', color: '#D3D3D3' },
      { code: '13-4403', name: 'Silver Birch', color: '#D3D3D3' },
      { code: '13-4403', name: 'Silver Birch', color: '#D3D3D3' }
    ],
    neutrals: [
      { code: '13-4403', name: 'Silver Birch', color: '#D3D3D3' },
      { code: '13-4403', name: 'Silver Birch', color: '#D3D3D3' }
    ],
    accents: [
      { code: '13-4403', name: 'Silver Birch', color: '#D3D3D3' },
      { code: '13-4403', name: 'Silver Birch', color: '#D3D3D3' },
      { code: '13-4403', name: 'Silver Birch', color: '#D3D3D3' },
      { code: '13-4403', name: 'Silver Birch', color: '#D3D3D3' }
    ],
  }

  const colors = [colors1, colors2]

  function includesSelectedColors(colorPallete) {
    // if no color is selected, always return true
    if (selectedColorCodes.length == 0) {
      return true;
    }

    const colorsInPallete = [...colorPallete.complementaryColors, ...colorPallete.neutrals, ...colorPallete.accents];
    return selectedColorCodes.every(colorCode => colorsInPallete.map((struct) => struct.code).includes(colorCode))
  }
  
  return (
    <>
      <div className="flex flex-wrap gap-4">
        {
          colors.filter((colorPallete) => includesSelectedColors(colorPallete)).map((colorPallete, i) => (
            <ColorPalette 
              key={i}
              colors={colorPallete}
              onColorClick={onColorClick}
          />
        ))}
      </div>
    </>
  );

  function onColorClick(colorCode) {
    const newSelectedColorCodes = selectedColorCodes.slice();

    if (selectedColorCodes.includes(colorCode)) {
      newSelectedColorCodes.splice(newSelectedColorCodes.indexOf(colorCode), 1);
    } else {
      newSelectedColorCodes.push(colorCode);
    }

    console.log(newSelectedColorCodes);
    setSelectedColorCodes(newSelectedColorCodes);
    
    // Q: didn't update yet?
    // console.log(selectedColorCodes)
  }
}

export default App;
