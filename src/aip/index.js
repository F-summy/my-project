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
export async function postComment(data) {
  return await resquest.post("/api/comment", data);
}
export async function getComment(blogid, page = 1, limit = 10) {
  return await resquest.get("/api/comment", {
    params: {
      blogid,
      page,
      limit,
    },
  });
}
//获取全局设置
export async function getSetting() {
  return await resquest.get("/api/setting");
}
//关于我
export async function getAbout() {
  return await resquest.get("/api/about");
}
//效果项目
export async function getProject() {
  return await resquest.get("/api/project");
}
//留言板
export async function getMessage(page = 1, limit = 10) {
  return await resquest.get("/api/message", {
    params: {
      page,
      limit,
    },
  });
}
export async function postMessage(data) {
  return await resquest.post("/api/message", data);
}
