<template>
  <div class="form-group">
    <label for="inputDate">{{ name }}</label>
    <input
      id="inputDate"
      ref="datepicker"
      type="text"
      class="form-control"
      placeholder="01.01.2001" 
      autocomplete="off">
  </div>
</template>

<script>
import moment from 'moment'
import Pikaday from 'pikaday'
export default {
    name: 'DateField',
    model: {
        prop: 'date'
    },
    props: {
        date: {
            type: String,
            default: ''
        },
        name: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            picker: false
        }
    },
    mounted() {
        this.picker = new Pikaday({
            field: this.$refs.datepicker,
            format: 'DD.MM.YYYY',
            onSelect: date => {
                this.$emit('input', moment(date).format('DD.MM.YYYY'))
            }
        })
        this.picker.setDate(moment(this.date, 'DD.MM.YYYY').format('YYYY-MM-DD'))
    }
}
</script>

<style scoped>
</style>
