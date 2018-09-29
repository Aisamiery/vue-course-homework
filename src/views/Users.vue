<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="user-list">
          <h2>
            Список пользователей
            <small class="text-muted">( всего {{ countList }} )</small>
          </h2>
          <user-list :users="users" />
        </div>
      </div>
    </div>
    <div class="clearfix"/>
    <div class="row">
      <div class="col-9">
        <pagination
          :page="page"
          :limit="limit"
          :total="countList"/>
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
import axios from 'axios'
import UserList from '@/components/UserList'
import Pagination from '@/components/Pagination'

export default {
    name: 'Users',
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
            return 'http://localhost:3000/users?_page=' + this.page + '&_limit=' + this.limit
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

            axios.get(this.url).then(response => {
                this.users = response.data
                this.countList = Number(response.headers['x-total-count'])
            })
        },
        onChangeLimit(e) {
            this.$router.push('/users')
            this.page = 1
            this.limit = Number(e.target.value)
        }
    }
}
</script>

<style scoped>
.user-list {
    margin: 20px 0;
}
</style>
