// Assignment NO: 01 => Convert Feet to Mile
function feetToMile(feet) {

  let convertFeetToMile = feet / 5280; //  1 mile = 5280 feet
  return convertFeetToMile;

}

// Assignment NO: 02 => Wood Calculator
function woodCalculator(numberOfChair, numberOfTabel, numberOfBed) {
  
  let calculationOfChair = numberOfChair * 1; // 1 means 1-Qbit wood
  let calculationOfTable = numberOfTabel * 3; // 3 means 3-Qbit wood
  let calculationOfBed = numberOfBed * 5; // 5 means 5-Qbit wood

  let totalCalculationOfWood = calculationOfChair + calculationOfTable + calculationOfBed;

  return totalCalculationOfWood;

}

// Assignment NO: 03 => Brick Calculator
// aktu time niye dakhar jonno request korlam.
function brickCalculator(getFloor) {
  
  const bricks = 1000, feet15 = 15, feet12 = 12, feet10 = 10;

  if (getFloor <= 10) {

    let totalBricks = getFloor * feet15 * bricks;
    return totalBricks;
  
  } else if (getFloor <= 20) {
    
    if (getFloor >= 10) {
      var first0To10Floor = 10 * feet15 * bricks;
    }

    if (getFloor <= 20) {
      var floorCount11To20 = getFloor - 10;
      var second11to20Floor = floorCount11To20 * feet12 * bricks;
    }

    let totalBricks = first0To10Floor + second11to20Floor;
    return totalBricks;
 
  } else {
    
    if (getFloor >= 10) {
      var first0To10Floor = 10 * feet15 * bricks;
    }

    if (getFloor >= 11) {
      var second11to20Floor = 10 * feet12 * bricks;
    }

    if (getFloor >= 20) {
      var floorCountUpper21 = getFloor - 20;
      var third21ToUpperFloor = floorCountUpper21 * feet10 * bricks;
    }

    let totalBricks = first0To10Floor + second11to20Floor + third21ToUpperFloor;
    return totalBricks;
  
  }
}


// Assignment NO: 04 => Tiny Friends Found
function tinyFriend(friends) {
  
  let getTinnyFriends = friends.reduce((prevFriend, currFriend) => {
    
    if (prevFriend.length > currFriend.length) {
      return currFriend;
    } else {
      return prevFriend;
    }
    
  });

  return getTinnyFriends;
}
