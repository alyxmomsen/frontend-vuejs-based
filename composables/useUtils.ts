export const useUtils = () => {
    const sayHello = (str:string) => {
        console.log(str);
    }

    return {
        sayHello ,
    }
}