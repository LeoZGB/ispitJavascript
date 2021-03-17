const spinner = document.getElementById("spinner");

export function showSpinner() {
  spinner.className = "show";
}

export function hideSpinner() {
  spinner.className = spinner.className.replace("show", "");
}

