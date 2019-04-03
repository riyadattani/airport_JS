describe("Plane", function() {
  var plane;

  beforeEach(function() {
    plane = new Plane();
    airport = jasmine.createSpyObj('airport',['clearForLanding', 'clearForTakeoff']);
  });

  describe("#land", function() {
    it("the plane lands at an airport", function() {
      plane.land(airport)
      expect(airport.clearForLanding).toHaveBeenCalledWith(plane);
    });
  });

  describe('#takeoff', function() {
    it("the plane takes off from the airport", function() {
      plane.land(airport)
      plane.takeoff(airport)
      expect(airport.clearForTakeoff).toHaveBeenCalledWith(plane);
    });
  });

});

// RSpec.describe Plane do
//   describe '#land' do
//     it 'sets flying to false' do
//       plane = Plane.new
//
//       expect(plane.land).to eq false
//     end
//     it 'raises error if already landed' do
//       plane = Plane.new
//       plane.land
//
//       expect { plane.land }.to raise_error('Already landed')
//     end
//   end
//
//   describe '#takeoff' do
//     it 'sets flying to true' do
//       plane = Plane.new
//       plane.land
//
//       expect(plane.takeoff).to eq true
//     end
//
//     it 'raises error if already taken off' do
//       plane = Plane.new
//
//       expect { plane.takeoff }.to raise_error('Already taken off')
//     end
//   end
//
// end
