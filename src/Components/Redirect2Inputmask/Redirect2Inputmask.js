import { useEffect } from "react";

export const Redirect2Inputmask = () => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      window.location.replace("https://robinherbots.github.io/Inputmask");
    }, 0);

    return () => clearTimeout(timeout);
  }, []);

  return <>Will redirect asap ...</>;
};
