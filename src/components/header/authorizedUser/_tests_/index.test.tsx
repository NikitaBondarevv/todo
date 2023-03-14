import { render } from '@testing-library/react'

import { AuthorizedUser } from '..'

jest.mock('components/header/authorizedUser', () => ({
  AuthorizedUser: () => <div />
}))

describe('<Header />', () => {
  test('should render div', () => {
    const { asFragment } = render(
      <AuthorizedUser />
    )

    expect(asFragment()).toMatchSnapshot()
  })
})
