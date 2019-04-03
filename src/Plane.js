function Plane() {
};

Plane.prototype.land = function(airport) {
  airport.clearForLanding(this);
};

Plane.prototype.takeoff = function(airport) {

  airport.clearForTakeoff(this);
}


// Plane.prototype.sayName = function () {
//   return this._name;
// };
