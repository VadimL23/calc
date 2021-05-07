import React from 'react';

export default class Tr_footer extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
        <tr>
<th colSpan="4" className="text-center">
<div className="btn_form_box"> 
<input type="submit"  className="btn btn-primary mt-3" type="submit" />
<input type="reset" className="btn btn-secondary mt-3" value="Очистить"/>
</div>
</th>
</tr>
        );
        
    }
    
}