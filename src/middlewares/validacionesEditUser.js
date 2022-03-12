const path = require('path')
const {body} = require ("express-validator");


const validacionesEditUser = [
    body("first_name").notEmpty().withMessage("Este campo no puede estar vacío").bail()
                      .isLength({ min: 2 }).withMessage("El nombre debe tener al menos 2 caracteres").bail()
                      .isAlpha().withMessage("Solo se permiten caracteres alfabéticos"),
    body("last_name").notEmpty().withMessage("Este campo no puede estar vacío").bail()
                     .isLength({ min: 2 }).withMessage("El apellido debe tener al menos 2 caracteres").bail()
                     .isAlpha().withMessage("Solo se permiten caracteres alfabéticos"),
    body("email").notEmpty().withMessage("Este campo no puede estar vacío").bail()
                 .isEmail().withMessage("ingresá un formato de correo válido. Ej.: tucorreo@email.com"),
    body("nacimiento").notEmpty().withMessage("Seleccioná tu fecha de nacimiento"),
    body("domicilio").notEmpty().withMessage("Este campo no puede estar vacío"),
    body("dni").notEmpty().withMessage("Ingresá tu DNI").bail()
               .isNumeric().withMessage("Solo se permiten valores numéricos"),
    body("imagen").custom((value, {req}) => {
                let file = req.file
                if (!file) {
                    throw new Error("No elegiste ninguna imagen");
                } else  { 
                    let extensionesAceptadas = [".jpeg", ".png", ".jpg", ".gif"]
                
                    if (!extensionesAceptadas.includes(path.extname(req.file.originalname))) {
                        throw new Error("Las extensiones del archivo permitidas son '.jpeg', '.jpg', '.png' y '.gif'");
                    } 
                    
        
                 }
              return true
            })

];



module.exports = validacionesEditUser;