export default {
    userId(state) {
        return state.userId;
    },
    token(state) {
        return state.token;
    },
    isAuthenticated(state) {
        //если у нас есть какой-то токен - мы авторизованы
        return !!state.token;
    },
    didAutoLogout(state) {
        state.didAutoLogout;
    }
}