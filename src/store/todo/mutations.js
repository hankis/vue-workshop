export default {

    setTodoList(state, data) {
        state.todoList = data;
    },

    changeSearchValue(state, value) {
        state.searchValue = value;
    },

    addTodo(state) {
        state.todoList.push({
            id: state.todoList[state.todoList.length - 1].id + 5,
            title: '',
            completed: false,
        });
        state.selectedTodo = state.todoList[state.todoList.length - 1];
    },

    removeTodo(state, id) {
        state.todoList.forEach((el, i) => {
            if (el.id === id) {
                state.todoList.splice(i, 1);
            }
        });
    },

    selectTodo(state, item) {
        state.selectedTodo = item;
    },

    unselectTodo(state) {
        state.selectedTodo = null;
    },
};
