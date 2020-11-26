<template>
  <div class="container">
    <VueShowdown :markdown="md" />
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapGetters } = createNamespacedHelpers("repos");

export default {
  layout: "sidebar",
  data: () => {
    return {
      md: ""
    };
  },
  computed: { ...mapGetters(["personalRepos"]) },
  mounted () {
    let readmeUrl = "https://cdn.jsdelivr.net/gh/RobinHerbots/Inputmask@5.x/README.md";
    const targetRepository = this.personalRepos.filter(pr => `|${pr.name.toLowerCase()}` === this.$route.params.repository.toLowerCase())[0];
    if (targetRepository) { readmeUrl = `${targetRepository.html_url}@${targetRepository.default_branch}/README.md`.replace("https://github.com", "https://cdn.jsdelivr.net/gh"); }

    fetch(readmeUrl, {
      method: "get"
    })
      .then((response) => {
        return response.text();
      }).then((txtResponse) => {
        this.md = txtResponse;
      });
  }
};
</script>

<style>

</style>
