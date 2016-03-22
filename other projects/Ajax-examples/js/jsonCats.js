$(document).ready(function() {

  $.getJSON("jsonDatabase/cat.json",function(data){

    console.dir(data);
    var html = "";


    $.each(data, function(index, item){
      html += '<div class="col-md-4 cat">'+
          '<div class="catName">' + item.name + '</div>' +
          '<div class="catType">' + item.type + '</div>' +
          '<div class="catGender">' + item.gender + '</div>'+
          '<img src="' + item.image + '""/>';

      html += '</div>';
    }) //each cat

    })//each cat
    $("#catData").append(html);

    })
  })
});

/*
//one per cat
<div class="col-md-4 cat">
  <div class="catName"> </div>
  <div class="catType"> </div>
  <div class="catGender"> </div>
  <img src=""/>
  <div class="commentsContainer"> </div>
  //one per comment
    <div class="renterName"> </div>
    <div class="renterLocation"> </div>
    <div class="renterStars"> </div>
    /5 stars, some full, some empty
    </div>//end stars
  </div> //end commentsContainer
</div>//end cat

*/
