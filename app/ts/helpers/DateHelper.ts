export class DateHelper {


    static stringToDate(string: string): Date{

        if (/\d{4}-\d{2}-\d{2}/.test(string))
            return new Date(string.replace(/-/g,"/"));

        throw new Error('O formato de string passado deve ser aaaa-MM-dd')
    }

    static dateToString(date : Date) : string {

        return `${date.getUTCDate()}/${date.getUTCMonth() + 1}/${date.getUTCFullYear()}`

    }


}