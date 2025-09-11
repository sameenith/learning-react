import { React, useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";

export default function GitHub() {

/*
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/sameenith")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, []);
*/
  const data=useLoaderData();

  return (
    <>
      <div className="bg-gray-600 text-3xl text-white m-3 px-3 py-2 rounded-xl">
        Github Followers : {data.followers}
      </div>
      <img
        className="text-centered m-3 p-3 rounded-full"
        src={data.avatar_url}
        alt="GitHub Picture"
        width={300}
      />
    </>
  );
}

export const githubLoader = async () => {
  const response= await fetch("https://api.github.com/users/sameenith").then((res)=>res.json());
  return response;
}