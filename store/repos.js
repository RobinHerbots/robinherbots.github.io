export const state = () => ({
  repos: []
});

export const mutations = {
  appendRepos (state, repos) {
    state.repos = state.repos.concat(repos);
  },
  setRepos (state, repos) {
    state.repos = [];
    this.commit("repos/appendRepos", repos); // a bit hacky to save code
  }
};

export const actions = {
  fetchRepos ({ commit }) {
    commit("setRepos", []);

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

    fetchPage(1);
  }
};

export const getters = {
  personalRepos: (state) => {
    return state.repos.filter(repo => !repo.fork && repo.name !== "robinherbots.github.io");
  }
};
