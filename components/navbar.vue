<template>
  <div>
    <b-navbar toggleable="lg" :type="type" :variant="variant" sticky>
      <!-- <b-button id="sidebarToggle" v-b-toggle.sidebar :variant="variant" :title="title">
        <span class="navbar-toggler-icon" />
      </b-button>-->
      <b-navbar-toggle target="nav-collapse" />
      <b-navbar-brand href="/">
        <Logo width="70px" height="70px" />
      </b-navbar-brand>
      <b-nav-text>{{ brand }}</b-nav-text>
    </b-navbar>
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
      brand: "sMarter entertainment",
      type: "dark",
      variant: "info",
      title: "Show menu"
    };
  }
};
</script>

<style lang="scss" scoped>
#sidebarToggle {
  margin-right: 5px;
}
.navbar-text {
  color: white;
}
</style>
