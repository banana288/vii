let likeCount = 0;

function like() {
  likeCount++;
  document.getElementById('likes').textContent = likeCount;
}