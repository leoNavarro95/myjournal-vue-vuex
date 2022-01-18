
<template>
    
    <div class="login100-pic">
        <img src="https://colorlib.com/etc/lf/Login_v1/images/img-01.png" alt="IMG">
    </div>

    <form class="login100-form validate-form">
        <span class="login100-form-title">
            Registro
        </span>

        <div class="wrap-input100 validate-input" data-validate = "Ingrese su nombre">
            <input class="input100" type="text" name="email" placeholder="Nombre" required>
            <span class="focus-input100"></span>
            <span class="symbol-input100">
                <i class="fa fa-user" aria-hidden="true"></i>
            </span>
        </div>

        <div class="wrap-input100 validate-input" data-validate = "Es necesario un correo válido: ex@abc.xyz">
            <input class="input100" type="text" name="email" placeholder="Correo" required>
            <span class="focus-input100"></span>
            <span class="symbol-input100">
                <i class="fa fa-envelope" aria-hidden="true"></i>
            </span>
        </div>

        <div class="wrap-input100 validate-input" data-validate = "Se requiere una contraseña">
            <input class="input100" type="password" name="pass" placeholder="Contraseña" required>
            <span class="focus-input100"></span>
            <span class="symbol-input100">
                <i class="fa fa-lock" aria-hidden="true"></i>
            </span>
        </div>

        <div class="container-login100-form-btn">
            <button class="login100-form-btn">
                Crear cuenta
            </button>
        </div>

        <div class="text-center p-t-50">
            <router-link :to="{ name:'login' }" > ¿Ya tienes una cuenta? </router-link>
        </div>
    </form>
</template>

<script>
export default {

}
</script>
