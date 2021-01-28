//var textlatex="$$ \\sigma =\\sqrt{\\displaystyle\\sum\\limits_{i=1}^n \\frac{(x_{i}-\\overline{x})^2}{n-1}}$$"
//var latex=document.createTextNode(textlatex);
//var div_latex=document.getElementById('milatex');
//div_latex.appendChild(latex);
//+ '$$\sqrt{\displaystyle\sum\limits_{i=1}^n \frac{(x_{i}-\overline{x})^2}{n-1}}$$'


//Inicializamos un componente





//pregunta:'$$\sigma=\sqrt{\displaystyle\sum\limits_{i=1}^n \frac{(x_{i}-\overline{x})^2}{n-1}}$$',
//Inicializamos VUE

//Componentes
Vue.component('promedio',{
    template: '\( \\bar{x} =\\frac{x_{1} + x_{2}+ x_{3}+...+ x_{n-1} + x_{n}}{n} \)'
});


var App= new Vue({el:'#App',
data:{mensaje:'Hola Vue',
 
datos:[1,2,3,4,5,6,7,8],
n:0
},

methods:{
    mostrarMensaje: function(){
        return this.mensaje;
    },
    agregar:function(){
        this.datos.push(parseInt(this.n));
    }
},
computed:{//Se auto ejecuta cuando alguna variable perteneciente a data cambia su valor
    suma:function(){
        return true;
    }
},

beforeCreate:function(){
    console.log('beforeCreate');
},
created:function(){
    console.log('created');
},
beforeMount:function(){
    console.log('beforeMount');
},
beforeUpdate:function(){

    console.log('Inicio de beforeUpdate');
    console.log(App.datos);
    console.log("fin de beforeUpdate ")
},
updated:function(){
    console.log('updated');
},
beforeDestroy:function(){
    console.log('beforeDestroy');
},
destroyed:function(){
    console.log('destroyed');
}
})

