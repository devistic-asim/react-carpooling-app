import React from "react";
import { useQuery } from "react-query";

const fetchData = async () => {
  // Simulating an API call or asynchronous data fetching
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: "Item 1" },
        { id: 2, name: "Item 2" },
        { id: 3, name: "Item 3" },
        // Add more dummy data as needed
      ]);
    }, 1000); // Simulating a delay of 1 second
  });
};

const ExampleComponent = () => {
  const { data, isLoading, isError } = useQuery("exampleQuery", fetchData);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching data</p>;

  // Use the 'data' variable in your component logic
  return (
    <div>
      {data.map((item) => (
        // Render each item in the data array
        <p key={item.id}>{item.name}</p>
      ))}
    </div>
  );
};

export default ExampleComponent;
