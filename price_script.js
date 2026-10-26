$(window).load(function(){

//	타이틀변경
	//$(document).attr("title",'한국소비자원 참가격'+' 개인서비스요금 가격동향');	
	
	// 지역코드 설정
	fn_getCodeStat("", "020000000", "larea", $("#lflag").val());
	
	var sear =  $("#Searchflag").val();
	var term =  $("#termflag").val();
	//입력기간
	if(sear == 0 && term == 0){
		 $("#mon1").css("display","");
		 $("#mon2").css("display","none");
		 $("#mon3").css("display","none");
		 $("#year1").css("display","none");
		 $("#year2").css("display","none");
		 $("#year3").css("display","none");
	}else if(sear == 0 && term == 2){
		 $("#mon1").css("display","none");
		 $("#mon2").css("display","none");
		 $("#mon3").css("display","none");
		 $("#year1").css("display","");
		 $("#year2").css("display","none");
		 $("#year3").css("display","none");
	}else if(sear == 1 && term ==0 ){
		 $("#mon1").css("display","none");
		 $("#mon2").css("display","");
		 $("#mon3").css("display","");
		 $("#year1").css("display","none");
		 $("#year2").css("display","none");
		 $("#year3").css("display","none");
	}else if(sear == 1 && term == 2){
		 $("#mon1").css("display","none");
		 $("#mon2").css("display","none");
		 $("#mon3").css("display","none");
		 $("#year1").css("display","none");
		 $("#year2").css("display","");
		 $("#year3").css("display","");
	}
	
	// 조건별 그리드
	if(sear == '0' && term == '0' ){
		 $("#exceldn").css("display","");
		 $("#op1").css("display","");
		 $("#op2").css("display","none");
	}else if(sear == '0' && term == '2'){
		 $("#exceldn").css("display","");
		 $("#op1").css("display","");
		 $("#op2").css("display","none");
	}else if(sear == '1' && term == '0'){
		 $("#exceldn").css("display","");
		 $("#op1").css("display","none");
		 $("#op2").css("display","");
	}else if(sear == '1' && term == '2'){
		 $("#exceldn").css("display","");
		 $("#op1").css("display","none");
		 $("#op2").css("display","");
	}
	// 메뉴변경
	if(sear == '0'){
		 $("#sc_area").css("display","none");
		 $("#sc_prod").css("display","");
	}else if(sear == '1'){
		 $("#sc_area").css("display","");
		 $("#sc_prod").css("display","none");
	}
	// 메뉴변경
	if(sear == '0'){
		 $("#sc_area").css("display","none");
		 $("#sc_prod").css("display","none");
		 $("#feearea").attr('colspan','5');
//		 $("#menu2").attr('class','');
	}else if(sear == '1'){
		 $("#sc_area").css("display","");
		 $("#sc_prod").css("display","");
		 $("#feearea").attr('colspan','3');
	}
	
	//개월 조정을 위한 부분
	if(($("#categories").val()).length > 0){
	var startbun = Number($("#startNum").val());
	var endbun = Number($("#endNum").val());
	var countbun = Number($("#countNum").val());
	var i = "";
	if(endbun > 6){
		for(i = startbun ; i <= countbun ; i++){
			$("[name="+i+"]").css("display","");
			}
			if(endbun == countbun){
				$("[name=prevGo]").show();
				$("[name=prevGo]").attr("tabindex","0");
				$("[name=nextGo]").hide();
				$("[name=nextGo]").removeAttr("tabindex");
				$("[name=pre_btn]").show();
				$("[name=next_btn]").hide();
			}else if(startbun == 1){
				$("[name=prevGo]").hide();
				$("[name=prevGo]").removeAttr("tabindex");
				$("[name=nextGo]").show();
				$("[name=nextGo]").attr("tabindex","0");
				$("[name=pre_btn]").hide();
				$("[name=next_btn]").show();
			}else{
				$("[name=prevGo]").show();
				$("[name=prevGo]").attr("tabindex","0");
				$("[name=nextGo]").show();
				$("[name=nextGo]").attr("tabindex","0");
				$("[name=pre_btn]").show();
				$("[name=next_btn]").show();
			}
	}else{
			for(i=startbun ; i<= endbun ;i++){
			$("[name="+i+"]").css("display","");
			}
			$("[name=prevGo]").hide();
			$("[name=prevGo]").removeAttr("tabindex");
			$("[name=nextGo]").hide();
			$("[name=nextGo]").removeAttr("tabindex");
			$("[name=pre_btn]").hide();
			$("[name=next_btn]").hide();
			
		}
	}
	
});



