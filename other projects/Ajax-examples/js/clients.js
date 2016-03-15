
$("#getClients").on("click", function() {
    
    var url = "http://andersonguelphis.github.github.io/otherProjects//Ajax-examples/clients.html"
    
    $.getJSON(url, function(data){
        
        var html = "<table class='table table-hover table-stripe>" +
            "<tr><th></th><th></th><th>Company</th></tr>";
        
        
        $.each(data, function(index, item){
           html += "<tr>" + 
               <td>"+item.name+"</td>
               <td>"+item.email"</td>
               <td>"+item.company+"</td>
               </tr>";
        
        
        html += "</table>";
        $("#data").append
        //alert(data);
        console.dir(data);
            
        })//get JSON
    
})//click
               

})//document ready