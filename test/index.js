

import { assert, expect } from 'chai'
import {ERC20} from '../index.js'

describe('ERC20', () => {
    it('Responds with correct symbol', () => {
        var token = ERC20[1]["0x0000000000000000000000000000000000000000"].symbol
        expect(token).to.be.an('string').that.includes("ETH");
                       
    })
})