import axios from "axios";
import {store}  from './store';

//var api_address="https://bitrix.aria-invertor.ru/ERP/v1/";
//var api_address="https://erp-back.ru/";
var api_address="http://erp-back-yii.ru/web/";

export default function api(method, endpoint, func, params)
{
    var token = store.getState().User.token;
    if( token )
        params = { token: token , ...params}

    switch(method)
    {
        case 'GET':
            return new Promise(function(resolve, reject)
            {
                axios.get(api_address+endpoint+'/'+func,{params:params},
                    {useCredentails: true , mode:'cors',headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'}})
                    .then(response=>{
                        //console.log(response);
                        if(!response.data.error)
                            resolve(response.data); //Данные от API получены без ошибок
                        else
                            reject(response.data.error); //Ошибка запроса к API
                    })
                    .catch(error=>{
                        console.log('System error '+error); //Системаня ошибка
                    });
            });

        case 'POST':
        case 'PATCH':
        case 'DELETE':
            return new Promise(function(resolve, reject)
            {
                axios.post(api_address+endpoint+'/'+func,params,
                    {useCredentails: true , mode:'cors',headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'}})
                    .then(response=>{
                        //console.log(response);
                        if(!response.data.error)
                            resolve(response.data); //Данные от API получены без ошибок
                        else
                            reject(response.data.error); //Ошибка запроса к API
                    })
                    .catch(error=>{
                        console.log('System error '+error); //Системаня ошибка
                    });
            });

        default:
            console.log('error method '+method);

    }
}