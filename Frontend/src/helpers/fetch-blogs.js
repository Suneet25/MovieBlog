import config from "@/config";
export let fetchBlogs = async (filter) => {
  let reqOption = {
    headers: {
      Authorization: `Bearer ${process.env.API_TOKEN}`,
    },
  };
  let request = await fetch(`${config.api}/api/blogs?populate=*&${filter}&per_page=25`, reqOption);
  let response = await request.json();
  return response.data;
};
