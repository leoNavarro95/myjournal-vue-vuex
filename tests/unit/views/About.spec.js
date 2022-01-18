
import { shallowMount } from '@vue/test-utils'

import About from '@/views/About';

describe( ' About View component ', () => {

    test( ' Debe renderizarse correctamente --/match con el snapshot ', () => {
        const wrapper = shallowMount( About )

        expect( wrapper.html() ).toMatchSnapshot()
    })
    
})