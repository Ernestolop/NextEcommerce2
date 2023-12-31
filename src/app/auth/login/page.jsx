import { titleFont } from "@/config/fonts";

export const metadata = {
  title: 'Ecommerce - Login',
  description: 'Inicio de sesión del ecommerce',
}

const Login = () => {
  return (
    <main className="">
      <h1>Hello World!!</h1>
      <h1 className={titleFont.className}>Hello World!!</h1>
    </main>
  )
}

export default Login;