/**
el props setup en el script es importante, cambia la sintaxis a 
funciones definidas del Api y por lo tanto no se puede usar las funciones
data, methods o mounted
*/

<script>


export default{
  name: 'app',
  components: {
  }
}

</script>

<template>
    
    <!--
      AQUI VA LA PAGINA WEB COMO TAL Y EL ROUTER COMPONENT PARA CAMBIAR ENTRE COMPONENTES
    -->
      <router-view></router-view>

      

</template>
