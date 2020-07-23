import React from "react";
// Stateless component
const Weather = (props) => {
  
  // 방법1.
  // class 형태로 변경 후 fetch 선택 도시의 날씨

  // 방법2. (이 방법으로 하면 가산점)
  // react Hook << 검색
  // state, setState

  const { cityName } = props.match.params;
  console.log(cityName);
  return (
    <div>
      <h1>Weather : {cityName}</h1>
      <p>Here is front page!</p>
    </div>
  );
};
export default Weather;