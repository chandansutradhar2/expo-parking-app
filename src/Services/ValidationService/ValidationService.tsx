
class ValidationService{

    isMobile=(value:string)=>{
        let reg=/^(\+\d{1,3}[- ]?)?\d{10}$/;
        return reg.test(value) ? true : false;
        
    }

}

export default new ValidationService