<template>
  <div class="container">
    <VueShowdown :markdown="md" />
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions } = createNamespacedHelpers("repos");

export default {
  layout: "sidebar",
  data: () => {
    return {
    };
  },
  computed: {
    ...mapState(["md"])
  },
  mounted () {
    this.fetchRepoReadme();
  },
  methods: { ...mapActions(["fetchRepoReadme"]) }
};
</script>

<style>

</style>
