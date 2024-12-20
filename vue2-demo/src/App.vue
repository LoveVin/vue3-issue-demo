<template>
    <div>
        <p>vue2-demo</p>
        <aa-bb name="111" age="22"></aa-bb>
    </div>
</template>

<script>
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

export default {
    name: "App"
}
</script>