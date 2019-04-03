'use strict';

describe("Airport", function() {
  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();
    plane = jasmine.createSpyObj('plane', ['land', 'takeoff']);
  });

  it('has no planes by default', function() {
    expect(airport.hangarList()).toEqual([]);
  })

  describe("plane land", function() {
    it("instructs the plane to land", function() {
      airport.clearForLanding(plane);
      expect(airport.hangarList()).toEqual([plane]);
    });
  });
  describe("plane take off", function() {
    it('takes off a plane', function() {
      plane.land(airport)
      plane.takeoff(airport)
      expect(airport.hangarList()).toEqual([]);
    });
  });

  describe("isStormy", function() {
    it("checks for stormy weather", function() {
      expect(airport.isStormy()).toBeFalsy();
    });

    it('plane cannot takeoff if its stormy', function() {
      plane.land(airport)
      spyOn(airport, 'isStormy').and.returnValue(true);
      expect(function() {
        plane.takeoff(airport)
      }).toThrowError("cannot take off because of the storm");
    });
  });
});




// describe("Player", function() {
//   var player;
//   var song;
//
//   beforeEach(function() {
//     player = new Player();
//     song = new Song();
//   });
//
//   it("should be able to play a Song", function() {
//     player.play(song);
//     expect(player.currentlyPlayingSong).toEqual(song);
//
//     //demonstrates use of custom matcher
//     expect(player).toBePlaying(song);
//   });
//
//   describe("when song has been paused", function() {
//     beforeEach(function() {
//       player.play(song);
//       player.pause();
//     });
//
//     it("should indicate that the song is currently paused", function() {
//       expect(player.isPlaying).toBeFalsy();
//
//       // demonstrates use of 'not' with a custom matcher
//       expect(player).not.toBePlaying(song);
//     });
//
//     it("should be possible to resume", function() {
//       player.resume();
//       expect(player.isPlaying).toBeTruthy();
//       expect(player.currentlyPlayingSong).toEqual(song);
//     });
//   });
//
//   // demonstrates use of spies to intercept and test method calls
//   it("tells the current song if the user has made it a favorite", function() {
//     spyOn(song, 'persistFavoriteStatus');
//
//     player.play(song);
//     player.makeFavorite();
//
//     expect(song.persistFavoriteStatus).toHaveBeenCalledWith(true);
//   });
//
//   //demonstrates use of expected exceptions
//   describe("#resume", function() {
//     it("should throw an exception if song is already playing", function() {
//       player.play(song);
//
//       expect(function() {
//         player.resume();
//       }).toThrowError("song is already playing");
//     });
//   });
// });
