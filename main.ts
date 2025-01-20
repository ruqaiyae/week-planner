// interface Entry {
//   time: string;
//   day: string;
//   eventInfo: string;
// }

const $select = document.querySelector('.select');
if (!$select) throw new Error('$select query failed!');

for (let i = 0; i < 25; i++) {
  const $option = document.createElement('option');
  $option.setAttribute('value', String(i));
  $option.textContent = String(i);

  $select.appendChild($option);
}

const $newEvent = document.querySelector('.new-event');
if (!$newEvent) throw new Error('$newEvent query failed');

const $dialog = document.querySelector('dialog');
if (!$dialog) throw new Error('$dialog query failed');

$newEvent.addEventListener('click', () => {
  $dialog.showModal();
});

const $cancelBtn = document.querySelector('.cancel-btn');
const $confirmBtn = document.querySelector('.confirm-btn');

if (!$cancelBtn) throw new Error('$cancelBtn query failed.');
if (!$confirmBtn) throw new Error('$confirmBtn query failed.');

$cancelBtn.addEventListener('click', () => {
  $dialog.close();
});

// $confirmBtn.addEventListener('click' () => {

// })
