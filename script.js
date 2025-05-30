const form = document.getElementById('regretForm');
const input = document.getElementById('regretInput');
const wall = document.getElementById('regretWall');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const text = input.value.trim();
  if (text) {
    addRegret(text);
    input.value = '';
  }
});

function addRegret(text) {
  const card = document.createElement('div');
  card.className = 'regretCard';
  card.textContent = `"${text}"`;
  wall.prepend(card); // new regrets appear on top
}
