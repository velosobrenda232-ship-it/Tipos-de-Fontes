  // Atualiza o nome da marca em todos os estilos
  const input = document.getElementById('brand');
  const samples = document.querySelectorAll('.sample');
  input.addEventListener('input', () => {
    const text = input.value.trim() || 'Minha Marca';
    samples.forEach(s => (s.textContent = text));
  });

  // Permite trocar o exemplo por uma imagem enviada pela pessoa
  document.querySelectorAll('.replace input').forEach(fileInput => {
    fileInput.addEventListener('change', () => {
      const file = fileInput.files[0];
      if (!file) return;
      const box = fileInput.closest('.specimen');
      const reader = new FileReader();
      reader.onload = () => {
        let img = box.querySelector('img');
        if (!img) {
          img = document.createElement('img');
          img.alt = 'Exemplo de fonte';
          box.prepend(img);
        }
        img.src = reader.result;
        const sample = box.querySelector('.sample');
        if (sample) sample.style.display = 'none';
      };
      reader.readAsDataURL(file);
    });
  });
