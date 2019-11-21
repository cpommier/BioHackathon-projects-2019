const SET_RESULTS = 'SET_RESULTS';
const SET_QUERY = 'SET_QUERY';
const SET_EXPRESSIONS = 'SET_EXPRESSIONS';
const DELETE_SEARCH = 'DELETE_SEARCH'
const DELETE_ALL = 'DELETE_ALL';
const ADD_HAPPY = 'ADD_HAPPY';
const ADD_SAD = 'ADD_SAD';


function reducer(state, action) {
    switch (action.type) {
        case DELETE_ALL: {
            return {
                ...state,
                results: [],
                query: '',
                happyCount: 0,
                expressions: []
            }
        }
        case SET_RESULTS: {
            return {
                ...state,
                results: action.data
            }
        }
        case SET_QUERY: {
            return {
                ...state,
                query: action.data
            }
        }
        case SET_EXPRESSIONS: {
            return {
                ...state,
                expressions: action.data
            }
        }
        case DELETE_SEARCH: {
            return {
                ...state,
                results: [],
                query: ''
            }
        }

        case ADD_HAPPY: {
            console.log("ACTION", action.data)

            let happyElement = state.results.filter((ele)=>ele.id === action.data.id)

            let newHappy = [...state.happy, ...happyElement]
            let newResults = state.results.filter((ele)=>ele.id !== action.data.id)
            console.log('IN ADD HAPPY', happyElement, newHappy)
            return {
                ...state,
                happy: newHappy,
                results: newResults
            }
        }
        case ADD_SAD: {
            let sadElement = state.results.filter((ele)=>ele.id === action.data.id)
            let newSad = [...state.sad, sadElement]
            let newResults = state.results.filter((ele)=>ele.id !== action.data.id)
            return {
                ...state,
                sad: newSad,
                results: newResults
            }
        }


        default:
            return state
    }
}

export default reducer;
