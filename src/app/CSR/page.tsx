"use client";

import React, { useEffect, useState } from "react";

export type Posts = {
  id: number;
  title: string;
  author: string;
};

const fetchData = async () => {
  const response = await fetch("http://localhost:4000/posts", {
    cache: "no-store", // 유저가 렌더링 할 때마다 렌더링 됨
  });
  const data: Posts[] = await response.json();

  return data;
};

const CSRPage = () => {
  const [data, setData] = useState<Posts[]>([]);

  useEffect(() => {
    console.log("render");
    fetchData().then(setData);
  }, []);

  return (
    <div>
      <h1>CSR 렌더링 입니다.</h1>
      <div className="p-8 m-4">
        {data.map((posts) => (
          <div key={posts.id}>
            <div className="flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-bold">제목: {posts.title}</h2>
                <p className="text-sm">글쓴이: {posts.author}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CSRPage;
