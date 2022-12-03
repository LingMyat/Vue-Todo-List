var app = new Vue({
    el:'#app',
    data:{
        Title : 'Things to do',
        tesk : '',
        time : '',
        todos:[],
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
        },
        removeTesk(index){
            this.todos.splice(index,1);
        },
    },
    computed : {
        text(){
            if (this.todos.length==0) {
                return "There is no tesk in your todo list ."
            }
        },
    }
    
});