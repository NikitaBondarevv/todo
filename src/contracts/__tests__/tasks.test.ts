import { request } from 'contracts/request'
import { createTask, deleteTask, getTaskById, updateTask } from 'contracts/tasks'

jest.mock('contracts/request', () => ({
  request: {
    get: jest.fn(),
    put: jest.fn(),
    delete: jest.fn(),
    post: jest.fn()
  }
}))

const data = {
  day: '1',
  id: '1',
  title: 'test-title'
}

const testUrl = `tasks/${data.id}`

describe('getTaskById', () => {
  test('should return data on request', () => {
    getTaskById(data.id)
    expect(request.get).toHaveBeenCalledWith(testUrl)
  })
})

describe('updateTask', () => {
  test('should update data on request "updateTask"', () => {
    updateTask(data)
    expect(request.put).toHaveBeenCalledWith(testUrl, data)
  })
})

describe('deleteTask', () => {
  test('should work delete on request', () => {
    deleteTask(data)
    expect(request.delete).toHaveBeenCalledWith(testUrl)
  })
})

describe('createTask', () => {
  test('should create data on request "createTask"', () => {
    createTask(data)
    expect(request.post).toHaveBeenCalledWith('tasks', data)
  })
})
