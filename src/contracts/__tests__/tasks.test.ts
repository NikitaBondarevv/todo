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
  test('should return data on request', () => {
    getTaskById(task.id)
    expect(request.get).toHaveBeenCalledWith(testUrl)
  })
})

describe('updateTask', () => {
  test('should update data on request "updateTask"', () => {
    updateTask(task)
    expect(request.put).toHaveBeenCalledWith(testUrl, task)
  })
})

describe('deleteTask', () => {
  test('should work delete on request', () => {
    deleteTask(task)
    expect(request.delete).toHaveBeenCalledWith(testUrl)
  })
})

describe('createTask', () => {
  test('should create data on request "createTask"', () => {
    createTask(task)
    expect(request.post).toHaveBeenCalledWith('tasks', task)
  })
})
