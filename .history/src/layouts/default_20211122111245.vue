<template>

    <slot />
    <navigation-bottom></navigation-bottom>
</template>

<script>
import NavigationBottom from "@/components/NavigationBottom.vue";
export default {
    components: { NavigationBottom },
}
</script>