import constants from "../../Shared/constants.module.scss";
import useFetch from "../../Shared/useFetch";
import { useViewPort } from "../ViewPort/ViewPort";

import styles from "./Navigation.module.scss";

export const Navigation = (props) => {
  const { width } = useViewPort(),
    { className } = props,
    { data, error, loading } = useFetch(
      "https://api.github.com/users/robinherbots/repos"
    );

  if (error) throw error;

  return (
    <nav
      className={`${styles.Navigation} ${className}`}
      data-testid="Navigation">
      {loading && <h3>Loading...</h3>}
      {!loading && (
        <ul>
          {data.map((repo, index) =>
            !repo.fork ? (
              <li key={repo.id}>
                <a href={repo.homepage || repo.html_url}>
                  Open <strong>{repo.name}</strong>
                </a>
              </li>
            ) : (
              <></>
            )
          )}

          {width > constants.ScreenThreshold && <hr />}
        </ul>
      )}
    </nav>
  );
};
