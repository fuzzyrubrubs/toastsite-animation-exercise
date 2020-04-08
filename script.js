// function theGreatToastExpand(){
//     var img = document.querySelector(".news-img-block");
//     img.classList.remove("slider-block");
//     img.classList.add("greatToastExpand");
//     img.style.background = "#000";
// }

// theGreatToastExpand();


var toastController = (function(){
    var num = 0;
    var loops = 0;
    var clicks = 0;
    var textCount = 1;
    var toastCount = 1;

    var changeHeader = function(events){
        // var loops = events < 5 ? 0 : events < 9 ? 1 : 2;
        var arr = ['Did', 'Someone', 'Say', 'Toast'];
        var headText = document.querySelector(".banner-text__heading");     
        clicks++
        if(loops >= 2){
            var textArr = [];
            for(var i = 0; i < clicks; i++){
                textArr.push(arr[i]);
            }
            var arrStr = textArr.join(" ");
            console.log(arrStr);
            headText.textContent = arrStr;
            if (loops > 2){
                loops = 0;

            }
        } else if(loops === 1) {
            headText.textContent = arr[events];
        } else {
            headText.textContent = arr[events];
        }
    }

    var changeSecondHeader = function() {
        var headerTwoContent = document.querySelector('.banner-text__subheading');
        var headTwoStr = headerTwoContent.textContent = "Someone said toast";
        setTimeout(function(){
            headerTwoContent.textContent = headTwoStr + " , I heard someone say toast";
        }, 3000);
    }

    var changeThirdHeader = function(){
        document.querySelector(".header-3").textContent = "I think someone said Toast";
    }

    var changeImage = function(){
        document.querySelector(".news-img-block").style.backgroundImage = "url('vendor/toast.png')";
        document.querySelector(".news-img-block").classList.remove("slider-block");
        document.querySelector(".news-img-block").style.flexBasis = "220px";
        // document.querySelector(".news-img-block").style.height = "280px";
        // document.querySelector(".news-img-block").style.transform = "scale(0.8)";     
    }

    var changeText = function() {
        textCount += 3;
        var para = document.querySelector(".main-p");
        var paraPreStr = para.textContent;
        var paraArr = paraPreStr.split(" ");

            for (var i = 0; i < textCount; i++){
                paraArr[i] = "Toast";
            }

        if(paraArr.length = 134){
            var paraStr = paraArr.join(" ");
            para.textContent = paraStr;
        }
        // 104
    }

    function breakingToast(){
        var titles = document.querySelectorAll('.ticker-title span');
        var titlesArr = Array.from(titles);
        console.log(titlesArr);
        titlesArr.forEach(function(current){
         current.textContent = "Breaking Toast";
         console.log(current);
        });
     }

    function toastSlider(){
           // Gradule 
        // toastCount++;
        // var ticker = document.querySelector(".ticker-text");
        // var tickerStr = ticker.textContent;
        // var tickerArr = tickerStr.split(" ");

        //     for (var i = 0; i < toastCount; i++){
        //         tickerArr[i] = '<img class="tiny-toast" src="vendor/toast.png">';
        //     }

        // if(tickerArr.length = 75){
        //     var ticketStrFinished = tickerArr.join(" ");
        //     ticker.innerHTML = ticketStrFinished;
        // }

        var arr = [];
        for(var i = 0; i < 75; i++){
            arr.push('<img class="tiny-toast" src="vendor/toast.png">');
        }
        document.querySelector(".ticker-text").innerHTML = arr;
    }

    function toastBubble() {
        document.querySelector(".toast-speech").style.display = "block";
        document.querySelector(".toast-speech__text").style.display = "block";
    }

    function theGreatToastExpand(){
        var imgblock = document.querySelector(".news-img-block");
        imgblock.classList.add("greatToastExpand");

        setInterval(function(){
            document.querySelector(".toast-speech__text").textContent = "It's Toast Time!";
            document.querySelector(".toast-speech__text").style.left = "94%";
        }, 2000);
        
    }
    
    return {
        clicked: function() {
            console.log(num);
            console.log(clicks);
            console.log(loops);
            num++
            if(clicks >= 4){
                clicks = 0;
                loops++
            }
            
            changeHeader(clicks);

            if(num === 4){
                changeSecondHeader();
            }
            if(num === 8){
                changeThirdHeader();
            }
            if(num === 10){
                changeImage();
            }
            if(num > 11){
                changeText();
            } 
            if(num === 16){
                breakingToast();
            }
            if(num === 18){
                toastSlider();
            }
            if(num === 20){
                toastBubble();
            }
            if(num === 26){
                console.log("24 successful");
                theGreatToastExpand();
            }
        }
    }
})();


