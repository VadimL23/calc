import React from "react";
import cn from "classnames";
import s from "./style.module.scss";

export interface ITitle{
    title?:string,
    classnames?:string,
}

const Title = (props:ITitle)=>{
    const {title, classnames} = props;
    
    return(
    <div className="container">   
        <div className= {cn("row", "text-center", s.calc_title)} >
             <div className="col-lg-12">
                   <h1 className={cn("col-lg-12","text-center",
                                    {[classnames]:classnames && true})}>
                       {title}
                   </h1>
               </div>
        </div>
    </div>  
    )
}

export {
    Title,
        }