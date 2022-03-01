import {  render } from '@testing-library/react'
import { describe , it, expect} from 'vitest'
import { addTodo , App, removeTodo, Todo, todos} from './App'

describe('addTodo', ()=> {
 it('add a new Todo and show all todos', ()=> {
     const todos: Todo[] = [
        {
            id: 1,
            title: 'Learn Node'
        },
        {
            id: 2,
            title: 'Learn Math'
        } 
     ]

     const expectedResult: Todo[]= [
        {
            id: 1,
            title: 'Learn Node'
        },
        {
            id: 2,
            title: 'Learn Math'
        },
        {
            id:3,
            title: 'New todo'
        }
     ]
     const result = addTodo(todos, 'New todo')
     expect(result).toMatchObject(expectedResult)
 })
})

describe('removeTodo', ()=> {
    it('remove a Todo from TodoList', () =>{
        const todos: Todo[] = [
            {
                id: 1,
                title: 'Learn Node'
            },
            {
                id: 2,
                title: 'Learn Math'
            },
            {
                id:3,
                title: 'New todo'
            }
        ]
        const expectedResult : Todo[]= [
            {
                id: 2,
                title: 'Learn Math'
            },
            {
                id:3,
                title: 'New todo'
            }
        ] 
        const result = removeTodo(todos, 1)
        expect(result).toMatchObject(expectedResult)
    }
)
it('return all todos if id doesn not exist', ()=>{
    const todos: Todo[] = [
        {
            id: 1,
            title: 'Learn Node'
        },
        {
            id: 2,
            title: 'Learn Math'
        },
        {
            id:3,
            title: 'New todo'
        }
    ]
    const expectedTodos = todos;
    const result = removeTodo(todos, 12)
    expect(result).toMatchObject(expectedTodos)
})
})

describe ('App', ()=> {
    it('add a new todo if Add Todo button is clicked', ()=> {
        render(<App />)
       
    })
})