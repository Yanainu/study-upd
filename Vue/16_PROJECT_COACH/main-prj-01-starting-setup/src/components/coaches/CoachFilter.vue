<template>
    <!-- стиль как у всех карточек base-card -->
    <base-card>
        <h2>Find Your Coach</h2>
        
        <!-- фильтры чекбоксы -->
        <span class="filter-options">
            <input type="checkbox" id="frontend" 
                checked 
                @change="setFilter">
            <label for="frontend">Frontend</label>
        </span>

        <span class="filter-options">
            <input type="checkbox" id="backend" 
                checked
                @change="setFilter">
            <label for="backend">Backend</label>
        </span>

        <span class="filter-options">
            <input type="checkbox" id="career" 
                checked
                @change="setFilter">
            <label for="career">Career</label>
        </span>
    
    </base-card>
</template>

<script>
    export default {
        emits: ['change-filter'],
        data() {
            return {
                filters: {
                    frontend: true,
                    backend: true,
                    career: true
                }
            }
        },
        methods: {
            //для смены фильтра-галочки
            setFilter(event) {
                //получаем айди инпута, куда кликнули
                const inputId = event.target.id;
                //активен он щас или нет
                const isActive = event.target.checked;
                //новый набор фильтров
                const updatedFilters = {
                    //так мы копируем содержимое filters{}
                    ...this.filters,
                    //и потом перезаписываем нужный фильтр
                    //id это frontend/back/career т.е. ключ
                    [inputId]: isActive,
                    //в итоге он станет в актуальное тру/фолс
                }

                //и перезаписываем фильтры в дате
                this.filters = updatedFilters;
                //эмитим эти фильтры для CoachList
                //событие change-event, передаем updatedFilters
                this.$emit('change-filter', updatedFilters)
            }
        }
    }
</script>

<style scoped>
h2 {
  margin: 0.5rem 0;
}

.filter-option {
  margin-right: 1rem;
}

.filter-option label,
.filter-option input {
  vertical-align: middle;
}

.filter-option label {
  margin-left: 0.25rem;
}

.filter-option.active label {
  font-weight: bold;
}
</style>