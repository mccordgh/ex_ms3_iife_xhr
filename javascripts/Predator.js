var Predator = (function (predator) {
  var carnivores = [];
  var herbivores = [];

    
  predator.loadCarnivores = function(callbackToInvoke) {
    var loader = new XMLHttpRequest();
    loader.open("GET", "lib/carnivores.json");
    loader.send();
      
    loader.addEventListener("load", function () {
        carnivores = (JSON.parse(this.responseText)).carnivores;
        callbackToInvoke("Carnivores", carnivores);
      });
    };
        predator.loadHerbivores = function(callbackToInvoke) {
      var loader = new XMLHttpRequest();
      loader.open("GET", "lib/herbivores.json");
      loader.send();
      
      loader.addEventListener("load", function () {
        herbivores = (JSON.parse(this.responseText)).herbivores;
        callbackToInvoke("Herbivores", herbivores);
      });
    };

    return predator;

})(Predator || {});

