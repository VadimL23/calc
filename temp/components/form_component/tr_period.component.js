import React from 'react';

export default class Tr_summ extends React.Component {

    constructor(props){
        super(props)
        this.period_start = props.period_start;
        this.period_end = props.period_end;
        this.handleInputChange = props.handleInputChange;
    }
    
render(){return(
<tr>
<th colSpan="2">Период просрочки</th> 
<td colSpan="2"><input name="period_start" type="date" id="period_start" required={false} defaultValue={this.period_start} onChange={this.handleInputChange}/> <br />
<span className="table_title"> Начало периода</span>
</td>
<td colSpan="2"><input name = "period_end" type="date" id="period_end" defaultValue={this.period_end}  onChange={this.handleInputChange} /> <br />
<span className="table_title">Конец периода/сегодня</span>
</td>
</tr>
)}

}