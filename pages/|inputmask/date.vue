<template>
  <div class="container">
    <VueShowdown :markdown="md" />
  </div>
</template>

<script>
export default {
  layout: "sidebar",
  data: () => {
    return {
      md: ""
    };
  },
  mounted () {
    const readmeUrl = "https://cdn.jsdelivr.net/gh/RobinHerbots/Inputmask@5.x/README_date.md";

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
