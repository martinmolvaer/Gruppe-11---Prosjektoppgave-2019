

var banan = document.getElementById('banan');
banan.addEventListener('click', function(){

    banan.style.display = 'none';
    
  });

var bin = document.getElementById("bin");
var sortable = Sortable.create(bin, {
  group: {
    name: "bin",
    pull: true,
    put: ["banan"]
  }
});