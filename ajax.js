$(document).ready(function(){
	$("#frame").on("submit", "form", function(event){
		event.preventDefault();
		var queryString = "?" + $("form").serialize() + "&r=json";
		$.getJSON("http://www.omdbapi.com/" + queryString, function(data){
			var $ul_list = $("<ul></ul>");
		
			for(var i in data){
				var $li_item = $("<li></li>");
				$li_item.text(i + ": " + data[i]);
				$ul_list.append($li_item);
			}

			$("#result").html($ul_list);
			$("#title").val("");
			$("#year").val(""); 
		});
	});
});


