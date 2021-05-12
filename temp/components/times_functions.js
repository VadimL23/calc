function getId(){return Number(Math.random().toString().substr(2,9))}

function dateSub(d1, d2){
let d_1 = Date.parse(d1);
let d_2 = Date.parse(d2);
return Math.ceil((Math.abs(d_2-d_1))/1000/3600/24);
};

function dateToStr(str){return str.split('-').reverse().join('.');}
function dateArrConcat(O){return `${O.Day+ '.' + O.Month + '.'+O.Year }`};

function dateString(date){return `${date.getDate()-0}`+`.`+`${date.getMonth()+1}`+`.`+`${date.getFullYear()}`}

const Month = new Map([[0,'Jan'],[1,'Feb'],[2,'Mar'],[3,'Apr'],
                      [4,'May'],[5,'June'],[6,'July'],[7,'Aug'],
                      [8,'Sept'],[9,'Oct'],[10,'Nov'],[11,'Dec']]);

const DayesInMonth = new Map([['Jan',31],['Feb',29],['Mar',31],['Apr',30],
                      ['May',31],['June',30],['July',31],['Aug',31],
                      ['Sept',30],['Oct',31],['Nov',30],['Dec',31]]);

function getDayesInMonth(date){return DayesInMonth.get(Month.get(date.getMonth()))}

function getMonthms(m){return m/1000/3600/24;}

function decodeDate(date){
    let d = new Date(date); //В миллисекундах
return {
        Year:d.getFullYear(),
        Month:d.getMonth(),
        Day:d.getDate()
        
    }    
}

function encodeDate(year,month,day){ return new Date(year,month,day).getTime();}

function incMonth(func){
return function(){
    arguments[1]++;  // вторым аргументом месяй, инкрементируем
    let result = func.apply(this,arguments); // вызываем оригинальную функцию apply(this,arguments) - вызываем в текущем контексте с аргументами
    return result;
}
    
}


var TMyRecordPeriod = {
    DateFrom:0,
    DateTo:0
    }

var TMyArrayPeriod = [];

function period(DateFrom, DateTo){
if (isNaN(DateFrom) || isNaN(DateTo))  return [];   // передвем даты только в миллисекундах
 
    let xDate1,xDate2,xDate3,tmpDate ,Periods=[];
    var result=0;
    if (DateTo<DateFrom) { return [];}               // пустой массив, если 
    let {Year,Month,Day} = decodeDate(DateFrom);     //деструктиризация обьекта
    xDate1 = DateFrom;
    xDate2 =  incMonth(encodeDate)(Year,Month,Day);  // inc month decorator
   let j=0;
    while (true){
   xDate3= xDate2-864E5;                            // отнимаем 1 день в миллисекундах
       
    if( xDate3>DateTo)  xDate3 = DateTo;
            result++;
        let days = Math.round((xDate3-xDate1)/1000/3600/24)+1;
        Periods.push({DateFrom:decodeDate(xDate1), DateTo:decodeDate(xDate3),Days:days})
    
        if (xDate3 == DateTo) break;
            xDate1 = xDate2;
        
            tmpDate = decodeDate(xDate1);            // возврвщает обьект {Year,Month,Day}
            tmpDate.Month++;                         // инкремент месяца
            
            xDate2 = encodeDate(tmpDate.Year,tmpDate.Month,tmpDate.Day);
        
        
    }
     
    return Periods;

    }



export {dateSub, dateToStr, dateString, Month, DayesInMonth, period, getId, dateArrConcat };

