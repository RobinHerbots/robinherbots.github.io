<template>
  <nav>
    <b-navbar v-b-scrollspy:scrollspy-nested class="flex-column" type="light" variant="faded">
      <b-nav v-for="nav in blendedNavigation" :key="nav.path" pills vertical class="w-100 bg-light mb-1">
        <b-nav-item :to="nav.path" class="w-100 rounded" :class="{active: isActive(nav.path)}">
          {{ nav.title }}
        </b-nav-item>
        <b-nav v-for="sub in nav.subs" :key="sub.path" class="w-100">
          <b-nav-item :to="sub.path" class="w-100 pl-3 rounded" :class="{active: isActive(sub.path)}">
            {{ sub.title }}
          </b-nav-item>
        </b-nav>
      </b-nav>
    </b-navbar>
  </nav>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapGetters, mapActions } = createNamespacedHelpers("repos");

export default {
  data: () => {
    return {
      navigation: [{
        title: "Inputmask",
        subs: [
          { title: "Date alias", path: "/inputmask/date" },
          { title: "Numeric alias", path: "/inputmask/numeric" },
          { title: "Extra extensions", path: "/inputmask/other" },
          { title: "Demo", path: "/inputmask/demo" }]
      }]
    };
  },
  computed: {
    ...mapGetters(["personalRepos"]),
    blendedNavigation () {
      return this.personalRepos.map((v, i) => {
        const title = v.name.replace(/\b[a-z]/g, x => x.toUpperCase());
        const blend = this.navigation.filter(n => n.title === title)[0];
        return {
          title,
          path: ((blend && blend.path) || `/${v.name}`),
          subs: (blend && blend.subs) || []
        };
      });
    }
  },
  methods: {
    ...mapActions(["fetchRepos"]),
    isActive (path) {
      return `${path.toLowerCase()}` === this.$route.path.toLowerCase();
    }
  },
  mounted () {
    this.fetchRepos();
  }
};
</script>

<style lang="scss">
.navbar-brand {
  color: inherit;
  font-weight: bold;
}
.nav-item {
  & a { color: black;}
  &:hover, &.active  {
   background-color: lighten( #17a2b8, 30);
}
}
</style>
