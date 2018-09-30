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
        <slot name="header">
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
        </slot>
      </thead>
      <tbody>
        <tr
          v-for="user in users"
          :key="user.id">
          <slot 
            v-bind="user"
            name="item">
            <td><router-link :to="{ name: 'edit', params: { userId: user.id }}">#{{ user.id }}</router-link></td>
            <td class="avatar">
              <router-link :to="{ name: 'edit', params: { userId: user.id }}">
                <img
                  :src="user.picture"
                  class="img-thumbnail">
              </router-link>
            </td>
            <td class="status-row"><div
              :class="getStatus(user.isActive)"
              class="status">&nbsp;</div></td>
            <td>{{ user.balance }}</td>
            <td>{{ user.accessLevel }}</td>
            <td>{{ user.firstName }}</td>
            <td>{{ user.lastName }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.registered }}</td>
          </slot>
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
    },
    methods: {
        getStatus(status) {
            return status ? 'enabled' : 'disabled'
        }
    }
}
</script>

<style scoped>
.status {
    display: inline-block;
    width: 10px;
    height: 10px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
}

.enabled {
    background-color: green;
}

.disabled {
    background-color: red;
}

.table th,
.table td {
    vertical-align: inherit;
}

.avatar,
.status-row {
    text-align: center;
}
</style>
