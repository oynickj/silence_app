$(function(){
  eventLists();
});

function eventLists(){
  $('#create').on('click', function(){
    createLamb()
    .done(function(response) {
      console.log(response);
      lamb = $('<li>Lamb ' + response.id + '</li>').data('lamb', response);
      $('#lambs').append(lamb);
    })
    .fail(function(error) {
      console.log(error);
    });
  });

  $('#lambs').on('click', 'li', function(){
    wakeUpLamb(this)
    .done(function(response){
      console.log(response);
      $(this).html('baaaa');
    });
  });
}

function createLamb(){
  return $.ajax({
    url: '/lambs',
    type: 'post',
    dataType: 'json',
    data: { lamb: {} }
  });
}

function wakeUpLamb(lambNode){
  dataContent = $(lambNode).data('lamb');
  dataContent.is_silent = false;
  return $.ajax({
    url: '/lambs/' + dataContent.id,
    type: 'put',
    context: lambNode,
    dataType: 'json',
    data: { lamb: dataContent }
  });
}
