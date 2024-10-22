import { useEffect, useState } from "react";
import { productData } from "./data";

function App() {
  const [data, setData] = useState(productData);
  const [filterData, setFilteredData] = useState(data);
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [storage, SetStorage] = useState(null);

  useEffect(() => {
    let filtered = data;

    if (selectedBrand) {
      filtered = filtered.filter((item) => item.brand === selectedBrand);
    }

    if (selectedColor) {
      filtered = filtered.filter((item) => item.color === selectedColor);
    }
    if (storage) {
      filtered = filtered.filter((item) => item.storage === storage);
    }

    setFilteredData(filtered);
  }, [selectedBrand, selectedColor, data, storage]);

  console.log(selectedBrand, selectedColor);
  return (
    <div className="flex w-[90vw] mx-auto gap-10 mt-12">
      <div className="w-[20%] bg-red-100 h-[400px] flex flex-col gap-4 p-4">
        <label htmlFor="brandSelect">Select Brand:</label>
        <select
          id="brandSelect"
          onChange={(e) => setSelectedBrand(e.target.value)}
        >
          <option value="" disabled selected>
            Select a brand
          </option>
          <option value="Apple">Apple</option>
          <option value="Samsung">Samsung</option>
          <option value="Google">Google</option>
          <option value="OnePlus">OnePlus</option>
          <option value="Xiaomi">Xiaomi</option>
          <option value="Sony">Sony</option>
          <option value="Nokia">Nokia</option>
          <option value="Oppo">Oppo</option>
          <option value="Huawei">Huawei</option>
          <option value="Motorola">Motorola</option>
        </select>

        <label htmlFor="colorSelect">Select Color:</label>
        <select
          id="colorSelect"
          onChange={(e) => setSelectedColor(e.target.value)}
        >
          <option value="" disabled selected>
            Select a color
          </option>
          <option value="Red">Red</option>
          <option value="Blue">Blue</option>
          <option value="Green">Green</option>
          <option value="Black">Black</option>
          <option value="Yellow">Yellow</option>
        </select>

        <label htmlFor="colorSelect">Select Storage:</label>
        <select id="storage" onChange={(e) => SetStorage(e.target.value)}>
          <option value="" disabled selected>
            Select Storage
          </option>
          <option value="128GB">128</option>
          <option value="256GB">256</option>
        </select>
      </div>
      <div className="flex flex-wrap gap-8 w-[80%]">
        {filterData.length === 0 ? (
          <h1>No produt found </h1>
        ) : (
          filterData.map((item) => {
            return (
              <div
                className="w-64 max-w-[420px] min-h-[150px] bg-slate-300 p-4"
                key={item.id}
              >
                <p>{item.brand}</p>
                <p>{item.model}</p>
                <p>{item.price}</p>
                <p>{item.color}</p>
                <p>{item.storage}</p>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default App;
