<template>
  <div class="section-title">
    <span class="section-title__bar"></span>
    <span><slot></slot></span>
  </div>
</template>
<style lang="scss">
.section-title {
  display: flex;
  align-items: center;
  line-height: 1;
  font-size: 15px;
  font-weight: 700;
  margin-bottom: 18px;
  margin-top: 10px;

  .section-title__bar {
    display: inline-block;
    width: 4px;
    height: 1em;
    margin-right: 10px;
    background-color: var(--primary-color);
  }
}
</style>
