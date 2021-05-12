import React from 'react';

type TTr_procent = {
    select:any,
    dolg_procent:string,
    procent_debt:string,
    handleInputChange:(event:any)=>void
    
}

class Tr_procent extends React.Component<TTr_procent> {
    
    select:any;
    dolg_procent:string;
    procent_debt:string;
    handleInputChange:(event:any)=>void;
    
    constructor(props){
        super(props)
        this.select = props.select;
        this.dolg_procent = props.dolg_procent;
        this.procent_debt = props.procent_debt;
        this.dolg_procent = props.dolg_procent;
        this.handleInputChange = props.handleInputChange;
    }
    
render(){return(
    
    <tr>
<th >Процент:</th>
<td >
<input name="procent_debt" type="text"  id="procent_debt" value={this.procent_debt} onChange={this.handleInputChange} pattern="\d{0,3}?(,|.)?\d{0,3}?" /> 
<label htmlFor = "procent_debt">%</label>
 <select name="select" defaultValue={this.select} onChange={this.handleInputChange} id="select_teble">
	<option  value="День">День</option>
	<option  value="Год">Год</option>
</select>
<label htmlFor = "select_teble">, но не более</label>
<input name="dolg_procent" type="text"  id="dolg_procent" defaultValue={this.dolg_procent} onChange={this.handleInputChange} size={3} step="any" />
</td>
</tr> 
)}

}

export {
    Tr_procent
}