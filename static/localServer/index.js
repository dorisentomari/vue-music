var express = require('express')
var app = express()
// 设置跨域访问
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'X-Requested-With')
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
  res.header('X-Powered-By', ' 3.2.1')
  res.header('Content-Type', 'application/json, charset=utf-8')
  next()
})

app.get('/getDiscList', function (req, res) {
  res.send(discList)
})

app.listen(3000)
console.log('Listening on port 3000...')

const discList = {
  'code': 0,
  'subcode': 0,
  'message': '',
  'default': 0,
  'data': {
    'uin': 0,
    'categoryId': 10000000,
    'sortId': 5,
    'sum': 5523,
    'sin': 0,
    'ein': 29,
    'list': [
      {
        'dissid': '891964140',
        'createtime': '2017-12-14',
        'commit_time': '2017-12-14',
        'dissname': '暖冬篇：寒夜与孤独 民谣与温情',
        'imgurl': 'http://p.qpic.cn/music_cover/Kwg1Hs1pPD1YBDmLn9lwWeN9FMjibTicsibDQmfn7MP65iaeq3YNNkdoOg/600?n=1',
        'introduction': '',
        'listennum': 806282,
        'score': 0,
        'version': 0,
        'creator': {
          'type': 0,
          'qq': 10901710,
          'encrypt_uin': 'oKnqoe6loKn*',
          'name': '与光',
          'isVip': 0,
          'avatarUrl': '',
          'followflag': 0
        }
      },
      {
        'dissid': '2048723012',
        'createtime': '2017-02-14',
        'commit_time': '2017-02-14',
        'dissname': '粤语回忆录：曾经让你伤感流泪的歌声',
        'imgurl': 'http://p.qpic.cn/music_cover/ezXpob9biaedyoUWFJDttESkgXCPptb7kLQSsL2wCf4aJP9MEUP5ZCg/600?n=1',
        'introduction': '',
        'listennum': 4935724,
        'score': 0,
        'version': 0,
        'creator': {
          'type': 2,
          'qq': 571909234,
          'encrypt_uin': '7KS5NKnqowoP',
          'name': 'Seve7n Day Rock',
          'isVip': 2,
          'avatarUrl': '',
          'followflag': 0
        }
      },
      {
        'dissid': '3663979435',
        'createtime': '2018-01-18',
        'commit_time': '2018-01-18',
        'dissname': '上班族的仰视：没有寒假但我还有民谣',
        'imgurl': 'http://p.qpic.cn/music_cover/FBicu030Yo6HCiavRCRg0vJMqiaaWGTqvW7qnaL638HGI5bXDSgibL0YbA/600?n=1',
        'introduction': '',
        'listennum': 39770,
        'score': 0,
        'version': 0,
        'creator': {
          'type': 0,
          'qq': 2023414120,
          'encrypt_uin': 'ownAoiv57e6Aon**',
          'name': '夏目杏林',
          'isVip': 0,
          'avatarUrl': '',
          'followflag': 0
        }
      },
      {
        'dissid': '3643794767',
        'createtime': '2018-01-10',
        'commit_time': '2018-01-10',
        'dissname': '微醺情调：约会时必听的慵懒系电音',
        'imgurl': 'http://p.qpic.cn/music_cover/1Fr9IFMhWDPeUzWKVEjn3VWKquuB8WvUqric1M0tooAXkFUcq6P6kIA/600?n=1',
        'introduction': '',
        'listennum': 35490,
        'score': 0,
        'version': 0,
        'creator': {
          'type': 0,
          'qq': 473509726,
          'encrypt_uin': '7eSi7Knq7i-s',
          'name': 'Harry',
          'isVip': 0,
          'avatarUrl': '',
          'followflag': 0
        }
      },
      {
        'dissid': '2071394673',
        'createtime': '2017-08-18',
        'commit_time': '2017-08-18',
        'dissname': '游戏高燃BGM：赛场里的多一个BUG！',
        'imgurl': 'http://p.qpic.cn/music_cover/ezXpob9biaedyoUWFJDttEXAhdF1sXtCnkKYgxEP6V7R10T2Gw1nwkw/600?n=1',
        'introduction': '',
        'listennum': 6850826,
        'score': 0,
        'version': 0,
        'creator': {
          'type': 2,
          'qq': 571909234,
          'encrypt_uin': '7KS5NKnqowoP',
          'name': 'Seve7n Day Rock',
          'isVip': 2,
          'avatarUrl': '',
          'followflag': 0
        }
      },
      {
        'dissid': '3663314789',
        'createtime': '2018-01-18',
        'commit_time': '2018-01-18',
        'dissname': '年度TOP50 决选 Best Of Best TOP10',
        'imgurl': 'http://p.qpic.cn/music_cover/h5sZEL2Fb6E2XdCBFGlYtFKV4JXjAh6HxiaOmBhM9JkgcSyz7ZmwuPw/600?n=1',
        'introduction': '',
        'listennum': 24877,
        'score': 0,
        'version': 0,
        'creator': {
          'type': 6,
          'qq': 2918691829,
          'encrypt_uin': 'owE5NeCqoKcANv**',
          'name': '中国大学生原创音乐榜',
          'isVip': 6,
          'avatarUrl': '',
          'followflag': 0
        }
      },
      {
        'dissid': '3666418579',
        'createtime': '2018-01-19',
        'commit_time': '2018-01-19',
        'dissname': '罗马尼亚 | 唯美主义的象征，陶醉与向往',
        'imgurl': 'http://p.qpic.cn/music_cover/ka2yTVAaK7TPKQf8bKAdpQl3CtSSY4wugibvzjPDCQvOpGth7s8hH9w/600?n=1',
        'introduction': '',
        'listennum': 68778,
        'score': 0,
        'version': 0,
        'creator': {
          'type': 0,
          'qq': 643711727,
          'encrypt_uin': '7wvi7i657i-l',
          'name': '這里的黎明靜悄悄',
          'isVip': 0,
          'avatarUrl': '',
          'followflag': 0
        }
      },
      {
        'dissid': '3659435626',
        'createtime': '2018-01-22',
        'commit_time': '2018-01-22',
        'dissname': '加拿大民谣：建筑科学生党通宵画图专用',
        'imgurl': 'http://p.qpic.cn/music_cover/vmfc74bEMcj5Ol9qJlS9AYnibojxsd6msDpoZsAxxChjwGt0d8wBaIg/600?n=1',
        'introduction': '',
        'listennum': 47656,
        'score': 0,
        'version': 0,
        'creator': {
          'type': 2,
          'qq': 1182030515,
          'encrypt_uin': 'oK6Fownioe457v**',
          'name': 'Shake',
          'isVip': 2,
          'avatarUrl': '',
          'followflag': 0
        }
      },
      {
        'dissid': '3664324188',
        'createtime': '2018-01-19',
        'commit_time': '2018-01-19',
        'dissname': '动感EDM：工作狂及时完成任务的加速器',
        'imgurl': 'http://p.qpic.cn/music_cover/MhQ4bJBPt3Yt5icXyBGNhyIJibhCD2qU4uialew0KEotXzNezqCibRtOxA/600?n=1',
        'introduction': '',
        'listennum': 77073,
        'score': 0,
        'version': 0,
        'creator': {
          'type': 0,
          'qq': 452775188,
          'encrypt_uin': '7e4A7iSkoKcF',
          'name': '还不是因为你长得不好看',
          'isVip': 0,
          'avatarUrl': '',
          'followflag': 0
        }
      },
      {
        'dissid': '1478611135',
        'createtime': '2017-08-23',
        'commit_time': '2017-08-23',
        'dissname': '暴力美学：用重金属演绎的古典乐名曲',
        'imgurl': 'http://p.qpic.cn/music_cover/Mbno07sCmbib3CRFCbPMU6T32ppxB8hoibqjC3sRolziciasb5soQzePhg/600?n=1',
        'introduction': '',
        'listennum': 68755,
        'score': 0,
        'version': 0,
        'creator': {
          'type': 0,
          'qq': 2568676172,
          'encrypt_uin': 'ow4sNeCl7w6loc**',
          'name': '暗黑精灵',
          'isVip': 0,
          'avatarUrl': '',
          'followflag': 0
        }
      },
      {
        'dissid': '3657483331',
        'createtime': '2018-01-16',
        'commit_time': '2018-01-16',
        'dissname': '情归民谣：应一场老景 念一段旧情',
        'imgurl': 'http://p.qpic.cn/music_cover/X9lmt3gQ1KkaezXF13jX32EgmeueKjZQCCHnQGqEZInlqBFxd3WwTg/600?n=1',
        'introduction': '',
        'listennum': 436015,
        'score': 0,
        'version': 0,
        'creator': {
          'type': 2,
          'qq': 1079096147,
          'encrypt_uin': 'oKnlNKnq7w6P7z**',
          'name': '蘑菇',
          'isVip': 2,
          'avatarUrl': '',
          'followflag': 0
        }
      },
      {
        'dissid': '3600120801',
        'createtime': '2017-12-14',
        'commit_time': '2017-12-14',
        'dissname': '耍帅扮酷全靠它！撩妹专用30首欧美男嗓',
        'imgurl': 'http://p.qpic.cn/music_cover/llTQ9l2AeicK2OLIORnsUdqVl04Qba6kD5y00UckpFRNucRwr1nlicRA/600?n=1',
        'introduction': '',
        'listennum': 1192944,
        'score': 0,
        'version': 0,
        'creator': {
          'type': 2,
          'qq': 348361207,
          'encrypt_uin': 'oivFoiC5ownl',
          'name': '风少',
          'isVip': 2,
          'avatarUrl': '',
          'followflag': 0
        }
      },
      {
        'dissid': '3636670407',
        'createtime': '2018-01-07',
        'commit_time': '2018-01-07',
        'dissname': '有些话一直想对歌单达人说了',
        'imgurl': 'http://p.qpic.cn/music_cover/A68o1S3cCg2seVsQVvbZBmPqiczgWIa67m3Keva8OdDka4p87zkFm1A/600?n=1',
        'introduction': '',
        'listennum': 348759,
        'score': 0,
        'version': 0,
        'creator': {
          'type': 0,
          'qq': 3083067593,
          'encrypt_uin': 'oinFoins7i4qoz**',
          'name': '冬天吃了秋天',
          'isVip': 0,
          'avatarUrl': '',
          'followflag': 0
        }
      },
      {
        'dissid': '3654500917',
        'createtime': '2018-01-18',
        'commit_time': '2018-01-18',
        'dissname': '全场20块！助力卖场疯狂促销的电子乐',
        'imgurl': 'http://p.qpic.cn/music_cover/MhQ4bJBPt3Yt5icXyBGNhyPJnE9O51CqawbsmnA0Gr90OZKpewibHoAw/600?n=1',
        'introduction': '',
        'listennum': 36703,
        'score': 0,
        'version': 0,
        'creator': {
          'type': 0,
          'qq': 452775188,
          'encrypt_uin': '7e4A7iSkoKcF',
          'name': '还不是因为你长得不好看',
          'isVip': 0,
          'avatarUrl': '',
          'followflag': 0
        }
      },
      {
        'dissid': '3634438084',
        'createtime': '2018-01-17',
        'commit_time': '2018-01-17',
        'dissname': '套路世界，耿直BOY听了这歌也学会撩妹',
        'imgurl': 'http://p.qpic.cn/music_cover/llTQ9l2AeicK2OLIORnsUdqcTWnKmcuGgVLytHblRg35zia421rFc6jg/600?n=1',
        'introduction': '',
        'listennum': 225367,
        'score': 0,
        'version': 0,
        'creator': {
          'type': 2,
          'qq': 348361207,
          'encrypt_uin': 'oivFoiC5ownl',
          'name': '风少',
          'isVip': 2,
          'avatarUrl': '',
          'followflag': 0
        }
      },
      {
        'dissid': '3648141471',
        'createtime': '2018-01-12',
        'commit_time': '2018-01-12',
        'dissname': '“见到我车尾再说吧” | 头文字D',
        'imgurl': 'http://p.qpic.cn/music_cover/Mbno07sCmbib3CRFCbPMU6UkC57xJh4ia4ibbZTwM2icedrfMqqzBYwDOg/600?n=1',
        'introduction': '',
        'listennum': 523024,
        'score': 0,
        'version': 0,
        'creator': {
          'type': 0,
          'qq': 2568676172,
          'encrypt_uin': 'ow4sNeCl7w6loc**',
          'name': '暗黑精灵',
          'isVip': 0,
          'avatarUrl': '',
          'followflag': 0
        }
      },
      {
        'dissid': '2065445092',
        'createtime': '2017-06-22',
        'commit_time': '2017-06-22',
        'dissname': '爵士名伶|裹着香甜的优雅嗓子',
        'imgurl': 'http://p.qpic.cn/music_cover/G4TbibkcBn5ZGjoicUG69iaWGWX0PB9FazicvDjmah4RxGP4qZBKu9jpicQ/600?n=1',
        'introduction': '',
        'listennum': 287078,
        'score': 0,
        'version': 0,
        'creator': {
          'type': 0,
          'qq': 519473114,
          'encrypt_uin': '7K6q7eSioK6P',
          'name': '浅岛先生',
          'isVip': 0,
          'avatarUrl': '',
          'followflag': 0
        }
      },
      {
        'dissid': '1492757198',
        'createtime': '2017-12-13',
        'commit_time': '2017-12-13',
        'dissname': '50首有花的歌名：想你是在下雨天',
        'imgurl': 'http://p.qpic.cn/music_cover/ibntviciboJuwCoCNK8ibZkjerJONTHNQ4EOicGDg8qbickRjS5Y8Mdcyb1g/600?n=1',
        'introduction': '',
        'listennum': 466622,
        'score': 0,
        'version': 0,
        'creator': {
          'type': 0,
          'qq': 3024244602,
          'encrypt_uin': 'oinA7e-P7eCzoc**',
          'name': 'Allen',
          'isVip': 0,
          'avatarUrl': '',
          'followflag': 0
        }
      },
      {
        'dissid': '894666786',
        'createtime': '2017-12-04',
        'commit_time': '2017-12-04',
        'dissname': ' 电气R&B：氤氲梦境里的别样温柔',
        'imgurl': 'http://p.qpic.cn/music_cover/7XEVurTOuWkv53uNkwvuohtc4wPibYnFDYUgcxU5ksVOpS0gDQzSiaKA/600?n=1',
        'introduction': '',
        'listennum': 335759,
        'score': 0,
        'version': 0,
        'creator': {
          'type': 0,
          'qq': 2215105840,
          'encrypt_uin': 'ow-57K6z7KcPon**',
          'name': 'Pure_Lavender',
          'isVip': 0,
          'avatarUrl': '',
          'followflag': 0
        }
      },
      {
        'dissid': '3648908465',
        'createtime': '2018-01-12',
        'commit_time': '2018-01-12',
        'dissname': '歌手第二季歌曲合集',
        'imgurl': 'http://p.qpic.cn/music_cover/JBDCVgqXWXaYUvcsElqcicSclCsLGy3pSUBt28EkurcPYExW0xibPTDg/600?n=1',
        'introduction': '',
        'listennum': 324955,
        'score': 0,
        'version': 0,
        'creator': {
          'type': 2,
          'qq': 3414308253,
          'encrypt_uin': 'oiv57eozNe-koz**',
          'name': '鹅猴综艺狸',
          'isVip': 2,
          'avatarUrl': '',
          'followflag': 0
        }
      },
      {
        'dissid': '3644393285',
        'createtime': '2018-01-10',
        'commit_time': '2018-01-10',
        'dissname': '【回忆殇】90后成长道路上的英文旋律',
        'imgurl': 'http://p.qpic.cn/music_cover/SXTicaprnQbfAyiaibTsguPlB7HuGjyr1dSRIgly4Xm3NU9992xlsnc8w/600?n=1',
        'introduction': '',
        'listennum': 182574,
        'score': 0,
        'version': 0,
        'creator': {
          'type': 2,
          'qq': 2640839003,
          'encrypt_uin': 'owCPoeciNKnzoz**',
          'name': '毕业雨季',
          'isVip': 2,
          'avatarUrl': '',
          'followflag': 0
        }
      },
      {
        'dissid': '3640436676',
        'createtime': '2018-01-09',
        'commit_time': '2018-01-09',
        'dissname': '2017年度华语播放量 Top 50',
        'imgurl': 'http://p.qpic.cn/music_cover/gaSSCRswoq7NlpHA8vK1PqyLwqhQyDq52O4O6qia7zLnyeDNmeOfeZw/600?n=1',
        'introduction': '',
        'listennum': 6462457,
        'score': 0,
        'version': 0,
        'creator': {
          'type': 0,
          'qq': 3239619075,
          'encrypt_uin': 'oi-iNKC5NKnl7v**',
          'name': '歌单狂魔',
          'isVip': 0,
          'avatarUrl': '',
          'followflag': 0
        }
      },
      {
        'dissid': '2356366127',
        'createtime': '2018-01-18',
        'commit_time': '2018-01-18',
        'dissname': '睡个好觉！百首安静纯音助你入眠',
        'imgurl': 'http://p.qpic.cn/music_cover/0GgOOrIBQ14wNzmVraZQ5TV5D3CpgRtmxnxtTOd4JB4xkqCicoic7MRQ/600?n=1',
        'introduction': '',
        'listennum': 1258246,
        'score': 0,
        'version': 0,
        'creator': {
          'type': 0,
          'qq': 1209430845,
          'encrypt_uin': 'oK-zNKvioecP7v**',
          'name': 'DesTiny',
          'isVip': 0,
          'avatarUrl': '',
          'followflag': 0
        }
      },
      {
        'dissid': '3664467534',
        'createtime': '2018-01-18',
        'commit_time': '2018-01-18',
        'dissname': '旅行青蛙 | 真巧，你家青蛙也还没回家呀',
        'imgurl': 'http://p.qpic.cn/music_cover/3gNibArB0BKquGve7mp3bdg6YycBJ1e2pOcuH5Ljgloy865kNNS9Lsw/600?n=1',
        'introduction': '',
        'listennum': 334184,
        'score': 0,
        'version': 0,
        'creator': {
          'type': 0,
          'qq': 2083172477,
          'encrypt_uin': 'ownFoi6lowvl7z**',
          'name': '焦糖玛奇朵',
          'isVip': 0,
          'avatarUrl': '',
          'followflag': 0
        }
      },
      {
        'dissid': '3622955470',
        'createtime': '2018-01-04',
        'commit_time': '2018-01-04',
        'dissname': '内地摇滚新势力｜值得世界期待的声音',
        'imgurl': 'http://p.qpic.cn/music_cover/0yiaX8d9LSmnROyId1RsUUwWMgNYfeYF3QgVc7yaicZojaqN65bIIF1w/600?n=1',
        'introduction': '',
        'listennum': 210662,
        'score': 0,
        'version': 0,
        'creator': {
          'type': 0,
          'qq': 707665875,
          'encrypt_uin': '7inl7wCkNeSk',
          'name': '哔咯独角兽 ,',
          'isVip': 0,
          'avatarUrl': '',
          'followflag': 0
        }
      },
      {
        'dissid': '3657812468',
        'createtime': '2018-01-16',
        'commit_time': '2018-01-16',
        'dissname': '古风纯音 | 暗损韶华 一缕茶烟透碧纱',
        'imgurl': 'http://p.qpic.cn/music_cover/CJ35Z2cnZA0kWwtIMrxsbgM5XnJYCO5jpusYhHMicOxFzwyOrDJao6g/600?n=1',
        'introduction': '',
        'listennum': 146748,
        'score': 0,
        'version': 0,
        'creator': {
          'type': 0,
          'qq': 86010258,
          'encrypt_uin': 'NeCzoKnA7Kc*',
          'name': '霜泧',
          'isVip': 0,
          'avatarUrl': '',
          'followflag': 0
        }
      },
      {
        'dissid': '3635457374',
        'createtime': '2018-01-15',
        'commit_time': '2018-01-15',
        'dissname': '焦虑症滚开! 励志英文给我的一缕暖阳',
        'imgurl': 'http://p.qpic.cn/music_cover/iciaoSVS8WxkXbvAfpPWAcDZESzC0bJUEY2p8Zptcw3H4ibcPqNnMCbibw/600?n=1',
        'introduction': '',
        'listennum': 515541,
        'score': 0,
        'version': 0,
        'creator': {
          'type': 0,
          'qq': 2093612768,
          'encrypt_uin': 'ownqoiC5owSsNn**',
          'name': '纯真，傻的可笑',
          'isVip': 0,
          'avatarUrl': '',
          'followflag': 0
        }
      },
      {
        'dissid': '3634945575',
        'createtime': '2018-01-08',
        'commit_time': '2018-01-08',
        'dissname': '致前任：你以为我不会走，我以为你会留',
        'imgurl': 'http://p.qpic.cn/music_cover/X9lmt3gQ1KkaezXF13jX3yDqG1XgKQrnMOYq7I7ialLL5CicPmyRBABw/600?n=1',
        'introduction': '',
        'listennum': 5148205,
        'score': 0,
        'version': 0,
        'creator': {
          'type': 2,
          'qq': 1079096147,
          'encrypt_uin': 'oKnlNKnq7w6P7z**',
          'name': '蘑菇',
          'isVip': 2,
          'avatarUrl': '',
          'followflag': 0
        }
      },
      {
        'dissid': '3644605971',
        'createtime': '2018-01-10',
        'commit_time': '2018-01-10',
        'dissname': '村上春树推荐的跑步歌单',
        'imgurl': 'http://p.qpic.cn/music_cover/uXtIBAxaiaVfmdYhOibK1Dg96xKUiaEDicico6HaGDR3x75aFLNGVBmqKiaw/600?n=1',
        'introduction': '',
        'listennum': 381350,
        'score': 0,
        'version': 0,
        'creator': {
          'type': 0,
          'qq': 482219519,
          'encrypt_uin': '7ecAow6q7K6q',
          'name': 'K先生的猫',
          'isVip': 0,
          'avatarUrl': '',
          'followflag': 0
        }
      },
      {
        'dissid': '3630943145',
        'createtime': '2018-01-04',
        'commit_time': '2018-01-04',
        'dissname': '不用去电音节：超长电音一首就够了！',
        'imgurl': 'http://p.qpic.cn/music_cover/tLkiayu4IiaIZo1t56qczThg9oz1icG6jsibAvTRg578X9LblqkPgP3SXg/600?n=1',
        'introduction': '',
        'listennum': 34926,
        'score': 0,
        'version': 0,
        'creator': {
          'type': 0,
          'qq': 431971379,
          'encrypt_uin': '7eo5NKS5oiSq',
          'name': '吢',
          'isVip': 0,
          'avatarUrl': '',
          'followflag': 0
        }
      }
    ]
  }
}
