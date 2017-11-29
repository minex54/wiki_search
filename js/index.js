$(function(){
  //https://en.wikipedia.org/w/api.php?action=opensearch&search=minex&callback=?
  $('#search').click(function(){
     
    var searchTerm = $('#searchTerm').val();
    $.ajax({
      type: 'GET',
      url:'https://en.wikipedia.org/w/api.php?action=opensearch&search='+searchTerm+'&callback=?',
      async:false,
      dataType: 'json',
      success:function(data){
        //console.log(data);
      $('#results').html('');
        
        
        
        for(var i=0;i<=10;i++){
   $('#results').append('<a href=' + data[3][i] +' target="blank">'+ data[1][i]+'</h1></a><h3>'+ data[2][i]+'</h3><br><br>')
        }
        
      },
      error:function(err){
      alert("Err")
    },
    })
  });
  //
  $('#searchTerm').bind('keypress',function(e){
    if(e,keyCode == 13){
      $('#search').click();
    }
  })
});