import Joi from "joi"

export default {
    register: (req,res,next) => {
        const schema = Joi.object({
            email: Joi.string().email(),
            password: Joi.string().min(8).max(32),
        }
)
        const {error, value} = schema.validate(req.body);

        if(error){
            switch(error.details[0].context.key){
                case "email" :
                    res.status(400).send({
                        error: "You must provide a valid email address"
                    })
                case "password" :
                    res.status(400).send({
                        error: `The password you provided failed to match the following rules: 
                        <br>
                        1. It must contain ONLY lowercase, uppercase and 0 to 9 numerics.
                        <br>
                        2.It must be atleast 8 characters and a maximum of 32 characters long. 
                        `
                    })

                default: 
                res.status(400).send({
                    error: "Invalid registration information"
                })
            }
        } else {
            next();
        }
    }
}