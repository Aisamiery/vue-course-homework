<template>
  <div 
    ref="dropArea" 
    @drop="selectDragable">
    <div class="form-group">
      <img
        v-if="image"
        :src="image" 
        class="img-thumbnail" 
        @click="selectImage">
      <div
        v-else
        class="drop-arena-file" 
        @click="selectImage">Нажмите или перетащите картинку</div>
      <input 
        ref="image" 
        type="file" 
        class="hidden" 
        @change="upload">
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'ImageField',
    model: {
        prop: 'image'
    },
    props: {
        image: {
            type: String,
            default: ''
        }
    },
    mounted() {
        ;['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
            this.$refs.dropArea.addEventListener(eventName, preventDefaults, false)
        })
        function preventDefaults(e) {
            e.preventDefault()
            e.stopPropagation()
        }
    },
    methods: {
        selectImage() {
            this.$refs.image.click()
        },
        upload() {
            this.uploadFile(this.$refs.image.files[0])
        },
        selectDragable(e) {
            this.uploadFile(e.dataTransfer.files[0])
        },
        uploadFile(file) {
            const api = 'https://api.imgur.com/3/image'
            const form = new FormData()
            form.append('image', file)

            const config = {
                headers: {
                    Authorization: 'Client-ID 143c2ee89cc3ac8'
                }
            }

            axios
                .post(api, form, config)
                .then(response => response.data)
                .then(response => {
                    this.$emit('input', response.data.link)
                    this.$refs.image.value = ''
                })
        }
    }
}
</script>

<style scoped>
.img-thumbnail {
    cursor: pointer;
}

.hidden {
    display: none;
}

.drop-arena-file {
    text-align: center;
    padding: 50px;
    display: inline-block;
    border: 1px dotted #afafaf;
    border-radius: 10px;
    cursor: pointer;
}
</style>
