export function fight(firstFighter, secondFighter) {
  var c = 0;
  do {
    if (c == 0) {
      secondFighter.health -= getDamage(firstFighter,secondFighter);
      c = 1;
    } else {
      firstFighter.health -= getDamage(secondFighter,firstFighter);
      c = 0;
    }
  } while(firstFighter.health <= 0 || secondFighter.health <= 0);
  return firstFighter;
}

export function getDamage(attacker, enemy) {
  
  const damage = getHitPower(attacker) - getBlockPower(enemy);
  return damage;

}

export function getHitPower(fighter) {
  const criticalHitChance = Math.floor(Math.random() * 2);
  const power = fighter.attack * criticalHitChance;
  return power;
}

export function getBlockPower(fighter) {
  const dodgeChance = Math.floor(Math.random() * 2);

  const power = fighter.defense * dodgeChance;
  return power;
}