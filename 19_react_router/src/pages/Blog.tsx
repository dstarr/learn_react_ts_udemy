import { useParams } from "react-router-dom";

const Blog = () => { 
  const { id } = useParams();
  
  
  
  return (

    <>
      <title>Blog</title>
      <meta name="description" content="Blog page" />

      <div className="flex container mx-auto py-8">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold">Blog page</h1>
          <p>Blog ID: {id}</p>
        </div>
      </div>
    </>
  );
};

export default Blog;
