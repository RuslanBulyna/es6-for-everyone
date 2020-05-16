export function fight(firstFighter, secondFighter) {
  var c = 0;
  var winner;
  while(firstFighter.health > 0 || secondFighter.health > 0) {
    if (c == 0) {
      secondFighter.health -= getDamage(firstFighter,secondFighter);
      c = 1;
    } else {
      firstFighter.health -= getDamage(secondFighter,firstFighter);
      c = 0;

    }

    if(firstFighter.health <= 0) {
      winner = secondFighter;
      break;
    }
    else if (secondFighter.health <= 0) {
      winner = firstFighter;
      break;
    }


    console.log(firstFighter.health + ' _____ ' + secondFighter.health);
  }
  if(firstFighter.attack > secondFighter.attack){
    if(firstFighter.defense > secondFighter.defense){
      if(firstFighter.health > secondFighter.health){
        winner = firstFighter;
      }
    }
  }
  else if (secondFighter.attack >= firstFighter.attack){
    if(secondFighter.defense > firstFighter.defense) {
      if(secondFighter.health > firstFighter.health){
        winner = secondFighter;
      }
      
    }
  }
  
  return winner;
}

export function getDamage(attacker, enemy) {
  
  var damage = getHitPower(attacker) - getBlockPower(enemy);
  if (damage <= 0) {
    damage = 0;
  }
  return damage;

}

export function getHitPower(fighter) {
  const randomNumber = Math.floor(Math.random() * 2);
  const attack = fighter.attack;
  const power = randomNumber * attack;
  return power;
}

export function getBlockPower(fighter) {
  const randomNumber = Math.floor(Math.random() * 2);
  const defense = fighter.defense;
  const power = randomNumber * defense;
  return power;
}