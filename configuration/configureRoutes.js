
import userRoutes from '../routes/userRoutes.js'
import loginRoutes from '../routes/loginRoutes.js'
import productRoutes from '../routes/productRoutes.js'
export const configureRoutes = (app)=>{
app.use("/create",userRoutes);
app.use("/user",loginRoutes)
app.use("/products",productRoutes)

}