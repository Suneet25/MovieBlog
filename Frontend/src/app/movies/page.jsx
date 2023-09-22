import BlogDetails from "@/components/BlogDetails";
import Card from "@/components/Card";
import config from "@/config"
let fetchBlogs=async()=>{
let reqOption={
    headers:{
      Authorization:`Bearer ${process.env.API_TOKEN}`
    }
}
let request=await fetch(`${config.api}/api/blogs?populate=*`,reqOption);
let response=await request.json()
return response.data
}
export default async function Home() {
  let blogs=await fetchBlogs()
//  console.log("BLOGS",blogs[0].attributes.FeaturedImage.data.attributes.url);
console.log(blogs[0])
  return (
    <div className="row  max-w-7xl m-auto py-10">
  <h1 className="font-semibold text-3xl">HOME</h1>
<div className="mt-5  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3   " >

  {
    blogs?.map((blog)=>{
      return   <Card category={blog.attributes.Category}  title={blog.attributes.Title} href={`/${blog.attributes.slug}`}  imageUrl={`${config.api}${blog.attributes.FeaturedImage.data.attributes.url}`}/> 
    })
  }
  </div>

  </div>
  )
}
