<template>
  <div class="admin-post-page">
    <section class="update-form"><AdminPostForm :post="loadedPost"/></section>
  </div>
</template>




<script>
import AdminPostForm from "@/components/Admin/AdminPostForm";
export default {
  components: {
    AdminPostForm,
  },
  data() {
    return { loadedPost: {author:"teste",title:"teste",content:"teste",thumbnailLink:"https://s2.glbimg.com/QwyLsA8IPbjuMbABZ6LOe-SIhf4=/0x106:1024x682/540x304/smart/filters:max_age(3600)/https://i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/q/d/bAhe4pT1qA9Hv9cp8qkw/arena.jpg"} };
  },
};
</script>

<style scoped>
.update-form {
  width: 90%;
  margin: 20px auto;
}
@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>
