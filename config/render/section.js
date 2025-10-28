/*
 * @Author: ManMan3392
 * @Date: 2025-10-27 20:28
 * @LastEditTime:2025-10-27 22:58
 * @Description: 优化版简历内容（突出特色与优势）
 * @FilePath: \resume\config\render\section.js
 */
const p = (left = '', right = '') => ({ left, right })
const h = (left = '', right = '') => ({ left: `#### ${left}`, right: `#### ${right}` })

export default [
  {
    title: '实践经历',
    content: [
      p(
        `**重庆邮电大学 · 红岩网校工作站** [Link](https://redrock.team)`,
        `2025.8 - 至今`
      ),
      p(
        `隶属校团委的学生互联网组织，成立于2000年，共有成员70余人，拥有 *PRD-UI-前后端开发-运营-迭代* 的完整开发流程。`
      ),
      p(`*红岩网校工作站 · 前端研发部副部长 <small>（2025.8 - 至今）</small>* `),
      p(
        `- 主导部门 *开发流程与协作规范优化*，完善新⼈须知、CI/CD 使用文档及协作规范；推动 *CI/CD*、*飞书*、*Figma* 等工具体系落地。`
      ),
    ],
  },
  {
    title: '个人能力',
    content: [
      p(
        `- *前端基础扎实。* 熟悉 *HTML5*、*CSS3*、*ES6+*、响应式布局，会基本的数据结构与算法。能使用 *Git* 进行版本控制和代码托管，能使用 *Markdown* 进行文档编撰。`
      ),
      p(
        '- *掌握 Typescript。* 能在中大型项目中使用 *TS* 进行类型设计与接口约束。'
      ),
      p(
        '- *熟悉 React 技术栈。* 能较为熟练地使用 *React Hooks*、*React Router*、*Context* 等特性开发组件。'
      ),
      p(
        '- *熟悉 Vue 技术栈。* 掌握 *Vue3* 核心原理，熟悉 *Vue Composition API* 与 *Vue Router*。'
      ),
      p(
        '- *具备工程化经验。* 能使用 *Vite* 搭建项目，配置 *ESLint、Prettier、husky、lint-staged、commitlint* 等工具实现自动化规范校验；编写过 *Webpack Loader/Plugin* 与 *Vite Plugin*。'
      ),
      p(
        '- *懂调试与性能优化。* 熟练使用 *Chrome DevTools / Performance* 进行性能分析、代理抓包、源码调试，具备前端安全防护意识。'
      ),
    ],
  },
  {
    title: '自我评价',
    content: [
      p('- 代码风格规范、注重可维护性，对自己的代码质量负责。'),
      p('- 热爱技术，常阅读前端社区、官方博客与开源项目，维护个人 [博客网站](https://lavender695.github.io/Blogsite/)。'),
      p('- 具备良好的团队沟通能力，能快速理解 PRD 并产出 DEMO 推动落地。'),
      p('- 学习能力强，能快速掌握新技术并应用到项目中。'),
    ],
  },
  {
    title: '项目经历',
    content: [
      p(`**zmyui（团队组件库）**`),
      p('*项目地址：* https://github.com/ManMan3392/team_monorepo'),
      p('*Storybook 文档：* https://zmyui.vercel.app'),
      p(
        '*项目介绍：* 自研组件库，用于统一代码与视觉规范，减少重复开发并提升团队开发效率，重点聚焦 *性能优化与组件体系设计*。'
      ),
      p('*功能介绍：*'),
      p('- 组件内容：覆盖 *Table、Form、Modal* 高频业务组件，集成 *Storybook* 文档体系。'),
      p('- 组件优化：'),
      p(
        '*Table 组件* 在 1w+ 数据场景下使用 *虚拟滚动 + 分页渲染* 优化性能。通过 *Chrome Performance Profiler* 对比：'
      ),
      p('- *首屏渲染时间* 从 *1.6s → 0.5s*（提升 *3倍*）'),
      p('- *JS Heap 内存* 从 *115MB → 70MB*（下降 *39%*）'),
      p('- *DOM 节点* 从 *14万 → 571*（下降 *99%*）'),
      p(
        '*TForm 组件* 基于 *React Context + 自定义 Hook* 实现轻量级表单系统，支持字段注册与双向绑定机制。'
      ),
      p('- 通过 *registerField* 订阅全局 store，仓库变更时仅局部刷新对应字段。'),
      p('- 支持 *受控/非受控* 模式，表单可外部注入实例控制。'),
      p('- 对比普通受控表单，动态输入 30+ 字段时渲染次数减少 *>90%*。'),
      p('- *Chrome Performance* 验证：JS 执行时间下降 *≈70%*，页面保持 *60+ FPS*。'),

      p(`**zmycli（团队提效命令行工具）**`),
      p('*项目地址：* https://github.com/ManMan3392/team_monorepo'),
      p(
        '*项目介绍：* 自研脚手架，能自动引入组件库 *zmyui*，内置模板与提交规范，帮助团队统一开发环境与规范。'
      ),
      p('*功能介绍：*'),
      p('- *自动导包：* 自研 *vite-zmyui-plugin* 实现组件按需自动引入。'),
      p('- *模板创建：* 内置多种模板与样式方案，用户可开箱即用创建项目。'),
      p('- *提交规范：* 自动生成 *Git 仓库*，接入 *husky + commitlint* 实现团队化提交流程。'),
    ],
  },
  // {
  //   title: '学习心得',
  //   content: [
  //     p('**个人技术博客**'),
  //     p('- 使用 *VitePress* 搭建的个人博客，用于记录学习笔记与技术思考。'),
  //     p('- 内容涵盖 *JavaScript 高级*、*浏览器原理*、*前端工程化* 等主题。'),
  //     p('- 搭建个人学习体系，形成持续学习与输出习惯。'),
  //   ],
  // },
]
