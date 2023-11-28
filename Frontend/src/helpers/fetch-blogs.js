import config from "@/config";
export let fetchBlogs = async (filter) => {
  let reqOption = {
    headers: {
      Authorization: `Bearer ${process.env.API_TOKEN}`,
    },
  };
  let request = await fetch(
    `${config.api}/api/blogs?populate=*&${filter}&per_page=30`
  );
  let response = await request.json();
  return response.data;
};

export let fetchLandingPageContent = async () => {
  let reqOption = {
    headers: {
      Authorization: `Bearer ${process.env.API_TOKEN}`,
    },
  };
  let request = await fetch(
    `${config.api}/api/movie-blog-landings?populate=*`,
    reqOption
  );
  let response = await request.json();
  return response.data;
};
