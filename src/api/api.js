import wxRequest from '../utils/wxRequest'
import appConfig from '../utils/appConfig'

// 设置请求api的根路径
wxRequest.baseURL = `${appConfig.HTTP_BAST_URL}/api/public/v1/`

// 获取轮播图数据
const getHomeSwiper = params => {
  return wxRequest('home/swiperdata', params).then(res => res.data)
}

// 获取导航栏数据
const getHomeNav = params => {
  return wxRequest('home/catitems', params).then(res => res.data)
}

// 获取楼层数据
const getHomeFloor = params => {
  return wxRequest('home/floordata', params).then(res => res.data)
}

// 统一导出api方法
export default {
  getHomeSwiper,
  getHomeNav,
  getHomeFloor
}
