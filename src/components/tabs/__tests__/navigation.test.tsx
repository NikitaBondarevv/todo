import { fireEvent, render, screen } from '@testing-library/react'
import { Navigation } from '../navigation'

jest.mock('../../../helpers/constans', () => ({
  getDates: () => 'test date'
}))

describe('<Navigation />', () => {
  const titles = ['test1', 'test2']
  const setActiveTab = jest.fn();

  test('should match snapshot', () => {
    const { asFragment } = render(<Navigation titles={titles} activeTabIndex={0} setActiveTab={setActiveTab} />)

    expect(asFragment()).toMatchSnapshot()
  })

  test('should trigger click and show tab', () => {
    render(<Navigation titles={titles} activeTabIndex={0} setActiveTab={setActiveTab} />)
    const link = screen.getByText(titles[0])
    
    fireEvent.click(link)

    expect(setActiveTab).toHaveBeenCalledWith(0)
  })
})
