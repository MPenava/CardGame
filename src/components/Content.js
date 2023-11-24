import Details from "./Details.js";
import Controls from "./Controls.js";

function Content() {
  return (
    <div className="flex flex-row md:flex-inline space-x-5">
      <Details />
      <Controls />
    </div>
  );
}

export default Content;
