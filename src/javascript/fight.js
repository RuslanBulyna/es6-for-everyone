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
      winner = firstFighter;
    }
  }
  else if (secondFighter.attack >= firstFighter.attack){
    if(secondFighter.defense > firstFighter.defense) {
      winner = secondFighter;
    }
  }
  
  return winner;
}

export function getDamage(attacker, enemy) {
  
  const damage = getHitPower(attacker) - getBlockPower(enemy);
  return damage;

}

export function getHitPower(fighter) {
  const criticalHitChance = Math.floor(Math.random() * 2);
  const attack = fighter.attack;
  const power = criticalHitChance * attack;
  return power;
}

export function getBlockPower(fighter) {
  const dodgeChance = Math.floor(Math.random() * 2);
  const defense = fighter.defense;
  const power = dodgeChance * defense;
  return power;
}