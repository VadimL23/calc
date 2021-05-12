import React from 'react';

type TTr_footer = {}

class Tr_footer extends React.Component<TTr_footer>{
    constructor(props){
        super(props);

    }
    render(){
        return(
        <tr>
<th  className="text-center">
<div className="btn_form_box"> 
<input type="submit"  className="btn btn-primary mt-3" />
<input type="reset" className="btn btn-secondary mt-3" value="Очистить"/>
</div>
</th>
</tr>
        );
        
    }
    
}

export {
    Tr_footer
}