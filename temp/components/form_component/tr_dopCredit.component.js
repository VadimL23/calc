import React from 'react';
import {arr_pay} from './arr_tr';

export default class Tr_dopCredit extends React.Component{ 
constructor(props){
    super(props)
    this.onAddRow = props.onAddRow || (()=>{});
  this.onRemoveRow = props.onRemoveRow || (()=>{});
    this.del_btn = props.del_btn;
    this.id = this.props.id;
}

    render(){
        const id =this.id;
return (<tr id={"tr_dopCredit_"+id}>
<td colSpan="2"></td>
<td colSpan="4" id={id} data-arr-name="arr_credit">
<input type="date" id={"period_dopCredit_start_"+id} name={"period_dopCredit_start_"+id} />
<label htmlFor = {"period_dopCredit_start_"+id}>на сумму</label>
<input type="number" min="0" id={"dop_credit_summ_"+id} name={"dop_credit_summ_"+id} step="any" width="10%" />
<label htmlFor = {"dop_credit_summ_"+id}>прим.</label>
<input type="text" id={"period_dopCredit_start_"+id} step="any" size="4" />
        
<button className="btn btn-secondary btn_add_row" id={"btn_add_row_"+this.props.id} onClick={this.onAddRow}>+</button>

<button className={`btn btn-secondary btn_add_row btn-secondary + ${!this.del_btn ? 'd-none' :''}`}
                  onClick={this.onRemoveRow}>-</button>  
</td>
</tr> ); }
        
}