const printBtn = document.getElementById('printBtn');

if (printBtn) {
  printBtn.addEventListener('click', () => window.print());
}

const accordionItems = document.querySelectorAll('#services .accordion-item');

accordionItems.forEach((item) => {
  item.addEventListener('toggle', () => {
    if (!item.open) return;
    accordionItems.forEach((other) => {
      if (other !== item) other.open = false;
    });
  });
});
