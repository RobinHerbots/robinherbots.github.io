<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        {{ title }}
      </h1>
      <h2 class="subtitle">
        {{ subtitle }}
      </h2>
      <div class="links">
        <nuxt-link to="/inputmask" class="button--green">
          Enter
        </nuxt-link>
        <a :href="github" target="_blank" class="button--grey">GitHub</a>
      </div>
    </div>
    <VueShowdown :markdown="md" />
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";

export default {
  components: {
    Logo
  },
  data: () => {
    return {
      title: "sMarter entertainment",
      subtitle: "robinherbots.github.io",
      github: "https://github.com/RobinHerbots",
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

<style lang="scss" scoped>
@import "~rfs/scss";

.container {
  margin: 0 auto;
  height: 100vh;
  // display: flex;
  justify-content: center;
  // align-items: center;
  // text-align: center;

  overflow : auto;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  @include rfs(100px);
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  @include rfs(42px);
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
