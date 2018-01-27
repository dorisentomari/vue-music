import jsonp from 'common/js/jsonp'
import {commonParams, options} from './config'

export function getSingerList() {
  const url = 'https://c.y.qq.com/v8/fcg-bin/v8.fcg'
  // const url = 'http://localhost:3000/getSingerList'
  const data = Object.assign({}, commonParams, {
    channel: 'singer',
    page: 'list',
    // key: 'all_all_all', // 全部歌手
    key: 'cn_man_all', // 华语男
    // key: 'cn_woman_all', // 华语女
    // key: 'cn_team_all', // 华语组合
    // key: 'k_man_all', // 韩国男
    // key: 'k_woman_all', // 韩国女
    // key: 'k_team_all', // 韩国组合
    // key: 'j_man_all', // 日本男
    // key: 'j_woman_all', // 日本女
    // key: 'j_team_all', // 日本组合
    // key: 'eu_man_all', // 欧美男
    // key: 'eu_woman_all', // 欧美女
    // key: 'eu_team_all', // 欧美组合
    // key: 'c_orchestra_all', // 乐团
    // key: 'c_performer_all', // 演奏家
    // key: 'c_composer_all', // 作曲家
    // key: 'c_cantor_all', // 指挥家
    // key: 'other_other_all', // 其他
    pagesize: 100,
    pagenum: 1,
    g_tk: 5381,
    hostUin: 0,
    format: 'json',
    notice: 0,
    platform: 'yqq',
    needNewCode: 0
  })
  return jsonp(url, data, options)
}

export function getSingerDetail(singerId) {
  const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg?'
  const data = Object.assign({}, commonParams, {
    hostUin: 0,
    needNewCode: 0,
    platForm: 'yqq',
    order: 'listen',
    begin: 0,
    number: 100,
    songstatus: 1,
    singermid: singerId,
    g_tk: 5381
  })
  return jsonp(url, data, options)
}
