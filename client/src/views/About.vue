<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>
      {{ post.title }}
    </div>
  </div>
</template>


<script>
export default {
  name: 'About',
  data () {
    return {
      post: ""
    }
  },
  created () {
    window.axios
      .get('http://localhost:8080/posts/5f2ae15f5d266a001917d88f')
      .then(response => (this.post = response.data.data))
    },
}
</script>
