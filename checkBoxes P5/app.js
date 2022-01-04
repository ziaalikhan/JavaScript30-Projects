const checkBoxes = document.querySelectorAll(
    ".inbox input[type='checkbox']"
  );

  let lastCheked;
  function handleCheck(e) {
    let inBetween = false;
    if (e.shiftKey && this.checked) {
      checkBoxes.forEach((val) => {
        if (val === this || val === lastCheked) {
          inBetween = !inBetween;
        }
        if (inBetween) {
          val.checked = true;
        }
      });
    }
    lastCheked = this;
  }

  checkBoxes.forEach((val) => val.addEventListener("click", handleCheck));