/*문의사항 페이지 드롭박스*/ 
const selectBoxElements = document.querySelectorAll("#select");

function toggleSelectBox(selectBox) {
  selectBox.classList.toggle("active");
}

function selectOption(optionElement) {
  const selectBox = optionElement.closest("#select");
  const selectedElement = selectBox.querySelector(".select-box");
  selectedElement.textContent = optionElement.textContent;
}

selectBoxElements.forEach(selectBoxElement => {
  selectBoxElement.addEventListener("click", function (e) {
    const targetElement = e.target;
    const isOptionElement = targetElement.classList.contains("option");

    if (isOptionElement) {
      selectOption(targetElement);
    }

    toggleSelectBox(selectBoxElement);
  });
});

document.addEventListener("click", function (e) {
  const targetElement = e.target;
  const isSelect = targetElement.classList.contains("select") || targetElement.closest("#select");

  if (isSelect) {
    return;
  }

  const allSelectBoxElements = document.querySelectorAll("select");

  allSelectBoxElements.forEach(boxElement => {
    boxElement.classList.remove("active");
  });
});

//체크 박스 //
$("input:checkbox[id='mindsnavi']").prop("checked", true); //선택
$("input:checkbox[id='mindsnavi']").prop("checked", false); //해제