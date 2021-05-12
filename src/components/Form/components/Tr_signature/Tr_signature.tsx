import React from 'react';

type TTr_signature = {}

class Tr_signature extends React.Component<TTr_signature>{
    constructor(props){
        super(props);
        
    }
    render(){
        return(
        <tr>
<th>Подпись при печати</th> 
<td > 
<input type="checkbox" id="checkbox_1"/> <label htmlFor="checkbox_1">подпись сайта калькулятора расчета при печати</label>
<br/>
<span>Подпись сайта</span>
</td>
</tr>
        );
        
    }
    
}

export {
    Tr_signature
}