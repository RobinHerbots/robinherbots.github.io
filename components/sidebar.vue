<template>
  <nav>
    <b-navbar v-b-scrollspy:scrollspy-nested class="flex-column">
      <b-list-group v-for="nav in navigation" :key="nav.title">
        <b-navbar-brand :to="nav.path">
          {{ nav.title }}
        </b-navbar-brand>
        <b-nav v-for="sub in nav.subs" :key="sub.title" pills vertical>
          <b-nav-item :to="sub.path">
            {{ sub.title }}
          </b-nav-item>
        </b-nav>
      </b-list-group>
    </b-navbar>
  </nav>
</template>

<script>
export default {
  data: () => {
    return {
      navigation: [{
        title: "Inputmask",
        path: "/inputmask",
        subs: [{ title: "Demo", path: "/inputmask/demo" }]
      }]
    };
  }
};
</script>

<style lang="scss" scoped>
.navbar-brand {
  font-weight: bold;
}
.nav-item {
  a {
  color: black;
}}
</style>
