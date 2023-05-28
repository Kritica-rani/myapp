import React, { useEffect, useState } from "react";
import ToggleComp from "./ToggleComp";

export const LearningEffect = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("kritica");
  const [post, setPost] = useState([]);
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    console.log("Inside useEffect");
    document.title = `counter : ${count}`;
  }, [count]);

  useEffect(() => {
    fetchPost();
  }, []);

  const fetchPost = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts");
    const jsonData = await data.json();
    setPost(jsonData);
  };
  const handleClick = (item) => {
    console.log("item", item);
  };
  console.log("toggle", toggle);
  return (
    <div>
      LearningEffect
      <h1>Effect hook : {count}</h1>
      <h2>Name:{name}</h2>
      {post &&
        post.map((item) => {
          return (
            <li key={item.id} onClick={() => handleClick(item)}>
              {item.title}
            </li>
          );
        })}
      {/* <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setName("xyz")}>ChangeName</button> */}
      {/* <button onClick={() => setToggle(!toggle)}>Toggle Button</button>
      {toggle && <ToggleComp />} */}
    </div>
  );
};
