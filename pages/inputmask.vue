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
    fetch("https://rawgit.com/RobinHerbots/Inputmask/5.x/README.md", {
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