$(document).ready(function(){
	
	$("#pageUnit").change(function() {
		$("#searchOrExcel").val("search");
		var termflag = $("#term option:selected").val();
		$("#termflag").val(termflag);
		var Searchflag = $("#sear option:selected").val();
		$("#Searchflag").val(Searchflag);
		var url ="";
		if(Searchflag == '1' && termflag == '0'){
	        url = "/tprice/portal/pricetrend/personalservicetrend/getPersonalTFeeList.do";
		   	}else if(Searchflag == '1' && termflag == '2'){
		        url = "/tprice/portal/pricetrend/personalservicetrend/getPersonalTFeeYList.do";
		   	}
		
		// 프로시그바 시작
    	fn_progressPop();
		$("#listForm")
		.attr("action", url)
		.attr("onSubmit", "return true")
		.submit();
    });	
	
	$("input[type=checkbox]").click(function() {
    	var intLength = $("input[type=checkbox]:checked").length;
    	if(intLength > 5) {
    	alert("차트보기 상품은 5개 까지 가능합니다.");
    	$(this).attr("checked", false);
    	return;
    	}
    });
	
	$("[name=prevGo]").click(function(){
		var startbun = $("#startNum").val();//시작
		var endbun = $("#endNum").val();//끝
		var countbun = $("#countNum").val();//디스플레이 번호
		
		var end = Number(endbun);
		var count = Number(countbun) - 1;
		var start = Number(startbun) - 1;
		$("#countNum").val(count);
		$("#startNum").val(start);
		$("[name="+countbun+"]").css("display","none");
		$("[name="+start+"]").css("display","");
		if(start == '1'){
			$("[name=prevGo]").hide();
			$("[name=prevGo]").removeAttr("tabindex");
			$("[name=pre_btn]").hide();
		}else{
			$("[name=prevGo]").show();
			$("[name=prevGo]").attr("tabindex","0");
			$("[name=pre_btn]").show();
		}
		
		if(count == end){
			$("[name=nextGo]").hide();
			$("[name=nextGo]").removeAttr("tabindex");
			$("[name=next_btn]").hide();
		}else {
			$("[name=nextGo]").show();
			$("[name=nextGo]").attr("tabindex","0");
			$("[name=next_btn]").show();
		}
		
 	});
	$("[name=nextGo]").click(function(){
		var startbun = $("#startNum").val();
		var endbun = $("#endNum").val();
		var countbun = $("#countNum").val();
		var end = Number(endbun);
		var count = Number(countbun) + 1;
		var start = Number(startbun) + 1;
		//alert(startbun +"/"+ endbun +"/"+ countbun );
		$("#countNum").val(count);
		$("#startNum").val(start);
		$("[name="+count+"]").css("display","");
		$("[name="+startbun+"]").css("display","none");
		
		if(count == end){
			$("[name=nextGo]").hide();
			$("[name=nextGo]").removeAttr("tabindex");
			$("[name=next_btn]").hide();
		}else{
			$("[name=nextGo]").show();
			$("[name=nextGo]").attr("tabindex","0");
			$("[name=next_btn]").show();
		}
		
		if(start > 1){
			$("[name=prevGo]").show();
			$("[name=prevGo]").attr("tabindex","0");
			$("[name=pre_btn]").show();
		}else{
			$("[name=prevGo]").hide();
			$("[name=prevGo]").removeAttr("tabindex");
			$("[name=pre_btn]").hide();
		}
 	});
	
	$("[name=prevGo]").keydown(function(key){
		if(key.keyCode == 13 || key.keyCode == 32) {
			$("[name=prevGo]").click();
		}
	});
	
	$("[name=nextGo]").keydown(function(key){
		if(key.keyCode == 13 || key.keyCode == 32) {
			$("[name=nextGo]").click();
		}
	});
	
//	조회조건 변경시 날짜 박스 컨트롤
	$("[name=sear],[name=term]").change(function(){
		
		var sear = $("#sear option:selected").val();
    	$("#Searchflag").val(sear);
    	var term = $("#term option:selected").val();
    	$("#termflag").val(term);
    	
    	if(sear == 0 && term == 0){
   		 $("#mon1").css("display","");
   		 $("#mon2").css("display","none");
   		 $("#mon3").css("display","none");
   		 $("#year1").css("display","none");
   		 $("#year2").css("display","none");
   		 $("#year3").css("display","none");
   	}else if(sear == 0 && term == 2){
   		 $("#mon1").css("display","none");
   		 $("#mon2").css("display","none");
   		 $("#mon3").css("display","none");
   		 $("#year1").css("display","");
   		 $("#year2").css("display","none");
   		 $("#year3").css("display","none");
   	}else if(sear == 1 && term ==0 ){
   		 $("#mon1").css("display","none");
   		 $("#mon2").css("display","");
   		 $("#mon3").css("display","");
   		 $("#year1").css("display","none");
   		 $("#year2").css("display","none");
   		 $("#year3").css("display","none");
   	}else if(sear == 1 && term == 2){
   		 $("#mon1").css("display","none");
   		 $("#mon2").css("display","none");
   		 $("#mon3").css("display","none");
   		 $("#year1").css("display","none");
   		 $("#year2").css("display","");
   		 $("#year3").css("display","");
   	}

	// 메뉴변경
	if(sear == '0'){
		 $("#sc_area").css("display","none");
		 $("#sc_prod").css("display","none");
		 $("#feearea").attr('colspan','5');
//		 $("#menu2").attr('class','');
	}else if(sear == '1'){
		 $("#sc_area").css("display","");
		 $("#sc_prod").css("display","");
		 $("#feearea").attr('colspan','3');
	}
	
	});
	
	//조회
	$("#search_btn").click(function(){
		$("#searchOrExcel").val("search");
		
        // 페이지 번호 초기화
		$("[name=pageNo]").val("1");
    	// 검색조건 유지값 셋팅
    	
    	var termflag = $("#term option:selected").val();
    	$("#termflag").val(termflag);
    	var Searchflag = $("#sear option:selected").val();
    	$("#Searchflag").val(Searchflag);
    	
    	var lflag = $("#larea option:selected").val();
    	$("#lflag").val(lflag);
    	var feeflag = $("#feebox option:selected").val();
    	$("#feeflag").val(feeflag);
    	var aomflag = $("#aomflag option:selected").val();
    	$("#aomflag").val(aomflag);
    	
    	// 프로시그바 시작
    	fn_progressPop();
    	//월 기간셋팅
    	if(Searchflag == '1' && termflag == '0'){
    	var mon1 = $("#mon2 option:selected").val();
    	$("#monthS").val(mon1);
    	var mon2 = $("#mon3 option:selected").val();
    	$("#monthE").val(mon2);
    	$("#datename").val("월");   
    	
		var one1 = Number(mon1.substring(0,4));
    	var one2 = Number(mon1.substring(5,7));
    	
    	$("#one").val(mon1);
    	var gap = one1*12+one2;
     	
     	var two = $("#mon3 option:selected").val();
     	var two1 = Number(two.substring(0,4));
    	var two2 = Number(two.substring(5,7));
     	var Cnt = (two1*12+two2)-(one1*12+one2);
     	$("#Cnt").val(Cnt);
//     	alert(Cnt);
     	if(Cnt > 11){
     		alert("조회가능한 기간은 최대 12개월 입니다.");
     		fn_progressPopClose();
     	}else if(Cnt < 0){
     		alert("선택하신  조회 종료월이 시작월의 이전 시점입니다.");
     		fn_progressPopClose();
     	}else if(Cnt == 0){
     		alert("선택하신 입력월이 동일합니다. ");
     		fn_progressPopClose();
     	}
     	else {
    	var arrid = new Array();
 //   	alert(gap);
    	for(var i=1; i <=Cnt ; i++ ){
    	var searstart1 = Math.floor(((gap+i)/12));	
    	var searstart2 = (gap+i)%12;
    	var start="";
	    if(searstart2 == 1){
			 start = "-01";
		}else if(searstart2 == 2){
			 start = "-02";
		}else if(searstart2 == 3){
			 start = "-03";
		}else if(searstart2 == 4){
			 start = "-04";
		}else if(searstart2 == 5){
			 start = "-05";
		}else if(searstart2 == 6){
			 start = "-06";
		}else if(searstart2 == 7){
			 start = "-07";
		}else if(searstart2 == 8){
			 start = "-08";
		}else if(searstart2 == 9){
			 start = "-09";
		}else if(searstart2 == 10){
			 start = "-10";
		}else if(searstart2 == 11){
			 start = "-11";
		}else if(searstart2 == 0){
			 start = "-12";
			searstart1 = searstart1-1;
		}
    	var startyearmon = String(searstart1)+start;
    	arrid.push(startyearmon);
    	}
    	$("#twelve").val(arrid[10]);
    	$("#eleven").val(arrid[9]);
    	$("#ten").val(arrid[8]);
    	$("#nine").val(arrid[7]);
    	$("#eight").val(arrid[6]);
    	$("#seven").val(arrid[5]);
    	$("#six").val(arrid[4]);
    	$("#five").val(arrid[3]);
    	$("#four").val(arrid[2]);
    	$("#three").val(arrid[1]);
    	$("#two").val(arrid[0]);
    	
    	var categories = new Array();
    	categories.push(mon1);
    	for(var j =0 ; j <= Cnt-1 ; j++){
    		categories.push(arrid[j]);
    	}
    	$("#categories").val(categories);
    	var endNum = categories.length;
    	$("#endNum").val(endNum);
		$("#startNum").val("1");
		$("#countNum").val("6");    	    	
        $("#listForm")
        .attr("action", "/tprice/portal/pricetrend/personalservicetrend/getPersonalTFeeList.do")
        .attr("onSubmit", "return true")
        .submit();
     		}
    	}

    	//지역 월 선택
    	else if (Searchflag == '0' && termflag == '0'){
        	var mon1 = $("#mon1 option:selected").val();
        	$("#monthS").val(mon1);
    		$("#one").val(mon1);
    		$("#Cnt").val('0');
    		$("#datename").val("월");
    		$("#categories").val(mon1);
    		$("#endNum").val("17");
    		$("#startNum").val("1");
    		$("#countNum").val("8");
    		$("#listForm")
            .attr("action", "/tprice/portal/pricetrend/personalservicetrend/getPersonalTAreaList.do")
            .attr("onSubmit", "return true")
            .submit();
	    }

    	// 년 선택
    	else if (Searchflag == '0' && termflag == '2'){
		
    	var year1 = $("#year1 option:selected").val();
    	$("#monthS").val(year1);
		$("#one").val(year1);
		$("#Cnt").val('0');
		$("#datename").val("년");
		$("#categories").val(year1);
		$("#endNum").val("16");
		$("#startNum").val("1");
		$("#countNum").val("8");
        $("#listForm")
        .attr("action", "/tprice/portal/pricetrend/personalservicetrend/getPersonalTAreaYList.do")
        .attr("onSubmit", "return true")
        .submit();
    	}
    	
    	// 년 기간  셋팅
    	else if (Searchflag == '1' && termflag == '2'){
    	var year1 = $("#year2 option:selected").val();
    	$("#monthS").val(year1);
    	var year2 = $("#year3 option:selected").val();
    	$("#monthE").val(year2);		
    	$("#one").val(year1);
    	var one1 = Number(year1);
    	var one2 = Number(year2);
    	$("#datename").val("년");
    	var Cnt = one2-one1;
    	$("#Cnt").val(Cnt);
    	if(Cnt > 3){
     		alert("조회가능한 년도는 최대 4년도 입니다.");
     		fn_progressPopClose();
     	}else if(Cnt < 0){
     		alert("선택하신  조회 년도가 시작년도 이전 시점입니다.");
     		fn_progressPopClose();
     	}else if(Cnt == 0){
     		alert("선택하신 년도가 동일합니다. ");
     		fn_progressPopClose();
     	}
     	else {
 		var arrmon = new Array();
		var categories = new Array();
    	categories.push(year1);
    	for(var i=1 ; i <= Cnt ; i++){
    		arrmon.push(one1+i);
    		categories.push(one1+i);
    	}
		$("#four").val(arrmon[2]);
		$("#three").val(arrmon[1]);
		$("#two").val(arrmon[0]);
		$("#categories").val(categories);
    	var endNum = categories.length;
    	$("#endNum").val(endNum);
		$("#startNum").val("1");
		$("#countNum").val("4");
		
        $("#listForm")
        .attr("action", "/tprice/portal/pricetrend/personalservicetrend/getPersonalTFeeYList.do")
        .attr("onSubmit", "return true")
        .submit();    
     	}
    	}
    	
});
 
    $("#btn_excelDownload").click(function(){
        // 조회, 엑셀다운 구분자
    	$("#searchOrExcel").val("excel");
        var termflag = $("#term option:selected").val();
    	$("#termflag").val(termflag);
    	var Searchflag = $("#sear option:selected").val();
    	$("#Searchflag").val(Searchflag);
    	var url ="";
    	if(Searchflag == '1' && termflag == '0'){
         url = "/tprice/portal/pricetrend/personalservicetrend/getPersonalTFeeList.do";
    	}else if(Searchflag == '1' && termflag == '2'){
         url = "/tprice/portal/pricetrend/personalservicetrend/getPersonalTFeeYList.do";
    	}else if(Searchflag == '0' && termflag == '0'){
         url = "/tprice/portal/pricetrend/personalservicetrend/getPersonalTAreaList.do";
    	}else if(Searchflag == '0' && termflag == '2'){
         url = "/tprice/portal/pricetrend/personalservicetrend/getPersonalTAreaYList.do";
    	}
        $("#listForm")
            .attr("action", url)
            .attr("onSubmit", "return true")
            .submit();
    });
    
//    $("#op2 thead tr th").click(function() {
//		$("#searchOrExcel").val("search");
//		var orderColumn = $(this).attr("headers");
//		var className = $(this).children("span").attr("class");
//		var order = "DESC";
//		var url ="";
//		if (className.indexOf("down") != -1) {
//			order = "ASC";
//		} else {
//			order = "DESC";
//		}
//		$("#orderColumn").val(orderColumn);
//		$("#order").val(order);
//		var termflag = $("#term option:selected").val();
//	    $("#termflag").val(termflag);
//	    var Searchflag = $("#sear option:selected").val();
//	    $("#Searchflag").val(Searchflag);
//    	if(Searchflag == '1' && termflag == '0'){
//             url = "/tprice/portal/pricetrend/personalservicetrend/getPersonalTFeeList.do";
//        	}else if(Searchflag == '1' && termflag == '2'){
//             url = "/tprice/portal/pricetrend/personalservicetrend/getPersonalTFeeYList.do";
//        	}
//		
//		$("#listForm")
//		.attr("action", url)
//		.attr("onSubmit", "return true")
//		.submit();
//	});

});

