import React from "react";

const AppContext = React.createContext({
  activeTab: "",
  changeTab: () => {},
});

export default AppContext;
