import resquest from "../axios/request";
//获取首页
export async function getBanner() {
  return await resquest.get("/api/banner");
}
//文章页
export async function getBlogType() {
  return await resquest.get("/api/blogtype");
}
export async function getBlog(page = 1, limit = 10, id = -1) {
  return await resquest.get("/api/blog", {
    params: {
      page,
      limit,
      id,
    },
  });
}

//文章详情页
export async function getBlogId(id) {
  return await resquest.get(`/api/blog/${id}`);
}
//提交获取评论
export async function postCommont(data) {
  return await resquest.post("/api/comment", data);
}
export async function getComment(blogid, page = 1, limit = 10) {
  return await request.get("/api/comment", {
    params: {
      blogid,
      page,
      limit,
    },
  });
}
