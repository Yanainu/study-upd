let timer;

export default {
    async login(context, payload) {
        //вызываем auth который ниже
        return context.dispatch('auth', {
            //копируем существующий Payload
            ...payload,
            //и добавляем еще mode
            mode: 'login'
        })
    },
    //создание юзера, без логина
    async signup(context,payload) {
        //вызываем auth который ниже
        return context.dispatch('auth', {
            //копируем существующий Payload
            ...payload,
            //и добавляем еще mode
            mode: 'signup'
        })
    },
    async auth(context, payload) {
        const mode = payload.mode;
        //url из логина
        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA4G1s2yc5354HoGcp87RMrlYOi_Dm6Tbs';
        //но если у нас режим sign up то мы заменяем на ссылку из signup
        if (mode === 'signup') {
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA4G1s2yc5354HoGcp87RMrlYOi_Dm6Tbs';
        }
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                email: payload.email,
                password: payload.password,
                returnSecureToken: true //это в доке написано
            })
        })

        const responseData = await response.json();
        if (!response.ok) {
            const error = new Error(responseData.message || 'Failed to auth');
            throw error;
        }

        //для отслеживания token expires
        const expiresIn = +responseData.expiresIn * 1000;//милисекунды
        const expirationDate = new Date().getTime() + expiresIn;

        //для сохранения данных в localStorage чтоб не терялись 
        //при обновлении стр
        localStorage.setItem('token', responseData.idToken);
        localStorage.setItem('userId', responseData.localId);
        localStorage.setItem('tokenExpiration', expirationDate);
        
        //таймер для разлогинивания 
        //expiresIn в качестве времени
        timer = setTimeout(function() {
            context.dispatch('autoLogout');
        }, expiresIn);

        //объект тут это то что в мутейшне мы буем юзать как Payload
        context.commit('setUser', {
            token: responseData.idToken,
            userId: responseData.localId,
        });
    },
    //проверка есть ли в LocalStorage пользователь и логин если да
    tryLogin(context) {
        //достаем их
        const token = localStorage.getItem('token');
        const userId = localStorage.getItem('userId');

        //достаем tokenExpiration для таймера
        const tokenExpiration = localStorage.getItem('tokenExpiration');
        //находим разницу между этим и текущим временем
        const expiresIn = +tokenExpiration - new Date().getTime();
        //если эта разница меньще 0сек то нет смысла логинить автоматом
        //пусть уже перелогинивается, его и так выбросит через 0 сек
        if (expiresIn < 0) {
            return;//код дальше не пойдет, автологин не случится
        }
        //если не попали в этот иф- ставим таймер
        timer = setTimeout(function() {
            context.dispatch('autoLogout');
        }, expiresIn)
        

        //проверка
        if (token && userId) {
            //вызываем то что нужно для логина(см выше)
            context.commit('setUser', {
                token: token,
                userId: userId,
            })
        }
    },
    logout(context) {
        //очищаем браузер
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        localStorage.removeItem('tokenExpiration');
        
        //сбрасываем таймер для токена
        clearTimeout(timer);

        //обнуляем пользователя
        context.commit('setUser', {
            token: null,
            userId: null,
            // tokenExpiration: null ТОЖЕ УДАЛЯЕМ
        })
    },
    autoLogout(context) {
        //вызываем обычныйлогаут
        context.dispatch('logout');
        //но еще вызываем мутейшн didLogout
        context.commit('setAutoLogout');
    }
}