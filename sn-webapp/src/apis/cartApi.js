const BASEURL='http://39.106.101.238:3001'
const CARTURL = `${BASEURL}/cars`
export default {
  /**
     * 获取店铺的信息
     */
  async getCartInfoByUserId () {
    let res = await fetch(CARTURL)
    let data = await res.json()
    return data
  },
   // home数据获取
  async getHomeData () {
    let res = await fetch('http://localhost:3000/cart')
    let data = await res.json()
    return data
  }
}
