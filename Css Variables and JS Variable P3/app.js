const inputs = document.querySelectorAll(".controls input");
// console.log(e.target.dataset);
// console.log(this.dataset);
function updateHandler(e) {
  const setColors = this.dataset.sizing || "";
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + setColors
  );
}

inputs.forEach((val) => val.addEventListener("change", updateHandler));
inputs.forEach((val) => val.addEventListener("mousemove", updateHandler));
