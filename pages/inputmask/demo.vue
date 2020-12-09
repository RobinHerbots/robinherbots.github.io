<template>
  <div class="container">
    <h1>TODO</h1>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState } = createNamespacedHelpers("repos");
export default {
  layout: "sidebar",
  data: () => {
    return {
    };
  },
  computed: {
    ...mapState(["md"])
  }
};
</script>

<style>

</style>
