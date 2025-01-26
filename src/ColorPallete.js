import React from "react";

const ColorPalette = ({
  colors: { complementary, neutrals, accents },
  onColorClick,
  selectedColors,
  colorLookUpTable,
}) => {
  // Throw error if the pallete contains a color that is not defined.
  [...complementary, ...neutrals, ...accents].forEach((colorName) => {
    if (!(colorName in colorLookUpTable)) {
      throw new Error(`Color "${colorName}" not found in the lookup table.`);
    }
  });

  const pascalToSpaced = (text) => {
    return text.replace(/([A-Z])/g, (_, letter, index) => {
      return index === 0 ? letter : " " + letter;
    });
  };

  return (
    <>
      <div className="grid grid-cols-[repeat(7,_1fr)_auto] grid-rows-4 gap-4 h-72 w-115 overflow-hidden">
        {/* React needs "key" to identify each div relative to parent */}
        {complementary
          .map((colorName) => colorLookUpTable[colorName])
          .map((color, i) => {
            const shouldHighlightColor = selectedColors.includes(color.name);
            return (
              // {`${javascript whatever}`} used as f-string'
              <div
                key={color.name}
                className={`relative box-border 
                border p-1 ${shouldHighlightColor ? "" : "border-transparent"} 
                rounded bg-clip-content 
                col-span-2 row-span-3 col-start-${i * 2 + 1}`}
                style={{ backgroundColor: color.hex }}
                onClick={() => onColorClick(color.name)}
              >
                <div className="absolute bottom-0 m-2">
                  <div>{pascalToSpaced(color.name)}</div>
                  <div>{color.code} TCX</div>
                </div>
              </div>
            );
          })}
        {neutrals
          .map((colorName) => colorLookUpTable[colorName])
          .map((color, i) => (
            <div
              key={color.name}
              className={`relative col-span-3 col-start-${
                i * 3 + 1
              } row-start-4`}
              style={{ backgroundColor: color.hex }}
              onClick={() => onColorClick(color.name)}
            >
              <div className="absolute bottom-0 m-2">
                <div>{pascalToSpaced(color.name)}</div>
                <div>{color.code} TCX</div>
              </div>
            </div>
          ))}
        {accents
          .map((colorName) => colorLookUpTable[colorName])
          .map((color, i) => (
            <>
              <div
                key={color.name}
                className={`col-start-7 row-start-${i}`}
                style={{ backgroundColor: color.hex }}
                onClick={() => onColorClick(color.name)}
              ></div>
              <div className={`col-start-8 row-start-${i}`}>
                <div>{pascalToSpaced(color.name)}</div>
                <div>{color.code} TCX</div>
              </div>
            </>
          ))}
      </div>
    </>
  );
};

export default ColorPalette;
