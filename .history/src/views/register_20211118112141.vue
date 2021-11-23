<template>
 <div class="mt-8">
   <div class="container mx-auto px-8">
     <form @submit="onSubmit">
       <div class="row">
         <label for="fullName">
           <span class="font-semibold">Full Name</span>
           <input type="text" placeholder="">
         </label>
       </div>
     </form>
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