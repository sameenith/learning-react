import React from "react";
import { use } from "react";
import { useParams } from "react-router-dom";

export default function User() {
  const { id } = useParams();
  return (
    <>
      <h1 className="text-3xl bg-gray-600 text-white rounded-xl m-3 px-3 py-2">
        User :{id}
      </h1>
    </>
  );
}
