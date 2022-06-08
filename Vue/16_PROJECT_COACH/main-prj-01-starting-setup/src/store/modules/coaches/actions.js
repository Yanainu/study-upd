export default {
    //аргументы стандартные, мы заменили payload на слово data, 
    //это все тот же объект formData с кривыми ключами и мы его тут 
    //трансформируем чтобы ключи совпадали с остальными тренерами
    async registerCoach(context, data) {
        const userId = context.rootGetters.userId;
        const coachData = {
            firstName: data.first,
            lastName: data.last,
            description: data.desc,
            hourlyRate: data.rate,
            areas: data.areas,
        }
        //для авторизации
        const token = context.rootGetters.token;
        
        //связь с бэкендом. ссылка с firebase + /coaches (это как удобно можно обзывать) + .json
        const response = await fetch(`https://coaches-project-a4246-default-rtdb.europe-west1.firebasedatabase.app/coaches/${userId}.json?auth=${token}`, {
            //PUT значит что если инфа с этим айди уже пришла - 
            //она перезапишется. если еще не было - то просто сохранится
            method: 'PUT',
            //то, что передаем 
            body: JSON.stringify(coachData)
        })

        //const responseData = await response.json();

        if (!response.ok) {
            //error напишем позже
        }

        //вызываем mutation с именем registerCoach и аргументом делаем coachData
        //выше coachData
        context.commit('registerCoach', {
            //копируем содержимое coachData
            ...coachData,
            id: userId
        })
    },
    //загрузка коучей с бэка (payload убрали,т.к. не юзаем)
    async loadCoaches(context, payload) {
        //проверка должны ли мы делать fetch
        if (!payload.forceRefresh && !context.getters.shouldUpdate) {
            return;
        }//т.е. если не надо обновлять пока - то не продолжаем


        //отправляем запрос на тот же адрес, куда мы формы отсылали(выше)
        const response = await fetch(
            `https://coaches-project-a4246-default-rtdb.europe-west1.firebasedatabase.app/coaches.json`);
        //тут без 2го аргумента, т.к. мы забираем данные + убираем айди, нам все нужны
        const responseData = await response.json();
        //теперь когда мы получили данные 
        if (!response.ok) {
            //создаем ошибку
            const error = new Error(responseData.message || 'Failed to fetch!');
            //вбрасываем ее
            throw error;
        }
        //теперь мы можем делать коммит, но сначала надо 
        //привести к тому формату, который у нас  тут должен быть
        //с сервера мы получим один большой объект, а нам нужен
        //массив коучей
        const coaches = [];
        //проходимся циклом по полученным данным, где key это айди
        for (const key in responseData) {
            //responseData это объект со всеми коучами сразу
            //создаем объект каждого коуча
            const coach = {
                //response[key] это каждый коуч в бэке
                firstName: responseData[key].firstName,
                lastName: responseData[key].lastName,
                description: responseData[key].description,
                hourlyRate: responseData[key].hourlyRate,
                areas: responseData[key].areas,
                id: key
            };//с тем же форматом что у coachData выше
            //и каждого коуча складываем в массив
            coaches.push(coach)
        }
        //и теперь можно делать коммит - запуск mutationa setCoaches
        context.commit('setCoaches', coaches);
        //устанавливаем lastFetch, тут payload не нужен
        context.commit('setFetchTimestamp');
        
    }
    //и теперь этот loadCoaches экшн идем запускаем в CoachesList
};