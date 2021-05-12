import React,{useState} from "react";
import s from "./style.module.scss";
import cn from "classnames";
import {Title} from "components/Title";
import {Form_calc} from "components/Form";

let arr_pay = [{id:0, del_btn:false}];

let arr_credit = [{id:0, del_btn:false}];

const HomePage = () =>{
    
       
    const state = {
             calc_obj:{
                summ_debt: '100',
                period_start:"2021-01-01",
                period_end:new Date().toLocaleDateString().split('.').reverse().join('-'),
                procent_debt:'1',
                select:"День",
                dolg_procent:'100',
                period_halfPay_start_0:"ГГГГ-ММ-ДД",
                summ_satisfaction_half_0:0,
                commet_halfPay_0:0,
                arr_pay:arr_pay,
                arr_credit:arr_credit
        },
        
        report:false,
        period:[],
        penalty:0,
        select:0,
        arr:[]
           
       };
    
    
    
    
    return(
        <>
        <Title classnames="text-center" title = "Калькулятор"  />
        <Form_calc stateProps={state}/>
        </>
    );
    
}

export{
    HomePage,
}