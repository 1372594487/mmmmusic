<template>
  <el-container>
    <!--发现音乐 导航 -->
    <el-header class="index_header">
      <el-menu
        :default-active="'recommendation'"
        class="el-menu-vertical-demo"
        mode="horizontal"
        @open="handleOpen"
        @close="handleClose"
        :router="true"
        style="height: 100%"
      >
        <el-menu-item
          v-for="({ title, path }, index) in indexList"
          :index="path"
          :route="path"
          :key="`key${index}_${title}`"
        >
          <span>{{ title }}</span>
        </el-menu-item>
      </el-menu>
    </el-header>
    <!--发现音乐 内容部分 -->
    <el-main class="index_content">
      <router-view v-slot="{ Component }">
        <transition name="component-fade" mode="out-in">
          <keep-alive>
            <component :is="Component" />
          </keep-alive>
        </transition>
      </router-view>
    </el-main>
  </el-container>
</template>
<script lang="ts">
export default {
  beforeRouteEnter(to, from) {
    // called before the route that renders this component is confirmed.
    // does NOT have access to `this` component instance,
    // because it has not been created yet when this guard is called!
    console.log("special to=>", to);
  },
  beforeRouteUpdate(to, from) {
    // called when the route that renders this component has changed,
    // but this component is reused in the new route.
    // For example, given a route with params `/users/:id`, when we
    // navigate between `/users/1` and `/users/2`, the same `UserDetails` component instance
    // will be reused, and this hook will be called when that happens.
    // Because the component is mounted while this happens, the navigation guard has access to `this` component instance.
  },
  beforeRouteLeave(to, from) {
    // called when the route that renders this component is about to
    // be navigated away from.
    // As with `beforeRouteUpdate`, it has access to `this` component instance.
  },
};
</script>
<script setup lang="ts">
import { ref, getCurrentInstance, onMounted, reactive } from "vue";
const instance = getCurrentInstance();
let activeName = ref("recommendation");
const indexList: Array<menuArrObject> = [
  { title: "个性推荐", path: "recommendation" },
  { title: "专属定制", path: "customization" },
  { title: "歌单", path: "songSheet" },
  { title: "排行榜", path: "rankingList" },
  { title: "歌手", path: "singer" },
  { title: "最新音乐", path: "latestMusic" },
];
const handleOpen = (key: string, keyPath: string[]) => {
  //   console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  //   console.log(key, keyPath);
};
onMounted(() => {
  console.log("instance=>", instance);
});
</script>

<style lang="scss" scoped>
.index_header {
  //   padding: 10px 0 10px;
}

.index_content {
  // 80:
  //   height: calc(100% - 80px);
  overflow: scroll;
}
/* ----------------element-------------------- */
:deep(.el-tabs__nav-wrap::after) {
  width: 0 !important;
}
.el-menu--horizontal .el-menu-item:not(.is-disabled):focus,
.el-menu--horizontal .el-menu-item:not(.is-disabled):hover {
  background-color: unset;
}
.el-menu--horizontal {
  border-bottom: unset;
}
.el-container {
  height: 100%;
}
.el-main {
}
/* ----------------element-------------------- */

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