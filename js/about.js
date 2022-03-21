(()=>{

	console.log("The js file for ");

	const showTextTrigger = document.querySelectorAll(".showTextTrigger"),

			sliderIcon = document.querySelectorAll(".sliderIcon"),
			promoImg = document.querySelector("#promoImg"),
			productName = document.querySelector("#productText h2"),
			productDesc = document.querySelector("#productText p"),

			playList = document.querySelectorAll(".playList"),
			videoPlayer = document.querySelector("#promoAd video");


	function expandText(event) {
		console.log(event);
		let currentBanner = event.target.dataset.about;
		document.querySelector(`#${currentBanner}Text`).style.display = "block";
	}


	showTextTrigger.forEach(banner => banner.addEventListener("click", expandText));


})();
