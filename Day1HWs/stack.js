class Stack {
    constructor() {
        this.elements = []
    }

    push(item) {
        this.elements.push(item)
    }

    check() {
        console.log(this.elements)
    }

    pop() {
        const isEmptyStack = this.elements.length < 1
        if (isEmptyStack) {
        console.log(`Stack is currently empty`)
        return
        }
        this.elements.pop() 
    }
  }
  
  const mystack = new Stack()
  mystack.push(`dude`)
  mystack.check()
  mystack.push(`pare`)
  mystack.check()
  mystack.push(`bro`)
  mystack.check()
  mystack.pop()
  mystack.check()
  mystack.pop()
  mystack.check()
  mystack.pop()
  mystack.check()
  mystack.pop()
  