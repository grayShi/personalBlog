<template>
  <div>
    <!-- quill-editor插件标签 分别绑定各个事件-->
    <quill-editor v-model="content" ref="myQuillEditor" :options="editorOption"
                  @change="onEditorChange($event)">
    </quill-editor>
    <div class="limit">当前已输入 <span>{{nowLength}}</span> 个字符，您还可以输入 <span>{{SurplusLength}}</span> 个字符。</div>
    <el-button type="primary" @click="saveCommit">提交</el-button>
    <div class="ql-container ql-snow">
      <div class="ql-editor" v-html="text">
      </div>
    </div>
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
  import axios from 'axios';

  const saveBlog = (form) => axios.post('/api/save/saveBlog', form);

  export default {
    components: {
      quillEditor
    },
    data () {
      return {
        content: '',
        text: `&lt;p&gt;text1&lt;/p&gt;&lt;p&gt;&lt;br&gt;&lt;/p&gt;&lt;pre class=&quot;ql-syntax&quot; spellcheck=&quot;false&quot;&gt;&lt;span class=&quot;hljs-keyword&quot;&gt;var&lt;/span&gt; a = &lt;span class=&quot;hljs-number&quot;&gt;1&lt;/span&gt;;
﻿&lt;span class=&quot;hljs-function&quot;&gt;&lt;span class=&quot;hljs-keyword&quot;&gt;function&lt;/span&gt; &lt;span class=&quot;hljs-title&quot;&gt;a&lt;/span&gt;&lt;span class=&quot;hljs-params&quot;&gt;()&lt;/span&gt; &lt;/span&gt;{
  &lt;span class=&quot;hljs-keyword&quot;&gt;var&lt;/span&gt; b﻿ = &lt;span class=&quot;hljs-number&quot;&gt;1&lt;/span&gt;;
  b++;
}
&lt;/pre&gt;`.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&apos;/g, "'"),
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
      saveCommit () {
        const form = {
          // description: hljs.highlightAuto(this.content).value
          // .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;")
          description: this.content.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;")
        };
        console.log(this.text);
        saveBlog({ form }).then((result) => {
          debugger;
        });
      },
      onEditorChange ({ editor, html, text }) {
        this.nowLength = text.length;
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

