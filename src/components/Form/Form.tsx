
import React,{ReactNode} from 'react';
import {dateSub, dateToStr, dateString, Month, DayesInMonth,  getId } from 'functions/times_functions.js';
import {Tr_halfPay} from './components/Tr_halfPay';
import {Tr_dopCredit} from './components/Tr_dopCredit';
import {Tr_import} from './components/Tr_import';
import {Tr_report} from './components/Tr_report';
import {Tr_summ} from './components/Tr_summ';
import {Tr_period} from './components/Tr_period';
import {Tr_procent} from './components/Tr_procent';
import {Tr_signature} from './components/Tr_signature';
import {Tr_footer} from './components/Tr_footer';
//import {arr_pay, arr_credit} from './components/arr_tr.js';

import 'styles/bootstrap/bootstrap.min.css';
import 'styles/Table/table.component.css';
import 'styles/Table/UpDownBtn.css';


let arr_pay = [{id:0, del_btn:false}];

let arr_credit = [{id:0, del_btn:false}];


export type TForm_calc = {

    stateProps:any
    
}


type Tstate = {
           calc_obj:{
                summ_debt: string,
                period_start:string,
                period_end:string,
                procent_debt:string,
                select:string,
                dolg_procent:string,
                period_halfPay_start_0:string,
                summ_satisfaction_half_0:number,
                commet_halfPay_0:number,
                arr_pay:any,
                arr_credit:any
                    },
        report:boolean,
        period:[],
        penalty:number,
        select:any,
        arr:any
           
       }


     
class Form_calc extends React.Component<TForm_calc,Readonly<Tstate>>{
    
    handleUpdate:(event:any)=>void;
    state:any;
    constructor(props){
  
    super(props)
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleRowAdd = this.handleRowAdd.bind(this);
    this.handleRowRemove = this.handleRowRemove.bind(this);  
    this.handleUpdate = props.handleUpdate;
    this.handleSubmit = this.handleSubmit.bind(this);
    
        
this.state={
           calc_obj:{
                summ_debt: '100',
                period_start:"2021-01-01",
                period_end:new Date().toLocaleDateString().split('.').reverse().join('-'),
                procent_debt:'1',
                select:"День",
                dolg_procent:'100',
                period_halfPay_start_0:"ГГГГ-ММ-ДД",
                summ_satisfaction_half_0:0,
                commet_halfPay_0:0,
                arr_pay:arr_pay,
                arr_credit:arr_credit
        },
        
        report:false,
        period:[],
        penalty:0,
        select:0,
        arr:[]
       }
    //props.stateProps;

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
//    const target = event.target;
//    const value = target.type === 'checkbox' ? target.checked : target.value;
//    const name = target.name;
//   
//    this.setState({[name as keyof typeof this.state]: value});


}
    


handleSubmit(e){
    e.preventDefault();
    this.handleUpdate(this.state);

    }

      
    render(){
        
    const arr_pay_tr = arr_pay.map((tr)=><Tr_halfPay id={String(tr.id)} del_btn={tr.del_btn} onAddRow={this.handleRowAdd} onRemoveRow={this.handleRowRemove} key={tr.id.toString()}/>);
    
    const arr_credit_tr = arr_credit.map((tr)=><Tr_dopCredit id={String(tr.id)} del_btn={tr.del_btn} onAddRow={this.handleRowAdd} onRemoveRow={this.handleRowRemove} key={tr.id.toString()}/>);
        
        return(
<div className="container mt-3">
<div className="row">
<form name="form_calc" id="form_calc" className="col-lg-12" action="calc.php" onSubmit={this.handleSubmit} >
<div className="row">


<table className="mt-5 col-lg-12 request_table" >
<caption>Введите параметры задолженности</caption>
<tbody>

<Tr_summ summ_debt={this.state.calc_obj.summ_debt} handleInputChange={this.handleInputChange}/>

<Tr_period period_start = {this.state.calc_obj.period_start} period_end = {this.state.calc_obj.period_end} handleInputChange={this.handleInputChange}/>
   
<Tr_procent procent_debt={this.state.calc_obj.procent_debt} select={this.state.calc_obj.select} dolg_procent={this.state.calc_obj.dolg_procent} handleInputChange={this.handleInputChange}/>
    


<tr className="borderTop_0">
<th colSpan={6} >Частичная оплата задолженности:</th> 
</tr> 

{arr_pay_tr}

<tr>
<td colSpan={2}></td>
<td><button className="btn btn-success">Импорт из таблицы</button></td>
</tr> 
 
<tr className="borderTop_0">
<th colSpan={6} >Дополнительные задолженности: <br /> <span>(обычно ежемесячные платежи)</span></th>
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

type TTable_item = {
items?:ReactNode,    
    
}


class Table_item extends React.Component<TTable_item>{
    
    constructor(props){
        super(props)
    }
    render(){
   const items = this.props.items;
      
        
        return <tr>{items}</tr>
        
    }
    
}


export {
       Form_calc,
       
       };





//const Form_calc = (props:Tstate):void=>{
//    
//    const {calc_obj, report, period, penalty, select, arr} = props;
//    
//    const [select, setSelect] = useState(false);
//    
//
//    const handleSelectChange = (event)=> {
//    setSelect(prev=>!prev);
//    }   
//
//const  handleRowAdd = (event:syntheticEvent):void=>{
// event.preventDefault();
// let arrName = event.currentTarget.parentElement.dataset.arrName ;
// let arr = arrName == "arr_pay" ? arr_pay:arr_credit;
// arr.push({id:getId(),del_btn:true});
//
//
// this.setState({arr:arr});
//     
// }
// 
//}