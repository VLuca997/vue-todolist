//CREATE APP VUE

const { createApp } = Vue;

const app = createApp({
    data(){
        return{
            toDoList: [
                {   
                    text: `Test1`,
                    done: false,
                },
                {
                    text:`Test2`,
                    done: true,
                },
            ],
            newToDo: ``,
        };
    },
    methods: {
        addToDo() {
            if(this.newToDo.trim() !== ``){// SE newToDo non è vuoto ( e con .trim anche se non è composto SOLO da spazi bianchi)
                this.toDoList.push({ // ALLORA aggiungo un nuovo elemento all' ARRAY toDoList
                    text :this.newToDo,
                    done:false,
                });
            }
            // ALTRIMENTI SVUOTA L'INPUT
                this.newToDo = ``;
            

        },
        removeTodo(index) { // METODO/ FINZIONE per rimozione di un ToDo
            this.toDoList.splice(index, 1);
        },
        toggleTodoDone(todo) {
            todo.done = !todo.done; // invertiamo il valore della proprieta "done" di "todo"
        },
    }
});
app.mount(`#app`);