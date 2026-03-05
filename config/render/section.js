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
    title: '个人能力',
    content: [
      p('- *前端核心：* JavaScript(ES6+), TypeScript, React(Hooks, Context), Vue3(Components API)'),
      p('- *工程化与工具：* Vite, ESLint/Prettier, Git, CI/CD'),
      p('- *算法与竞赛：* CCF CSP 认证全国排名前*11.78%*'),
      p('- *其他：* 具备技术文档撰写习惯，维护个人技术博客。'),
    ],
  },
  {
    title: '实践经历',
    content: [
      p(
        `**重庆邮电大学 · 红岩网校工作站** [Link](https://redrock.team)`,
        `2025.8 - 至今`
      ),
      p(
        `拥有 *PRD-UI-前后端开发-运营-迭代* 完整开发流程的的学生互联网组织。`
      ),
      p(`*红岩网校工作站 · 前端研发部干事 <small>（2025.8 - 至今）</small>* `),
      p(
        '- 红岩网校工作站是⼀个校级互联网开发团队，成立于2000年初，先后开发上线了"青年大学习"，“重邮小帮手”微信公众号，“重邮帮”微信小程序、“掌上重邮”APP等⼀系列优秀的校园网络产品。'
      ),
      p('- 参与校级产品 *"掌上重邮"、 "重邮帮"* 的维护迭代，服务全校师生日常使用，理解了中大型前端项目的代码结构与工程规范，积累了在真实生产环境下协作的经验。'),
      p('- 在团队开发环境中实践前端工程化流程和协作规范，确保项目质量和开发效率。')
    ],
  },
  {
    title: '自我评价',
    content: [
      p('- 代码风格规范、注重可维护性，对自己的代码质量负责。'),
      p('- 热爱技术，常阅读前端社区、官方博客与开源项目，维护个人 [博客网站](https://lavender695.github.io/Blogsite/)，同时尝试在掘金等社区分享，其中一篇文章获得500+阅读。'),
      p('- 具备良好的团队沟通能力，能快速理解 PRD 并产出 DEMO 推动落地。'),
    ],
  },
  {
    title: '项目经历',
    content: [
      
      // p(`**红岩网校官网** *（2025.8 - 至今）*`),
      // p('*项目地址：* https://redrock.team/'),
      // p('*技术栈：React + Typescript + Less + Gsap + Swiper* '),
      // p('*项目介绍：* 红岩网校官网，是红岩网校的官方网站，负责展示红岩网校的活动、项目、成员等信息。'),
      // p('- *协作开发*：遵循团队 Git 工作流，参与代码审查，保证代码质量和项目可维护性'),
      // p('- 使用 *GSAP* 实现流畅的动画交互效果，提升用户体验。'),
      // p('- 使用 *Swiper* 实现轮播图效果，展示活动动态。'),
      
      p(`**在线笔记知识平台**（2025.11 - 2025.12）`),
      p('*项目地址：* https://github.com/Lavender695/Online-Note-Platform'),
      p('*技术栈： Next.js + TypeScript + Plate.js + Tailwind CSS + Supabase + 火山引擎 (AI SDK)*'),
      p('*项目介绍：* 一款集富文本编辑、AI 辅助功能、云端同步于一体的现代化个人知识库应用。'),
      p('*主要工作：*'),
      p('- *全栈独立开发：* 独立完成从前端、后端、数据库到部署的研发全过程。'),
      p('- *编辑器功能实现：* 基于 Plate.js 搭建富文本编辑器，实现了 Markdown 支持、文件上传、列表及列布局等基础编辑功能。'),
      p('- *集成 AI 助手：* 集成了智能续写、内容摘要及问答功能，辅助用户进行文本创作。'),
      p('- *数据储存与同步：* 实现了一套基于IndexedDB的本地数据缓存策略，在网络不稳定时优先读写本地，网络恢复后自动同步至Supabase，解决了弱网环境下的数据冲突问题。'),
      
      p(`**个人技术博客**（2025.10）`),
      p('*项目地址：* https://lavender695.github.io/Blogsite/'),
      p('*技术栈： Vue 3 + Vue Router + Pinia + Vite + Markdown*'),
      p('*功能介绍：*'),
      p('- 持续更新 React、Vue 相关内容，包括但不限于 *React Hooks*、*Vue Composition API* 等。'),
      p('- *部署运维*：使用 GitHub Pages 进行自动化部署，配置 GitHub Actions 实现 CI/CD 流水线'),
      p('- 搭建个人学习体系，形成持续学习与输出习惯。'),
      p('- 通过总结问题，提升抽象与优化思维。'),
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
