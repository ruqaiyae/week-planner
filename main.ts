interface Entry {
  time: string;
  day: string;
  eventInfo: string;
}

const $select = document.querySelector('.select');
if (!$select) throw new Error('$select query failed!');

for (let i = 0; i < 25; i++) {
  const $option = document.createElement('option');
  $option.setAttribute('value', String(i));
  $option.textContent = `${String(i)}:00`;

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
const $entryForm = document.querySelector('.entry-form') as HTMLFormElement;

if (!$cancelBtn) throw new Error('$cancelBtn query failed.');
if (!$entryForm) throw new Error('$entryForm query failed.');

$cancelBtn.addEventListener('click', () => {
  $dialog.close();
});

$entryForm.addEventListener('submit', (event: Event) => {
  event.preventDefault();
  const entry: Entry = {
    time: $entryForm.time.value,
    day: $entryForm.day.value,
    eventInfo: $entryForm.comment.value,
  };
  console.log(entry);

  data.entries.unshift(entry);
  writeData();
  $dialog.close();
});

// function renderEntries(): undefined {

//   const $tdTime = document.querySelector('.td-time');
//   if (!$tdTime) throw new Error('the query for tdtime failed.');

//   const $tdEvent = document.querySelector('.td-event');
//   if (!$tdEvent) throw new Error('the query for tdevent failed.');

//   const $tdAction = document.querySelector('td-actions');
//   if (!$tdAction) throw new Error('the query for the tdactions failed');

// }
