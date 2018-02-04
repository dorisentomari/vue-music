var express = require('express')
var router = express.Router()
var axios = require('axios')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index')
})

router.get('/getSingerList', function (req, res) {
  res.render('getSingerList')
})

router.get('/getSingerDetail', function (req, res) {
  res.render('getSingerDetail')
})

router.get('/getSongLyric', function (req, res) {
  console.log('req.query')
  console.log(req.query)
  var params = {
    callback: 'MusicJsonCallback_lrc',
    pcachetime: 1517318242342,
    songmid: '001WDDO12p5QAS',
    g_tk: 777098020,
    jsonpCallback: 'MusicJsonCallback_lrc',
    hostUin: 0,
    format: 'jsonp',
    inCharset: 'utf8',
    outCharset: 'utf-8',
    notice: 0,
    platform: 'yqq',
    needNewCode: 0
  }
  // var url = 'https://c.y.qq.com/lyric/fcgi-bin/fcg_query_lyric_new.fcg?callback=MusicJsonCallback_lrc&pcachetime=1517318242342&g_tk=777098020&jsonpCallback=MusicJsonCallback_lrc&hostUin=0&format=jsonp&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0&songmid=' + req.query.songmid
  // var url = 'https://c.y.qq.com/lyric/fcgi-bin/fcg_query_lyric_new.fcg?'
  var url = 'https://c.y.qq.com/lyric/fcgi-bin/fcg_query_lyric_new.fcg?callback=MusicJsonCallback_lrc&pcachetime=1517318242342&g_tk=777098020&jsonpCallback=MusicJsonCallback_lrc&hostUin=0&format=jsonp&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0&songmid=00009UE30ipmqo'
  console.log(req.query.songmid)
  console.log(url)
  axios.get(url, {
    headers: {
      'access-control-allow-origin': 'https://y.qq.com',
      'access-control-allow-credentials': true,
      'referer': 'https://y.qq.com/portal/playlist.html',
      'authority': 'c.y.qq.com'
    },
    params: params
  }).then((response) => {
    let ret = response.data
    res.json(ret)
  }).catch((e) => {
    console.log(e)
  })
})

router.get('/getDiscList', function (req, res) {
  console.log('req.query')
  console.log(req.query)
  var url = 'https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg?picmid=1&rnd=0.7617648498185632&g_tk=777098020&jsonpCallback=getPlaylist&loginUin=1047766372&hostUin=0&format=jsonp&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0&categoryId=10000000&sortId=5&sin=0&ein=29'
  // var url = 'https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg?'
  var params = {
    picmid: 1,
    rnd: Math.random(),
    g_tk: 777098020,
    jsonpCallback: 'getPlaylist',
    hostUin: 0,
    format: 'jsonp',
    inCharset: 'utf8',
    outCharset: 'utf-8',
    notice: 0,
    platform: 'yqq',
    needNewCode: 0,
    categoryId: 10000000,
    sortId: 5,
    sin: 0,
    ein: 29
  }
  axios.get(url, {
    headers: {
      'access-control-allow-origin': 'https://y.qq.com',
      'access-control-allow-credentials': true,
      'referer': 'https://y.qq.com/portal/playlist.html',
      'authority': 'c.y.qq.com'
    },
    params: req.query
  }).then((response) => {
    console.log('response')
    console.log(response.data)
    let ret = response.data
    if (typeof ret === 'string') {
      let reg = /^\w+\(({[^()]+})\)$/
      let matches = ret.match(reg)
      if (matches) {
        ret = JSON.parse(matches[1])
      }
    }
    res.json(ret)
  }).catch((e) => {
    console.log(e)
  })
})

router.get('/getSongList', function (req, res) {
  res.render('getSongList')
})

router.get('/getTopList', function (req, res) {
  res.render('getTopList')
})

module.exports = router
