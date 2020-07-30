/*
    $("*")----전체요소선택
    $("태그명")----태그명으로 요소선택
    $("#아이디명")----아이디명으로 요소선택
    $(".클래스명")----클래스명으로 요소선택
    $("태그명1 태그명2")----태그명1 하위(모든 성씨가족) 요소선택
    $("태그명1>태그명2")----태그명1 자식(아빠) 요소선택
    ------------------------------------------
    $("선택요소").parent()----선택요소의 부모요소
    $("선택요소").children()----선택요소의 자식요소
    $("선택요소").prev()----선택요소의 형제 이전요소
    $("선택요소").next()----선택요소의 형제 다음요소
    $("선택요소").siblings()----선택요소의 형제두
    $(":종류")----폼의 input요소 중 종류가 일치하는 요소
*/

$(document).ready(function() {
    /*
    $("*").css("font-size","13px");
    $("h1").css("color","red");
    $("#firstTitle").css("color","green");
    $(".nextTitle").css("color","blue");
    $(".obj3>li").css("font-weight","bold");
    $(".obj3").children(".theObj1").css("color","purple");
    $(".obj5").parent().css("border","2px dashed #F00");
    $(".obj4").css({
        "color":"orange","font-size":"18px","background":"yellow"
    })
    $(".obj4").next().css("color","beige");
    $(".obj5").prev().css("text-align","right");
    $(".obj6").siblings("li").css("text-align","center");
    $(":text").css("background","black");
    */
    //탐색선택자 및 html whwkr
    /*
      $("ul li:odd")---ul li 요소중 홀수 인덱스
      $("ul li:even")---ul li 요소중 짝수 인덱스
      $("ul li:first")---ul li 요소중 첫번째 요소
      $("ul li:last")---ul li 요소중 마지막요소 요소
      $("ul li:eq(1)")---ul li 요소중 두번째 요소
      $("ul li:lt(3)")---ul li 요소중 네번째 이전요소
      $("ul li:gt(3)")---ul li 요소중 네번째 이후요소
      $("ul li:nth-child(2n)")---ul li 요소중 2의 배수
      $("ul li:has('span')")---ul li 요소중 span태그를 포함하는 요소
      $("ul li").filter(".theobj")---ul li 요소중 class=theobj인요소
      $("ul li").find("a")---ul li 요소중 a태그
      $("ul li:visible")---ul li 요소중 눈에보이는 요소
      $("ul li:hidden")---ul li 요소중 숨겨진 요소
      $("ul li").not(:empty)---ul li 요소중 내용을 가진 요소
      
      
    
    
    */
    /*
    $("#list1 li:odd").css("background","yellow");
    $("#list1 li:even").css("background","gray");
    $("#list1 li:first").css("color","red");
    $("#list1 li:last").css("color","green");
    $("#list1 li").eq(1).css("font-style","italic");
    $("#list1 li:lt(2)").css("border","2px dotted aqua");
    $("#list1 li:gt(2)").css("border","2px dotted purple");
    $("#list2 li:nth-child(2n)").css("background","orange");
    $("#list2 li:contains('리스트11')").css("color","red");
    $("#list2 li:has('span')").css("color","aqua");
    $("#list2 li").filter('.theobj').css("font-size","20px");
    $("#list2 li").find('a').css("background","red");
    */
    /*문서 객체 조작 매서드
    $("선택요소").html("새요소")---선택한 요소들을 새 요소로 변경;
    $("선택요소").text("새요소")---선택한 요소들을 새 텍스트로 변경;
    $("선택요소").append("새요소")---선택한 요소의 마지막 자식요소로 새요소를 추가;
    $("새요소").appendTo("요소선택")---선택한 요소의 마지막 자식요소로 새요소를 추가;
    $("선택요소").prepend("새요소")---선택한 요소의 마지막 첫자식요소로 새요소를 추가;
    $("선택요소").prependTo("요소선택")---선택한 요소의 마지막 첫자식요소로 새요소를 추가;
    $("선택요소").insertBefore("요소선택")---선택한 요소 이전위치에 형제요소로 새요소를 추가
    $("선택요소").insertAfter("요소선택")---선택한 요소 다음위치에 형제요소로 새요소를 추가
    $("선택요소").clone---선택요소를 복제(true:하위요소 포함 복사)
    $("선택요소").remove()---선택요소 삭제
    $("선택요소").empty()---선택요소의 하위요소들 모두 삭제
    $("선택요소").attr("속성")---선택요소의 특정 속성을 지정
    $("선택요소").attr("속성","값")---선택요소의 지정한 속성을 새값으로 변경
    $("선택요소").addClass("클래스명")---선택요소에 새 클래스명을 부여
    $("선택요소").toggleClass("클래스명")---선택요소에 새 클래스명이 없으면 추가 ,있으면 삭제
    $("선택요소").hadClass("클래스명")---선택요소에 클래스명이 있으면 TRUE반환
    $("선택요소").wrap("<div></div>")---선택요소를 <div>요소로 둘러쌈
    $("선택요소").prop("상태속성명")---선택한 상태 속성을 가져옴
    $("선택요소").prop("상태속성명","새값")---요소를 선택하여 상태 속성에 새값을 적용
    $("선택요소").val()---선택한 폼 요소의 value 값을 가져옴
    $("선택요소").val("새값")---폼 요소를 선택하여  value 속성에 새값을 적용
    
*/
    $(".theTitle").html("<a href=#>요소 객체 조작</a>");
    $(".obj1").text("리스트_2");
    $("#list3").append("<li>list_6</li>");
    $("<li>list_6</li>").appendTo("#list3");
    $("#list3").prepend("<li>list_1</li>");
    $("<li>list_1</li>").prependTo("#list3");
    $("<li>insertBefore</li>").insertBefore($("#list3 li").eq(4));
    $("<li>insertAfter</li>").insertAfter($("#list3 li").eq(5));
    $(".obj1").clone().appendTo("#list3");
    $("#list3 li").eq(0).remove();
    $("#list3 li").eq(0).attr("class","obj2");
    $(".obj2").css("background","yellow");
    $("#list3 li").eq(0).addClass("obj3");
    $("#list3 li").eq(0).removeClass("obj3");
    $("#list3 li").toggleClass("obj3");
    $("#list3 li").css("color","red");
    $("#list3 li").wrapAll("<div></div>");
    /*attr 속성 예제*/
    var srcVal=$("#sec_1 img").attr("src");
    $("#sec_1 img").attr({
        "width":200,"src":srcVal.replace("01.jpg","2.png")
    }).removeAttr("alt")
    //prop메서드(검사요소에서 콘솔박스에서 확인가능)
    /*선택한 폼 요소(선택상자,체크박스,라디오버튼)의 상태 속성값을 가져오거나 새롭게 설정할때 사용합니다.
    $("요소선택").prop("[checked|selected]",[true|false]);
    $("요소선택").prop("[tagname|nodeType|selected|defaultValue",[true|false]);
    */

    var result_1=$("#chk1").prop("checked");
    console.log(result_1);
    
    
     var result_2=$("#chk2").prop("checked");
    console.log(result_2);
    
    
    
    var result_3=$("#chk3").prop("checked",true);
    console.log(result_3);
   
    
   var result_4=$("#se_1").prop("selectedIndex");
    console.log(result_4);
    if(result_4==0){
        alert("선택완료");
    }
    
    //val메서드
    var result_1=$("#user_name").val();
    console.log(result_1);
    
    $("#user_id").var("javascript");
    
    var result_2=$("#user_id").prop("defaultValue");
    console.log(result_2);
    
    
     //prop메서드
    /*선택한 폼 요소(선택 상자, 체크박스, 라디오 버튼)의 상태 속성값을 가져오거나 새롭게 설정할 때 사용합니다.
    $("요소 선택").prop("[checked|selected]",[ture|false]);
    $("요소 선택").prop("[tagName|nodeType|selectedIndex|defaultValue]");
    
    1.선택한 폼 요소(체크박스,라디오버튼,선택상자)가 체크된상태인지, 선택된 상태인지 알수있다.
    예를 들어 선택한 요소가 체크박스이고 체크된 상태에서 prop("checked")를 적용하였다면 true를 아니면 false를 반환
    2.선택한 폼 요소(체크박스,라디오버튼,선택상자)를 선택하여 체크 또는 선택 상태를 바꿀 수 있습니다.
    3.선택한 요소의 태그명이나 노드타입 선택된옵션의 인덱스값을 구함.
    이때 폼 요소에 prop("defaltValue")를 사용하면 사용자가 value값을 바꿔도 초기의 value 속성값을 가져옴    */
    
    var result_1=$("#chk1").prop("checked");
    console.log(result_1);

    var result_2=$("#chk2").prop("checked");
    console.log(result_2);
    
    var result_3=$("#chk3").prop("checked",true);
    
    var result_4=$("#se_1").prop("selectedIndex");
    if(result_4==0){
        alert('ddd')
    }
    
    //val메서드
    var result_1=$("#user_name").val();
    console.log(result_1);
    
    $("#user_id").val("javascript");
    
    var result_2=$("#user_id").prop("defaultValue");
    console.log(result_2);
    
    
    
    /*
    수치조작 메서드
    요소의 속성을 조작할 때 사용하는 메서드.
    $("선택 요소").height() --- 안쪽 여백과 선을 제외한 높잇값을 반환하거나 변환합니다.
    $("선택 요소").width() --- 안쪽 여백과 선을 제외한 너빗값을 반환하거나 변환합니다.
    $("선택 요소").innerWidth() --- 안쪽 여백을 포함한 너빗값을 반환하거나 변환합니다.
    $("선택 요소").innerHeight() --- 안쪽 여백을 포함한 높잇값을 반환하거나 변환합니다.
    $("선택 요소").outerHeight() --- 선과 안쪽 여백을 포함한 높잇값을 반환하거나 변환합니다.
    $("선택 요소").outerWidth() --- 선과 안쪽 여백을 포함한 너빗값을 반환하거나 변환합니다.
    $("선택 요소").position().left/top --- 선택한 요소의 포지션 위칫값을 반환합니다.
    $("선택 요소").offset().left/top --- 선택한 요소가 문서에서 수평/수직으로 얼마나 떨어져 있는 지에 대한 값을 반환합니다.
    $(window).scrollLeft() --- 브라우저의 수평 스크롤 이동 높잇값을 반환합니다.
    $(window).scrollTop() --- 브라우저의 수직 스크롤 이동 높잇값을 반환합니다.
    */
    
    var w1=$("#p1").width();
    console.log(w1);
    
    var w2=$("#p1").innerwidth();
    console.log(w2);
    
     var w3=$("#p1").ounterwidth();
    console.log(w3);
    
    $("#p2").outerWidth(100).outerHeight(100);
    
    var $txt1=$("txt_2 span"),$txt2=$("txt_2 span"),$box=$(".box");
    
    var off_t=$box.offset().top;
    var off_t=$box.position().top;
    
    $txt1.text(off_t);
    $txt2.text(pos_t);
  
    
}