
<template>
    
    <div class="login100-pic">
        <img src="https://colorlib.com/etc/lf/Login_v1/images/img-01.png" alt="IMG">
    </div>

    <form class="login100-form validate-form"
        @submit.prevent="onSubmit"
    >
        <span class="login100-form-title">
            Ingresar
        </span>

        <!-- EMAIL -->
        <div class="wrap-input100 validate-input" data-validate = "Es necesario un correo válido: ex@abc.xyz">
            <input v-model=" userForm.email" class="input100" type="text" name="email" placeholder="Correo" required>
            <span class="focus-input100"></span>
            <span class="symbol-input100">
                <i class="fa fa-envelope" aria-hidden="true"></i>
            </span>
        </div>


        <!-- PASSWORD -->
        <div  class="wrap-input100 validate-input" data-validate = "Se requiere una contraseña">
            <input v-model=" userForm.password" class="input100" type="password" name="pass" placeholder="Contraseña" required>
            <span class="focus-input100"></span>
            <span class="symbol-input100">
                <i class="fa fa-lock" aria-hidden="true"></i>
            </span>
        </div>

        <!-- BUTTON -->
        <div class="container-login100-form-btn">
            <button class="login100-form-btn">
                Login
            </button>
        </div>

        <div class="text-center p-t-50">
            <router-link :to="{ name: 'register' }" > ¿No tienes cuenta? </router-link>
        </div>
    </form>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Swal from 'sweetalert2';

import useAuth from '../composables/useAuth'

export default {

    setup(){

        const userForm = ref({
            email   : '',
            name    : '',
            password: '',
        })
        
        const router = useRouter()
        const { logInUser } = useAuth()


        return{
            userForm,

            onSubmit: async () =>{
                const { ok, message } = await logInUser( userForm.value )
                
                if(!ok) { 
                    Swal.fire('Error', message, 'error') 
                    return
                }

                router.push({name: 'daybook'})
            }
        }
    }

}
</script>
