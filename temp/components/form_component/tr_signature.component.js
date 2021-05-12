import React from 'react';

export default class Tr_signature extends React.Component{
    constructor(props){
        super(props);
        
    }
    render(){
        return(
        <tr>
<th>Подпись при печати</th> 
<td colSpan="4"> 
<input type="checkbox" id="checkbox_1"/> <label htmlFor="checkbox_1">подпись сайта калькулятора расчета при печати</label>
<br/>
<span>Подпись сайта</span>
</td>
</tr>
        );
        
    }
    
}