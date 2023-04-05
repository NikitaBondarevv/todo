import { request } from 'contracts/request'
import { createTask, deleteTask, getTaskById, updateTask } from 'contracts/tasks'
import { task } from '__mocks__/entities/task.mock'

jest.mock('contracts/request', () => ({
  request: {
    get: jest.fn(),
    put: jest.fn(),
    delete: jest.fn(),
    post: jest.fn()
  }
}))

const testUrl = `tasks/${task.id}`

describe('getTaskById', () => {
  test('should call "request.get" on "getTaskById"', () => {
    getTaskById(task.id)
    expect(request.get).toHaveBeenCalledWith(testUrl)
  })
})

describe('updateTask', () => {
  test('should call "request.put()" on "updateTask"', () => {
    updateTask(task)
    expect(request.put).toHaveBeenCalledWith(testUrl, task)
  })
})

describe('deleteTask', () => {
  test('should call the "request.delete" on "deleteTask"', () => {
    deleteTask(task)
    expect(request.delete).toHaveBeenCalledWith(testUrl)
  })
})

describe('createTask', () => {
  test('should call the "request.post" on "createTask"', () => {
    createTask(task)
    expect(request.post).toHaveBeenCalledWith('tasks', task)
  })
})
