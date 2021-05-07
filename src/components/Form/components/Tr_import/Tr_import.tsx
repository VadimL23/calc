import React from 'react';

type TTr_import ={
        
}

class Tr_import extends React.Component<TTr_import>{

    constructor(props){
        super(props)
        
    }
    
render(){return(<tr>
<td></td> 
<td>
<input  type="button" id="btn_dolg_1" name="btn_dolg_1" defaultValue="Еще долг" className="btn btn-danger p0_10px" />
<label htmlFor = "btn_dolg_1">скопировать задолженость на следующий месяц</label> <br/><br/>
<input type="button" id="btn_dolg_2" name="btn_dolg_2" onClick={()=>{}} defaultValue="Импорт из таблицы" className="btn btn-danger p0_10px" />
<label htmlFor = "btn_dolg_2" onClick={()=>{}}>Вставить из табличного редактора (например Excel)</label>
</td>
</tr> )}

}

export {
    Tr_import
}