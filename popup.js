function save_options() {
  var saveState = document.getElementById('myonoffswitch').checked;
  chrome.storage.sync.set({
    saveState: saveState
  });
}
function restore_options() {
  chrome.storage.sync.get({
    saveState: false
  }, function(items) {
    document.getElementById('myonoffswitch').checked = items.saveState;
  });
}
restore_options();
document.getElementById('myonoffswitch').addEventListener('click',save_options);
