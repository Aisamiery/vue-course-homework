<template>
  <div class="home">
    <homepage />
  </div>
</template>

<script>
// @ is an alias to /src
import Homepage from '@/components/Homepage'

export default {
    name: 'Home',
    components: {
        Homepage
    }
}
</script>
