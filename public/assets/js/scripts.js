// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $('.devour').on('click', function(event) {
    let id = $(this).data('id');
    let devour = $(this).data('devour');
    
    $.ajax('/api/burger' , {
      type: 'PUT',
      data: { 
        devoured: true,
        id: id
      }
    }).then(
      function() {
        console.log('changed to ', devour);
        location.reload();
      }
    );
  });

  $('.delete-burger').on('click', function(){
    let id = $(this).data('id');
    $.ajax('/api/burger/' + id, {
      type: 'DELETE'
    }).then(
      function(){
        console.log('Burger deleted');
        location.reload();
    });
  });

  $('.create-form').on('submit', function(e) {
    e.preventDefault();
    $.ajax('/api/burger', {
      type: 'POST',
      data: {
        burgerName: $('#burgerName').val().trim(),
        devoured: $('[name=devoured]:checked').val().trim()
      }
    }).then(
      function() {
        location.reload();
      }
    );
  });
});
