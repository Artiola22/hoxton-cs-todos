import {  render } from '@testing-library/react'
import { describe , it, expect} from 'vitest'
import { addTodo , App, removeTodo, todos} from './App'

describe('addTodo', ()=> {
 it('add a new Todo', ()=> {
     const result = addTodo(todos, 'New todo')
    expect(result).toMatchObject([
        {
            id: 1,
            title: 'Learn Node'
        },
        {
            id: 2,
            title: 'Learn Math'
        },
        {
            id: 3,
            title: 'New todo'
        }
    ])
 })
})

describe('removeTodo', ()=> {
    it('remove a Todo from TodoList', () =>{
        
    }
)})

describe ('App', ()=> {
    it('add a new todo if Add Todo button is clicked', ()=> {
        render(<App />)
       
    })
})