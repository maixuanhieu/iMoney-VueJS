<template>
 <div class="mt-8">
   <div class="container mx-auto px-8">
     <form @submit="onSubmit">
       <div class="row">
         <label for="fullName">
           <span class="font-semibold">Full Name</span>
           <input class="px-4 py-3 rounded-lg border-gra" type="text" placeholder="iMoney...." />
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