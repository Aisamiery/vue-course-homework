<template>
  <div class="container">
    <h2>Редактирование пользователя</h2>
    <div v-if="!user">
      <div
        class="alert alert-warning"
        role="alert">
        Загрузка...
      </div>
    </div>
    <div v-else>
      <user-form 
        :user="user" 
        @change="save"
        @delete="deleteUser" />
    </div>
  </div>
</template>

<script>
import axios from '@/axios'
import UserForm from '@/components/UserForm'

export default {
    name: 'Edit',
    components: {
        UserForm
    },
    data() {
        return {
            user: false
        }
    },
    computed: {
        url() {
            return '/users/' + this.$route.params.userId
        }
    },
    created() {
        axios.get(this.url).then(response => {
            this.user = response.data
        })
    },
    methods: {
        save(newUser) {
            axios.put(this.url, newUser).then(() => {
                //this.$set(this, 'user', newUser)
                this.$router.push({ name: 'users' })
            })
        },
        deleteUser() {
            axios.delete(this.url).then(() => {
                this.$router.push({ name: 'users' })
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
