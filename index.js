document.getElementById('beginBtn').addEventListener('click', function() {
  document.body.classList.add('wash-animation');

  setTimeout(function() {
    document.getElementById('introScreen').classList.add('hidden');
    document.getElementById('inputScreen').style.display = 'flex';
    document.getElementById('inputScreen').classList.remove('hidden');
  }, 250); 
});

