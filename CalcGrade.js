alert(`هل تريد ان تحسب درجاتك النهائيه؟`)
alert(`نعم انها الحاسبه الذكيه سوف تقوم بحساب درجاتك النهائيه!!!`)

function submit() {
    // Q القيمة التي تدخلها في الحقل الأول تُخزن في المتغير
    let Q = parseInt(document.getElementById("Quizes").value)
    // M القيمة التي تدخلها في الحقل الثاني تُخزن في المتغير
    let M = parseInt(document.getElementById("Midterm").value)
    // F القيمة التي تدخلها في الحقل الثاني تُخزن في المتغير
    let F = parseInt(document.getElementById("FinalTest").value)
     // O القيمة التي تدخلها في الحقل الثاني تُخزن في المتغير
    let O = parseInt(document.getElementById("Oral").value)
     

    let result= Q+M+F+O
   

//    if(result>100){
//        alert(`قم بادخال ارقام صحيحة`);
   
     if(result>=90){
     document.getElementById("final_grade").innerText="A"
     document.getElementById("total_grades").innerText= result;   
     
   }
   else if(result>=80){
     document.getElementById("final_grade").innerText="B"
     document.getElementById("total_grades").innerText= result;
     
   }
   else if(result>=70){
     document.getElementById("final_grade").innerText="C"
     document.getElementById("total_grades").innerText= result;
     
   }
   else if(result>=60){
    document.getElementById("final_grade").innerText="D"
    document.getElementById("total_grades").innerText= result;
    
  }
   else{
     document.getElementById("final_grade").innerText="F"
     document.getElementById("total_grades").innerText=result;
     
   }
  }