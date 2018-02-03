import jsonp from 'common/js/jsonp'
import {commonParams, options} from './config'
import axios from 'axios'

export function getRecommend() {
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
  const data = Object.assign({}, commonParams, {
    uin: 0,
    platform: 'h5',
    needNewCode: 1
  })
  return jsonp(url, data, options)
}

export function getDiscList() {
  const url = 'http://localhost:3000/getDiscList'
  const data = Object.assign({}, commonParams, {
    picmid: 1,
    platform: 'yqq',
    g_tk: 777098020,
    hostUin: 0,
    sortId: 5,
    sin: 0,
    ein: 29,
    needNewCode: 0,
    categoryId: 10000000,
    rnd: Math.random(),
    format: 'jsonp',
    jsonpCallback: 'getPlaylist',
    inCharset: 'utf8',
    outCharset: 'utf-8',
    notice: 0
  })
  return axios.get(url, {
    params: data
  }).then((response) => {
    let ret = response.data
    return Promise.resolve(ret)
  })
}

export function getSongList(disstid) {
  const url = 'http://localhost:3000/getSongList'
  const data = Object.assign({}, commonParams, {
    disstid,
    type: 1,
    json: 1,
    utf8: 1,
    onlysong: 0,
    platform: 'yqq',
    hostUin: 0,
    format: 'jsonp',
    g_tk: 777098020
  })
  return axios.get(url, {
    params: data
  }).then((response) => {
    return Promise.resolve(response.data)
  })
}
