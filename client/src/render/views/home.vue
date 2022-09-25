<template>
  <el-container>
    <!-- 音乐头部 -->
    <el-header style="height: 60px; padding: 0">
      <div class="app_header_nav" :style="backgroundColor">
        <!-- 左部分 -->
        <div class="flex_y">
          <!-- 头部图标 -->
          <div class="header_nav_icon pointer">
            <img width="24" src="../assets/img/jie.jpg" alt="" />
          </div>
          <!-- 标题 -->
          <h2 class="header_nav_title web-font pointer" style="font-size: 19px">
            网抑云音乐
          </h2>
          <!-- 切换按钮 搜索框 听歌识曲 -->
          <div class="header_nav_middle_1" style="margin-left: 100px">
            <!-- 后退按钮 -->
            <div class="circle_icon">
              <span class="iconfont icon-prev"></span>
            </div>
            <!-- 前进按钮 -->
            <div class="circle_icon marginL10">
              <span class="iconfont icon-next"></span>
            </div>
            <!-- 搜索框 -->
            <div class="search_box" style="margin-left: 12px">
              <span
                class="iconfont icon-search"
                style="margin-left: 12px"
              ></span>
              <input type="text" placeholder="搜索" />
            </div>
            <!-- 听歌识曲 -->
            <div class="circle_icon identify marginL10">
              <span
                class="iconfont icon-huatong"
                style="font-size: 23px"
              ></span>
            </div>
          </div>
        </div>
        <!-- 右部分 -->
        <div class="flex_y">
          <!-- 换肤 设置 消息 -->
          <div class="header_nav_middle_1">
            <!-- 换肤 -->
            <div class="circle_icon none_background_color marginL10">
              <span class="iconfont icon-yifu" style="font-size: 20px"></span>
            </div>
            <!-- 设置 -->
            <div class="circle_icon none_background_color marginL10">
              <span class="iconfont icon-shezhi" style="font-size: 20px"></span>
            </div>
            <!-- 消息 -->
            <div class="circle_icon none_background_color marginL10">
              <span class="iconfont icon-xiaoxi" style="font-size: 20px"></span>
            </div>
          </div>
          <!-- 竖线 -->
          <span class="col_line"></span>
          <!-- mini模式 最小化 全屏 退出 -->
          <div class="header_nav_middle_1">
            <!-- mini -->
            <div class="circle_icon none_background_color">
              <span class="iconfont icon-mini" style="font-size: 16px"></span>
            </div>
            <!-- 最小化 -->
            <div class="circle_icon none_background_color marginL10">
              <span
                class="iconfont icon-zuixiaohua"
                style="font-size: 16px"
                @click="minWindow"
              ></span>
            </div>
            <!-- 全屏 -->
            <div class="circle_icon none_background_color marginL10">
              <span
                class="iconfont icon-quanping"
                style="font-size: 16px"
                @click="maxWindow"
              ></span>
            </div>
            <!-- 退出 -->
            <div class="circle_icon none_background_color marginL10">
              <span
                class="iconfont icon-close"
                style="font-size: 16px"
                @click="closeWindow"
              ></span>
            </div>
          </div>
        </div>
      </div>
    </el-header>
    <!-- 中间部分 -->
    <el-container ref="contentRef" style="height: 540px">
      <!--侧栏 -->
      <el-aside width="200px">
        <el-menu
          :default-active="'index'"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          :router="true"
          style="height: 100%"
        >
          <el-menu-item
            v-for="({ title, disable, icon, path }, index) in menuArr"
            :index="path"
            :route="path"
            :key="`key${index}_${title}`"
            :disabled="disable"
          >
            <el-icon v-if="icon !== ''"
              ><span class="iconfont icon-prev"></span
            ></el-icon>
            <span>{{ title }}</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <!-- 内容部分 -->
      <el-main style="padding: 0">
        <!-- 路由 -->
        <!-- <transition name="component-fade">
          <router-view></router-view>
        </transition> -->
        <router-view v-slot="{ Component }" id="routerView">
          <transition name="component-fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </el-main>
    </el-container>
    <!-- 底部播放导航 -->
    <el-footer style="height: 70px; padding: 0">
      <div class="app_bottom_nav"></div>
    </el-footer>
  </el-container>
</template>

<script setup lang="ts">
import { ref, getCurrentInstance, onMounted, reactive } from "vue";

const menuArr: Array<menuArrObject> = [
  { title: "发现音乐", disable: false, icon: "", path: "index" },
  { title: "播客", disable: false, icon: "", path: "playBlog" },
  { title: "视频", disable: false, icon: "", path: "video" },
  { title: "朋友", disable: false, icon: "", path: "friend" },
  { title: "直播", disable: false, icon: "", path: "zhibo" },
  { title: "私人FM", disable: false, icon: "", path: "fm" },
  { title: "我的音乐", disable: true, icon: "", path: "/" },
  { title: "本地与下载", disable: false, icon: "", path: "localDownload" },
  { title: "最近播放", disable: false, icon: "", path: "latestPlay" },
];

let backgroundColor = ref(`background-color:rgba(245,245,245)`);
const closeWindow = () => {
  ipcRenderer.send("close");
};
const minWindow = () => {
  ipcRenderer.send("minimize");
};
const maxWindow = () => {
  ipcRenderer.send("maximize");
};
const handleOpen = (key: string, keyPath: string[]) => {
  //   console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  //   console.log(key, keyPath);
};
const state = reactive<any>({ contentRef: null });
const contentRef = ref(null);
onMounted(() => {
  // 根据主进程返回的窗口参数对 根节点高度、内容高度 进行设置

  ipcRenderer.on("resizeEvent", (event, arg) => {
    const realHeight = document.documentElement.clientHeight;
    console.log("获取到的高度", realHeight, contentRef);
    //  设置内容部分高度 130:头部nav + 底部nav
    contentRef.value.$el.style.height = `${realHeight - 130}px`;
  });
});
</script>
<style lang="scss" scoped>
.app_header_nav {
  height: 100%;
  // padding: 15px
  padding: 0 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  //
  -webkit-app-region: drag;
}
.header_nav_icon {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  overflow: hidden;
  -webkit-app-region: no-drag;
}
.header_nav_title {
  padding-left: 5px;
  -webkit-app-region: no-drag;
}
.header_nav_middle_1 {
  display: flex;
  align-items: center;
  -webkit-app-region: no-drag;
}
.float_right {
  float: right;
}
/* ----------------搜索框样式----------------- */
.search_box {
  width: 160px;
  height: 32px;
  display: flex;
  align-items: center;
  border-radius: 20px;
  background-color: rgba(234, 234, 234, $alpha: 0.8);
  -webkit-app-region: no-drag;
}
input {
  outline-style: none;
  border: 0px;
  margin-left: 5px;
  background-color: rgba(234, 234, 234, $alpha: 0.8);
  width: 90px;
  font-family: "font_diy_1";
}
input::-webkit-input-placeholder {
  font-family: "font_diy_1";
}
/* ----------------搜索框样式----------------- */
.identify {
  width: 32px;
  height: 32px;
}

/* ----------------底部样式------------------- */
.app_bottom_nav {
  height: 100%;
  background-color: rgba(234, 234, 234, $alpha: 0.4);
}
/* ----------------底部样式------------------- */
/* ----------------element样式----------------- */
.el-menu-item.is-disabled {
  cursor: pointer;
}
.el-menu-item {
  height: 40px;
}
/* ----------------路由动画-------------------- */
.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity 0.3s ease;
}

.component-fade-enter-from,
.component-fade-leave-to {
  opacity: 0;
}
</style>
