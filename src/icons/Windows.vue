<script setup lang="ts">
const id = crypto.randomUUID()
</script>

<template>
  <svg v-once viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 6.10352e-05C0.671573 6.10352e-05 0 0.671634 0 1.50006V14.0001H14V6.10352e-05H1.5ZM27.5 6.10352e-05H15V14.0001H29V1.50006C29 0.671634 28.3284 6.10352e-05 27.5 6.10352e-05ZM15 15.0001H29V27.5001C29 28.3285 28.3284 29.0001 27.5 29.0001H15V15.0001ZM14 15.0001H0V27.5001C0 28.3285 0.671573 29.0001 1.5 29.0001H14V15.0001Z" :fill="`url(#${id})`"></path>
    <defs>
      <linearGradient :id="id" x1="4.39437" y1="6.18145e-05" x2="23.2883" y2="29.0001" gradientUnits="userSpaceOnUse">
      <stop stop-color="#4DD2FF"></stop>
      <stop offset="0.75" stop-color="#0078D4"></stop>
      </linearGradient>
    </defs>
  </svg>
</template>
