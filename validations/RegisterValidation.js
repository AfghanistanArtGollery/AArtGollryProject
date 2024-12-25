import * as Yup from 'yup'

const registerValidation= Yup.object().shape({
    name:Yup.string().min(3).max(20).required(),
    email:Yup.string().min(10).max(30).email().required(),
    phone:Yup.string().min(10).max(15).optional(),
    password:Yup.string().min(8)
    .matches(
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).*$/,
        'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
      ).required(),
    confirmPassword:Yup.string()
    .oneOf([Yup.ref('password'),null],'Passwords must macth')
     
    

})
export default registerValidation;