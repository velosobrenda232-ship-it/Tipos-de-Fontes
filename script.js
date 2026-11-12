  // Atualiza o nome da marca em todos os estilos
  const input = document.getElementById('brand');
  const samples = document.querySelectorAll('.sample');
  input.addEventListener('input', () => {
    const text = input.value.trim() || 'Minha Marca';
    samples.forEach(s => (s.textContent = text));
  });
