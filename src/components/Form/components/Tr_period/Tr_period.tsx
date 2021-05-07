import React from 'react';

type TTr_period = {
  period_start:string,
  period_end :string,
  handleInputChange:(event:any)=>void 
}

class Tr_period extends React.Component<TTr_period> {
  
  period_start:string;
  period_end :string;
  handleInputChange:(event:any)=>void; 
    
    constructor(props){
        super(props)
        this.period_start = props.period_start;
        this.period_end = props.period_end;
        this.handleInputChange = props.handleInputChange;
    }
    
render(){return(
<tr>
<th >Период просрочки</th> 
<td ><input name="period_start" type="date" id="period_start" required={false} defaultValue={this.period_start} onChange={this.handleInputChange}/> <br />
<span className="table_title"> Начало периода</span>
</td>
<td><input name = "period_end" type="date" id="period_end" defaultValue={this.period_end}  onChange={this.handleInputChange} /> <br />
<span className="table_title">Конец периода/сегодня</span>
</td>
</tr>
)}

}

export {
    Tr_period
}