/*
* @Author: prabhakar
* @Date:   2016-08-14 02:20:23
* @Last Modified by:   Prabhakar Gupta
* @Last Modified time: 2016-08-14 02:52:38
*/

'use strict';

$(document).ready(function(){
	var username_a = $('meta[name=user-login]').attr("content").trim();
	var username_b = $("div.vcard-username").text().trim();
	var url = "https://api.github.com/users/" + username_b + "/following/" + username_a;
	var new_text = username_b + "<br><span class='text-muted text-small'>FOLLOWS YOU</span>";

	// if "username_a" is empty, user is not logged in 
	// is "username_b" is empty, it is not user page 

	if(username_a != ""){
		if(username_b != ""){
			if(username_a != username_b){
				$.ajax({
					url : url,
					success : function(data){
						$("div.vcard-username").html(new_text);
					},
				});
			}
		}
	}

});