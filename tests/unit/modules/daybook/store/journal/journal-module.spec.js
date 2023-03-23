import {createStore} from 'vuex'
import journal from '@/modules/daybook/store/journal'
import { journalState } from '../../../../../../tests/unit/mock-data/test-journal-state'





const createVuexStore = ( initialState) => 
    createStore({
        modules: {
            journal: {
                ...journal,
                state: { ...initialState }
            }
        }
    })




describe('Vuex - Pruebas en el Journal Module', () => {

    // Basicas
    test('este es el estado inicial, debe de tener este state', () => {

        const store = createVuexStore( journalState) 
        const {isLoading, entries } = store.state.journal

        expect( isLoading ).toBeFalsy(),
        expect( entries ).toEqual( journalState.entries)

    })
})