<template>
  <div class="search">
    <div class="search-box-wrapper">
      <search-box ref="searchBox" @query="onQueryChange"></search-box>
    </div>
    <div class="shortcut-wrapper" ref="shortcutWrapper" v-show="!query">
      <scroll :refreshDelay="refreshDelay" class="shortcut" ref="shortcut" :data="shortCut">
        <div>
          <div class="hot-key">
            <h1 class="title">热门搜索</h1>
            <ul>
              <li @click="addQuery(item.k)" class="item" v-for="(item, index) in hotKey" :key="index">
                <span>{{item.k}}</span>
              </li>
            </ul>
          </div>
          <!--<div class="search-history" v-show="searchHistory.length > 0">-->
          <div class="search-history">
            <h1 class="title">
              <span class="text">搜索历史</span>
              <span class="clear" @click="showConfirm">
              <i class="icon-clear"></i>
            </span>
            </h1>
            <search-list @select="addQuery" @delete="deleteOne" :searches="searchHistory"></search-list>
          </div>
        </div>
      </scroll>
    </div>
    <div ref="searchResult" class="search-result" v-show="query">
      <suggest ref="suggest" @select="saveSearch" @listScroll="blurInput" :query="query"></suggest>
    </div>
    <confirm ref="confirm" text="是否清空所有搜索历史" confirmBtnText="清空" @confirm="deleteAll"></confirm>
    <router-view></router-view>
  </div>
</template>

<script>
  import SearchBox from 'base/search-box/search-box'
  import Suggest from 'components/suggest/suggest'
  import Scroll from 'base/scroll/scroll'
  import {getHotKey} from 'api/search'
  import {ERR_OK} from 'api/config'
  import {mapActions} from 'vuex'
  import SearchList from 'base/search-list/search-list'
  import Confirm from 'base/confirm/confirm'
  import {playListMixin, searchMixin} from 'common/js/mixin'
  export default {
    mixins: [playListMixin, searchMixin],
    data() {
      return {
        hotKey: [],
        query: ''
      }
    },

    created() {
      this._getHotKey()
    },
    methods: {
      _getHotKey() {
        getHotKey().then((res) => {
          if (res.code === ERR_OK) {
            this.hotKey = res.data.hotkey.slice(0, 10)
          }
        })
      },
      deleteOne(item) {
        this.deleteSearchHistory(item)
      },
      deleteAll() {
        this.clearSearchHistory()
      },
      showConfirm() {
        this.$refs.confirm.show()
      },
      handlePlayList(playlist) {
        const bottom = playlist.length > 0 ? '60px' : ''
        this.$refs.searchResult.style.bottom = bottom
        this.$refs.suggest.refresh()
        this.$refs.shortcutWrapper.style.bottom = bottom
        this.$refs.shortcut.refresh()
        /***
         * 假设这里的ref="user"
         * 如果ref引用的dom元素要当做vue对象使用
         * 那么就直接使用this.$refs.user.vueMethod()
         * 如果要是想要调用这个dom元素的基本HTML属性
         * 那么就要直接使用this.refs.user.DOM属性
         * 如果要想调用该引用的vue对象，又想要调用dom的基本HTML属性
         * 那么就要this.$refs.user.vueMethod()调用vue对象
         * 使用this.$refs.user.$el.DOM属性
         * console.log('this.$refs.shortcutWrapper.innerHTML')
         * console.log(this.$refs.shortcutWrapper.innerHTML)
         */
      },
      ...mapActions([
        'clearSearchHistory'
      ])
    },
    computed: {
      shortCut() {
        return this.hotKey.concat(this.searchHistory)
      }
    },
    watch: {
      query(newQuery) {
        if (!newQuery) {
          setTimeout(() => {
            this.$refs.shortcut.refresh()
          }, 200)
        }
      }
    },
    components: {
      SearchBox,
      Suggest,
      SearchList,
      Confirm,
      Scroll
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"
  .search
    .search-box-wrapper
      margin: 20px
    .shortcut-wrapper
      position: fixed
      top: 178px
      bottom: 0
      width: 100%
      .shortcut
        height: 100%
        overflow: hidden
        .hot-key
          margin: 0 20px 20px 20px
          .title
            margin-bottom: 20px
            font-size: $font-size-medium
            color: $color-text-l
          .item
            display: inline-block
            padding: 5px 10px
            margin: 0 20px 10px 0
            border-radius: 6px
            background: $color-highlight-background
            font-size: $font-size-medium
            color: $color-text-d
        .search-history
          position: relative
          margin: 0 20px
          .title
            display: flex
            align-items: center
            height: 40px
            font-size: $font-size-medium
            color: $color-text-l
            .text
              flex: 1
            .clear
              extend-click()
              .icon-clear
                font-size: $font-size-medium
                color: $color-text-d
    .search-result
      position: fixed
      width: 100%
      top: 178px
      bottom: 0
</style>
