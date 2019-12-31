'use strict';

module.exports = {

  types: [
    {
      value: 'WIP',
      name : '💪  WIP:      工作正在进行中 Work in progress'
    },
    {
      value: 'feat',
      name : '✨  feat:     新功能 A new feature'
    },
    {
      value: 'fix',
      name : '🐞  fix:      修复BUG A bug fix'
    },
    {
      value: 'refactor',
      name : '🛠  refactor: 没有修复错误也未添加功能的代码 A code change that neither fixes a bug nor adds a feature'
    },
    {
      value: 'docs',
      name : '📚  docs:     仅文档更改 Documentation only changes'
    },
    {
      value: 'test',
      name : '🏁  test:     添加缺失的测试或更正现有的测试 Add missing tests or correcting existing tests'
    },
    {
      value: 'chore',
      name : '🗯  chore:    不会修改src或测试文件的更改。例如更新构建任务，程序包管理器 Changes that don\'t modify src or test files. Such as updating build tasks, package manager'
    },
    {
      value: 'style',
      name : '💅  style:    代码样式，不影响代码含义的更改（空格，格式，缺少分号等） Code Style, Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)'
    },
    {
      value: 'revert',
      name : '⏪  revert:   提交回滚 Revert to a commit'
    }
  ],

  scopes: [],

  allowCustomScopes: true,
  allowBreakingChanges: ["feat", "fix"]
};