<template>

    <template v-if="entry" >

        <div class="entry-title d-flex justify-content-between p-2">
            
            <!-- ENTRY DATE -->
            <div>
                <span class="text-success fs-3 fw-bold"> {{ day }} </span>
                <span class="mx-1 fs-3"> {{ month }} </span>
                <span class="mx-2 fs-4 fw-light"> {{ yearDay }} </span>
            </div>
            
            <div>
                <!-- DELETE BUTTON -->
                <button v-if="entry.id"
                    class="btn btn-danger mx-2"
                    @click="onDeleteEntry"
                >
                    Borrar
                    <i class="fa fa-trash-alt"></i>
                </button>

                <input 
                    type="file"
                    @change="onSelectedImage"
                    ref ="imageSelector"
                    accept=" image/png, image/jpeg "
                    v-show="false"
                >

                <!-- UPLOAD PICTURE -->
                <button 
                    class="btn btn-primary"
                    @click="onSelectImg"
                    >
                    Subir foto
                    <i class="fa fa-upload"></i>
                </button>
            </div>
        </div>

        <hr>
        <div class="d-flex flex-column px-3 h-75">
            <textarea 
                v-model="entry.text"
                placeholder="¿Qué pasó hoy?"
            ></textarea>
        </div>

        <!-- IMAGE CARD -->
        <img 
            v-if="entry.picture && !localImage"
            :src="entry.picture" 
            alt="entry-picture"
            class="img-thumbnail"
        >

        <img 
            v-if="localImage"
            :src="localImage" 
            alt="entry-picture"
            class="img-thumbnail"
        >

    </template>


    <Fab
        icon="fa-save"
        @on-click="saveEntry"
    />

</template>

<script>

import { defineAsyncComponent } from '@vue/runtime-core'
import { mapActions, mapGetters } from 'vuex';
import Swal from 'sweetalert2';

import getDayMonthYear from '../helpers/getDayMonthYear';
import uploadImage from '../helpers/uploadImage'

export default {
    
    props:{
        //id del entry al diario
        id:{
            type:String,
            required: true
        }
    },

    components:{
        Fab: defineAsyncComponent( () => import('../components/Fab.vue') )
    },

    data(){
        return {
            entry: null,
            localImage: null, 
            imgFile: null
        }
    },

    methods:{
        ...mapActions('journal', ['updateEntry', 'createEntry', 'deleteEntry']),

        loadEntry(){

            let userEntry

            if( this.id == 'new' ){
                userEntry = {
                    text: '',
                    date: new Date().getTime()
                }
            } else {
                userEntry = this.getEntryById( this.id )
                // entrada no encontrada en el diario
                if( !userEntry ) return this.$router.push( { name: 'no-entry' } )
            }

            this.entry = userEntry
        },

        async saveEntry(){

            new Swal({
                title: 'Espere por favor',
                allowOutsideClick: false
            })

            Swal.showLoading()

            const pictureUrl = await uploadImage( this.imgFile )
            this.entry.picture = pictureUrl

            // if there is an id, it is because we want to update an existing entry
            if( this.entry.id ){
                // call action to put entry into firebase restAPI database
                await this.updateEntry( this.entry )
            } else {
                // we want to create a new entry
                // it is needed to make a POST to de restAPI database

                const newId = await this.createEntry( this.entry )

                this.$router.push( { name: 'entry', params: { id: newId } } )

            }
            this.imgFile = null

            Swal.fire('Guardado', 'Entrada registrada!', 'success')
        },
        async onDeleteEntry(){

            const { isConfirmed } = await Swal.fire({
                title: 'Desea eliminar la entrada?',
                text: 'Luego de eliminada no se podrá recuperar',
                showDenyButton: true,
                confirmButtonText: 'Eliminar'
            })

            if( isConfirmed ){
                
                new Swal({
                    title: 'Espere por favor',
                    allowOutsideClick: false
                })

                Swal.showLoading()
                
                await this.deleteEntry( this.id )
                this.$router.push( {name: 'no-entry'} )
                
                Swal.fire('Eliminado exitosamente', '', 'success')
            }
        },

        onSelectedImage( event ){
            // console.log(event.target.files);
            const file = event.target.files[0]

            if( !file ) {
                this.localImage = null
                this.imgFile = null
                return
            }
            // We got an image file
            this.imgFile = file

            const fr = new FileReader()
            fr.onload = () => this.localImage = fr.result
            fr.readAsDataURL( file )

        },
        onSelectImg(){
            this.$refs.imageSelector.click()
        }
    },

    computed:{
        ...mapGetters('journal', ['getEntryById']),

        day(){
            const { day } =  getDayMonthYear( this.entry.date )
            return day
        },
        month(){
            const { month } = getDayMonthYear( this.entry.date )
            return month
        },
        yearDay(){
            const { yearDay } = getDayMonthYear( this.entry.date )
            return yearDay
        }
    },

    created(){
        // console.log(this.id);
        this.loadEntry()
    },

    watch:{
        id( /*value, oldValue*/ ){
            // console.log( { value, oldValue } )
            this.loadEntry()
        }
    }

}
</script>

<style lang="scss" scoped>

textarea{
    font-size: 20px;
    border: none;
    height: 100%;

    &:focus{
        outline: none;
    }
}

img{
    width: 200px;
    position: fixed;
    bottom: 150px;
    right: 20px;
    box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.2);
}

</style>