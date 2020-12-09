export const state = () => ({
  repos: [],
  md: "",
  readmeUrl: "",
  isFetching: false
});

export const mutations = {
  appendRepos (state, repos) {
    state.repos = state.repos.concat(repos);
  },
  setRepos (state, repos) {
    state.repos = [];
    this.commit("repos/appendRepos", repos); // a bit hacky to save code
  },
  setMarkDown (state, md) {
    state.md = md;
  },
  setReadmeUrl (state, readmeUrl) {
    state.readmeUrl = readmeUrl;
  },
  setIsFetching (state, fetching) {
    state.isFetching = fetching;
  }
};

export const actions = {
  async fetchRepos ({ commit, state }) {
    async function fetchPage (page) {
      await fetch(
          `https://api.github.com/users/robinherbots/repos?page=${page}`,
          {
            method: "get"
          }
      )
        .then(async (response) => {
          const nextPage = response.headers.get("link");
          if (response.status === 200 && nextPage.includes("rel=\"next\"")) {
            await fetchPage(page + 1);
          }
          return response.json();
        })
        .then((jsonResp) => {
          commit("appendRepos", jsonResp);
        });
    }

    if (!state.isFetching) {
      commit("setRepos", []);
      commit("setIsFetching", fetchPage(1));
      await state.isFetching;
    }

    return state.isFetching;
  },
  fetchRepoReadme ({ commit, getters, dispatch }) {
    dispatch("fetchRepos").then(function () {
      const targetRepository = getters.personalRepos.filter(pr => `${pr.name.toLowerCase()}` === this.$router.currentRoute.params.repository.toLowerCase())[0];
      if (targetRepository) {
        commit("setReadmeUrl", `${targetRepository.html_url}@${targetRepository.default_branch}/README.md`.replace("https://github.com", "https://cdn.jsdelivr.net/gh"));
        return dispatch("fetchMarkDown");
      }
    }.bind(this));
  },
  fetchMarkDown ({ commit, state }) {
    fetch(state.readmeUrl, {
      method: "get"
    })
      .then((response) => {
        return response.text();
      }).then((txtResponse) => {
        commit("setMarkDown", txtResponse);
      });
  }
};

export const getters = {
  personalRepos: (state) => {
    return (state.repos.filter(repo => !repo.fork && repo.name !== "robinherbots.github.io")).sort((a, b) => a.name.localeCompare(b.name));
  }
};
