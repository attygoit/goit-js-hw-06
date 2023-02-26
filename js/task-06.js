
  const input = document.querySelector("#validation-input");
  const inputLength = Number(input.getAttribute("data-length"));

  input.addEventListener("blur", () => {
    const inputValue = input.value.trim();
    const isValidLength = inputValue.length === inputLength;

    if (isValidLength) {
      input.classList.remove("invalid");
      input.classList.add("valid");
    } else {
      input.classList.remove("valid");
      input.classList.add("invalid");
    }
  });
