var $select = document.querySelector('.select');
if (!$select) throw new Error('$select query failed!');
for (var i = 0; i < 25; i++) {
  var $option = document.createElement('option');
  $option.setAttribute('value', String(i));
  $option.textContent = String(i);
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
var $confirmBtn = document.querySelector('.confirm-btn');
if (!$cancelBtn) throw new Error('$cancelBtn query failed.');
if (!$confirmBtn) throw new Error('$confirmBtn query failed.');
$cancelBtn.addEventListener('click', function () {
  $dialog.close();
});
// $confirmBtn.addEventListener('click' () => {
// })
