<template>
  <div class="container">
    <VueShowdown :markdown="md" />
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapMutations, mapState, mapActions } = createNamespacedHelpers("repos");

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
    this.setReadmeUrl("https://cdn.jsdelivr.net/gh/RobinHerbots/Inputmask@5.x/README_numeric.md");
    this.fetchMarkDown();
  },
  methods: {
    ...mapMutations(["setReadmeUrl"]),
    ...mapActions(["fetchMarkDown"])
  }
};
</script>

<style>

</style>
