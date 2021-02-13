
document.getElementById('js-toggle-id').addEventListener('click', function(e) {
   event.preventDefault();
   if (document.documentElement.id === 'specific') {
       document.documentElement.id = null;
       return
   }
    document.documentElement.id = 'specific';
});