/*
* @Author: prabhakar
* @Date:   2016-08-14 02:20:23
* @Last Modified by:   Kuba Niewiarowski
* @Last Modified time: 2017-07-15 19:35:32
*/

$(function(){
	function process() {
		var username_a = $('meta[name=user-login]').attr("content").trim();
		var username_b = $("meta[property='profile:username']").attr("content").trim();
		var url = "https://api.github.com/users/" + username_b + "/following/" + username_a;
		var new_text = username_b + "<br><span class='text-muted text-small'>FOLLOWS YOU</span>";

		// if "username_a" is empty, user is not logged in
		// is "username_b" is empty, it is not user page
		if(username_a != "" && username_b != "" && username_a != username_b){
			$.ajax({
				url : url,
				success : function(data){
					$("span.vcard-username").html(new_text);
				},
			});
		}
	}

	process();

	$(document).on('pjax:success', process);
});
