<template>
  <Transition mode="out-in" v-bind="listeners">
    <slot />
  </Transition>
</template>
<script lang="ts" setup>
  import { addClass, hasClass, removeClass } from './utils'
  import type { TransitionProps } from 'vue'

  defineOptions({
    name: 'CollapseTransition'
  })

  const opacityCls = 'menu-opacity-transition'
  const collapseCls = 'menu--collapse'

  const listeners = {
    // 在元素被插入到 DOM 之前被调用
    // 用这个来设置元素的 "enter-from" 状态
    onBeforeEnter: (el: HTMLElement) => (el.style.opacity = '0.2'),
    // 在元素被插入到 DOM 之后的下一帧被调用
    // 用这个来开始进入动画
    onEnter(el: HTMLElement, done: () => void) {
      addClass(el, opacityCls)
      el.style.opacity = '1'
      done()
    },
    // 当进入过渡完成时调用
    onAfterEnter(el: HTMLElement) {
      removeClass(el, opacityCls)
      el.style.opacity = ''
    },
    // 在 leave 钩子之前调用
    // 大多数时候，你应该只会用到 leave 钩子
    onBeforeLeave(el: HTMLElement) {
      if (!el.dataset) {
        ;(el as any).dataset = {}
      }

      if (hasClass(el, collapseCls)) {
        removeClass(el, collapseCls)
        el.dataset.oldOverflow = el.style.overflow
        el.dataset.scrollWidth = el.clientWidth.toString()
        addClass(el, collapseCls)
      } else {
        addClass(el, collapseCls)
        el.dataset.oldOverflow = el.style.overflow
        el.dataset.scrollWidth = el.clientWidth.toString()
        removeClass(el, collapseCls)
      }

      el.style.width = `${el.scrollWidth}px`
      el.style.overflow = 'hidden'
    },
    // 在离开过渡开始时调用
    // 用这个来开始离开动画
    onLeave(el: HTMLElement) {
      addClass(el, 'horizontal-collapse-transition')
      el.style.width = `${el.dataset.scrollWidth}px`
    },
    // 在离开过渡完成、
    // 且元素已从 DOM 中移除时调用
    fonAfterLeave(el: HTMLElement) {
      console.log('fonAfterLeave===>', el)
    },
    // 仅在 v-show 过渡中可用
    onLeaveCancelled(el: HTMLElement) {
      console.log('onLeaveCancelled===>', el)
    }
  } as unknown as TransitionProps
</script>
