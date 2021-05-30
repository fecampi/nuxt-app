<template>
  <section class="posts">
    <PostPreview
      id="1"
      title="Hellho There"
      previewText="This my first post!"
      thumbnail="https://www.w3schools.com/images/picture.jpg"
    />
    <PostPreview
      id="2"
      title="Hellho There"
      previewText="This my first post!"
      thumbnail="https://www.w3schools.com/images/picture.jpg"
    />
    <PostPreview
      id="3"
      title="Hellho There"
      previewText="This my first post!"
      thumbnail="https://www.w3schools.com/images/picture.jpg"
    />
  </section>
</template>
<script>
import PostPreview from "@/components/Posts/PostPreview";
export default {
    components:{
  PostPreview,
},
  name: "PostList",
};
</script>


<style scoped>
.posts {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>