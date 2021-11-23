<template>
 <div class="mt-8">
   <div class="container mx-auto px-8">
     <form @submit="onSubmit">
       <div class="row">
         <label for="fullName">
           <span class="font-semibold">Full Name</span>
           <input
           id="fullName" 
           class="px-4 py-3 rounded-lg border-gray-100 mt-1" 
           type="text" 
           placeholder="iMoney...." />
         </label>
       </div>

        <div class="row">
         <label for="fullName">
           <span class="font-semibold">Email Address</span>
           <input
           id="fullName" 
           class="px-4 py-3 rounded-lg border-gray-100 mt-1" 
           type="email" 
           placeholder="example@gmail.com" />
         </label>
       </div>

        <div class="row">
         <label for="fullName">
           <span class="font-semibold">Password</span>
           <input
           id="password" 
           class="px-4 py-3 rounded-lg border-gray-100 mt-1" 
           type="password" 
           placeholder="Example" />
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