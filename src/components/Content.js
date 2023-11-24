import Details from "./Details.js";
import Controls from "./Controls.js";

function Content({onSortAsc, onSortDesc}) {
  return (
    <div className="flex flex-row md:flex-inline space-x-5">
      <Details />
      <Controls onSortAsc={onSortAsc} onSortDesc={onSortDesc}/>
    </div>
  );
}

export default Content;
