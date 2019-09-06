import storage from "good-storage"
import { UID_KEY } from "@/utils"
import { notify, isDef } from "@/utils"
import { getUserDetail, getUserPlaylist, loginByPhone, loginByEmail, logout } from "@/api"

export default {
  async login({ commit }, res) {
    const error = () => {
      notify.error("登录失败，请输入正确的uid。")
      return false
    }

    const { loginType, data } = res

    try {
      let method = loginType === "email" ? loginByEmail : loginByPhone
      let info = await method(data)
      let uid = info.profile.userId
      // const user = await getUserDetail(uid)
      // const { profile } = user
      commit("setUser", info.profile)
      storage.set(UID_KEY, uid)
      const { playlist } = await getUserPlaylist(uid)
      commit("setUserPlaylist", playlist)
      return true
    } catch (e) {
      return error()
    }
  },
  logout({ commit }) {
    logout()
    commit("setUser", {})
    commit("setUserPlaylist", [])
    storage.set(UID_KEY, null)
  }
}
