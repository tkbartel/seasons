import React from "react";

const ColorPalette = ({
  colors: { complementary, neutrals, accents },
  onColorClick,
  selectedColors,
  colorLookUpTable,
}) => {
  // [...complementary, ...neutrals, ...accents].forEach((name) => {
  //   if (!colorLookUpTable[name]) {
  //     console.log(name);
  //   }
  // });

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
                  <div>{color.name}</div>
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
                <div>{color.name}</div>
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
                <div>{color.name}</div>
                <div>{color.code} TCX</div>
              </div>
            </>
          ))}
      </div>
    </>
  );
};

export default ColorPalette;
