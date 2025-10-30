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
      p(`*红岩网校工作站 · 前端研发部干事 <small>（2025.8 - 至今）</small>* `),
      p(
        '- 红岩网校工作站是⼀个校级互联网开发团队，成立于2000年初，先后开发上线了"青年大学习"，“重邮小帮手”微信公众号，“重邮帮”微信小程序、“掌上重邮”APP等⼀系列优秀的校园网络产品。'
      ),
      p('- 参与校级产品 *"掌上重邮"、 "重邮帮"* 的维护迭代，服务全校师生日常使用。'),
      p('- 负责前端 Bug 修复和功能优化，保障产品稳定性和用户体验。'),
      p('- 在团队开发环境中实践前端工程化流程和协作规范，确保项目质量和开发效率。')

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
        '- *懂调试与性能优化。* 具备前端安全防护意识。'
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
      p(`**个人技术博客**`),
      p('*项目地址：* https://lavender695.github.io/Blogsite/'),
      p('*技术栈： Vue 3 + Vue Router + Pinia + Vite + Markdown*'),
      p('*功能介绍：*'),
      p('- 持续更新 React、Vue 相关内容，包括但不限于 *React Hooks*、*Vue Composition API* 等。'),
      p('- *部署运维*：使用 GitHub Pages 进行自动化部署，配置 GitHub Actions 实现 CI/CD 流水线'),
      p('- 搭建个人学习体系，形成持续学习与输出习惯。'),
      p('- 通过总结问题，提升抽象与优化思维。'),

      p(`**红岩网校官网** *（2025.8 - 至今）*`),
      p('*项目地址：* https://redrock.team/'),
      p('*技术栈：React + Typescript + Less + Gsap + Swiper* '),
      p('*项目介绍：* 红岩网校官网，是红岩网校的官方网站，负责展示红岩网校的活动、项目、成员等信息。'),
      p('- *协作开发*：遵循团队 Git 工作流，参与代码审查，保证代码质量和项目可维护性'),
      p('- 使用 *GSAP* 实现流畅的动画交互效果，提升用户体验。'),
      p('- 使用 *Swiper* 实现轮播图效果，展示活动动态。'),
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
