<template>
  <div class="page-container">
    <img :src="transitionImg" />

    <SectionTitle>基于CSS过渡效果</SectionTitle>
    <div class="section-content">
      <el-button size="small" type="primary" @click="show = !show">切换动画</el-button>
      <Transition>
        <div class="content" v-if="show">{{ content }}</div>
      </Transition>
    </div>

    <SectionTitle>过渡效果命名</SectionTitle>
    <div class="section-content">
      <el-button size="small" type="primary" @click="show2 = !show2">切换动画</el-button>
      <Transition name="fade">
        <div class="content" v-if="show2">{{ content }}</div>
      </Transition>
    </div>

    <SectionTitle>过渡效果命名</SectionTitle>
    <div class="section-content">
      <el-button size="small" type="primary" @click="show3 = !show3">切换动画</el-button>
      <Transition name="list">
        <div class="content" v-if="show3">{{ content }}</div>
      </Transition>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import { ref } from 'vue'
  import transitionImg from '@/assets/images/transition.png'
  const content = '百度翻译 依托互联网数据资源和自然语言处理技术优势，致力于帮助用户跨越语言鸿沟，方便快捷地获取信息和服务。支持全球200多个语言互译，覆盖4万多个翻译方向，通过开放平台支持超过50万企业和个人开发者，是国内市场份额第一的翻译类产品。'
  const show = ref(false)
  const show2 = ref(false)
  const show3 = ref(false)
</script>
<style lang="scss">
  .v-enter-active,
  .v-leave-active {
    transition: opacity 0.5s ease;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }

  .list-enter-active,
  .list-leave-active {
    transition: all 0.1s linear;
  }
  .list-enter-from,
  .list-leave-to {
    opacity: 0;
    transform: translateX(30px);
  }

  .page-container {
    img {
      width: 50%;
    }
    .section-content {
      min-height: 120px;
      width: 80%;

      .content {
        padding: 10px 0;
      }
    }
  }
</style>
