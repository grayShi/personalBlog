<template>
    <div style="margin-bottom: 10px">
      <!-- quill-editor插件标签 分别绑定各个事件-->
      <quill-editor v-model="content" ref="myQuillEditor" :options="editorOption"
                    @change="onEditorChange($event)">
      </quill-editor>
      <div class="limit">当前已输入 <span>{{nowLength}}</span> 个字符，您还可以输入 <span>{{SurplusLength}}</span> 个字符。</div>
    </div>
</template>

<script>
  import hljs from 'highlight.js';
  import 'highlight.js/styles/tomorrow.css';
  import 'quill/dist/quill.core.css';
  import 'quill/dist/quill.snow.css';
  import 'quill/dist/quill.bubble.css';
  import './css/blogInput.css';
  import { quillEditor } from 'vue-quill-editor';
  export default {
    components: {
      quillEditor
    },
    name: "my-quill-editor",
    data () {
      return {
        content: '',
        nowLength: 0,
        SurplusLength: 1000,
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
              ['link', 'video']  // 'image',
            ],
            syntax: {
              highlight: text => hljs.highlightAuto(text).value
            }
          }
        }
      };
    },
    methods: {
      onEditorChange ({ editor, html, text }) {
        this.nowLength = text.length;
        this.$emit('input', this.content);
      },
      heightSet () {
        const quillHeight = this.$refs.myQuillEditor.$el.offsetHeight;
        const quillFieldsHeight = this.$refs.myQuillEditor.$el.children[0].offsetHeight;
        const qillTextHeight = quillHeight - quillFieldsHeight - 34;
        this.$refs.myQuillEditor.$el.children[1].style.height = qillTextHeight + 'px';
      }
    },
    computed: {
      contentCode () {
        return hljs.highlightAuto(this.content).value;
      }
    },
    mounted () {
      this.$nextTick(function () {
        // 代码保证 this.$el 在 document 中
        this.heightSet();
      });
    }
  };
</script>

<style scoped>

</style>
