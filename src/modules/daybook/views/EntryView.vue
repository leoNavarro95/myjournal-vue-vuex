<template>

    <template v-if="entry" >

        <div class="entry-title d-flex justify-content-between p-2">
            
            <div>
                <span class="text-success fs-3 fw-bold"> {{ day }} </span>
                <span class="mx-1 fs-3"> {{ month }} </span>
                <span class="mx-2 fs-4 fw-light"> {{ yearDay }} </span>
            </div>

            <div>
                <button class="btn btn-danger mx-2">
                    Borrar
                    <i class="fa fa-trash-alt"></i>
                </button>
                
                <button class="btn btn-primary">
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

        <img 
            src="https://us.123rf.com/450wm/julietphotography/julietphotography1907/julietphotography190700053/128779354-bosque-de-cuento-de-hadas-con-%C3%A1rboles-reflejados-en-agua-rosa.jpg?ver=6" 
            alt="entry-picture"
            class="img-thumbnail"
        >
    </template>


    <Fab
        icon="fa-save"
    />

</template>

<script>

import { defineAsyncComponent } from '@vue/runtime-core'
import getDayMonthYear from '../helpers/getDayMonthYear';

import { mapGetters } from 'vuex';


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
            entry: null
        }
    },
    methods:{
        loadEntry(){
            const userEntry = this.getEntryById( this.id )
            // console.log( userEntry );
            
            // entrada no encontrada en el diario
            if( !userEntry ) return this.$router.push( { name: 'no-entry' } )

            this.entry = userEntry
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