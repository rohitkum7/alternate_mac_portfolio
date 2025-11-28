import { Dock, Navbar, Welcome } from "#components";
import React from "react";

const App = () => {
  return (
    <div>
      <main>
        <Navbar />
        <Welcome />
        <Dock />
      </main>
    </div>
  );
};

export default App;
