var obj = {
    doSomeThing: function(name, age) {
        console.log(`Hello ${name} : ${age}`);
    }
};


obj.doSomeThing('Name01', 12);
obj.doSomeThing.call({}, 'Name02', 21);
obj.doSomeThing.apply({}, ['Name03', 23]);
