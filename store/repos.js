export const state = () => ({
  repos: [],
  md: "",
  readmeUrl: ""
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
  }
};

export const actions = {
  fetchRepos ({ commit, state }) {
    function fetchPage (page) {
      fetch(
          `https://api.github.com/users/robinherbots/repos?page=${page}`,
          {
            method: "get"
          }
      )
        .then((response) => {
          const nextPage = response.headers.get("link");
          if (response.status === 200 && nextPage.includes("rel=\"next\"")) {
            fetchPage(page + 1);
          }
          return response.json();
        })
        .then((jsonResp) => {
          commit("appendRepos", jsonResp);
        });
    }

    if (state.repos.length === 0) {
      commit("setRepos", []);
      fetchPage(1);
    }
  },
  fetchRepoReadme ({ commit, dispatch }) {
    const targetRepository = this.getters["repos/personalRepos"].filter(pr => `${pr.name.toLowerCase()}` === this.$router.currentRoute.params.repository.toLowerCase())[0];
    if (targetRepository) {
      commit("setReadmeUrl", `${targetRepository.html_url}@${targetRepository.default_branch}/README.md`.replace("https://github.com", "https://cdn.jsdelivr.net/gh"));
      return dispatch("fetchMarkDown");
    }
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
    return state.repos.filter(repo => !repo.fork && repo.name !== "robinherbots.github.io");
  }
};
