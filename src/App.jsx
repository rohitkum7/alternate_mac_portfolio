import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

import { Dock, Navbar, Welcome } from "#components";
import Terminal from "#windows";

gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <div>
      <main>
        <Navbar />
        <Welcome />
        <Dock />

        <Terminal />
      </main>
    </div>
  );
};

export default App;
