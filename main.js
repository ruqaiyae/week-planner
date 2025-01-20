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
