<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="user-list">
          <h2>
            Телефонная книга
            <small class="text-muted">( всего {{ countList }} )</small>
          </h2>
          <user-list :users="users">
            <tr slot="header">
              <th>ID</th>
              <th>Имя</th>
              <th>Фамилия</th>
              <th>Телефон</th>
            </tr>
            <template 
              slot="item" 
              slot-scope="user">
              <td><router-link :to="{ name: 'edit', params: { userId: user.id }}">#{{ user.id }}</router-link></td>
              <td>{{ user.firstName }}</td>
              <td>{{ user.lastName }}</td>
              <td>{{ user.phone }}</td>
            </template>
          </user-list>
        </div>
      </div>
    </div>
    <hr >
    <div class="row">
      <div class="col-9">
        <pagination
          :page="page"
          :limit="limit"
          :total="countList"
          path="phones"/>
      </div>
      <div class="col">
        <select
          class="form-control"
          @change="onChangeLimit">
          <option
            v-for="i in listLimits"
            :key="i"
            :value="i"
            :selected="i === limit">{{ i }}</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
import axios from '@/axios'
import UserList from '@/components/UserList'
import Pagination from '@/components/Pagination'

export default {
    name: 'Phones',
    components: {
        UserList,
        Pagination
    },
    data() {
        return {
            users: [],
            countList: 0,
            page: 1,
            limit: 10,
            listLimits: [5, 10, 15]
        }
    },
    computed: {
        url() {
            return '/users?_page=' + this.page + '&_limit=' + this.limit + '&_sort=sort&_order=asc'
        }
    },
    watch: {
        $route: 'fetchData',
        limit: 'fetchData'
    },
    created() {
        this.fetchData()
    },
    methods: {
        fetchData() {
            this.page = Number(this.$route.query.page) || this.page

            let url = this.url
            if (this.$route.query.q) {
                url += '&q=' + this.$route.query.q
            }

            axios.get(url).then(response => {
                this.users = response.data
                this.countList = Number(response.headers['x-total-count'])
            })
        },
        onChangeLimit(e) {
            this.$router.push('/phones')
            this.page = 1
            this.limit = Number(e.target.value)
        }
    }
}
</script>

<style scoped>
</style>
