<template>
  <div v-if="users.length === 0">
    <div 
      class="alert alert-warning" 
      role="alert">
      Загрузка...
    </div>
  </div>
  <div v-else>
    <table
      class="user-table table">
      <thead class="thead-dark">
        <tr>
          <th>ID</th>
          <th>Аватар</th>
          <th>Статус</th>
          <th>Баланс</th>
          <th>Группа</th>
          <th>Имя</th>
          <th>Фамилия</th>
          <th>Email</th>
          <th>Дата регистрации</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="user in users"
          :key="user.id">
          <td><router-link :to="{ name: 'edit', params: { userId: user.id }}">#{{ user.id }}</router-link></td>
          <td>
            <router-link :to="{ name: 'edit', params: { userId: user.id }}">
              <img
                :src="user.picture"
                class="img-thumbnail">
            </router-link>
          </td>
          <td>{{ user.isActive }}</td>
          <td>{{ user.balance }}</td>
          <td>{{ user.accessLevel }}</td>
          <td>{{ user.firstName }}</td>
          <td>{{ user.lastName }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.registered }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
    name: 'UserList',
    props: {
        users: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            loading: true
        }
    }
}
</script>

<style scoped>
</style>
