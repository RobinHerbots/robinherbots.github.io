<template>
  <div>
    <b-navbar toggleable="lg" :type="type" :variant="variant" sticky>
      <!-- <b-button id="sidebarToggle" v-b-toggle.sidebar :variant="variant" :title="title">
        <span class="navbar-toggler-icon" />
      </b-button>-->
      <b-navbar-brand href="/">
        <Logo width="70px" height="70px" />
        {{ brand }}
      </b-navbar-brand>
      <!-- <b-navbar-toggle /> -->
    </b-navbar>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";

export default {
  data: () => {
    return {
      brand: "sMarter entertainment",
      type: "dark",
      variant: "info",
      title: "Show menu"
    };
  },
  components: {
    Logo
  }
};
</script>

<style lang="scss" scoped>
#sidebarToggle {
  margin-right: 5px;
}
</style>
