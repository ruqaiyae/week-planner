interface FormElements extends HTMLFormControlsCollection {
  time: HTMLSelectElement;
  day: HTMLSelectElement;
  eventInfo: HTMLTextAreaElement;
}

interface Entry {
  time: string;
  day: string;
  eventInfo: string;
}

const $select = document.querySelector('.select');
if (!$select) throw new Error('$select query failed!');

for (let i = 0; i < 25; i++)
{
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
  const entry:Entry = {
    time:$entryForm.time.value,
    day:$entryForm.day.value,
    eventInfo: $entryForm.comment.value
  };
  // console.log(entry);

  data.entries.unshift(entry);
  writeData();
  $dialog.close();


});
