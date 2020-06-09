const initialState = {
    todos: [],
    errorMsg: ''
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_TODO':
            let value = action.value.trim();
            let flag = state.todos.find((val) => val === value);
            //TODO: this flag is having some bug
            //this checks if value is already present or not in the todo
            if (value !== "") {
                if (flag) {
                    return {
                        ...state,
                        errorMsg: 'Todo already exists'
                    };
                } else {
                    const newItem = {
                        id: Date.now(),
                        value,
                        isChecked: false,
                    };
                    return {
                        ...state,
                        todos: [newItem, ...state.todos],
                        errorMsg: ''
                    };
                }
            } else {
                return {
                    ...state,
                    errorMsg: 'Empty todos not allowed'
                };
            }
        case 'DEL_TODO':
            let todos = state.todos.filter(item => item.id !== action.id);
            return {
                ...state,
                todos,
                errorMsg: ''
            };
        case 'EDIT_CHECKED':
            //its required for having state management for checked or unchecked
            //and also for having one more route named Completed Todos
            let todos1 = [...state.todos];
            let index = todos1.findIndex((value) => {
                return value.id === action.id;
            });

            todos1[index].isChecked = !(action.checked);
            return {
                ...state,
                todos: [...todos1],
                errorMsg: ''
            };
        default:
            return state;
    }
}