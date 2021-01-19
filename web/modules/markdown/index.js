
function main() {
  const element = document.querySelector('#markdown');
  const editor = new SimpleMDE({
    element
  });

  console.warn('editor', editor);
}

main();
