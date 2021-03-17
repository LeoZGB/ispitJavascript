import Layout from "./view/layout.js";
import Data from "./data.js";
import { render } from "./render.js";
import MarkupZaRezultate from "./view/results.js";
import { showSpinner, hideSpinner } from "./view/spinner.js";

export default () => {
  document.getElementById("app").innerHTML = Layout();
  let elementRezultata = document.getElementById("results");
  document.getElementById("searchTerm").addEventListener("input", (event) => {
    if(event.target.value != ""){
      showSpinner();
      Data(event.target.value).then((rezultat) => {
        hideSpinner();
          render(MarkupZaRezultate(rezultat), elementRezultata);
      });
    }
  });
};
