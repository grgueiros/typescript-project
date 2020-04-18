export function domInject(seletor : string) {

    return function(target : any, key: string){

        let elemento : JQuery;

        function getter (){
            if(!elemento){
                elemento = $(seletor);
            }
            
            return elemento
        }

        Object.defineProperty(target,key,{
            get: getter
        })
    }
}