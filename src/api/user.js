import { request, requestWithoutLoading } from "@/utils"

export const getUserDetail = uid =>
  requestWithoutLoading.get("/user/detail", { params: { uid, proxy: "http://111.231.140.109:8888" } })

const PLAYLIST_LIMIT = 1000
export const getUserPlaylist = uid =>
  requestWithoutLoading.get("/user/playlist", { params: { uid, limit: PLAYLIST_LIMIT } })

export const loginByPhone = params =>
  request.request({
    url: "/login/cellphone",
    method: "get",
    params: params
  })

export const loginByEmail = params =>
  request.request({
    url: "/login",
    method: "get",
    params: params
  })
export const logout = () =>
  request.request({
    url: "/logout",
    method: "get"
  })
export const getlikelist = params =>
  request.request({
    url: "/likelist",
    method: "get",
    params: params
  })
