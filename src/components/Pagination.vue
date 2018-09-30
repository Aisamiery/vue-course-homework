<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination">
      <router-link 
        v-for="item in listItems"
        :key="item"
        :to="{name: path, query: {'page': item}}"
        :class="{active: item === page}"
        class="page-item"
        tag="li"><a
          class="page-link" 
          href="#">{{ item }}</a></router-link>
    <!--<li class="page-item"><a class="page-link" href="#">Previous</a></li>-->
    <!--<li class="page-item"><a class="page-link" href="#">Next</a></li>-->
    </ul>
  </nav>
</template>

<script>
import _ from 'lodash'

export default {
    name: 'Pagination',
    props: {
        page: {
            type: Number,
            required: true
        },
        limit: {
            type: Number,
            required: true
        },
        total: {
            type: Number,
            required: true
        },
        path: {
            type: String,
            required: true
        }
    },
    computed: {
        listItems() {
            let pages = Math.ceil(this.total / this.limit) + 1
            return _.range(1, pages)
        }
    }
}
</script>

<style scoped>
</style>
