<script setup>
class MyCustomElement extends HTMLElement {
  constructor() {
    super();
    this.name = "";
  }

  connectedCallback() {
    console.log(this.getAttribute("name"))
    console.log("自定义元素添加至页面。");
  }
}

customElements.define("aa-bb", MyCustomElement);
</script>

<template>
  <div>
    vue3-demo
    <aa-bb name="111" age="22"></aa-bb>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
