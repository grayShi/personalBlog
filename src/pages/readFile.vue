<template>
  <div>
    <el-input v-model="inputPath" placeholder="请输入文件路径"></el-input>
    <el-button type="primary" @click="readFile">读取文件</el-button>
    <div class="fileList" v-html="fileSource">
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import _ from 'lodash';
  const read = (path) => axios.post('/api/readFile/read', path);

  export default {
    name: 'read-file',
    data () {
      return {
        inputPath: '',
        fileSource: ''
      };
    },
    methods: {
      readFile () {
        if (this.inputPath.substr(-1, 1) !== '/') {
          this.inputPath += '/';
        }
        read({path: this.inputPath}).then(fileList => {
          if (fileList.data.success) {
            this.fileSource = '';
            // const fileStore = _.groupBy(fileList.data.data, 'path');
            _.each(fileList.data.data, (file, key) => {
              console.log(key);
              this.fileSource += `<p>${file.path}${file.fileName}</p>`;
              // _.each(file, fi => {
              //   console.log(fi.fileName);
              //   this.fileSource += `<p>${fi.fileName}</p>`;
              // });
            });
          }
        });
      }
    }
  };
</script>

<style scoped>

</style>
