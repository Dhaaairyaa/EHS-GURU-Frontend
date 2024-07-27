import React, { useState, useEffect } from 'react';
import ProductsData from "../../data/ProductsData";
import ProductCard from "./ProductCard"; 

const Products = () => {
  const [currentVal, setCurrentVal] = useState("ErgoTattva");
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const item = ProductsData.find(item => item.productName.toLowerCase() === currentVal.toLowerCase());
    setSelectedProduct(item);
  }, [currentVal]);

  return (
    <div className="bg-white pl-28 pr-28 pt-20 pb-20">
      <h1 className="text-5xl">Our Products</h1>

      <div className="flex space-x-3 mt-5">
        <div
          onClick={() => setCurrentVal("ErgoTattva")}
          className={`rounded-full relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium border-2 border-[#175b34] ${currentVal === "ErgoTattva" ? "bg-[#175b34] text-white scale-105" : "text-[#175b34] hover:text-white group hover:bg-gray-50"}`}
        >
          <span className="absolute left-0 block w-full h-0 transition-all bg-[#175b34] opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-600 ease"></span>
          <span className="relative">ErgoTattva</span>
        </div>

        <div
          onClick={() => setCurrentVal("RuleSutra")}
          className={`rounded-full relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium border-2 border-[#175b34] ${currentVal === "RuleSutra" ? "bg-[#175b34] text-white scale-105" : "text-[#175b34] hover:text-white group hover:bg-gray-50"}`}
        >
          <span className="absolute left-0 block w-full h-0 transition-all bg-[#175b34] opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
          <span className="relative">RuleSutra</span>
        </div>

        <div
          onClick={() => setCurrentVal("WasteYukti")}
          className={`rounded-full relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium border-2 border-[#175b34] ${currentVal === "WasteYukti" ? "bg-[#175b34] text-white scale-105" : "text-[#175b34] hover:text-white group hover:bg-gray-50"}`}
        >
          <span className="absolute left-0 block w-full h-0 transition-all bg-[#175b34] opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
          <span className="relative">WasteYukti</span>
        </div>
      </div>

      <div>
        {selectedProduct ? (
          <ProductCard 
            key={selectedProduct.id} // ensure component re-renders with new key
            name={selectedProduct.productName}
            heading={selectedProduct.heading}
            description={selectedProduct.description}
            url={selectedProduct.url}
            imageUrl={selectedProduct.imageUrl}
            productLogo={selectedProduct.productLogoUrl}
            stats={selectedProduct.stats}
          />
        ) : (
          <p>No product found</p>
        )}
      </div>
    </div>
  );
};

export default Products;
