import { createContext } from "react";

// export interface NavigationBundle {
//   from: Location | undefined;
//   to: Location | undefined;
// }

export const defaultNavigationBundle = {
  from: undefined,
  to: undefined,
};

export const NavigationContext = createContext(defaultNavigationBundle);

import { createBrowserHistory } from "history";
import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";

const history = createBrowserHistory();

const NavigationProvider = ({ children }) => {
  const [from, setFrom] = useState();
  const [to, setTo] = useState();
  const location = useLocation();

  useEffect(() => {
    setFrom(location);
  }, [location]);

  useEffect(() => {
    history.listen((update) => {
      if (update.action === "POP") {
        setTo(update.location);
        console.log(update.location, "update");
        console.log(location, "location");
      }
    });
  }, []);

  const navigationBundle = useMemo(() => {
    return {
      from,
      to,
    };
  }, [from, to]);

  return (
    <NavigationContext.Provider value={navigationBundle}>
      {children}
    </NavigationContext.Provider>
  );
};

export default NavigationProvider;
