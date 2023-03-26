"use client"

import React, { useState } from 'react'

type Props = {}

const PriceSlider = (props: Props) => {
    const [maxPrice, setMaxPrice] = useState<number>(1000);

  return (
    <div className="filterItem">
      <div className="inputItem">
        <span>0</span>
        <input
          type="range"
          min={0}
          max={1000}
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
        />
        <span>{maxPrice}</span>
      </div>
    </div>
  );
}

export default PriceSlider