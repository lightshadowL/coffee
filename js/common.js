$(document).ready(function(){
    $(".m-open").click(function(){
        $("nav").addClass("active");
        $("html,body").css({
            "overflow":"hidden"
        })
    })
    $(".m-close").click(function(){
        $("nav").removeClass("active");
        $("html,body").css({
            "overflow":"auto"
        })
    })
    var winWidth=0;
    // .m-open 활성 비활성 disabled
    function dis(){
        winWidth=$(window).width();
        if(winWidth>=1024){
            // 1024이상일 때 처리
            console.log("1024이상")
            $(".m-open").attr("disabled","disabled");            
        }else{
            // 조건의 거짓 1024미만
            console.log("1024미만")
            $(".m-open").removeAttr("disabled","disabled");    
        }
    }
    dis();
    
    // 모바일 click이벤트 드롭다운
    function drop(){
        console.log("1024미만")
        $(".global-nav>div").click(function(){
            console.log("클릭")
            if($(this).find(".drop-down").is(":hidden")){
                // console.log("다운")
                $(".drop-down").slideUp();
                $(this).find(".drop-down").slideDown();
                $(".arrow").removeClass("fa-angle-down").addClass("fa-angle-right");
                $(this).find(".arrow").removeClass("fa-angle-right").addClass("fa-angle-down");
            }else{
                // console.log("업")
                $(".drop-down").slideUp();
                $(".arrow").removeClass("fa-angle-down").addClass("fa-angle-right");  
            }
            
        })
    }
    drop();

    // 창의 사이즈가 변경될 때 
    $(window).resize(function(){
        dis();
    })

    
})