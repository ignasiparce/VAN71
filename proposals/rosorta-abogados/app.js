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

const params = new URLSearchParams(window.location.search);
if (params.get('print') === '1') {
  window.addEventListener('load', () => {
    window.print();
  });
}
