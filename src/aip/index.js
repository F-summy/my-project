import resquest from "../axios/request";

export async function getBanner() {
  return await resquest.get("/api/banner");
}
