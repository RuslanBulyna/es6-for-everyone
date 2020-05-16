import { createElement } from '../helpers/domHelper';
import { showModal } from './modal';

export  function showFighterDetailsModal(fighter) {
  const title = 'Fighter info';
  const bodyElement = createFighterDetails(fighter);
  showModal({ title, bodyElement });
}

function createFighterDetails(fighter) {
  const name = fighter.name;
  const attack = fighter.attack;
  const defense = fighter.defense;
  const health = fighter.health;


  const fighterDetails = createElement({ tagName: 'div', className: 'modal-body' });
  const nameElement = createElement({ tagName: 'span', className: 'fighter-name' });
  const attackElement = createElement({ tagName: 'span', className: 'fighter-attack' });
  const defenseElement = createElement({ tagName: 'span', className: 'fighter-defense' });
  const healthElement = createElement({ tagName: 'span', className: 'fighter-health' });

  nameElement.innerText = 'Fighter name: ' + name + '\n';
  attackElement.innerText = 'Attack: ' + attack + '\n';
  defenseElement.innerText = 'Defense: ' +  defense + '\n';
  healthElement.innerText = 'Health: ' + health + '\n';


  fighterDetails.append(nameElement,attackElement,defenseElement,healthElement);

  return fighterDetails;
}
