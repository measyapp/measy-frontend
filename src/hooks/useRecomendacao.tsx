import { useCallback, useState } from "react"
import { RatingService,authToken,getLoggedId } from "../services"
import { IMetricasData, IRatingData } from "../types"
import { useAuth } from "./useAuth";
import {Api} from "../providers"
Api.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
export const HookRecomendacao = () =>{
    const getIndicacao = useCallback(async (answers : string, id_proj : string)=>{
        const token = authToken();
        if (token!=='') Api.defaults.headers['x-access-token'] = token;
        //onst {status, data} = await Api.post<any>("/indicacoes/indicacao",{resposta: answers});
        const id = Math.floor(Math.random()*15);
        console.log(id);
        if(id>0){
           const result = await Api.post<IMetricasData>("/indicacoes/",{id_projeto: id_proj, id_metrica: id});
           if (result.status != 200) throw new Error("Falha Gravando Recomendacao")
        }
    },[])

    return {
        getIndicacao
    }
}