import React, { Component } from "react";
import Title_calc from './form_component/title_calc.component.js';
import {Form_calc} from './form_component/form.component.js';
import {arr_pay, arr_credit} from './form_component/arr_tr.js';
import {dateSub, dateToStr, dateString, Month, DayesInMonth, period, getId } from './times_functions';


import Table_report from './table_report.component.js';


class App extends Component {
   constructor(props){
       super(props);
       this.state={
           calc_obj:{
                summ_debt: 100,
                period_start:"2021-01-01",
                period_end:new Date().toLocaleDateString().split('.').reverse().join('-'),
                procent_debt:1,
                select:"День",
                dolg_procent:100,
                period_halfPay_start_0:"ГГГГ-ММ-ДД",
                summ_satisfaction_half_0:0,
                commet_halfPay_0:0,
                arr_pay:arr_pay,
                arr_credit:arr_credit
        },
        
        report:false,
        period:[],
           penalty:0
           
       };
      this.handleUpdate = this.handleUpdate.bind(this); 
   
   }
    
handleUpdate(obj){
     let periods = period(Date.parse(this.state.calc_obj.period_start),Date.parse(this.state.calc_obj.period_end));
    
    this.setState({calc_obj:obj, period:periods, report:true});
    
      
    let xhr = new XMLHttpRequest();
    xhr.open('post','form_handler.php',true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(this.state));
  
    
    xhr.onreadystatechange = function() { // (3)
  if (xhr.readyState != 4) return;

  if (xhr.status != 200) {
    alert(xhr.status + ': ' + xhr.statusText);
  } else {
  //  alert(xhr.responseText);
  }

}
    
  }
  
    

      // {console.log(this.state.period)}
render() {
        
    const repor = 1;
    
    return ( 
            <div id="wrapper">
            <Title_calc title={"Калькулятор расчета неустоек"}/> 
            <Form_calc handleUpdate={this.handleUpdate} stateProps ={this.state}/>
    
         
    { (this.state.report) ? ( <Table_report calc_obj={this.state.calc_obj} periods={this.state.period} handlePenalty={this.handlePenalty} penalty = {this.state.penalty}/>):''}
                            
        </div>
        )
    }
}

export default App;