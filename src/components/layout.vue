<template>
  <div class="app_wapper">
      <el-container>
<!--        左侧菜单-->
        <el-aside class="slider_container">
          <el-scrollbar class="default-scrollbar" wrap-class="default-scrollbar__wrap" view-class="default-scrollbar__view">
                  <div>
                    <el-menu
                      :default-active="defActive"
                      class="el-menu-vertical-demo"
                      unique-opened
                      text-color="#fff"
                      background-color="#545c64"
                      router>
                      <side-menus  :menu="item" :key="item.name" v-for="item in $router.options.routes[1].children" v-if="item.menu"></side-menus>
                    </el-menu>
                  </div>
          </el-scrollbar>
        </el-aside>
<!--        右侧页面-->
        <el-container class="app_content" style="margin-top: 0">
          <el-header style="text-align: right;font-size: 12px;">
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-button @click="signOut">退出</el-button>
          </el-header>
          <el-main>
            <!-- 路由容器 -->
            <router-view></router-view>
          </el-main>
        </el-container>
      </el-container>
  </div>
</template>

<script>
    import _ from 'lodash'
    import sideMenus from "@/components/sideMenus";
    export default {
        name: "layout",
      components: {sideMenus},
       data () {
          return {
            asideWidth: '230px',
            vmenus: [],
            defActive: this.activePath(),
          }
        },
        created () {
        },
        watch: {
          $route () {
            this.defActive = this.activePath()
          }
        },
        methods: {
          // 计算菜单当前选中的路径
          activePath () {
            let path = this.$route.path
            let pathArr = _.split(path, '/')
            let l = pathArr.length
            if (l <= 2) {
              return path
            }
            let menus = this.$router.options.routes
            if (_.isEmpty(menus)) {
              return path
            }
            let i = 1
            let children = menus
            while (i < l) {
              path = _.join(_.slice(pathArr, 0, i + 1), '/')
              let index = _.findIndex(children, {'path': path})
              if (index < 0) {
                break
              }
              if (!children[index]) {
                break
              }
              if (children[index]['hasChildren'] === false || !children[index]['children'] || _.isEmpty(children[index]['children'])) {
                break
              }
              children = children[index]['children']
              i++
            }
            return path
          },
          //退出
          signOut(){
            this.$router.push({path:'/login'})
          }
        }
    }
</script>

<style scoped>
  .app_wapper {
    position: relative;
    height: 100%;
    width: 100%;
  }

  .app_wapper .el-aside,
  .slider_container .el-menu {
    color: #333;
    transition: width .28s;
    width: 180px !important;
    height: 100%;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 1001;
    background-color: rgb(48, 65, 86);
  }
  .el-menu{
    background-color: rgb(48, 65, 86)
  }
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  .app_content {
    min-height: 500px;
    margin-left: 170px;
    border: 1px solid #eee;
    box-sizing: border-box;
  }
</style>
