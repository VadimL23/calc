import React from 'react';
import {dateSub, dateToStr, dateString, Month, DayesInMonth, period, getId } from './times_functions';
import Tr_report from './tr_report.component';

export default class Table_report extends React.Component{

constructor(props){
super(props);
this.calc_obj = props.calc_obj;
this.periods = props.periods;   
 this.handlePenalty = this.handlePenalty.bind(this);

this.handlePenalty= this.handlePenalty.bind(this);            
this.penalty=0; 

}

getItogo(){ return <span> {this.penalty} </span>}

getRows(){return <tr> <td colSpan="6">Rows here</td> </tr>}

handlePenalty(penalty){
       this.penalty+=penalty;
    }

render(){
    
const rows = <tr> <td colSpan="6">Rows here</td> </tr>;


let periods = this.periods.map((p,index)=>{return <Tr_report calc_obj={this.calc_obj} period={p} handlePenalty = {this.handlePenalty} key={index}/>});


    
return(<React.Fragment>

<div className="container">
<div className="row">

<h2 className="col-lg-8 offset-lg-2 mt-5 ">Результат расчета:</h2>

<table className="col-lg-12 mt-5">
<colgroup>
<col style={ {background:'#eee',textAlign:'left'}}/>
<col/>
<col style={{background:'#eee',textAlign:'left'}}/>
</colgroup>
<tbody>

<tr>
<th ><span>Задолженность:</span></th>
<td>{Math.round(this.calc_obj.calc_obj.summ_debt*100)/100} руб.</td>
<th>Начало периода</th>

          
<td>{dateToStr(this.calc_obj.calc_obj.period_start)}</td>
</tr>

<tr>
                                
    <th>Процент:</th><td>{this.calc_obj.calc_obj.procent_debt} % </td>
    <th>Конец периода</th>
    <td> {dateToStr(this.calc_obj.calc_obj.period_end)}</td>
</tr>

</tbody>
</table>

</div>
</div> 



<div className="container">
<div className="row">
<table className="result mt-5">
<caption>
Расчет процентов по задолженности, возникшей {dateToStr(this.calc_obj.calc_obj.period_start)}
</caption>
<tbody className="text-center">
<tr>
<th rowSpan="2" colSpan="1">Задолженность</th>
<th colSpan="3" className="text-center">Период посрочки</th>
<th rowSpan="2">Формула</th>
<th rowSpan="2">Неустойка</th>
</tr>
<tr><th>c</th><th>по</th><th>дней</th></tr>


{periods}
 



<tr><td colSpan="5" className="text-right">Итого:</td> 
<td>{this.getItogo()} p</td></tr>

</tbody>

<tfoot>
<tr className="text-right">
<td className="text-right" colSpan="6">Сумма основного долга:{this.summ_debt} руб.</td>
</tr>

<tr >
<td className="text-right" colSpan="6">Сумма процентов по всем задолженностям: {this.getItogo()} руб.</td>
</tr>
</tfoot>

</table>
</div>
</div>
        </React.Fragment>
);

}

}