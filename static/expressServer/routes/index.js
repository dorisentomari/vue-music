var express = require('express');
var router = express.Router();
var axios = require('axios')
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index');
});

router.get('/getSingerList', function (req, res) {
  res.render('getSingerList')
})

router.get('/getSingerDetail', function (req, res) {
  res.render('getSingerDetail')
})

router.get('/getSongLyric', function (req, res) {
  console.log('pppp')
  var params = {
    g_tk: 5381,
    uin: 0,
    format: 'json',
    inCharset: 'utf-8',
    outCharset: 'utf-8',
    notice: 0,
    platform: 'h5',
    needNewCode: 1,
    _: 1517235137670
  }
  var url = 'https://c.y.qq.com/lyric/fcgi-bin/fcg_query_lyric_new.fcg?'
  axios.get(url, {
    headers: {
      'access-control-allow-origin': 'https://y.qq.com',
      'referer': 'https://y.qq.com/portal/playlist.html',
      'authority': 'c.y.qq.com'
    },
    // params: params
  }).then((res) => {
    console.log(res.data)
    let ret = res.data
    if (typeof ret === 'string') {
      let reg = /^\w+\(({[^()]+})\)$/
      let matches = ret.match(reg)
      if (matches) {
        ret = JSON.parse(matches[1])
      }
    }
    res.send(ret)
  }).catch((e) => {
    console.log(e)
  })
})

router.get('/getDiscList', function (req, res) {
  var url = 'https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg?picmid=1&rnd=0.7617648498185632&g_tk=777098020&jsonpCallback=getPlaylist&loginUin=1047766372&hostUin=0&format=jsonp&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0&categoryId=10000000&sortId=5&sin=0&ein=29'
  var params = {
    picmid: 1,
    g_tk: 777098020,
    hostUin: 0,
    format: 'json',
    jsonpCallback: 'getPlaylist',
    inCharset: 'utf8',
    outCharset: 'utf-8',
    notice: 0,
    platform: 'yqq',
    needNewCode: 0,
    categoryId: 10000000,
    sortId: 5,
    sin: 0,
    ein: 29,
    rnd: Math.random()
  }
  axios.get(url, {
    headers: {
      'access-control-allow-origin': 'https://y.qq.com',
      'access-control-allow-credentials': true,
      'referer': 'https://y.qq.com/portal/playlist.html',
      'authority': 'c.y.qq.com'
    },
    // params: req.query
  }).then((response) => {
    console.log(req.query)
    console.log(response.data)
    let ret = response.data
    if (typeof ret === 'string') {
      let reg = /^\w+\(({[^()]+})\)$/
      let matches = ret.match(reg)
      if (matches) {
        ret = JSON.parse(matches[1])
      }
    }
    console.log('ret------', ret)
    res.json(ret)
  }).catch((e) => {
    console.log(e)
  })
})

module.exports = router;