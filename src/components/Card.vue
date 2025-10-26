<template>
    <div class="flex items-center rounded-lg bg-white shadow-lg overflow-hidden">
        <img class="h-32 w-32 flex-shrink-0" v-bind:src="place.imageUrl" v-bind:alt="place.imageAlt">
        <div class="px-6 py-4">
            <h3 class="text-lg font-semibold text-gray-800">{{ place.city }}</h3>
            

            <p class="text-gray-600 ">${{ place.averagePrice }} / night average</p>
            <div class="mt-4">
                <a class="text-brand-dark hover:text-brand font-semibold text-sm" href="#">
                    Explore {{ place.propertyCount }} properties
                </a>
            </div>

        </div>
    </div>


  </template>
  
  <script setup>
  // En Vue 3 con <script setup>, los props se definen usando 'defineProps'
  import { defineProps } from 'vue';
  
  // Define el prop que este componente espera recibir: 'place'
  const props = defineProps({
      place: {
          type: Object, // Esperamos un objeto con la estructura de placesData
          required: true
      }
  });
  
  </script>
  
  <style scoped>
  /* Puedes usar estilos aquí si lo necesitas */
  </style>