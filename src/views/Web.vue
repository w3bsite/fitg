<template>
  <div>
    <h2>{{ title }}</h2>
  </div>
</template>
<script>
export default {
  name: "key",
  data() {
    return {
      title: this.$vm.name,
    };
  },
};
</script>
