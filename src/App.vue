<template>
  <div id="app">

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <router-link 
        to="/" 
        class="navbar-brand">Справочник пользователей</router-link>

      <button 
        class="navbar-toggler" 
        type="button" 
        data-toggle="collapse" 
        data-target="#navbarSupportedContent" 
        aria-controls="navbarSupportedContent" 
        aria-expanded="false" 
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"/>
      </button>

      <div 
        id="navbarSupportedContent" 
        class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto">
          <router-link 
            to="/" 
            class="nav-item" 
            tag="li">
            <a
              href="#" 
              class="nav-link">Главная</a>
          </router-link>
          <router-link 
            :to="{name: 'users'}"
            class="nav-item" 
            tag="li"
            active-class="active">
            <a
              href="#"
              class="nav-link">Список пользователей</a>
          </router-link>
          <router-link
            :to="{name: 'phones'}"
            class="nav-item"
            tag="li"
            active-class="active">
            <a
              href="#"
              class="nav-link">Телефонная книга</a>
          </router-link>
        </ul>
        <form 
          class="form-inline my-2 my-lg-0" 
          @submit="onSearch">
          <input 
            v-model="q" 
            class="form-control mr-sm-2" 
            type="search"
            placeholder="Например, Paul"
            aria-label="Поиск">
          <button 
            class="btn btn-outline-success my-2 my-sm-0" 
            type="submit">Найти</button>
        </form>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
    data() {
        return {
            q: ''
        }
    },
    methods: {
        onSearch() {
            this.$router.push(this.$route.path + '?q=' + this.q)
        }
    }
}
</script>

<style>
</style>
