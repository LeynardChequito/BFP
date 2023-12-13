<template>

</template>

<script>
import axios from 'axios'
export default{
    data(){
        return{
            info:[],
        }
    },
    methods:{
        async getInfo(){
            const inf = await axios.get('getData');
            
        }
    }
}