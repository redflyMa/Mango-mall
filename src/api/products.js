import request,{post,get} from '@/utils/request'
import axios from 'axios'

//获取商品列表
export function productList(data) {
  return axios.get("http://192.168.11.132:1314/api/detail").then(res=>{
    console.log(res)
  }).catch(err=>{
    console.log(err)
  })
}
