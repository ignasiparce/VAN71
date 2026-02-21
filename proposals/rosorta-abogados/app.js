(() => {
  const params = new URLSearchParams(window.location.search);
  if (params.get('print') === '1') {
    window.addEventListener('load', () => window.print());
  }
})();
