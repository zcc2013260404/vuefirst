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
    let res = await fetch('http://localhost:3000/xiaomi')
    let data = await res.json()
    return data
  },
  //classify数据获取
  async getClassifyData () {
    let res = await fetch('http://localhost:3000/xiaomi/classify')
    let data = await res.json()
    return data
  },
  async getClassData () {
    let res = await fetch('http://localhost:3000/xiaomi/class')
    let data = await res.json()
    return data
  },
  async getCarData () {
    let res = await fetch('http://localhost:3000/xiaomi/cart')
    let data = await res.json()
    return data
  },
}
