import React from 'react'
import Enzyme from 'enzyme'
import { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Message from './components/Message'

const setup = () => {
    const props = {
        author: 'Tom',
        message: 'Yeah'
    }
    Enzyme.configure({ adapter: new Adapter() })
    const enzymeWrapper = mount(<Message {...props} />)

    return{
        props,
        enzymeWrapper
    }
}

describe('Message', () => {
    it('should render self',() => {
        const {enzymeWrapper} = setup()
        expect(enzymeWrapper.fine('p').html()).toBe('<p><i>Tom:</i>:Yeah</p>')
    })
})