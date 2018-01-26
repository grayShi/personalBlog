<template>
  <div>
    <!-- quill-editor插件标签 分别绑定各个事件-->
    <quill-editor v-model="content" ref="myQuillEditor" :options="editorOption" @blur="onEditorBlur($event)" @focus="onEditorFocus($event)"
                  @change="onEditorChange($event)">
    </quill-editor>
    <div class="limit">当前已输入 <span>{{nowLength}}</span> 个字符，您还可以输入 <span>{{SurplusLength}}</span> 个字符。</div>
    <!-- 文件上传input 将它隐藏-->
    <el-upload class="upload-demo" :action="qnLocation" :before-upload='beforeUpload' :data="uploadData" :on-success='upScuccess'
               ref="upload" style="display:none">
      <el-button size="small" type="primary" id="imgInput" v-loading.fullscreen.lock="fullscreenLoading" element-loading-text="插入中,请稍候">点击上传</el-button>
    </el-upload>
  </div>
</template>

<script>
  import hljs from 'highlight.js';
  import 'highlight.js/styles/tomorrow.css';
  import 'quill/dist/quill.core.css';
  import 'quill/dist/quill.snow.css';
  import 'quill/dist/quill.bubble.css';
  import { quillEditor } from 'vue-quill-editor';
  import axios from 'axios';

  const saveBlogs = (form) => axios.post('/api/save/saveBlogs', form);

  export default {
    components: {
      quillEditor
    },
    data () {
      return {
        content: '',
        editorOption: {
          theme: 'snow',
          modules: {
            toolbar: [
              ['bold', 'italic', 'underline', 'strike'],
              ['blockquote', 'code-block'],
              [{ 'header': 1 }, { 'header': 2 }],
              [{ 'list': 'ordered' }, { 'list': 'bullet' }],
              [{ 'script': 'sub' }, { 'script': 'super' }],
              [{ 'indent': '-1' }, { 'indent': '+1' }],
              [{ 'direction': 'rtl' }],
              [{ 'size': ['small', false, 'large', 'huge'] }],
              [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
              [{ 'font': [] }],
              [{ 'color': [] }, { 'background': [] }],
              [{ 'align': [] }],
              ['clean'],
              ['link', 'image', 'video']
            ],
            syntax: {
              highlight: text => hljs.highlightAuto(text).value
            }
          }
        }
      };
    },
    methods: {
      saveCommit () {
        const form = {
          description: this.content
        };
        saveBlogs({ form }).then((result) => {
          debugger;
        });
      }
    },
    computed: {
      editor () {
        return this.$refs.myTextEditor.quill;
      },
      contentCode () {
        return hljs.highlightAuto(this.content).value;
      }
    }
  };
</script>

