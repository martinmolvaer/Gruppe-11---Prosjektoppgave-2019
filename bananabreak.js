

var banan = document.getElementById('banan');
banan.addEventListener('click', function(){

    banan.style.display = 'none';
    
  });


var tree = document.getElementById("tree");
var sortable = Sortable.create(tree, {
  group: {
    name: "tree",
    pull: true,
    put: ["jungle", "tree"]
  }
});


var jungle = document.getElementById("jungle");
var sortable = Sortable.create(jungle, {
  group: {
    name: "jungle",
    pull: true,
    put: ["tree", 'jungle']
  }
});

