var app = new Vue({
    el:'#app',
    data:{
        Title : 'Things to do',
        tesk : '',
        time : '',
        todos:localStorage.getItem('mytodos')==null?[]:JSON.parse(localStorage.getItem('mytodos')),
    },
    methods : {
        addTodos() {
            this.todos.push({
                text : this.tesk,
                time : this.time,
                done : false
            });
            this.tesk = '';
            this.time = '';
            this.storeTodos();
        },
        removeTesk(index){
            this.todos.splice(index,1);
            this.storeTodos();
        },
        storeTodos(){
            localStorage.setItem('mytodos',JSON.stringify(this.todos));
        }
    },
    computed : {
        text(){
            if (this.todos.length==0) {
                return "There is no tesk in your todo list ."
            }
        },
    }
    
});