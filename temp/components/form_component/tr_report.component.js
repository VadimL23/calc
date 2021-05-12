import React from 'react';

export default class Tr_report extends React.Component{
    constructor(props){
        super(props);
        
    }
    render(){
        return(
        <tr>
<th>Вид отчета</th> 
<td colSpan="4"> 
<input name="radio_report" type="radio" id="radio_1" defaultChecked={true} /> <label htmlFor="radio_1">Обычный</label>
<input name="radio_report" type="radio" id="radio_2" /> <label htmlFor="radio_2">Бухгалтерский</label>
</td>
</tr> 
        );
        
    }
    
}