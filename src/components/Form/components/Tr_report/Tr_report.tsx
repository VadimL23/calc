import React from 'react';

type TTr_report = {}

class Tr_report extends React.Component<TTr_report>{
    
    constructor(props){
        super(props);
        
    }
    render(){
        return(
        <tr>
<th>Вид отчета</th> 
<td > 
<input name="radio_report" type="radio" id="radio_1" defaultChecked={true} /> <label htmlFor="radio_1">Обычный</label>
<input name="radio_report" type="radio" id="radio_2" /> <label htmlFor="radio_2">Бухгалтерский</label>
</td>
</tr> 
        );
        
    }
    
}

export {
    Tr_report
}