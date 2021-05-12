import {types} from 'mobx-state-tree';


const  Arr_credit = types.model({
 id:types.identifier, 
del_btn:types.optional(types.boolean,false)
});

const Arr_pay = types.model(
{id:types.identifier,
del_btn:types.optional(types.boolean,false) }
);

 const Calc_obj = types.model({
                summ_debt: types.optional(types.string,'100'),
                period_start: types.optional(types.string, '2021-01-01'),
                period_end:types.optional(types.string, `${new Date().toLocaleDateString().split('.').reverse().join('-')}`),
                procent_debt:types.optional(types.string, '1'),
                select:types.optional(types.string, 'День'),
                dolg_procent:types.optional(types.string, '100'),
                period_halfPay_start_0:types.optional(types.string,'ГГГГ-ММ-ДД'),
                summ_satisfaction_half_0:types.optional(types.number,0),
                commet_halfPay_0:types.optional(types.number,0),
                arr_pay:types.optional(types.any),
                arr_credit:types.optional(types.any)
                    });

const RootState = types.model({
       calc_obj:types.optional(Calc_obj,{}),
       report: types.optional(types.boolean,false),
       period:types.optional(types.array,[]),
       penalty:types.optional(types.number,0),
       select:types.optional(types.number,0),
       arr:types.optional(types.array,[]),
     });



export {
    RootState,
    }



        
   






