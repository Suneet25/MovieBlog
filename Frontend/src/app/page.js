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
 console.log("BLOGS",blogs);
  return (
    <div className="row">
  <h1>HOME</h1>
  {
    blogs?.map((blog)=>{
      return <div key={blog.id}><h3>{blog.id}-{blog.attributes.Title}</h3></div>
    })
  }
  </div>
  )
}
