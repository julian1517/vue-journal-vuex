
import { shallowMount } from "@vue/test-utils";
import Entry from "@/modules/daybook/components/Entry.vue";
import  journalState  from "../../../../../tests/unit/mock-data/test-journal-state";



describe('Pruebas en el Entry Component', () => {

    const mockRouter= {
        push: jest.fn()
    }

    const wrapper = shallowMount( Entry, {
        
        props: {
            entry: journalState.entries[0]
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
})