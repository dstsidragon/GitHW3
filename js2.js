/*BMI 計算*/
function BMICalculation(URHeight,URWeight){
    let BMI= Math.round(URWeight / (URHeight*URHeight/10000)*10)/10 ;//取小數第一位
    console.log(BMI)
};

BMICalculation(178,70);