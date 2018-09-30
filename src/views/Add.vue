<template>
  <div class="container">
    <h2>Добавление пользователя</h2>
    <user-form 
      :user="user" 
      @change="save" />
  </div>
</template>

<script>
import axios from '@/axios'
import UserForm from '@/components/UserForm'
export default {
    name: 'Add',
    components: {
        UserForm
    },
    data() {
        return {
            user: {}
        }
    },
    computed: {
        url() {
            return '/users/'
        }
    },
    methods: {
        save(newUser) {
            newUser.sort = 10000
            axios.post(this.url, newUser).then(response => {
                this.$router.push({ name: 'edit', params: { userId: response.data.id } })
            })
        }
    }
}
</script>

<style scoped>
h2 {
    margin: 40px 0 20px;
}
</style>
