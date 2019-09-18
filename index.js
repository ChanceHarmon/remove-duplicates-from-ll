'use strict'
const removeDuplicates = () => {
  let current = this.head;
  while (current) {
    let runner = current;
    while (runner) {
      if (runner.next.value === current.value) {
        runner.next = runner.next.next
      } else {
        runner = runner.next
      }
      current = current.next
    }
  }
}