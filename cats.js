$(function(){
  $(".summon-cats").click(function(){
    $.ajax({
      url: 'http://bitkittens.herokuapp.com/cats.json',
      method: "GET",
      datatype: "json"
    })
    .done(function(data){
      var cats = data.cats;
      var i = 0;

      $('.cat-box').each(function(){
        var catPic = $('<img>').attr('src', cats[i].photo);
        catPic.attr('alt', 'Photo of ' + cats[i].name);
        $(this).html(catPic);
        i++;
      });
    });
  });
});
