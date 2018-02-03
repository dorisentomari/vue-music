<template>
  <transition name="slide">
    <music-list :title="title" :bg-image="bgImage" :songs="songs"></music-list>
  </transition>
</template>

<script>
  import MusicList from 'components/music-list/music-list'
  import {mapGetters} from 'vuex'
  import {getSongList} from 'api/recommend'
  import {ERR_OK} from 'api/config'
  import {createSong} from 'common/js/song'
  export default {
    data() {
      return {
        songs: []
      }
    },
    components: {
      MusicList
    },
    created() {
      this._getSongList()
    },
    computed: {
      title() {
        return this.disc.dissname
      },
      bgImage() {
        return this.disc.imgurl
      },
      ...mapGetters([
        'disc'
      ])
    },
    methods: {
      _getSongList() {
        /****
         * 由于传递的是写死的数据，那么也就是说路由切换的时候，是不传递参数dissid
         * 换句话说，dissid是一个空值
         * 那么对this.disc.dissid进行路由判断的行为就应该被取消
         * 如果要是正常传递dissid，就需要进行路由判断
         */
//        if (!this.disc.dissid) {
//        this.$router.push('/recommend')
        console.log('debug line')
        getSongList(3261874488).then((res) => {
          console.log(res)
          if (res.code === ERR_OK) {
            this.songs = this._normalizaSongs(res.cdlist[0].songlist)
          }
        })
//        }
      },
      _normalizaSongs(list) {
        let ret = []
        list.forEach((musicData) => {
          if (musicData.songid && musicData.albumid) {
            ret.push(createSong(musicData))
          }
        })
        return ret
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .slide-enter-active, .slide-leave-active
    transition: all 0.3s
  
  .slide-enter, .slide-leave-to
    transform: translate3d(100%, 0, 0)
</style>
