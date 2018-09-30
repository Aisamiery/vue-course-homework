<template>
  <div>
    <form @submit="onSubmitForm">
      <div class="form-check">
        <input
          id="userActive"
          v-model="localUser.isActive"
          type="checkbox"
          class="form-check-input">
        <label
          class="form-check-label"
          for="userActive">Активность</label>
      </div>
      <image-field v-model="localUser.picture" />
      <div class="form-group">
        <label for="inputFirstName">Имя</label>
        <input
          id="inputFirstName"
          v-model="localUser.firstName"
          type="text"
          class="form-control"
          placeholder="Имя">
      </div>
      <div class="form-group">
        <label for="inputLastName">Фамилия</label>
        <input
          id="inputLastName"
          v-model="localUser.lastName"
          type="text"
          class="form-control"
          placeholder="Фамилия">
      </div>
      <div class="form-group">
        <label for="inputAge">Возраст</label>
        <input
          id="inputAge"
          v-model="localUser.age"
          type="number"
          class="form-control"
          placeholder="Возраст">
      </div>
      <div class="form-group">
        <label for="inputSelect">Группа</label>
        <select 
          id="inputSelect" 
          v-model="localUser.accessLevel" 
          class="form-control">
          <option value="guest">guest</option>
          <option value="user">user</option>
          <option value="admin">admin</option>
        </select>
      </div>
      <div class="form-group">
        <label for="inputBalance">Баланс</label>
        <input
          id="inputBalance"
          v-model="localUser.balance"
          type="text"
          class="form-control"
          placeholder="Баланс">
      </div>
      <div class="form-group">
        <label for="inputCompany">Компания</label>
        <input
          id="inputCompany"
          v-model="localUser.company"
          type="text"
          class="form-control"
          placeholder="Компания">
      </div>
      <div class="form-group">
        <label for="inputEmail">Email</label>
        <input
          id="inputEmail"
          v-model="localUser.email"
          type="text"
          class="form-control"
          placeholder="Email">
      </div>
      <div class="form-group">
        <label for="inputPhone">Телефон</label>
        <input
          id="inputPhone"
          v-model="localUser.phone"
          type="text"
          class="form-control"
          placeholder="Телефон">
      </div>
      <div class="form-group">
        <label for="inputAddress">Адрес</label>
        <input
          id="inputAddress"
          v-model="localUser.address"
          type="text"
          class="form-control"
          placeholder="Адрес">
      </div>
      <div class="form-group">
        <label for="inputAbout">Описание</label>
        <input
          id="inputAbout"
          v-model="localUser.about"
          type="text"
          class="form-control"
          placeholder="Описание">
      </div>
      <div class="form-group">
        <label for="inputDate">Дата регистрации</label>
        <input
          id="inputDate"
          v-model="localUser.registered"
          type="text"
          class="form-control"
          placeholder="01.01.2001">
      </div>
      <div class="form-group">
        <label for="inputSort">Сортировка</label>
        <input
          id="inputSort"
          v-model="localUser.sort"
          type="number"
          class="form-control"
          placeholder="Сортировка">
      </div>
      <div>
        <button
          type="submit"
          class="btn btn-primary">Сохранить</button>
        &nbsp;
        <button
          v-show="localUser.id"
          type="button"
          class="btn btn-danger" 
          @click="onDeleteUser">Удалить</button>
      </div>
    </form>

    <hr >
    <pre>{{ localUser }}</pre>
  </div>

</template>

<script>
import ImageField from '@/components/Fields/ImageField'
export default {
    name: 'UserForm',
    components: {
        ImageField
    },
    model: {
        prop: 'user'
    },
    props: {
        user: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            localUser: {}
        }
    },
    mounted() {
        this.localUser = Object.assign({}, this.user)
    },
    methods: {
        onSubmitForm() {
            this.$emit('change', Object.assign({}, this.localUser))
        },
        onDeleteUser() {
            this.$emit('delete')
        }
    }
}
</script>

<style scoped>
</style>
