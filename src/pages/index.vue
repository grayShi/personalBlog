<template>
  <div>
    <!-- quill-editor插件标签 分别绑定各个事件-->
    <quill-editor v-model="content" ref="myQuillEditor" :options="editorOption"
                  @change="onEditorChange($event)">
    </quill-editor>
    <div class="limit">当前已输入 <span>{{nowLength}}</span> 个字符，您还可以输入 <span>{{SurplusLength}}</span> 个字符。</div>
    <el-button type="primary" @click="saveCommit">提交</el-button>
  <div v-html="test">{{test}}</div>
    <div>
      <p>test1</p><p><br></p><pre class="ql-syntax" spellcheck="false"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">a</span> <span class="hljs-params">()</span> </span>{ <span class="hljs-keyword">var</span> b = <span class="hljs-number">1</span>; <span class="hljs-comment">/// aaa</span> }﻿ </pre>
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
        test: `&lt;span class=&quot;hljs-tag&quot;&gt;&amp;lt;&lt;span class=&quot;hljs-name&quot;&gt;p&lt;/span&gt;&amp;gt;&lt;/span&gt;test1&lt;span class=&quot;hljs-tag&quot;&gt;&amp;lt;/&lt;span class=&quot;hljs-name&quot;&gt;p&lt;/span&gt;&amp;gt;&lt;/span&gt;&lt;span class=&quot;hljs-tag&quot;&gt;&amp;lt;&lt;span class=&quot;hljs-name&quot;&gt;p&lt;/span&gt;&amp;gt;&lt;/span&gt;&lt;span class=&quot;hljs-tag&quot;&gt;&amp;lt;&lt;span class=&quot;hljs-name&quot;&gt;br&lt;/span&gt;&amp;gt;&lt;/span&gt;&lt;span class=&quot;hljs-tag&quot;&gt;&amp;lt;/&lt;span class=&quot;hljs-name&quot;&gt;p&lt;/span&gt;&amp;gt;&lt;/span&gt;&lt;span class=&quot;hljs-tag&quot;&gt;&amp;lt;&lt;span class=&quot;hljs-name&quot;&gt;pre&lt;/span&gt; &lt;span class=&quot;hljs-attr&quot;&gt;class&lt;/span&gt;=&lt;span class=&quot;hljs-string&quot;&gt;&quot;ql-syntax&quot;&lt;/span&gt; &lt;span class=&quot;hljs-attr&quot;&gt;spellcheck&lt;/span&gt;=&lt;span class=&quot;hljs-string&quot;&gt;&quot;false&quot;&lt;/span&gt;&amp;gt;&lt;/span&gt;&lt;span class=&quot;hljs-tag&quot;&gt;&amp;lt;&lt;span class=&quot;hljs-name&quot;&gt;span&lt;/span&gt; &lt;span class=&quot;hljs-attr&quot;&gt;class&lt;/span&gt;=&lt;span class=&quot;hljs-string&quot;&gt;&quot;hljs-function&quot;&lt;/span&gt;&amp;gt;&lt;/span&gt;&lt;span class=&quot;hljs-tag&quot;&gt;&amp;lt;&lt;span class=&quot;hljs-name&quot;&gt;span&lt;/span&gt; &lt;span class=&quot;hljs-attr&quot;&gt;class&lt;/span&gt;=&lt;span class=&quot;hljs-string&quot;&gt;&quot;hljs-keyword&quot;&lt;/span&gt;&amp;gt;&lt;/span&gt;function&lt;span class=&quot;hljs-tag&quot;&gt;&amp;lt;/&lt;span class=&quot;hljs-name&quot;&gt;span&lt;/span&gt;&amp;gt;&lt;/span&gt; &lt;span class=&quot;hljs-tag&quot;&gt;&amp;lt;&lt;span class=&quot;hljs-name&quot;&gt;span&lt;/span&gt; &lt;span class=&quot;hljs-attr&quot;&gt;class&lt;/span&gt;=&lt;span class=&quot;hljs-string&quot;&gt;&quot;hljs-title&quot;&lt;/span&gt;&amp;gt;&lt;/span&gt;a&lt;span class=&quot;hljs-tag&quot;&gt;&amp;lt;/&lt;span class=&quot;hljs-name&quot;&gt;span&lt;/span&gt;&amp;gt;&lt;/span&gt; &lt;span class=&quot;hljs-tag&quot;&gt;&amp;lt;&lt;span class=&quot;hljs-name&quot;&gt;span&lt;/span&gt; &lt;span class=&quot;hljs-attr&quot;&gt;class&lt;/span&gt;=&lt;span class=&quot;hljs-string&quot;&gt;&quot;hljs-params&quot;&lt;/span&gt;&amp;gt;&lt;/span&gt;()&lt;span class=&quot;hljs-tag&quot;&gt;&amp;lt;/&lt;span class=&quot;hljs-name&quot;&gt;span&lt;/span&gt;&amp;gt;&lt;/span&gt; &lt;span class=&quot;hljs-tag&quot;&gt;&amp;lt;/&lt;span class=&quot;hljs-name&quot;&gt;span&lt;/span&gt;&amp;gt;&lt;/span&gt;{
&lt;span class=&quot;hljs-tag&quot;&gt;&amp;lt;&lt;span class=&quot;hljs-name&quot;&gt;span&lt;/span&gt; &lt;span class=&quot;hljs-attr&quot;&gt;class&lt;/span&gt;=&lt;span class=&quot;hljs-string&quot;&gt;&quot;hljs-keyword&quot;&lt;/span&gt;&amp;gt;&lt;/span&gt;var&lt;span class=&quot;hljs-tag&quot;&gt;&amp;lt;/&lt;span class=&quot;hljs-name&quot;&gt;span&lt;/span&gt;&amp;gt;&lt;/span&gt; b = &lt;span class=&quot;hljs-tag&quot;&gt;&amp;lt;&lt;span class=&quot;hljs-name&quot;&gt;span&lt;/span&gt; &lt;span class=&quot;hljs-attr&quot;&gt;class&lt;/span&gt;=&lt;span class=&quot;hljs-string&quot;&gt;&quot;hljs-number&quot;&lt;/span&gt;&amp;gt;&lt;/span&gt;1&lt;span class=&quot;hljs-tag&quot;&gt;&amp;lt;/&lt;span class=&quot;hljs-name&quot;&gt;span&lt;/span&gt;&amp;gt;&lt;/span&gt;; &lt;span class=&quot;hljs-tag&quot;&gt;&amp;lt;&lt;span class=&quot;hljs-name&quot;&gt;span&lt;/span&gt; &lt;span class=&quot;hljs-attr&quot;&gt;class&lt;/span&gt;=&lt;span class=&quot;hljs-string&quot;&gt;&quot;hljs-comment&quot;&lt;/span&gt;&amp;gt;&lt;/span&gt;/// aaa&lt;span class=&quot;hljs-tag&quot;&gt;&amp;lt;/&lt;span class=&quot;hljs-name&quot;&gt;span&lt;/span&gt;&amp;gt;&lt;/span&gt;
}﻿
&lt;span class=&quot;hljs-tag&quot;&gt;&amp;lt;/&lt;span class=&quot;hljs-name&quot;&gt;pre&lt;/span&gt;&amp;gt;&lt;/span&gt;`.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&apos;/g, "'"),
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
          description: hljs.highlightAuto(this.content).value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;")
        };
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

