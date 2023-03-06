import constants from "../../Shared/constants.module.scss";
import { useViewPort } from "../ViewPort/ViewPort";

import styles from "./Navigation.module.scss";

export const Navigation = () => {
  const { width } = useViewPort();
  return (
    <nav className={styles.Navigation} data-testid="Navigation">
      <ul>
        <li>
          <a href="https://robinherbots.github.io/Inputmask" rel="noreferrer">
            Open <strong>Inputmask pages</strong>
          </a>
        </li>
        {width > constants.ScreenThreshold && <hr />}
      </ul>
    </nav>
  );
};
