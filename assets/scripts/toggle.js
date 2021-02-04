
document.getElementById('js-toggle-id').addEventListener('click', function(e) {
   event.preventDefault();
   const body = document.body;
   if (body.id === 'specific') {
       body.id = null;
       return
   }
    body.id = 'specific';
});