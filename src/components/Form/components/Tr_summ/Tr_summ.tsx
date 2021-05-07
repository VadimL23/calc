import React from 'react';

type TTr_summ = {
  summ_debt?:string,
   handleInputChange:(event:React.SyntheticEvent)=>void,
    
}

 class Tr_summ extends React.Component<TTr_summ> {
    summ_debt:string;
    handleInputChange:(event:React.SyntheticEvent)=>void;
    s:boolean;
    constructor(props){
        super(props)
        console.log(props);
        this.summ_debt = props.summ_debt;
        this.handleInputChange = props.handleInputChange;
    }
    
render(){return(
<tr>
<th colSpan={2}><span className="mt-3">Сумма задолжености(рублей):</span></th> 
<td colSpan={4}><input name="summ_debt" type="text" min="0" id="dolg_summ" step="any" required={false} defaultValue={this.summ_debt} onChange={this.handleInputChange}  pattern="[1-9]{1}\d*" /></td>
</tr>
)}
}

export {
    Tr_summ,
}