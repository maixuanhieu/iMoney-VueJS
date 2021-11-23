<template>
 <div class="mt-8">
   <div class="container mx-auto px-8">
     <form @submit="onSubmit"></form>
   </div>
 </div>
</template>


<script>
export default {
  setup(){
    function onSubmit(){}
    return { onSubmit }
  },
}
</script>