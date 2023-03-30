import {
    VueRouterMock,
    createRouterMock,
    injectRouterMock,
  } from 'vue-router-mock'
  import { config } from '@vue/test-utils'
  
  // create one router per test file
  const router = createRouterMock()
  beforeEach(() => {
    injectRouterMock(router)
  })
  
  // Add properties to the wrapper
  config.plugins.VueWrapper.install(VueRouterMock)


import { shallowMount } from "@vue/test-utils"

import Navbar from "@/modules/daybook/components/Navbar";
import createVuexStore from '../../../mock-data/mock-store';
describe('Pruebas en el Navbar component', () => {

    const store = createVuexStore({
        user: {
            name: 'Juan Carlos',
            email: 'juan@gmail.com'
        },
        status: 'authenticated',
        idToken: 'ABC',
        refreshToken: 'XYZ'
    })
    beforeEach(() => jest.clearAllMocks())

    test('debe de mostrar el componente correctamente', () => {
        const wrapper = shallowMount( Navbar, {
            global: {
                plugins: [ store ]
            }
        })
        expect(wrapper.html()).toMatchSnapshot()
    })

    test('click en el logout, debe de cerrar sesion y redireccionar', async() => {
        const wrapper = shallowMount( Navbar, {
            global: {
                plugins: [ store ]
            }
        })

        await wrapper.find('button').trigger('click')

        expect( wrapper.router.push).toHaveBeenCalledWith({ name: 'login'})

        expect( store.state.auth ).toEqual({
            user: null,
            status: 'not-authenticated',
            idToken: null,
            refreshToken: null
        })

    })
}) 