import React from 'react';

const ColorPalette = () => {
  const complementaryColors = [
    { code: '13-4403', name: 'Silver Birch', color: '#D3D3D3' },
    { code: '17-3934', name: 'Persian Jewel', color: '#7B88C7' },
    { code: '19-3952', name: 'Surf the Web', color: '#1B365D' }
  ];

  const neutrals = [
    { code: '19-3933', name: 'Medieval Blue', color: '#253046' },
    { code: '11-4001', name: 'Brilliant White', color: '#F5F5FF' }
  ];
// grid-cols-[repeat(7,_1fr)_auto]
// grid-cols-
// grid-template-columns: 1fr 1fr 1fr 1fr ... auto
  const accents = [
    { code: '11-0620', name: 'Elfin Yellow', color: '#F3E5AB' },
    { code: '13-6008', name: 'Misty Jade', color: '#B5D5C5' },
    { code: '16-3617', name: 'Sheer Lilac', color: '#E0B0FF' },
    { code: '19-3730', name: 'Gentian Violet', color: '#483248' }
  ];

  return (
    <>
    <div className="grid grid-cols-7 grid-rows-4 gap-4 h-72 w-115">

    {/* React needs "key" to identify each div relative to parent */}
    {complementaryColors.map((color, i) => (
        // {`${javascript whatever}`} used as f-string 
        <div 
        key={color.name}
        className={`relative col-span-2 row-span-3 col-start-${i * 2 + 1}`} 
        style={{ backgroundColor: color.color }}>
            <div className="absolute bottom-0 m-2">
                <div>{color.name}</div>
                <div>{color.code} TCX</div>
            </div>
        </div>

        
    ))}
    {neutrals.map((color, i) => (
        <div 
        key={color.name}
        className={`relative col-span-3 col-start-${i * 3 + 1} row-start-4`} 
        style={{ backgroundColor: color.color }}>
            <div className="absolute bottom-0 m-2">
                <div>{color.name}</div>
                <div>{color.code} TCX</div>
            </div>
        </div>
    ))}
    {accents.map((color, i) => (
        <div 
        key={color.name}
        className={`relative col-start-7 row-start-${i}`} 
        style={{ backgroundColor: color.color }}>
            <div className="absolute bottom-0 -right-28 m-2">
                <div>{color.name}</div>
                <div>{color.code} TCX</div>
            </div>
        </div>
    ))}
    </div>
    </>
  );
};

export default ColorPalette;