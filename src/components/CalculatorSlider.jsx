import React from "react";
import Slider from "rc-slider";
import styled from "styled-components";
import "rc-slider/assets/index.css";

export default function CalculatorSlider({
  title,
  min,
  max,
  currency,
  value = 0,
  onUpdateValue,
}) {
  const handleSliderChange = (newValue) => {
    onUpdateValue(newValue);
  };

  const handleInputChange = (e) => {
    if (e.target.value) {
      const newValue = parseFloat(e.target.value.replace(/[^0-9.]/g, ""));
      onUpdateValue(newValue);
    } else {
      onUpdateValue(min);
    }
  };

  const verifyInput = (e) => {
    console.log(e.target.value);
    if (e.target.value < min) {
      onUpdateValue(min);
    } else if (e.target.value > max) {
      onUpdateValue(max);
    }
  };

  function formatNumber(number) {
    return number.toLocaleString("en-US", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
  }

  return (
    <>
      <SliderContainer>
        <RowSpaceBetween>
          <Title> {title}</Title>
          <TotalContainer>
            <span>{currency ? "$" : ""}</span>
            <Input
              type="number"
              value={value}
              onChange={handleInputChange}
              onBlur={verifyInput}
              min={min}
              max={max}
            />
          </TotalContainer>
        </RowSpaceBetween>
        <div style={{ padding: "10px" }}>
          <Slider
            min={min}
            max={max}
            count={1}
            value={value}
            step={1}
            onChange={handleSliderChange}
            marks={{
              [min]: {
                style: { color: "white" },
                label: `${currency ? "$" : ""}${formatNumber(min)}`,
              },
              [max]: {
                style: { color: "white" },
                label: `${currency ? "$" : ""}${formatNumber(max)}`,
              },
            }}
          />
        </div>
      </SliderContainer>
    </>
  );
}

const SliderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const RowSpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const TotalContainer = styled.div`
  border: 1px solid #dfdcdc;
  padding: 0 12px;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  width: 100px;
  display: flex;
`;
const Input = styled.input`
  background-color: transparent;
  border: none;
  font-weight: bold;
  display: flex;
  align-items: center;
  text-align: center;
  font-size: 16px;
  width: 1px;
  flex: 1;
  outline: none;
  -moz-appearance: textfield;
  appearance: textfield;
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
const Title = styled.div`
  font-size: 12px;
`;
