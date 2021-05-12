import React from 'react';
import {arr_credit} from './arr_tr';

export default class Tr_halfPay extends React.Component{
   
constructor(props){
  super(props);
  this.onAddRow = props.onAddRow || (()=>{});
  this.onRemoveRow = props.onRemoveRow || (()=>{});
    this.del_btn = props.del_btn;
  }
    
 
   render(){ return (
    
<tr id={"tr_halfPay_"+this.props.id} >
<td colSpan="2"></td>

<td colSpan="4" id={this.props.id} data-arr-name="arr_pay">
<input type="date"  id={"period_halfPay_start_"+this.props.id} name={"period_halfPay_start_"+this.props.id} />
<label htmlFor = {"period_halfPay_start_"+this.props.id}>на сумму</label>

<input type="number" min="0" id={"summ_satisfaction_half_"+this.props.id} name={"summ_satisfaction_half_"+this.props.id} step="any" width="10%" />
<label htmlFor = {"summ_satisfaction_half_"+this.props.id}>прим.</label>

<input type="text" name={"commet_halfPay_"+this.props.id} id={"commet_halfPay_"+this.props.id} step="any" size="4" />

<button className="btn btn-secondary btn_add_row" id={"btn_add_row_"+this.props.id} onClick={this.onAddRow}>+</button>

<button className={`btn btn-secondary btn_add_row btn-secondary + ${!this.del_btn ? 'd-none' :''}`}
                  onClick={this.onRemoveRow}>-</button> 

</td>
</tr>
   
    );}

}
