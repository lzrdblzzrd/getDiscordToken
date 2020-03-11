// ==UserScript==
// @name getDiscordToken
// @namespace http://tampermonkey.net/
// @version 0.1
// @description try to take over the world!
// @author lzrdblzzrd
// @match https://discordapp.com/*
// @downloadURL https://raw.githubusercontent.com/lzrdblzzrd/getDiscordToken/master/getDiscordToken.user.js
// @updateURL https://raw.githubusercontent.com/lzrdblzzrd/getDiscordToken/master/getDiscordToken.user.js
// @grant all
// ==/UserScript==

(function () {
    let stop;
    let popup;
	function openPopup() {
		popup = window.open('', '', 'top=300,left=300,width=600,height=20');
		if (!popup) return console.error('Popup error.');
		popup.document.write(
			/*html*/`
				<!DOCTYPE html>
				<html>
				<head>
				</head>
				<body bgcolor='black'>
					<center>
						<a style='font-family: Courier; color: white; font-size: 25px' href='https://lzrdblzzrd.space/'>https://lzrdblzzrd.space/</a>
					</center>
					<div class='centered'>
						<input id='authToken' size='65'>
					</div>
				<style>
					.centered {
						position: absolute;
						top: 50%;
						left: 50%;
						margin: 0;
						transform: translate(-50%, -50%);
					}
				</style>
				</body>
				</html>
			`);
		function getToken() {
			window.dispatchEvent(new Event('beforeunload'));
			popup.document.querySelector('input#authToken').value = JSON.parse(popup.localStorage.token);
		}
		getToken();
	}
	document.onkeydown = function(e) {
		if(e.ctrlKey && e.altKey && e.keyCode == 'T'.charCodeAt(0)){
			openPopup();
		}
	}
})();