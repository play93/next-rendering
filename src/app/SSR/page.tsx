export type Posts = {
  id: number;
  title: string;
  author: string;
};

const SSRPage = async () => {
  const response = await fetch("http://localhost:4000/posts", {
    cache: "no-store",
  });
  const data: Posts[] = await response.json();
  console.log("render");

  return (
    <div>
      <h1>SSR 렌더링 입니다.</h1>
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

export default SSRPage;
