<template>
  <div>
    <navbar />
    <b-container fluid>
      <b-row>
        <b-col cols="0" class="overflow-auto sidebar">
          <b-collapse id="nav-collapse" visible is-nav>
            <sidebar />
          </b-collapse>
        </b-col>
        <b-col class="overflow-auto">
          <div id="scrollspy-nested" class="my-2">
            <nuxt />
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { sidebar, navbar } from "@/components/";

export default {
  components: {
    sidebar,
    navbar
  },
  data: () => {
    return {
      title: "",
      subtitle: ""
    };
  }
};
</script>

<style lang="scss">
html {
  --scrollbarBG: #CFD8DC;
  --thumbBG: #90A4AE;
}
.row > div {
   scrollbar-width: thin;
  scrollbar-color: var(--thumbBG) var(--scrollbarBG);
  &::-webkit-scrollbar {
  width: 11px;
  }
  &::-webkit-scrollbar-track {
  background: var(--scrollbarBG);
  }
  &::-webkit-scrollbar-thumb {
  background-color: var(--thumbBG) ;
  border-radius: 6px;
  border: 3px solid var(--scrollbarBG);
  }
}
</style>
<style lang="scss" scoped>
.row > div {
  &.sidebar {
    border-right-style: inset;
    border-right-width: thin;
  }
  height: 90vh;
}
</style>
