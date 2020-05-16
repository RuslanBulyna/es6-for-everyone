import { createElement } from '../helpers/domHelper';
import { showModal } from './modal';
export  function showWinnerModal(fighter) {
    const name = fighter.name;
    const attributes = { src: fighter.source };

    const winnerDetails = createElement({ tagName: 'div', className: 'modal-body' });
    const nameElement = createElement({ tagName: 'span', className: 'fighter-name' });
    const imgElement = createElement({ tagName: 'img', className: 'fighter-image', attributes });

    nameElement.innerText = 'Winner name: ' + name + '\n';
    winnerDetails.append(nameElement, imgElement);

    const title = 'Winner info';
    const bodyElement = winnerDetails;
    showModal({ title, bodyElement });
  
}