/**
 * @desc 请求以命令的形式包裹在对象中，并传给调用对象。调用对象寻找可以处理该命令的合适的对象，并把该命令传给相应的对象，该对象执行命令
 * @author patric 2023.02.07
 */

class MacroCommand {
  commandList: any[]

  constructor() {
    this.commandList = []
  }

  public add(commnd: any) {
    this.commandList.push(commnd)
  }

  public execute() {
    for (const command of this.commandList) {
      command.execute()
    }
  }
}

const openWechat = {
  execute: () => {
    console.log('Open openWechat')
  },
}

const openChrome = {
  execute: () => {
    console.log('Open Chrome ')
  },
}

const openEmail = {
  execute: () => {
    console.log('Open Email')
  },
}

const command = new MacroCommand()

command.add(openWechat)
command.add(openChrome)
command.add(openEmail)

command.execute()

export default MacroCommand
