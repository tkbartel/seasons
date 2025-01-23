import logo from "./logo.svg";
import "./App.css";
import ColorPalette from "./ColorPallete";
import { useState } from "react";
import colors_json from "./true-winter-colors-hex.json";
import palettes from "./palettes.json";

function App() {
  const [selectedColors, setSelectedColors] = useState([]);

  // Make a dictionary "Color Name" -> {TCX, Hex RGB value, Color Name}
  const colorLookUpTable = {};
  colors_json.colors.forEach((color_struct) => {
    colorLookUpTable[color_struct.name] = color_struct;
  });

  // const colors1 = {
  //   complementaryColors: [
  //     { code: '13-4403', name: 'Silver Birch', color: '#D3D3D3' },
  //     { code: '17-3934', name: 'Persian Jewel', color: '#7B88C7' },
  //     { code: '19-3952', name: 'Surf the Web', color: '#1B365D' }
  //   ],
  //   neutrals: [
  //     { code: '19-3933', name: 'Medieval Blue', color: '#253046' },
  //     { code: '11-4001', name: 'Brilliant White', color: '#F5F5FF' }
  //   ],
  //   accents: [
  //     { code: '11-0620', name: 'Elfin Yellow', color: '#F3E5AB' },
  //     { code: '13-6008', name: 'Misty Jade', color: '#B5D5C5' },
  //     { code: '16-3617', name: 'Sheer Lilac', color: '#E0B0FF' },
  //     { code: '19-3730', name: 'Gentian Violet', color: '#483248' }
  //   ],
  // }

  function includesSelectedColors(colorPallete) {
    // if no color is selected, always return true
    if (selectedColors.length == 0) {
      return true;
    }

    const colorsInPallete = [
      ...colorPallete.complementary,
      ...colorPallete.neutrals,
      ...colorPallete.accents,
    ];
    return selectedColors.every((color) => colorsInPallete.includes(color));
  }

  return (
    <>
      <div className="flex flex-wrap gap-4">
        {palettes
          .filter((colorPallete) => includesSelectedColors(colorPallete))
          .map((colorPallete, i) => (
            <ColorPalette
              key={i}
              colors={colorPallete}
              onColorClick={onColorClick}
              selectedColors={selectedColors}
              colorLookUpTable={colorLookUpTable}
            />
          ))}
      </div>
    </>
  );

  function onColorClick(colorName) {
    const newSelectedColors = selectedColors.slice();

    if (selectedColors.includes(colorName)) {
      newSelectedColors.splice(newSelectedColors.indexOf(colorName), 1);
    } else {
      newSelectedColors.push(colorName);
    }

    console.log(newSelectedColors);
    setSelectedColors(newSelectedColors);

    // Q: didn't update yet?
    // console.log(selectedColorCodes)
  }
}

export default App;
