export default {
    seachResults(state) {
        if (!state.searchValue || state.searchValue.length === 0) {
            return state.todoList;
        }
        return state.todoList.filter((item) => item.title.includes(state.searchValue));
    },
    selectedTodo(state) {
        return state.selectedTodo || null;
    },
};
