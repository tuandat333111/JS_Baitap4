/**
 * Bài tập 1:
 * Mô hình 3 khối:
 * + Đầu vào:
 * Nhập ngày tháng năm
 * + Xử lí:
 * Kiểm tra năm nhập vào phải năm nhuận.
 * Kiểm tra tháng nhập vào có bao nhiêu ngày.
 * Tính ngày liền trước và ngày liền sau của ngày nhập vào.
 * + Đầu ra:
 * Xuất ra màn hình ngày liền trước và ngày liền sau:
 */
document.getElementById("btnShowDate").onclick=function(){
    var day=document.getElementById("day").value*1;
    var month=document.getElementById("month").value*1;
    var year=document.getElementById("year").value*1;
    var isSP=false;
    var preday=0;
    var premonth=0;
    var preyear=0;
    var nextday=0;
    var nextmonth=0;
    var nextyear=0;
    var resultShowDate="";
    if((year%4===0&&year%100!==0)||(year%100===0&&year%400===0)){
        isSP=true;
    }
    else{
        isSP=false;
    }
    if(month===1){
        if(day===1){
            preday=31;
            premonth=12;
            preyear=year-1;
            nextday=day+1;
            nextmonth=month;
            nextyear=year;
        }
        else if(1<day<31){
            preday=day-1;
            premonth=month;
            preyear=year;
            nextday=day+1;
            nextmonth=month;
            nextyear=year;
        }
        else if(day===31){
            preday=day-1;
            premonth=month;
            preyear=year;
            nextday=1;
            nextmonth=month+1;
            nextyear=year;
        }
    }
    if (month===2){
        if(day===1){
            preday=31;
            premonth=month-1;
            preyear=year;
            nextday=day+1;
            nextmonth=month;
            nextyear=year;
        }
        else if(1<day<28){
            preday=day-1;
            premonth=month;
            preyear=year;
            nextday=day+1;
            nextmonth=month;
            nextyear=year;
        }
        else if(day===28&&isSP==false||day===29&&isSP==true){
            preday=day-1;
            premonth=month;
            preyear=year;
            nextday=1;
            nextmonth=3;
            nextyear=year;
        }
        
    }
    if (month===3){
        if(day===1){
            if(isSP==true){
                preday=29;
                premonth=month-1;
                preyear=year;
                nextday=day+1;
                nextmonth=month;
                nextyear=year;
            }
            else{
                preday=28;
                premonth=month-1;
                preyear=year;
                nextday=day+1;
                nextmonth=month;
                nextyear=year;
            }
            
        }
        else if(1<day<31){
            preday=day-1;
            premonth=month;
            preyear=year;
            nextday=day+1;
            nextmonth=month;
            nextyear=year;
        }
        else if(day===31){
            preday=day-1;
            premonth=month;
            preyear=year;
            nextday=1;
            nextmonth=4;
            nextyear=year;
        }
    }
    if (month===5||month===7||month===8||month===10)
    {
        if(day===1){
            preday=30;
            premonth=month-1;
            preyear=year;
            nextday=day+1;
            nextmonth=month;
            nextyear=year;
        }
        else if(1<day<31){
            preday=day-1;
            premonth=month;
            preyear=year;
            nextday=day+1;
            nextmonth=month;
            nextyear=year;
        }
        else if(day===31){
            preday=day-1;
            premonth=month;
            preyear=year;
            nextday=1
            nextmonth=month+1;
            nextyear=year;
        }
    }
    
    
    if (month===12)
    {
        if(day===1){
            preday=30;
            premonth=month-1;
            preyear=year;
            nextday=day+1;
            nextmonth=month;
            nextyear=year;
        }
        else if(1<day<31){
            preday=day-1;
            premonth=month;
            preyear=year;
            nextday=day+1;
            nextmonth=month;
            nextyear=year;
        }
        else if(day===31){
            preday=day-1;
            premonth=month;
            preyear=year;
            nextday=1;
            nextmonth=1;
            nextyear=year+1;
        }
        
    }
    if(month===4||month===6||month===9||month===11){
        if(day===1){
            preday=31;
            premonth=month-1;
            preyear=year;
            nextday=day+1;
            nextmonth=month;
            nextyear=year;
        }
        else if(1<day<30){
            preday=day-1;
            premonth=month;
            preyear=year;
            nextday=day+1;
            nextmonth=month;
            nextyear=year;
        }
        else if(day===30){
            preday=day-1;
            premonth=month;
            preyear=year;
            nextday=1;
            nextmonth=month+1;
            nextyear=year;
        }
    }
    resultShowDate+="<p>Ngày hôm trước: "+ preday+"/"+premonth+"/"+preyear+"</p>";
    resultShowDate+="<p>Ngày hôm sau: "+ nextday+"/"+nextmonth+"/"+nextyear+"</p>";
    document.getElementById("resultShowDate").innerHTML=resultShowDate;
    }
    