var appListener = (function (toastCtrl){
    var isRecursiveOn = true;  // by default it will be true
    var interval;
    var btnProg = 0;

    var speechbubble = document.querySelector(".icon-speech__text");

    function didYouSayToast(){
        speechbubble.style.top = "50%";
        speechbubble.style.left = "51%";
        speechbubble.innerHTML = "Did you say<br> Toast?";
        speechbubble.style.transform = "none";
        speechbubble.style.transition = "opacity .4s cubic-bezier(0.68, -0.55, 0.265, 1.55)";
    }
    function mouseOn(){
        document.querySelector(".btn-yes").style.display = "block";
        document.querySelector(".btn-no").style.display = "block";
        speechbubble.style.top = "52%";
        speechbubble.style.left = "52.5%";
        speechbubble.innerHTML = "Well?";
        document.querySelector(".toast-btn-img").addEventListener("click", function(){
            document.querySelector(".icon-speech__text").textContent = "Ouch!";
        });
    }

    function textWell(){   
        document.querySelector(".toast-btn-img").addEventListener("mouseover", mouseOn);       
    }

    function triggers(){

        if  (isRecursiveOn) {  // check the flag
            isRecursiveOn = false;
            interval = setInterval(toastCtrl.clicked, 650); // assigned to a variable                
       } else {
           clearInterval(interval);
           isRecursiveOn = true; //reset it
       }     
    }

    function begin(){
        btnProg++
        if(btnProg === 1){
         didYouSayToast(); 
         textWell();  
        }

        if(btnProg > 1){
            document.querySelector(".icon-speech__text").textContent = "Ouch!";
            speechbubble.style.top = "52%";
            speechbubble.style.left = "52.5%";
        }
    }

    function toastAppears(){
        document.querySelector(".toast-btn-img").style.display = "block";
    }
    function toastBye(){
        document.querySelector(".toast-btn-img").classList.add("vanish");
        document.querySelector(".btn-yes").style.display = "none";
        document.querySelector(".btn-no").style.display = "none";
        document.querySelector(".active-toast").removeEventListener("click", toastAppears);
        document.querySelector(".active-toast").classList.remove("active-toast");
        

        setTimeout(function(){
            document.querySelector(".toast-btn-img").style.display = "none";
        }, 4900);
    }
    function toastYay(){
        document.querySelector(".toast-btn-img").classList.add("holy");
        document.querySelector(".btn-yes").style.display = "none";
        document.querySelector(".btn-no").style.display = "none";
        document.querySelector(".icon-speech").style.display = "none";
        document.querySelector(".icon-speech__text").style.display = "none";
        document.querySelector(".toast-btn-img").removeEventListener("mouseover", mouseOn);
        document.querySelector(".toast-btn-img").addEventListener("click", triggers);
    }


    document.querySelector(".toast-btn-img").addEventListener("click", begin);
    document.querySelector(".active-toast").addEventListener("click", toastAppears);
    document.querySelector(".btn-yes").addEventListener("click", toastYay);
    document.querySelector(".btn-no").addEventListener("click", toastBye);

})(toastController);



// H2 Someone said Toast, I heard someone say Toast
//H3 I think someone said Toast