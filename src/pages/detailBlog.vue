<template>
  <page-container>
    {{blogId}}
    <div class="ql-container ql-snow">
      <div class="ql-editor" v-html="contentText">

      </div>
    </div>
  </page-container>
</template>

<script>
  import axios from 'axios';
  import _ from 'lodash';

  const getDetailBlog = (blogId) => axios.post('/api/blog/getDetailBlog', blogId);

  export default {
    name: 'detail-blog',
    data () {
      return {
        blogId: '',
        contentText: ''
      };
    },
    mounted () {
      this.blogId = this.$route.query.blogId;
      getDetailBlog({ blogId: this.blogId}).then(result => {
        if (result.data.success) {
          this.contentText = result.data.data.contentText;
        }
      });
    }
  };
</script>

<style scoped>

</style>
