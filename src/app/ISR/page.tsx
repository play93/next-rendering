export type Posts = {
  id: number;
  title: string;
  author: string;
};

const SSGPage = async () => {
  const response = await fetch("http://localhost:4000/posts", {
    next: {
      revalidate: 3, // 3초마다 한번씩 렌더링
    },
  });
  const data: Posts[] = await response.json();
  console.log("render");

  return (
    <div>
      <h1>ISR 렌더링 입니다.</h1>
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

export default SSGPage;
