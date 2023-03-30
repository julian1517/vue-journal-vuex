
import { shallowMount } from "@vue/test-utils";
import Entry from "@/modules/daybook/components/Entry.vue";






describe('Pruebas en el Entry Component', () => {

    const mockRouter= {
        push: jest.fn()
    }

    const wrapper = shallowMount( Entry, {
        
        props: {
            entry: {   
                id:'-NRAL-bBmcjhl9CIUFGd',
                date: 1679522515719,
                text: "hola mundo desde mock data"
        },
                
        },
        global: {
            mocks: {
                $router: mockRouter
            }
        }

    })


    test('debe de hacer match con el snapshot', () => {
        
        
        expect( wrapper.html()).toMatchSnapshot()
    
    })

    test('debe de redireccionar al hacer click en el entry-container', () => {
        const entryContainer = wrapper.find('.entry-container')
        entryContainer.trigger('click')
        
        expect( mockRouter.push).toHaveBeenCalledWith(
            {
                name:'entry',
                params: {
                    id:'-NRAL-bBmcjhl9CIUFGd'
                }

            }
        )
    
    })

    test('pruebas en las propiedades computadas', () => {
        
        
        expect(wrapper.vm.day).toBe(22)
        expect(wrapper.vm.month).toBe('Marzo')
        expect(wrapper.vm.yearDay).toBe('2023,Miércoles')
        
    
    })
})