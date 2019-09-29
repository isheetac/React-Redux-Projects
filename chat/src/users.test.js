import users from './reducers/users'
import * as types from './constants/ActionTypes'

describe('Users reducer', () => {
    it('should handle ADD_USER and store every user', () => {
        expect(
            users([], {
                type: types.ADD_USER,
                name: 'Tom'
            })
        ).toEqual([
            {
                name: 'Tom'
            }
        ])

        expect(
            users(
                [
                    {
                        name: 'Brad'
                    }
                ],
                {
                    type:types.ADD_USER,
                    name:'Tom'
                }
            )
        ).toEqual([
            {
                name:'Brad'
            },
            {
                name:'Tom'
            }
        ])
    })
})