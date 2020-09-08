
function myFunction(txt){
  return strLength(txt) && dotWhere(txt) && yearPart(txt) && monthPart(txt)  && dayPart(txt);
  
}

function strLength(txt){
  if (txt.length == 10) {
  return true;
  } 
  return false;
}


function yearPart(txt){
let year = txt.substr(6);

  if (year.length == 4 && year >= '0000' && year <= '9999'){
  return true;
  }
  return false;
}

function monthPart(txt){
let month = txt.slice(3,5);

  if (month.length == 2 && month >= '01' && month <= '12'){
  return true; 
  }  
  return false;
}

function dotWhere(txt){

  if (txt.charAt(2) == '.' && txt.charAt(5)=='.'){
    return true;
  }
  return false;
}

function dayPart(txt){
  let day = txt.slice(0,2);
  let month = txt.slice(3,5);
  let year = txt.slice(6,10);

  if (day.length !== 2){
    return false;
  }
  if (day < '01'){
    return false;
  }
  // if (day <= '31'&&(month=='01'|| month=='03'|| month=='05'|| month=='07'|| month=='08'|| month=='10'|| month=='12')){
  // return true;
  // }
  // if (day <= '30'&&(month=='04'|| month=='06'|| month=='09'|| month=='11')){
  //   return true;
  //   }
  // if (day <= '28'&&(month=='02')){
  //   return true;
  // };
  // if (day=='29' && isLeapYear(year)){
  //   return true;
  // }
  return (day <= '31'&&(month=='01'|| month=='03'|| month=='05'|| month=='07'|| month=='08'|| month=='10'|| month=='12'))
    ||(day <= '30'&&(month=='04'|| month=='06'|| month=='09'|| month=='11'))
    ||(day <= '28'&&(month=='02'))
    ||(day=='29' && isLeapYear(year))
}



function isLeapYear(year)
{
  return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}
