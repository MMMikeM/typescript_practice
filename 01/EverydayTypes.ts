const userName: string = 'Mike'
const hasLoggedIn: boolean = true

const num: number = 123
const regexer: RegExp = /\d+/
const letter: string[] = userName.split('')

const values: Array<number | string> = [1, 2, 3.142, 'Mike']

interface Person {
  name: string
  age: number
  hobbies: string[]
}

const person: Person = {
  name: 'Mike',
  age: 30,
  hobbies: ['Sports', 'Cooking']
}

const ids: Record<number, string> = {
  10: 'a',
  20: 'b',
  30: 'c'
}

// ctrl k, ctrl i to check inferred types "show hover"
const ids2 = {
  10: 'a',
  20: 'b',
  30: 'c',
  40: 1234
}

ids[40] = 'd'

if (ids[30] === 'F') {
  console.log('F')
}

;[1, 2, 3].forEach((num) => {
  console.log(num)
})
