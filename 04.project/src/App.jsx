import React from "react";
import Card from "./components/Card";
import data from "./assets/MOCK_DATA (1).json";

const App = () => {
  return (
    <div className="grid grid-cols-1 justify-items-center 2xl:grid-cols-4 lg:grid-cols-3 gap-4 mt-10 p-4">
      {data.map((data) => (
        <Card
          name={data.name}
          job={data.job}
          totalLike={data.totalLike}
          totalComment={data.totalComment}
          totalShare={data.totalShare}
        />
      ))}
    </div>
  );
};

export default App;
