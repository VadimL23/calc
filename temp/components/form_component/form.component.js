
import React from 'react';
import {dateSub, dateToStr, dateString, Month, DayesInMonth, getDays, getId } from '../times_functions.js';
import Tr_halfPay from './tr_halfPay.component.js';
import Tr_dopCredit from './tr_dopCredit.component.js';
import Tr_import from './tr_import.component';
import Tr_report from './tr_report.component';
import Tr_summ from './tr_summ.component';
import Tr_period from './tr_period.component';
import Tr_procent from './tr_procent.component';
import Tr_signature from './tr_signature.component';
import Tr_footer from './tr_footer.component';
import {arr_pay, arr_credit} from './arr_tr.js';

import '../../styles/bootstrap.min.css';
import '../../styles/table.component.css';
import '../../styles/UpDownBtn.css';

     
class Form_calc extends React.Component{

    constructor(props){
  
    super(props)
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleRowAdd = this.handleRowAdd.bind(this);
    this.handleRowRemove = this.handleRowRemove.bind(this);  
    this.handleUpdate = props.handleUpdate;
    this.handleSubmit = this.handleSubmit.bind(this);
    
        
this.state=props.stateProps;

        }
    
    
handleSelectChange(event) {
    this.setState({select: event.target.value});

    }
    
handleRowAdd(event){
 event.preventDefault();
 let arrName = event.currentTarget.parentElement.dataset.arrName ;
 let arr = arrName == "arr_pay" ? arr_pay:arr_credit;
 arr.push({id:getId(),del_btn:true});
 this.setState({arr:arr});
     
 }
    

handleRowRemove(event){
    event.preventDefault();
    let arrName = event.currentTarget.parentElement.dataset.arrName ;
    let arr = arrName == "arr_pay" ? arr_pay:arr_credit;
    let id = +event.currentTarget.parentElement.getAttribute('id') ;
    arr.splice(arr.findIndex((el)=> {return el.id == id}),1);
    this.setState({arr:arr});
  }   
   
    
handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
     
}
    
handleSubmit(e){
    e.preventDefault();
    this.handleUpdate(this.state);


    
    }

    
    
    
    render(){
        
    const arr_pay_tr = arr_pay.map((tr)=><Tr_halfPay id={tr.id} del_btn={tr.del_btn} onAddRow={this.handleRowAdd} onRemoveRow={this.handleRowRemove} key={tr.id.toString()}/>);
    
    const arr_credit_tr = arr_credit.map((tr)=><Tr_dopCredit id={tr.id} del_btn={tr.del_btn} onAddRow={this.handleRowAdd} onRemoveRow={this.handleRowRemove} key={tr.id.toString()}/>);
        
        return(
<div className="container mt-3">
<div className="row">
<form name="form_calc" id="form_calc" className="col-lg-12" action="calc.php" onSubmit={this.handleSubmit} >
<div className="row">


<table className="mt-5 col-lg-12 request_table" cols="8">
<caption>Введите параметры задолженности</caption>
<tbody>

<Tr_summ summ_debt={this.state.calc_obj.summ_debt} handleInputChange={this.handleInputChange}/>

<Tr_period period_start = {this.state.calc_obj.period_start} period_end = {this.state.calc_obj.period_end} handleInputChange={this.handleInputChange}/>
   
<Tr_procent procent_debt={this.state.calc_obj.procent_debt} select={this.state.calc_obj.select} dolg_procent={this.state.calc_obj.dolg_procent} handleInputChange={this.handleInputChange}/>
    


<tr className="borderTop_0">
<th colSpan="6" >Частичная оплата задолженности:</th> 
</tr> 

{arr_pay_tr}

<tr>
<td colSpan="2"></td>
<td><button className="btn btn-success">Импорт из таблицы</button></td>
</tr> 
 
<tr className="borderTop_0">
<th colSpan="6" >Дополнительные задолженности: <br /> <span>(обычно ежемесячные платежи)</span></th>
</tr>

{arr_credit_tr}
<Tr_import />
<Tr_report />
<Tr_signature/>
    
<Tr_footer/>

</tbody>
</table>

</div>            
</form>
            
</div>
</div>
        );
        
    }
    
    
}

class Table_item extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
   const items = this.props.items;
      
        
        return <tr>{items}</tr>
        
    }
    
}


export {Form_calc};