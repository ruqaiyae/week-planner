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
