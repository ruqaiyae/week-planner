var $select = document.querySelector('.select');
if (!$select) throw new Error('$select query failed!');
for (var i = 0; i < 25; i++) {
  var $option = document.createElement('option');
  $option.setAttribute('value', String(i));
  $option.textContent = ''.concat(String(i), ':00');
  $select.appendChild($option);
}
var $newEvent = document.querySelector('.new-event');
if (!$newEvent) throw new Error('$newEvent query failed');
var $dialog = document.querySelector('dialog');
if (!$dialog) throw new Error('$dialog query failed');
$newEvent.addEventListener('click', function () {
  $dialog.showModal();
});
var $cancelBtn = document.querySelector('.cancel-btn');
var $entryForm = document.querySelector('.entry-form');
if (!$cancelBtn) throw new Error('$cancelBtn query failed.');
if (!$entryForm) throw new Error('$entryForm query failed.');
$cancelBtn.addEventListener('click', function () {
  $dialog.close();
});
$entryForm.addEventListener('submit', function (event) {
  event.preventDefault();
  var entry = {
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