function fn_gotoPage(page){
	var termflag = $("#term option:selected").val();
	$("#termflag").val(termflag);
	var Searchflag = $("#sear option:selected").val();
	$("#Searchflag").val(Searchflag);
	var url ="";
	if(Searchflag == '1' && termflag == '0'){
        url = "/tprice/portal/pricetrend/personalservicetrend/getPersonalTFeeList.do";
	   	}else if(Searchflag == '1' && termflag == '2'){
	        url = "/tprice/portal/pricetrend/personalservicetrend/getPersonalTFeeYList.do";
	   	}
	
    $("#sendFields").html(makeField("lflag", $("#lflag").val()));
    $("#sendFields").append(makeField("pflag", $("#pflag").val()));
    $("#sendFields").append(makeField("feeflag", $("#feeflag").val()));
    $("#sendFields").append(makeField("aomflag", $("#aomflag").val()));
    $("#sendFields").append(makeField("termflag", $("#termflag").val()));
    $("#sendFields").append(makeField("monthS", $("#monthS").val()));
    $("#sendFields").append(makeField("monthE", $("#monthE").val()));
    $("#sendFields").append(makeField("Searchflag", $("#Searchflag").val()));
    $("#sendFields").append(makeField("one", $("#one").val()));
    $("#sendFields").append(makeField("two", $("#two").val()));
    $("#sendFields").append(makeField("three", $("#three").val()));
    $("#sendFields").append(makeField("four", $("#four").val()));
    $("#sendFields").append(makeField("five", $("#five").val()));
    $("#sendFields").append(makeField("six", $("#six").val()));
    $("#sendFields").append(makeField("seven", $("#seven").val()));
    $("#sendFields").append(makeField("eight", $("#eight").val()));
    $("#sendFields").append(makeField("nine", $("#nine").val()));
    $("#sendFields").append(makeField("ten", $("#ten").val()));
    $("#sendFields").append(makeField("eleven", $("#eleven").val()));
    $("#sendFields").append(makeField("twelve", $("#twelve").val()));
    $("#sendFields").append(makeField("Cnt", $("#Cnt").val()));
    $("#sendFields").append(makeField("datename", $("#datename").val()));
    $("#sendFields").append(makeField("orderColumn", $("#orderColumn").val()));
    $("#sendFields").append(makeField("order", $("#order").val()));
    $("#sendFields").append(makeField("searchManu", $("#searchManu").val()));
    $("#sendFields").append(makeField("categories", $("#categories").val()));
    $("#sendFields").append(makeField("countNum", $("#countNum").val()));
    $("#sendFields").append(makeField("startNum", $("#startNum").val()));
    $("#sendFields").append(makeField("endNum", $("#endNum").val()));    
//   $("#sendFields").append(makeField("pageUnit", $("select[name='pageUnit'] option:selected").val()));
    gotoPageSend(page, url); 
}

