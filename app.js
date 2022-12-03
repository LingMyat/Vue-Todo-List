var app = new Vue({
    el:'#app',
    data:{
        Title : 'My Tasks',
        // name : localStorage.getItem('name')==null||localStorage.getItem('name')==""?'':localStorage.getItem('name'),
        name : [null,""].includes(localStorage.getItem('name'))?'':localStorage.getItem('name'),
        login : [null,""].includes(localStorage.getItem('name'))?false:true,
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
        addName(){
            this.storeName();
            this.login = true;
        },
        logout(){
            this.clearAll();
            this.name = [];
            this.storeName();
            this.login = false;
        },
        clearAll(){
            this.todos = [];
            this.storeTodos();
        },
        storeName(){
            localStorage.setItem('name',this.name);
        },
        storeTodos(){
            localStorage.setItem('mytodos',JSON.stringify(this.todos));
        },
        
    },
    computed : {
        text(){
            if (this.todos.length==0) {
                return "There is no tesk in your list ."
            }
        },
    }
    
});