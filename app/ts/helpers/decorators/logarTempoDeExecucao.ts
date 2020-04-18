export function logarTempoDeExecucao(emSegundos : boolean = false) {

    return function (target : any, propertyKeys : string, descriptor : PropertyDescriptor ){

        const metodoOriginal = descriptor.value;

        descriptor.value = function(...args : any[]){
            
            let unidade = "ms";
            let divisor = 1;

            if(emSegundos){
                unidade = 's';
                divisor = 1000;
            }
            
            console.log(`Os argumentos do método ${propertyKeys} são ${JSON.stringify(args)}`)
            const t1 = performance.now();
            const retorno = metodoOriginal.apply(this,args);
            const t2 = performance.now();
            console.log(`O tempo de execução do método ${propertyKeys} é de ${(t1-t2)/divisor} ${unidade}`)
            return retorno;

        }
        return descriptor;

    }

}