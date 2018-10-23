<template>
  <page-container>
    <el-form ref="blogForm" :model="blogForm" :rules="blogFormRules" label-width="80px">
      <el-form-item label="主题" prop="subject">
        <el-input v-model="blogForm.subject"></el-input>
      </el-form-item>
      <el-form-item label="简介" prop="introduction">
        <el-input v-model="blogForm.introduction"></el-input>
      </el-form-item>
      <el-form-item label="标签" prop="tag">
        <el-tag
          :key="tag"
          v-for="tag in blogForm.tag"
          closable
          :disable-transitions="false"
          @close="handleClose(tag)">
          {{tag}}
        </el-tag>
        <el-input
          class="input-new-tag"
          v-if="inputVisible"
          v-model="inputValue"
          ref="saveTagInput"
          maxlength="50"
          size="small"
          @keyup.enter.native="handleInputConfirm"
          @blur="handleInputConfirm"
        >
        </el-input>
        <el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>
      </el-form-item>
      <el-form-item  label="内容" prop="contentText">
        <my-quill-editor v-model="blogForm.contentText" style="height: 400px"></my-quill-editor>
      </el-form-item>
    </el-form>

    <el-button type="primary" @click="saveCommit">提交</el-button>
    <!--<div class="ql-container ql-snow">-->
      <!--<div class="ql-editor" v-html="text">-->
      <!--</div>-->
    <!--</div>-->
  </page-container>
</template>

<script>
  import axios from 'axios';
  import myQuillEditor from '../components/my-quill-editor';

  const saveBlog = (form) => axios.post('/api/blog/saveBlog', form);

  export default {
    name: 'index',
    components: {
      myQuillEditor
    },
    data () {
      return {
        blogForm: {
          subject: '',
          introduction: '',
          tag: [],
          contentText: ''
        },
        inputVisible: false,
        inputValue: '',
        blogFormRules: {
          subject: [
            this.requiredRules('subject'),
            this.requiredMax(300)
          ],
          introduction: [
            this.requiredRules('introduction'),
            this.requiredMax(100)
          ],
          tag: [
            this.requiredRules('tag', 'array', 'change')
          ],
          contentText: [
            this.requiredRules('contentText'),
            this.requiredMax(20000)
          ]
        }
      };
    },
    methods: {
      saveCommit () {
        this.$refs.blogForm.validate((valid) => {
          if (valid) {
            const form = {
              subject: this.blogForm.subject,
              introduction: this.blogForm.introduction,
              tag: this.blogForm.tag,
              contentText: this.strFormatHtml(this.blogForm.contentText)
            };
            console.log(form);
            saveBlog({form}).then((result) => {
              if (result.data.success) {
                alert('success');
              }
            });
          }
        });
      },
      handleClose (tag) {
        this.blogForm.tag.splice(this.blogForm.tag.indexOf(tag), 1);
        this.$refs.blogForm.validateField('tag', (valid) => valid);
      },

      showInput () {
        this.inputVisible = true;
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus();
        });
      },

      handleInputConfirm () {
        let inputValue = `#${this.inputValue}`;
        if (inputValue) {
          this.blogForm.tag.push(inputValue);
        }
        this.$refs.blogForm.validateField('tag', (valid) => valid);
        this.inputVisible = false;
        this.inputValue = '';
      }
    }
  };
</script>

<style scoped>
  .el-tag + .el-tag {
    margin-left: 10px;
  }
  .button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }
</style>
