import React from 'react';
import {dateSub, dateToStr, dateString, Month, DayesInMonth, getDays, getId, dateArrConcat } from './times_functions.js';

export default class Tr_report extends React.Component{
    constructor(props){
        super(props);
        this.calcObj = props.calc_obj;
        this.period =  props.period ; //{DateFrom:'2010-01-01',DateTo:'2022-01-02'} || 
        this.handlePenalty = props.handlePenalty;
    }
    
    getFormula(){
    let calcObj = this.calcObj.calc_obj;
        
    if (calcObj.selec == "День"){
    return `${calcObj.summ_debt} x ${this.period.Days} x ${calcObj.procent_debt}%`}
    else {return `${calcObj.summ_debt} x ${this.period.Days} /365 x ${calcObj.procent_debt}%`}}
    
    getPenalty(){
       let p = this.calcObj.calc_obj.select = 'День' ? 1:365;

       let currentPenalty =  (Math.round((this.calcObj.calc_obj.summ_debt*this.calcObj.calc_obj.procent_debt * this.period.Days/100/p)*100))/100;
         this.handlePenalty(currentPenalty);
       return currentPenalty;
        
    
    }
    
    
    omponentDidMount(){
            this.handlePenalty(this.getPenalty());
        
    }
    
    render(){
     
        
        return(
<tr>       

    <td>{this.calcObj.calc_obj.summ_debt}</td> 
    <td>{dateArrConcat(this.period.DateFrom)}</td> 
    <td>{dateArrConcat(this.period.DateTo)}</td>
    <td>{this.period.Days}</td>
    <td>{this.getFormula()}</td> 
    <td>{this.getPenalty()} pуб.</td>
</tr>
        );
        
    }
    
}