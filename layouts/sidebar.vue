<template>
  <div>
    <navbar />
    <b-container fluid>
      <b-row>
        <b-col class="overflow-auto">
          <sidebar />
        </b-col>
        <b-col cols="10" class="overflow-auto">
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
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  overflow: hidden;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
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
  height: 90vh;
}
</style>