/**
 * Bài tập 2: 
 * Mô hình 3 khối:
 * + Đầu vào: Nhập tháng và năm: month_2, year_2
 * + Xử lí: 
 * Mặc định:tháng 1 3 5 7 8 10 12 sẽ có 31 ngày, tháng 4 6 9 11 có 30 ngày.
 * Kiểm tra nếu là năm nhuận thì tháng 2 có 29 ngày, nếu không là năm nhuận thì 28 ngày.
 * + Đầu ra: Xuất số lượng ngày trong tháng
 */
 document.getElementById("btnAmountDate").onclick=function(){    
    var month=document.getElementById("month_2").value*1;
    var year=document.getElementById("year_2").value*1;
    var isSP=false;
    var day=0;
    var resultAmountDate="";
    if((year%4===0&&year%100!==0)||(year%100===0&&year%400===0)){
        isSP=true;
    }
    if(month===2&&isSP==true){
        day=29;
    }
    if(month===2&&isSP==false){
        day=28;
    }
    if(month===1||month===3||month===5||month===7||month===8||month===10||month===12){
        day=31;
    }
    else{
        day=30;
    }
    resultAmountDate+="<p>Số ngày trong tháng: "+ day+"</p>";
    document.getElementById("resultAmountDate").innerHTML=resultAmountDate;

}
/**
 * Bài tập 3:
 * Mô hình 3 khối:
 * +Đầu vào: Nhập vào số nguyên có 3 chữ số: number
 * + Xử lí:
 * Tìm số từng số bất đầu từ hàng đơn vị =number%10 và lấy number/10 rồi tiếp tục cho đến khi tìm đủ 3 số.
 * + Đầu ra:
 * Xuất ra màn hình cách đọc 3 số.
 */
 document.getElementById("btnHowRead").onclick=function(){    
    var number=document.getElementById("number").value*1;
    var a=parseInt(number%10);
    number=number/10;
    var b=parseInt(number%10);
    number=number/10;
    var c=parseInt(number%10);
    var resultA="";
    var resultB="";
    var resultC="";
    console.log(a);
    console.log(b);
    console.log(c);
    switch(a){
        case 1:
            resultA="một";            
            break;
        case 2:
            resultA="hai";
            break;
        case 3:
            resultA="ba";
            break;
        case 4:
            resultA="bốn";
            break;
        case 5:
            resultA="năm";
            break;
        case 6:
            resultA="sáu";
            break;
        case 7:
            resultA="bảy";
            break;
        case 8:
            resultA="tám";
            break;
        case 9:
            resultA="chín";
            break;
        
    }
    console.log(resultA);
    switch(b){
        case 0:
            resultB="lẻ "; 
            break;
        case 1:
            resultB="mười ";            
            break;
        case 2:
            resultB="hai mươi ";
            break;
        case 3:
            resultB="ba mươi ";
            break;
        case 4:
            resultB="bốn mươi ";
            break;
        case 5:
            resultB="năm mươi ";
            break;
        case 6:
            resultB="sáu mươi ";
            break;
        case 7:
            resultB="bảy mươi ";
            break;
        case 8:
            resultB="tám mươi ";
            break;
        case 9:
            resultB="chín mươi ";
            break;
        
    }
    console.log(resultB);
    switch(c){
        case 1:
            resultC="Một trăm ";            
            break;
        case 2:
            resultC="Hai trăm ";
            break;
        case 3:
            resultC="Ba trăm ";
            break;
        case 4:
            resultC="Bốn trăm ";
            break;
        case 5:
            resultC="Năm trăm ";
            break;
        case 6:
            resultC="Sáu trăm ";
            break;
        case 7:
            resultC="Bảy trăm ";
            break;
        case 8:
            resultC="Tám trăm ";
            break;
        case 9:
            resultC="Chín trăm ";
            break;
        
    }
    console.log(resultC);
    if(b==0&&c==0){
        resultB=" ";
        resultA=" ";
    }
    var resultHowRead="<p>"+resultC+resultB+resultA +"</p>"
    document.getElementById("resultHowRead").innerHTML=resultHowRead;

    
 }
/**
 * Bài tập 4:
 * Mô hình 3 khối:
 * +Đầu vào: Nhập vào tên và tọa độ nhà của 3 sinh viên và tọa độ của trường
 * + Xử lí:
 * Tính khoảng cách của từng cặp tọa độ, sinh viên nào có khoảng cách lớn nhất với trường thì in ra
 * + Đầu ra:
 * Xuất ra màn hình sinh viên có khoảng cách nhà xa nhất.
 */

 document.getElementById("btnDistance").onclick=function(){    
    var name1=document.getElementById("name").value;
    var toadox1=document.getElementById("toadox1").value*1;
    var toadoy1=document.getElementById("toadoy1").value*1;
    var name2=document.getElementById("name2").value;
    var toadox2=document.getElementById("toadox2").value*1;
    var toadoy2=document.getElementById("toadoy2").value*1;
    var name3=document.getElementById("name3").value;
    var toadox3=document.getElementById("toadox3").value*1;
    var toadoy3=document.getElementById("toadoy3").value*1;
    var toadox4=document.getElementById("toadox4").value*1;
    var toadoy4=document.getElementById("toadoy4").value*1;
    var distance14=Math.sqrt((toadox1-toadox4)*(toadox1-toadox4)+(toadoy1-toadoy4)*(toadoy1-toadoy4));
    var distance24=Math.sqrt((toadox2-toadox4)*(toadox2-toadox4)+(toadoy2-toadoy4)*(toadoy2-toadoy4));
    var distance34=Math.sqrt((toadox3-toadox4)*(toadox3-toadox4)+(toadoy3-toadoy4)*(toadoy3-toadoy4));
    var max=distance14;
    var maxname=name1;
    var result="";
    if(max<distance24){
        max=distance24;
        maxname=name2;

    }
    if(max<distance34){
        max=distance34;
        maxname=name3;
    }
    result+="<p>"+ maxname+ " có nhà xa nhất, khoảng cách là: "+max +"</p>";
    document.getElementById("resultDistance").innerHTML=result;
 }