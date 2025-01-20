var $select = document.querySelector('.select');
if (!$select)
    throw new Error('$select query failed!');
for (var i = 0; i < 25; i++) {
    var $option = document.createElement('option');
    $option.setAttribute('value', String(i));
    $option.textContent = "".concat(String(i), ":00");
    $select.appendChild($option);
}
var $newEvent = document.querySelector('.new-event');
if (!$newEvent)
    throw new Error('$newEvent query failed');
var $dialog = document.querySelector('dialog');
if (!$dialog)
    throw new Error('$dialog query failed');
$newEvent.addEventListener('click', function () {
    $dialog.showModal();
});
var $cancelBtn = document.querySelector('.cancel-btn');
var $entryForm = document.querySelector('.entry-form');
if (!$cancelBtn)
    throw new Error('$cancelBtn query failed.');
if (!$entryForm)
    throw new Error('$entryForm query failed.');
var $timeInput = document.querySelector('#time');
if (!$timeInput)
    throw new Error('timeInput query failed');
$cancelBtn.addEventListener('click', function () {
    $dialog.close();
});
$entryForm.addEventListener('submit', function (event) {
    event.preventDefault();
});
console.log('$entryForm: ', $entryForm.elements);
console.log('$timeInput', $timeInput.value);
