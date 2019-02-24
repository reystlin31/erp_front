import axios from "axios";

var api_address="https://bitrix.aria-invertor.ru/api/v1/";

export default function api(method, endpoint, func, params)
{
    switch(method)
    {
        case 'GET':
            return new Promise(function(resolve, reject)
            {
                axios.get(api_address+endpoint+'/'+func,{params:params},
                    {headers: {'Content-Type': 'application/json'}})
                    .then(response=>{
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
                    {headers: {'Content-Type': 'application/json'}})
                    .then(response=>{
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
