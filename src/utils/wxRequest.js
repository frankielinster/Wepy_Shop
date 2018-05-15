// 把wepy导出当前脚本文件
import wepy from 'wepy'

const wxRequest = (url, params = {}) => {
  return wepy.request({
    url: wxRequest.baseURL + url,
    data: params.data || {},
    method: params.method || 'GET',
    dataType: params.dataType || 'json',
    // 设置请求头
    header: params.header || { 'Content-type': 'application/json' }
  })
}

// 设置根路径
wxRequest.baseURL = ''
export default wxRequest
