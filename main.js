const $text = document.querySelector("#text");
const $sendButton = document.querySelector("#sendButton");
const $link = document.querySelector("#link");

$sendButton.addEventListener("click", () => {
  if (!$text.value) return;
  const url = `https://wa.me/?text=${$text.value}`;
  $link.href = url;
  $link.click();

  $text.value = "";
  $link.href = "#";
  $text.focus();
});
